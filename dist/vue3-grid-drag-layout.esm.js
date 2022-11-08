import { defineComponent as ja, openBlock as cr, createElementBlock as fr, normalizeClass as hi, normalizeStyle as Mi, renderSlot as ji, createCommentVNode as za, resolveComponent as Da, withDirectives as Ia, createVNode as Ra, vShow as Ca } from "vue";
function Aa(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var zi = { exports: {} };
(function(u, c) {
  (function(v) {
    u.exports = v();
  })(function() {
    var v = {};
    Object.defineProperty(v, "__esModule", { value: !0 }), v.default = void 0, v.default = function(e) {
      return !(!e || !e.Window) && e instanceof e.Window;
    };
    var p = {};
    Object.defineProperty(p, "__esModule", { value: !0 }), p.getWindow = function(e) {
      return (0, v.default)(e) ? e : (e.ownerDocument || e).defaultView || w.window;
    }, p.init = _, p.window = p.realWindow = void 0;
    var m = void 0;
    p.realWindow = m;
    var w = void 0;
    function _(e) {
      p.realWindow = m = e;
      var t = e.document.createTextNode("");
      t.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(t) === t && (e = e.wrap(e)), p.window = w = e;
    }
    p.window = w, typeof window < "u" && window && _(window);
    var h = {};
    function C(e) {
      return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, C(e);
    }
    Object.defineProperty(h, "__esModule", { value: !0 }), h.default = void 0;
    var T = function(e) {
      return !!e && C(e) === "object";
    }, B = function(e) {
      return typeof e == "function";
    }, G = { window: function(e) {
      return e === p.window || (0, v.default)(e);
    }, docFrag: function(e) {
      return T(e) && e.nodeType === 11;
    }, object: T, func: B, number: function(e) {
      return typeof e == "number";
    }, bool: function(e) {
      return typeof e == "boolean";
    }, string: function(e) {
      return typeof e == "string";
    }, element: function(e) {
      if (!e || C(e) !== "object")
        return !1;
      var t = p.getWindow(e) || p.window;
      return /object|function/.test(typeof Element > "u" ? "undefined" : C(Element)) ? e instanceof Element || e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
    }, plainObject: function(e) {
      return T(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString());
    }, array: function(e) {
      return T(e) && e.length !== void 0 && B(e.splice);
    } };
    h.default = G;
    var te = {};
    function X(e) {
      var t = e.interaction;
      if (t.prepared.name === "drag") {
        var n = t.prepared.axis;
        n === "x" ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : n === "y" && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0);
      }
    }
    function re(e) {
      var t = e.iEvent, n = e.interaction;
      if (n.prepared.name === "drag") {
        var r = n.prepared.axis;
        if (r === "x" || r === "y") {
          var i = r === "x" ? "y" : "x";
          t.page[i] = n.coords.start.page[i], t.client[i] = n.coords.start.client[i], t.delta[i] = 0;
        }
      }
    }
    Object.defineProperty(te, "__esModule", { value: !0 }), te.default = void 0;
    var de = { id: "actions/drag", install: function(e) {
      var t = e.actions, n = e.Interactable, r = e.defaults;
      n.prototype.draggable = de.draggable, t.map.drag = de, t.methodDict.drag = "draggable", r.actions.drag = de.defaults;
    }, listeners: { "interactions:before-action-move": X, "interactions:action-resume": X, "interactions:action-move": re, "auto-start:check": function(e) {
      var t = e.interaction, n = e.interactable, r = e.buttons, i = n.options.drag;
      if (i && i.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || (r & n.options.drag.mouseButtons) != 0))
        return e.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
    } }, draggable: function(e) {
      return h.default.object(e) ? (this.options.drag.enabled = e.enabled !== !1, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : h.default.bool(e) ? (this.options.drag.enabled = e, this) : this.options.drag;
    }, beforeMove: X, move: re, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, _e = de;
    te.default = _e;
    var Z = {};
    Object.defineProperty(Z, "__esModule", { value: !0 }), Z.default = void 0;
    var $ = { init: function(e) {
      var t = e;
      $.document = t.document, $.DocumentFragment = t.DocumentFragment || ne, $.SVGElement = t.SVGElement || ne, $.SVGSVGElement = t.SVGSVGElement || ne, $.SVGElementInstance = t.SVGElementInstance || ne, $.Element = t.Element || ne, $.HTMLElement = t.HTMLElement || $.Element, $.Event = t.Event, $.Touch = t.Touch || ne, $.PointerEvent = t.PointerEvent || t.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function ne() {
    }
    var R = $;
    Z.default = R;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: !0 }), S.default = void 0;
    var L = { init: function(e) {
      var t = Z.default.Element, n = e.navigator || {};
      L.supportsTouch = "ontouchstart" in e || h.default.func(e.DocumentTouch) && Z.default.document instanceof e.DocumentTouch, L.supportsPointerEvent = n.pointerEnabled !== !1 && !!Z.default.PointerEvent, L.isIOS = /iP(hone|od|ad)/.test(n.platform), L.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), L.isIe9 = /MSIE 9/.test(n.userAgent), L.isOperaMobile = n.appName === "Opera" && L.supportsTouch && /Presto/.test(n.userAgent), L.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", L.pEventTypes = L.supportsPointerEvent ? Z.default.PointerEvent === e.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, L.wheelEvent = Z.default.document && "onmousewheel" in Z.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, z = L;
    S.default = z;
    var k = {};
    function pe(e) {
      var t = e.parentNode;
      if (h.default.docFrag(t)) {
        for (; (t = t.host) && h.default.docFrag(t); )
          ;
        return t;
      }
      return t;
    }
    function V(e, t) {
      return p.window !== p.realWindow && (t = t.replace(/\/deep\//g, " ")), e[S.default.prefixedMatchesSelector](t);
    }
    Object.defineProperty(k, "__esModule", { value: !0 }), k.closest = function(e, t) {
      for (; h.default.element(e); ) {
        if (V(e, t))
          return e;
        e = pe(e);
      }
      return null;
    }, k.getActualElement = function(e) {
      return e.correspondingUseElement || e;
    }, k.getElementClientRect = be, k.getElementRect = function(e) {
      var t = be(e);
      if (!S.default.isIOS7 && t) {
        var n = Q(p.getWindow(e));
        t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
      }
      return t;
    }, k.getPath = function(e) {
      for (var t = []; e; )
        t.push(e), e = pe(e);
      return t;
    }, k.getScrollXY = Q, k.indexOfDeepestElement = function(e) {
      for (var t, n = [], r = 0; r < e.length; r++) {
        var i = e[r], o = e[t];
        if (i && r !== t)
          if (o) {
            var l = fe(i), a = fe(o);
            if (l !== i.ownerDocument)
              if (a !== i.ownerDocument)
                if (l !== a) {
                  n = n.length ? n : F(o);
                  var s = void 0;
                  if (o instanceof Z.default.HTMLElement && i instanceof Z.default.SVGElement && !(i instanceof Z.default.SVGSVGElement)) {
                    if (i === a)
                      continue;
                    s = i.ownerSVGElement;
                  } else
                    s = i;
                  for (var f = F(s, o.ownerDocument), d = 0; f[d] && f[d] === n[d]; )
                    d++;
                  var g = [f[d - 1], f[d], n[d]];
                  if (g[0])
                    for (var b = g[0].lastChild; b; ) {
                      if (b === g[1]) {
                        t = r, n = f;
                        break;
                      }
                      if (b === g[2])
                        break;
                      b = b.previousSibling;
                    }
                } else
                  x = i, y = o, (parseInt(p.getWindow(x).getComputedStyle(x).zIndex, 10) || 0) >= (parseInt(p.getWindow(y).getComputedStyle(y).zIndex, 10) || 0) && (t = r);
              else
                t = r;
          } else
            t = r;
      }
      var x, y;
      return t;
    }, k.matchesSelector = V, k.matchesUpTo = function(e, t, n) {
      for (; h.default.element(e); ) {
        if (V(e, t))
          return !0;
        if ((e = pe(e)) === n)
          return V(e, t);
      }
      return !1;
    }, k.nodeContains = function(e, t) {
      if (e.contains)
        return e.contains(t);
      for (; t; ) {
        if (t === e)
          return !0;
        t = t.parentNode;
      }
      return !1;
    }, k.parentNode = pe, k.trySelector = function(e) {
      return !!h.default.string(e) && (Z.default.document.querySelector(e), !0);
    };
    var fe = function(e) {
      return e.parentNode || e.host;
    };
    function F(e, t) {
      for (var n, r = [], i = e; (n = fe(i)) && i !== t && n !== i.ownerDocument; )
        r.unshift(i), i = n;
      return r;
    }
    function Q(e) {
      return { x: (e = e || p.window).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
    }
    function be(e) {
      var t = e instanceof Z.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
      return t && { left: t.left, right: t.right, top: t.top, bottom: t.bottom, width: t.width || t.right - t.left, height: t.height || t.bottom - t.top };
    }
    var M = {};
    Object.defineProperty(M, "__esModule", { value: !0 }), M.default = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    };
    var U = {};
    function Ue(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function rt(e, t, n) {
      return e === "parent" ? (0, k.parentNode)(n) : e === "self" ? t.getRect(n) : (0, k.closest)(n, e);
    }
    Object.defineProperty(U, "__esModule", { value: !0 }), U.addEdges = function(e, t, n) {
      e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top;
    }, U.getStringOptionResult = rt, U.rectToXY = function(e) {
      return e && { x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top };
    }, U.resolveRectLike = function(e, t, n, r) {
      var i, o = e;
      return h.default.string(o) ? o = rt(o, t, n) : h.default.func(o) && (o = o.apply(void 0, function(l) {
        if (Array.isArray(l))
          return Ue(l);
      }(i = r) || function(l) {
        if (typeof Symbol < "u" && l[Symbol.iterator] != null || l["@@iterator"] != null)
          return Array.from(l);
      }(i) || function(l, a) {
        if (l) {
          if (typeof l == "string")
            return Ue(l, a);
          var s = Object.prototype.toString.call(l).slice(8, -1);
          return s === "Object" && l.constructor && (s = l.constructor.name), s === "Map" || s === "Set" ? Array.from(l) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Ue(l, a) : void 0;
        }
      }(i) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), h.default.element(o) && (o = (0, k.getElementRect)(o)), o;
    }, U.tlbrToXywh = function(e) {
      return !e || "x" in e && "y" in e || ((e = (0, M.default)({}, e)).x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
    }, U.xywhToTlbr = function(e) {
      return !e || "left" in e && "top" in e || ((e = (0, M.default)({}, e)).left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
    };
    var Pe = {};
    Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.default = function(e, t, n) {
      var r = e.options[n], i = r && r.origin || e.options.origin, o = (0, U.resolveRectLike)(i, e, t, [e && t]);
      return (0, U.rectToXY)(o) || { x: 0, y: 0 };
    };
    var Ve = {};
    function Kt(e) {
      return e.trim().split(/ +/);
    }
    Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.default = function e(t, n, r) {
      if (r = r || {}, h.default.string(t) && t.search(" ") !== -1 && (t = Kt(t)), h.default.array(t))
        return t.reduce(function(s, f) {
          return (0, M.default)(s, e(f, n, r));
        }, r);
      if (h.default.object(t) && (n = t, t = ""), h.default.func(n))
        r[t] = r[t] || [], r[t].push(n);
      else if (h.default.array(n))
        for (var i = 0; i < n.length; i++) {
          var o;
          o = n[i], e(t, o, r);
        }
      else if (h.default.object(n))
        for (var l in n) {
          var a = Kt(l).map(function(s) {
            return "".concat(t).concat(s);
          });
          e(a, n[l], r);
        }
      return r;
    };
    var je = {};
    Object.defineProperty(je, "__esModule", { value: !0 }), je.default = void 0, je.default = function(e, t) {
      return Math.sqrt(e * e + t * t);
    };
    var it = {};
    Object.defineProperty(it, "__esModule", { value: !0 }), it.default = function(e, t) {
      e.__set || (e.__set = {});
      var n = function(i) {
        typeof e[i] != "function" && i !== "__set" && Object.defineProperty(e, i, { get: function() {
          return i in e.__set ? e.__set[i] : e.__set[i] = t[i];
        }, set: function(o) {
          e.__set[i] = o;
        }, configurable: !0 });
      };
      for (var r in t)
        n(r);
      return e;
    };
    var D = {};
    function _t(e) {
      return e instanceof Z.default.Event || e instanceof Z.default.Touch;
    }
    function ot(e, t, n) {
      return e = e || "page", (n = n || {}).x = t[e + "X"], n.y = t[e + "Y"], n;
    }
    function Jt(e, t) {
      return t = t || { x: 0, y: 0 }, S.default.isOperaMobile && _t(e) ? (ot("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : ot("page", e, t), t;
    }
    function Pt(e, t) {
      return t = t || {}, S.default.isOperaMobile && _t(e) ? ot("screen", e, t) : ot("client", e, t), t;
    }
    function j(e) {
      var t = [];
      return h.default.array(e) ? (t[0] = e[0], t[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : e.touches.length === 0 && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
    }
    function Y(e) {
      for (var t = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < e.length; n++) {
        var r = e[n];
        for (var i in t)
          t[i] += r[i];
      }
      for (var o in t)
        t[o] /= e.length;
      return t;
    }
    Object.defineProperty(D, "__esModule", { value: !0 }), D.coordsToEvent = function(e) {
      return { coords: e, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, D.copyCoords = function(e, t) {
      e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
    }, D.getClientXY = Pt, D.getEventTargets = function(e) {
      var t = h.default.func(e.composedPath) ? e.composedPath() : e.path;
      return [k.getActualElement(t ? t[0] : e.target), k.getActualElement(e.currentTarget)];
    }, D.getPageXY = Jt, D.getPointerId = function(e) {
      return h.default.number(e.pointerId) ? e.pointerId : e.identifier;
    }, D.getPointerType = function(e) {
      return h.default.string(e.pointerType) ? e.pointerType : h.default.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof Z.default.Touch ? "touch" : "mouse";
    }, D.getTouchPair = j, D.getXY = ot, D.isNativePointer = _t, D.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, D.pointerAverage = Y, Object.defineProperty(D, "pointerExtend", { enumerable: !0, get: function() {
      return it.default;
    } }), D.setCoordDeltas = function(e, t, n) {
      e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;
    }, D.setCoordVelocity = function(e, t) {
      var n = Math.max(t.timeStamp / 1e3, 1e-3);
      e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
    }, D.setCoords = function(e, t, n) {
      var r = t.length > 1 ? Y(t) : t[0];
      Jt(r, e.page), Pt(r, e.client), e.timeStamp = n;
    }, D.setZeroCoords = function(e) {
      e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
    }, D.touchAngle = function(e, t) {
      var n = t + "X", r = t + "Y", i = j(e), o = i[1][n] - i[0][n], l = i[1][r] - i[0][r];
      return 180 * Math.atan2(l, o) / Math.PI;
    }, D.touchBBox = function(e) {
      if (!e.length)
        return null;
      var t = j(e), n = Math.min(t[0].pageX, t[1].pageX), r = Math.min(t[0].pageY, t[1].pageY), i = Math.max(t[0].pageX, t[1].pageX), o = Math.max(t[0].pageY, t[1].pageY);
      return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
    }, D.touchDistance = function(e, t) {
      var n = t + "X", r = t + "Y", i = j(e), o = i[0][n] - i[1][n], l = i[0][r] - i[1][r];
      return (0, je.default)(o, l);
    };
    var ee = {};
    function Te(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Ce(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(ee, "__esModule", { value: !0 }), ee.BaseEvent = void 0;
    var Be = function() {
      function e(r) {
        (function(i, o) {
          if (!(i instanceof o))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), Ce(this, "immediatePropagationStopped", !1), Ce(this, "propagationStopped", !1), this._interaction = r;
      }
      var t, n;
      return t = e, (n = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && Te(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    ee.BaseEvent = Be, Object.defineProperty(Be.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var q = {};
    Object.defineProperty(q, "__esModule", { value: !0 }), q.remove = q.merge = q.from = q.findIndex = q.find = q.contains = void 0, q.contains = function(e, t) {
      return e.indexOf(t) !== -1;
    }, q.remove = function(e, t) {
      return e.splice(e.indexOf(t), 1);
    };
    var me = function(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        e.push(r);
      }
      return e;
    };
    q.merge = me, q.from = function(e) {
      return me([], e);
    };
    var K = function(e, t) {
      for (var n = 0; n < e.length; n++)
        if (t(e[n], n, e))
          return n;
      return -1;
    };
    q.findIndex = K, q.find = function(e, t) {
      return e[K(e, t)];
    };
    var ue = {};
    function ze(e) {
      return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, ze(e);
    }
    function De(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Se(e, t) {
      return Se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, Se(e, t);
    }
    function Ke(e, t) {
      if (t && (ze(t) === "object" || typeof t == "function"))
        return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ae(e);
    }
    function Ae(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function We(e) {
      return We = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, We(e);
    }
    function Le(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(ue, "__esModule", { value: !0 }), ue.DropEvent = void 0;
    var Zt = function(e) {
      (function(a, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && Se(a, s);
      })(l, e);
      var t, n, r, i, o = (r = l, i = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var a, s = We(r);
        if (i) {
          var f = We(this).constructor;
          a = Reflect.construct(s, arguments, f);
        } else
          a = s.apply(this, arguments);
        return Ke(this, a);
      });
      function l(a, s, f) {
        var d;
        (function(y, O) {
          if (!(y instanceof O))
            throw new TypeError("Cannot call a class as a function");
        })(this, l), Le(Ae(d = o.call(this, s._interaction)), "dropzone", void 0), Le(Ae(d), "dragEvent", void 0), Le(Ae(d), "relatedTarget", void 0), Le(Ae(d), "draggable", void 0), Le(Ae(d), "propagationStopped", !1), Le(Ae(d), "immediatePropagationStopped", !1);
        var g = f === "dragleave" ? a.prev : a.cur, b = g.element, x = g.dropzone;
        return d.type = f, d.target = b, d.currentTarget = b, d.dropzone = x, d.dragEvent = s, d.relatedTarget = s.target, d.draggable = s.interactable, d.timeStamp = s.timeStamp, d;
      }
      return t = l, (n = [{ key: "reject", value: function() {
        var a = this, s = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && s.cur.dropzone === this.dropzone && s.cur.element === this.target)
          if (s.prev.dropzone = this.dropzone, s.prev.element = this.target, s.rejected = !0, s.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var f = s.activeDrops, d = q.findIndex(f, function(b) {
              var x = b.dropzone, y = b.element;
              return x === a.dropzone && y === a.target;
            });
            s.activeDrops.splice(d, 1);
            var g = new l(s, this.dragEvent, "dropdeactivate");
            g.dropzone = this.dropzone, g.target = this.target, this.dropzone.fire(g);
          } else
            this.dropzone.fire(new l(s, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && De(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), l;
    }(ee.BaseEvent);
    ue.DropEvent = Zt;
    var at = {};
    function ce(e, t) {
      for (var n = 0; n < e.slice().length; n++) {
        var r = e.slice()[n], i = r.dropzone, o = r.element;
        t.dropzone = i, t.target = o, i.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1;
      }
    }
    function Oe(e, t) {
      for (var n = function(o, l) {
        for (var a = o.interactables, s = [], f = 0; f < a.list.length; f++) {
          var d = a.list[f];
          if (d.options.drop.enabled) {
            var g = d.options.drop.accept;
            if (!(h.default.element(g) && g !== l || h.default.string(g) && !k.matchesSelector(l, g) || h.default.func(g) && !g({ dropzone: d, draggableElement: l })))
              for (var b = h.default.string(d.target) ? d._context.querySelectorAll(d.target) : h.default.array(d.target) ? d.target : [d.target], x = 0; x < b.length; x++) {
                var y = b[x];
                y !== l && s.push({ dropzone: d, element: y, rect: d.getRect(y) });
              }
          }
        }
        return s;
      }(e, t), r = 0; r < n.length; r++) {
        var i = n[r];
        i.rect = i.dropzone.getRect(i.element);
      }
      return n;
    }
    function Ne(e, t, n) {
      for (var r = e.dropState, i = e.interactable, o = e.element, l = [], a = 0; a < r.activeDrops.length; a++) {
        var s = r.activeDrops[a], f = s.dropzone, d = s.element, g = s.rect;
        l.push(f.dropCheck(t, n, i, o, d, g) ? d : null);
      }
      var b = k.indexOfDeepestElement(l);
      return r.activeDrops[b] || null;
    }
    function Ie(e, t, n) {
      var r = e.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return n.type === "dragstart" && (i.activate = new ue.DropEvent(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new ue.DropEvent(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new ue.DropEvent(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new ue.DropEvent(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new ue.DropEvent(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new ue.DropEvent(r, n, "dropmove"), i.move.dragmove = n, n.dropzone = r.cur.dropzone)), i;
    }
    function Tt(e, t) {
      var n = e.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
      t.leave && o.dropzone.fire(t.leave), t.enter && i.dropzone.fire(t.enter), t.move && i.dropzone.fire(t.move), t.drop && i.dropzone.fire(t.drop), t.deactivate && ce(r, t.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
    }
    function st(e, t) {
      var n = e.interaction, r = e.iEvent, i = e.event;
      if (r.type === "dragmove" || r.type === "dragend") {
        var o = n.dropState;
        t.dynamicDrop && (o.activeDrops = Oe(t, n.element));
        var l = r, a = Ne(n, l, i);
        o.rejected = o.rejected && !!a && a.dropzone === o.cur.dropzone && a.element === o.cur.element, o.cur.dropzone = a && a.dropzone, o.cur.element = a && a.element, o.events = Ie(n, 0, l);
      }
    }
    Object.defineProperty(at, "__esModule", { value: !0 }), at.default = void 0;
    var Qt = { id: "actions/drop", install: function(e) {
      var t = e.actions, n = e.interactStatic, r = e.Interactable, i = e.defaults;
      e.usePlugin(te.default), r.prototype.dropzone = function(o) {
        return function(l, a) {
          if (h.default.object(a)) {
            if (l.options.drop.enabled = a.enabled !== !1, a.listeners) {
              var s = (0, Ve.default)(a.listeners), f = Object.keys(s).reduce(function(d, g) {
                return d[/^(enter|leave)/.test(g) ? "drag".concat(g) : /^(activate|deactivate|move)/.test(g) ? "drop".concat(g) : g] = s[g], d;
              }, {});
              l.off(l.options.drop.listeners), l.on(f), l.options.drop.listeners = f;
            }
            return h.default.func(a.ondrop) && l.on("drop", a.ondrop), h.default.func(a.ondropactivate) && l.on("dropactivate", a.ondropactivate), h.default.func(a.ondropdeactivate) && l.on("dropdeactivate", a.ondropdeactivate), h.default.func(a.ondragenter) && l.on("dragenter", a.ondragenter), h.default.func(a.ondragleave) && l.on("dragleave", a.ondragleave), h.default.func(a.ondropmove) && l.on("dropmove", a.ondropmove), /^(pointer|center)$/.test(a.overlap) ? l.options.drop.overlap = a.overlap : h.default.number(a.overlap) && (l.options.drop.overlap = Math.max(Math.min(1, a.overlap), 0)), "accept" in a && (l.options.drop.accept = a.accept), "checker" in a && (l.options.drop.checker = a.checker), l;
          }
          return h.default.bool(a) ? (l.options.drop.enabled = a, l) : l.options.drop;
        }(this, o);
      }, r.prototype.dropCheck = function(o, l, a, s, f, d) {
        return function(g, b, x, y, O, P, E) {
          var I = !1;
          if (!(E = E || g.getRect(P)))
            return !!g.options.drop.checker && g.options.drop.checker(b, x, I, g, P, y, O);
          var A = g.options.drop.overlap;
          if (A === "pointer") {
            var W = (0, Pe.default)(y, O, "drag"), J = D.getPageXY(b);
            J.x += W.x, J.y += W.y;
            var ae = J.x > E.left && J.x < E.right, N = J.y > E.top && J.y < E.bottom;
            I = ae && N;
          }
          var oe = y.getRect(O);
          if (oe && A === "center") {
            var Me = oe.left + oe.width / 2, Ge = oe.top + oe.height / 2;
            I = Me >= E.left && Me <= E.right && Ge >= E.top && Ge <= E.bottom;
          }
          return oe && h.default.number(A) && (I = Math.max(0, Math.min(E.right, oe.right) - Math.max(E.left, oe.left)) * Math.max(0, Math.min(E.bottom, oe.bottom) - Math.max(E.top, oe.top)) / (oe.width * oe.height) >= A), g.options.drop.checker && (I = g.options.drop.checker(b, x, I, g, P, y, O)), I;
        }(this, o, l, a, s, f, d);
      }, n.dynamicDrop = function(o) {
        return h.default.bool(o) ? (e.dynamicDrop = o, n) : e.dynamicDrop;
      }, (0, M.default)(t.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, i.actions.drop = Qt.defaults;
    }, listeners: { "interactions:before-action-start": function(e) {
      var t = e.interaction;
      t.prepared.name === "drag" && (t.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(e, t) {
      var n = e.interaction, r = (e.event, e.iEvent);
      if (n.prepared.name === "drag") {
        var i = n.dropState;
        i.activeDrops = null, i.events = null, i.activeDrops = Oe(t, n.element), i.events = Ie(n, 0, r), i.events.activate && (ce(i.activeDrops, i.events.activate), t.fire("actions/drop:start", { interaction: n, dragEvent: r }));
      }
    }, "interactions:action-move": st, "interactions:after-action-move": function(e, t) {
      var n = e.interaction, r = e.iEvent;
      n.prepared.name === "drag" && (Tt(n, n.dropState.events), t.fire("actions/drop:move", { interaction: n, dragEvent: r }), n.dropState.events = {});
    }, "interactions:action-end": function(e, t) {
      if (e.interaction.prepared.name === "drag") {
        var n = e.interaction, r = e.iEvent;
        st(e, t), Tt(n, n.dropState.events), t.fire("actions/drop:end", { interaction: n, dragEvent: r });
      }
    }, "interactions:stop": function(e) {
      var t = e.interaction;
      if (t.prepared.name === "drag") {
        var n = t.dropState;
        n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
      }
    } }, getActiveDrops: Oe, getDrop: Ne, getDropEvents: Ie, fireDropEvents: Tt, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, kt = Qt;
    at.default = kt;
    var yt = {};
    function Dn(e) {
      var t = e.interaction, n = e.iEvent, r = e.phase;
      if (t.prepared.name === "gesture") {
        var i = t.pointers.map(function(f) {
          return f.pointer;
        }), o = r === "start", l = r === "end", a = t.interactable.options.deltaSource;
        if (n.touches = [i[0], i[1]], o)
          n.distance = D.touchDistance(i, a), n.box = D.touchBBox(i), n.scale = 1, n.ds = 0, n.angle = D.touchAngle(i, a), n.da = 0, t.gesture.startDistance = n.distance, t.gesture.startAngle = n.angle;
        else if (l) {
          var s = t.prevEvent;
          n.distance = s.distance, n.box = s.box, n.scale = s.scale, n.ds = 0, n.angle = s.angle, n.da = 0;
        } else
          n.distance = D.touchDistance(i, a), n.box = D.touchBBox(i), n.scale = n.distance / t.gesture.startDistance, n.angle = D.touchAngle(i, a), n.ds = n.scale - t.gesture.scale, n.da = n.angle - t.gesture.angle;
        t.gesture.distance = n.distance, t.gesture.angle = n.angle, h.default.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (t.gesture.scale = n.scale);
      }
    }
    Object.defineProperty(yt, "__esModule", { value: !0 }), yt.default = void 0;
    var In = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(e) {
      var t = e.actions, n = e.Interactable, r = e.defaults;
      n.prototype.gesturable = function(i) {
        return h.default.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : h.default.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
      }, t.map.gesture = In, t.methodDict.gesture = "gesturable", r.actions.gesture = In.defaults;
    }, listeners: { "interactions:action-start": Dn, "interactions:action-move": Dn, "interactions:action-end": Dn, "interactions:new": function(e) {
      e.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(e) {
      if (!(e.interaction.pointers.length < 2)) {
        var t = e.interactable.options.gesture;
        if (t && t.enabled)
          return e.action = { name: "gesture" }, !1;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Fi = In;
    yt.default = Fi;
    var en = {};
    function Xi(e, t, n, r, i, o, l) {
      if (!t)
        return !1;
      if (t === !0) {
        var a = h.default.number(o.width) ? o.width : o.right - o.left, s = h.default.number(o.height) ? o.height : o.bottom - o.top;
        if (l = Math.min(l, Math.abs((e === "left" || e === "right" ? a : s) / 2)), a < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), s < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
          var f = a >= 0 ? o.left : o.right;
          return n.x < f + l;
        }
        if (e === "top") {
          var d = s >= 0 ? o.top : o.bottom;
          return n.y < d + l;
        }
        if (e === "right")
          return n.x > (a >= 0 ? o.right : o.left) - l;
        if (e === "bottom")
          return n.y > (s >= 0 ? o.bottom : o.top) - l;
      }
      return !!h.default.element(r) && (h.default.element(t) ? t === r : k.matchesUpTo(r, t, i));
    }
    function mr(e) {
      var t = e.iEvent, n = e.interaction;
      if (n.prepared.name === "resize" && n.resizeAxes) {
        var r = t;
        n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
      }
    }
    Object.defineProperty(en, "__esModule", { value: !0 }), en.default = void 0;
    var $e = { id: "actions/resize", before: ["actions/drag"], install: function(e) {
      var t = e.actions, n = e.browser, r = e.Interactable, i = e.defaults;
      $e.cursors = function(o) {
        return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(n), $e.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
        return function(l, a, s) {
          return h.default.object(a) ? (l.options.resize.enabled = a.enabled !== !1, l.setPerAction("resize", a), l.setOnEvents("resize", a), h.default.string(a.axis) && /^x$|^y$|^xy$/.test(a.axis) ? l.options.resize.axis = a.axis : a.axis === null && (l.options.resize.axis = s.defaults.actions.resize.axis), h.default.bool(a.preserveAspectRatio) ? l.options.resize.preserveAspectRatio = a.preserveAspectRatio : h.default.bool(a.square) && (l.options.resize.square = a.square), l) : h.default.bool(a) ? (l.options.resize.enabled = a, l) : l.options.resize;
        }(this, o, e);
      }, t.map.resize = $e, t.methodDict.resize = "resizable", i.actions.resize = $e.defaults;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(e) {
      (function(t) {
        var n = t.iEvent, r = t.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o = r.rect;
          r._rects = { start: (0, M.default)({}, o), corrected: (0, M.default)({}, o), previous: (0, M.default)({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
        }
      })(e), mr(e);
    }, "interactions:action-move": function(e) {
      (function(t) {
        var n = t.iEvent, r = t.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o = r.interactable.options.resize.invert, l = o === "reposition" || o === "negate", a = r.rect, s = r._rects, f = s.start, d = s.corrected, g = s.delta, b = s.previous;
          if ((0, M.default)(b, d), l) {
            if ((0, M.default)(d, a), o === "reposition") {
              if (d.top > d.bottom) {
                var x = d.top;
                d.top = d.bottom, d.bottom = x;
              }
              if (d.left > d.right) {
                var y = d.left;
                d.left = d.right, d.right = y;
              }
            }
          } else
            d.top = Math.min(a.top, f.bottom), d.bottom = Math.max(a.bottom, f.top), d.left = Math.min(a.left, f.right), d.right = Math.max(a.right, f.left);
          for (var O in d.width = d.right - d.left, d.height = d.bottom - d.top, d)
            g[O] = d[O] - b[O];
          i.edges = r.prepared.edges, i.rect = d, i.deltaRect = g;
        }
      })(e), mr(e);
    }, "interactions:action-end": function(e) {
      var t = e.iEvent, n = e.interaction;
      if (n.prepared.name === "resize" && n.prepared.edges) {
        var r = t;
        r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
      }
    }, "auto-start:check": function(e) {
      var t = e.interaction, n = e.interactable, r = e.element, i = e.rect, o = e.buttons;
      if (i) {
        var l = (0, M.default)({}, t.coords.cur.page), a = n.options.resize;
        if (a && a.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || (o & a.mouseButtons) != 0)) {
          if (h.default.object(a.edges)) {
            var s = { left: !1, right: !1, top: !1, bottom: !1 };
            for (var f in s)
              s[f] = Xi(f, a.edges[f], l, t._latestPointer.eventTarget, r, i, a.margin || $e.defaultMargin);
            s.left = s.left && !s.right, s.top = s.top && !s.bottom, (s.left || s.right || s.top || s.bottom) && (e.action = { name: "resize", edges: s });
          } else {
            var d = a.axis !== "y" && l.x > i.right - $e.defaultMargin, g = a.axis !== "x" && l.y > i.bottom - $e.defaultMargin;
            (d || g) && (e.action = { name: "resize", axes: (d ? "x" : "") + (g ? "y" : "") });
          }
          return !e.action && void 0;
        }
      }
    } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(e) {
      var t = e.edges, n = e.axis, r = e.name, i = $e.cursors, o = null;
      if (n)
        o = i[r + n];
      else if (t) {
        for (var l = "", a = ["top", "bottom", "left", "right"], s = 0; s < a.length; s++) {
          var f = a[s];
          t[f] && (l += f);
        }
        o = i[l];
      }
      return o;
    }, defaultMargin: null }, Yi = $e;
    en.default = Yi;
    var Mt = {};
    Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default = void 0;
    var qi = { id: "actions", install: function(e) {
      e.usePlugin(yt.default), e.usePlugin(en.default), e.usePlugin(te.default), e.usePlugin(at.default);
    } };
    Mt.default = qi;
    var Re = {};
    Object.defineProperty(Re, "__esModule", { value: !0 }), Re.default = void 0;
    var Fe, lt, br = 0, Gi = { request: function(e) {
      return Fe(e);
    }, cancel: function(e) {
      return lt(e);
    }, init: function(e) {
      if (Fe = e.requestAnimationFrame, lt = e.cancelAnimationFrame, !Fe)
        for (var t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length; n++) {
          var r = t[n];
          Fe = e["".concat(r, "RequestAnimationFrame")], lt = e["".concat(r, "CancelAnimationFrame")] || e["".concat(r, "CancelRequestAnimationFrame")];
        }
      Fe = Fe && Fe.bind(e), lt = lt && lt.bind(e), Fe || (Fe = function(i) {
        var o = Date.now(), l = Math.max(0, 16 - (o - br)), a = e.setTimeout(function() {
          i(o + l);
        }, l);
        return br = o + l, a;
      }, lt = function(i) {
        return clearTimeout(i);
      });
    } };
    Re.default = Gi;
    var Xe = {};
    Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.default = void 0, Xe.getContainer = tn, Xe.getScroll = jt, Xe.getScrollSize = function(e) {
      return h.default.window(e) && (e = window.document.body), { x: e.scrollWidth, y: e.scrollHeight };
    }, Xe.getScrollSizeDelta = function(e, t) {
      var n = e.interaction, r = e.element, i = n && n.interactable.options[n.prepared.name].autoScroll;
      if (!i || !i.enabled)
        return t(), { x: 0, y: 0 };
      var o = tn(i.container, n.interactable, r), l = jt(o);
      t();
      var a = jt(o);
      return { x: a.x - l.x, y: a.y - l.y };
    };
    var H = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(e) {
      H.isScrolling = !0, Re.default.cancel(H.i), e.autoScroll = H, H.interaction = e, H.prevTime = H.now(), H.i = Re.default.request(H.scroll);
    }, stop: function() {
      H.isScrolling = !1, H.interaction && (H.interaction.autoScroll = null), Re.default.cancel(H.i);
    }, scroll: function() {
      var e = H.interaction, t = e.interactable, n = e.element, r = e.prepared.name, i = t.options[r].autoScroll, o = tn(i.container, t, n), l = H.now(), a = (l - H.prevTime) / 1e3, s = i.speed * a;
      if (s >= 1) {
        var f = { x: H.x * s, y: H.y * s };
        if (f.x || f.y) {
          var d = jt(o);
          h.default.window(o) ? o.scrollBy(f.x, f.y) : o && (o.scrollLeft += f.x, o.scrollTop += f.y);
          var g = jt(o), b = { x: g.x - d.x, y: g.y - d.y };
          (b.x || b.y) && t.fire({ type: "autoscroll", target: n, interactable: t, delta: b, interaction: e, container: o });
        }
        H.prevTime = l;
      }
      H.isScrolling && (Re.default.cancel(H.i), H.i = Re.default.request(H.scroll));
    }, check: function(e, t) {
      var n;
      return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
    }, onInteractionMove: function(e) {
      var t = e.interaction, n = e.pointer;
      if (t.interacting() && H.check(t.interactable, t.prepared.name))
        if (t.simulation)
          H.x = H.y = 0;
        else {
          var r, i, o, l, a = t.interactable, s = t.element, f = t.prepared.name, d = a.options[f].autoScroll, g = tn(d.container, a, s);
          if (h.default.window(g))
            l = n.clientX < H.margin, r = n.clientY < H.margin, i = n.clientX > g.innerWidth - H.margin, o = n.clientY > g.innerHeight - H.margin;
          else {
            var b = k.getElementClientRect(g);
            l = n.clientX < b.left + H.margin, r = n.clientY < b.top + H.margin, i = n.clientX > b.right - H.margin, o = n.clientY > b.bottom - H.margin;
          }
          H.x = i ? 1 : l ? -1 : 0, H.y = o ? 1 : r ? -1 : 0, H.isScrolling || (H.margin = d.margin, H.speed = d.speed, H.start(t));
        }
    } };
    function tn(e, t, n) {
      return (h.default.string(e) ? (0, U.getStringOptionResult)(e, t, n) : e) || (0, p.getWindow)(n);
    }
    function jt(e) {
      return h.default.window(e) && (e = window.document.body), { x: e.scrollLeft, y: e.scrollTop };
    }
    var Ui = { id: "auto-scroll", install: function(e) {
      var t = e.defaults, n = e.actions;
      e.autoScroll = H, H.now = function() {
        return e.now();
      }, n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = H.defaults;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.autoScroll = null;
    }, "interactions:destroy": function(e) {
      e.interaction.autoScroll = null, H.stop(), H.interaction && (H.interaction = null);
    }, "interactions:stop": H.stop, "interactions:action-move": function(e) {
      return H.onInteractionMove(e);
    } } }, Vi = Ui;
    Xe.default = Vi;
    var Ee = {};
    Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.copyAction = function(e, t) {
      return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
    }, Ee.sign = void 0, Ee.warnOnce = function(e, t) {
      var n = !1;
      return function() {
        return n || (p.window.console.warn(t), n = !0), e.apply(this, arguments);
      };
    }, Ee.sign = function(e) {
      return e >= 0 ? 1 : -1;
    };
    var nn = {};
    function Ki(e) {
      return h.default.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Ji(e) {
      return h.default.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    Object.defineProperty(nn, "__esModule", { value: !0 }), nn.default = void 0;
    var Zi = { id: "auto-start/interactableMethods", install: function(e) {
      var t = e.Interactable;
      t.prototype.getAction = function(n, r, i, o) {
        var l = function(a, s, f, d, g) {
          var b = a.getRect(d), x = { action: null, interactable: a, interaction: f, element: d, rect: b, buttons: s.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[s.button] };
          return g.fire("auto-start:check", x), x.action;
        }(this, r, i, o, e);
        return this.options.actionChecker ? this.options.actionChecker(n, r, l, this, o, i) : l;
      }, t.prototype.ignoreFrom = (0, Ee.warnOnce)(function(n) {
        return this._backCompatOption("ignoreFrom", n);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = (0, Ee.warnOnce)(function(n) {
        return this._backCompatOption("allowFrom", n);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = Ji, t.prototype.styleCursor = Ki;
    } };
    nn.default = Zi;
    var mt = {};
    function wr(e, t, n, r, i) {
      return t.testIgnoreAllow(t.options[e.name], n, r) && t.options[e.name].enabled && rn(t, n, e, i) ? e : null;
    }
    function Qi(e, t, n, r, i, o, l) {
      for (var a = 0, s = r.length; a < s; a++) {
        var f = r[a], d = i[a], g = f.getAction(t, n, e, d);
        if (g) {
          var b = wr(g, f, d, o, l);
          if (b)
            return { action: b, interactable: f, element: d };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function xr(e, t, n, r, i) {
      var o = [], l = [], a = r;
      function s(d) {
        o.push(d), l.push(a);
      }
      for (; h.default.element(a); ) {
        o = [], l = [], i.interactables.forEachMatch(a, s);
        var f = Qi(e, t, n, o, l, r, i);
        if (f.action && !f.interactable.options[f.action.name].manualStart)
          return f;
        a = k.parentNode(a);
      }
      return { action: null, interactable: null, element: null };
    }
    function Sr(e, t, n) {
      var r = t.action, i = t.interactable, o = t.element;
      r = r || { name: null }, e.interactable = i, e.element = o, (0, Ee.copyAction)(e.prepared, r), e.rect = i && r.name ? i.getRect(o) : null, Er(e, n), n.fire("autoStart:prepared", { interaction: e });
    }
    function rn(e, t, n, r) {
      var i = e.options, o = i[n.name].max, l = i[n.name].maxPerElement, a = r.autoStart.maxInteractions, s = 0, f = 0, d = 0;
      if (!(o && l && a))
        return !1;
      for (var g = 0; g < r.interactions.list.length; g++) {
        var b = r.interactions.list[g], x = b.prepared.name;
        if (b.interacting() && (++s >= a || b.interactable === e && ((f += x === n.name ? 1 : 0) >= o || b.element === t && (d++, x === n.name && d >= l))))
          return !1;
      }
      return a > 0;
    }
    function Or(e, t) {
      return h.default.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
    }
    function Rn(e, t, n) {
      var r = n.autoStart.cursorElement;
      r && r !== e && (r.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
    }
    function Er(e, t) {
      var n = e.interactable, r = e.element, i = e.prepared;
      if (e.pointerType === "mouse" && n && n.options.styleCursor) {
        var o = "";
        if (i.name) {
          var l = n.options[i.name].cursorChecker;
          o = h.default.func(l) ? l(i, n, r, e._interacting) : t.actions.map[i.name].getCursor(i);
        }
        Rn(e.element, o || "", t);
      } else
        t.autoStart.cursorElement && Rn(t.autoStart.cursorElement, "", t);
    }
    Object.defineProperty(mt, "__esModule", { value: !0 }), mt.default = void 0;
    var eo = { id: "auto-start/base", before: ["actions"], install: function(e) {
      var t = e.interactStatic, n = e.defaults;
      e.usePlugin(nn.default), n.base.actionChecker = null, n.base.styleCursor = !0, (0, M.default)(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), t.maxInteractions = function(r) {
        return Or(r, e);
      }, e.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: rn, cursorElement: null };
    }, listeners: { "interactions:down": function(e, t) {
      var n = e.interaction, r = e.pointer, i = e.event, o = e.eventTarget;
      n.interacting() || Sr(n, xr(n, r, i, o, t), t);
    }, "interactions:move": function(e, t) {
      (function(n, r) {
        var i = n.interaction, o = n.pointer, l = n.event, a = n.eventTarget;
        i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Sr(i, xr(i, o, l, a, r), r);
      })(e, t), function(n, r) {
        var i = n.interaction;
        if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
          r.fire("autoStart:before-start", n);
          var o = i.interactable, l = i.prepared.name;
          l && o && (o.options[l].manualStart || !rn(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), Er(i, r)));
        }
      }(e, t);
    }, "interactions:stop": function(e, t) {
      var n = e.interaction, r = n.interactable;
      r && r.options.styleCursor && Rn(n.element, "", t);
    } }, maxInteractions: Or, withinInteractionLimit: rn, validateAction: wr }, to = eo;
    mt.default = to;
    var on = {};
    Object.defineProperty(on, "__esModule", { value: !0 }), on.default = void 0;
    var no = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(e, t) {
      var n = e.interaction, r = e.eventTarget, i = e.dx, o = e.dy;
      if (n.prepared.name === "drag") {
        var l = Math.abs(i), a = Math.abs(o), s = n.interactable.options.drag, f = s.startAxis, d = l > a ? "x" : l < a ? "y" : "xy";
        if (n.prepared.axis = s.lockAxis === "start" ? d[0] : s.lockAxis, d !== "xy" && f !== "xy" && f !== d) {
          n.prepared.name = null;
          for (var g = r, b = function(y) {
            if (y !== n.interactable) {
              var O = n.interactable.options.drag;
              if (!O.manualStart && y.testIgnoreAllow(O, g, r)) {
                var P = y.getAction(n.downPointer, n.downEvent, n, g);
                if (P && P.name === "drag" && function(E, I) {
                  if (!I)
                    return !1;
                  var A = I.options.drag.startAxis;
                  return E === "xy" || A === "xy" || A === E;
                }(d, y) && mt.default.validateAction(P, y, g, r, t))
                  return y;
              }
            }
          }; h.default.element(g); ) {
            var x = t.interactables.forEachMatch(g, b);
            if (x) {
              n.prepared.name = "drag", n.interactable = x, n.element = g;
              break;
            }
            g = (0, k.parentNode)(g);
          }
        }
      }
    } } };
    on.default = no;
    var an = {};
    function Cn(e) {
      var t = e.prepared && e.prepared.name;
      if (!t)
        return null;
      var n = e.interactable.options;
      return n[t].hold || n[t].delay;
    }
    Object.defineProperty(an, "__esModule", { value: !0 }), an.default = void 0;
    var ro = { id: "auto-start/hold", install: function(e) {
      var t = e.defaults;
      e.usePlugin(mt.default), t.perAction.hold = 0, t.perAction.delay = 0;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(e) {
      var t = e.interaction, n = Cn(t);
      n > 0 && (t.autoStartHoldTimer = setTimeout(function() {
        t.start(t.prepared, t.interactable, t.element);
      }, n));
    }, "interactions:move": function(e) {
      var t = e.interaction, n = e.duplicate;
      t.autoStartHoldTimer && t.pointerWasMoved && !n && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(e) {
      var t = e.interaction;
      Cn(t) > 0 && (t.prepared.name = null);
    } }, getHoldDuration: Cn }, io = ro;
    an.default = io;
    var zt = {};
    Object.defineProperty(zt, "__esModule", { value: !0 }), zt.default = void 0;
    var oo = { id: "auto-start", install: function(e) {
      e.usePlugin(mt.default), e.usePlugin(an.default), e.usePlugin(on.default);
    } };
    zt.default = oo;
    var ut = {};
    function ao(e) {
      return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : h.default.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault;
    }
    function so(e) {
      var t = e.interaction, n = e.event;
      t.interactable && t.interactable.checkAndPreventDefault(n);
    }
    function _r(e) {
      var t = e.Interactable;
      t.prototype.preventDefault = ao, t.prototype.checkAndPreventDefault = function(n) {
        return function(r, i, o) {
          var l = r.options.preventDefault;
          if (l !== "never")
            if (l !== "always") {
              if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var a = (0, p.getWindow)(o.target).document, s = i.getDocOptions(a);
                if (!s || !s.events || s.events.passive !== !1)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || h.default.element(o.target) && (0, k.matchesSelector)(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else
              o.preventDefault();
        }(this, e, n);
      }, e.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
        for (var r = 0; r < e.interactions.list.length; r++) {
          var i = e.interactions.list[r];
          if (i.element && (i.element === n.target || (0, k.nodeContains)(i.element, n.target)))
            return void i.interactable.checkAndPreventDefault(n);
        }
      } });
    }
    Object.defineProperty(ut, "__esModule", { value: !0 }), ut.default = void 0, ut.install = _r;
    var lo = { id: "core/interactablePreventDefault", install: _r, listeners: ["down", "move", "up", "cancel"].reduce(function(e, t) {
      return e["interactions:".concat(t)] = so, e;
    }, {}) };
    ut.default = lo;
    var An = {};
    Object.defineProperty(An, "__esModule", { value: !0 }), An.default = void 0, An.default = {};
    var Dt, sn = {};
    Object.defineProperty(sn, "__esModule", { value: !0 }), sn.default = void 0, function(e) {
      e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners";
    }(Dt || (Dt = {})), Dt.touchAction, Dt.boxSizing, Dt.noListeners;
    var uo = { id: "dev-tools", install: function() {
    } };
    sn.default = uo;
    var ct = {};
    Object.defineProperty(ct, "__esModule", { value: !0 }), ct.default = function e(t) {
      var n = {};
      for (var r in t) {
        var i = t[r];
        h.default.plainObject(i) ? n[r] = e(i) : h.default.array(i) ? n[r] = q.from(i) : n[r] = i;
      }
      return n;
    };
    var ft = {};
    function Pr(e, t) {
      return function(n) {
        if (Array.isArray(n))
          return n;
      }(e) || function(n, r) {
        var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
        if (i != null) {
          var o, l, a = [], s = !0, f = !1;
          try {
            for (i = i.call(n); !(s = (o = i.next()).done) && (a.push(o.value), !r || a.length !== r); s = !0)
              ;
          } catch (d) {
            f = !0, l = d;
          } finally {
            try {
              s || i.return == null || i.return();
            } finally {
              if (f)
                throw l;
            }
          }
          return a;
        }
      }(e, t) || function(n, r) {
        if (n) {
          if (typeof n == "string")
            return Tr(n, r);
          var i = Object.prototype.toString.call(n).slice(8, -1);
          return i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set" ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Tr(n, r) : void 0;
        }
      }(e, t) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function Tr(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function co(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function dt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(ft, "__esModule", { value: !0 }), ft.default = void 0, ft.getRectOffset = kr;
    var fo = function() {
      function e(r) {
        (function(i, o) {
          if (!(i instanceof o))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), dt(this, "states", []), dt(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), dt(this, "startDelta", void 0), dt(this, "result", void 0), dt(this, "endResult", void 0), dt(this, "edges", void 0), dt(this, "interaction", void 0), this.interaction = r, this.result = ln();
      }
      var t, n;
      return t = e, (n = [{ key: "start", value: function(r, i) {
        var o = r.phase, l = this.interaction, a = function(f) {
          var d = f.interactable.options[f.prepared.name], g = d.modifiers;
          return g && g.length ? g : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(b) {
            var x = d[b];
            return x && x.enabled && { options: x, methods: x._methods };
          }).filter(function(b) {
            return !!b;
          });
        }(l);
        this.prepareStates(a), this.edges = (0, M.default)({}, l.edges), this.startOffset = kr(l.rect, i), this.startDelta = { x: 0, y: 0 };
        var s = this.fillArg({ phase: o, pageCoords: i, preEnd: !1 });
        return this.result = ln(), this.startAll(s), this.result = this.setAll(s);
      } }, { key: "fillArg", value: function(r) {
        var i = this.interaction;
        return r.interaction = i, r.interactable = i.interactable, r.element = i.element, r.rect = r.rect || i.rect, r.edges = this.edges, r.startOffset = this.startOffset, r;
      } }, { key: "startAll", value: function(r) {
        for (var i = 0; i < this.states.length; i++) {
          var o = this.states[i];
          o.methods.start && (r.state = o, o.methods.start(r));
        }
      } }, { key: "setAll", value: function(r) {
        var i = r.phase, o = r.preEnd, l = r.skipModifiers, a = r.rect;
        r.coords = (0, M.default)({}, r.pageCoords), r.rect = (0, M.default)({}, a);
        for (var s = l ? this.states.slice(l) : this.states, f = ln(r.coords, r.rect), d = 0; d < s.length; d++) {
          var g, b = s[d], x = b.options, y = (0, M.default)({}, r.coords), O = null;
          (g = b.methods) != null && g.set && this.shouldDo(x, o, i) && (r.state = b, O = b.methods.set(r), U.addEdges(this.interaction.edges, r.rect, { x: r.coords.x - y.x, y: r.coords.y - y.y })), f.eventProps.push(O);
        }
        f.delta.x = r.coords.x - r.pageCoords.x, f.delta.y = r.coords.y - r.pageCoords.y, f.rectDelta.left = r.rect.left - a.left, f.rectDelta.right = r.rect.right - a.right, f.rectDelta.top = r.rect.top - a.top, f.rectDelta.bottom = r.rect.bottom - a.bottom;
        var P = this.result.coords, E = this.result.rect;
        if (P && E) {
          var I = f.rect.left !== E.left || f.rect.right !== E.right || f.rect.top !== E.top || f.rect.bottom !== E.bottom;
          f.changed = I || P.x !== f.coords.x || P.y !== f.coords.y;
        }
        return f;
      } }, { key: "applyToInteraction", value: function(r) {
        var i = this.interaction, o = r.phase, l = i.coords.cur, a = i.coords.start, s = this.result, f = this.startDelta, d = s.delta;
        o === "start" && (0, M.default)(this.startDelta, s.delta);
        for (var g = 0; g < [[a, f], [l, d]].length; g++) {
          var b = Pr([[a, f], [l, d]][g], 2), x = b[0], y = b[1];
          x.page.x += y.x, x.page.y += y.y, x.client.x += y.x, x.client.y += y.y;
        }
        var O = this.result.rectDelta, P = r.rect || i.rect;
        P.left += O.left, P.right += O.right, P.top += O.top, P.bottom += O.bottom, P.width = P.right - P.left, P.height = P.bottom - P.top;
      } }, { key: "setAndApply", value: function(r) {
        var i = this.interaction, o = r.phase, l = r.preEnd, a = r.skipModifiers, s = this.setAll(this.fillArg({ preEnd: l, phase: o, pageCoords: r.modifiedCoords || i.coords.cur.page }));
        if (this.result = s, !s.changed && (!a || a < this.states.length) && i.interacting())
          return !1;
        if (r.modifiedCoords) {
          var f = i.coords.cur.page, d = { x: r.modifiedCoords.x - f.x, y: r.modifiedCoords.y - f.y };
          s.coords.x += d.x, s.coords.y += d.y, s.delta.x += d.x, s.delta.y += d.y;
        }
        this.applyToInteraction(r);
      } }, { key: "beforeEnd", value: function(r) {
        var i = r.interaction, o = r.event, l = this.states;
        if (l && l.length) {
          for (var a = !1, s = 0; s < l.length; s++) {
            var f = l[s];
            r.state = f;
            var d = f.options, g = f.methods, b = g.beforeEnd && g.beforeEnd(r);
            if (b)
              return this.endResult = b, !1;
            a = a || !a && this.shouldDo(d, !0, r.phase, !0);
          }
          a && i.move({ event: o, preEnd: !0 });
        }
      } }, { key: "stop", value: function(r) {
        var i = r.interaction;
        if (this.states && this.states.length) {
          var o = (0, M.default)({ states: this.states, interactable: i.interactable, element: i.element, rect: null }, r);
          this.fillArg(o);
          for (var l = 0; l < this.states.length; l++) {
            var a = this.states[l];
            o.state = a, a.methods.stop && a.methods.stop(o);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(r) {
        this.states = [];
        for (var i = 0; i < r.length; i++) {
          var o = r[i], l = o.options, a = o.methods, s = o.name;
          this.states.push({ options: l, methods: a, index: i, name: s });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(r) {
        var i = r.interaction, o = i.coords, l = i.rect, a = i.modification;
        if (a.result) {
          for (var s = a.startDelta, f = a.result, d = f.delta, g = f.rectDelta, b = [[o.start, s], [o.cur, d]], x = 0; x < b.length; x++) {
            var y = Pr(b[x], 2), O = y[0], P = y[1];
            O.page.x -= P.x, O.page.y -= P.y, O.client.x -= P.x, O.client.y -= P.y;
          }
          l.left -= g.left, l.right -= g.right, l.top -= g.top, l.bottom -= g.bottom;
        }
      } }, { key: "shouldDo", value: function(r, i, o, l) {
        return !(!r || r.enabled === !1 || l && !r.endOnly || r.endOnly && !i || o === "start" && !r.setStart);
      } }, { key: "copyFrom", value: function(r) {
        this.startOffset = r.startOffset, this.startDelta = r.startDelta, this.edges = r.edges, this.states = r.states.map(function(i) {
          return (0, ct.default)(i);
        }), this.result = ln((0, M.default)({}, r.result.coords), (0, M.default)({}, r.result.rect));
      } }, { key: "destroy", value: function() {
        for (var r in this)
          this[r] = null;
      } }]) && co(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    function ln(e, t) {
      return { rect: t, coords: e, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
    }
    function kr(e, t) {
      return e ? { left: t.x - e.left, top: t.y - e.top, right: e.right - t.x, bottom: e.bottom - t.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    ft.default = fo;
    var ve = {};
    function un(e) {
      var t = e.iEvent, n = e.interaction.modification.result;
      n && (t.modifiers = n.eventProps);
    }
    Object.defineProperty(ve, "__esModule", { value: !0 }), ve.addEventModifiers = un, ve.default = void 0, ve.makeModifier = function(e, t) {
      var n = e.defaults, r = { start: e.start, set: e.set, beforeEnd: e.beforeEnd, stop: e.stop }, i = function(o) {
        var l = o || {};
        for (var a in l.enabled = l.enabled !== !1, n)
          a in l || (l[a] = n[a]);
        var s = { options: l, methods: r, name: t, enable: function() {
          return l.enabled = !0, s;
        }, disable: function() {
          return l.enabled = !1, s;
        } };
        return s;
      };
      return t && typeof t == "string" && (i._defaults = n, i._methods = r), i;
    };
    var po = { id: "modifiers/base", before: ["actions"], install: function(e) {
      e.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(e) {
      var t = e.interaction;
      t.modification = new ft.default(t);
    }, "interactions:before-action-start": function(e) {
      var t = e.interaction.modification;
      t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e);
    }, "interactions:before-action-move": function(e) {
      return e.interaction.modification.setAndApply(e);
    }, "interactions:before-action-end": function(e) {
      return e.interaction.modification.beforeEnd(e);
    }, "interactions:action-start": un, "interactions:action-move": un, "interactions:action-end": un, "interactions:after-action-start": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:after-action-move": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:stop": function(e) {
      return e.interaction.modification.stop(e);
    } } }, ho = po;
    ve.default = ho;
    var It = {};
    Object.defineProperty(It, "__esModule", { value: !0 }), It.defaults = void 0, It.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} };
    var Rt = {};
    function Hn(e) {
      return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Hn(e);
    }
    function vo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Bn(e, t) {
      return Bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, Bn(e, t);
    }
    function go(e, t) {
      if (t && (Hn(t) === "object" || typeof t == "function"))
        return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ie(e);
    }
    function ie(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function cn(e) {
      return cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, cn(e);
    }
    function se(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.InteractEvent = void 0;
    var Mr = function(e) {
      (function(a, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && Bn(a, s);
      })(l, e);
      var t, n, r, i, o = (r = l, i = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var a, s = cn(r);
        if (i) {
          var f = cn(this).constructor;
          a = Reflect.construct(s, arguments, f);
        } else
          a = s.apply(this, arguments);
        return go(this, a);
      });
      function l(a, s, f, d, g, b, x) {
        var y;
        (function(ae, N) {
          if (!(ae instanceof N))
            throw new TypeError("Cannot call a class as a function");
        })(this, l), se(ie(y = o.call(this, a)), "relatedTarget", null), se(ie(y), "screenX", void 0), se(ie(y), "screenY", void 0), se(ie(y), "button", void 0), se(ie(y), "buttons", void 0), se(ie(y), "ctrlKey", void 0), se(ie(y), "shiftKey", void 0), se(ie(y), "altKey", void 0), se(ie(y), "metaKey", void 0), se(ie(y), "page", void 0), se(ie(y), "client", void 0), se(ie(y), "delta", void 0), se(ie(y), "rect", void 0), se(ie(y), "x0", void 0), se(ie(y), "y0", void 0), se(ie(y), "t0", void 0), se(ie(y), "dt", void 0), se(ie(y), "duration", void 0), se(ie(y), "clientX0", void 0), se(ie(y), "clientY0", void 0), se(ie(y), "velocity", void 0), se(ie(y), "speed", void 0), se(ie(y), "swipe", void 0), se(ie(y), "axes", void 0), se(ie(y), "preEnd", void 0), g = g || a.element;
        var O = a.interactable, P = (O && O.options || It.defaults).deltaSource, E = (0, Pe.default)(O, g, f), I = d === "start", A = d === "end", W = I ? ie(y) : a.prevEvent, J = I ? a.coords.start : A ? { page: W.page, client: W.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
        return y.page = (0, M.default)({}, J.page), y.client = (0, M.default)({}, J.client), y.rect = (0, M.default)({}, a.rect), y.timeStamp = J.timeStamp, A || (y.page.x -= E.x, y.page.y -= E.y, y.client.x -= E.x, y.client.y -= E.y), y.ctrlKey = s.ctrlKey, y.altKey = s.altKey, y.shiftKey = s.shiftKey, y.metaKey = s.metaKey, y.button = s.button, y.buttons = s.buttons, y.target = g, y.currentTarget = g, y.preEnd = b, y.type = x || f + (d || ""), y.interactable = O, y.t0 = I ? a.pointers[a.pointers.length - 1].downTime : W.t0, y.x0 = a.coords.start.page.x - E.x, y.y0 = a.coords.start.page.y - E.y, y.clientX0 = a.coords.start.client.x - E.x, y.clientY0 = a.coords.start.client.y - E.y, y.delta = I || A ? { x: 0, y: 0 } : { x: y[P].x - W[P].x, y: y[P].y - W[P].y }, y.dt = a.coords.delta.timeStamp, y.duration = y.timeStamp - y.t0, y.velocity = (0, M.default)({}, a.coords.velocity[P]), y.speed = (0, je.default)(y.velocity.x, y.velocity.y), y.swipe = A || d === "inertiastart" ? y.getSwipe() : null, y;
      }
      return t = l, (n = [{ key: "getSwipe", value: function() {
        var a = this._interaction;
        if (a.prevEvent.speed < 600 || this.timeStamp - a.prevEvent.timeStamp > 150)
          return null;
        var s = 180 * Math.atan2(a.prevEvent.velocityY, a.prevEvent.velocityX) / Math.PI;
        s < 0 && (s += 360);
        var f = 112.5 <= s && s < 247.5, d = 202.5 <= s && s < 337.5;
        return { up: d, down: !d && 22.5 <= s && s < 157.5, left: f, right: !f && (292.5 <= s || s < 67.5), angle: s, speed: a.prevEvent.speed, velocity: { x: a.prevEvent.velocityX, y: a.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }]) && vo(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), l;
    }(ee.BaseEvent);
    Rt.InteractEvent = Mr, Object.defineProperties(Mr.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(e) {
      this.page.x = e;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(e) {
      this.page.y = e;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(e) {
      this.client.x = e;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(e) {
      this.client.y = e;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(e) {
      this.delta.x = e;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(e) {
      this.delta.y = e;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(e) {
      this.velocity.x = e;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(e) {
      this.velocity.y = e;
    } } });
    var Ct = {};
    function jr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function yo(e, t, n) {
      return t && jr(e.prototype, t), n && jr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function At(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.PointerInfo = void 0;
    var mo = yo(function e(t, n, r, i, o) {
      (function(l, a) {
        if (!(l instanceof a))
          throw new TypeError("Cannot call a class as a function");
      })(this, e), At(this, "id", void 0), At(this, "pointer", void 0), At(this, "event", void 0), At(this, "downTime", void 0), At(this, "downTarget", void 0), this.id = t, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
    });
    Ct.PointerInfo = mo;
    var fn, dn, xe = {};
    function bo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function le(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(xe, "__esModule", { value: !0 }), xe.Interaction = void 0, Object.defineProperty(xe, "PointerInfo", { enumerable: !0, get: function() {
      return Ct.PointerInfo;
    } }), xe.default = xe._ProxyValues = xe._ProxyMethods = void 0, xe._ProxyValues = fn, function(e) {
      e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "";
    }(fn || (xe._ProxyValues = fn = {})), xe._ProxyMethods = dn, function(e) {
      e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
    }(dn || (xe._ProxyMethods = dn = {}));
    var wo = 0, zr = function() {
      function e(r) {
        var i = this, o = r.pointerType, l = r.scopeFire;
        (function(b, x) {
          if (!(b instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), le(this, "interactable", null), le(this, "element", null), le(this, "rect", null), le(this, "_rects", void 0), le(this, "edges", null), le(this, "_scopeFire", void 0), le(this, "prepared", { name: null, axis: null, edges: null }), le(this, "pointerType", void 0), le(this, "pointers", []), le(this, "downEvent", null), le(this, "downPointer", {}), le(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), le(this, "prevEvent", null), le(this, "pointerIsDown", !1), le(this, "pointerWasMoved", !1), le(this, "_interacting", !1), le(this, "_ending", !1), le(this, "_stopped", !0), le(this, "_proxy", null), le(this, "simulation", null), le(this, "doMove", (0, Ee.warnOnce)(function(b) {
          this.move(b);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), le(this, "coords", { start: D.newCoords(), prev: D.newCoords(), cur: D.newCoords(), delta: D.newCoords(), velocity: D.newCoords() }), le(this, "_id", wo++), this._scopeFire = l, this.pointerType = o;
        var a = this;
        this._proxy = {};
        var s = function(b) {
          Object.defineProperty(i._proxy, b, { get: function() {
            return a[b];
          } });
        };
        for (var f in fn)
          s(f);
        var d = function(b) {
          Object.defineProperty(i._proxy, b, { value: function() {
            return a[b].apply(a, arguments);
          } });
        };
        for (var g in dn)
          d(g);
        this._scopeFire("interactions:new", { interaction: this });
      }
      var t, n;
      return t = e, n = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(r, i, o) {
        var l = this.updatePointer(r, i, o, !0), a = this.pointers[l];
        this._scopeFire("interactions:down", { pointer: r, event: i, eventTarget: o, pointerIndex: l, pointerInfo: a, type: "down", interaction: this });
      } }, { key: "start", value: function(r, i, o) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (r.name === "gesture" ? 2 : 1) || !i.options[r.name].enabled) && ((0, Ee.copyAction)(this.prepared, r), this.interactable = i, this.element = o, this.rect = i.getRect(o), this.edges = this.prepared.edges ? (0, M.default)({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(r, i, o) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(r, i, o, !1);
        var l, a, s = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (l = this.coords.cur.client.x - this.coords.start.client.x, a = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, je.default)(l, a) > this.pointerMoveTolerance);
        var f = this.getPointerIndex(r), d = { pointer: r, pointerIndex: f, pointerInfo: this.pointers[f], event: i, type: "move", eventTarget: o, dx: l, dy: a, duplicate: s, interaction: this };
        s || D.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", d), s || this.simulation || (this.interacting() && (d.type = null, this.move(d)), this.pointerWasMoved && D.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(r) {
        r && r.event || D.setZeroCoords(this.coords.delta), (r = (0, M.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, r || {})).phase = "move", this._doPhase(r);
      } }, { key: "pointerUp", value: function(r, i, o, l) {
        var a = this.getPointerIndex(r);
        a === -1 && (a = this.updatePointer(r, i, o, !1));
        var s = /cancel$/i.test(i.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(s), { pointer: r, pointerIndex: a, pointerInfo: this.pointers[a], event: i, eventTarget: o, type: s, curEventTarget: l, interaction: this }), this.simulation || this.end(i), this.removePointer(r, i);
      } }, { key: "documentBlur", value: function(r) {
        this.end(r), this._scopeFire("interactions:blur", { event: r, type: "blur", interaction: this });
      } }, { key: "end", value: function(r) {
        var i;
        this._ending = !0, r = r || this._latestPointer.event, this.interacting() && (i = this._doPhase({ event: r, interaction: this, phase: "end" })), this._ending = !1, i === !0 && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(r) {
        var i = D.getPointerId(r);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : q.findIndex(this.pointers, function(o) {
          return o.id === i;
        });
      } }, { key: "getPointerInfo", value: function(r) {
        return this.pointers[this.getPointerIndex(r)];
      } }, { key: "updatePointer", value: function(r, i, o, l) {
        var a = D.getPointerId(r), s = this.getPointerIndex(r), f = this.pointers[s];
        return l = l !== !1 && (l || /(down|start)$/i.test(i.type)), f ? f.pointer = r : (f = new Ct.PointerInfo(a, r, i, null, null), s = this.pointers.length, this.pointers.push(f)), D.setCoords(this.coords.cur, this.pointers.map(function(d) {
          return d.pointer;
        }), this._now()), D.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), l && (this.pointerIsDown = !0, f.downTime = this.coords.cur.timeStamp, f.downTarget = o, D.pointerExtend(this.downPointer, r), this.interacting() || (D.copyCoords(this.coords.start, this.coords.cur), D.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = i, this.pointerWasMoved = !1)), this._updateLatestPointer(r, i, o), this._scopeFire("interactions:update-pointer", { pointer: r, event: i, eventTarget: o, down: l, pointerInfo: f, pointerIndex: s, interaction: this }), s;
      } }, { key: "removePointer", value: function(r, i) {
        var o = this.getPointerIndex(r);
        if (o !== -1) {
          var l = this.pointers[o];
          this._scopeFire("interactions:remove-pointer", { pointer: r, event: i, eventTarget: null, pointerIndex: o, pointerInfo: l, interaction: this }), this.pointers.splice(o, 1), this.pointerIsDown = !1;
        }
      } }, { key: "_updateLatestPointer", value: function(r, i, o) {
        this._latestPointer.pointer = r, this._latestPointer.event = i, this._latestPointer.eventTarget = o;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(r, i, o, l) {
        return new Rt.InteractEvent(this, r, this.prepared.name, i, this.element, o, l);
      } }, { key: "_fireEvent", value: function(r) {
        var i;
        (i = this.interactable) == null || i.fire(r), (!this.prevEvent || r.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = r);
      } }, { key: "_doPhase", value: function(r) {
        var i = r.event, o = r.phase, l = r.preEnd, a = r.type, s = this.rect;
        if (s && o === "move" && (U.addEdges(this.edges, s, this.coords.delta[this.interactable.options.deltaSource]), s.width = s.right - s.left, s.height = s.bottom - s.top), this._scopeFire("interactions:before-action-".concat(o), r) === !1)
          return !1;
        var f = r.iEvent = this._createPreparedEvent(i, o, l, a);
        return this._scopeFire("interactions:action-".concat(o), r), o === "start" && (this.prevEvent = f), this._fireEvent(f), this._scopeFire("interactions:after-action-".concat(o), r), !0;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], n && bo(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    xe.Interaction = zr;
    var xo = zr;
    xe.default = xo;
    var Je = {};
    function Dr(e) {
      e.pointerIsDown && (Ln(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
    }
    function Ir(e) {
      Wn(e.interaction);
    }
    function Wn(e) {
      if (!function(n) {
        return !(!n.offset.pending.x && !n.offset.pending.y);
      }(e))
        return !1;
      var t = e.offset.pending;
      return Ln(e.coords.cur, t), Ln(e.coords.delta, t), U.addEdges(e.edges, e.rect, t), t.x = 0, t.y = 0, !0;
    }
    function So(e) {
      var t = e.x, n = e.y;
      this.offset.pending.x += t, this.offset.pending.y += n, this.offset.total.x += t, this.offset.total.y += n;
    }
    function Ln(e, t) {
      var n = e.page, r = e.client, i = t.x, o = t.y;
      n.x += i, n.y += o, r.x += i, r.y += o;
    }
    Object.defineProperty(Je, "__esModule", { value: !0 }), Je.addTotal = Dr, Je.applyPending = Wn, Je.default = void 0, xe._ProxyMethods.offsetBy = "";
    var Oo = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(e) {
      e.Interaction.prototype.offsetBy = So;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(e) {
      return Dr(e.interaction);
    }, "interactions:before-action-start": Ir, "interactions:before-action-move": Ir, "interactions:before-action-end": function(e) {
      var t = e.interaction;
      if (Wn(t))
        return t.move({ offset: !0 }), t.end(), !1;
    }, "interactions:stop": function(e) {
      var t = e.interaction;
      t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y = 0;
    } } }, Eo = Oo;
    Je.default = Eo;
    var pt = {};
    function _o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function he(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(pt, "__esModule", { value: !0 }), pt.default = pt.InertiaState = void 0;
    var Rr = function() {
      function e(r) {
        (function(i, o) {
          if (!(i instanceof o))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), he(this, "active", !1), he(this, "isModified", !1), he(this, "smoothEnd", !1), he(this, "allowResume", !1), he(this, "modification", void 0), he(this, "modifierCount", 0), he(this, "modifierArg", void 0), he(this, "startCoords", void 0), he(this, "t0", 0), he(this, "v0", 0), he(this, "te", 0), he(this, "targetOffset", void 0), he(this, "modifiedOffset", void 0), he(this, "currentOffset", void 0), he(this, "lambda_v0", 0), he(this, "one_ve_v0", 0), he(this, "timeout", void 0), he(this, "interaction", void 0), this.interaction = r;
      }
      var t, n;
      return t = e, (n = [{ key: "start", value: function(r) {
        var i = this.interaction, o = pn(i);
        if (!o || !o.enabled)
          return !1;
        var l = i.coords.velocity.client, a = (0, je.default)(l.x, l.y), s = this.modification || (this.modification = new ft.default(i));
        if (s.copyFrom(i.modification), this.t0 = i._now(), this.allowResume = o.allowResume, this.v0 = a, this.currentOffset = { x: 0, y: 0 }, this.startCoords = i.coords.cur.page, this.modifierArg = s.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - i.coords.cur.timeStamp < 50 && a > o.minSpeed && a > o.endSpeed)
          this.startInertia();
        else {
          if (s.result = s.setAll(this.modifierArg), !s.result.changed)
            return !1;
          this.startSmoothEnd();
        }
        return i.modification.result.rect = null, i.offsetBy(this.targetOffset), i._doPhase({ interaction: i, event: r, phase: "inertiastart" }), i.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), i.modification.result.rect = null, this.active = !0, i.simulation = this, !0;
      } }, { key: "startInertia", value: function() {
        var r = this, i = this.interaction.coords.velocity.client, o = pn(this.interaction), l = o.resistance, a = -Math.log(o.endSpeed / this.v0) / l;
        this.targetOffset = { x: (i.x - a) / l, y: (i.y - a) / l }, this.te = a, this.lambda_v0 = l / this.v0, this.one_ve_v0 = 1 - o.endSpeed / this.v0;
        var s = this.modification, f = this.modifierArg;
        f.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, s.result = s.setAll(f), s.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + s.result.delta.x, y: this.targetOffset.y + s.result.delta.y }), this.onNextFrame(function() {
          return r.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var r = this;
        this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return r.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(r) {
        var i = this;
        this.timeout = Re.default.request(function() {
          i.active && r();
        });
      } }, { key: "inertiaTick", value: function() {
        var r, i, o, l, a, s = this, f = this.interaction, d = pn(f).resistance, g = (f._now() - this.t0) / 1e3;
        if (g < this.te) {
          var b, x = 1 - (Math.exp(-d * g) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, l = this.modifiedOffset.y, b = { x: Cr(a = x, 0, r, o), y: Cr(a, 0, i, l) }) : b = { x: this.targetOffset.x * x, y: this.targetOffset.y * x };
          var y = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
          this.currentOffset.x += y.x, this.currentOffset.y += y.y, f.offsetBy(y), f.move(), this.onNextFrame(function() {
            return s.inertiaTick();
          });
        } else
          f.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var r = this, i = this.interaction, o = i._now() - this.t0, l = pn(i).smoothEndDuration;
        if (o < l) {
          var a = { x: Ar(o, 0, this.targetOffset.x, l), y: Ar(o, 0, this.targetOffset.y, l) }, s = { x: a.x - this.currentOffset.x, y: a.y - this.currentOffset.y };
          this.currentOffset.x += s.x, this.currentOffset.y += s.y, i.offsetBy(s), i.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return r.smoothEndTick();
          });
        } else
          i.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(r) {
        var i = r.pointer, o = r.event, l = r.eventTarget, a = this.interaction;
        a.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), a.updatePointer(i, o, l, !0), a._doPhase({ interaction: a, event: o, phase: "resume" }), (0, D.copyCoords)(a.coords.prev, a.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = !1, this.interaction.simulation = null, Re.default.cancel(this.timeout);
      } }]) && _o(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    function pn(e) {
      var t = e.interactable, n = e.prepared;
      return t && t.options && n.name && t.options[n.name].inertia;
    }
    pt.InertiaState = Rr;
    var Po = { id: "inertia", before: ["modifiers", "actions"], install: function(e) {
      var t = e.defaults;
      e.usePlugin(Je.default), e.usePlugin(ve.default), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(e) {
      var t = e.interaction;
      t.inertia = new Rr(t);
    }, "interactions:before-action-end": function(e) {
      var t = e.interaction, n = e.event;
      return (!t._interacting || t.simulation || !t.inertia.start(n)) && null;
    }, "interactions:down": function(e) {
      var t = e.interaction, n = e.eventTarget, r = t.inertia;
      if (r.active)
        for (var i = n; h.default.element(i); ) {
          if (i === t.element) {
            r.resume(e);
            break;
          }
          i = k.parentNode(i);
        }
    }, "interactions:stop": function(e) {
      var t = e.interaction.inertia;
      t.active && t.stop();
    }, "interactions:before-action-resume": function(e) {
      var t = e.interaction.modification;
      t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e);
    }, "interactions:before-action-inertiastart": function(e) {
      return e.interaction.modification.setAndApply(e);
    }, "interactions:action-resume": ve.addEventModifiers, "interactions:action-inertiastart": ve.addEventModifiers, "interactions:after-action-inertiastart": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:after-action-resume": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    } } };
    function Cr(e, t, n, r) {
      var i = 1 - e;
      return i * i * t + 2 * i * e * n + e * e * r;
    }
    function Ar(e, t, n, r) {
      return -n * (e /= r) * (e - 2) + t;
    }
    var To = Po;
    pt.default = To;
    var Ht = {};
    function ko(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Bt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    function Hr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if (e.immediatePropagationStopped)
          break;
        r(e);
      }
    }
    Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.Eventable = void 0;
    var Mo = function() {
      function e(r) {
        (function(i, o) {
          if (!(i instanceof o))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), Bt(this, "options", void 0), Bt(this, "types", {}), Bt(this, "propagationStopped", !1), Bt(this, "immediatePropagationStopped", !1), Bt(this, "global", void 0), this.options = (0, M.default)({}, r || {});
      }
      var t, n;
      return t = e, (n = [{ key: "fire", value: function(r) {
        var i, o = this.global;
        (i = this.types[r.type]) && Hr(r, i), !r.propagationStopped && o && (i = o[r.type]) && Hr(r, i);
      } }, { key: "on", value: function(r, i) {
        var o = (0, Ve.default)(r, i);
        for (r in o)
          this.types[r] = q.merge(this.types[r] || [], o[r]);
      } }, { key: "off", value: function(r, i) {
        var o = (0, Ve.default)(r, i);
        for (r in o) {
          var l = this.types[r];
          if (l && l.length)
            for (var a = 0; a < o[r].length; a++) {
              var s = o[r][a], f = l.indexOf(s);
              f !== -1 && l.splice(f, 1);
            }
        }
      } }, { key: "getRect", value: function(r) {
        return null;
      } }]) && ko(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    Ht.Eventable = Mo;
    var Wt = {};
    Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.default = function(e, t) {
      if (t.phaselessTypes[e])
        return !0;
      for (var n in t.map)
        if (e.indexOf(n) === 0 && e.substr(n.length) in t.phases)
          return !0;
      return !1;
    };
    var Nn = {};
    Object.defineProperty(Nn, "__esModule", { value: !0 }), Nn.createInteractStatic = function(e) {
      var t = function n(r, i) {
        var o = e.interactables.get(r, i);
        return o || ((o = e.interactables.new(r, i)).events.global = n.globalEvents), o;
      };
      return t.getPointerAverage = D.pointerAverage, t.getTouchBBox = D.touchBBox, t.getTouchDistance = D.touchDistance, t.getTouchAngle = D.touchAngle, t.getElementRect = k.getElementRect, t.getElementClientRect = k.getElementClientRect, t.matchesSelector = k.matchesSelector, t.closest = k.closest, t.globalEvents = {}, t.version = "1.10.17", t.scope = e, t.use = function(n, r) {
        return this.scope.usePlugin(n, r), this;
      }, t.isSet = function(n, r) {
        return !!this.scope.interactables.get(n, r && r.context);
      }, t.on = (0, Ee.warnOnce)(function(n, r, i) {
        if (h.default.string(n) && n.search(" ") !== -1 && (n = n.trim().split(/ +/)), h.default.array(n)) {
          for (var o = 0; o < n.length; o++) {
            var l = n[o];
            this.on(l, r, i);
          }
          return this;
        }
        if (h.default.object(n)) {
          for (var a in n)
            this.on(a, n[a], r);
          return this;
        }
        return (0, Wt.default)(n, this.scope.actions) ? this.globalEvents[n] ? this.globalEvents[n].push(r) : this.globalEvents[n] = [r] : this.scope.events.add(this.scope.document, n, r, { options: i }), this;
      }, "The interact.on() method is being deprecated"), t.off = (0, Ee.warnOnce)(function(n, r, i) {
        if (h.default.string(n) && n.search(" ") !== -1 && (n = n.trim().split(/ +/)), h.default.array(n)) {
          for (var o = 0; o < n.length; o++) {
            var l = n[o];
            this.off(l, r, i);
          }
          return this;
        }
        if (h.default.object(n)) {
          for (var a in n)
            this.off(a, n[a], r);
          return this;
        }
        var s;
        return (0, Wt.default)(n, this.scope.actions) ? n in this.globalEvents && (s = this.globalEvents[n].indexOf(r)) !== -1 && this.globalEvents[n].splice(s, 1) : this.scope.events.remove(this.scope.document, n, r, i), this;
      }, "The interact.off() method is being deprecated"), t.debug = function() {
        return this.scope;
      }, t.supportsTouch = function() {
        return S.default.supportsTouch;
      }, t.supportsPointerEvent = function() {
        return S.default.supportsPointerEvent;
      }, t.stop = function() {
        for (var n = 0; n < this.scope.interactions.list.length; n++)
          this.scope.interactions.list[n].stop();
        return this;
      }, t.pointerMoveTolerance = function(n) {
        return h.default.number(n) ? (this.scope.interactions.pointerMoveTolerance = n, this) : this.scope.interactions.pointerMoveTolerance;
      }, t.addDocument = function(n, r) {
        this.scope.addDocument(n, r);
      }, t.removeDocument = function(n) {
        this.scope.removeDocument(n);
      }, t;
    };
    var hn = {};
    function jo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Ye(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(hn, "__esModule", { value: !0 }), hn.Interactable = void 0;
    var zo = function() {
      function e(r, i, o, l) {
        (function(a, s) {
          if (!(a instanceof s))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), Ye(this, "options", void 0), Ye(this, "_actions", void 0), Ye(this, "target", void 0), Ye(this, "events", new Ht.Eventable()), Ye(this, "_context", void 0), Ye(this, "_win", void 0), Ye(this, "_doc", void 0), Ye(this, "_scopeEvents", void 0), Ye(this, "_rectChecker", void 0), this._actions = i.actions, this.target = r, this._context = i.context || o, this._win = (0, p.getWindow)((0, k.trySelector)(r) ? this._context : r), this._doc = this._win.document, this._scopeEvents = l, this.set(i);
      }
      var t, n;
      return t = e, (n = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(r, i) {
        return h.default.func(i.onstart) && this.on("".concat(r, "start"), i.onstart), h.default.func(i.onmove) && this.on("".concat(r, "move"), i.onmove), h.default.func(i.onend) && this.on("".concat(r, "end"), i.onend), h.default.func(i.oninertiastart) && this.on("".concat(r, "inertiastart"), i.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(r, i, o) {
        (h.default.array(i) || h.default.object(i)) && this.off(r, i), (h.default.array(o) || h.default.object(o)) && this.on(r, o);
      } }, { key: "setPerAction", value: function(r, i) {
        var o = this._defaults;
        for (var l in i) {
          var a = l, s = this.options[r], f = i[a];
          a === "listeners" && this.updatePerActionListeners(r, s.listeners, f), h.default.array(f) ? s[a] = q.from(f) : h.default.plainObject(f) ? (s[a] = (0, M.default)(s[a] || {}, (0, ct.default)(f)), h.default.object(o.perAction[a]) && "enabled" in o.perAction[a] && (s[a].enabled = f.enabled !== !1)) : h.default.bool(f) && h.default.object(o.perAction[a]) ? s[a].enabled = f : s[a] = f;
        }
      } }, { key: "getRect", value: function(r) {
        return r = r || (h.default.element(this.target) ? this.target : null), h.default.string(this.target) && (r = r || this._context.querySelector(this.target)), (0, k.getElementRect)(r);
      } }, { key: "rectChecker", value: function(r) {
        var i = this;
        return h.default.func(r) ? (this._rectChecker = r, this.getRect = function(o) {
          var l = (0, M.default)({}, i._rectChecker(o));
          return "width" in l || (l.width = l.right - l.left, l.height = l.bottom - l.top), l;
        }, this) : r === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(r, i) {
        if ((0, k.trySelector)(i) || h.default.object(i)) {
          for (var o in this.options[r] = i, this._actions.map)
            this.options[o][r] = i;
          return this;
        }
        return this.options[r];
      } }, { key: "origin", value: function(r) {
        return this._backCompatOption("origin", r);
      } }, { key: "deltaSource", value: function(r) {
        return r === "page" || r === "client" ? (this.options.deltaSource = r, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(r) {
        return this._context === r.ownerDocument || (0, k.nodeContains)(this._context, r);
      } }, { key: "testIgnoreAllow", value: function(r, i, o) {
        return !this.testIgnore(r.ignoreFrom, i, o) && this.testAllow(r.allowFrom, i, o);
      } }, { key: "testAllow", value: function(r, i, o) {
        return !r || !!h.default.element(o) && (h.default.string(r) ? (0, k.matchesUpTo)(o, r, i) : !!h.default.element(r) && (0, k.nodeContains)(r, o));
      } }, { key: "testIgnore", value: function(r, i, o) {
        return !(!r || !h.default.element(o)) && (h.default.string(r) ? (0, k.matchesUpTo)(o, r, i) : !!h.default.element(r) && (0, k.nodeContains)(r, o));
      } }, { key: "fire", value: function(r) {
        return this.events.fire(r), this;
      } }, { key: "_onOff", value: function(r, i, o, l) {
        h.default.object(i) && !h.default.array(i) && (l = o, o = null);
        var a = r === "on" ? "add" : "remove", s = (0, Ve.default)(i, o);
        for (var f in s) {
          f === "wheel" && (f = S.default.wheelEvent);
          for (var d = 0; d < s[f].length; d++) {
            var g = s[f][d];
            (0, Wt.default)(f, this._actions) ? this.events[r](f, g) : h.default.string(this.target) ? this._scopeEvents["".concat(a, "Delegate")](this.target, this._context, f, g, l) : this._scopeEvents[a](this.target, f, g, l);
          }
        }
        return this;
      } }, { key: "on", value: function(r, i, o) {
        return this._onOff("on", r, i, o);
      } }, { key: "off", value: function(r, i, o) {
        return this._onOff("off", r, i, o);
      } }, { key: "set", value: function(r) {
        var i = this._defaults;
        for (var o in h.default.object(r) || (r = {}), this.options = (0, ct.default)(i.base), this._actions.methodDict) {
          var l = o, a = this._actions.methodDict[l];
          this.options[l] = {}, this.setPerAction(l, (0, M.default)((0, M.default)({}, i.perAction), i.actions[l])), this[a](r[l]);
        }
        for (var s in r)
          h.default.func(this[s]) && this[s](r[s]);
        return this;
      } }, { key: "unset", value: function() {
        if (h.default.string(this.target))
          for (var r in this._scopeEvents.delegatedEvents)
            for (var i = this._scopeEvents.delegatedEvents[r], o = i.length - 1; o >= 0; o--) {
              var l = i[o], a = l.selector, s = l.context, f = l.listeners;
              a === this.target && s === this._context && i.splice(o, 1);
              for (var d = f.length - 1; d >= 0; d--)
                this._scopeEvents.removeDelegate(this.target, this._context, r, f[d][0], f[d][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && jo(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    hn.Interactable = zo;
    var vn = {};
    function Do(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function $n(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(vn, "__esModule", { value: !0 }), vn.InteractableSet = void 0;
    var Io = function() {
      function e(r) {
        var i = this;
        (function(o, l) {
          if (!(o instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), $n(this, "list", []), $n(this, "selectorMap", {}), $n(this, "scope", void 0), this.scope = r, r.addListeners({ "interactable:unset": function(o) {
          var l = o.interactable, a = l.target, s = l._context, f = h.default.string(a) ? i.selectorMap[a] : a[i.scope.id], d = q.findIndex(f, function(g) {
            return g.context === s;
          });
          f[d] && (f[d].context = null, f[d].interactable = null), f.splice(d, 1);
        } });
      }
      var t, n;
      return t = e, (n = [{ key: "new", value: function(r, i) {
        i = (0, M.default)(i || {}, { actions: this.scope.actions });
        var o = new this.scope.Interactable(r, i, this.scope.document, this.scope.events), l = { context: o._context, interactable: o };
        return this.scope.addDocument(o._doc), this.list.push(o), h.default.string(r) ? (this.selectorMap[r] || (this.selectorMap[r] = []), this.selectorMap[r].push(l)) : (o.target[this.scope.id] || Object.defineProperty(r, this.scope.id, { value: [], configurable: !0 }), r[this.scope.id].push(l)), this.scope.fire("interactable:new", { target: r, options: i, interactable: o, win: this.scope._win }), o;
      } }, { key: "get", value: function(r, i) {
        var o = i && i.context || this.scope.document, l = h.default.string(r), a = l ? this.selectorMap[r] : r[this.scope.id];
        if (!a)
          return null;
        var s = q.find(a, function(f) {
          return f.context === o && (l || f.interactable.inContext(r));
        });
        return s && s.interactable;
      } }, { key: "forEachMatch", value: function(r, i) {
        for (var o = 0; o < this.list.length; o++) {
          var l = this.list[o], a = void 0;
          if ((h.default.string(l.target) ? h.default.element(r) && k.matchesSelector(r, l.target) : r === l.target) && l.inContext(r) && (a = i(l)), a !== void 0)
            return a;
        }
      } }]) && Do(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    vn.InteractableSet = Io;
    var gn = {};
    function Ro(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Fn(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    function Xn(e, t) {
      return function(n) {
        if (Array.isArray(n))
          return n;
      }(e) || function(n, r) {
        var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
        if (i != null) {
          var o, l, a = [], s = !0, f = !1;
          try {
            for (i = i.call(n); !(s = (o = i.next()).done) && (a.push(o.value), !r || a.length !== r); s = !0)
              ;
          } catch (d) {
            f = !0, l = d;
          } finally {
            try {
              s || i.return == null || i.return();
            } finally {
              if (f)
                throw l;
            }
          }
          return a;
        }
      }(e, t) || function(n, r) {
        if (n) {
          if (typeof n == "string")
            return Br(n, r);
          var i = Object.prototype.toString.call(n).slice(8, -1);
          return i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set" ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Br(n, r) : void 0;
        }
      }(e, t) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function Br(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    Object.defineProperty(gn, "__esModule", { value: !0 }), gn.default = void 0;
    var Co = function() {
      function e(r) {
        (function(i, o) {
          if (!(i instanceof o))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), Fn(this, "currentTarget", void 0), Fn(this, "originalEvent", void 0), Fn(this, "type", void 0), this.originalEvent = r, (0, it.default)(this, r);
      }
      var t, n;
      return t = e, (n = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Ro(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), e;
    }();
    function Lt(e) {
      if (!h.default.object(e))
        return { capture: !!e, passive: !1 };
      var t = (0, M.default)({}, e);
      return t.capture = !!e.capture, t.passive = !!e.passive, t;
    }
    var Ao = { id: "events", install: function(e) {
      var t, n = [], r = {}, i = [], o = { add: l, remove: a, addDelegate: function(d, g, b, x, y) {
        var O = Lt(y);
        if (!r[b]) {
          r[b] = [];
          for (var P = 0; P < i.length; P++) {
            var E = i[P];
            l(E, b, s), l(E, b, f, !0);
          }
        }
        var I = r[b], A = q.find(I, function(W) {
          return W.selector === d && W.context === g;
        });
        A || (A = { selector: d, context: g, listeners: [] }, I.push(A)), A.listeners.push([x, O]);
      }, removeDelegate: function(d, g, b, x, y) {
        var O, P = Lt(y), E = r[b], I = !1;
        if (E)
          for (O = E.length - 1; O >= 0; O--) {
            var A = E[O];
            if (A.selector === d && A.context === g) {
              for (var W = A.listeners, J = W.length - 1; J >= 0; J--) {
                var ae = Xn(W[J], 2), N = ae[0], oe = ae[1], Me = oe.capture, Ge = oe.passive;
                if (N === x && Me === P.capture && Ge === P.passive) {
                  W.splice(J, 1), W.length || (E.splice(O, 1), a(g, b, s), a(g, b, f, !0)), I = !0;
                  break;
                }
              }
              if (I)
                break;
            }
          }
      }, delegateListener: s, delegateUseCapture: f, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
      function l(d, g, b, x) {
        var y = Lt(x), O = q.find(n, function(P) {
          return P.eventTarget === d;
        });
        O || (O = { eventTarget: d, events: {} }, n.push(O)), O.events[g] || (O.events[g] = []), d.addEventListener && !q.contains(O.events[g], b) && (d.addEventListener(g, b, o.supportsOptions ? y : y.capture), O.events[g].push(b));
      }
      function a(d, g, b, x) {
        var y = Lt(x), O = q.findIndex(n, function(J) {
          return J.eventTarget === d;
        }), P = n[O];
        if (P && P.events)
          if (g !== "all") {
            var E = !1, I = P.events[g];
            if (I) {
              if (b === "all") {
                for (var A = I.length - 1; A >= 0; A--)
                  a(d, g, I[A], y);
                return;
              }
              for (var W = 0; W < I.length; W++)
                if (I[W] === b) {
                  d.removeEventListener(g, b, o.supportsOptions ? y : y.capture), I.splice(W, 1), I.length === 0 && (delete P.events[g], E = !0);
                  break;
                }
            }
            E && !Object.keys(P.events).length && n.splice(O, 1);
          } else
            for (g in P.events)
              P.events.hasOwnProperty(g) && a(d, g, "all");
      }
      function s(d, g) {
        for (var b = Lt(g), x = new Co(d), y = r[d.type], O = Xn(D.getEventTargets(d), 1)[0], P = O; h.default.element(P); ) {
          for (var E = 0; E < y.length; E++) {
            var I = y[E], A = I.selector, W = I.context;
            if (k.matchesSelector(P, A) && k.nodeContains(W, O) && k.nodeContains(W, P)) {
              var J = I.listeners;
              x.currentTarget = P;
              for (var ae = 0; ae < J.length; ae++) {
                var N = Xn(J[ae], 2), oe = N[0], Me = N[1], Ge = Me.capture, ur = Me.passive;
                Ge === b.capture && ur === b.passive && oe(x);
              }
            }
          }
          P = k.parentNode(P);
        }
      }
      function f(d) {
        return s(d, !0);
      }
      return (t = e.document) == null || t.createElement("div").addEventListener("test", null, { get capture() {
        return o.supportsOptions = !0;
      }, get passive() {
        return o.supportsPassive = !0;
      } }), e.events = o, o;
    } };
    gn.default = Ao;
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: !0 }), yn.default = void 0;
    var mn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(e) {
      for (var t = 0; t < mn.methodOrder.length; t++) {
        var n;
        n = mn.methodOrder[t];
        var r = mn[n](e);
        if (r)
          return r;
      }
      return null;
    }, simulationResume: function(e) {
      var t = e.pointerType, n = e.eventType, r = e.eventTarget, i = e.scope;
      if (!/down|start/i.test(n))
        return null;
      for (var o = 0; o < i.interactions.list.length; o++) {
        var l = i.interactions.list[o], a = r;
        if (l.simulation && l.simulation.allowResume && l.pointerType === t)
          for (; a; ) {
            if (a === l.element)
              return l;
            a = k.parentNode(a);
          }
      }
      return null;
    }, mouseOrPen: function(e) {
      var t, n = e.pointerId, r = e.pointerType, i = e.eventType, o = e.scope;
      if (r !== "mouse" && r !== "pen")
        return null;
      for (var l = 0; l < o.interactions.list.length; l++) {
        var a = o.interactions.list[l];
        if (a.pointerType === r) {
          if (a.simulation && !Wr(a, n))
            continue;
          if (a.interacting())
            return a;
          t || (t = a);
        }
      }
      if (t)
        return t;
      for (var s = 0; s < o.interactions.list.length; s++) {
        var f = o.interactions.list[s];
        if (!(f.pointerType !== r || /down/i.test(i) && f.simulation))
          return f;
      }
      return null;
    }, hasPointer: function(e) {
      for (var t = e.pointerId, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
        var i = n.interactions.list[r];
        if (Wr(i, t))
          return i;
      }
      return null;
    }, idle: function(e) {
      for (var t = e.pointerType, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
        var i = n.interactions.list[r];
        if (i.pointers.length === 1) {
          var o = i.interactable;
          if (o && (!o.options.gesture || !o.options.gesture.enabled))
            continue;
        } else if (i.pointers.length >= 2)
          continue;
        if (!i.interacting() && t === i.pointerType)
          return i;
      }
      return null;
    } };
    function Wr(e, t) {
      return e.pointers.some(function(n) {
        return n.id === t;
      });
    }
    var Ho = mn;
    yn.default = Ho;
    var bn = {};
    function Yn(e) {
      return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Yn(e);
    }
    function Lr(e, t) {
      return function(n) {
        if (Array.isArray(n))
          return n;
      }(e) || function(n, r) {
        var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
        if (i != null) {
          var o, l, a = [], s = !0, f = !1;
          try {
            for (i = i.call(n); !(s = (o = i.next()).done) && (a.push(o.value), !r || a.length !== r); s = !0)
              ;
          } catch (d) {
            f = !0, l = d;
          } finally {
            try {
              s || i.return == null || i.return();
            } finally {
              if (f)
                throw l;
            }
          }
          return a;
        }
      }(e, t) || function(n, r) {
        if (n) {
          if (typeof n == "string")
            return Nr(n, r);
          var i = Object.prototype.toString.call(n).slice(8, -1);
          return i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set" ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Nr(n, r) : void 0;
        }
      }(e, t) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function Nr(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function Bo(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Wo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function qn(e, t) {
      return qn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, qn(e, t);
    }
    function Lo(e, t) {
      if (t && (Yn(t) === "object" || typeof t == "function"))
        return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }(e);
    }
    function wn(e) {
      return wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, wn(e);
    }
    Object.defineProperty(bn, "__esModule", { value: !0 }), bn.default = void 0;
    var Gn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function $r(e, t) {
      return function(n) {
        var r = t.interactions.list, i = D.getPointerType(n), o = Lr(D.getEventTargets(n), 2), l = o[0], a = o[1], s = [];
        if (/^touch/.test(n.type)) {
          t.prevTouchTime = t.now();
          for (var f = 0; f < n.changedTouches.length; f++) {
            var d = n.changedTouches[f], g = { pointer: d, pointerId: D.getPointerId(d), pointerType: i, eventType: n.type, eventTarget: l, curEventTarget: a, scope: t }, b = Fr(g);
            s.push([g.pointer, g.eventTarget, g.curEventTarget, b]);
          }
        } else {
          var x = !1;
          if (!S.default.supportsPointerEvent && /mouse/.test(n.type)) {
            for (var y = 0; y < r.length && !x; y++)
              x = r[y].pointerType !== "mouse" && r[y].pointerIsDown;
            x = x || t.now() - t.prevTouchTime < 500 || n.timeStamp === 0;
          }
          if (!x) {
            var O = { pointer: n, pointerId: D.getPointerId(n), pointerType: i, eventType: n.type, curEventTarget: a, eventTarget: l, scope: t }, P = Fr(O);
            s.push([O.pointer, O.eventTarget, O.curEventTarget, P]);
          }
        }
        for (var E = 0; E < s.length; E++) {
          var I = Lr(s[E], 4), A = I[0], W = I[1], J = I[2];
          I[3][e](A, n, W, J);
        }
      };
    }
    function Fr(e) {
      var t = e.pointerType, n = e.scope, r = { interaction: yn.default.search(e), searchDetails: e };
      return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: t });
    }
    function Un(e, t) {
      var n = e.doc, r = e.scope, i = e.options, o = r.interactions.docEvents, l = r.events, a = l[t];
      for (var s in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), l.delegatedEvents)
        a(n, s, l.delegateListener), a(n, s, l.delegateUseCapture, !0);
      for (var f = i && i.events, d = 0; d < o.length; d++) {
        var g = o[d];
        a(n, g.type, g.listener, f);
      }
    }
    var No = { id: "core/interactions", install: function(e) {
      for (var t = {}, n = 0; n < Gn.length; n++) {
        var r = Gn[n];
        t[r] = $r(r, e);
      }
      var i, o = S.default.pEventTypes;
      function l() {
        for (var a = 0; a < e.interactions.list.length; a++) {
          var s = e.interactions.list[a];
          if (s.pointerIsDown && s.pointerType === "touch" && !s._interacting)
            for (var f = function() {
              var g = s.pointers[d];
              e.documents.some(function(b) {
                var x = b.doc;
                return (0, k.nodeContains)(x, g.downTarget);
              }) || s.removePointer(g.pointer, g.event);
            }, d = 0; d < s.pointers.length; d++)
              f();
        }
      }
      (i = Z.default.PointerEvent ? [{ type: o.down, listener: l }, { type: o.down, listener: t.pointerDown }, { type: o.move, listener: t.pointerMove }, { type: o.up, listener: t.pointerUp }, { type: o.cancel, listener: t.pointerUp }] : [{ type: "mousedown", listener: t.pointerDown }, { type: "mousemove", listener: t.pointerMove }, { type: "mouseup", listener: t.pointerUp }, { type: "touchstart", listener: l }, { type: "touchstart", listener: t.pointerDown }, { type: "touchmove", listener: t.pointerMove }, { type: "touchend", listener: t.pointerUp }, { type: "touchcancel", listener: t.pointerUp }]).push({ type: "blur", listener: function(a) {
        for (var s = 0; s < e.interactions.list.length; s++)
          e.interactions.list[s].documentBlur(a);
      } }), e.prevTouchTime = 0, e.Interaction = function(a) {
        (function(y, O) {
          if (typeof O != "function" && O !== null)
            throw new TypeError("Super expression must either be null or a function");
          y.prototype = Object.create(O && O.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), O && qn(y, O);
        })(x, a);
        var s, f, d, g, b = (d = x, g = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }(), function() {
          var y, O = wn(d);
          if (g) {
            var P = wn(this).constructor;
            y = Reflect.construct(O, arguments, P);
          } else
            y = O.apply(this, arguments);
          return Lo(this, y);
        });
        function x() {
          return Bo(this, x), b.apply(this, arguments);
        }
        return s = x, (f = [{ key: "pointerMoveTolerance", get: function() {
          return e.interactions.pointerMoveTolerance;
        }, set: function(y) {
          e.interactions.pointerMoveTolerance = y;
        } }, { key: "_now", value: function() {
          return e.now();
        } }]) && Wo(s.prototype, f), Object.defineProperty(s, "prototype", { writable: !1 }), x;
      }(xe.default), e.interactions = { list: [], new: function(a) {
        a.scopeFire = function(f, d) {
          return e.fire(f, d);
        };
        var s = new e.Interaction(a);
        return e.interactions.list.push(s), s;
      }, listeners: t, docEvents: i, pointerMoveTolerance: 1 }, e.usePlugin(ut.default);
    }, listeners: { "scope:add-document": function(e) {
      return Un(e, "add");
    }, "scope:remove-document": function(e) {
      return Un(e, "remove");
    }, "interactable:unset": function(e, t) {
      for (var n = e.interactable, r = t.interactions.list.length - 1; r >= 0; r--) {
        var i = t.interactions.list[r];
        i.interactable === n && (i.stop(), t.fire("interactions:destroy", { interaction: i }), i.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(r, 1));
      }
    } }, onDocSignal: Un, doOnInteractions: $r, methodNames: Gn }, $o = No;
    bn.default = $o;
    var Nt = {};
    function Vn(e) {
      return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, Vn(e);
    }
    function $t() {
      return $t = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
        var r = Fo(e, t);
        if (r) {
          var i = Object.getOwnPropertyDescriptor(r, t);
          return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
        }
      }, $t.apply(this, arguments);
    }
    function Fo(e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Ze(e)) !== null; )
        ;
      return e;
    }
    function Kn(e, t) {
      return Kn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, Kn(e, t);
    }
    function Xo(e, t) {
      if (t && (Vn(t) === "object" || typeof t == "function"))
        return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }(e);
    }
    function Ze(e) {
      return Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, Ze(e);
    }
    function Xr(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Yr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function qr(e, t, n) {
      return t && Yr(e.prototype, t), n && Yr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function ge(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.Scope = void 0, Nt.initScope = Gr;
    var Yo = function() {
      function e() {
        var t = this;
        Xr(this, e), ge(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ge(this, "isInitialized", !1), ge(this, "listenerMaps", []), ge(this, "browser", S.default), ge(this, "defaults", (0, ct.default)(It.defaults)), ge(this, "Eventable", Ht.Eventable), ge(this, "actions", { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }), ge(this, "interactStatic", (0, Nn.createInteractStatic)(this)), ge(this, "InteractEvent", Rt.InteractEvent), ge(this, "Interactable", void 0), ge(this, "interactables", new vn.InteractableSet(this)), ge(this, "_win", void 0), ge(this, "document", void 0), ge(this, "window", void 0), ge(this, "documents", []), ge(this, "_plugins", { list: [], map: {} }), ge(this, "onWindowUnload", function(r) {
          return t.removeDocument(r.target);
        });
        var n = this;
        this.Interactable = function(r) {
          (function(s, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function");
            s.prototype = Object.create(f && f.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), f && Kn(s, f);
          })(a, r);
          var i, o, l = (i = a, o = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }(), function() {
            var s, f = Ze(i);
            if (o) {
              var d = Ze(this).constructor;
              s = Reflect.construct(f, arguments, d);
            } else
              s = f.apply(this, arguments);
            return Xo(this, s);
          });
          function a() {
            return Xr(this, a), l.apply(this, arguments);
          }
          return qr(a, [{ key: "_defaults", get: function() {
            return n.defaults;
          } }, { key: "set", value: function(s) {
            return $t(Ze(a.prototype), "set", this).call(this, s), n.fire("interactable:set", { options: s, interactable: this }), this;
          } }, { key: "unset", value: function() {
            $t(Ze(a.prototype), "unset", this).call(this);
            var s = n.interactables.list.indexOf(this);
            s < 0 || ($t(Ze(a.prototype), "unset", this).call(this), n.interactables.list.splice(s, 1), n.fire("interactable:unset", { interactable: this }));
          } }]), a;
        }(hn.Interactable);
      }
      return qr(e, [{ key: "addListeners", value: function(t, n) {
        this.listenerMaps.push({ id: n, map: t });
      } }, { key: "fire", value: function(t, n) {
        for (var r = 0; r < this.listenerMaps.length; r++) {
          var i = this.listenerMaps[r].map[t];
          if (i && i(n, this, t) === !1)
            return !1;
        }
      } }, { key: "init", value: function(t) {
        return this.isInitialized ? this : Gr(this, t);
      } }, { key: "pluginIsInstalled", value: function(t) {
        return this._plugins.map[t.id] || this._plugins.list.indexOf(t) !== -1;
      } }, { key: "usePlugin", value: function(t, n) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(t))
          return this;
        if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, n), t.listeners && t.before) {
          for (var r = 0, i = this.listenerMaps.length, o = t.before.reduce(function(a, s) {
            return a[s] = !0, a[Ur(s)] = !0, a;
          }, {}); r < i; r++) {
            var l = this.listenerMaps[r].id;
            if (o[l] || o[Ur(l)])
              break;
          }
          this.listenerMaps.splice(r, 0, { id: t.id, map: t.listeners });
        } else
          t.listeners && this.listenerMaps.push({ id: t.id, map: t.listeners });
        return this;
      } }, { key: "addDocument", value: function(t, n) {
        if (this.getDocIndex(t) !== -1)
          return !1;
        var r = p.getWindow(t);
        n = n ? (0, M.default)({}, n) : {}, this.documents.push({ doc: t, options: n }), this.events.documents.push(t), t !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t, window: r, scope: this, options: n });
      } }, { key: "removeDocument", value: function(t) {
        var n = this.getDocIndex(t), r = p.getWindow(t), i = this.documents[n].options;
        this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: t, window: r, scope: this, options: i });
      } }, { key: "getDocIndex", value: function(t) {
        for (var n = 0; n < this.documents.length; n++)
          if (this.documents[n].doc === t)
            return n;
        return -1;
      } }, { key: "getDocOptions", value: function(t) {
        var n = this.getDocIndex(t);
        return n === -1 ? null : this.documents[n].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), e;
    }();
    function Gr(e, t) {
      return e.isInitialized = !0, h.default.window(t) && p.init(t), Z.default.init(t), S.default.init(t), Re.default.init(t), e.window = t, e.document = t.document, e.usePlugin(bn.default), e.usePlugin(gn.default), e;
    }
    function Ur(e) {
      return e && e.replace(/\/.*$/, "");
    }
    Nt.Scope = Yo;
    var ye = {};
    Object.defineProperty(ye, "__esModule", { value: !0 }), ye.default = void 0;
    var Vr = new Nt.Scope(), qo = Vr.interactStatic;
    ye.default = qo;
    var Go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
    Vr.init(Go);
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: !0 }), xn.default = void 0, xn.default = function() {
    };
    var Sn = {};
    Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.default = void 0, Sn.default = function() {
    };
    var On = {};
    function Kr(e, t) {
      return function(n) {
        if (Array.isArray(n))
          return n;
      }(e) || function(n, r) {
        var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
        if (i != null) {
          var o, l, a = [], s = !0, f = !1;
          try {
            for (i = i.call(n); !(s = (o = i.next()).done) && (a.push(o.value), !r || a.length !== r); s = !0)
              ;
          } catch (d) {
            f = !0, l = d;
          } finally {
            try {
              s || i.return == null || i.return();
            } finally {
              if (f)
                throw l;
            }
          }
          return a;
        }
      }(e, t) || function(n, r) {
        if (n) {
          if (typeof n == "string")
            return Jr(n, r);
          var i = Object.prototype.toString.call(n).slice(8, -1);
          return i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set" ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Jr(n, r) : void 0;
        }
      }(e, t) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function Jr(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    Object.defineProperty(On, "__esModule", { value: !0 }), On.default = void 0, On.default = function(e) {
      var t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
        var i = Kr(r, 2), o = i[0], l = i[1];
        return o in e || l in e;
      }), n = function(r, i) {
        for (var o = e.range, l = e.limits, a = l === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : l, s = e.offset, f = s === void 0 ? { x: 0, y: 0 } : s, d = { range: o, grid: e, x: null, y: null }, g = 0; g < t.length; g++) {
          var b = Kr(t[g], 2), x = b[0], y = b[1], O = Math.round((r - f.x) / e[x]), P = Math.round((i - f.y) / e[y]);
          d[x] = Math.max(a.left, Math.min(a.right, O * e[x] + f.x)), d[y] = Math.max(a.top, Math.min(a.bottom, P * e[y] + f.y));
        }
        return d;
      };
      return n.grid = e, n.coordFields = t, n;
    };
    var Ft = {};
    Object.defineProperty(Ft, "__esModule", { value: !0 }), Object.defineProperty(Ft, "edgeTarget", { enumerable: !0, get: function() {
      return xn.default;
    } }), Object.defineProperty(Ft, "elements", { enumerable: !0, get: function() {
      return Sn.default;
    } }), Object.defineProperty(Ft, "grid", { enumerable: !0, get: function() {
      return On.default;
    } });
    var En = {};
    Object.defineProperty(En, "__esModule", { value: !0 }), En.default = void 0;
    var Uo = { id: "snappers", install: function(e) {
      var t = e.interactStatic;
      t.snappers = (0, M.default)(t.snappers || {}, Ft), t.createSnapGrid = t.snappers.grid;
    } }, Vo = Uo;
    En.default = Vo;
    var bt = {};
    function Zr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function Jn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Zr(Object(n), !0).forEach(function(r) {
          Ko(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
      }
      return e;
    }
    function Ko(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }
    Object.defineProperty(bt, "__esModule", { value: !0 }), bt.default = bt.aspectRatio = void 0;
    var Qr = { start: function(e) {
      var t = e.state, n = e.rect, r = e.edges, i = e.pageCoords, o = t.options.ratio, l = t.options, a = l.equalDelta, s = l.modifiers;
      o === "preserve" && (o = n.width / n.height), t.startCoords = (0, M.default)({}, i), t.startRect = (0, M.default)({}, n), t.ratio = o, t.equalDelta = a;
      var f = t.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
      if (t.xIsPrimaryAxis = !(!r.left && !r.right), t.equalDelta) {
        var d = (f.left ? 1 : -1) * (f.top ? 1 : -1);
        t.edgeSign = { x: d, y: d };
      } else
        t.edgeSign = { x: f.left ? -1 : 1, y: f.top ? -1 : 1 };
      if ((0, M.default)(e.edges, f), s && s.length) {
        var g = new ft.default(e.interaction);
        g.copyFrom(e.interaction.modification), g.prepareStates(s), t.subModification = g, g.startAll(Jn({}, e));
      }
    }, set: function(e) {
      var t = e.state, n = e.rect, r = e.coords, i = (0, M.default)({}, r), o = t.equalDelta ? Jo : Zo;
      if (o(t, t.xIsPrimaryAxis, r, n), !t.subModification)
        return null;
      var l = (0, M.default)({}, n);
      (0, U.addEdges)(t.linkedEdges, l, { x: r.x - i.x, y: r.y - i.y });
      var a = t.subModification.setAll(Jn(Jn({}, e), {}, { rect: l, edges: t.linkedEdges, pageCoords: r, prevCoords: r, prevRect: l })), s = a.delta;
      return a.changed && (o(t, Math.abs(s.x) > Math.abs(s.y), a.coords, a.rect), (0, M.default)(r, a.coords)), a.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
    function Jo(e, t, n) {
      var r = e.startCoords, i = e.edgeSign;
      t ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
    }
    function Zo(e, t, n, r) {
      var i = e.startRect, o = e.startCoords, l = e.ratio, a = e.edgeSign;
      if (t) {
        var s = r.width / l;
        n.y = o.y + (s - i.height) * a.y;
      } else {
        var f = r.height * l;
        n.x = o.x + (f - i.width) * a.x;
      }
    }
    bt.aspectRatio = Qr;
    var Qo = (0, ve.makeModifier)(Qr, "aspectRatio");
    bt.default = Qo;
    var ht = {};
    Object.defineProperty(ht, "__esModule", { value: !0 }), ht.default = void 0;
    var ei = function() {
    };
    ei._defaults = {};
    var ea = ei;
    ht.default = ea;
    var Zn = {};
    Object.defineProperty(Zn, "__esModule", { value: !0 }), Object.defineProperty(Zn, "default", { enumerable: !0, get: function() {
      return ht.default;
    } });
    var we = {};
    function Qn(e, t, n) {
      return h.default.func(e) ? U.resolveRectLike(e, t.interactable, t.element, [n.x, n.y, t]) : U.resolveRectLike(e, t.interactable, t.element);
    }
    Object.defineProperty(we, "__esModule", { value: !0 }), we.default = void 0, we.getRestrictionRect = Qn, we.restrict = void 0;
    var ti = { start: function(e) {
      var t = e.rect, n = e.startOffset, r = e.state, i = e.interaction, o = e.pageCoords, l = r.options, a = l.elementRect, s = (0, M.default)({ left: 0, top: 0, right: 0, bottom: 0 }, l.offset || {});
      if (t && a) {
        var f = Qn(l.restriction, i, o);
        if (f) {
          var d = f.right - f.left - t.width, g = f.bottom - f.top - t.height;
          d < 0 && (s.left += d, s.right += d), g < 0 && (s.top += g, s.bottom += g);
        }
        s.left += n.left - t.width * a.left, s.top += n.top - t.height * a.top, s.right += n.right - t.width * (1 - a.right), s.bottom += n.bottom - t.height * (1 - a.bottom);
      }
      r.offset = s;
    }, set: function(e) {
      var t = e.coords, n = e.interaction, r = e.state, i = r.options, o = r.offset, l = Qn(i.restriction, n, t);
      if (l) {
        var a = U.xywhToTlbr(l);
        t.x = Math.max(Math.min(a.right - o.right, t.x), a.left + o.left), t.y = Math.max(Math.min(a.bottom - o.bottom, t.y), a.top + o.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } };
    we.restrict = ti;
    var ta = (0, ve.makeModifier)(ti, "restrict");
    we.default = ta;
    var He = {};
    Object.defineProperty(He, "__esModule", { value: !0 }), He.restrictEdges = He.default = void 0;
    var ni = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, ri = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function ii(e, t) {
      for (var n = ["top", "left", "bottom", "right"], r = 0; r < n.length; r++) {
        var i = n[r];
        i in e || (e[i] = t[i]);
      }
      return e;
    }
    var oi = { noInner: ni, noOuter: ri, start: function(e) {
      var t, n = e.interaction, r = e.startOffset, i = e.state, o = i.options;
      if (o) {
        var l = (0, we.getRestrictionRect)(o.offset, n, n.coords.start.page);
        t = U.rectToXY(l);
      }
      t = t || { x: 0, y: 0 }, i.offset = { top: t.y + r.top, left: t.x + r.left, bottom: t.y - r.bottom, right: t.x - r.right };
    }, set: function(e) {
      var t = e.coords, n = e.edges, r = e.interaction, i = e.state, o = i.offset, l = i.options;
      if (n) {
        var a = (0, M.default)({}, t), s = (0, we.getRestrictionRect)(l.inner, r, a) || {}, f = (0, we.getRestrictionRect)(l.outer, r, a) || {};
        ii(s, ni), ii(f, ri), n.top ? t.y = Math.min(Math.max(f.top + o.top, a.y), s.top + o.top) : n.bottom && (t.y = Math.max(Math.min(f.bottom + o.bottom, a.y), s.bottom + o.bottom)), n.left ? t.x = Math.min(Math.max(f.left + o.left, a.x), s.left + o.left) : n.right && (t.x = Math.max(Math.min(f.right + o.right, a.x), s.right + o.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } };
    He.restrictEdges = oi;
    var na = (0, ve.makeModifier)(oi, "restrictEdges");
    He.default = na;
    var wt = {};
    Object.defineProperty(wt, "__esModule", { value: !0 }), wt.restrictRect = wt.default = void 0;
    var ra = (0, M.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(e) {
    } }, we.restrict.defaults), ai = { start: we.restrict.start, set: we.restrict.set, defaults: ra };
    wt.restrictRect = ai;
    var ia = (0, ve.makeModifier)(ai, "restrictRect");
    wt.default = ia;
    var xt = {};
    Object.defineProperty(xt, "__esModule", { value: !0 }), xt.restrictSize = xt.default = void 0;
    var oa = { width: -1 / 0, height: -1 / 0 }, aa = { width: 1 / 0, height: 1 / 0 }, si = { start: function(e) {
      return He.restrictEdges.start(e);
    }, set: function(e) {
      var t = e.interaction, n = e.state, r = e.rect, i = e.edges, o = n.options;
      if (i) {
        var l = U.tlbrToXywh((0, we.getRestrictionRect)(o.min, t, e.coords)) || oa, a = U.tlbrToXywh((0, we.getRestrictionRect)(o.max, t, e.coords)) || aa;
        n.options = { endOnly: o.endOnly, inner: (0, M.default)({}, He.restrictEdges.noInner), outer: (0, M.default)({}, He.restrictEdges.noOuter) }, i.top ? (n.options.inner.top = r.bottom - l.height, n.options.outer.top = r.bottom - a.height) : i.bottom && (n.options.inner.bottom = r.top + l.height, n.options.outer.bottom = r.top + a.height), i.left ? (n.options.inner.left = r.right - l.width, n.options.outer.left = r.right - a.width) : i.right && (n.options.inner.right = r.left + l.width, n.options.outer.right = r.left + a.width), He.restrictEdges.set(e), n.options = o;
      }
    }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } };
    xt.restrictSize = si;
    var sa = (0, ve.makeModifier)(si, "restrictSize");
    xt.default = sa;
    var er = {};
    Object.defineProperty(er, "__esModule", { value: !0 }), Object.defineProperty(er, "default", { enumerable: !0, get: function() {
      return ht.default;
    } });
    var Qe = {};
    Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.snap = Qe.default = void 0;
    var li = { start: function(e) {
      var t, n = e.interaction, r = e.interactable, i = e.element, o = e.rect, l = e.state, a = e.startOffset, s = l.options, f = s.offsetWithOrigin ? function(b) {
        var x = b.interaction.element;
        return (0, U.rectToXY)((0, U.resolveRectLike)(b.state.options.origin, null, null, [x])) || (0, Pe.default)(b.interactable, x, b.interaction.prepared.name);
      }(e) : { x: 0, y: 0 };
      if (s.offset === "startCoords")
        t = { x: n.coords.start.page.x, y: n.coords.start.page.y };
      else {
        var d = (0, U.resolveRectLike)(s.offset, r, i, [n]);
        (t = (0, U.rectToXY)(d) || { x: 0, y: 0 }).x += f.x, t.y += f.y;
      }
      var g = s.relativePoints;
      l.offsets = o && g && g.length ? g.map(function(b, x) {
        return { index: x, relativePoint: b, x: a.left - o.width * b.x + t.x, y: a.top - o.height * b.y + t.y };
      }) : [{ index: 0, relativePoint: null, x: t.x, y: t.y }];
    }, set: function(e) {
      var t = e.interaction, n = e.coords, r = e.state, i = r.options, o = r.offsets, l = (0, Pe.default)(t.interactable, t.element, t.prepared.name), a = (0, M.default)({}, n), s = [];
      i.offsetWithOrigin || (a.x -= l.x, a.y -= l.y);
      for (var f = 0; f < o.length; f++)
        for (var d = o[f], g = a.x - d.x, b = a.y - d.y, x = 0, y = i.targets.length; x < y; x++) {
          var O, P = i.targets[x];
          (O = h.default.func(P) ? P(g, b, t._proxy, d, x) : P) && s.push({ x: (h.default.number(O.x) ? O.x : g) + d.x, y: (h.default.number(O.y) ? O.y : b) + d.y, range: h.default.number(O.range) ? O.range : i.range, source: P, index: x, offset: d });
        }
      for (var E = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, I = 0; I < s.length; I++) {
        var A = s[I], W = A.range, J = A.x - a.x, ae = A.y - a.y, N = (0, je.default)(J, ae), oe = N <= W;
        W === 1 / 0 && E.inRange && E.range !== 1 / 0 && (oe = !1), E.target && !(oe ? E.inRange && W !== 1 / 0 ? N / W < E.distance / E.range : W === 1 / 0 && E.range !== 1 / 0 || N < E.distance : !E.inRange && N < E.distance) || (E.target = A, E.distance = N, E.range = W, E.inRange = oe, E.delta.x = J, E.delta.y = ae);
      }
      return E.inRange && (n.x = E.target.x, n.y = E.target.y), r.closest = E, E;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } };
    Qe.snap = li;
    var la = (0, ve.makeModifier)(li, "snap");
    Qe.default = la;
    var qe = {};
    function ui(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    Object.defineProperty(qe, "__esModule", { value: !0 }), qe.snapSize = qe.default = void 0;
    var ci = { start: function(e) {
      var t = e.state, n = e.edges, r = t.options;
      if (!n)
        return null;
      e.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], Qe.snap.start(e), t.offsets = e.state.offsets, e.state = t;
    }, set: function(e) {
      var t, n, r = e.interaction, i = e.state, o = e.coords, l = i.options, a = i.offsets, s = { x: o.x - a[0].x, y: o.y - a[0].y };
      i.options = (0, M.default)({}, l), i.options.targets = [];
      for (var f = 0; f < (l.targets || []).length; f++) {
        var d = (l.targets || [])[f], g = void 0;
        if (g = h.default.func(d) ? d(s.x, s.y, r) : d) {
          for (var b = 0; b < i.targetFields.length; b++) {
            var x = (t = i.targetFields[b], n = 2, function(E) {
              if (Array.isArray(E))
                return E;
            }(t) || function(E, I) {
              var A = E == null ? null : typeof Symbol < "u" && E[Symbol.iterator] || E["@@iterator"];
              if (A != null) {
                var W, J, ae = [], N = !0, oe = !1;
                try {
                  for (A = A.call(E); !(N = (W = A.next()).done) && (ae.push(W.value), !I || ae.length !== I); N = !0)
                    ;
                } catch (Me) {
                  oe = !0, J = Me;
                } finally {
                  try {
                    N || A.return == null || A.return();
                  } finally {
                    if (oe)
                      throw J;
                  }
                }
                return ae;
              }
            }(t, n) || function(E, I) {
              if (E) {
                if (typeof E == "string")
                  return ui(E, I);
                var A = Object.prototype.toString.call(E).slice(8, -1);
                return A === "Object" && E.constructor && (A = E.constructor.name), A === "Map" || A === "Set" ? Array.from(E) : A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A) ? ui(E, I) : void 0;
              }
            }(t, n) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), y = x[0], O = x[1];
            if (y in g || O in g) {
              g.x = g[y], g.y = g[O];
              break;
            }
          }
          i.options.targets.push(g);
        }
      }
      var P = Qe.snap.set(e);
      return i.options = l, P;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } };
    qe.snapSize = ci;
    var ua = (0, ve.makeModifier)(ci, "snapSize");
    qe.default = ua;
    var St = {};
    Object.defineProperty(St, "__esModule", { value: !0 }), St.snapEdges = St.default = void 0;
    var fi = { start: function(e) {
      var t = e.edges;
      return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], qe.snapSize.start(e)) : null;
    }, set: qe.snapSize.set, defaults: (0, M.default)((0, ct.default)(qe.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    St.snapEdges = fi;
    var ca = (0, ve.makeModifier)(fi, "snapEdges");
    St.default = ca;
    var tr = {};
    Object.defineProperty(tr, "__esModule", { value: !0 }), Object.defineProperty(tr, "default", { enumerable: !0, get: function() {
      return ht.default;
    } });
    var nr = {};
    Object.defineProperty(nr, "__esModule", { value: !0 }), Object.defineProperty(nr, "default", { enumerable: !0, get: function() {
      return ht.default;
    } });
    var Ot = {};
    Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.default = void 0;
    var fa = { aspectRatio: bt.default, restrictEdges: He.default, restrict: we.default, restrictRect: wt.default, restrictSize: xt.default, snapEdges: St.default, snap: Qe.default, snapSize: qe.default, spring: tr.default, avoid: Zn.default, transform: nr.default, rubberband: er.default };
    Ot.default = fa;
    var Xt = {};
    Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.default = void 0;
    var da = { id: "modifiers", install: function(e) {
      var t = e.interactStatic;
      for (var n in e.usePlugin(ve.default), e.usePlugin(En.default), t.modifiers = Ot.default, Ot.default) {
        var r = Ot.default[n], i = r._defaults, o = r._methods;
        i._methods = o, e.defaults.perAction[n] = i;
      }
    } }, pa = da;
    Xt.default = pa;
    var vt = {};
    function rr(e) {
      return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, rr(e);
    }
    function ha(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function ir(e, t) {
      return ir = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, ir(e, t);
    }
    function va(e, t) {
      if (t && (rr(t) === "object" || typeof t == "function"))
        return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return or(e);
    }
    function or(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function _n(e) {
      return _n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, _n(e);
    }
    Object.defineProperty(vt, "__esModule", { value: !0 }), vt.default = vt.PointerEvent = void 0;
    var ga = function(e) {
      (function(a, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && ir(a, s);
      })(l, e);
      var t, n, r, i, o = (r = l, i = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var a, s = _n(r);
        if (i) {
          var f = _n(this).constructor;
          a = Reflect.construct(s, arguments, f);
        } else
          a = s.apply(this, arguments);
        return va(this, a);
      });
      function l(a, s, f, d, g, b) {
        var x;
        if (function(P, E) {
          if (!(P instanceof E))
            throw new TypeError("Cannot call a class as a function");
        }(this, l), x = o.call(this, g), D.pointerExtend(or(x), f), f !== s && D.pointerExtend(or(x), s), x.timeStamp = b, x.originalEvent = f, x.type = a, x.pointerId = D.getPointerId(s), x.pointerType = D.getPointerType(s), x.target = d, x.currentTarget = null, a === "tap") {
          var y = g.getPointerIndex(s);
          x.dt = x.timeStamp - g.pointers[y].downTime;
          var O = x.timeStamp - g.tapTime;
          x.double = !!g.prevTap && g.prevTap.type !== "doubletap" && g.prevTap.target === x.target && O < 500;
        } else
          a === "doubletap" && (x.dt = s.timeStamp - g.tapTime, x.double = !0);
        return x;
      }
      return t = l, (n = [{ key: "_subtractOrigin", value: function(a) {
        var s = a.x, f = a.y;
        return this.pageX -= s, this.pageY -= f, this.clientX -= s, this.clientY -= f, this;
      } }, { key: "_addOrigin", value: function(a) {
        var s = a.x, f = a.y;
        return this.pageX += s, this.pageY += f, this.clientX += s, this.clientY += f, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && ha(t.prototype, n), Object.defineProperty(t, "prototype", { writable: !1 }), l;
    }(ee.BaseEvent);
    vt.PointerEvent = vt.default = ga;
    var Yt = {};
    Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.default = void 0;
    var Pn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(e) {
      e.pointerEvents = Pn, e.defaults.actions.pointerEvents = Pn.defaults, (0, M.default)(e.actions.phaselessTypes, Pn.types);
    }, listeners: { "interactions:new": function(e) {
      var t = e.interaction;
      t.prevTap = null, t.tapTime = 0;
    }, "interactions:update-pointer": function(e) {
      var t = e.down, n = e.pointerInfo;
      !t && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(e, t) {
      var n = e.interaction, r = e.pointer, i = e.event, o = e.eventTarget;
      e.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && ar(e), et({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, t));
    }, "interactions:down": function(e, t) {
      (function(n, r) {
        for (var i = n.interaction, o = n.pointer, l = n.event, a = n.eventTarget, s = n.pointerIndex, f = i.pointers[s].hold, d = k.getPath(a), g = { interaction: i, pointer: o, event: l, eventTarget: a, type: "hold", targets: [], path: d, node: null }, b = 0; b < d.length; b++) {
          var x = d[b];
          g.node = x, r.fire("pointerEvents:collect-targets", g);
        }
        if (g.targets.length) {
          for (var y = 1 / 0, O = 0; O < g.targets.length; O++) {
            var P = g.targets[O].eventable.options.holdDuration;
            P < y && (y = P);
          }
          f.duration = y, f.timeout = setTimeout(function() {
            et({ interaction: i, eventTarget: a, pointer: o, event: l, type: "hold" }, r);
          }, y);
        }
      })(e, t), et(e, t);
    }, "interactions:up": function(e, t) {
      ar(e), et(e, t), function(n, r) {
        var i = n.interaction, o = n.pointer, l = n.event, a = n.eventTarget;
        i.pointerWasMoved || et({ interaction: i, eventTarget: a, pointer: o, event: l, type: "tap" }, r);
      }(e, t);
    }, "interactions:cancel": function(e, t) {
      ar(e), et(e, t);
    } }, PointerEvent: vt.PointerEvent, fire: et, collectEventTargets: di, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
    function et(e, t) {
      var n = e.interaction, r = e.pointer, i = e.event, o = e.eventTarget, l = e.type, a = e.targets, s = a === void 0 ? di(e, t) : a, f = new vt.PointerEvent(l, r, i, o, n, t.now());
      t.fire("pointerEvents:new", { pointerEvent: f });
      for (var d = { interaction: n, pointer: r, event: i, eventTarget: o, targets: s, type: l, pointerEvent: f }, g = 0; g < s.length; g++) {
        var b = s[g];
        for (var x in b.props || {})
          f[x] = b.props[x];
        var y = (0, Pe.default)(b.eventable, b.node);
        if (f._subtractOrigin(y), f.eventable = b.eventable, f.currentTarget = b.node, b.eventable.fire(f), f._addOrigin(y), f.immediatePropagationStopped || f.propagationStopped && g + 1 < s.length && s[g + 1].node !== f.currentTarget)
          break;
      }
      if (t.fire("pointerEvents:fired", d), l === "tap") {
        var O = f.double ? et({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, t) : f;
        n.prevTap = O, n.tapTime = O.timeStamp;
      }
      return f;
    }
    function di(e, t) {
      var n = e.interaction, r = e.pointer, i = e.event, o = e.eventTarget, l = e.type, a = n.getPointerIndex(r), s = n.pointers[a];
      if (l === "tap" && (n.pointerWasMoved || !s || s.downTarget !== o))
        return [];
      for (var f = k.getPath(o), d = { interaction: n, pointer: r, event: i, eventTarget: o, type: l, path: f, targets: [], node: null }, g = 0; g < f.length; g++) {
        var b = f[g];
        d.node = b, t.fire("pointerEvents:collect-targets", d);
      }
      return l === "hold" && (d.targets = d.targets.filter(function(x) {
        var y;
        return x.eventable.options.holdDuration === ((y = n.pointers[a]) == null ? void 0 : y.hold.duration);
      })), d.targets;
    }
    function ar(e) {
      var t = e.interaction, n = e.pointerIndex, r = t.pointers[n].hold;
      r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
    }
    var ya = Pn;
    Yt.default = ya;
    var Tn = {};
    function ma(e) {
      var t = e.interaction;
      t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null);
    }
    Object.defineProperty(Tn, "__esModule", { value: !0 }), Tn.default = void 0;
    var ba = { id: "pointer-events/holdRepeat", install: function(e) {
      e.usePlugin(Yt.default);
      var t = e.pointerEvents;
      t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(e, t) {
      return e["pointerEvents:".concat(t)] = ma, e;
    }, { "pointerEvents:new": function(e) {
      var t = e.pointerEvent;
      t.type === "hold" && (t.count = (t.count || 0) + 1);
    }, "pointerEvents:fired": function(e, t) {
      var n = e.interaction, r = e.pointerEvent, i = e.eventTarget, o = e.targets;
      if (r.type === "hold" && o.length) {
        var l = o[0].eventable.options.holdRepeatInterval;
        l <= 0 || (n.holdIntervalHandle = setTimeout(function() {
          t.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, t);
        }, l));
      }
    } }) }, wa = ba;
    Tn.default = wa;
    var kn = {};
    function xa(e) {
      return (0, M.default)(this.events.options, e), this;
    }
    Object.defineProperty(kn, "__esModule", { value: !0 }), kn.default = void 0;
    var Sa = { id: "pointer-events/interactableTargets", install: function(e) {
      var t = e.Interactable;
      t.prototype.pointerEvents = xa;
      var n = t.prototype._backCompatOption;
      t.prototype._backCompatOption = function(r, i) {
        var o = n.call(this, r, i);
        return o === this && (this.events.options[r] = i), o;
      };
    }, listeners: { "pointerEvents:collect-targets": function(e, t) {
      var n = e.targets, r = e.node, i = e.type, o = e.eventTarget;
      t.interactables.forEachMatch(r, function(l) {
        var a = l.events, s = a.options;
        a.types[i] && a.types[i].length && l.testIgnoreAllow(s, r, o) && n.push({ node: r, eventable: a, props: { interactable: l } });
      });
    }, "interactable:new": function(e) {
      var t = e.interactable;
      t.events.getRect = function(n) {
        return t.getRect(n);
      };
    }, "interactable:set": function(e, t) {
      var n = e.interactable, r = e.options;
      (0, M.default)(n.events.options, t.pointerEvents.defaults), (0, M.default)(n.events.options, r.pointerEvents || {});
    } } }, Oa = Sa;
    kn.default = Oa;
    var qt = {};
    Object.defineProperty(qt, "__esModule", { value: !0 }), qt.default = void 0;
    var Ea = { id: "pointer-events", install: function(e) {
      e.usePlugin(Yt), e.usePlugin(Tn.default), e.usePlugin(kn.default);
    } }, _a = Ea;
    qt.default = _a;
    var Et = {};
    function pi(e) {
      var t = e.Interactable;
      e.actions.phases.reflow = !0, t.prototype.reflow = function(n) {
        return function(r, i, o) {
          for (var l = h.default.string(r.target) ? q.from(r._context.querySelectorAll(r.target)) : [r.target], a = o.window.Promise, s = a ? [] : null, f = function() {
            var g = l[d], b = r.getRect(g);
            if (!b)
              return "break";
            var x = q.find(o.interactions.list, function(I) {
              return I.interacting() && I.interactable === r && I.element === g && I.prepared.name === i.name;
            }), y = void 0;
            if (x)
              x.move(), s && (y = x._reflowPromise || new a(function(I) {
                x._reflowResolve = I;
              }));
            else {
              var O = (0, U.tlbrToXywh)(b), P = { page: { x: O.x, y: O.y }, client: { x: O.x, y: O.y }, timeStamp: o.now() }, E = D.coordsToEvent(P);
              y = function(I, A, W, J, ae) {
                var N = I.interactions.new({ pointerType: "reflow" }), oe = { interaction: N, event: ae, pointer: ae, eventTarget: W, phase: "reflow" };
                N.interactable = A, N.element = W, N.prevEvent = ae, N.updatePointer(ae, ae, W, !0), D.setZeroCoords(N.coords.delta), (0, Ee.copyAction)(N.prepared, J), N._doPhase(oe);
                var Me = I.window.Promise, Ge = Me ? new Me(function(ur) {
                  N._reflowResolve = ur;
                }) : void 0;
                return N._reflowPromise = Ge, N.start(J, A, W), N._interacting ? (N.move(oe), N.end(ae)) : (N.stop(), N._reflowResolve()), N.removePointer(ae, ae), Ge;
              }(o, r, g, i, E);
            }
            s && s.push(y);
          }, d = 0; d < l.length && f() !== "break"; d++)
            ;
          return s && a.all(s).then(function() {
            return r;
          });
        }(this, n, e);
      };
    }
    Object.defineProperty(Et, "__esModule", { value: !0 }), Et.default = void 0, Et.install = pi;
    var Pa = { id: "reflow", install: pi, listeners: { "interactions:stop": function(e, t) {
      var n = e.interaction;
      n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), q.remove(t.interactions.list, n));
    } } }, Ta = Pa;
    Et.default = Ta;
    var ke = { exports: {} };
    function sr(e) {
      return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, sr(e);
    }
    Object.defineProperty(ke.exports, "__esModule", { value: !0 }), ke.exports.default = void 0, ye.default.use(ut.default), ye.default.use(Je.default), ye.default.use(qt.default), ye.default.use(pt.default), ye.default.use(Xt.default), ye.default.use(zt.default), ye.default.use(Mt.default), ye.default.use(Xe.default), ye.default.use(Et.default);
    var ka = ye.default;
    if (ke.exports.default = ka, sr(ke) === "object" && ke)
      try {
        ke.exports = ye.default;
      } catch {
      }
    ye.default.default = ye.default, Mt.default, Xe.default, zt.default, ut.default, sn.default, pt.default, ye.default, Xt.default, Je.default, qt.default, Et.default, ke = ke.exports;
    var gt = { exports: {} };
    function lr(e) {
      return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, lr(e);
    }
    Object.defineProperty(gt.exports, "__esModule", { value: !0 }), gt.exports.default = void 0;
    var Ma = ke.default;
    if (gt.exports.default = Ma, lr(gt) === "object" && gt)
      try {
        gt.exports = ke.default;
      } catch {
      }
    return ke.default.default = ke.default, gt.exports;
  });
})(zi);
const vi = /* @__PURE__ */ Aa(zi.exports);
function Ha(u) {
  for (var c = 0, v, p = 0, m = u.length; p < m; p++)
    v = u[p].y + u[p].h, v > c && (c = v);
  return c;
}
function dr(u) {
  for (var c = Array(u.length), v = 0, p = u.length; v < p; v++)
    c[v] = Ba(u[v]);
  return c;
}
function Ba(u) {
  return JSON.parse(JSON.stringify(u));
}
function Di(u, c) {
  return !(u === c || u.x + u.w <= c.x || u.x >= c.x + c.w || u.y + u.h <= c.y || u.y >= c.y + c.h);
}
function Ut(u, c) {
  for (var v = Ri(u), p = Ci(u), m = Array(u.length), w = 0, _ = p.length; w < _; w++) {
    var h = p[w];
    h.static || (h = Wa(v, h, c), v.push(h)), m[u.indexOf(h)] = h, h.moved = !1;
  }
  return m;
}
function Wa(u, c, v) {
  if (v)
    for (; c.y > 0 && !Mn(u, c); )
      c.y--;
  for (var p; p = Mn(u, c); )
    c.y = p.y + p.h;
  return c;
}
function La(u, c) {
  for (var v = Ri(u), p = 0, m = u.length; p < m; p++) {
    var w = u[p];
    if (w.x + w.w > c.cols && (w.x = c.cols - w.w), w.x < 0 && (w.x = 0, w.w = c.cols), !w.static)
      v.push(w);
    else
      for (; Mn(v, w); )
        w.y++;
  }
  return u;
}
function gi(u, c) {
  for (var v = 0, p = u.length; v < p; v++)
    if (u[v].i === c)
      return u[v];
}
function Mn(u, c) {
  for (var v = 0, p = u.length; v < p; v++)
    if (Di(u[v], c))
      return u[v];
}
function Ii(u, c) {
  return u.filter(function(v) {
    return Di(v, c);
  });
}
function Ri(u) {
  return u.filter(function(c) {
    return c.static;
  });
}
function pr(u, c, v, p, m, w) {
  if (w === void 0 && (w = !1), c.static)
    return u;
  var _ = c.x, h = c.y, C = p && c.y > p;
  typeof v == "number" && (c.x = v), typeof p == "number" && (c.y = p), c.moved = !0;
  var T = Ci(u);
  C && (T = T.reverse());
  var B = Ii(T, c);
  if (w && B.length)
    return c.x = _, c.y = h, c.moved = !1, u;
  for (var G = 0, te = B.length; G < te; G++) {
    var X = B[G];
    X.moved || c.y > X.y && c.y - X.y > X.h / 4 || (X.static ? u = yi(u, X, c, m) : u = yi(u, c, X, m));
  }
  return u;
}
function yi(u, c, v, p) {
  var m = !1;
  if (p) {
    var w = {
      x: v.x,
      y: v.y,
      w: v.w,
      h: v.h,
      i: "-1"
    };
    if (w.y = Math.max(c.y - v.h, 0), !Mn(u, w))
      return pr(u, v, void 0, w.y, m);
  }
  return pr(u, v, void 0, v.y + 1, m);
}
function Na(u, c, v, p) {
  var m = "translate3d(" + c + "px," + u + "px, 0)";
  return {
    transform: m,
    WebkitTransform: m,
    MozTransform: m,
    msTransform: m,
    OTransform: m,
    width: v + "px",
    height: p + "px",
    position: "absolute"
  };
}
function $a(u, c, v, p) {
  var m = "translate3d(" + c * -1 + "px," + u + "px, 0)";
  return {
    transform: m,
    WebkitTransform: m,
    MozTransform: m,
    msTransform: m,
    OTransform: m,
    width: v + "px",
    height: p + "px",
    position: "absolute"
  };
}
function Fa(u, c, v, p) {
  return {
    top: u + "px",
    left: c + "px",
    width: v + "px",
    height: p + "px",
    position: "absolute"
  };
}
function Xa(u, c, v, p) {
  return {
    top: u + "px",
    right: c + "px",
    width: v + "px",
    height: p + "px",
    position: "absolute"
  };
}
function Ci(u) {
  return [].concat(u).sort(function(c, v) {
    return c.y === v.y && c.x === v.x ? 0 : c.y > v.y || c.y === v.y && c.x > v.x ? 1 : -1;
  });
}
function Ya(u, c) {
  c === void 0 && (c = "Layout");
  var v = ["x", "y", "w", "h"];
  if (!Array.isArray(u))
    throw new Error(c + " must be an array!");
  for (var p = 0, m = u.length; p < m; p++) {
    for (var w = u[p], _ = 0; _ < v.length; _++)
      if (typeof w[v[_]] != "number")
        throw new Error("VueGridLayout: " + c + "[" + p + "]." + v[_] + " must be a number!");
    if (w.i && w.i, w.static !== void 0 && typeof w.static != "boolean")
      throw new Error("VueGridLayout: " + c + "[" + p + "].static must be a boolean!");
  }
}
function mi(u) {
  return qa(u);
}
function qa(u) {
  var c = u.target.offsetParent || document.body, v = c === document.body ? { left: 0, top: 0 } : c.getBoundingClientRect(), p = u.clientX + c.scrollLeft - v.left, m = u.clientY + c.scrollTop - v.top;
  return { x: p, y: m };
}
function bi(u, c, v, p) {
  var m = !Ga(u);
  return m ? {
    deltaX: 0,
    deltaY: 0,
    lastX: v,
    lastY: p,
    x: v,
    y: p
  } : {
    deltaX: v - u,
    deltaY: p - c,
    lastX: u,
    lastY: c,
    x: v,
    y: p
  };
}
function Ga(u) {
  return typeof u == "number" && !isNaN(u);
}
var Ua = "auto";
function Va() {
  return typeof document < "u";
}
function Ai() {
  return typeof window < "u";
}
function wi() {
  if (!Va())
    return Ua;
  var u = typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir");
  return u;
}
function Ka(u, c) {
  if (!Ai) {
    c();
    return;
  }
  window.addEventListener(u, c);
}
function Ja(u, c) {
  !Ai || window.removeEventListener(u, c);
}
const Za = ja({
  name: "GridItem",
  props: {
    isDraggable: {
      type: Boolean,
      required: !1,
      default: null
    },
    isResizable: {
      type: Boolean,
      required: !1,
      default: null
    },
    static: {
      type: Boolean,
      required: !1,
      default: !1
    },
    minH: {
      type: Number,
      required: !1,
      default: 1
    },
    minW: {
      type: Number,
      required: !1,
      default: 1
    },
    maxH: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      required: !0
    },
    dragIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      required: !1,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    }
  },
  inject: ["eventBus"],
  data: function() {
    return {
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      useCssTransforms: !0,
      isDragging: !1,
      dragging: null,
      isResizing: !1,
      resizing: null,
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      rtl: !1,
      dragEventSet: !1,
      resizeEventSet: !1,
      previousW: null,
      previousH: null,
      previousX: null,
      previousY: null,
      innerX: this.x,
      innerY: this.y,
      innerW: this.w,
      innerH: this.h
    };
  },
  created: function() {
    var u = this, c = this;
    c.updateWidthHandler = function(v) {
      c.updateWidth(v);
    }, c.compactHandler = function(v) {
      c.compact(v);
    }, c.setDraggableHandler = function(v) {
      c.isDraggable === null && (c.draggable = v);
    }, c.setResizableHandler = function(v) {
      c.isResizable === null && (c.resizable = v);
    }, c.setRowHeightHandler = function(v) {
      c.rowHeight = v;
    }, c.setMaxRowsHandler = function(v) {
      c.maxRows = v;
    }, c.directionchangeHandler = function() {
      u.rtl = wi() === "rtl", u.compact();
    }, c.setColNum = function(v) {
      c.cols = parseInt(v);
    }, this.eventBus.on("updateWidth", c.updateWidthHandler), this.eventBus.on("compact", c.compactHandler), this.eventBus.on("setDraggable", c.setDraggableHandler), this.eventBus.on("setResizable", c.setResizableHandler), this.eventBus.on("setRowHeight", c.setRowHeightHandler), this.eventBus.on("setMaxRows", c.setMaxRowsHandler), this.eventBus.on("directionchange", c.directionchangeHandler), this.eventBus.on("setColNum", c.setColNum), this.rtl = wi() === "rtl";
  },
  beforeUnmount: function() {
    var u = this;
    this.eventBus.off("updateWidth", u.updateWidthHandler), this.eventBus.off("compact", u.compactHandler), this.eventBus.off("setDraggable", u.setDraggableHandler), this.eventBus.off("setResizable", u.setResizableHandler), this.eventBus.off("setRowHeight", u.setRowHeightHandler), this.eventBus.off("setMaxRows", u.setMaxRowsHandler), this.eventBus.off("directionchange", u.directionchangeHandler), this.eventBus.off("setColNum", u.setColNum), this.interactObj && this.interactObj.unset();
  },
  mounted: function() {
    this.cols = this.$parent.colNum, this.rowHeight = this.$parent.rowHeight, this.containerWidth = this.$parent.width !== null ? this.$parent.width : 100, this.margin = this.$parent.margin !== void 0 ? this.$parent.margin : [10, 10], this.maxRows = this.$parent.maxRows, this.isDraggable === null ? this.draggable = this.$parent.isDraggable : this.draggable = this.isDraggable, this.isResizable === null ? this.resizable = this.$parent.isResizable : this.resizable = this.isResizable, this.useCssTransforms = this.$parent.useCssTransforms, this.createStyle();
  },
  watch: {
    isDraggable: function() {
      this.draggable = this.isDraggable;
    },
    static: function() {
      this.tryMakeDraggable(), this.tryMakeResizable();
    },
    draggable: function() {
      this.tryMakeDraggable();
    },
    isResizable: function() {
      this.resizable = this.isResizable;
    },
    resizable: function() {
      this.tryMakeResizable();
    },
    rowHeight: function() {
      this.createStyle(), this.emitContainerResized();
    },
    cols: function() {
      this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
    },
    containerWidth: function() {
      this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
    },
    x: function(u) {
      this.innerX = u, this.createStyle();
    },
    y: function(u) {
      this.innerY = u, this.createStyle();
    },
    h: function(u) {
      this.innerH = u, this.createStyle();
    },
    w: function(u) {
      this.innerW = u, this.createStyle();
    },
    renderRtl: function() {
      this.tryMakeResizable(), this.createStyle();
    },
    minH: function() {
      this.tryMakeResizable();
    },
    maxH: function() {
      this.tryMakeResizable();
    },
    minW: function() {
      this.tryMakeResizable();
    },
    maxW: function() {
      this.tryMakeResizable();
    },
    "$parent.margin": function(u) {
      !u || u[0] == this.margin[0] && u[1] == this.margin[1] || (this.margin = u.map(function(c) {
        return Number(c);
      }), this.createStyle(), this.emitContainerResized());
    }
  },
  computed: {
    classObj: function() {
      return {
        "vue-resizable": this.resizableAndNotStatic,
        static: this.static,
        resizing: this.isResizing,
        "vue-draggable-dragging": this.isDragging,
        cssTransforms: this.useCssTransforms,
        "render-rtl": this.renderRtl,
        "disable-userselect": this.isDragging,
        "no-touch": this.isAndroid && this.draggableOrResizableAndNotStatic
      };
    },
    resizableAndNotStatic: function() {
      return this.resizable && !this.static;
    },
    draggableOrResizableAndNotStatic: function() {
      return (this.draggable || this.resizable) && !this.static;
    },
    isAndroid: function() {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    },
    renderRtl: function() {
      return this.$parent.isMirrored ? !this.rtl : this.rtl;
    },
    resizableHandleClass: function() {
      return this.renderRtl ? "vue-resizable-handle vue-rtl-resizable-handle" : "vue-resizable-handle";
    }
  },
  methods: {
    createStyle: function() {
      this.x + this.w > this.cols ? (this.innerX = 0, this.innerW = this.w > this.cols ? this.cols : this.w) : (this.innerX = this.x, this.innerW = this.w);
      var u = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
      this.isDragging && (u.top = this.dragging.top, this.renderRtl ? u.right = this.dragging.left : u.left = this.dragging.left), this.isResizing && (u.width = this.resizing.width, u.height = this.resizing.height);
      var c;
      this.useCssTransforms ? this.renderRtl ? c = $a(u.top, u.right, u.width, u.height) : c = Na(u.top, u.left, u.width, u.height) : this.renderRtl ? c = Xa(u.top, u.right, u.width, u.height) : c = Fa(u.top, u.left, u.width, u.height), this.style = c;
    },
    emitContainerResized: function() {
      for (var u = {}, c = 0, v = ["width", "height"]; c < v.length; c++) {
        var p = v[c], m = this.style[p], w = m.match(/^(\d+)px$/);
        if (!w)
          return;
        u[p] = w[1];
      }
      this.$emit("container-resized", this.i, this.h, this.w, u.height, u.width);
    },
    handleResize: function(u) {
      if (!this.static) {
        var c = mi(u);
        if (c != null) {
          var v = c.x, p = c.y, m = { width: 0, height: 0 }, w;
          switch (u.type) {
            case "resizestart": {
              this.previousW = this.innerW, this.previousH = this.innerH, w = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), m.width = w.width, m.height = w.height, this.resizing = m, this.isResizing = !0;
              break;
            }
            case "resizemove": {
              var _ = bi(this.lastW, this.lastH, v, p);
              this.renderRtl ? m.width = this.resizing.width - _.deltaX : m.width = this.resizing.width + _.deltaX, m.height = this.resizing.height + _.deltaY, this.resizing = m;
              break;
            }
            case "resizeend": {
              w = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), m.width = w.width, m.height = w.height, this.resizing = null, this.isResizing = !1;
              break;
            }
          }
          w = this.calcWH(m.height, m.width), w.w < this.minW && (w.w = this.minW), w.w > this.maxW && (w.w = this.maxW), w.h < this.minH && (w.h = this.minH), w.h > this.maxH && (w.h = this.maxH), w.h < 1 && (w.h = 1), w.w < 1 && (w.w = 1), this.lastW = v, this.lastH = p, (this.innerW !== w.w || this.innerH !== w.h) && this.$emit("resize", this.i, w.h, w.w, m.height, m.width), u.type === "resizeend" && (this.previousW !== this.innerW || this.previousH !== this.innerH) && this.$emit("resized", this.i, w.h, w.w, m.height, m.width), this.eventBus.emit("resizeEvent", { eventType: u.type, i: this.i, x: this.innerX, y: this.innerY, h: w.h, w: w.w });
        }
      }
    },
    handleDrag: function(u) {
      if (!this.static && !this.isResizing) {
        var c = mi(u);
        if (c !== null) {
          var v = c.x, p = c.y, m = { top: 0, left: 0 };
          switch (u.type) {
            case "dragstart": {
              this.previousX = this.innerX, this.previousY = this.innerY;
              var w = u.target.offsetParent.getBoundingClientRect(), _ = u.target.getBoundingClientRect();
              this.renderRtl ? m.left = (_.right - w.right) * -1 : m.left = _.left - w.left, m.top = _.top - w.top, this.dragging = m, this.isDragging = !0;
              break;
            }
            case "dragend": {
              if (!this.isDragging)
                return;
              var w = u.target.offsetParent.getBoundingClientRect(), _ = u.target.getBoundingClientRect();
              this.renderRtl ? m.left = (_.right - w.right) * -1 : m.left = _.left - w.left, m.top = _.top - w.top, this.dragging = null, this.isDragging = !1;
              break;
            }
            case "dragmove": {
              var h = bi(this.lastX, this.lastY, v, p);
              this.renderRtl ? m.left = this.dragging.left - h.deltaX : m.left = this.dragging.left + h.deltaX, m.top = this.dragging.top + h.deltaY, this.dragging = m;
              break;
            }
          }
          var C;
          this.renderRtl ? C = this.calcXY(m.top, m.left) : C = this.calcXY(m.top, m.left), this.lastX = v, this.lastY = p, (this.innerX !== C.x || this.innerY !== C.y) && this.$emit("move", this.i, C.x, C.y), u.type === "dragend" && (this.previousX !== this.innerX || this.previousY !== this.innerY) && this.$emit("moved", this.i, C.x, C.y), this.eventBus.emit("dragEvent", { eventType: u.type, i: this.i, x: C.x, y: C.y, h: this.innerH, w: this.innerW });
        }
      }
    },
    calcPosition: function(u, c, v, p) {
      var m = this.calcColWidth(), w;
      return this.renderRtl ? w = {
        right: Math.round(m * u + (u + 1) * this.margin[0]),
        top: Math.round(this.rowHeight * c + (c + 1) * this.margin[1]),
        width: v === 1 / 0 ? v : Math.round(m * v + Math.max(0, v - 1) * this.margin[0]),
        height: p === 1 / 0 ? p : Math.round(this.rowHeight * p + Math.max(0, p - 1) * this.margin[1])
      } : w = {
        left: Math.round(m * u + (u + 1) * this.margin[0]),
        top: Math.round(this.rowHeight * c + (c + 1) * this.margin[1]),
        width: v === 1 / 0 ? v : Math.round(m * v + Math.max(0, v - 1) * this.margin[0]),
        height: p === 1 / 0 ? p : Math.round(this.rowHeight * p + Math.max(0, p - 1) * this.margin[1])
      }, w;
    },
    calcXY: function(u, c) {
      var v = this.calcColWidth(), p = Math.round((c - this.margin[0]) / (v + this.margin[0])), m = Math.round((u - this.margin[1]) / (this.rowHeight + this.margin[1]));
      return p = Math.max(Math.min(p, this.cols - this.innerW), 0), m = Math.max(Math.min(m, this.maxRows - this.innerH), 0), { x: p, y: m };
    },
    calcColWidth: function() {
      return (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols;
    },
    calcWH: function(u, c, v) {
      v === void 0 && (v = !1);
      var p = this.calcColWidth(), m = Math.round((c + this.margin[0]) / (p + this.margin[0])), w = 0;
      return v ? w = Math.ceil((u + this.margin[1]) / (this.rowHeight + this.margin[1])) : w = Math.round((u + this.margin[1]) / (this.rowHeight + this.margin[1])), m = Math.max(Math.min(m, this.cols - this.innerX), 0), w = Math.max(Math.min(w, this.maxRows - this.innerY), 0), { w: m, h: w };
    },
    updateWidth: function(u, c) {
      this.containerWidth = u, c != null && (this.cols = c);
    },
    compact: function() {
      this.createStyle();
    },
    tryMakeDraggable: function() {
      var u = this;
      if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = vi(this.$refs.item)), this.draggable && !this.static) {
        var c = {
          ignoreFrom: this.dragIgnoreFrom,
          allowFrom: this.dragAllowFrom
        };
        this.interactObj.draggable(c), this.dragEventSet || (this.dragEventSet = !0, this.interactObj.on("dragstart dragmove dragend", function(v) {
          u.handleDrag(v);
        }));
      } else
        this.interactObj.draggable({
          enabled: !1
        });
    },
    tryMakeResizable: function() {
      var u = this;
      if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = vi(this.$refs.item)), this.resizable && !this.static) {
        var c = this.calcPosition(0, 0, this.maxW, this.maxH), v = this.calcPosition(0, 0, this.minW, this.minH), p = {
          preserveAspectRatio: !0,
          edges: {
            left: !1,
            right: "." + this.resizableHandleClass,
            bottom: "." + this.resizableHandleClass,
            top: !1
          },
          ignoreFrom: this.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: v.height,
              width: v.width
            },
            max: {
              height: c.height,
              width: c.width
            }
          }
        };
        this.interactObj.resizable(p), this.resizeEventSet || (this.resizeEventSet = !0, this.interactObj.on("resizestart resizemove resizeend", function(m) {
          u.handleResize(m);
        }));
      } else
        this.interactObj.resizable({
          enabled: !1
        });
    },
    autoSize: function() {
      this.previousW = this.innerW, this.previousH = this.innerH;
      var u = this.$slots.default[0].elm.getBoundingClientRect(), c = this.calcWH(u.height, u.width, !0);
      c.w < this.minW && (c.w = this.minW), c.w > this.maxW && (c.w = this.maxW), c.h < this.minH && (c.h = this.minH), c.h > this.maxH && (c.h = this.maxH), c.h < 1 && (c.h = 1), c.w < 1 && (c.w = 1), (this.innerW !== c.w || this.innerH !== c.h) && this.$emit("resize", this.i, c.h, c.w, u.height, u.width), (this.previousW !== c.w || this.previousH !== c.h) && (this.$emit("resized", this.i, c.h, c.w, u.height, u.width), this.eventBus.emit("resizeEvent", { eventType: "resizeend", i: this.i, x: this.innerX, y: this.innerY, h: c.h, w: c.w }));
    }
  }
});
const Hi = (u, c) => {
  const v = u.__vccOpts || u;
  for (const [p, m] of c)
    v[p] = m;
  return v;
};
function Qa(u, c, v, p, m, w) {
  return cr(), fr("div", {
    ref: "item",
    class: hi(["vue-grid-item", u.classObj]),
    style: Mi(u.style)
  }, [
    ji(u.$slots, "default"),
    u.resizableAndNotStatic ? (cr(), fr("span", {
      key: 0,
      ref: "handle",
      class: hi(u.resizableHandleClass)
    }, null, 2)) : za("", !0)
  ], 6);
}
const Bi = /* @__PURE__ */ Hi(Za, [["render", Qa]]);
var jn = function() {
  return jn = Object.assign || function(c) {
    for (var v, p = 1, m = arguments.length; p < m; p++) {
      v = arguments[p];
      for (var w in v)
        Object.prototype.hasOwnProperty.call(v, w) && (c[w] = v[w]);
    }
    return c;
  }, jn.apply(this, arguments);
};
function es(u) {
  return { all: u = u || /* @__PURE__ */ new Map(), on: function(c, v) {
    var p = u.get(c);
    p && p.push(v) || u.set(c, [v]);
  }, off: function(c, v) {
    var p = u.get(c);
    p && p.splice(p.indexOf(v) >>> 0, 1);
  }, emit: function(c, v) {
    (u.get(c) || []).slice().map(function(p) {
      p(v);
    }), (u.get("*") || []).slice().map(function(p) {
      p(c, v);
    });
  } };
}
var vr = { exports: {} }, ts = vr.exports = {};
ts.forEach = function(u, c) {
  for (var v = 0; v < u.length; v++) {
    var p = c(u[v]);
    if (p)
      return p;
  }
};
var ns = function(u) {
  var c = u.stateHandler.getState;
  function v(_) {
    var h = c(_);
    return h && !!h.isDetectable;
  }
  function p(_) {
    c(_).isDetectable = !0;
  }
  function m(_) {
    return !!c(_).busy;
  }
  function w(_, h) {
    c(_).busy = !!h;
  }
  return {
    isDetectable: v,
    markAsDetectable: p,
    isBusy: m,
    markBusy: w
  };
}, rs = function(u) {
  var c = {};
  function v(_) {
    var h = u.get(_);
    return h === void 0 ? [] : c[h] || [];
  }
  function p(_, h) {
    var C = u.get(_);
    c[C] || (c[C] = []), c[C].push(h);
  }
  function m(_, h) {
    for (var C = v(_), T = 0, B = C.length; T < B; ++T)
      if (C[T] === h) {
        C.splice(T, 1);
        break;
      }
  }
  function w(_) {
    var h = v(_);
    !h || (h.length = 0);
  }
  return {
    get: v,
    add: p,
    removeListener: m,
    removeAllListeners: w
  };
}, is = function() {
  var u = 1;
  function c() {
    return u++;
  }
  return {
    generate: c
  };
}, os = function(u) {
  var c = u.idGenerator, v = u.stateHandler.getState;
  function p(w) {
    var _ = v(w);
    return _ && _.id !== void 0 ? _.id : null;
  }
  function m(w) {
    var _ = v(w);
    if (!_)
      throw new Error("setId required the element to have a resize detection state.");
    var h = c.generate();
    return _.id = h, h;
  }
  return {
    get: p,
    set: m
  };
}, as = function(u) {
  function c() {
  }
  var v = {
    log: c,
    warn: c,
    error: c
  };
  if (!u && window.console) {
    var p = function(m, w) {
      m[w] = function() {
        var h = console[w];
        if (h.apply)
          h.apply(console, arguments);
        else
          for (var C = 0; C < arguments.length; C++)
            h(arguments[C]);
      };
    };
    p(v, "log"), p(v, "warn"), p(v, "error");
  }
  return v;
}, gr = { exports: {} }, Wi = gr.exports = {};
Wi.isIE = function(u) {
  function c() {
    var p = navigator.userAgent.toLowerCase();
    return p.indexOf("msie") !== -1 || p.indexOf("trident") !== -1 || p.indexOf(" edge/") !== -1;
  }
  if (!c())
    return !1;
  if (!u)
    return !0;
  var v = function() {
    var p, m = 3, w = document.createElement("div"), _ = w.getElementsByTagName("i");
    do
      w.innerHTML = "<!--[if gt IE " + ++m + "]><i></i><![endif]-->";
    while (_[0]);
    return m > 4 ? m : p;
  }();
  return u === v;
};
Wi.isLegacyOpera = function() {
  return !!window.opera;
};
var Li = { exports: {} }, ss = Li.exports = {};
ss.getOption = ls;
function ls(u, c, v) {
  var p = u[c];
  return p == null && v !== void 0 ? v : p;
}
var xi = Li.exports, us = function(c) {
  c = c || {};
  var v = c.reporter, p = xi.getOption(c, "async", !0), m = xi.getOption(c, "auto", !0);
  m && !p && (v && v.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), p = !0);
  var w = Si(), _, h = !1;
  function C(re, de) {
    !h && m && p && w.size() === 0 && G(), w.add(re, de);
  }
  function T() {
    for (h = !0; w.size(); ) {
      var re = w;
      w = Si(), re.process();
    }
    h = !1;
  }
  function B(re) {
    h || (re === void 0 && (re = p), _ && (te(_), _ = null), re ? G() : T());
  }
  function G() {
    _ = X(T);
  }
  function te(re) {
    var de = clearTimeout;
    return de(re);
  }
  function X(re) {
    var de = function(_e) {
      return setTimeout(_e, 0);
    };
    return de(re);
  }
  return {
    add: C,
    force: B
  };
};
function Si() {
  var u = {}, c = 0, v = 0, p = 0;
  function m(h, C) {
    C || (C = h, h = 0), h > v ? v = h : h < p && (p = h), u[h] || (u[h] = []), u[h].push(C), c++;
  }
  function w() {
    for (var h = p; h <= v; h++)
      for (var C = u[h], T = 0; T < C.length; T++) {
        var B = C[T];
        B();
      }
  }
  function _() {
    return c;
  }
  return {
    add: m,
    process: w,
    size: _
  };
}
var yr = "_erd";
function cs(u) {
  return u[yr] = {}, Ni(u);
}
function Ni(u) {
  return u[yr];
}
function fs(u) {
  delete u[yr];
}
var ds = {
  initState: cs,
  getState: Ni,
  cleanState: fs
}, Gt = gr.exports, ps = function(u) {
  u = u || {};
  var c = u.reporter, v = u.batchProcessor, p = u.stateHandler.getState;
  if (!c)
    throw new Error("Missing required dependency: reporter.");
  function m(T, B) {
    function G() {
      B(T);
    }
    if (Gt.isIE(8))
      p(T).object = {
        proxy: G
      }, T.attachEvent("onresize", G);
    else {
      var te = h(T);
      if (!te)
        throw new Error("Element is not detectable by this strategy.");
      te.contentDocument.defaultView.addEventListener("resize", G);
    }
  }
  function w(T) {
    var B = u.important ? " !important; " : "; ";
    return (T.join(B) + B).trim();
  }
  function _(T, B, G) {
    G || (G = B, B = T, T = null), T = T || {}, T.debug;
    function te(X, re) {
      var de = w(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), _e = !1, Z = window.getComputedStyle(X), $ = X.offsetWidth, ne = X.offsetHeight;
      p(X).startSize = {
        width: $,
        height: ne
      };
      function R() {
        function S() {
          if (Z.position === "static") {
            X.style.setProperty("position", "relative", T.important ? "important" : "");
            var k = function(pe, V, fe, F) {
              function Q(M) {
                return M.replace(/[^-\d\.]/g, "");
              }
              var be = fe[F];
              be !== "auto" && Q(be) !== "0" && (pe.warn("An element that is positioned static has style." + F + "=" + be + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + F + " will be set to 0. Element: ", V), V.style.setProperty(F, "0", T.important ? "important" : ""));
            };
            k(c, X, Z, "top"), k(c, X, Z, "right"), k(c, X, Z, "bottom"), k(c, X, Z, "left");
          }
        }
        function L() {
          _e || S();
          function k(V, fe) {
            if (!V.contentDocument) {
              var F = p(V);
              F.checkForObjectDocumentTimeoutId && window.clearTimeout(F.checkForObjectDocumentTimeoutId), F.checkForObjectDocumentTimeoutId = setTimeout(function() {
                F.checkForObjectDocumentTimeoutId = 0, k(V, fe);
              }, 100);
              return;
            }
            fe(V.contentDocument);
          }
          var pe = this;
          k(pe, function(fe) {
            re(X);
          });
        }
        Z.position !== "" && (S(), _e = !0);
        var z = document.createElement("object");
        z.style.cssText = de, z.tabIndex = -1, z.type = "text/html", z.setAttribute("aria-hidden", "true"), z.onload = L, Gt.isIE() || (z.data = "about:blank"), p(X) && (X.appendChild(z), p(X).object = z, Gt.isIE() && (z.data = "about:blank"));
      }
      v ? v.add(R) : R();
    }
    Gt.isIE(8) ? G(B) : te(B, G);
  }
  function h(T) {
    return p(T).object;
  }
  function C(T) {
    if (!!p(T)) {
      var B = h(T);
      !B || (Gt.isIE(8) ? T.detachEvent("onresize", B.proxy) : T.removeChild(B), p(T).checkForObjectDocumentTimeoutId && window.clearTimeout(p(T).checkForObjectDocumentTimeoutId), delete p(T).object);
    }
  }
  return {
    makeDetectable: _,
    addListener: m,
    uninstall: C
  };
}, hs = vr.exports.forEach, vs = function(u) {
  u = u || {};
  var c = u.reporter, v = u.batchProcessor, p = u.stateHandler.getState;
  u.stateHandler.hasState;
  var m = u.idHandler;
  if (!v)
    throw new Error("Missing required dependency: batchProcessor");
  if (!c)
    throw new Error("Missing required dependency: reporter.");
  var w = B(), _ = "erd_scroll_detection_scrollbar_style", h = "erd_scroll_detection_container";
  function C(R) {
    G(R, _, h);
  }
  C(window.document);
  function T(R) {
    var S = u.important ? " !important; " : "; ";
    return (R.join(S) + S).trim();
  }
  function B() {
    var R = 500, S = 500, L = document.createElement("div");
    L.style.cssText = T(["position: absolute", "width: " + R * 2 + "px", "height: " + S * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var z = document.createElement("div");
    z.style.cssText = T(["position: absolute", "width: " + R + "px", "height: " + S + "px", "overflow: scroll", "visibility: none", "top: " + -R * 3 + "px", "left: " + -S * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), z.appendChild(L), document.body.insertBefore(z, document.body.firstChild);
    var k = R - z.clientWidth, pe = S - z.clientHeight;
    return document.body.removeChild(z), {
      width: k,
      height: pe
    };
  }
  function G(R, S, L) {
    function z(fe, F) {
      F = F || function(be) {
        R.head.appendChild(be);
      };
      var Q = R.createElement("style");
      return Q.innerHTML = fe, Q.id = S, F(Q), Q;
    }
    if (!R.getElementById(S)) {
      var k = L + "_animation", pe = L + "_animation_active", V = `/* Created by the element-resize-detector library. */
`;
      V += "." + L + " > div::-webkit-scrollbar { " + T(["display: none"]) + ` }

`, V += "." + pe + " { " + T(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + k, "animation-name: " + k]) + ` }
`, V += "@-webkit-keyframes " + k + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, V += "@keyframes " + k + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", z(V);
    }
  }
  function te(R) {
    R.className += " " + h + "_animation_active";
  }
  function X(R, S, L) {
    if (R.addEventListener)
      R.addEventListener(S, L);
    else if (R.attachEvent)
      R.attachEvent("on" + S, L);
    else
      return c.error("[scroll] Don't know how to add event listeners.");
  }
  function re(R, S, L) {
    if (R.removeEventListener)
      R.removeEventListener(S, L);
    else if (R.detachEvent)
      R.detachEvent("on" + S, L);
    else
      return c.error("[scroll] Don't know how to remove event listeners.");
  }
  function de(R) {
    return p(R).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function _e(R) {
    return p(R).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function Z(R, S) {
    var L = p(R).listeners;
    if (!L.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    p(R).listeners.push(S);
  }
  function $(R, S, L) {
    L || (L = S, S = R, R = null), R = R || {};
    function z() {
      if (R.debug) {
        var j = Array.prototype.slice.call(arguments);
        if (j.unshift(m.get(S), "Scroll: "), c.log.apply)
          c.log.apply(null, j);
        else
          for (var Y = 0; Y < j.length; Y++)
            c.log(j[Y]);
      }
    }
    function k(j) {
      function Y(ee) {
        var Te = ee.getRootNode && ee.getRootNode().contains(ee);
        return ee === ee.ownerDocument.body || ee.ownerDocument.body.contains(ee) || Te;
      }
      return !Y(j) || window.getComputedStyle(j) === null;
    }
    function pe(j) {
      var Y = p(j).container.childNodes[0], ee = window.getComputedStyle(Y);
      return !ee.width || ee.width.indexOf("px") === -1;
    }
    function V() {
      var j = window.getComputedStyle(S), Y = {};
      return Y.position = j.position, Y.width = S.offsetWidth, Y.height = S.offsetHeight, Y.top = j.top, Y.right = j.right, Y.bottom = j.bottom, Y.left = j.left, Y.widthCSS = j.width, Y.heightCSS = j.height, Y;
    }
    function fe() {
      var j = V();
      p(S).startSize = {
        width: j.width,
        height: j.height
      }, z("Element start size", p(S).startSize);
    }
    function F() {
      p(S).listeners = [];
    }
    function Q() {
      if (z("storeStyle invoked."), !p(S)) {
        z("Aborting because element has been uninstalled");
        return;
      }
      var j = V();
      p(S).style = j;
    }
    function be(j, Y, ee) {
      p(j).lastWidth = Y, p(j).lastHeight = ee;
    }
    function M(j) {
      return de(j).childNodes[0];
    }
    function U() {
      return 2 * w.width + 1;
    }
    function Ue() {
      return 2 * w.height + 1;
    }
    function rt(j) {
      return j + 10 + U();
    }
    function Pe(j) {
      return j + 10 + Ue();
    }
    function Ve(j) {
      return j * 2 + U();
    }
    function Kt(j) {
      return j * 2 + Ue();
    }
    function je(j, Y, ee) {
      var Te = de(j), Ce = _e(j), Be = rt(Y), q = Pe(ee), me = Ve(Y), K = Kt(ee);
      Te.scrollLeft = Be, Te.scrollTop = q, Ce.scrollLeft = me, Ce.scrollTop = K;
    }
    function it() {
      var j = p(S).container;
      if (!j) {
        j = document.createElement("div"), j.className = h, j.style.cssText = T(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), p(S).container = j, te(j), S.appendChild(j);
        var Y = function() {
          p(S).onRendered && p(S).onRendered();
        };
        X(j, "animationstart", Y), p(S).onAnimationStart = Y;
      }
      return j;
    }
    function D() {
      function j() {
        var ce = p(S).style;
        if (ce.position === "static") {
          S.style.setProperty("position", "relative", R.important ? "important" : "");
          var Oe = function(Ne, Ie, Tt, st) {
            function Qt(yt) {
              return yt.replace(/[^-\d\.]/g, "");
            }
            var kt = Tt[st];
            kt !== "auto" && Qt(kt) !== "0" && (Ne.warn("An element that is positioned static has style." + st + "=" + kt + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + st + " will be set to 0. Element: ", Ie), Ie.style[st] = 0);
          };
          Oe(c, S, ce, "top"), Oe(c, S, ce, "right"), Oe(c, S, ce, "bottom"), Oe(c, S, ce, "left");
        }
      }
      function Y(ce, Oe, Ne, Ie) {
        return ce = ce ? ce + "px" : "0", Oe = Oe ? Oe + "px" : "0", Ne = Ne ? Ne + "px" : "0", Ie = Ie ? Ie + "px" : "0", ["left: " + ce, "top: " + Oe, "right: " + Ie, "bottom: " + Ne];
      }
      if (z("Injecting elements"), !p(S)) {
        z("Aborting because element has been uninstalled");
        return;
      }
      j();
      var ee = p(S).container;
      ee || (ee = it());
      var Te = w.width, Ce = w.height, Be = T(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), q = T(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(Y(-(1 + Te), -(1 + Ce), -Ce, -Te))), me = T(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), K = T(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), ue = T(["position: absolute", "left: 0", "top: 0"]), ze = T(["position: absolute", "width: 200%", "height: 200%"]), De = document.createElement("div"), Se = document.createElement("div"), Ke = document.createElement("div"), Ae = document.createElement("div"), We = document.createElement("div"), Le = document.createElement("div");
      De.dir = "ltr", De.style.cssText = Be, De.className = h, Se.className = h, Se.style.cssText = q, Ke.style.cssText = me, Ae.style.cssText = ue, We.style.cssText = K, Le.style.cssText = ze, Ke.appendChild(Ae), We.appendChild(Le), Se.appendChild(Ke), Se.appendChild(We), De.appendChild(Se), ee.appendChild(De);
      function Zt() {
        var ce = p(S);
        ce && ce.onExpand ? ce.onExpand() : z("Aborting expand scroll handler: element has been uninstalled");
      }
      function at() {
        var ce = p(S);
        ce && ce.onShrink ? ce.onShrink() : z("Aborting shrink scroll handler: element has been uninstalled");
      }
      X(Ke, "scroll", Zt), X(We, "scroll", at), p(S).onExpandScroll = Zt, p(S).onShrinkScroll = at;
    }
    function _t() {
      function j(me, K, ue) {
        var ze = M(me), De = rt(K), Se = Pe(ue);
        ze.style.setProperty("width", De + "px", R.important ? "important" : ""), ze.style.setProperty("height", Se + "px", R.important ? "important" : "");
      }
      function Y(me) {
        var K = S.offsetWidth, ue = S.offsetHeight, ze = K !== p(S).lastWidth || ue !== p(S).lastHeight;
        z("Storing current size", K, ue), be(S, K, ue), v.add(0, function() {
          if (!!ze) {
            if (!p(S)) {
              z("Aborting because element has been uninstalled");
              return;
            }
            if (!ee()) {
              z("Aborting because element container has not been initialized");
              return;
            }
            if (R.debug) {
              var Se = S.offsetWidth, Ke = S.offsetHeight;
              (Se !== K || Ke !== ue) && c.warn(m.get(S), "Scroll: Size changed before updating detector elements.");
            }
            j(S, K, ue);
          }
        }), v.add(1, function() {
          if (!p(S)) {
            z("Aborting because element has been uninstalled");
            return;
          }
          if (!ee()) {
            z("Aborting because element container has not been initialized");
            return;
          }
          je(S, K, ue);
        }), ze && me && v.add(2, function() {
          if (!p(S)) {
            z("Aborting because element has been uninstalled");
            return;
          }
          if (!ee()) {
            z("Aborting because element container has not been initialized");
            return;
          }
          me();
        });
      }
      function ee() {
        return !!p(S).container;
      }
      function Te() {
        function me() {
          return p(S).lastNotifiedWidth === void 0;
        }
        z("notifyListenersIfNeeded invoked");
        var K = p(S);
        if (me() && K.lastWidth === K.startSize.width && K.lastHeight === K.startSize.height)
          return z("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (K.lastWidth === K.lastNotifiedWidth && K.lastHeight === K.lastNotifiedHeight)
          return z("Not notifying: Size already notified");
        z("Current size not notified, notifying..."), K.lastNotifiedWidth = K.lastWidth, K.lastNotifiedHeight = K.lastHeight, hs(p(S).listeners, function(ue) {
          ue(S);
        });
      }
      function Ce() {
        if (z("startanimation triggered."), pe(S)) {
          z("Ignoring since element is still unrendered...");
          return;
        }
        z("Element rendered.");
        var me = de(S), K = _e(S);
        (me.scrollLeft === 0 || me.scrollTop === 0 || K.scrollLeft === 0 || K.scrollTop === 0) && (z("Scrollbars out of sync. Updating detector elements..."), Y(Te));
      }
      function Be() {
        if (z("Scroll detected."), pe(S)) {
          z("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        Y(Te);
      }
      if (z("registerListenersAndPositionElements invoked."), !p(S)) {
        z("Aborting because element has been uninstalled");
        return;
      }
      p(S).onRendered = Ce, p(S).onExpand = Be, p(S).onShrink = Be;
      var q = p(S).style;
      j(S, q.width, q.height);
    }
    function ot() {
      if (z("finalizeDomMutation invoked."), !p(S)) {
        z("Aborting because element has been uninstalled");
        return;
      }
      var j = p(S).style;
      be(S, j.width, j.height), je(S, j.width, j.height);
    }
    function Jt() {
      L(S);
    }
    function Pt() {
      z("Installing..."), F(), fe(), v.add(0, Q), v.add(1, D), v.add(2, _t), v.add(3, ot), v.add(4, Jt);
    }
    z("Making detectable..."), k(S) ? (z("Element is detached"), it(), z("Waiting until element is attached..."), p(S).onRendered = function() {
      z("Element is now attached"), Pt();
    }) : Pt();
  }
  function ne(R) {
    var S = p(R);
    !S || (S.onExpandScroll && re(de(R), "scroll", S.onExpandScroll), S.onShrinkScroll && re(_e(R), "scroll", S.onShrinkScroll), S.onAnimationStart && re(S.container, "animationstart", S.onAnimationStart), S.container && R.removeChild(S.container));
  }
  return {
    makeDetectable: $,
    addListener: Z,
    uninstall: ne,
    initDocument: C
  };
}, Vt = vr.exports.forEach, gs = ns, ys = rs, ms = is, bs = os, ws = as, Oi = gr.exports, xs = us, tt = ds, Ss = ps, Os = vs;
function Ei(u) {
  return Array.isArray(u) || u.length !== void 0;
}
function _i(u) {
  if (Array.isArray(u))
    return u;
  var c = [];
  return Vt(u, function(v) {
    c.push(v);
  }), c;
}
function Pi(u) {
  return u && u.nodeType === 1;
}
var Es = function(u) {
  u = u || {};
  var c;
  if (u.idHandler)
    c = {
      get: function($) {
        return u.idHandler.get($, !0);
      },
      set: u.idHandler.set
    };
  else {
    var v = ms(), p = bs({
      idGenerator: v,
      stateHandler: tt
    });
    c = p;
  }
  var m = u.reporter;
  if (!m) {
    var w = m === !1;
    m = ws(w);
  }
  var _ = nt(u, "batchProcessor", xs({ reporter: m })), h = {};
  h.callOnAdd = !!nt(u, "callOnAdd", !0), h.debug = !!nt(u, "debug", !1);
  var C = ys(c), T = gs({
    stateHandler: tt
  }), B, G = nt(u, "strategy", "object"), te = nt(u, "important", !1), X = {
    reporter: m,
    batchProcessor: _,
    stateHandler: tt,
    idHandler: c,
    important: te
  };
  if (G === "scroll" && (Oi.isLegacyOpera() ? (m.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), G = "object") : Oi.isIE(9) && (m.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), G = "object")), G === "scroll")
    B = Os(X);
  else if (G === "object")
    B = Ss(X);
  else
    throw new Error("Invalid strategy name: " + G);
  var re = {};
  function de($, ne, R) {
    function S(fe) {
      var F = C.get(fe);
      Vt(F, function(be) {
        be(fe);
      });
    }
    function L(fe, F, Q) {
      C.add(F, Q), fe && Q(F);
    }
    if (R || (R = ne, ne = $, $ = {}), !ne)
      throw new Error("At least one element required.");
    if (!R)
      throw new Error("Listener required.");
    if (Pi(ne))
      ne = [ne];
    else if (Ei(ne))
      ne = _i(ne);
    else
      return m.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var z = 0, k = nt($, "callOnAdd", h.callOnAdd), pe = nt($, "onReady", function() {
    }), V = nt($, "debug", h.debug);
    Vt(ne, function(F) {
      tt.getState(F) || (tt.initState(F), c.set(F));
      var Q = c.get(F);
      if (V && m.log("Attaching listener to element", Q, F), !T.isDetectable(F)) {
        if (V && m.log(Q, "Not detectable."), T.isBusy(F)) {
          V && m.log(Q, "System busy making it detectable"), L(k, F, R), re[Q] = re[Q] || [], re[Q].push(function() {
            z++, z === ne.length && pe();
          });
          return;
        }
        return V && m.log(Q, "Making detectable..."), T.markBusy(F, !0), B.makeDetectable({ debug: V, important: te }, F, function(M) {
          if (V && m.log(Q, "onElementDetectable"), tt.getState(M)) {
            T.markAsDetectable(M), T.markBusy(M, !1), B.addListener(M, S), L(k, M, R);
            var U = tt.getState(M);
            if (U && U.startSize) {
              var Ue = M.offsetWidth, rt = M.offsetHeight;
              (U.startSize.width !== Ue || U.startSize.height !== rt) && S(M);
            }
            re[Q] && Vt(re[Q], function(Pe) {
              Pe();
            });
          } else
            V && m.log(Q, "Element uninstalled before being detectable.");
          delete re[Q], z++, z === ne.length && pe();
        });
      }
      V && m.log(Q, "Already detecable, adding listener."), L(k, F, R), z++;
    }), z === ne.length && pe();
  }
  function _e($) {
    if (!$)
      return m.error("At least one element is required.");
    if (Pi($))
      $ = [$];
    else if (Ei($))
      $ = _i($);
    else
      return m.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Vt($, function(ne) {
      C.removeAllListeners(ne), B.uninstall(ne), tt.cleanState(ne);
    });
  }
  function Z($) {
    B.initDocument && B.initDocument($);
  }
  return {
    listenTo: de,
    removeListener: C.removeListener,
    removeAllListeners: C.removeAllListeners,
    uninstall: _e,
    initDocument: Z
  };
};
function nt(u, c, v) {
  var p = u[c];
  return p == null && v !== void 0 ? v : p;
}
function _s(u, c) {
  for (var v = $i(u), p = v[0], m = 1, w = v.length; m < w; m++) {
    var _ = v[m];
    c > u[_] && (p = _);
  }
  return p;
}
function Ti(u, c) {
  if (!c[u])
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + u + " is missing!");
  return c[u];
}
function Ps(u, c, v, p, m, w, _) {
  if (c[p])
    return dr(c[p]);
  for (var h = u, C = $i(v), T = C.slice(C.indexOf(p)), B = 0, G = T.length; B < G; B++) {
    var te = T[B];
    if (c[te]) {
      h = c[te];
      break;
    }
  }
  return h = dr(h || []), Ut(La(h, { cols: w }), _);
}
function $i(u) {
  var c = Object.keys(u);
  return c.sort(function(v, p) {
    return u[v] - u[p];
  });
}
const Ts = {
  name: "GridLayout",
  provide: function() {
    return {
      eventBus: this.eventBus
    };
  },
  components: {
    GridItem: Bi
  },
  props: {
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: function() {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !1
    },
    responsiveLayouts: {
      type: Object,
      default: function() {
        return {};
      }
    },
    breakpoints: {
      type: Object,
      default: function() {
        return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
      }
    },
    cols: {
      type: Object,
      default: function() {
        return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
      }
    },
    preventCollision: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      eventBus: es(),
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1
      },
      layouts: {},
      lastBreakpoint: null,
      originalLayout: null
    };
  },
  created: function() {
    var u = this;
    u.resizeEventHandler = function(c) {
      var v = c.eventType, p = c.i, m = c.x, w = c.y, _ = c.h, h = c.w;
      u.resizeEvent(v, p, m, w, _, h);
    }, u.dragEventHandler = function(c) {
      var v = c.eventType, p = c.i, m = c.x, w = c.y, _ = c.h, h = c.w;
      u.dragEvent(v, p, m, w, _, h);
    }, u.eventBus.on("resizeEvent", u.resizeEventHandler), u.eventBus.on("dragEvent", u.dragEventHandler), u.$emit("layout-created", u.layout);
  },
  beforeUnmount: function() {
    this.eventBus.off("resizeEvent", this.resizeEventHandler), this.eventBus.off("dragEvent", this.dragEventHandler), Ja("resize", this.onWindowResize), this.erd.uninstall(this.$refs.item);
  },
  beforeMount: function() {
    this.$emit("layout-before-mount", this.layout);
  },
  mounted: function() {
    var u = this;
    this.$emit("layout-mounted", this.layout), this.$nextTick(function() {
      Ya(u.layout), u.originalLayout = u.layout;
      var c = u;
      u.$nextTick(function() {
        c.onWindowResize(), c.initResponsiveFeatures(), Ka("resize", c.onWindowResize), Ut(c.layout, c.verticalCompact), c.$emit("layout-updated", c.layout), c.updateHeight(), c.$nextTick(function() {
          u.erd = Es({
            strategy: "scroll",
            callOnAdd: !1
          }), u.erd.listenTo(c.$refs.item, function() {
            c.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width: function(u, c) {
      var v = this, p = this;
      this.$nextTick(function() {
        v.eventBus.emit("updateWidth", v.width), c === null && v.$nextTick(function() {
          v.$emit("layout-ready", p.layout);
        }), v.updateHeight();
      });
    },
    "layout.length": function() {
      this.layoutUpdate();
    },
    layout: function() {
      this.layoutUpdate();
    },
    colNum: function(u) {
      this.eventBus.emit("setColNum", u);
    },
    rowHeight: function() {
      this.eventBus.emit("setRowHeight", this.rowHeight);
    },
    isDraggable: function() {
      this.eventBus.emit("setDraggable", this.isDraggable);
    },
    isResizable: function() {
      this.eventBus.emit("setResizable", this.isResizable);
    },
    responsive: function() {
      this.responsive || (this.$emit("update:layout", this.originalLayout), this.eventBus.emit("setColNum", this.colNum)), this.onWindowResize();
    },
    maxRows: function() {
      this.eventBus.emit("setMaxRows", this.maxRows);
    },
    margin: function() {
      this.updateHeight();
    }
  },
  methods: {
    layoutUpdate: function() {
      if (this.layout !== void 0 && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          var u = this.findDifference(this.layout, this.originalLayout);
          u.length > 0 && (this.layout.length > this.originalLayout.length ? this.originalLayout = this.originalLayout.concat(u) : this.originalLayout = this.originalLayout.filter(function(c) {
            return !u.some(function(v) {
              return c.i === v.i;
            });
          })), this.lastLayoutLength = this.layout.length, this.initResponsiveFeatures();
        }
        Ut(this.layout, this.verticalCompact), this.eventBus.emit("updateWidth", this.width), this.updateHeight(), this.$emit("layout-updated", this.layout);
      }
    },
    updateHeight: function() {
      this.mergedStyle = {
        height: this.containerHeight()
      };
    },
    onWindowResize: function() {
      this.$refs !== null && this.$refs.item !== null && this.$refs.item !== void 0 && (this.width = this.$refs.item.offsetWidth), this.eventBus.emit("resizeEvent", {});
    },
    containerHeight: function() {
      if (!!this.autoSize)
        return Ha(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + "px";
    },
    dragEvent: function(u, c, v, p, m, w) {
      var _ = this, h = gi(this.layout, c);
      h == null && (h = { x: 0, y: 0 }), u === "dragmove" || u === "dragstart" ? (this.placeholder.i = c, this.placeholder.x = h.x, this.placeholder.y = h.y, this.placeholder.w = w, this.placeholder.h = m, this.$nextTick(function() {
        _.isDragging = !0;
      }), this.eventBus.emit("updateWidth", this.width)) : this.$nextTick(function() {
        _.isDragging = !1;
      }), pr(this.layout, h, v, p, !0, this.preventCollision), Ut(this.layout, this.verticalCompact), this.eventBus.emit("compact"), this.updateHeight(), u === "dragend" && this.$emit("layout-updated", this.layout);
    },
    resizeEvent: function(u, c, v, p, m, w) {
      var _ = this, h = gi(this.layout, c);
      h == null && (h = { h: 0, w: 0 });
      var C;
      if (this.preventCollision) {
        var T = Ii(this.layout, jn(jn({}, h), { w, h: m })).filter(function(te) {
          return te.i !== h.i;
        });
        if (C = T.length > 0, C) {
          var B = 1 / 0, G = 1 / 0;
          T.forEach(function(te) {
            te.x > h.x && (B = Math.min(B, te.x)), te.y > h.y && (G = Math.min(G, te.y));
          }), Number.isFinite(B) && (h.w = B - h.x), Number.isFinite(G) && (h.h = G - h.y);
        }
      }
      C || (h.w = w, h.h = m), u === "resizestart" || u === "resizemove" ? (this.placeholder.i = c, this.placeholder.x = v, this.placeholder.y = p, this.placeholder.w = h.w, this.placeholder.h = h.h, this.$nextTick(function() {
        _.isDragging = !0;
      }), this.eventBus.emit("updateWidth", this.width)) : this.$nextTick(function() {
        _.isDragging = !1;
      }), this.responsive && this.responsiveGridLayout(), Ut(this.layout, this.verticalCompact), this.eventBus.emit("compact"), this.updateHeight(), u === "resizeend" && this.$emit("layout-updated", this.layout);
    },
    responsiveGridLayout: function() {
      var u = _s(this.breakpoints, this.width), c = Ti(u, this.cols);
      this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint] && (this.layouts[this.lastBreakpoint] = dr(this.layout));
      var v = Ps(this.originalLayout, this.layouts, this.breakpoints, u, this.lastBreakpoint, c, this.verticalCompact);
      this.layouts[u] = v, this.lastBreakpoint !== u && this.$emit("breakpoint-changed", u, v), this.$emit("update:layout", v), this.lastBreakpoint = u, this.eventBus.emit("setColNum", Ti(u, this.cols));
    },
    initResponsiveFeatures: function() {
      this.layouts = Object.assign({}, this.responsiveLayouts);
    },
    findDifference: function(u, c) {
      var v = u.filter(function(m) {
        return !c.some(function(w) {
          return m.i === w.i;
        });
      }), p = c.filter(function(m) {
        return !u.some(function(w) {
          return m.i === w.i;
        });
      });
      return v.concat(p);
    }
  }
};
function ks(u, c, v, p, m, w) {
  const _ = Da("grid-item");
  return cr(), fr("div", {
    ref: "item",
    class: "vue-grid-layout",
    style: Mi(u.mergedStyle)
  }, [
    ji(u.$slots, "default"),
    Ia(Ra(_, {
      class: "vue-grid-placeholder",
      x: u.placeholder.x,
      y: u.placeholder.y,
      w: u.placeholder.w,
      h: u.placeholder.h,
      i: u.placeholder.i
    }, null, 8, ["x", "y", "w", "h", "i"]), [
      [Ca, u.isDragging]
    ])
  ], 4);
}
const Ms = /* @__PURE__ */ Hi(Ts, [["render", ks]]), ki = {
  GridLayout: Ms,
  GridItem: Bi
};
function hr(u) {
  hr.installed || (hr.installed = !0, Object.keys(ki).forEach((c) => {
    u.component(c, ki[c]);
  }));
}
const js = {
  install: hr
};
let zn = null;
typeof window < "u" ? zn = window.Vue : typeof global < "u" && (zn = global.Vue);
zn && zn.use(js);
export {
  Bi as GridItem,
  Ms as GridLayout,
  ki as default,
  hr as install
};
