// Shared helpers for the TV and phone pages: DOM/text utilities, the API call wrapper,
// the brand mark, the line icon set (24px grid, 2px stroke) and the role texts.
(function () {
  window.$ = function (sel) {
    return document.querySelector(sel);
  };
  window.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[c];
    });
  };
  /** First letter of a name, for avatar circles. */
  window.initials = function (name) {
    return esc((name || '?').trim().charAt(0));
  };
  /** Milliseconds as m:ss, never negative. */
  window.fmt = function (ms) {
    var s = Math.ceil(Math.max(0, ms) / 1000);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  };
  var NETWORK_ERROR = {
    ok: false,
    error: 'تعذّر الاتصال'
  };
  /** GET JSON; network or parse failures resolve to {ok:false,error} instead of throwing. */
  window.getJson = function (url) {
    return fetch(url, {
      cache: 'no-store'
    }).then(function (r) {
      return r.json();
    }).catch(function (e) {
      console.warn('GET ' + url + ' failed', e);
      return NETWORK_ERROR;
    });
  };
  /** POST a form; always resolves to the server's {ok, error?, token?} envelope. */
  window.postForm = function (url, data) {
    var body = Object.keys(data).map(function (k) {
      return k + '=' + encodeURIComponent(data[k] == null ? '' : data[k]);
    }).join('&');
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    }).then(function (r) {
      return r.json();
    }).catch(function (e) {
      console.warn('POST ' + url + ' failed', e);
      return NETWORK_ERROR;
    });
  };

  // ---------------------------------------------------------------- game API
  // Local mode (the Android app on the room's Wi-Fi) talks to the app's own server. Online mode
  // ("ديوانية أونلاين", pages hosted on the web) talks to the Supabase function with a room code, and
  // polls the cheap public version row so the full view is only fetched when something changed.
  var ON = window.MAFIA_ONLINE || null;
  var store = {
    get: function get(k) {
      try {
        return localStorage.getItem(k);
      } catch (e) {
        return null;
      }
    },
    set: function set(k, v) {
      try {
        if (v == null) localStorage.removeItem(k);else localStorage.setItem(k, v);
      } catch (e) {}
    }
  };
  window.store = store;
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }
  function cleanCode(c) {
    return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  }
  // ?mode=… (from the app's chooser) asks for a new room; otherwise the last room is resumed
  var _room = ON ? cleanCode(param('r')) || (param('mode') ? '' : cleanCode(store.get('mafia_room'))) : '';
  var cache = {
    view: null,
    at: 0,
    lastFull: 0,
    dirty: true
  };
  function copy(o, extra) {
    var r = {},
      k;
    for (k in o) r[k] = o[k];
    for (k in extra || {}) r[k] = extra[k];
    return r;
  }
  /** Online: return the last full view (with a moved-on clock) unless the room changed or a timer ran out. */
  function smart(fetchFull) {
    var now = Date.now(),
      c = cache,
      s = c.view;
    function full() {
      return fetchFull().then(function (r) {
        if (r && r.ok !== false) {
          c.view = r;
          c.at = Date.now();
          c.lastFull = c.at;
          c.dirty = false;
        } else c.dirty = true;
        return r;
      });
    }
    if (!ON) return fetchFull();
    var serverNow = s ? s.now + (now - c.at) : 0;
    if (c.dirty || !s || s.endsAt && serverNow >= s.endsAt - 300 && now - c.lastFull > 1500 || (s.phase === 'lobby' || s.phase === 'nojoin') && now - c.lastFull > 3000 || now - c.lastFull > 15000) return full();
    return fetch(ON.rest + '/mafia_room_versions?select=v&code=eq.' + _room, {
      headers: {
        apikey: ON.key,
        Authorization: 'Bearer ' + ON.key
      },
      cache: 'no-store'
    }).then(function (r) {
      return r.json();
    }).then(function (rows) {
      return rows && rows.length && rows[0].v === s.v ? copy(s, {
        now: s.now + (Date.now() - c.at)
      }) : full();
    }).catch(function () {
      return full();
    });
  }
  function dirty(r) {
    cache.dirty = true;
    return r;
  }
  var hostKey = function hostKey() {
    return 'mafia_host_' + _room;
  };
  window.API = {
    online: !!ON,
    room: function room() {
      return _room;
    },
    setRoom: function setRoom(code) {
      _room = cleanCode(code);
      store.set('mafia_room', _room || null);
      cache = {
        view: null,
        at: 0,
        lastFull: 0,
        dirty: true
      };
      try {
        history.replaceState(null, '', location.pathname + (_room ? '?r=' + _room : ''));
      } catch (e) {}
    },
    isHost: function isHost() {
      return !ON || !!store.get(hostKey());
    },
    tokenKey: function tokenKey() {
      return ON ? 'mafia_t_' + _room : 'mafia_t';
    },
    joinUrl: function joinUrl(code) {
      return ON ? ON.pages + '?r=' + (code || _room) : '';
    },
    /** The mode asked for in the address (?mode=diwaniya|online), or ''. */
    askedMode: function askedMode() {
      if (!ON) return '';
      var m = param('mode');
      return m === 'diwaniya' || m === 'online' ? m : '';
    },
    create: function create(name, mode) {
      return postForm(ON.fn + '/create', {
        name: name,
        mode: mode
      }).then(function (r) {
        if (r.ok) {
          API.setRoom(r.code);
          store.set(hostKey(), r.host);
        }
        return r;
      });
    },
    tvState: function tvState() {
      return smart(function () {
        return ON ? getJson(ON.fn + '/state?code=' + _room + '&host=' + store.get(hostKey())) : getJson('/api/tv/state');
      });
    },
    tvAction: function tvAction(a, arg) {
      return (ON ? postForm(ON.fn + '/action', {
        code: _room,
        host: store.get(hostKey()),
        a: a,
        arg: arg
      }) : postForm('/api/tv/action', {
        a: a,
        arg: arg
      })).then(dirty);
    },
    me: function me(t) {
      if (ON && !_room) return Promise.resolve({
        phase: 'nojoin',
        canJoin: true,
        needRoom: true,
        v: 0
      });
      return smart(function () {
        return ON ? getJson(ON.fn + '/me?code=' + _room + '&t=' + encodeURIComponent(t || '')) : getJson('/api/me?t=' + encodeURIComponent(t || ''));
      });
    },
    join: function join(name, t) {
      return (ON ? postForm(ON.fn + '/join', {
        code: _room,
        name: name,
        t: t
      }) : postForm('/api/join', {
        name: name,
        t: t
      })).then(dirty);
    },
    /** Online only: a voice message (Blob) recorded during the discussion, {@code ms} long. */
    sendVoice: function sendVoice(t, blob, ms) {
      var type = (blob.type || 'audio/webm').split(';')[0];
      return fetch(ON.fn + '/voice?code=' + _room + '&t=' + encodeURIComponent(t || '') + '&ms=' + Math.round(ms), {
        method: 'POST',
        headers: {
          'Content-Type': type
        },
        body: blob
      }).then(function (r) {
        return r.json();
      }).catch(function (e) {
        console.warn('voice upload failed', e);
        return NETWORK_ERROR;
      }).then(dirty);
    },
    act: function act(t, a, target) {
      return (ON ? postForm(ON.fn + '/act', {
        code: _room,
        t: t,
        a: a,
        target: target
      }) : postForm('/api/act', {
        t: t,
        a: a,
        target: target
      })).then(dirty);
    }
  };
  var P = {
    mafia: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/>',
    detective: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    doctor: '<path d="M12 2.5 20 6v6c0 4.8-3.4 8.3-8 9.5-4.6-1.2-8-4.7-8-9.5V6z"/><path d="M12 8.5v6M9 11.5h6"/>',
    sniper: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
    spy: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3zM3 15a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"/>',
    mayor: '<path d="M3 18h18M4 18 3 7l5 4 4-6 4 6 5-4-1 11"/><path d="M5 21h14"/>',
    guard: '<path d="M12 2.5 20 6v6c0 4.8-3.4 8.3-8 9.5-4.6-1.2-8-4.7-8-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
    godfather: '<path d="M2 15h20"/><path d="M5 15c0-2 .5-6 2-8.5 1-1.6 2.5-.9 3.5-.4.9.4 2.1.4 3 0 1-.5 2.5-1.2 3.5.4 1.5 2.5 2 6.5 2 8.5"/><path d="M5.5 13h13"/><path d="M8 19a4 2 0 0 0 8 0"/>',
    villager: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    vote: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    skull: '<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.1 4.2 3 5.2V20h10v-3.8c1.9-1 3-2.6 3-5.2a8 8 0 0 0-8-8z"/><circle cx="9" cy="11.5" r="1.4"/><circle cx="15" cy="11.5" r="1.4"/><path d="M10.5 20v-2.5M13.5 20v-2.5"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M2 12s3.6-7 10-7c2 0 3.8.7 5.2 1.6M22 12s-3.6 7-10 7c-2 0-3.8-.7-5.2-1.6"/><path d="m3 3 18 18"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
    vol: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    mute: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/>',
    pause: '<path d="M7 4h3v16H7zM14 4h3v16h-3z" fill="currentColor" stroke="none"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    play: '<path d="M7 4v16l13-8z" fill="currentColor" stroke="none"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1"/><path d="M16 4.2a4 4 0 0 1 0 7.6M22 21v-1a6 6 0 0 0-4-5.6"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8" fill="currentColor"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    check: '<path d="M5 12.5 10 17.5 20 7"/>',
    skip: '<path d="M5 4l10 8-10 8z" fill="currentColor" stroke="none"/><path d="M19 5v14"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    gavel: '<path d="m14 13-7.5 7.5a2.1 2.1 0 0 1-3-3L11 10"/><path d="m16 16 6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11.5V4a1.5 1.5 0 0 1 3 0v7.5M14 11V5.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 9.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-1a7 7 0 0 1-5.6-2.8L3.6 15.4a1.6 1.6 0 0 1 2.5-2L8 15"/>'
  };
  window.icon = function (name, cls) {
    return '<svg class="i ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  };
  // Original brand mark: faceless figure in a fedora with a red band and tie.
  // Brand mark supplied by the owner (transparent PNG, ~466x516).
  window.LOGO = function (cls) {
    return '<img class="logo ' + (cls || '') + '" src="./logo.png?v=mwceprpu" alt="شعار المافيا" draggable="false">';
  };
  /** Roles on the mafia side (the godfather included). */
  window.isMafiaRole = function (r) {
    return r === 'mafia' || r === 'godfather';
  };
  // ---------------------------------------------------------------- discussion voice messages (online)
  // Players are Audio objects kept outside the page markup, so redrawing a screen never cuts a message off.
  var clips = {};
  function clip(v) {
    var a = clips[v.id];
    if (!a) {
      a = new Audio();
      a.preload = 'none';
      a.src = v.url;
      a.onended = a.onpause = a.onplay = function () {
        Voices.refresh();
      };
      clips[v.id] = a;
    }
    return a;
  }
  window.Voices = {
    /** Buttons for the current list ({id, name, ms, url}). */
    html: function html(list, cls) {
      return (list || []).map(function (v) {
        var a = clip(v),
          on = !a.paused;
        return '<button class="vbtn ' + (cls || '') + (on ? ' on' : '') + '" id="vb' + v.id + '" data-k="v' + v.id + '" onclick="Voices.toggle(' + v.id + ')">' + '<span class="vic">' + icon(on ? 'pause' : 'play') + '</span><span class="vnm">' + esc(v.name) + '</span>' + '<span class="vlen">' + fmt(v.ms) + '</span><i class="vbar" style="width:' + progress(a) + '%"></i></button>';
      }).join('');
    },
    toggle: function toggle(id) {
      var a = clips[id];
      if (!a) return;
      if (a.paused) {
        for (var k in clips) if (clips[k] !== a) clips[k].pause();
        var p = a.play();
        if (p && p.catch) p.catch(function (e) {
          console.warn('cannot play voice message', e);
        });
      } else a.pause();
      Voices.refresh();
    },
    /** Updates play/pause icons and progress bars in place. */
    refresh: function refresh() {
      for (var id in clips) {
        var b = document.getElementById('vb' + id);
        if (!b) continue;
        var a = clips[id],
          on = !a.paused;
        b.classList.toggle('on', on);
        b.querySelector('.vic').innerHTML = icon(on ? 'pause' : 'play');
        b.querySelector('.vbar').style.width = progress(a) + '%';
      }
    },
    /** Stops and forgets messages that are no longer listed (the discussion ended, or one was replaced). */
    prune: function prune(list) {
      var keep = {};
      (list || []).forEach(function (v) {
        keep[v.id] = true;
      });
      for (var id in clips) if (!keep[id]) {
        clips[id].pause();
        clips[id].removeAttribute('src');
        delete clips[id];
      }
    }
  };
  function progress(a) {
    return a.duration && isFinite(a.duration) ? Math.min(100, Math.round(a.currentTime * 100 / a.duration)) : 0;
  }
  window.ROLE_INFO = {
    mafia: {
      n: 'مافيا',
      team: 'الفريق الشرير',
      i: 'mafia',
      d: 'كل ليلة تختار مع زملائك ضحية. في النهار تظاهر أنك بريء ولا تنكشف.'
    },
    detective: {
      n: 'المحقق',
      team: 'من الأبرياء',
      i: 'detective',
      d: 'كل ليلة تحقق مع لاعب وتعرف هل هو مافيا. لا تكشف دورك بسهولة.'
    },
    doctor: {
      n: 'الطبيب',
      team: 'من الأبرياء',
      i: 'doctor',
      d: 'كل ليلة تحمي شخصاً من القتل، ممكن نفسك. لا تحمي نفس الشخص ليلتين متتاليتين.'
    },
    sniper: {
      n: 'القناص',
      team: 'من الأبرياء',
      i: 'sniper',
      d: 'معك رصاصة واحدة طول اللعبة. في أي ليلة تقدر تطلقها على من تشك فيه، أو تحتفظ بها. انتبه: لو أصبت بريئاً يموت.'
    },
    spy: {
      n: 'الجاسوس',
      team: 'من الأبرياء',
      i: 'spy',
      d: 'تتنصّت على المافيا: كل صباح يوصلك سراً من اختاروا يقتلونه الليلة، حتى لو أنقذه الطبيب.'
    },
    mayor: {
      n: 'العمدة',
      team: 'من الأبرياء',
      i: 'mayor',
      d: 'صوتك في التصويت النهائي يُحسب بصوتين. استخدم ثقلك بحكمة، ولا تكشف نفسك بسرعة.'
    },
    guard: {
      n: 'الحارس',
      team: 'من الأبرياء',
      i: 'guard',
      d: 'كل ليلة تحرس شخصاً غيرك. لو هاجمته المافيا تموت أنت بداله وهو ينجو.'
    },
    godfather: {
      n: 'العرّاب',
      team: 'رئيس المافيا',
      i: 'godfather',
      d: 'أنت من المافيا وتختار الضحية مع زملائك، لكن المحقق يشوفك بريئاً. ثقتهم فيك سلاحك.'
    },
    villager: {
      n: 'مواطن',
      team: 'من الأبرياء',
      i: 'villager',
      d: 'ما عندك قدرة ليلية. سلاحك النقاش والملاحظة والتصويت الذكي.'
    }
  };
})();