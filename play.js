function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var r, e, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag"; function i(o, n, a, i) { var u = n && n.prototype instanceof Generator ? n : Generator, f = Object.create(u.prototype); return _regeneratorDefine2(f, "_invoke", function (t, o, n) { var a, i, u, f = 0, p = n || [], y = !1, G = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function d(t, e) { return a = t, i = 0, u = r, G.n = e, c; } }; function l(t, o) { for (i = t, u = o, e = 0; !y && f && !n && e < p.length; e++) { var n, a = p[e], l = G.p, F = a[2]; t > 3 ? (n = F === o) && (u = a[(i = a[4]) ? 5 : (i = 3, 3)], a[4] = a[5] = r) : a[0] <= l && ((n = t < 2 && l < a[1]) ? (i = 0, G.v = o, G.n = a[1]) : l < F && (n = t < 3 || a[0] > o || o > F) && (a[4] = t, a[5] = o, G.n = F, i = 0)); } if (n || t > 1) return c; throw y = !0, o; } return function (n, p, F) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && l(p, F), i = p, u = F; (e = i < 2 ? r : u) || !y;) { a || (i ? i < 3 ? (i > 1 && (G.n = -1), l(i, u)) : G.n = u : G.v = u); try { if (f = 2, a) { if (i || (n = "next"), e = a[n]) { if (!(e = e.call(a, u))) throw TypeError("iterator result is not an object"); if (!e.done) return e; u = e.value, i < 2 && (i = 0); } else 1 === i && (e = a.return) && e.call(a), i < 2 && (u = TypeError("The iterator does not provide a '" + n + "' method"), i = 1); a = r; } else if ((e = (y = G.n < 0) ? u : t.call(o, G)) !== c) break; } catch (t) { a = r, i = 1, u = t; } finally { f = 1; } } return { value: e, done: y }; }; }(o, a, i), !0), f; } var c = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} e = Object.getPrototypeOf; var u = [][n] ? e(e([][n]())) : (_regeneratorDefine2(e = {}, n, function () { return this; }), e), f = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u); function p(r) { return Object.setPrototypeOf ? Object.setPrototypeOf(r, GeneratorFunctionPrototype) : (r.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(r, a, "GeneratorFunction")), r.prototype = Object.create(f), r; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(f, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, a, "GeneratorFunction"), _regeneratorDefine2(f), _regeneratorDefine2(f, a, "Generator"), _regeneratorDefine2(f, n, function () { return this; }), _regeneratorDefine2(f, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: p }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Player screen (any phone browser on the same Wi-Fi). Needs ui.js and rules.js.
var R = ROLE_INFO;
var T = store.get(API.tokenKey());
var S = null,
  lastV = -1,
  lastPhase = null,
  err = '',
  clockOffset = 0,
  busy = false,
  fails = 0;
$('#brandLogo').innerHTML = LOGO();
$('#coverLogo').innerHTML = LOGO();
$('#rulesBtn').innerHTML = icon('book') + 'القوانين';
$('#peekBtn').innerHTML = icon('eye') + 'دوري';
$('#coverTap').innerHTML = icon('hand') + 'اضغط على الشاشة للعرض';
$('#hideBtn').innerHTML = icon('eyeoff') + 'إخفاء الشاشة';
$('#rulesClose').innerHTML = icon('check') + 'فهمت';
function join() {
  return _join.apply(this, arguments);
}
function _join() {
  _join = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var name, code, j;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          name = ($('#nameIn') || {}).value || '';
          if (!(API.online && !API.room())) {
            _context.n = 2;
            break;
          }
          code = (($('#codeIn') || {}).value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
          if (!(code.length < 4)) {
            _context.n = 1;
            break;
          }
          err = 'اكتب كود الديوانية';
          render(true);
          return _context.a(2);
        case 1:
          API.setRoom(code);
          T = store.get(API.tokenKey());
        case 2:
          if (name.trim()) {
            _context.n = 3;
            break;
          }
          err = 'اكتب اسمك أولاً';
          render(true);
          return _context.a(2);
        case 3:
          try {
            localStorage.setItem('mafia_name', name.trim());
          } catch (e) {}
          _context.n = 4;
          return API.join(name, T || '');
        case 4:
          j = _context.v;
          if (!j.gone) {
            _context.n = 5;
            break;
          }
          API.setRoom('');
          err = 'ما لقينا ديوانية بهالكود، تأكد منه';
          render(true);
          return _context.a(2);
        case 5:
          if (!j.error) {
            _context.n = 6;
            break;
          }
          err = j.error;
          render(true);
          return _context.a(2);
        case 6:
          T = j.token;
          store.set(API.tokenKey(), T);
          err = '';
          lastV = -1;
          poll();
        case 7:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _join.apply(this, arguments);
}
function act(_x, _x2) {
  return _act.apply(this, arguments);
}
function _act() {
  _act = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(a, target) {
    var j;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!busy) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          busy = true;
          _context2.n = 2;
          return API.act(T, a, target);
        case 2:
          j = _context2.v;
          err = j.error || '';
          busy = false;
          lastV = -1;
          poll();
        case 3:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _act.apply(this, arguments);
}
function leave() {
  act('leave');
  store.set(API.tokenKey(), null);
  T = null;
  if (API.online) API.setRoom('');
}
var roleTag = function roleTag(r) {
  return r ? "<span class=\"tag ".concat(r, "\">").concat(icon(R[r].i)).concat(R[r].n, "</span>") : '';
};
function roleCard(r, team, hint) {
  var x = R[r];
  var mates = isMafiaRole(r) ? "<div class=\"mates\">".concat(team && team.length ? 'زملاؤك في المافيا: <b>' + team.map(function (t) {
    return esc(t.name) + (t.role === 'godfather' ? ' (العرّاب)' : '');
  }).join('، ') + '</b>' : 'أنت المافيا الوحيد — العب بذكاء', "</div>") : '';
  return "<div class=\"role ".concat(r, "\" onclick=\"").concat(hint === 'close' ? 'closePeek()' : 'setCover(true)', "\">\n    <div class=\"ric\">").concat(icon(x.i), "</div><div class=\"team\">").concat(x.team, "</div><div class=\"rn\">").concat(x.n, "</div><div class=\"rd\">").concat(x.d, "</div>").concat(mates, "\n    <div class=\"tiny\">").concat(hint === 'close' ? 'اضغط للإغلاق' : 'اضغط على البطاقة لإخفائها', "</div></div>");
}
function peek() {
  if (!S || !S.me || !S.me.role) return;
  $('#ovInner').innerHTML = roleCard(S.me.role, S.team, 'close');
  $('#ov').classList.remove('hidden');
}
function closePeek() {
  $('#ov').classList.add('hidden');
}
$('#peekBtn').onclick = peek;
$('#ov').onclick = function (e) {
  if (e.target.id === 'ov') closePeek();
};
$('#rulesIn').innerHTML = rulesHtml();
$('#rulesBtn').onclick = function () {
  $('#rov').classList.remove('hidden');
  $('#rov').scrollTop = 0;
};
$('#rulesClose').onclick = function () {
  return $('#rov').classList.add('hidden');
};
function choiceRow(p, sel, o) {
  o = o || {};
  var tag = o.static ? 'div' : 'button';
  return "<".concat(tag, " class=\"opt ").concat(sel ? 'sel' : '', " ").concat(o.kill ? 'kill' : '', " ").concat(o.static ? 'static' : '', " ").concat(o.cls || '', "\" ").concat(o.disabled ? 'disabled' : '', " ").concat(o.onclick ? "onclick=\"".concat(o.onclick, "\"") : '', " ").concat(o.static ? '' : "aria-pressed=\"".concat(!!sel, "\""), ">\n    <span class=\"av\">").concat(p.icon ? icon(p.icon) : initials(p.name), "</span>\n    <span class=\"nm\">").concat(esc(p.name)).concat(o.note ? "<span class=\"note ".concat(o.noteCls || '', "\">").concat(o.note, "</span>") : '', "</span>\n    ").concat(p.role ? roleTag(p.role) : '').concat(o.static ? '' : "<span class=\"radio\">".concat(icon('check'), "</span>"), "</").concat(tag, ">");
}
/** Private notes only this player sees: the detective's results and what the spy overheard. */
function checksHtml() {
  return detectiveNotes() + spyNotes();
}
function spyNotes() {
  if (!S.spyReports || !S.spyReports.length) return '';
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('spy'), " \u0645\u0627 \u0633\u0645\u0639\u062A\u0647 \u0645\u0646 \u0627\u0644\u0645\u0627\u0641\u064A\u0627</span><div class=\"checks\">").concat(S.spyReports.map(function (r) {
    return "<div><span>\u0627\u0644\u0644\u064A\u0644\u0629 ".concat(r.round, "</span>").concat(r.name ? "<span class=\"tag mafia\">".concat(icon('mafia'), "\u0623\u0631\u0627\u062F\u0648\u0627 \u0642\u062A\u0644 ").concat(esc(r.name), "</span>") : "<span class=\"tag\">\u0644\u0645 \u064A\u062E\u062A\u0627\u0631\u0648\u0627 \u0623\u062D\u062F\u0627\u064B</span>", "</div>");
  }).join(''), "</div></div>");
}
function detectiveNotes() {
  if (!S.checks || !S.checks.length) return '';
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('detective'), " \u062A\u062D\u0642\u064A\u0642\u0627\u062A\u0643</span><div class=\"checks\">").concat(S.checks.map(function (c) {
    return "<div><span>\u0627\u0644\u0644\u064A\u0644\u0629 ".concat(c.round, " \xB7 ").concat(esc(c.name), "</span>").concat(c.mafia ? "<span class=\"tag mafia\">".concat(icon('mafia'), "\u0645\u0627\u0641\u064A\u0627</span>") : "<span class=\"tag\">".concat(icon('check'), "\u0628\u0631\u064A\u0621</span>"), "</div>");
  }).join(''), "</div></div>");
}

// ---------------------------------------------------------------- views
function viewJoin() {
  var saved = '';
  try {
    saved = localStorage.getItem('mafia_name') || '';
  } catch (e) {}
  if (!S.canJoin) return "<div class=\"card center\"><div class=\"hero-ic\">".concat(icon('clock'), "</div><h2>\u0627\u0644\u0644\u0639\u0628\u0629 \u062C\u0627\u0631\u064A\u0629 \u0627\u0644\u0622\u0646</h2><p>\u0627\u0646\u062A\u0638\u0631 \u062D\u062A\u0649 \u062A\u0646\u062A\u0647\u064A \u0627\u0644\u062C\u0648\u0644\u0629 \u0648\u062A\u0639\u0648\u062F \u0635\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631\u060C \u062B\u0645 \u0627\u062F\u062E\u0644.</p></div>");
  var room = S.room && S.room.name ? " \u0641\u064A <span class=\"red\">".concat(esc(S.room.name), "</span>") : '';
  var codeField = API.online && !API.room() ? "<label class=\"fl\" for=\"codeIn\">\u0643\u0648\u062F \u0627\u0644\u062F\u064A\u0648\u0627\u0646\u064A\u0629</label>\n    <input class=\"input code\" id=\"codeIn\" maxlength=\"8\" autocomplete=\"off\" autocapitalize=\"characters\" dir=\"ltr\" placeholder=\"ABCDE\">" : '';
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon(isOnlineRoom() ? 'globe' : 'users'), " ").concat(isOnlineRoom() ? 'أونلاين' : S.room ? 'الديوانية' : 'الانضمام', "</span><h2>\u0623\u0647\u0644\u0627\u064B \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u0627\u0641\u064A\u0627").concat(room, "</h2>\n    <p>").concat(isOnlineRoom() ? 'اكتب اسمك وادخل، والنقاش يكون على المكالمة.' : 'اكتب اسمك ليظهر على شاشة التلفزيون.', "</p>").concat(codeField, "\n    <label class=\"fl\" for=\"nameIn\">\u0627\u0633\u0645\u0643</label>\n    <input class=\"input\" id=\"nameIn\" maxlength=\"16\" value=\"").concat(esc(saved), "\" autocomplete=\"off\" enterkeyhint=\"go\" onkeydown=\"if(event.key==='Enter')join()\">\n    <button class=\"btn primary\" onclick=\"join()\">").concat(icon('play'), "\u062F\u062E\u0648\u0644 \u0627\u0644\u0644\u0639\u0628\u0629</button><div class=\"err\" role=\"alert\">").concat(esc(err), "</div></div>");
}
function viewLobby() {
  return "<div class=\"card center\"><div class=\"hero-ic red\">".concat(icon('check'), "</div><div class=\"big\">\u0623\u0646\u062A \u062F\u0627\u062E\u0644</div><p>\u0627\u0646\u062A\u0638\u0631 \u062D\u062A\u0649 \u064A\u0628\u062F\u0623 \u0627\u0644\u0631\u0627\u0648\u064A \u0627\u0644\u0644\u0639\u0628\u0629").concat(API.online ? '' : ' من التلفزيون', ".</p></div>\n    <div class=\"card\"><span class=\"eyebrow\">").concat(icon('users'), " \u0627\u0644\u0644\u0627\u0639\u0628\u0648\u0646 \xB7 ").concat(S.players.length, "</span>\n    <div class=\"list\">").concat(S.players.map(function (p) {
    return choiceRow(p, false, {
      static: true,
      cls: p.id === S.me.id ? 'me' : '',
      note: p.id === S.me.id ? 'أنت' : ''
    });
  }).join(''), "</div></div>\n    <button class=\"btn\" onclick=\"$('#rulesBtn').click()\">").concat(icon('book'), "\u0627\u0642\u0631\u0623 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0644\u0639\u0628 \u0648\u0627\u0644\u0623\u062F\u0648\u0627\u0631</button>\n    <button class=\"btn ghost\" onclick=\"leave()\">").concat(icon('logout'), "\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0627\u0644\u0644\u0639\u0628\u0629</button>");
}
function viewReveal() {
  return roleCard(S.me.role, S.team) + (S.me.ready ? "<div class=\"card center\" style=\"margin-top:14px\"><div class=\"big\">\u062C\u0627\u0647\u0632</div><p>\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0627\u0642\u064A \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646\u2026</p></div>" : "<button class=\"btn primary\" onclick=\"act('ready')\">".concat(icon('check'), "\u0642\u0631\u0623\u062A \u062F\u0648\u0631\u064A \u2014 \u062C\u0627\u0647\u0632</button>"));
}
function viewNight() {
  var r = S.me.role,
    pick = S.myPick,
    alive = S.players.filter(function (p) {
      return p.alive;
    });
  var h = "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('moon'), " \u0627\u0644\u0644\u064A\u0644\u0629 ").concat(S.round, "</span>");
  if (isMafiaRole(r)) {
    var team = S.team || [];
    h += "<h2>\u0627\u062E\u062A\u0631 \u0636\u062D\u064A\u0629 \u0627\u0644\u0644\u064A\u0644\u0629</h2><p>\u062A\u064F\u062D\u062F\u064E\u0651\u062F \u0627\u0644\u0636\u062D\u064A\u0629 \u0628\u0623\u063A\u0644\u0628\u064A\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0627\u0641\u064A\u0627\u060C \u0648\u062A\u0631\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0632\u0645\u0644\u0627\u0626\u0643.</p><div class=\"list\">" + alive.filter(function (p) {
      return !isMafiaRole(p.role);
    }).map(function (p) {
      var who = team.filter(function (t) {
        return t.pick === p.id;
      }).map(function (t) {
        return esc(t.name);
      });
      return choiceRow(p, pick === p.id, {
        kill: true,
        onclick: "act('night',".concat(p.id, ")"),
        note: who.length ? 'اختيار ' + who.join('، ') : '',
        noteCls: 'red'
      });
    }).join('') + "</div>";
  } else if (r === 'detective') {
    var last = S.checks && S.checks.length ? S.checks[S.checks.length - 1] : null;
    if (pick > 0 && last && last.round === S.round) {
      h += "<h2>\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u062D\u0642\u064A\u0642</h2><div class=\"result ".concat(last.mafia ? 'mafia' : '', "\">").concat(icon(last.mafia ? 'mafia' : 'check')).concat(esc(last.name), " ").concat(last.mafia ? 'من المافيا' : 'بريء', "</div>");
    } else {
      h += "<h2>\u0627\u062E\u062A\u0631 \u0644\u0627\u0639\u0628\u0627\u064B \u0644\u0644\u062A\u062D\u0642\u064A\u0642</h2><p>\u0633\u062A\u0639\u0631\u0641 \u0641\u0648\u0631\u0627\u064B \u0625\u0646 \u0643\u0627\u0646 \u0645\u0646 \u0627\u0644\u0645\u0627\u0641\u064A\u0627.</p><div class=\"list\">" + alive.filter(function (p) {
        return p.id !== S.me.id;
      }).map(function (p) {
        return choiceRow(p, false, {
          onclick: "act('night',".concat(p.id, ")")
        });
      }).join('') + "</div>";
    }
  } else if (r === 'sniper' && S.bullet) {
    var holding = pick === -2;
    h += "<h2>\u0631\u0635\u0627\u0635\u062A\u0643 \u0627\u0644\u0648\u062D\u064A\u062F\u0629</h2><p>\u0627\u062E\u062A\u0631 \u0645\u0646 \u062A\u0637\u0644\u0642 \u0639\u0644\u064A\u0647 \u0627\u0644\u0644\u064A\u0644\u0629\u060C \u0623\u0648 \u0627\u062D\u062A\u0641\u0638 \u0628\u0647\u0627 \u0644\u0644\u064A\u0644\u0629 \u062B\u0627\u0646\u064A\u0629. \u0644\u0648 \u0623\u0635\u0628\u062A \u0628\u0631\u064A\u0626\u0627\u064B \u064A\u0645\u0648\u062A.</p><div class=\"list\">" + choiceRow({
      name: 'أحتفظ بالرصاصة الليلة',
      icon: 'lock'
    }, holding, {
      onclick: "act('night',-2)"
    }) + alive.filter(function (p) {
      return p.id !== S.me.id;
    }).map(function (p) {
      return choiceRow(p, pick === p.id, {
        kill: true,
        onclick: "act('night',".concat(p.id, ")")
      });
    }).join('') + "</div>";
  } else if (r === 'guard') {
    h += "<h2>\u0645\u0646 \u062A\u062D\u0631\u0633 \u0627\u0644\u0644\u064A\u0644\u0629\u061F</h2><p>\u0644\u0648 \u0647\u0627\u062C\u0645\u062A\u0647 \u0627\u0644\u0645\u0627\u0641\u064A\u0627 \u062A\u0645\u0648\u062A \u0623\u0646\u062A \u0628\u062F\u0627\u0644\u0647 \u0648\u0647\u0648 \u064A\u0646\u062C\u0648.</p><div class=\"list\">" + alive.filter(function (p) {
      return p.id !== S.me.id;
    }).map(function (p) {
      return choiceRow(p, pick === p.id, {
        onclick: "act('night',".concat(p.id, ")")
      });
    }).join('') + "</div>";
  } else if (r === 'doctor') {
    h += "<h2>\u0627\u062E\u062A\u0631 \u0645\u0646 \u062A\u062D\u0645\u064A\u0647 \u0627\u0644\u0644\u064A\u0644\u0629</h2><p>\u062A\u0633\u062A\u0637\u064A\u0639 \u062D\u0645\u0627\u064A\u0629 \u0646\u0641\u0633\u0643.</p><div class=\"list\">" + alive.map(function (p) {
      return choiceRow(p, pick === p.id, {
        onclick: "act('night',".concat(p.id, ")"),
        disabled: p.id === S.lastProtected,
        note: p.id === S.lastProtected ? 'حميته الليلة الماضية' : p.id === S.me.id ? 'أنت' : ''
      });
    }).join('') + "</div>";
  } else {
    var why = r === 'sniper' ? 'استخدمت رصاصتك؛ اختيارك الآن للتمويه فقط.' : r === 'spy' ? 'للتمويه فقط؛ ما تسمعه من المافيا يصلك في الصباح.' : r === 'mayor' ? 'للتمويه فقط؛ قوتك تظهر في التصويت النهائي.' : r === 'joker' ? 'للتمويه فقط؛ لعبتك في النهار: خلّهم يشكّون فيك.' : 'للتمويه فقط، حتى لا يعرف أحد أنك مواطن عادي.';
    h += "<h2>\u0627\u062E\u062A\u0631 \u0645\u0646 \u062A\u0634\u0643 \u0641\u064A\u0647</h2><p>".concat(why, "</p><div class=\"list\">") + alive.filter(function (p) {
      return p.id !== S.me.id;
    }).map(function (p) {
      return choiceRow(p, pick === p.id, {
        onclick: "act('night',".concat(p.id, ")")
      });
    }).join('') + "</div>";
  }
  if (pick > 0 || pick === -2) h += "<div class=\"prog\">".concat(icon('check'), "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u062E\u062A\u064A\u0627\u0631\u0643").concat(r !== 'detective' ? '، ويمكنك تغييره قبل نهاية الليل' : '', "</div>");
  h += "<div class=\"err\" role=\"alert\">".concat(esc(err), "</div></div>");
  return h + checksHtml();
}
function viewMorning() {
  var victims = (S.morning || {}).victims || [];
  var names = victims.map(function (v) {
    return "<span class=\"red\">".concat(esc(v.name), "</span>");
  }).join(' و ');
  return "<div class=\"card center\"><div class=\"hero-ic ".concat(victims.length ? 'red' : '', "\">").concat(icon(victims.length ? 'skull' : 'sun'), "</div>") + (victims.length ? "<div class=\"big\">\u0642\u064F\u062A\u0644 ".concat(names, " \u0627\u0644\u0644\u064A\u0644\u0629</div>") : "<div class=\"big\">\u0645\u0631\u0651\u062A \u0627\u0644\u0644\u064A\u0644\u0629 \u0628\u0633\u0644\u0627\u0645</div>") + "<p>\u062A\u0627\u0628\u0639\u0648\u0627 \u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0644\u0641\u0632\u064A\u0648\u0646.</p></div>" + checksHtml();
}
// ---------------------------------------------------------------- one-minute voice message (online discussion)
var REC_MAX_MS = 60000;
var Rec = {
  state: 'idle',
  mr: null,
  stream: null,
  chunks: [],
  started: 0,
  timer: 0,
  discard: false
};
function recStart() {
  return _recStart.apply(this, arguments);
}
function _recStart() {
  _recStart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var type, _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (!(Rec.state !== 'idle')) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          if (!(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder)) {
            _context3.n = 2;
            break;
          }
          err = 'متصفح جوالك ما يدعم التسجيل؛ جرّب كروم أو سفاري محدّث';
          render(true);
          return _context3.a(2);
        case 2:
          _context3.p = 2;
          _context3.n = 3;
          return navigator.mediaDevices.getUserMedia({
            audio: true
          });
        case 3:
          Rec.stream = _context3.v;
          _context3.n = 5;
          break;
        case 4:
          _context3.p = 4;
          _t = _context3.v;
          err = 'لازم تسمح للمتصفح يستخدم المايك';
          render(true);
          return _context3.a(2);
        case 5:
          type = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg'].find(function (t) {
            return MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t);
          });
          try {
            Rec.mr = new MediaRecorder(Rec.stream, type ? {
              mimeType: type,
              audioBitsPerSecond: 48000
            } : undefined);
          } catch (e) {
            Rec.mr = new MediaRecorder(Rec.stream);
          }
          Rec.chunks = [];
          Rec.discard = false;
          Rec.mr.ondataavailable = function (e) {
            if (e.data && e.data.size) Rec.chunks.push(e.data);
          };
          Rec.mr.onstop = recUpload;
          Rec.mr.start(1000);
          Rec.started = Date.now();
          Rec.state = 'rec';
          err = '';
          Rec.timer = setTimeout(recStop, REC_MAX_MS);
          render(true);
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[2, 4]]);
  }));
  return _recStart.apply(this, arguments);
}
function recStop(discard) {
  if (Rec.state !== 'rec') return;
  Rec.discard = !!discard;
  clearTimeout(Rec.timer);
  Rec.state = discard ? 'idle' : 'sending';
  try {
    Rec.mr.stop();
  } catch (e) {
    console.warn('recorder stop failed', e);
  }
  if (Rec.stream) Rec.stream.getTracks().forEach(function (t) {
    return t.stop();
  });
  render(true);
}
function recUpload() {
  return _recUpload.apply(this, arguments);
}
function _recUpload() {
  _recUpload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var ms, blob, r, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (!Rec.discard) {
            _context4.n = 1;
            break;
          }
          Rec.chunks = [];
          return _context4.a(2);
        case 1:
          ms = Math.min(REC_MAX_MS, Date.now() - Rec.started);
          blob = new Blob(Rec.chunks, {
            type: (Rec.mr && Rec.mr.mimeType || 'audio/webm').split(';')[0]
          });
          Rec.chunks = [];
          if (!(ms < 800)) {
            _context4.n = 2;
            break;
          }
          _t2 = {
            ok: false,
            error: 'التسجيل قصير جداً'
          };
          _context4.n = 4;
          break;
        case 2:
          _context4.n = 3;
          return API.sendVoice(T, blob, ms);
        case 3:
          _t2 = _context4.v;
        case 4:
          r = _t2;
          Rec.state = 'idle';
          err = r.ok ? '' : r.error || 'ما وصل التسجيل';
          lastV = -1;
          render(true);
          poll();
        case 5:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _recUpload.apply(this, arguments);
}
var isOnlineRoom = function isOnlineRoom() {
  return !!(S && S.room && S.room.mode === 'online');
};
function voiceCard() {
  if (!isOnlineRoom()) return '';
  var list = S.voices || [],
    mine = list.some(function (v) {
      return v.playerId === S.me.id;
    });
  var ctl = '';
  if (S.me.alive) {
    if (Rec.state === 'rec') ctl = "<button class=\"btn primary rec\" onclick=\"recStop()\">".concat(icon('stop'), "\u0625\u064A\u0642\u0627\u0641 \u0648\u0625\u0631\u0633\u0627\u0644 <span id=\"reccd\"></span></button>");else if (Rec.state === 'sending') ctl = "<button class=\"btn\" disabled>".concat(icon('clock'), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026</button>");else ctl = "<button class=\"btn ".concat(mine ? '' : 'primary', "\" onclick=\"recStart()\">").concat(icon('mic')).concat(mine ? 'سجّل من جديد' : 'سجّل رسالتك (دقيقة)', "</button>\n      ").concat(mine ? "<div class=\"prog\">".concat(icon('check'), "\u0631\u0633\u0627\u0644\u062A\u0643 \u0648\u0635\u0644\u062A \u0644\u0644\u0643\u0644</div>") : '');
  }
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('mic'), " \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0642\u0627\u0634 \u0627\u0644\u0635\u0648\u062A\u064A\u0629</span>\n    ").concat(S.me.alive ? '<p>كل واحد له رسالة وحدة لين دقيقة. تنمسح كلها أول ما يخلص النقاش.</p>' : '').concat(ctl, "\n    <div class=\"err\" role=\"alert\">").concat(esc(err), "</div>\n    <div class=\"vlist\">").concat(list.length ? Voices.html(list) : '<p class="small">ما في رسائل للحين.</p>', "</div></div>");
}
function viewDiscuss() {
  return "<div class=\"card center\"><span class=\"eyebrow\">".concat(icon('chat'), " \u0648\u0642\u062A \u0627\u0644\u0646\u0642\u0627\u0634</span><div class=\"huge\" id=\"cd\"></div><p>\u0646\u0627\u0642\u0634\u0648\u0627 ").concat(isOnlineRoom() ? 'على المكالمة' : 'بصوت عالٍ', ": \u0645\u0646 \u0627\u0644\u0645\u0627\u0641\u064A\u0627\u061F</p></div>\n    ").concat(voiceCard(), "\n    <div class=\"card\"><span class=\"eyebrow\">").concat(icon('users'), " \u0627\u0644\u0644\u0627\u0639\u0628\u0648\u0646</span><div class=\"list\">").concat(S.players.map(function (p) {
    return choiceRow(p, false, {
      static: true,
      cls: p.alive ? '' : 'dead'
    });
  }).join(''), "</div></div>") + checksHtml();
}
function viewAccuse() {
  var my = S.myAccuse;
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('hand'), " \u0627\u0644\u0627\u062A\u0647\u0627\u0645</span><h2>\u0645\u0646 \u062A\u062A\u0647\u0645\u061F</h2><p>\u0645\u0646 \u064A\u0627\u062E\u0630 \u0627\u062A\u0647\u0627\u0645\u064A\u0646 \u0623\u0648 \u0623\u0643\u062B\u0631 \u064A\u062F\u062E\u0644 \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u0629. \u062A\u0642\u062F\u0631 \u062A\u063A\u064A\u0651\u0631 \u0627\u062A\u0647\u0627\u0645\u0643 \u062D\u062A\u0649 \u064A\u062A\u0647\u0645 \u0627\u0644\u062C\u0645\u064A\u0639.</p><div class=\"list\">") + S.players.filter(function (p) {
    return p.alive && p.id !== S.me.id;
  }).map(function (p) {
    return choiceRow(p, my === p.id, {
      kill: true,
      onclick: "act('accuse',".concat(p.id, ")")
    });
  }).join('') + choiceRow({
    name: 'لا أتهم أحداً',
    icon: 'minus'
  }, my === -2, {
    onclick: "act('accuse',-2)"
  }) + "</div><div class=\"prog\">".concat(icon('users'), "\u0627\u062A\u0647\u0645 ").concat(S.voted, " \u0645\u0646 ").concat(S.voters, "</div><div class=\"err\" role=\"alert\">").concat(esc(err), "</div></div>") + checksHtml();
}
function accusedList() {
  return "<div class=\"list\">".concat((S.candidates || []).map(function (c) {
    return choiceRow(c, false, {
      static: true,
      cls: c.id === S.me.id ? 'me' : '',
      note: c.accusations + ' اتهامات'
    });
  }).join(''), "</div>");
}
function viewDefense() {
  var mine = (S.candidates || []).some(function (c) {
    return c.id === S.me.id;
  });
  return "<div class=\"card center\"><span class=\"eyebrow\">".concat(icon('gavel'), " \u0627\u0644\u0645\u062D\u0627\u0643\u0645\u0629</span><div class=\"huge\" id=\"cd\"></div>\n    <div class=\"big ").concat(mine ? 'red' : '', "\">").concat(mine ? 'أنت متهم! دافع عن نفسك' : 'استمعوا لدفاع المتهمين', "</div></div>\n    <div class=\"card\"><span class=\"eyebrow\">").concat(icon('users'), " \u0627\u0644\u0645\u062A\u0647\u0645\u0648\u0646</span>").concat(accusedList(), "</div>") + checksHtml();
}
function viewLastWords() {
  var lw = S.lastWords || {},
    me = lw.id === S.me.id;
  return "<div class=\"card center\"><div class=\"hero-ic red\">".concat(icon('chat'), "</div>\n    <div class=\"big\">").concat(me ? 'هذه كلمتك الأخيرة' : 'الكلمة الأخيرة لـ <span class="red">' + esc(lw.name) + '</span>', "</div>\n    <div class=\"huge\" id=\"cd\"></div><p>").concat(me ? 'قل ما تريد قبل أن يُكشف دورك.' : 'استمعوا… بعدها ينكشف دوره.', "</p></div>") + checksHtml();
}
function viewVote() {
  var my = S.myVote,
    trial = (S.candidates || []).length > 0;
  var options = trial ? S.candidates.filter(function (c) {
    return c.id !== S.me.id;
  }) : S.players.filter(function (p) {
    return p.alive && p.id !== S.me.id;
  });
  return "<div class=\"card\"><span class=\"eyebrow\">".concat(icon('vote'), " ").concat(trial ? 'التصويت النهائي' : 'التصويت', "</span><h2>").concat(trial ? 'من يُعدم من المتهمين؟' : 'من تشك أنه مافيا؟', "</h2>\n    <p>\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0635\u0648\u062A\u0643 \u062D\u062A\u0649 \u064A\u0635\u0648\u0651\u062A \u0627\u0644\u062C\u0645\u064A\u0639.").concat(S.weight > 1 ? ' <b class="red">أنت العمدة: صوتك بصوتين.</b>' : '', "</p><div class=\"list\">") + options.map(function (p) {
    return choiceRow(p, my === p.id, {
      kill: true,
      onclick: "act('vote',".concat(p.id, ")"),
      note: p.accusations ? p.accusations + ' اتهامات' : ''
    });
  }).join('') + choiceRow({
    name: 'امتناع عن التصويت',
    icon: 'minus'
  }, my === -2, {
    onclick: "act('vote',-2)"
  }) + "</div><div class=\"prog\">".concat(icon('users'), "\u0635\u0648\u0651\u062A ").concat(S.voted, " \u0645\u0646 ").concat(S.voters, "</div><div class=\"err\" role=\"alert\">").concat(esc(err), "</div></div>") + checksHtml();
}
function viewVerdict() {
  var v = S.verdict || {},
    r = v.executedRole;
  return "<div class=\"card center\"><div class=\"hero-ic ".concat(v.executed > 0 ? 'red' : '', "\">").concat(icon('gavel'), "</div>") + (v.executed > 0 ? "<div class=\"big\">\u062A\u0645 \u0625\u0639\u062F\u0627\u0645 ".concat(esc(v.executedName), "</div><div class=\"result ").concat(isMafiaRole(r) ? 'mafia' : '', "\">").concat(icon(R[r].i)).concat(r === 'mafia' ? 'كان من المافيا' : r === 'godfather' ? 'كان العرّاب' : 'كان ' + R[r].n + ' بريئاً', "</div>") : "<div class=\"big\">".concat(v.noTrial ? 'لا محاكمة اليوم' : v.tie ? 'تعادل — لا إعدام' : 'لم يُعدم أحد', "</div>")) + "<p style=\"margin-top:12px\">\u0627\u0633\u062A\u0639\u062F\u0648\u0627\u2026 \u0627\u0644\u0644\u064A\u0644 \u0642\u0627\u062F\u0645.</p></div>" + checksHtml();
}
function viewOver() {
  var w = S.winner,
    r = S.me.role;
  var won = w === 'joker' ? r === 'joker' : w === 'mafia' ? isMafiaRole(r) : !isMafiaRole(r) && r !== 'joker';
  var title = w === 'joker' ? 'فاز الجوكر وحده!' : w === 'mafia' ? 'فازت المافيا' : 'فاز الأبرياء';
  return "<div class=\"card center\"><div class=\"hero-ic ".concat(won ? 'red' : '', "\">").concat(icon(won ? 'trophy' : 'skull'), "</div>\n    <div class=\"big ").concat(w !== 'town' ? 'red' : '', "\">").concat(title, "</div><p>").concat(won ? r === 'joker' ? 'خدعتهم كلهم. مبروك!' : 'مبروك، فريقك فاز.' : 'خسرت هذه المرة.', "</p></div>\n    <div class=\"card\"><span class=\"eyebrow\">").concat(icon('users'), " \u0627\u0644\u0623\u062F\u0648\u0627\u0631</span><div class=\"list\">").concat(S.players.map(function (p) {
    return choiceRow(p, false, {
      static: true,
      cls: p.alive ? '' : 'dead'
    });
  }).join(''), "</div></div>\n    <p class=\"small\">\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0631\u0627\u0648\u064A \u0644\u0628\u062F\u0621 \u062C\u0648\u0644\u0629 \u062C\u062F\u064A\u062F\u0629\u2026</p>");
}
var VIEWS = {
  nojoin: viewJoin,
  lobby: viewLobby,
  reveal: viewReveal,
  night: viewNight,
  morning: viewMorning,
  discuss: viewDiscuss,
  accuse: viewAccuse,
  defense: viewDefense,
  vote: viewVote,
  lastWords: viewLastWords,
  verdict: viewVerdict,
  over: viewOver
};
function render(force) {
  if (!S) return;
  var ph = S.phase;
  if (ph === 'nojoin' && !force && $('#nameIn') && document.activeElement === $('#nameIn')) return;
  document.body.className = ph === 'night' ? 'night' : '';
  $('#meName').textContent = S.me ? S.me.name : '';
  $('#peekBtn').classList.toggle('hidden', !(S.me && S.me.role && ph !== 'reveal'));
  var h = (VIEWS[ph] || viewJoin)();
  if (S.me && !S.me.alive && ph !== 'over') h = "<div class=\"dead-banner\">".concat(icon('skull'), "\u0623\u0646\u062A \u062E\u0627\u0631\u062C \u0627\u0644\u0644\u0639\u0628\u0629 \u2014 \u0644\u0627 \u062A\u062A\u0643\u0644\u0645 \u0648\u0644\u0627 \u062A\u0644\u0645\u0651\u062D \u0644\u0623\u062D\u062F</div>") + h;
  $('#view').innerHTML = h;
  if (!S.me && covered) setCover(false);
  $('#hideBtn').classList.toggle('hidden', covered || !S.me);
  if (covered) updCover();
  tickClock();
}
function tickClock() {
  var rc = $('#reccd');
  if (rc && Rec.state === 'rec') rc.textContent = fmt(REC_MAX_MS - (Date.now() - Rec.started));
  Voices.refresh();
  var cd = $('#cd');
  if (!cd || !S) return;
  cd.textContent = fmt(S.endsAt ? S.endsAt - (Date.now() + clockOffset) : 0);
}
function poll() {
  return _poll.apply(this, arguments);
} // ---------------------------------------------------------------- privacy cover
function _poll() {
  _poll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var s, phaseChanged;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return API.me(T);
        case 1:
          s = _context5.v;
          if (!s.gone) {
            _context5.n = 2;
            break;
          }
          API.setRoom('');
          T = null;
          err = 'انتهت الديوانية أو الكود غلط';
          S = {
            phase: 'nojoin',
            canJoin: true,
            needRoom: true,
            v: 0
          };
          lastPhase = 'nojoin';
          render(true);
          return _context5.a(2);
        case 2:
          if (!(s.ok === false)) {
            _context5.n = 3;
            break;
          }
          if (++fails > 2) $('#conn').textContent = 'انقطع الاتصال بالتلفزيون… تأكد أنك على نفس الواي فاي';
          return _context5.a(2);
        case 3:
          fails = 0;
          $('#conn').textContent = '';
          clockOffset = (s.now || Date.now()) - Date.now();
          phaseChanged = s.phase !== lastPhase;
          S = s;
          if (phaseChanged) {
            err = '';
            closePeek();
            if (s.phase !== 'discuss') recStop(true); // the discussion is over: a recording in progress is dropped
            if (s.me && lastPhase !== 'nojoin') setCover(true);
            if (lastPhase && navigator.vibrate) try {
              navigator.vibrate(s.phase === 'night' ? [80, 60, 80] : 60);
            } catch (e) {}
          }
          Voices.prune(s.voices);
          if (s.v !== lastV || phaseChanged) {
            render(phaseChanged);
            lastV = s.v;
          }
          lastPhase = s.phase;
        case 4:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _poll.apply(this, arguments);
}
var COVER_IDLE_MS = 25000;
var covered = false,
  lastTouch = Date.now();
var PHASE_LINE = {
  lobby: ['clock', 'بانتظار بدء اللعبة'],
  reveal: ['lock', 'تم توزيع الأدوار'],
  night: ['moon', 'الليل — حان دورك'],
  morning: ['sun', 'طلع الصبح'],
  discuss: ['chat', 'وقت النقاش'],
  accuse: ['hand', 'وقت الاتهام'],
  defense: ['gavel', 'المحاكمة'],
  vote: ['vote', 'وقت التصويت'],
  lastWords: ['chat', 'الكلمة الأخيرة'],
  verdict: ['gavel', 'نتيجة التصويت'],
  over: ['trophy', 'انتهت اللعبة']
};
function setCover(on) {
  covered = on;
  $('#cover').classList.toggle('hidden', !on);
  $('#hideBtn').classList.toggle('hidden', on || !(S && S.me));
  if (on) {
    closePeek();
    $('#rov').classList.add('hidden');
    updCover();
  }
  lastTouch = Date.now();
}
function updCover() {
  if (!S) return;
  var t = PHASE_LINE[S.phase] || ['clock', ''];
  if (S.me && !S.me.alive && (S.phase === 'night' || S.phase === 'vote' || S.phase === 'accuse')) t = S.phase === 'night' ? ['moon', 'الليل'] : ['vote', 'التصويت جارٍ'];
  $('#coverSt').innerHTML = icon(t[0]) + t[1];
}
$('#cover').onclick = function () {
  return setCover(false);
};
$('#hideBtn').onclick = function () {
  return setCover(true);
};
['touchstart', 'mousedown', 'keydown', 'scroll'].forEach(function (ev) {
  return document.addEventListener(ev, function () {
    lastTouch = Date.now();
  }, {
    passive: true,
    capture: true
  });
});
setInterval(function () {
  if (!covered && S && S.me && Rec.state === 'idle' && Date.now() - lastTouch > COVER_IDLE_MS && document.activeElement !== $('#nameIn')) setCover(true);
}, 1000);
setInterval(poll, 1000);
setInterval(tickClock, 250);
poll();