function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? i < 3 ? (i > 1 && (G.n = -1), l(i, u)) : G.n = u : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(e, i) { return _iterableToArrayLimit(e, i) || _unsupportedIterableToArray(e, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, t) { var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (Array.isArray(r) && (null == e || e === ("undefined" != typeof Symbol && [][Symbol.iterator]) || e === []["@@iterator"])) return r; if (null != e) { var l, n, i, a, u = [], o = !0, f = !1; try { if (i = (e = e.call(r)).next, 0 === t) { if (Object(e) !== e) return; o = !1; } else for (; !(o = (l = i.call(e)).done) && (u.push(l.value), u.length !== t); o = !0); } catch (r) { f = !0, n = r; } finally { try { if (!o && null != e.return && (a = e.return(), Object(a) !== a)) return; } finally { if (f) throw n; } } return u; } }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(e, t) { var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!_n) { if (Array.isArray(e) || (_n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) { _n && (e = _n); var o = 0, F = function F() {}; return { s: F, n: function n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var a, u, i = !0; return { s: function s() { _n = _n.call(e); }, n: function n() { i = !0; var r = _n.next(); return r.done ? { done: !0 } : { value: r.value, done: i = !1 }; }, e: function e(r) { a = !0, u = r; }, f: function f() { try { i || null == _n.return || _n.return(); } finally { if (a) throw u; } } }; }
function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var o = {}.toString.call(t).slice(8, -1); return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Narrator screen (runs in the app's WebView on the TV). Needs ui.js and rules.js.
var R = ROLE_INFO;
var S = null,
  lastV = -1,
  lastPhase = null,
  lastErr = '',
  clockOffset = 0,
  qrUrl = null,
  qrMarkup = '';
var sound = true;
try {
  sound = localStorage.getItem('sound') !== '0';
} catch (e) {}
$('#brandLogo').innerHTML = LOGO();
$('#rulesBtn').innerHTML = icon('book') + ' طريقة اللعب';
$('#rulesClose').innerHTML = icon('x') + ' رجوع';
$('#remoteHint').innerHTML = 'أسهم الريموت للتنقل · OK للاختيار';

// ---------------------------------------------------------------- narrator voice
// Narration is written in Kuwaiti dialect. The accent itself comes from the device's text-to-speech
// voice, so we pick the most Gulf one available: Kuwait first, then the other Gulf countries, then any Arabic.
var GULF = ['ar-KW', 'ar-SA', 'ar-AE', 'ar-QA', 'ar-BH', 'ar-OM'];
function gulfVoice() {
  try {
    var vs = speechSynthesis.getVoices().filter(function (v) {
      return /^ar/i.test(v.lang);
    });
    var norm = function norm(l) {
      return l.replace('_', '-').toLowerCase();
    };
    var _iterator = _createForOfIteratorHelper(GULF),
      _step;
    try {
      var _loop = function _loop() {
          var want = _step.value;
          var v = vs.find(function (x) {
            return norm(x.lang) === want.toLowerCase();
          });
          if (v) return {
            v: v
          };
        },
        _ret;
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return vs[0] || null;
  } catch (e) {
    return null;
  }
}
function speak(t) {
  if (!sound || !t) return;
  try {
    if (window.Narrator && Narrator.available()) {
      Narrator.speak(t);
      return;
    }
  } catch (e) {}
  try {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t),
        v = gulfVoice();
      u.lang = v ? v.lang : 'ar-KW';
      if (v) u.voice = v;
      u.rate = .95;
      speechSynthesis.speak(u);
    }
  } catch (e) {}
}
function updateSoundButton() {
  $('#soundBtn').innerHTML = icon(sound ? 'vol' : 'mute') + ' الراوي';
  $('#soundBtn').setAttribute('aria-pressed', sound);
}
$('#soundBtn').onclick = function () {
  sound = !sound;
  try {
    localStorage.setItem('sound', sound ? '1' : '0');
  } catch (e) {}
  ;
  updateSoundButton();
  if (!sound) Sfx.nightOff();else if (S && S.phase === 'night') Sfx.nightOn();
};
updateSoundButton();

// ---------------------------------------------------------------- sound effects (Web Audio, no files)
// Night ambience, the sniper's gunshot and a heartbeat for the last 10 seconds. They follow the narrator switch.
var Sfx = function () {
  var ctx = null,
    drone = null;
  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try {
        ctx = new C();
      } catch (e) {
        return null;
      }
    }
    if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
    return ctx;
  }
  function env(c, g, t, peak, attack, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }
  function noise(c, secs) {
    var b = c.createBuffer(1, Math.floor(c.sampleRate * secs), c.sampleRate),
      d = b.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    var src = c.createBufferSource();
    src.buffer = b;
    return src;
  }
  return {
    unlock: function unlock() {
      ac();
    },
    nightOn: function nightOn() {
      var c = sound && ac();
      if (!c || drone) return;
      var out = c.createGain();
      out.gain.setValueAtTime(0.0001, c.currentTime);
      out.gain.exponentialRampToValueAtTime(0.05, c.currentTime + 3);
      var lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 420;
      var oscs = [55, 82.4, 110.6].map(function (f, i) {
        var o = c.createOscillator();
        o.type = i ? 'sine' : 'triangle';
        o.frequency.value = f;
        var lfo = c.createOscillator(),
          lg = c.createGain();
        lfo.frequency.value = 0.07 + i * 0.05;
        lg.gain.value = 1.5;
        lfo.connect(lg);
        lg.connect(o.frequency);
        lfo.start();
        o.connect(lp);
        o.start();
        return [o, lfo];
      });
      lp.connect(out);
      out.connect(c.destination);
      drone = {
        out: out,
        oscs: oscs
      };
    },
    nightOff: function nightOff() {
      if (!drone || !ctx) return;
      var d = drone,
        t = ctx.currentTime;
      drone = null;
      d.out.gain.cancelScheduledValues(t);
      d.out.gain.setValueAtTime(Math.max(d.out.gain.value, 0.0001), t);
      d.out.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
      setTimeout(function () {
        return d.oscs.forEach(function (p) {
          try {
            p[0].stop();
            p[1].stop();
          } catch (e) {}
        });
      }, 1700);
    },
    gunshot: function gunshot() {
      var c = sound && ac();
      if (!c) return;
      var t = c.currentTime + 0.05,
        n = noise(c, 1.2),
        g = c.createGain(),
        lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(5000, t);
      lp.frequency.exponentialRampToValueAtTime(300, t + 0.9);
      env(c, g, t, 0.9, 0.004, 1.0);
      n.connect(lp);
      lp.connect(g);
      g.connect(c.destination);
      n.start(t);
      n.stop(t + 1.2);
      var o = c.createOscillator(),
        og = c.createGain();
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(40, t + 0.3);
      env(c, og, t, 0.8, 0.003, 0.35);
      o.connect(og);
      og.connect(c.destination);
      o.start(t);
      o.stop(t + 0.5);
    },
    heartbeat: function heartbeat() {
      var c = sound && ac();
      if (!c) return;
      [0, 0.22].forEach(function (dt, i) {
        var t = c.currentTime + dt,
          o = c.createOscillator(),
          g = c.createGain();
        o.frequency.setValueAtTime(i ? 52 : 62, t);
        o.frequency.exponentialRampToValueAtTime(38, t + 0.15);
        env(c, g, t, i ? 0.45 : 0.7, 0.01, 0.18);
        o.connect(g);
        g.connect(c.destination);
        o.start(t);
        o.stop(t + 0.3);
      });
    }
  };
}();
['keydown', 'click', 'touchstart'].forEach(function (ev) {
  return document.addEventListener(ev, function () {
    return Sfx.unlock();
  }, true);
});
function narrate(s) {
  var p = s.phase,
    and = function and(names) {
      return names.join(' و ');
    };
  if (p === 'reveal') speak('توزّعت الأدوار. كل واحد يشوف دوره بجواله بالسر، ويدوس جاهز.');else if (p === 'night') speak('الليلة رقم ' + s.round + '. الديرة نامت. كل واحد ياخذ جواله ويسوي اللي عليه بدون حس.');else if (p === 'morning') {
    var names = ((s.morning || {}).victims || []).map(function (v) {
      return v.name;
    });
    if (names.length) speak('صباح الخير يا جماعة. للأسف، لقينا ' + and(names) + (names.length > 1 ? ' مقتولين.' : ' مقتول.'));else speak('صباح الخير يا جماعة. الليلة عدّت على خير، ومحد انقتل.');
  } else if (p === 'discuss') speak('يلا، بدا وقت النقاش. منو شاكّين فيه؟');else if (p === 'accuse') speak('خلص النقاش. كل واحد يتهم واحد من جواله. اللي ياخذ اتهامين أو أكثر يدخل المحاكمة.');else if (p === 'defense') speak('على المحاكمة: ' + and((s.candidates || []).map(function (c) {
    return c.name;
  })) + '. عندكم ثلاثين ثانية تدافعون عن روحكم.');else if (p === 'vote') speak((s.candidates || []).length ? 'خلص الدفاع. صوّتوا الحين بين المتهمين.' : 'خلص النقاش. صوّتوا الحين من جوالاتكم.');else if (p === 'lastWords') speak('الديرة حكمت على ' + (s.lastWords || {}).name + '. عندك عشرين ثانية، قول كلمتك الأخيرة.');else if (p === 'verdict') {
    var v = s.verdict || {};
    if (v.executed > 0) speak('انعدم ' + v.executedName + '. وطلع دوره: ' + R[v.executedRole].n);else if (v.noTrial) speak('محد خذا اتهامين. ماكو محاكمة اليوم.');else speak(v.tie ? 'الأصوات تعادلت، ومحد انعدم اليوم.' : 'الديرة قررت ما تعدم أحد اليوم.');
  } else if (p === 'over') speak(s.winner === 'joker' ? 'خلصت اللعبة. عدمتوا الجوكر… وهذا اللي يبيه بالضبط! الجوكر فاز بروحه.' : s.winner === 'mafia' ? 'خلصت اللعبة. المافيا فازت!' : 'خلصت اللعبة. الأبرياء فازوا، وخلصنا من المافيا!');
}

// ---------------------------------------------------------------- rules overlay
var rulesOpen = false,
  rulesReturn = null;
$('#rulesIn').innerHTML = rulesHtml();
function showRules() {
  rulesReturn = document.activeElement;
  rulesOpen = true;
  $('#rulesOv').classList.remove('hidden');
  $('#rulesClose').focus();
}
function hideRules() {
  rulesOpen = false;
  $('#rulesOv').classList.add('hidden');
  render.sig = null;
  lastV = -1;
  poll();
  if (rulesReturn && document.body.contains(rulesReturn)) rulesReturn.focus();
}
$('#rulesBtn').onclick = showRules;
$('#rulesClose').onclick = hideRules;
window.onBackKey = function () {
  if (rulesOpen) {
    hideRules();
    return true;
  }
  return false;
};

// ---------------------------------------------------------------- api
function action(_x, _x2) {
  return _action.apply(this, arguments);
} // ---------------------------------------------------------------- helpers
function _action() {
  _action = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(a, arg) {
    var j;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return API.tvAction(a, arg);
        case 1:
          j = _context.v;
          lastErr = j.error || '';
          lastV = -1;
          poll();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _action.apply(this, arguments);
}
var roleTag = function roleTag(r) {
  return r ? "<span class=\"tag ".concat(r, "\">").concat(icon(R[r].i)).concat(R[r].n, "</span>") : '';
};
function playerTile(p, extra) {
  var st = !p.alive ? "<span class=\"st\">".concat(icon('skull'), "</span>") : extra === 'done' ? "<span class=\"st\">".concat(icon('check'), "</span>") : '';
  return "<div class=\"ptile ".concat(p.alive ? '' : 'dead', " ").concat(extra || '', "\"><span class=\"av\">").concat(initials(p.name), "</span><span class=\"nm\">").concat(esc(p.name), "</span>").concat(roleTag(p.role)).concat(st, "</div>");
}
function qrSvg(url) {
  if (url === qrUrl) return qrMarkup;
  qrUrl = url;
  try {
    var q = qrcode(0, 'M');
    q.addData(url);
    q.make();
    qrMarkup = q.createSvgTag({
      cellSize: 8,
      margin: 0,
      scalable: true
    });
  } catch (e) {
    console.warn('QR code failed', e);
    qrMarkup = '';
  }
  return qrMarkup;
}
function actionButton(k, label, ic, onclick, cls, extra) {
  return "<button class=\"btn ".concat(cls || '', "\" data-k=\"").concat(k, "\" onclick=\"").concat(onclick, "\" ").concat(extra || '', ">").concat(ic ? icon(ic) : '').concat(label, "</button>");
}
function stage(o) {
  return "<div class=\"stage anim\">\n    ".concat(o.orb ? "<div class=\"orb ".concat(o.orbCls || '', "\">").concat(icon(o.orb), "</div>") : '', "\n    ").concat(o.kicker ? "<span class=\"kicker\">".concat(o.kicker, "</span>") : '', "\n    ").concat(o.body || '', "\n    ").concat(o.actions ? "<div class=\"actions\">".concat(o.actions, "</div>") : '', "\n  </div>");
}

// ---------------------------------------------------------------- screens
function screenLobby(s) {
  var st = s.settings,
    n = s.players.length;
  var join = s.room ? "<div class=\"head\">".concat(icon('users'), " ").concat(s.room.name ? esc(s.room.name) : 'ديوانية أونلاين', "</div>\n       <div class=\"body\"><div class=\"qr\">").concat(qrSvg(s.url), "</div>\n       <div class=\"code\"><small>\u0643\u0648\u062F \u0627\u0644\u062F\u064A\u0648\u0627\u0646\u064A\u0629</small><b>").concat(esc(s.room.code), "</b></div>\n       ").concat(actionButton('share', 'أرسل الرابط بالواتساب', 'share', 'shareRoom()', 'sm wa'), "\n       <div class=\"hint\">").concat(icon('globe'), "<span>\u0643\u0644 \u0648\u0627\u062D\u062F \u0645\u0646 \u0628\u064A\u062A\u0647: \u064A\u0645\u0633\u062D \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0623\u0648 \u064A\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637\u060C \u0648\u062A\u0633\u0648\u0644\u0641\u0648\u0646 \u0639\u0644\u0649 \u0645\u0643\u0627\u0644\u0645\u0629 \u0648\u0627\u062A\u0633\u0627\u0628 \u0623\u0648 \u0632\u0648\u0645.</span></div></div>") : s.url ? "<div class=\"head\">".concat(icon('users'), " \u0627\u0645\u0633\u062D \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645</div>\n       <div class=\"body\"><div class=\"qr\">").concat(qrSvg(s.url), "</div><div class=\"url\">").concat(esc(s.url), "</div>\n       <div class=\"hint\">").concat(icon('wifi'), "<span>\u0627\u0644\u062C\u0648\u0627\u0644 \u0644\u0627\u0632\u0645 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0634\u0628\u0643\u0629 \u0627\u0644\u0648\u0627\u064A \u0641\u0627\u064A (\u0646\u0641\u0633 \u0627\u0644\u0631\u0627\u0648\u062A\u0631).</span></div></div>") : "<div class=\"head\">".concat(icon('wifi'), " \u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u062A\u0635\u0627\u0644</div><div class=\"noip\">").concat(icon('wifi'), "\u0627\u0644\u062C\u0647\u0627\u0632 \u063A\u064A\u0631 \u0645\u062A\u0635\u0644 \u0628\u0634\u0628\u0643\u0629 \u0648\u0627\u064A \u0641\u0627\u064A.<br>\u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0631\u0627\u0648\u062A\u0631 \u0648\u0627\u0646\u062A\u0638\u0631 \u0644\u062D\u0638\u0627\u062A.</div>");
  var players = n ? s.players.map(function (p) {
    return "<div class=\"tile\"><span class=\"".concat(p.online ? 'on' : 'off', "\" title=\"").concat(p.online ? 'متصل' : 'غير متصل', "\"></span><span class=\"nm\">").concat(esc(p.name), "</span>\n      <button class=\"kick\" data-k=\"kick").concat(p.id, "\" onclick=\"action('kick',").concat(p.id, ")\" aria-label=\"\u0625\u062E\u0631\u0627\u062C ").concat(esc(p.name), "\">").concat(icon('x'), "</button></div>");
  }).join('') : "<div class=\"empty\">".concat(icon('users'), "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646\u2026 \u0627\u0645\u0633\u062D\u0648\u0627 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0645\u0646 \u062C\u0648\u0627\u0644\u0627\u062A\u0643\u0645</div>");
  var need = Math.max(0, st.minPlayers - n);
  var sw = function sw(k, on, label, a) {
    return "<button class=\"sw ".concat(on ? 'on' : '', "\" data-k=\"").concat(k, "\" onclick=\"action('").concat(a, "')\" role=\"switch\" aria-checked=\"").concat(on, "\" aria-label=\"").concat(label, "\"><i></i></button>");
  };
  return "<div class=\"lobby anim\">\n    <div class=\"join\">".concat(join, "</div>\n    <div class=\"panel\">\n      <div class=\"ptitle\"><h2>\u0627\u0644\u0644\u0627\u0639\u0628\u0648\u0646</h2><span class=\"badge\">").concat(n, "</span></div>\n      <div class=\"grid\">").concat(players, "</div>\n      <div class=\"settings\">\n        <div class=\"set wide\"><span class=\"lbl\">").concat(icon('mafia'), " \u0639\u062F\u062F \u0627\u0644\u0645\u0627\u0641\u064A\u0627</span>\n          <div class=\"stepper\">").concat(actionButton('m-', '', 'minus', "action('mafia',-1)", 'sm icon', 'aria-label="إنقاص"'), "<b>").concat(st.mafia, "</b>").concat(actionButton('m+', '', 'plus', "action('mafia',1)", 'sm icon', 'aria-label="زيادة"'), "</div></div>\n        <div class=\"set wide\"><span class=\"lbl\">").concat(icon('clock'), " \u0648\u0642\u062A \u0627\u0644\u0646\u0642\u0627\u0634</span>\n          <div class=\"stepper\">").concat(actionButton('t-', '', 'minus', "action('time',-30)", 'sm icon', 'aria-label="إنقاص"'), "<b>").concat(fmt(st.discussSec * 1000), "</b>").concat(actionButton('t+', '', 'plus', "action('time',30)", 'sm icon', 'aria-label="زيادة"'), "</div></div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('refresh'), " 40%</span>").concat(sw('mauto', st.mafiaAuto, 'مافيا تلقائية', 'mafiaAuto'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('detective'), " \u0627\u0644\u0645\u062D\u0642\u0642</span>").concat(sw('det', st.detective, 'المحقق', 'detective'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('doctor'), " \u0627\u0644\u0637\u0628\u064A\u0628</span>").concat(sw('doc', st.doctor, 'الطبيب', 'doctor'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('sniper'), " \u0627\u0644\u0642\u0646\u0627\u0635</span>").concat(sw('sni', st.sniper, 'القناص', 'sniper'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('spy'), " \u0627\u0644\u062C\u0627\u0633\u0648\u0633</span>").concat(sw('spy', st.spy, 'الجاسوس', 'spy'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('mayor'), " \u0627\u0644\u0639\u0645\u062F\u0629</span>").concat(sw('may', st.mayor, 'العمدة', 'mayor'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('godfather'), " \u0627\u0644\u0639\u0631\u0651\u0627\u0628</span>").concat(sw('gf', st.godfather, 'العرّاب', 'godfather'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('joker'), " \u0627\u0644\u062C\u0648\u0643\u0631</span>").concat(sw('jok', st.joker, 'الجوكر', 'joker'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('guard'), " \u0627\u0644\u062D\u0627\u0631\u0633</span>").concat(sw('grd', st.guard, 'الحارس', 'guard'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('gavel'), " \u0645\u062D\u0627\u0643\u0645\u0629</span>").concat(sw('two', st.twoStage, 'التصويت على مرحلتين', 'twoStage'), "</div>\n        <div class=\"set\"><span class=\"lbl\">").concat(icon('eye'), " \u0643\u0634\u0641 \u0627\u0644\u062F\u0648\u0631</span>").concat(sw('rev', st.revealNight, 'كشف دور القتيل', 'revealNight'), "</div>\n      </div>\n      ").concat(need ? '' : "<div class=\"deck\">".concat(deckLine(st.deck), "</div>"), "\n      <div class=\"cta\">\n        ").concat(actionButton('start', 'ابدأ اللعبة', 'play', "action('start')", 'primary', (need ? 'disabled' : '') + ' data-default'), "\n        ").concat(actionButton('rules2', 'طريقة اللعب', 'book', 'showRules()', 'ghost'), "\n        <span class=\"note\">").concat(need ? 'تحتاجون ' + need + ' لاعبين إضافيين على الأقل' : st.mafia + ' مافيا ضد ' + (n - st.mafia), "</span>\n        <span class=\"err\">").concat(esc(lastErr), "</span>\n      </div>\n    </div></div>");
}

/** The cards the next game deals, as "3 مافيا · المحقق · …", so the host sees which roles fit. */
function deckLine(deck) {
  var counts = {};
  (deck || []).forEach(function (r) {
    counts[r] = (counts[r] || 0) + 1;
  });
  return Object.keys(counts).map(function (r) {
    return "<span class=\"tag ".concat(isMafiaRole(r) ? 'mafia' : '', "\">").concat(icon(R[r].i)).concat(counts[r] > 1 ? counts[r] + ' ' : '').concat(R[r].n, "</span>");
  }).join(' ');
}
function shareRoom() {
  var s = S || {},
    url = s.url || API.joinUrl();
  var text = 'تعال العب مافيا معنا' + (s.room && s.room.name ? ' في ' + s.room.name : '') + ' 🕵️\nكود الديوانية: ' + API.room() + '\n' + url;
  try {
    if (navigator.share) {
      navigator.share({
        text: text
      }).catch(function () {});
      return;
    }
  } catch (e) {}
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
}

/** Online, before a room exists (or after it expired): name the diwaniya and create it. */
function screenCreate(msg) {
  var saved = store.get('mafia_room_name') || '';
  return "<div class=\"stage anim create\">".concat(LOGO('big'), "\n    <span class=\"kicker\">").concat(icon('globe'), " \u062F\u064A\u0648\u0627\u0646\u064A\u0629 \u0623\u0648\u0646\u0644\u0627\u064A\u0646</span>\n    <div class=\"huge\">\u0623\u0646\u0634\u0626 \u062F\u064A\u0648\u0627\u0646\u064A\u062A\u0643</div>\n    <div class=\"lead\">\u0643\u0644 \u0648\u0627\u062D\u062F \u064A\u0644\u0639\u0628 \u0645\u0646 \u0628\u064A\u062A\u0647 \u0628\u062C\u0648\u0627\u0644\u0647. \u0623\u0646\u062A \u0627\u0644\u0631\u0627\u0648\u064A: \u0627\u0639\u0631\u0636 \u0647\u0627\u0644\u0634\u0627\u0634\u0629 \u0623\u0648 \u0634\u0627\u0631\u0643\u0647\u0627 \u0641\u064A \u0627\u0644\u0645\u0643\u0627\u0644\u0645\u0629.</div>\n    <input class=\"input\" id=\"roomName\" maxlength=\"30\" placeholder=\"\u0627\u0633\u0645 \u0627\u0644\u062F\u064A\u0648\u0627\u0646\u064A\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)\" value=\"").concat(esc(saved), "\" onkeydown=\"if(event.key==='Enter')createRoom()\">\n    <div class=\"actions\">").concat(actionButton('create', 'أنشئ الديوانية', 'play', 'createRoom()', 'primary', 'data-default'), "</div>\n    <div class=\"err\">").concat(esc(msg || ''), "</div></div>");
}
function createRoom() {
  return _createRoom.apply(this, arguments);
}
function _createRoom() {
  _createRoom = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var name, r;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          name = (($('#roomName') || {}).value || '').trim();
          store.set('mafia_room_name', name);
          $('#main').querySelector('.err').textContent = 'جاري الإنشاء…';
          _context2.n = 1;
          return API.create(name);
        case 1:
          r = _context2.v;
          if (r.ok) {
            _context2.n = 2;
            break;
          }
          $('#main').innerHTML = screenCreate(r.error || 'تعذّر الاتصال');
          return _context2.a(2);
        case 2:
          lastV = -1;
          render.sig = null;
          lastPhase = null;
          poll();
        case 3:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _createRoom.apply(this, arguments);
}
function showCreate(msg) {
  S = null;
  $('#statusTxt').textContent = 'ديوانية أونلاين';
  $('#foot').innerHTML = '';
  if (!$('#roomName')) {
    $('#main').innerHTML = screenCreate(msg);
    var b = document.querySelector('[data-default]');
    if (b) b.focus();
  }
}
function screenReveal(s) {
  return stage({
    orb: 'lock',
    orbCls: 'red',
    kicker: 'تم توزيع الأدوار سراً',
    body: "<div class=\"huge\">\u0634\u0648\u0641\u0648\u0627 \u0623\u062F\u0648\u0627\u0631\u0643\u0645 \u0641\u064A \u062C\u0648\u0627\u0644\u0627\u062A\u0643\u0645</div>\n      <div class=\"lead\">\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0634\u0639\u0627\u0631 \u0641\u064A \u062C\u0648\u0627\u0644\u0643 \u0648\u0627\u0642\u0631\u0623 \u062F\u0648\u0631\u0643 \u0628\u062F\u0648\u0646 \u0645\u0627 \u0623\u062D\u062F \u064A\u0634\u0648\u0641\u060C \u062B\u0645 \u0627\u0636\u063A\u0637 \xAB\u062C\u0627\u0647\u0632\xBB. \u062A\u0628\u062F\u0623 \u0627\u0644\u0644\u064A\u0644\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0639\u0646\u062F\u0645\u0627 \u064A\u062C\u0647\u0632 \u0627\u0644\u062C\u0645\u064A\u0639.</div>\n      <div class=\"grid wide\">".concat(s.players.map(function (p) {
      return playerTile({
        name: p.name,
        alive: true
      }, p.ready ? 'done' : '');
    }).join(''), "</div>"),
    actions: actionButton('next', 'ابدأ الليل الآن', 'skip', "action('next')")
  });
}
function screenNight(s) {
  var pr = s.progress,
    pct = pr.total ? Math.round(pr.done * 100 / pr.total) : 0;
  return stage({
    orb: 'moon',
    orbCls: 'white',
    kicker: 'الليلة ' + s.round,
    body: "<div class=\"huge\">\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0646\u0627\u0626\u0645\u0629\u2026</div>\n      <div class=\"lead\">\u0643\u0644 \u0644\u0627\u0639\u0628 \u062D\u064A \u064A\u0646\u0641\u0651\u0630 \u0645\u0647\u0645\u062A\u0647 \u0645\u0646 \u062C\u0648\u0627\u0644\u0647 \u0628\u0635\u0645\u062A\u060C \u062D\u062A\u0649 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u0648\u0646 \u064A\u062E\u062A\u0627\u0631\u0648\u0646 \u0644\u0644\u062A\u0645\u0648\u064A\u0647. \u0644\u0627 \u062A\u0646\u0638\u0631\u0648\u0627 \u0644\u0634\u0627\u0634\u0627\u062A \u0628\u0639\u0636.</div>\n      <div class=\"bar\"><i style=\"width:".concat(pct, "%\"></i></div><div class=\"meta\">").concat(pr.done, " \u0645\u0646 ").concat(pr.total, " \u0623\u0646\u0647\u0648\u0627 \u0645\u0647\u0645\u062A\u0647\u0645</div>"),
    actions: actionButton('next', 'إنهاء الليل الآن', 'skip', "action('next')", 'sm ghost')
  });
}
function screenMorning(s) {
  var victims = (s.morning || {}).victims || [];
  var roleChip = function roleChip(v) {
    return v.role ? "<div class=\"rolechip ".concat(v.role === 'mafia' ? 'mafia' : '', "\">").concat(icon(R[v.role].i), " ").concat(R[v.role].n, "</div>") : '';
  };
  var body = victims.length ? "<div class=\"lead\">\u0623\u0634\u0631\u0642\u062A \u0627\u0644\u0634\u0645\u0633\u2026 \u0648\u0648\u062C\u062F\u0646\u0627 ".concat(victims.length > 1 ? 'مقتولَين' : 'مقتولاً', "</div>") + victims.map(function (v) {
    return "<div class=\"victim\">".concat(esc(v.name), "</div>").concat(roleChip(v));
  }).join('') : "<div class=\"huge\">\u0645\u0631\u0651\u062A \u0627\u0644\u0644\u064A\u0644\u0629 \u0628\u0633\u0644\u0627\u0645</div><div class=\"lead\">\u0644\u0645 \u064A\u064F\u0642\u062A\u0644 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u0644\u064A\u0644\u0629.</div>";
  return stage({
    orb: victims.length ? 'skull' : 'sun',
    orbCls: victims.length ? 'red' : 'white',
    kicker: 'صباح اليوم ' + s.round,
    body: body,
    actions: actionButton('next', 'ابدأ النقاش <span id="cd2"></span>', 'chat', "action('next')", '', 'data-default')
  });
}
function screenDiscuss(s) {
  return stage({
    kicker: icon('chat') + ' اليوم ' + s.round + ' — وقت النقاش',
    body: "<div class=\"countdown\" id=\"cd\"></div><div class=\"lead\">\u062F\u0627\u0641\u0639\u0648\u0627 \u0639\u0646 \u0623\u0646\u0641\u0633\u0643\u0645\u060C \u0627\u062A\u0647\u0645\u0648\u0627\u060C \u062D\u0644\u0651\u0644\u0648\u0627\u2026 \u0645\u0646 \u0628\u064A\u0646\u0643\u0645 \u0627\u0644\u0645\u0627\u0641\u064A\u0627\u061F</div>\n      ".concat((s.voices || []).length ? "<div class=\"vtitle\">".concat(icon('mic'), " \u0631\u0633\u0627\u0626\u0644 \u0635\u0648\u062A\u064A\u0629 \u2014 \u0627\u0636\u063A\u0637 \u0644\u062A\u0634\u063A\u064A\u0644\u0647\u0627 \u0644\u0644\u0643\u0644\u060C \u0648\u062A\u0646\u0645\u0633\u062D \u0628\u0639\u062F \u0627\u0644\u0646\u0642\u0627\u0634</div><div class=\"vlist\">").concat(Voices.html(s.voices, 'tv'), "</div>") : "<div class=\"grid wide\">".concat(s.players.map(function (p) {
      return playerTile(p);
    }).join(''), "</div>").concat(s.room ? "<div class=\"meta\">".concat(icon('mic'), " \u0643\u0644 \u0644\u0627\u0639\u0628 \u064A\u0642\u062F\u0631 \u064A\u0633\u062C\u0651\u0644 \u0631\u0633\u0627\u0644\u0629 \u0635\u0648\u062A\u064A\u0629 \u062F\u0642\u064A\u0642\u0629 \u0645\u0646 \u062C\u0648\u0627\u0644\u0647</div>") : '')),
    actions: actionButton('add', 'دقيقة إضافية', 'plus', "action('addTime')") + actionButton('next', 'ابدأ التصويت', 'vote', "action('next')", 'primary', 'data-default')
  });
}
function screenAccuse(s) {
  var pr = s.progress,
    acc = s.accusations || [];
  return stage({
    orb: 'hand',
    orbCls: 'red',
    kicker: 'اليوم ' + s.round + ' — الاتهام',
    body: "<div class=\"huge\">\u0645\u0646 \u062A\u062A\u0647\u0645\u0648\u0646\u061F</div>\n      <div class=\"lead\">\u0643\u0644 \u0644\u0627\u0639\u0628 \u064A\u062A\u0647\u0645 \u0634\u062E\u0635\u0627\u064B \u0645\u0646 \u062C\u0648\u0627\u0644\u0647. \u0645\u0646 \u064A\u0627\u062E\u0630 \u0627\u062A\u0647\u0627\u0645\u064A\u0646 \u0623\u0648 \u0623\u0643\u062B\u0631 \u064A\u062F\u062E\u0644 \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u0629.</div>\n      ".concat(acc.some(function (t) {
      return t.id !== -2;
    }) ? tallyHtml({
      tally: acc.filter(function (t) {
        return t.id !== -2;
      })
    }) : "<div class=\"grid wide\">".concat(s.players.filter(function (p) {
      return p.alive;
    }).map(function (p) {
      return playerTile({
        name: p.name,
        alive: true
      }, p.acted ? 'done' : '');
    }).join(''), "</div>"), "\n      <div class=\"bar\"><i style=\"width:").concat(pr.total ? Math.round(pr.done * 100 / pr.total) : 0, "%\"></i></div><div class=\"meta\">\u0627\u062A\u0647\u0645 ").concat(pr.done, " \u0645\u0646 ").concat(pr.total, "</div>"),
    actions: actionButton('next', 'إنهاء الاتهام الآن', 'skip', "action('next')", 'sm ghost')
  });
}
function accusedTiles(s) {
  return "<div class=\"accused\">".concat((s.candidates || []).map(function (c) {
    return "<div class=\"acc\"><span class=\"av\">".concat(initials(c.name), "</span><b>").concat(esc(c.name), "</b><small>").concat(c.accusations, " \u0627\u062A\u0647\u0627\u0645\u0627\u062A</small></div>");
  }).join(''), "</div>");
}
function screenDefense(s) {
  return stage({
    kicker: icon('gavel') + ' المحاكمة — دفاع المتهمين',
    body: "<div class=\"countdown\" id=\"cd\"></div>".concat(accusedTiles(s), "\n      <div class=\"lead\">\u0643\u0644 \u0645\u062A\u0647\u0645 \u064A\u062F\u0627\u0641\u0639 \u0639\u0646 \u0646\u0641\u0633\u0647 \u0628\u0627\u0644\u062F\u0648\u0631. \u0628\u0639\u062F \u0627\u0644\u062F\u0641\u0627\u0639 \u064A\u0643\u0648\u0646 \u0627\u0644\u062A\u0635\u0648\u064A\u062A \u0628\u064A\u0646\u0647\u0645 \u0641\u0642\u0637.</div>"),
    actions: actionButton('next', 'ابدأ التصويت', 'vote', "action('next')", 'primary', 'data-default')
  });
}
function screenLastWords(s) {
  var lw = s.lastWords || {};
  return stage({
    orb: 'chat',
    orbCls: 'red',
    kicker: 'الكلمة الأخيرة',
    body: "<div class=\"lead\">\u062D\u0643\u0645\u062A \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0639\u0644\u0649</div><div class=\"victim\">".concat(esc(lw.name), "</div>\n      <div class=\"countdown\" id=\"cd\"></div><div class=\"lead\">\u0644\u0643 \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0642\u0628\u0644 \u0623\u0646 \u064A\u0646\u0643\u0634\u0641 \u062F\u0648\u0631\u0643.</div>"),
    actions: actionButton('next', 'نفّذ الحكم', 'gavel', "action('next')", 'primary', 'data-default')
  });
}
function screenVote(s) {
  var pr = s.progress,
    trial = (s.candidates || []).length > 0;
  return stage({
    orb: 'vote',
    orbCls: 'red',
    kicker: 'اليوم ' + s.round,
    body: "<div class=\"huge\">".concat(trial ? 'التصويت النهائي' : 'التصويت', "</div>\n      ").concat(trial ? accusedTiles(s) : '', "\n      <div class=\"lead\">").concat(trial ? 'صوّتوا من جوالاتكم بين المتهمين فقط، أو امتنعوا.' : 'كل لاعب حي يصوّت من جواله على من يشك أنه مافيا.', " \u062A\u0646\u0643\u0634\u0641 \u0627\u0644\u0623\u0635\u0648\u0627\u062A \u0628\u0639\u062F \u0623\u0646 \u064A\u0635\u0648\u0651\u062A \u0627\u0644\u062C\u0645\u064A\u0639.</div>\n      ").concat(trial ? "<div class=\"bar\"><i style=\"width:".concat(pr.total ? Math.round(pr.done * 100 / pr.total) : 0, "%\"></i></div>") : "<div class=\"grid wide\">".concat(s.players.filter(function (p) {
      return p.alive;
    }).map(function (p) {
      return playerTile({
        name: p.name,
        alive: true
      }, p.acted ? 'done' : '');
    }).join(''), "</div>"), "\n      <div class=\"meta\">\u0635\u0648\u0651\u062A ").concat(pr.done, " \u0645\u0646 ").concat(pr.total, "</div>"),
    actions: actionButton('next', 'إنهاء التصويت الآن', 'skip', "action('next')", 'sm ghost')
  });
}
function tallyHtml(v) {
  if (!v || !v.tally || !v.tally.length) return '';
  var max = Math.max.apply(null, v.tally.map(function (t) {
    return t.count;
  }));
  return "<div class=\"tally\">".concat(v.tally.map(function (t) {
    return "<div class=\"trow\"><span>".concat(esc(t.name), "</span>\n    <span class=\"tb\"><i style=\"width:").concat(Math.round(t.count * 100 / max), "%\"></i><span class=\"tv\">").concat(t.voters.map(esc).join('، '), "</span></span><b>").concat(t.count, "</b></div>");
  }).join(''), "</div>");
}
function roleVerdict(r) {
  return r === 'mafia' ? 'كان من المافيا' : r === 'godfather' ? 'كان العرّاب، رئيس المافيا' : r === 'joker' ? 'كان الجوكر' : 'كان ' + R[r].n + ' بريئاً';
}
function screenVerdict(s) {
  var v = s.verdict || {};
  var body = v.executed > 0 ? "<div class=\"lead\">\u0642\u0631\u0631\u062A \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0625\u0639\u062F\u0627\u0645</div><div class=\"victim\">".concat(esc(v.executedName), "</div>\n       <div class=\"rolechip ").concat(isMafiaRole(v.executedRole) ? 'mafia' : '', "\">").concat(icon(R[v.executedRole].i), " ").concat(roleVerdict(v.executedRole), "</div>") : v.noTrial ? "<div class=\"huge\">\u0644\u0627 \u0645\u062D\u0627\u0643\u0645\u0629</div><div class=\"lead\">\u0644\u0645 \u064A\u062D\u0635\u0644 \u0623\u062D\u062F \u0639\u0644\u0649 \u0627\u062A\u0647\u0627\u0645\u064A\u0646\u060C \u0641\u0644\u0645 \u064A\u064F\u0639\u062F\u0645 \u0623\u062D\u062F \u0627\u0644\u064A\u0648\u0645.</div>" : "<div class=\"huge\">".concat(v.tie ? 'تعادل' : 'لا إعدام', "</div><div class=\"lead\">").concat(v.tie ? 'تعادلت الأصوات، فلم يُعدم أحد اليوم.' : 'الأغلبية امتنعت عن التصويت.', "</div>");
  return stage({
    orb: 'gavel',
    orbCls: v.executed > 0 ? 'red' : 'white',
    kicker: 'نتيجة التصويت',
    body: body + tallyHtml(v),
    actions: actionButton('next', 'الليلة التالية <span id="cd2"></span>', 'moon', "action('next')", '', 'data-default')
  });
}
function screenOver(s) {
  var mw = s.winner === 'mafia',
    jw = s.winner === 'joker';
  return "<div class=\"stage over anim\">".concat(LOGO(), "\n    <span class=\"kicker\">").concat(icon('trophy'), " \u0627\u0646\u062A\u0647\u062A \u0627\u0644\u0644\u0639\u0628\u0629</span>\n    <div class=\"banner ").concat(mw || jw ? 'mafia' : '', "\">").concat(jw ? 'فاز الجوكر وحده!' : mw ? 'فازت المافيا' : 'فاز الأبرياء', "</div>\n    <div class=\"grid wide\">").concat(s.players.map(function (p) {
    return playerTile(p);
  }).join(''), "</div>\n    <div class=\"log\">").concat((s.log || []).map(function (l) {
    return '· ' + esc(l);
  }).join('<br>'), "</div>\n    <div class=\"actions\">").concat(actionButton('again', 'جولة جديدة بنفس اللاعبين', 'refresh', "action('again')", 'primary', 'data-default')).concat(actionButton('lobby', 'صالة الانتظار', 'home', "action('lobby')"), "</div></div>");
}
var SCREENS = {
  lobby: screenLobby,
  reveal: screenReveal,
  night: screenNight,
  morning: screenMorning,
  discuss: screenDiscuss,
  accuse: screenAccuse,
  defense: screenDefense,
  vote: screenVote,
  lastWords: screenLastWords,
  verdict: screenVerdict,
  over: screenOver
};
var STATUS = {
  lobby: 'صالة الانتظار',
  reveal: 'توزيع الأدوار',
  night: 'الليل',
  morning: 'الصباح',
  discuss: 'النقاش',
  accuse: 'الاتهام',
  defense: 'الدفاع',
  vote: 'التصويت',
  lastWords: 'الكلمة الأخيرة',
  verdict: 'الحكم',
  over: 'النهاية'
};
function render(s) {
  var keep = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.k : null;
  document.body.className = s.phase === 'night' ? 'night' : '';
  $('#main').innerHTML = (SCREENS[s.phase] || screenLobby)(s);
  var alive = s.players.filter(function (p) {
    return p.alive;
  }).length;
  $('#statusTxt').textContent = STATUS[s.phase] + (s.phase !== 'lobby' && s.phase !== 'over' ? ' · الجولة ' + s.round + ' · الأحياء ' + alive : '');
  $('#foot').innerHTML = s.room ? icon('globe') + ' كود الديوانية <span class="url">' + esc(s.room.code) + '</span> · ' + esc(s.url) : s.url && s.phase !== 'lobby' ? icon('wifi') + ' رابط الدخول <span class="url">' + esc(s.url) + '</span>' : '';
  var el = keep && document.querySelector('[data-k="' + keep + '"]:not([disabled])');
  var nothing = !document.activeElement || document.activeElement === document.body;
  if (!el && (s.phase !== lastPhase || nothing)) el = document.querySelector('[data-default]:not([disabled])');
  if (el && !rulesOpen) el.focus();
  if (rulesOpen) $('#rulesClose').focus();
  if (s.phase !== lastPhase && lastPhase !== null) {
    if (s.phase === 'night') Sfx.nightOn();else Sfx.nightOff();
    if (s.phase === 'morning' && s.morning && s.morning.sniperFired) {
      Sfx.gunshot();
      setTimeout(function () {
        return narrate(s);
      }, 1400);
    } else narrate(s);
  }
  lastPhase = s.phase;
}
function tickClock() {
  if (!S) return;
  var now = Date.now() + clockOffset,
    left = S.endsAt ? S.endsAt - now : 0;
  var cd = $('#cd');
  if (cd) {
    cd.textContent = fmt(left);
    cd.classList.toggle('low', left < 30000);
  }
  Voices.refresh();
  var sec = Math.ceil(left / 1000);
  if (S.phase === 'discuss' && S.endsAt && sec > 0 && sec <= 10 && sec !== tickClock.beat) {
    tickClock.beat = sec;
    Sfx.heartbeat();
  }
  var cd2 = $('#cd2');
  if (cd2) cd2.textContent = S.endsAt ? '(' + Math.max(0, Math.ceil(left / 1000)) + ')' : '';
}
function poll() {
  return _poll.apply(this, arguments);
}
function _poll() {
  _poll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var s, sig;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(API.online && (!API.room() || !API.isHost()))) {
            _context3.n = 1;
            break;
          }
          showCreate();
          return _context3.a(2);
        case 1:
          _context3.n = 2;
          return API.tvState();
        case 2:
          s = _context3.v;
          if (!s.gone) {
            _context3.n = 3;
            break;
          }
          API.setRoom('');
          showCreate('انتهت الديوانية، أنشئ وحدة جديدة');
          return _context3.a(2);
        case 3:
          if (!(s.ok === false)) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2);
        case 4:
          // server briefly unreachable; the next poll retries
          clockOffset = s.now - Date.now();
          S = s;
          Voices.prune(s.voices);
          if (s.v !== lastV || s.phase === 'lobby') {
            // the lobby also redraws when a phone goes on/offline
            sig = JSON.stringify([s.v, s.players.map(function (p) {
              return p.online;
            }), s.url, lastErr]);
            if (sig !== render.sig) {
              render.sig = sig;
              render(s);
            }
            lastV = s.v;
          }
          tickClock();
        case 5:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _poll.apply(this, arguments);
}
setInterval(poll, 800);
setInterval(tickClock, 250);
poll();

// ---------------------------------------------------------------- TV remote spatial navigation
function focusables() {
  if (rulesOpen) return [$('#rulesClose')];
  return Array.from(document.querySelectorAll('button:not([disabled]), input')).filter(function (b) {
    return b.offsetParent !== null;
  });
}
document.addEventListener('keydown', function (e) {
  var k = e.key,
    dirs = {
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0]
    };
  if (k === 'Enter' || e.keyCode === 23) {
    var a = document.activeElement;
    if (a && a.tagName === 'BUTTON') {
      e.preventDefault();
      a.click();
    }
    return;
  }
  if (!dirs[k]) return;
  e.preventDefault();
  var list = focusables();
  if (!list.length) return;
  var cur = document.activeElement;
  if (!cur || list.indexOf(cur) < 0) {
    (document.querySelector('[data-default]:not([disabled])') || list[0]).focus();
    return;
  }
  var r = cur.getBoundingClientRect(),
    cx = r.left + r.width / 2,
    cy = r.top + r.height / 2;
  var _dirs$k = _slicedToArray(dirs[k], 2),
    dx = _dirs$k[0],
    dy = _dirs$k[1];
  var best = null,
    bestScore = Infinity;
  var _iterator2 = _createForOfIteratorHelper(list),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var b = _step2.value;
      if (b === cur) continue;
      var q = b.getBoundingClientRect(),
        bx = q.left + q.width / 2,
        by = q.top + q.height / 2;
      var main = (bx - cx) * dx + (by - cy) * dy;
      if (main <= 4) continue;
      var ortho = Math.abs((bx - cx) * dy) + Math.abs((by - cy) * dx);
      var score = main + ortho * 2.5;
      if (score < bestScore) {
        bestScore = score;
        best = b;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (best) best.focus();
});