var m, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, z = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function A() {
  A = function() {
  };
  z.Symbol || (z.Symbol = ba);
}
var ba = function() {
  var a = 0;
  return function(b) {
    return "jscomp_symbol_" + (b || "") + a++;
  };
}(), ca = "function" == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
}, C;
if ("function" == typeof Object.setPrototypeOf) {
  C = Object.setPrototypeOf;
} else {
  var E;
  a: {
    var da = {S:!0}, ea = {};
    try {
      ea.__proto__ = da;
      E = ea.S;
      break a;
    } catch (a) {
    }
    E = !1;
  }
  C = E ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
}
var fa = C;
function ha(a, b) {
  a.prototype = ca(b.prototype);
  a.prototype.constructor = a;
  if (fa) {
    fa(a, b);
  } else {
    for (var c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.ma = b.prototype;
}
var ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d) {
      for (var e in d) {
        Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
    }
  }
  return a;
};
function ja(a, b) {
  if (b) {
    var c = z;
    a = a.split(".");
    for (var d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && aa(c, a, {configurable:!0, writable:!0, value:b});
  }
}
ja("Object.assign", function(a) {
  return a || ia;
});
function ka() {
}
var F = {}, G = [], la = [];
function I(a, b) {
  var c = la, d, e;
  for (e = arguments.length; 2 < e--;) {
    G.push(arguments[e]);
  }
  b && null != b.children && (G.length || G.push(b.children), delete b.children);
  for (; G.length;) {
    if ((d = G.pop()) && void 0 !== d.pop) {
      for (e = d.length; e--;) {
        G.push(d[e]);
      }
    } else {
      "boolean" === typeof d && (d = null);
      if (e = "function" !== typeof a) {
        null == d ? d = "" : "number" === typeof d ? d = String(d) : "string" !== typeof d && (e = !1);
      }
      e && f ? c[c.length - 1] += d : c === la ? c = [d] : c.push(d);
      var f = e;
    }
  }
  f = new ka;
  f.nodeName = a;
  f.children = c;
  f.attributes = null == b ? void 0 : b;
  f.key = null == b ? void 0 : b.key;
  void 0 !== F.ba && F.ba(f);
  return f;
}
function J(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
  return a;
}
function K(a, b) {
  null != a && ("function" == typeof a ? a(b) : a.current = b);
}
var ma = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
function na(a, b) {
  return I(a.nodeName, J(J({}, a.attributes), b), 2 < arguments.length ? [].slice.call(arguments, 2) : a.children);
}
var oa = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, pa = [];
function qa(a) {
  !a.j && (a.j = !0) && 1 == pa.push(a) && (F.fa || ma)(ra);
}
function ra() {
  for (var a; a = pa.pop();) {
    a.j && L(a);
  }
}
function sa(a) {
  var b = J({}, a.attributes);
  b.children = a.children;
  a = a.nodeName.ga;
  if (void 0 !== a) {
    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }
  return b;
}
function M(a) {
  var b = a.parentNode;
  b && b.removeChild(a);
}
function ta(a, b, c, d) {
  var e = N;
  "className" === b && (b = "class");
  if ("key" !== b) {
    if ("ref" === b) {
      K(c, null), K(d, a);
    } else {
      if ("class" !== b || e) {
        if ("style" === b) {
          if (d && "string" !== typeof d && "string" !== typeof c || (a.style.cssText = d || ""), d && "object" === typeof d) {
            if ("string" !== typeof c) {
              for (var f in c) {
                f in d || (a.style[f] = "");
              }
            }
            for (f in d) {
              a.style[f] = "number" === typeof d[f] && !1 === oa.test(f) ? d[f] + "px" : d[f];
            }
          }
        } else {
          if ("dangerouslySetInnerHTML" === b) {
            d && (a.innerHTML = d.ca || "");
          } else {
            if ("o" == b[0] && "n" == b[1]) {
              e = b !== (b = b.replace(/Capture$/, "")), b = b.toLowerCase().substring(2), d ? c || a.addEventListener(b, ua, e) : a.removeEventListener(b, ua, e), (a.H || (a.H = {}))[b] = d;
            } else {
              if ("list" !== b && "type" !== b && !e && b in a) {
                try {
                  a[b] = null == d ? "" : d;
                } catch (h) {
                }
                null != d && !1 !== d || "spellcheck" == b || a.removeAttribute(b);
              } else {
                c = e && b !== (b = b.replace(/^xlink:?/, "")), null == d || !1 === d ? c ? a.removeAttributeNS("http://www.w3.org/1999/xlink", b.toLowerCase()) : a.removeAttribute(b) : "function" !== typeof d && (c ? a.setAttributeNS("http://www.w3.org/1999/xlink", b.toLowerCase(), d) : a.setAttribute(b, d));
              }
            }
          }
        }
      } else {
        a.className = d || "";
      }
    }
  }
}
function ua(a) {
  return this.H[a.type](F.event && F.event(a) || a);
}
var va = [], O = 0, N = !1, P = !1;
function wa() {
  for (var a; a = va.shift();) {
    F.T && F.T(a), a.v && a.v();
  }
}
function xa(a, b, c, d, e, f) {
  O++ || (N = null != e && void 0 !== e.ia, P = null != a && !("__preactattr_" in a));
  a = ya(a, b, c, d, f);
  e && a.parentNode !== e && e.appendChild(a);
  --O || (P = !1, f || wa());
  return a;
}
function ya(a, b, c, d, e) {
  var f = a, h = N;
  if (null == b || "boolean" === typeof b) {
    b = "";
  }
  if ("string" === typeof b || "number" === typeof b) {
    return a && void 0 !== a.splitText && a.parentNode && (!a.a || e) ? a.nodeValue != b && (a.nodeValue = b) : (f = document.createTextNode(b), a && (a.parentNode && a.parentNode.replaceChild(f, a), Q(a, !0))), f.__preactattr_ = !0, f;
  }
  e = b.nodeName;
  if ("function" === typeof e) {
    h = a;
    var g = b;
    f = b = h && h.a;
    var k = h, r = b && h.u === g.nodeName, l = r;
    for (a = sa(g); b && !l && (b = b.I);) {
      l = b.constructor === g.nodeName;
    }
    b && l && (!d || b.a) ? (R(b, a, 3, c, d), h = b.c) : (f && !r && (S(f), h = k = null), b = za(g.nodeName, a, c), h && !b.f && (b.f = h, k = null), R(b, a, 1, c, d), h = b.c, k && h !== k && (k.a = null, Q(k, !1)));
    return h;
  }
  N = "svg" === e ? !0 : "foreignObject" === e ? !1 : N;
  e = String(e);
  if (!a || a.O !== e && a.nodeName.toLowerCase() !== e.toLowerCase()) {
    if (f = e, e = N ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f), e.O = f, f = e, a) {
      for (; a.firstChild;) {
        f.appendChild(a.firstChild);
      }
      a.parentNode && a.parentNode.replaceChild(f, a);
      Q(a, !0);
    }
  }
  var n = f.firstChild;
  a = f.__preactattr_;
  e = b.children;
  if (null == a) {
    a = f.__preactattr_ = {};
    for (var p = f.attributes, x = p.length; x--;) {
      a[p[x].name] = p[x].value;
    }
  }
  if (!P && e && 1 === e.length && "string" === typeof e[0] && null != n && void 0 !== n.splitText && null == n.nextSibling) {
    n.nodeValue != e[0] && (n.nodeValue = e[0]);
  } else {
    if (e && e.length || null != n) {
      n = f;
      p = P || null != a.ea;
      x = n.childNodes;
      var B = [], y = {}, u = 0, t = 0, q = x.length, H = 0, Z = e ? e.length : 0;
      if (0 !== q) {
        for (l = 0; l < q; l++) {
          var v = x[l], D = v.__preactattr_;
          var w = Z && D ? v.a ? v.a.F : D.key : null;
          if (null != w) {
            u++, y[w] = v;
          } else {
            if (D || (void 0 !== v.splitText ? p ? v.nodeValue.trim() : 1 : p)) {
              B[H++] = v;
            }
          }
        }
      }
      if (0 !== Z) {
        for (l = 0; l < Z; l++) {
          q = e[l];
          r = null;
          w = q.key;
          if (null != w) {
            u && void 0 !== y[w] && (r = y[w], y[w] = void 0, u--);
          } else {
            if (t < H) {
              for (w = t; w < H; w++) {
                if (v = void 0 !== B[w]) {
                  if (v = k = B[w], "string" === typeof q || "number" === typeof q) {
                    v = void 0 !== v.splitText;
                  } else {
                    if ("string" === typeof q.nodeName) {
                      if (D = !v.u) {
                        D = q.nodeName, D = v.O === D || v.nodeName.toLowerCase() === D.toLowerCase();
                      }
                      v = D;
                    } else {
                      v = p || v.u === q.nodeName;
                    }
                  }
                }
                if (v) {
                  r = k;
                  B[w] = void 0;
                  w === H - 1 && H--;
                  w === t && t++;
                  break;
                }
              }
            }
          }
          r = ya(r, q, c, d);
          q = x[l];
          r && r !== n && r !== q && (null == q ? n.appendChild(r) : r === q.nextSibling ? M(q) : n.insertBefore(r, q));
        }
      }
      if (u) {
        for (l in y) {
          void 0 !== y[l] && Q(y[l], !1);
        }
      }
      for (; t <= H;) {
        void 0 !== (r = B[H--]) && Q(r, !1);
      }
    }
  }
  c = f;
  d = b.attributes;
  b = a;
  for (g in b) {
    d && null != d[g] || null == b[g] || ta(c, g, b[g], b[g] = void 0);
  }
  for (g in d) {
    "children" === g || "innerHTML" === g || g in b && d[g] === ("value" === g || "checked" === g ? c[g] : b[g]) || ta(c, g, b[g], b[g] = d[g]);
  }
  N = h;
  return f;
}
function Q(a, b) {
  var c = a.a;
  c ? S(c) : (null != a.__preactattr_ && K(a.__preactattr_.s, null), !1 !== b && null != a.__preactattr_ || M(a), Aa(a));
}
function Aa(a) {
  for (a = a.lastChild; a;) {
    var b = a.previousSibling;
    Q(a, !0);
    a = b;
  }
}
var T = [];
function za(a, b, c) {
  var d = T.length;
  if (a.prototype && a.prototype.i) {
    var e = new a(b, c);
    U.call(e, b, c);
  } else {
    e = new U(b, c), e.constructor = a, e.i = Ba;
  }
  for (; d--;) {
    if (T[d].constructor === a) {
      e.f = T[d].f;
      T.splice(d, 1);
      break;
    }
  }
  return e;
}
function Ba(a, b, c) {
  return this.constructor(a, c);
}
function R(a, b, c, d, e) {
  a.l || (a.l = !0, a.G = b.s, a.F = b.key, delete b.s, delete b.key, "undefined" === typeof a.constructor.N && (!a.c || e ? a.L && a.L() : a.W && a.W(b, d)), d && d !== a.context && (a.B || (a.B = a.context), a.context = d), a.C || (a.C = a.b), a.b = b, a.l = !1, 0 !== c && (1 !== c && !1 === F.na && a.c ? qa(a) : L(a, 1, e)), K(a.G, a));
}
function L(a, b, c, d) {
  if (!a.l) {
    var e = a.b, f = a.state, h = a.context, g = a.C || e, k = a.D || f, r = a.B || h, l = a.c, n = a.f, p = l || n, x = a.a, B = !1, y = r, u;
    a.constructor.N && (f = J(J({}, f), a.constructor.N(e, f)), a.state = f);
    l && (a.b = g, a.state = k, a.context = r, 2 !== b && a.R && !1 === a.R(e, f, h) ? B = !0 : a.M && a.M(e, f, h), a.b = e, a.state = f, a.context = h);
    a.C = a.D = a.B = a.f = null;
    a.j = !1;
    if (!B) {
      e = a.i(e, f, h);
      a.Z && (h = J(J({}, h), a.Z()));
      l && a.aa && (y = a.aa(g, k));
      f = e && e.nodeName;
      if ("function" === typeof f) {
        var t = sa(e);
        if ((u = x) && u.constructor === f && t.key == u.F) {
          R(u, t, 1, h, !1);
        } else {
          var q = u;
          a.a = u = za(f, t, h);
          u.f = u.f || n;
          u.I = a;
          R(u, t, 0, h, !1);
          L(u, 1, c, !0);
        }
        t = u.c;
      } else {
        n = p;
        if (q = x) {
          n = a.a = null;
        }
        if (p || 1 === b) {
          n && (n.a = null), t = xa(n, e, h, c || !l, p && p.parentNode, !0);
        }
      }
      p && t !== p && u !== x && (h = p.parentNode) && t !== h && (h.replaceChild(t, p), q || (p.a = null, Q(p, !1)));
      q && S(q);
      if ((a.c = t) && !d) {
        for (q = p = a; q = q.I;) {
          (p = q).c = t;
        }
        t.a = p;
        t.u = p.constructor;
      }
    }
    !l || c ? va.push(a) : B || (a.K && a.K(g, k, y), F.U && F.U(a));
    for (; a.m.length;) {
      a.m.pop().call(a);
    }
    O || d || wa();
  }
}
function S(a) {
  F.V && F.V(a);
  var b = a.c;
  a.l = !0;
  a.w && a.w();
  a.c = null;
  var c = a.a;
  c ? S(c) : b && (null != b.__preactattr_ && K(b.__preactattr_.s, null), a.f = b, M(b), T.push(a), Aa(b));
  K(a.G, null);
}
function U(a, b) {
  this.j = !0;
  this.context = b;
  this.b = a;
  this.state = this.state || {};
  this.m = [];
}
J(U.prototype, {P:function(a, b) {
  this.D || (this.D = this.state);
  this.state = J(J({}, this.state), "function" === typeof a ? a(this.state, this.b) : a);
  b && this.m.push(b);
  qa(this);
}, Y:function(a) {
  a && this.m.push(a);
  L(this, 2);
}, i:function() {
}});
var Ca = {};
function Da(a, b) {
  return a.o < b.o ? 1 : a.o > b.o ? -1 : a.index - b.index;
}
function Ea(a, b) {
  try {
    return a.index = b, a.o = a.attributes.default ? 0 : Fa(a.attributes.path).map(Ga).join(""), a.attributes;
  } catch (c) {
    return !1;
  }
}
function Fa(a) {
  return a.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Ga(a) {
  return ":" == a.charAt(0) ? 1 + "*+?".indexOf(a.charAt(a.length - 1)) || 4 : 5;
}
;var V = null, W = [], X = [];
function Ha() {
  var a;
  V && V.location ? a = V.location : V && V.$ ? a = V.$() : a = "undefined" !== typeof location ? location : {};
  return "" + (a.pathname || "") + (a.search || "");
}
function Ia(a) {
  for (var b = !1, c = 0; c < W.length; c++) {
    !0 === Ja(W[c], a) && (b = !0);
  }
  for (c = X.length; c--;) {
    X[c](a);
  }
  return b;
}
function Ka(a) {
  if (a && a.getAttribute) {
    var b = a.getAttribute("href");
    a = a.getAttribute("target");
    if (b && b.match(/^\//g) && (!a || a.match(/^_?self$/i))) {
      var c = void 0 === c ? !1 : c;
      "string" !== typeof b && b.url && (c = b.replace, b = b.url);
      a: {
        a = b;
        for (var d = W.length; d--;) {
          if (0 < La(W[d].b.children, a, !1).length) {
            a = !0;
            break a;
          }
        }
        a = !1;
      }
      if (a) {
        if (a = b, c = c ? "replace" : "push", c = void 0 === c ? "push" : c, V && V[c]) {
          V[c](a);
        } else {
          if ("undefined" !== typeof history && history[c + "State"]) {
            history[c + "State"](null, null, a);
          }
        }
      }
      return Ia(b);
    }
  }
}
function Ma(a) {
  if (0 == a.button) {
    return Ka(a.currentTarget || a.target || this), Na(a);
  }
}
function Na(a) {
  a && (a.stopImmediatePropagation && a.stopImmediatePropagation(), a.stopPropagation && a.stopPropagation(), a.preventDefault());
  return !1;
}
function Oa(a) {
  if (!(a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || 0 !== a.button)) {
    var b = a.target;
    do {
      var c;
      if (c = "A" === String(b.nodeName).toUpperCase() && b.getAttribute("href")) {
        c = b, A(), A(), c = null != c.__preactattr_ || "undefined" !== typeof Symbol && null != c[Symbol.for("preactattr")];
      }
      if (c) {
        if (b.hasAttribute("native")) {
          break;
        }
        if (Ka(b)) {
          return Na(a);
        }
      }
    } while (b = b.parentNode);
  }
}
var Pa = !1;
function Qa() {
  Pa || ("function" === typeof addEventListener && (V || addEventListener("popstate", function() {
    Ia(Ha());
  }), addEventListener("click", Oa)), Pa = !0);
}
function Ra(a) {
  U.call(this, a);
  a.history && (V = a.history);
  this.state = {url:a.url || Ha()};
  Qa();
}
ha(Ra, U);
m = Ra.prototype;
m.R = function(a) {
  return !0 !== a.la ? !0 : a.url !== this.b.url || a.A !== this.b.A;
};
function Ja(a, b) {
  a.g = !1;
  a.P({url:b});
  if (a.updating) {
    return 0 < La(a.b.children, b, !1).length;
  }
  a.Y();
  return a.g;
}
m.L = function() {
  W.push(this);
  this.updating = !0;
};
m.v = function() {
  var a = this;
  V && (this.h = V.ha(function(b) {
    Ja(a, "" + (b.pathname || "") + (b.search || ""));
  }));
  this.updating = !1;
};
m.w = function() {
  "function" === typeof this.h && this.h();
  W.splice(W.indexOf(this), 1);
};
m.M = function() {
  this.updating = !0;
};
m.K = function() {
  this.updating = !1;
};
function La(a, b, c) {
  return a.filter(Ea).sort(Da).map(function(a) {
    var e = b;
    var d = a.attributes.path, h = a.attributes, g = /(?:\?([^#]*))?(#.*)?$/, k = e.match(g), r = {};
    if (k && k[1]) {
      k = k[1].split("&");
      for (var l = 0; l < k.length; l++) {
        var n = k[l].split("=");
        r[decodeURIComponent(n[0])] = decodeURIComponent(n.slice(1).join("="));
      }
    }
    e = Fa(e.replace(g, ""));
    d = Fa(d || "");
    g = Math.max(e.length, d.length);
    for (k = 0; k < g; k++) {
      if (d[k] && ":" === d[k].charAt(0)) {
        l = d[k].replace(/(^:|[+*?]+$)/g, "");
        n = (d[k].match(/[+*?]+$/) || Ca)[0] || "";
        var p = ~n.indexOf("+"), x = ~n.indexOf("*"), B = e[k] || "";
        if (!B && !x && (0 > n.indexOf("?") || p)) {
          var y = !1;
          break;
        }
        r[l] = decodeURIComponent(B);
        if (p || x) {
          r[l] = e.slice(k).map(decodeURIComponent).join("/");
          break;
        }
      } else {
        if (d[k] !== e[k]) {
          y = !1;
          break;
        }
      }
    }
    if (e = !0 !== h.default && !1 === y ? !1 : r) {
      return !1 !== c ? (e = Object.assign({}, {url:b, matches:e}, e), delete e.s, delete e.key, na(a, e)) : a;
    }
  }).filter(Boolean);
}
m.i = function(a, b) {
  var c = a.A;
  b = b.url;
  a = La(a.children, b, !0);
  var d = a[0] || null;
  this.g = !!d;
  var e = this.X;
  b !== e && (this.X = b, "function" === typeof c && c({ka:this, url:b, ja:e, active:a, current:d}));
  return d;
};
function Sa(a) {
  return I("a", Object.assign({}, a, {onClick:Ma}));
}
function Y() {
  U.call(this);
  this.g = this.g.bind(this);
}
ha(Y, U);
Y.prototype.g = function(a) {
  this.h = a;
  this.P({});
};
Y.prototype.v = function() {
  X.push(this.g);
};
Y.prototype.w = function() {
  X.splice(X.indexOf(this.g) >>> 0, 1);
};
Y.prototype.i = function(a) {
  var b = this.h || Ha(), c = b.replace(/\?.+$/, "");
  this.h = null;
  var d = a.children.filter(function(a) {
    return "function" == typeof a;
  });
  return d[0] && d[0]({url:b, path:c, matches:c === a.path});
};
function Ta(a) {
  var b = Object.assign({}, a), c = void 0 === a.J ? "active" : a.J;
  a = a.path;
  var d = (delete b.J, delete b.path, b);
  return I(Y, {path:a || d.href}, "\n    ", function(a) {
    return I(Sa, Object.assign({}, d, {className:[d.da || d.className, a.matches && c].filter(Boolean).join(" ")}));
  }, "\n  ");
}
;function Ua() {
  return I("div", {}, "\n  ", I("h3", {}, "Home"), "\n  Preact Router For Depack.\n");
}
function Va() {
  return I("div", {}, "\n  ", I("h3", {}, "About"), "\n  ", I("p", {}, I("em", {}, "Preact"), " is a library for making single-page websites and rendering JSX components."), "\n  ", I("p", {}, I("em", {}, "Depack"), " is front-end bundler that uses Google Closure Compiler (as well as back-end package compiler)."), "\n");
}
function Wa(a) {
  a = a.optional;
  return I("div", {}, "\n  ", I("h3", {}, "Search"), "\n  ", a, "\n");
}
var Xa = I(function() {
  return I("div", {}, "\n    ", I("ul", {}, "\n      ", I("li", {}, I(Ta, {href:"/"}, "Home")), "\n      ", I("li", {}, I(Ta, {href:"/about"}, "About")), "\n      ", I("li", {}, I(Ta, {href:"/search/example/hello"}, "Search")), "\n    "), "\n    ", I(Ra, {A:function(a) {
    a.current && a.current.attributes.title && (document.title = a.current.attributes.title);
  }}, "\n      ", I(Ua, {path:"/", title:"@depack/router"}), "\n      ", I(Va, {path:"/about", title:"About"}), "\n      ", I(Wa, {path:"/search/:query/:optional?", title:"Search"}), "\n    "), "\n  ");
});
xa(void 0, Xa, {}, !1, document.querySelector("#preact"), !1);


//# sourceMappingURL=main.js.map