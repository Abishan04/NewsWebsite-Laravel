
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
            return e.default;
          }
          : function () {
            return e;
          };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 28));
})([
  function (e, t, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.5.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-04-10T15:07Z
     */
    /*!
     * jQuery JavaScript Library v3.5.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-04-10T15:07Z
     */
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
          ? n(t, !0)
          : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e);
          })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var r = [],
        s = Object.getPrototypeOf,
        a = r.slice,
        l = r.flat
          ? function (e) {
            return r.flat.call(e);
          }
          : function (e) {
            return r.concat.apply([], e);
          },
        c = r.push,
        u = r.indexOf,
        d = {},
        p = d.toString,
        f = d.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        m = {},
        v = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        T = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var i,
          o,
          r = (n = n || b).createElement("script");
        if (((r.text = e), t)) for (i in T) (o = t[i] || (t.getAttribute && t.getAttribute(i))) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
      }
      function S(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
      }
      var _ = function (e, t) {
        return new _.fn.init(e, t);
      };
      function E(e) {
        var t = !!e && "length" in e && e.length,
          n = S(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
      }
      (_.fn = _.prototype = {
        jquery: "3.5.0",
        constructor: _,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (e) {
          return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
          var t = _.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return _.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            _.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            _.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            _.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: r.sort,
        splice: r.splice,
      }),
        (_.extend = _.fn.extend = function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || v(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
            if (null != (e = arguments[a]))
              for (t in e)
                (i = e[t]),
                  "__proto__" !== t &&
                  s !== i &&
                  (c && i && (_.isPlainObject(i) || (o = Array.isArray(i)))
                    ? ((n = s[t]), (r = o && !Array.isArray(n) ? [] : o || _.isPlainObject(n) ? n : {}), (o = !1), (s[t] = _.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
          return s;
        }),
        _.extend({
          expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () { },
          isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g));
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              o,
              r = 0,
              s = [];
            if (E(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return l(s);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol && (_.fn[Symbol.iterator] = r[Symbol.iterator]),
        _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          d["[object " + t + "]"] = t.toLowerCase();
        });
      var C =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            m,
            v,
            y,
            b,
            T = "sizzle" + 1 * new Date(),
            w = e.document,
            S = 0,
            _ = 0,
            E = le(),
            C = le(),
            k = le(),
            x = le(),
            O = function (e, t) {
              return e === t && (d = !0), 0;
            },
            A = {}.hasOwnProperty,
            D = [],
            I = D.pop,
            N = D.push,
            L = D.push,
            P = D.slice,
            H = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
              return -1;
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + j + "*(" + R + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + j + "*\\]",
            M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(j + "+", "g"),
            q = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            B = new RegExp("^" + j + "*," + j + "*"),
            U = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            V = new RegExp(j + "|>"),
            z = new RegExp(M),
            G = new RegExp("^" + R + "$"),
            Y = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + $ + ")$", "i"),
              needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i"),
            },
            K = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
              p();
            },
            se = Te(
              function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            L.apply((D = P.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (e) {
            L = {
              apply: D.length
                ? function (e, t) {
                  N.apply(e, P.call(t));
                }
                : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]););
                  e.length = n - 1;
                },
            };
          }
          function ae(e, t, i, o) {
            var r,
              a,
              c,
              u,
              d,
              h,
              v,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
            if (!o && (p(t), (t = t || f), g)) {
              if (11 !== w && (d = Z.exec(e)))
                if ((r = d[1])) {
                  if (9 === w) {
                    if (!(c = t.getElementById(r))) return i;
                    if (c.id === r) return i.push(c), i;
                  } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
                } else {
                  if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                  if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), i;
                }
              if (n.qsa && !x[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                if (((v = e), (y = t), 1 === w && (V.test(e) || U.test(e)))) {
                  for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, oe)) : t.setAttribute("id", (u = T))), a = (h = s(e)).length; a--;)
                    h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                  v = h.join(",");
                }
                try {
                  return L.apply(i, y.querySelectorAll(v)), i;
                } catch (t) {
                  x(e, !0);
                } finally {
                  u === T && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(q, "$1"), t, i, o);
          }
          function le() {
            var e = [];
            return function t(n, o) {
              return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o);
            };
          }
          function ce(e) {
            return (e[T] = !0), e;
          }
          function ue(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, i) {
                  for (var o, r = e([], n.length, t), s = r.length; s--;) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
            (r = ae.isXML = function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !K.test(t || (n && n.nodeName) || "HTML");
            }),
            (p = ae.setDocument = function (e) {
              var t,
                o,
                s = e ? e.ownerDocument || e : w;
              return s != f && 9 === s.nodeType && s.documentElement
                ? ((h = (f = s).documentElement),
                  (g = !r(f)),
                  w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
                  (n.scope = ue(function (e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (h.appendChild(e).id = T), !f.getElementsByName || !f.getElementsByName(T).length;
                  })),
                  n.getById
                    ? ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            i,
                            o,
                            r = t.getElementById(e);
                          if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; (r = o[i++]);) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    }
                    : function (e, t) {
                      var n,
                        i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[o++]);) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (m = []),
                  (n.qsa = J.test(f.querySelectorAll)) &&
                  (ue(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + $ + ")"),
                      e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="),
                      (t = f.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"),
                      e.querySelectorAll(":checked").length || m.push(":checked"),
                      e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      m.push("[\\r\\n\\f]");
                  }),
                    ue(function (e) {
                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = J.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                  ue(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", M);
                  }),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = J.test(h.compareDocumentPosition)),
                  (b =
                    t || J.test(h.contains)
                      ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                      }
                      : function (e, t) {
                        if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                        return !1;
                      }),
                  (O = t
                    ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e == f || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == f || (t.ownerDocument == w && b(w, t))
                              ? 1
                              : u
                                ? H(u, e) - H(u, t)
                                : 0
                          : 4 & i
                            ? -1
                            : 1)
                      );
                    }
                    : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : u ? H(u, e) - H(u, t) : 0;
                      if (o === r) return pe(e, t);
                      for (n = e; (n = n.parentNode);) s.unshift(n);
                      for (n = t; (n = n.parentNode);) a.unshift(n);
                      for (; s[i] === a[i];) i++;
                      return i ? pe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0;
                    }),
                  f)
                : f;
            }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if ((p(e), n.matchesSelector && g && !x[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                try {
                  var i = y.call(e, t);
                  if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                } catch (e) {
                  x(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var o = i.attrHandle[t.toLowerCase()],
                r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
              return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, oe);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                o = 0,
                r = 0;
              if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(O), d)) {
                for (; (t = e[r++]);) t === e[r] && (o = i.push(r));
                for (; o--;) e.splice(i[o], 1);
              }
              return (u = null), e;
            }),
            (o = ae.getText = function (e) {
              var t,
                n = "",
                i = 0,
                r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else for (; (t = e[i++]);) n += o(t);
              return n;
            }),
            ((i = ae.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: Y,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                ATTR: function (e) {
                  return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Y.CHILD.test(e[0])
                    ? null
                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                      return !0;
                    }
                    : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function (e) {
                  var t = E[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                      E(e, function (e) {
                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (i) {
                    var o = ae.attr(i, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                      ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                            ? o !== n
                            : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                                ? n && o.indexOf(n) > -1
                                : "$=" === t
                                  ? n && o.slice(-n.length) === n
                                  : "~=" === t
                                    ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                                    : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, o) {
                  var r = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === o
                    ? function (e) {
                      return !!e.parentNode;
                    }
                    : function (t, n, l) {
                      var c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g = r !== s ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (m) {
                        if (r) {
                          for (; g;) {
                            for (p = t; (p = p[g]);) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            b = (f = (c = (u = (d = (p = m)[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && c[1]) && c[2], p = f && m.childNodes[f];
                            (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++b && p === t) {
                              u[e] = [S, f, b];
                              break;
                            }
                        } else if ((y && (b = f = (c = (u = (d = (p = t)[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && c[1]), !1 === b))
                          for (
                            ;
                            (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                            ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [S, b]), p !== t));

                          );
                        return (b -= o) === i || (b % i == 0 && b / i >= 0);
                      }
                    };
                },
                PSEUDO: function (e, t) {
                  var n,
                    o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                  return o[T]
                    ? o(t)
                    : o.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[(i = H(e, r[s]))] = !(n[i] = r[s]);
                          })
                          : function (e) {
                            return o(e, 0, n);
                          })
                      : o;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    i = a(e.replace(q, "$1"));
                  return i[T]
                    ? ce(function (e, t, n, o) {
                      for (var r, s = i(e, null, o, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r));
                    })
                    : function (e, o, r) {
                      return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                    };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || o(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    G.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !i.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return X.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function ye() { }
          function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function Te(e, t, n) {
            var i = t.dir,
              o = t.next,
              r = o || i,
              s = n && "parentNode" === r,
              a = _++;
            return t.first
              ? function (t, n, o) {
                for (; (t = t[i]);) if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
              }
              : function (t, n, l) {
                var c,
                  u,
                  d,
                  p = [S, a];
                if (l) {
                  for (; (t = t[i]);) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]);)
                    if (1 === t.nodeType || s)
                      if (((u = (d = t[T] || (t[T] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                      else {
                        if ((c = u[r]) && c[0] === S && c[1] === a) return (p[2] = c[2]);
                        if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0;
              }
              : e[0];
          }
          function Se(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
            return s;
          }
          function _e(e, t, n, i, o, r) {
            return (
              i && !i[T] && (i = _e(i)),
              o && !o[T] && (o = _e(o, r)),
              ce(function (r, s, a, l) {
                var c,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = s.length,
                  g =
                    r ||
                    (function (e, t, n) {
                      for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!r && t) ? g : Se(g, p, e, a, l),
                  v = n ? (o || (r ? e : h || i) ? [] : s) : m;
                if ((n && n(m, v, a, l), i)) for (c = Se(v, f), i(c, [], a, l), u = c.length; u--;) (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (r) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = v.length; u--;) (d = v[u]) && c.push((m[u] = d));
                      o(null, (v = []), c, l);
                    }
                    for (u = v.length; u--;) (d = v[u]) && (c = o ? H(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d));
                  }
                } else (v = Se(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : L.apply(s, v);
              })
            );
          }
          function Ee(e) {
            for (
              var t,
              n,
              o,
              r = e.length,
              s = i.relative[e[0].type],
              a = s || i.relative[" "],
              l = s ? 1 : 0,
              u = Te(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = Te(
                function (e) {
                  return H(t, e) > -1;
                },
                a,
                !0
              ),
              p = [
                function (e, n, i) {
                  var o = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                  return (t = null), o;
                },
              ];
              l < r;
              l++
            )
              if ((n = i.relative[e[l].type])) p = [Te(we(p), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[T]) {
                  for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                  return _e(
                    l > 1 && we(p),
                    l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(q, "$1"),
                    n,
                    l < o && Ee(e.slice(l, o)),
                    o < r && Ee((e = e.slice(o))),
                    o < r && be(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (s = ae.tokenize = function (e, t) {
              var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u = C[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, l = [], c = i.preFilter; a;) {
                for (s in ((n && !(o = B.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                  (n = !1),
                  (o = U.exec(a)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(q, " ") }), (a = a.slice(n.length))),
                  i.filter))
                  !(o = Y[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
            }),
            (a = ae.compile = function (e, t) {
              var n,
                o = [],
                r = [],
                a = k[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--;) (a = Ee(t[n]))[T] ? o.push(a) : r.push(a);
                (a = k(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      r = function (r, s, a, l, u) {
                        var d,
                          h,
                          m,
                          v = 0,
                          y = "0",
                          b = r && [],
                          T = [],
                          w = c,
                          _ = r || (o && i.find.TAG("*", u)),
                          E = (S += null == w ? 1 : Math.random() || 0.1),
                          C = _.length;
                        for (u && (c = s == f || s || u); y !== C && null != (d = _[y]); y++) {
                          if (o && d) {
                            for (h = 0, s || d.ownerDocument == f || (p(d), (a = !g)); (m = e[h++]);)
                              if (m(d, s || f, a)) {
                                l.push(d);
                                break;
                              }
                            u && (S = E);
                          }
                          n && ((d = !m && d) && v--, r && b.push(d));
                        }
                        if (((v += y), n && y !== v)) {
                          for (h = 0; (m = t[h++]);) m(b, T, s, a);
                          if (r) {
                            if (v > 0) for (; y--;) b[y] || T[y] || (T[y] = I.call(l));
                            T = Se(T);
                          }
                          L.apply(l, T), u && !r && T.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                        }
                        return u && ((S = E), (c = w)), b;
                      };
                    return n ? ce(r) : r;
                  })(r, o)
                )).selector = e;
              }
              return a;
            }),
            (l = ae.select = function (e, t, n, o) {
              var r,
                l,
                c,
                u,
                d,
                p = "function" == typeof e && e,
                f = !o && s((e = p.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                  if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                  p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                }
                for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !i.relative[(u = c.type)]);)
                  if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                    if ((l.splice(r, 1), !(e = o.length && be(l)))) return L.apply(n, o), n;
                    break;
                  }
              }
              return (p || a(e, f))(o, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (n.sortStable = T.split("").sort(O).join("") === T),
            (n.detectDuplicates = !!d),
            p(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ue(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
              ue(function (e) {
                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
            de($, function (e, t, n) {
              var i;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }),
            ae
          );
        })(n);
      (_.find = C), (_.expr = C.selectors), (_.expr[":"] = _.expr.pseudos), (_.uniqueSort = _.unique = C.uniqueSort), (_.text = C.getText), (_.isXMLDoc = C.isXML), (_.contains = C.contains), (_.escapeSelector = C.escape);
      var k = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && _(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
        x = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        O = _.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(e, t, n) {
        return v(t)
          ? _.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          })
          : t.nodeType
            ? _.grep(e, function (e) {
              return (e === t) !== n;
            })
            : "string" != typeof t
              ? _.grep(e, function (e) {
                return u.call(t, e) > -1 !== n;
              })
              : _.filter(t, e, n);
      }
      (_.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? _.find.matchesSelector(i, e)
              ? [i]
              : []
            : _.find.matches(
              e,
              _.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
        );
      }),
        _.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                _(e).filter(function () {
                  for (t = 0; t < i; t++) if (_.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, o[t], n);
            return i > 1 ? _.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(I(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(I(this, e || [], !0));
          },
          is: function (e) {
            return !!I(this, "string" == typeof e && O.test(e) ? _(e) : e || [], !1).length;
          },
        });
      var N,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((_.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || N), "string" == typeof e)) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
            if (((t = t instanceof _ ? t[0] : t), _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(i[1]) && _.isPlainObject(t)))
              for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (o = b.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(_)) : _.makeArray(e, this);
      }).prototype = _.fn),
        (N = _(b));
      var P = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function $(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e;
      }
      _.fn.extend({
        has: function (e) {
          var t = _(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof e && _(e);
          if (!O.test(e))
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r);
        },
        index: function (e) {
          return e ? ("string" == typeof e ? u.call(_(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
          return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
        _.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return k(e, "parentNode", n);
            },
            next: function (e) {
              return $(e, "nextSibling");
            },
            prev: function (e) {
              return $(e, "previousSibling");
            },
            nextAll: function (e) {
              return k(e, "nextSibling");
            },
            prevAll: function (e) {
              return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return k(e, "previousSibling", n);
            },
            siblings: function (e) {
              return x((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return x(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
            },
          },
          function (e, t) {
            _.fn[e] = function (n, i) {
              var o = _.map(this, t, n);
              return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), this.length > 1 && (H[e] || _.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o);
            };
          }
        );
      var j = /[^\x20\t\r\n\f]+/g;
      function R(e) {
        return e;
      }
      function W(e) {
        throw e;
      }
      function M(e, t, n, i) {
        var o;
        try {
          e && v((o = e.promise)) ? o.call(e).done(t).fail(n) : e && v((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (_.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
              var t = {};
              return (
                _.each(e.match(j) || [], function (e, n) {
                  t[n] = !0;
                }),
                t
              );
            })(e)
            : _.extend({}, e);
        var t,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                r &&
                (n && !t && ((a = r.length - 1), s.push(n)),
                  (function t(n) {
                    _.each(n, function (n, i) {
                      v(i) ? (e.unique && c.has(i)) || r.push(i) : i && i.length && "string" !== S(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                _.each(arguments, function (e, t) {
                  for (var n; (n = _.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? _.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function () {
              return r && (r = []), this;
            },
            disable: function () {
              return (o = s = []), (r = n = ""), this;
            },
            disabled: function () {
              return !r;
            },
            lock: function () {
              return (o = s = []), n || t || (r = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        _.extend({
          Deferred: function (e) {
            var t = [
              ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
              ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"],
            ],
              i = "pending",
              o = {
                state: function () {
                  return i;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return _.Deferred(function (n) {
                    _.each(t, function (t, i) {
                      var o = v(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, o) {
                  var r = 0;
                  function s(e, t, i, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                            (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                              v(c)
                                ? o
                                  ? c.call(n, s(r, t, R, o), s(r, t, W, o))
                                  : (r++, c.call(n, s(r, t, R, o), s(r, t, W, o), s(r, t, R, t.notifyWith)))
                                : (i !== R && ((a = void 0), (l = [n])), (o || t.resolveWith)(a, l));
                          }
                        },
                        u = o
                          ? c
                          : function () {
                            try {
                              c();
                            } catch (n) {
                              _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== W && ((a = void 0), (l = [n])), t.rejectWith(a, l));
                            }
                          };
                      e ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), n.setTimeout(u));
                    };
                  }
                  return _.Deferred(function (n) {
                    t[0][3].add(s(0, n, v(o) ? o : R, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : R)), t[2][3].add(s(0, n, v(i) ? i : W));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? _.extend(e, o) : o;
                },
              },
              r = {};
            return (
              _.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                  s.add(
                    function () {
                      i = a;
                    },
                    t[3 - e][2].disable,
                    t[3 - e][3].disable,
                    t[0][2].lock,
                    t[0][3].lock
                  ),
                  s.add(n[3].fire),
                  (r[n[0]] = function () {
                    return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
                  }),
                  (r[n[0] + "With"] = s.fireWith);
              }),
              o.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              o = a.call(arguments),
              r = _.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this), (o[e] = arguments.length > 1 ? a.call(arguments) : n), --t || r.resolveWith(i, o);
                };
              };
            if (t <= 1 && (M(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
            for (; n--;) M(o[n], s(n), r.reject);
            return r.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (_.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (_.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var q = _.Deferred();
      function B() {
        b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), _.ready();
      }
      (_.fn.ready = function (e) {
        return (
          q.then(e).catch(function (e) {
            _.readyException(e);
          }),
          this
        );
      }),
        _.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) || ((_.isReady = !0), (!0 !== e && --_.readyWait > 0) || q.resolveWith(b, [_]));
          },
        }),
        (_.ready.then = q.then),
        "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? n.setTimeout(_.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
      var U = function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === S(n)) for (a in ((o = !0), n)) U(e, t, a, n[a], !0, r, s);
        else if (
          void 0 !== i &&
          ((o = !0),
            v(i) || (s = !0),
            c &&
            (s
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(_(e), n);
                }))),
            t)
        )
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
        V = /^-ms-/,
        z = /-([a-z])/g;
      function G(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(V, "ms-").replace(z, G);
      }
      var K = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = _.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return t || ((t = Object.create(null)), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else for (i in t) o[Y(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(j) || []).length;
                for (; n--;) delete i[t[n]];
              }
              (void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t);
          },
        });
      var Q = new X(),
        J = new X(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (((i = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
            try {
              n = (function (e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
              })(n);
            } catch (e) { }
            J.set(e, t, n);
          } else n = void 0;
        return n;
      }
      _.extend({
        hasData: function (e) {
          return J.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function (e, t) {
          J.remove(e, t);
        },
        _data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
          Q.remove(e, t);
        },
      }),
        _.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              r = this[0],
              s = r && r.attributes;
            if (void 0 === e) {
              if (this.length && ((o = J.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = Y(i.slice(5))), te(r, i, o[i]));
                Q.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                J.set(this, e);
              })
              : U(
                this,
                function (t) {
                  var n;
                  if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) ? n : void 0 !== (n = te(r, e)) ? n : void 0;
                  this.each(function () {
                    J.set(this, e, t);
                  });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
          },
          removeData: function (e) {
            return this.each(function () {
              J.remove(this, e);
            });
          },
        }),
        _.extend({
          queue: function (e, t, n) {
            var i;
            if (e) return (t = (t || "fx") + "queue"), (i = Q.get(e, t)), n && (!i || Array.isArray(n) ? (i = Q.access(e, t, _.makeArray(n))) : i.push(n)), i || [];
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = _._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
              ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  e,
                  function () {
                    _.dequeue(e, t);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Q.get(e, n) ||
              Q.access(e, n, {
                empty: _.Callbacks("once memory").add(function () {
                  Q.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        _.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? _.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function () {
                    var n = _.queue(this, e, t);
                    _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              _.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = _.Deferred(),
              r = this,
              s = this.length,
              a = function () {
                --i || o.resolveWith(r, [r]);
              };
            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--;) (n = Q.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        re = b.documentElement,
        se = function (e) {
          return _.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      re.getRootNode &&
        (se = function (e) {
          return _.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
        });
      var le = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === _.css(e, "display"));
      };
      function ce(e, t, n, i) {
        var o,
          r,
          s = 20,
          a = i
            ? function () {
              return i.cur();
            }
            : function () {
              return _.css(e, t, "");
            },
          l = a(),
          c = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (_.cssNumber[t] || ("px" !== c && +l)) && ie.exec(_.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (u /= r);
          (u *= 2), _.style(e, t, u + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = o))), o;
      }
      var ue = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = ue[i];
        return o || ((t = n.body.appendChild(n.createElement(i))), (o = _.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (ue[i] = o), o);
      }
      function pe(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
          (i = e[r]).style &&
            ((n = i.style.display),
              t ? ("none" === n && ((o[r] = Q.get(i, "display") || null), o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = de(i))) : "none" !== n && ((o[r] = "none"), Q.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
      }
      _.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
              le(this) ? _(this).show() : _(this).hide();
            });
        },
      });
      var fe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
      (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
        (fe.innerHTML = "<option></option>"),
        (m.option = !!fe.lastChild);
      var ye = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
      function be(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? _.merge([e], n) : n;
      }
      function Te(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead), (ye.th = ye.td), m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Se(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
          if ((r = e[f]) || 0 === r)
            if ("object" === S(r)) _.merge(p, r.nodeType ? [r] : r);
            else if (we.test(r)) {
              for (s = s || d.appendChild(t.createElement("div")), a = (me.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
              _.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
            } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; (r = p[f++]);)
          if (i && _.inArray(r, i) > -1) o && o.push(r);
          else if (((c = se(r)), (s = be(d.appendChild(r), "script")), c && Te(s), n)) for (u = 0; (r = s[u++]);) ve.test(r.type || "") && n.push(r);
        return d;
      }
      var _e = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
      function ke() {
        return !0;
      }
      function xe() {
        return !1;
      }
      function Oe(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) { }
            })()) ==
          ("focus" === t)
        );
      }
      function Ae(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], r);
          return e;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = xe;
        else if (!o) return e;
        return (
          1 === r &&
          ((s = o),
            ((o = function (e) {
              return _().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = _.guid++))),
          e.each(function () {
            _.event.add(this, t, o, i, n);
          })
        );
      }
      function De(e, t, n) {
        n
          ? (Q.set(e, t, !1),
            _.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  o,
                  r = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (r.length) (_.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (((r = a.call(arguments)), Q.set(this, t, r), (i = n(this, t)), this[t](), r !== (o = Q.get(this, t)) || i ? Q.set(this, t, !1) : (o = {}), r !== o))
                    return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                } else r.length && (Q.set(this, t, { value: _.event.trigger(_.extend(r[0], _.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
              },
            }))
          : void 0 === Q.get(e, t) && _.event.add(e, t, ke);
      }
      (_.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            m = Q.get(e);
          if (K(e))
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
              o && _.find.matchesSelector(re, o),
              n.guid || (n.guid = _.guid++),
              (l = m.events) || (l = m.events = Object.create(null)),
              (s = m.handle) ||
              (s = m.handle = function (t) {
                return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
              }),
              c = (t = (t || "").match(j) || [""]).length;
              c--;

            )
              (f = g = (a = Ce.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                ((d = _.event.special[f] || {}),
                  (f = (o ? d.delegateType : d.bindType) || f),
                  (d = _.event.special[f] || {}),
                  (u = _.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && _.expr.match.needsContext.test(o), namespace: h.join(".") }, r)),
                  (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
                  d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                  o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  (_.event.global[f] = !0));
        },
        remove: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            m = Q.hasData(e) && Q.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(j) || [""]).length; c--;)
              if (((f = g = (a = Ce.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
                for (d = _.event.special[f] || {}, p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;)
                  (u = p[r]),
                    (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                s && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || _.removeEvent(e, f, m.handle), delete l[f]);
              } else for (f in l) _.event.remove(e, f + t[c], n, i, !0);
            _.isEmptyObject(l) && Q.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a = new Array(arguments.length),
            l = _.event.fix(e),
            c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
            u = _.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
            for (s = _.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped();)
              for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();)
                (l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace)) ||
                  ((l.handleObj = r), (l.data = r.data), void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            r,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = t[n]).selector + " ")] && (s[o] = i.needsContext ? _(o, this).index(c) > -1 : _.find(o, this, null, [c]).length), s[o] && r.push(i);
                r.length && a.push({ elem: c, handlers: r });
              }
          return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
        },
        addProp: function (e, t) {
          Object.defineProperty(_.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
              : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
            set: function (t) {
              Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            },
          });
        },
        fix: function (e) {
          return e[_.expando] ? e : new _.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (ge.test(t.type) && t.click && A(t, "input") && Q.get(t, "click")) || A(t, "a");
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (_.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (_.Event = function (e, t) {
          if (!(this instanceof _.Event)) return new _.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ke : xe),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && _.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[_.expando] = !0);
        }),
        (_.Event.prototype = {
          constructor: _.Event,
          isDefaultPrevented: xe,
          isPropagationStopped: xe,
          isImmediatePropagationStopped: xe,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = ke), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          },
        }),
        _.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && _e.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ee.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
            },
          },
          _.event.addProp
        ),
        _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          _.event.special[e] = {
            setup: function () {
              return De(this, e, Oe), !1;
            },
            trigger: function () {
              return De(this, e), !0;
            },
            delegateType: t,
          };
        }),
        _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
          _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = e.relatedTarget,
                o = e.handleObj;
              return (i && (i === this || _.contains(this, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
            },
          };
        }),
        _.fn.extend({
          on: function (e, t, n, i) {
            return Ae(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return Ae(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = xe),
              this.each(function () {
                _.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ie = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Pe(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0]) || e;
      }
      function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
      }
      function je(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
          if (Q.hasData(e) && (a = Q.get(e).events)) for (o in (Q.remove(t, "handle events"), a)) for (n = 0, i = a[o].length; n < i; n++) _.event.add(t, o, a[o][n]);
          J.hasData(e) && ((r = J.access(e)), (s = _.extend({}, r)), J.set(t, s));
        }
      }
      function Re(e, t, n, i) {
        t = l(t);
        var o,
          r,
          s,
          a,
          c,
          u,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = v(h);
        if (g || (p > 1 && "string" == typeof h && !m.checkClone && Ne.test(h)))
          return e.each(function (o) {
            var r = e.eq(o);
            g && (t[0] = h.call(this, o, r.html())), Re(r, t, n, i);
          });
        if (p && ((r = (o = Se(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
          for (a = (s = _.map(be(o, "script"), He)).length; d < p; d++) (c = o), d !== f && ((c = _.clone(c, !0, !0)), a && _.merge(s, be(c, "script"))), n.call(e[d], c, d);
          if (a)
            for (u = s[s.length - 1].ownerDocument, _.map(s, $e), d = 0; d < a; d++)
              (c = s[d]),
                ve.test(c.type || "") &&
                !Q.access(c, "globalEval") &&
                _.contains(u, c) &&
                (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(Le, ""), c, u));
        }
        return e;
      }
      function We(e, t, n) {
        for (var i, o = t ? _.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || _.cleanData(be(i)), i.parentNode && (n && se(i) && Te(be(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      _.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u = e.cloneNode(!0),
            d = se(e);
          if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || _.isXMLDoc(e)))
            for (s = be(u), i = 0, o = (r = be(e)).length; i < o; i++)
              (a = r[i]), (l = s[i]), (c = void 0), "input" === (c = l.nodeName.toLowerCase()) && ge.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
          if (t)
            if (n) for (r = r || be(e), s = s || be(u), i = 0, o = r.length; i < o; i++) je(r[i], s[i]);
            else je(e, u);
          return (s = be(u, "script")).length > 0 && Te(s, !d && be(e, "script")), u;
        },
        cleanData: function (e) {
          for (var t, n, i, o = _.event.special, r = 0; void 0 !== (n = e[r]); r++)
            if (K(n)) {
              if ((t = n[Q.expando])) {
                if (t.events) for (i in t.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                n[Q.expando] = void 0;
              }
              n[J.expando] && (n[J.expando] = void 0);
            }
        },
      }),
        _.fn.extend({
          detach: function (e) {
            return We(this, e, !0);
          },
          remove: function (e) {
            return We(this, e);
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? _.text(this)
                  : this.empty().each(function () {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                  });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Re(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Pe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Re(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Pe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return _.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = _.htmlPrefilter(e);
                  try {
                    for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) { }
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Re(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
          _.fn[e] = function (e) {
            for (var n, i = [], o = _(e), r = o.length - 1, s = 0; s <= r; s++) (n = s === r ? this : this.clone(!0)), _(o[s])[t](n), c.apply(i, n.get());
            return this.pushStack(i);
          };
        });
      var Me = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Fe = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        qe = function (e, t, n) {
          var i,
            o,
            r = {};
          for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
          return i;
        },
        Be = new RegExp(oe.join("|"), "i");
      function Ue(e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.style;
        return (
          (n = n || Fe(e)) &&
          ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = _.style(e, t)),
            !m.pixelBoxStyles() && Me.test(s) && Be.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ve(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              re.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (r = 12 === t(u.offsetWidth / 3)),
              re.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          r,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
            _.extend(m, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), i;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), r;
              },
              reliableTrDimensions: function () {
                var e, t, i, o;
                return (
                  null == a &&
                  ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (i = b.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (i.style.height = "9px"),
                    re.appendChild(e).appendChild(t).appendChild(i),
                    (o = n.getComputedStyle(t)),
                    (a = parseInt(o.height) > 3),
                    re.removeChild(e)),
                  a
                );
              },
            }));
      })();
      var ze = ["Webkit", "Moz", "ms"],
        Ge = b.createElement("div").style,
        Ye = {};
      function Ke(e) {
        var t = _.cssProps[e] || Ye[e];
        return (
          t ||
          (e in Ge
            ? e
            : (Ye[e] =
              (function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;) if ((e = ze[n] + t) in Ge) return e;
              })(e) || e))
        );
      }
      var Xe = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ze = { letterSpacing: "0", fontWeight: "400" };
      function et(e, t, n) {
        var i = ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function tt(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += _.css(e, n + oe[s], !0, o)),
            i
              ? ("content" === n && (l -= _.css(e, "padding" + oe[s], !0, o)), "margin" !== n && (l -= _.css(e, "border" + oe[s] + "Width", !0, o)))
              : ((l += _.css(e, "padding" + oe[s], !0, o)), "padding" !== n ? (l += _.css(e, "border" + oe[s] + "Width", !0, o)) : (a += _.css(e, "border" + oe[s] + "Width", !0, o)));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0), l;
      }
      function nt(e, t, n) {
        var i = Fe(e),
          o = (!m.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
          r = o,
          s = Ue(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!m.boxSizingReliable() && o) || (!m.reliableTrDimensions() && A(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === _.css(e, "display", !1, i))) &&
          e.getClientRects().length &&
          ((o = "border-box" === _.css(e, "boxSizing", !1, i)), (r = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) + tt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        );
      }
      function it(e, t, n, i, o) {
        return new it.prototype.init(e, t, n, i, o);
      }
      _.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              r,
              s,
              a = Y(t),
              l = Qe.test(t),
              c = e.style;
            if ((l || (t = Ke(a)), (s = _.cssHooks[t] || _.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
            "string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && ((n = ce(e, t, o)), (r = "number")),
              null != n &&
              n == n &&
              ("number" !== r || l || (n += (o && o[3]) || (_.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var o,
            r,
            s,
            a = Y(t);
          return (
            Qe.test(t) || (t = Ke(a)),
            (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = Ue(e, t, i)),
            "normal" === o && t in Ze && (o = Ze[t]),
            "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
          );
        },
      }),
        _.each(["height", "width"], function (e, t) {
          _.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Xe.test(_.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? nt(e, t, i)
                  : qe(e, Je, function () {
                    return nt(e, t, i);
                  });
            },
            set: function (e, n, i) {
              var o,
                r = Fe(e),
                s = !m.scrollboxSize() && "absolute" === r.position,
                a = (s || i) && "border-box" === _.css(e, "boxSizing", !1, r),
                l = i ? tt(e, t, i, a, r) : 0;
              return (
                a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - tt(e, t, "border", !1, r) - 0.5)),
                l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = _.css(e, t))),
                et(0, n, l)
              );
            },
          };
        }),
        (_.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                qe(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
            );
        })),
        _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (_.cssHooks[e + t] = {
            expand: function (n) {
              for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            },
          }),
            "margin" !== e && (_.cssHooks[e + t].set = et);
        }),
        _.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var i,
                  o,
                  r = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Fe(e), o = t.length; s < o; s++) r[t[s]] = _.css(e, t[s], !1, i);
                  return r;
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (_.Tween = it),
        (it.prototype = {
          constructor: it,
          init: function (e, t, n, i, o, r) {
            (this.elem = e), (this.prop = n), (this.easing = o || _.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (_.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = it.propHooks[this.prop];
            return (
              this.options.duration ? (this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : it.propHooks._default.set(this),
              this
            );
          },
        }),
        (it.prototype.init.prototype = it.prototype),
        (it.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function (e) {
              _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!_.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)]) ? (e.elem[e.prop] = e.now) : _.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (_.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (_.fx = it.prototype.init),
        (_.fx.step = {});
      var ot,
        rt,
        st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
      function lt() {
        rt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, _.fx.interval), _.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function ut(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = oe[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function dt(e, t, n) {
        for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((i = o[r].call(n, t, e))) return i;
      }
      function pt(e, t, n) {
        var i,
          o,
          r = 0,
          s = pt.prefilters.length,
          a = _.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (var t = ot || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
          },
          c = a.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, o, r, s;
            for (n in e)
              if (((o = t[(i = Y(n))]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = _.cssHooks[i]) && ("expand" in s)))
                for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
              else t[i] = o;
          })(u, c.opts.specialEasing);
          r < s;
          r++
        )
          if ((i = pt.prefilters[r].call(c, e, u, c.opts))) return v(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return (
          _.map(u, dt, c),
          v(c.opts.start) && c.opts.start.call(e, c),
          c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
          _.fx.timer(_.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (_.Animation = _.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
          for (var n, i = 0, o = e.length; i < o; i++) (n = e[i]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && le(e),
              m = Q.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = _._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                p.always(function () {
                  p.always(function () {
                    s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
              if (((o = t[i]), st.test(o))) {
                if ((delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                  if ("show" !== o || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                f[i] = (m && m[i]) || _.style(e, i);
              }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
              for (i in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (c = m && m.display) && (c = Q.get(e, "display")),
                  "none" === (u = _.css(e, "display")) && (c ? (u = c) : (pe([e], !0), (c = e.style.display || c), (u = _.css(e, "display")), pe([e]))),
                  ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === _.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                      null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                    (h.display = "inline-block"))),
                n.overflow &&
                ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                f))
                l ||
                  (m ? "hidden" in m && (g = m.hidden) : (m = Q.access(e, "fxshow", { display: c })),
                    r && (m.hidden = !g),
                    g && pe([e], !0),
                    p.done(function () {
                      for (i in (g || pe([e]), Q.remove(e, "fxshow"), f)) _.style(e, i, f[i]);
                    })),
                  (l = dt(g ? m[i] : 0, i, p)),
                  i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (_.speed = function (e, t, n) {
          var i = e && "object" == typeof e ? _.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
          return (
            _.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in _.fx.speeds ? (i.duration = _.fx.speeds[i.duration]) : (i.duration = _.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
            }),
            i
          );
        }),
        _.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var o = _.isEmptyObject(e),
              r = _.speed(t, n, i),
              s = function () {
                var t = pt(this, _.extend({}, e), r);
                (o || Q.get(this, "finish")) && t.stop(!0);
              };
            return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = _.timers,
                  s = Q.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && at.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || _.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Q.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = _.timers,
                  s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        _.each(["toggle", "show", "hide"], function (e, t) {
          var n = _.fn[t];
          _.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o);
          };
        }),
        _.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
          _.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }),
        (_.timers = []),
        (_.fx.tick = function () {
          var e,
            t = 0,
            n = _.timers;
          for (ot = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || _.fx.stop(), (ot = void 0);
        }),
        (_.fx.timer = function (e) {
          _.timers.push(e), _.fx.start();
        }),
        (_.fx.interval = 13),
        (_.fx.start = function () {
          rt || ((rt = !0), lt());
        }),
        (_.fx.stop = function () {
          rt = null;
        }),
        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (_.fn.delay = function (e, t) {
          return (
            (e = (_.fx && _.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var o = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b.createElement("select").appendChild(b.createElement("option"));
          (e.type = "checkbox"), (m.checkOn = "" !== e.value), (m.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (m.radioValue = "t" === e.value);
        })();
      var ft,
        ht = _.expr.attrHandle;
      _.fn.extend({
        attr: function (e, t) {
          return U(this, _.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            _.removeAttr(this, e);
          });
        },
      }),
        _.extend({
          attr: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? _.prop(e, t, n)
                : ((1 === r && _.isXMLDoc(e)) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void _.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                      ? i
                      : null == (i = _.find.attr(e, t))
                        ? void 0
                        : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(j);
            if (o && 1 === e.nodeType) for (; (n = o[i++]);) e.removeAttribute(n);
          },
        }),
        (ft = {
          set: function (e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ht[t] || _.find.attr;
          ht[t] = function (e, t, i) {
            var o,
              r,
              s = t.toLowerCase();
            return i || ((r = ht[s]), (ht[s] = o), (o = null != n(e, t, i) ? s : null), (ht[s] = r)), o;
          };
        });
      var gt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
      function vt(e) {
        return (e.match(j) || []).join(" ");
      }
      function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function bt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
      }
      _.fn.extend({
        prop: function (e, t) {
          return U(this, _.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[_.propFix[e] || e];
          });
        },
      }),
        _.extend({
          prop: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && _.isXMLDoc(e)) || ((t = _.propFix[t] || t), (o = _.propHooks[t])),
                void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = _.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
        (_.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
        _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          _.propFix[this.toLowerCase()] = this;
        }),
        _.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (v(e))
              return this.each(function (t) {
                _(this).addClass(e.call(this, t, yt(this)));
              });
            if ((t = bt(e)).length)
              for (; (n = this[l++]);)
                if (((o = yt(n)), (i = 1 === n.nodeType && " " + vt(o) + " "))) {
                  for (s = 0; (r = t[s++]);) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (a = vt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (v(e))
              return this.each(function (t) {
                _(this).removeClass(e.call(this, t, yt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = bt(e)).length)
              for (; (n = this[l++]);)
                if (((o = yt(n)), (i = 1 === n.nodeType && " " + vt(o) + " "))) {
                  for (s = 0; (r = t[s++]);) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                  o !== (a = vt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
                ? this.each(function (n) {
                  _(this).toggleClass(e.call(this, n, yt(this), t), t);
                })
                : this.each(function () {
                  var t, o, r, s;
                  if (i) for (o = 0, r = _(this), s = bt(e); (t = s[o++]);) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else (void 0 !== e && "boolean" !== n) || ((t = yt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]);) if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
          },
        });
      var Tt = /\r/g;
      _.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = v(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? e.call(this, n, _(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                      ? (o += "")
                      : Array.isArray(o) &&
                      (o = _.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                    ((t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
              }))
            : o
              ? (t = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                ? n
                : "string" == typeof (n = o.value)
                  ? n.replace(Tt, "")
                  : null == n
                    ? ""
                    : n
              : void 0;
        },
      }),
        _.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = _.find.attr(e, "value");
                return null != t ? t : vt(_.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  r = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? r + 1 : o.length;
                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                  if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                    if (((t = _(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (var n, i, o = e.options, r = _.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        _.each(["radio", "checkbox"], function () {
          (_.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = _.inArray(_(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
            (_.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
        }),
        (m.focusin = "onfocusin" in n);
      var wt = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
          e.stopPropagation();
        };
      _.extend(_.event, {
        trigger: function (e, t, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = [i || b],
            g = f.call(e, "type") ? e.type : e,
            m = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = a = i = i || b),
              3 !== i.nodeType &&
              8 !== i.nodeType &&
              !wt.test(g + _.event.triggered) &&
              (g.indexOf(".") > -1 && ((m = g.split(".")), (g = m.shift()), m.sort()),
                (c = g.indexOf(":") < 0 && "on" + g),
                ((e = e[_.expando] ? e : new _.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                (e.namespace = m.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = i),
                (t = null == t ? [e] : _.makeArray(t, [e])),
                (d = _.event.special[g] || {}),
                o || !d.trigger || !1 !== d.trigger.apply(i, t)))
          ) {
            if (!o && !d.noBubble && !y(i)) {
              for (l = d.delegateType || g, wt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
              a === (i.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n);
            }
            for (r = 0; (s = h[r++]) && !e.isPropagationStopped();)
              (p = s),
                (e.type = r > 1 ? l : d.bindType || g),
                (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) && u.apply && K(s) && ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
              e.isDefaultPrevented() ||
              (d._default && !1 !== d._default.apply(h.pop(), t)) ||
              !K(i) ||
              (c &&
                v(i[g]) &&
                !y(i) &&
                ((a = i[c]) && (i[c] = null),
                  (_.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, St),
                  i[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, St),
                  (_.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
          _.event.trigger(i, null, t);
        },
      }),
        _.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              _.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
        _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            _.event.simulate(t, e.target, _.event.fix(e));
          };
          _.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this.document || this,
                o = Q.access(i, t);
              o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this.document || this,
                o = Q.access(i, t) - 1;
              o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
            },
          };
        });
      var _t = n.location,
        Et = { guid: Date.now() },
        Ct = /\?/;
      _.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || _.error("Invalid XML: " + e), t;
      };
      var kt = /\[\]$/,
        xt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          _.each(t, function (t, o) {
            n || kt.test(e) ? i(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
          });
        else if (n || "object" !== S(t)) i(e, t);
        else for (o in t) Dt(e + "[" + o + "]", t[o], n, i);
      }
      (_.param = function (e, t) {
        var n,
          i = [],
          o = function (e, t) {
            var n = v(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
          _.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, o);
        return i.join("&");
      }),
        _.fn.extend({
          serialize: function () {
            return _.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = _.prop(this, "elements");
              return e ? _.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && At.test(this.nodeName) && !Ot.test(e) && (this.checked || !ge.test(e));
              })
              .map(function (e, t) {
                var n = _(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                    ? _.map(n, function (e) {
                      return { name: t.name, value: e.replace(xt, "\r\n") };
                    })
                    : { name: t.name, value: n.replace(xt, "\r\n") };
              })
              .get();
          },
        });
      var It = /%20/g,
        Nt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        jt = {},
        Rt = {},
        Wt = "*/".concat("*"),
        Mt = b.createElement("a");
      function Ft(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            o = 0,
            r = t.toLowerCase().match(j) || [];
          if (v(n)) for (; (i = r[o++]);) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
      }
      function qt(e, t, n, i) {
        var o = {},
          r = e === Rt;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            _.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function Bt(e, t) {
        var n,
          i,
          o = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e;
      }
      (Mt.href = _t.href),
        _.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, _.ajaxSettings), t) : Bt(_.ajaxSettings, e);
          },
          ajaxPrefilter: Ft(jt),
          ajaxTransport: Ft(Rt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f = _.ajaxSetup({}, t),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? _(h) : _.event,
              m = _.Deferred(),
              v = _.Callbacks("once memory"),
              y = f.statusCode || {},
              T = {},
              w = {},
              S = "canceled",
              E = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s) for (s = {}; (t = Pt.exec(r));) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? r : null;
                },
                setRequestHeader: function (e, t) {
                  return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (T[e] = t)), this;
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) E.always(e[E.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || S;
                  return i && i.abort(t), C(0, t), this;
                },
              };
            if (
              (m.promise(E),
                (f.url = ((e || f.url || _t.href) + "").replace($t, _t.protocol + "//")),
                (f.type = t.method || t.type || f.method || f.type),
                (f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""]),
                null == f.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = f.url), (l.href = l.href), (f.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if ((f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), qt(jt, f, t, E), c)) return E;
            for (d in ((u = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !Ht.test(f.type)),
              (o = f.url.replace(Nt, "")),
              f.hasContent
                ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(It, "+"))
                : ((p = f.url.slice(o.length)),
                  f.data && (f.processData || "string" == typeof f.data) && ((o += (Ct.test(o) ? "&" : "?") + f.data), delete f.data),
                  !1 === f.cache && ((o = o.replace(Lt, "$1")), (p = (Ct.test(o) ? "&" : "?") + "_=" + Et.guid++ + p)),
                  (f.url = o + p)),
              f.ifModified && (_.lastModified[o] && E.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && E.setRequestHeader("If-None-Match", _.etag[o])),
              ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && E.setRequestHeader("Content-Type", f.contentType),
              E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]),
              f.headers))
              E.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, E, f) || c)) return E.abort();
            if (((S = "abort"), v.add(f.complete), E.done(f.success), E.fail(f.error), (i = qt(Rt, f, t, E)))) {
              if (((E.readyState = 1), u && g.trigger("ajaxSend", [E, f]), c)) return E;
              f.async &&
                f.timeout > 0 &&
                (a = n.setTimeout(function () {
                  E.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), i.send(T, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, s, l) {
              var d,
                p,
                b,
                T,
                w,
                S = t;
              c ||
                ((c = !0),
                  a && n.clearTimeout(a),
                  (i = void 0),
                  (r = l || ""),
                  (E.readyState = e > 0 ? 4 : 0),
                  (d = (e >= 200 && e < 300) || 304 === e),
                  s &&
                  (T = (function (e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in a)
                        if (a[o] && a[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        s || (s = o);
                      }
                      r = r || s;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(f, E, s)),
                  !d && _.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () { }),
                  (T = (function (e, t, n, i) {
                    var o,
                      r,
                      s,
                      a,
                      l,
                      c = {},
                      u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                      if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = u.shift())))
                        if ("*" === r) r = l;
                        else if ("*" !== l && l !== r) {
                          if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                              if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (e) {
                                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                              }
                        }
                    return { state: "success", data: t };
                  })(f, T, E, d)),
                  d
                    ? (f.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (_.lastModified[o] = w), (w = E.getResponseHeader("etag")) && (_.etag[o] = w)),
                      204 === e || "HEAD" === f.type ? (S = "nocontent") : 304 === e ? (S = "notmodified") : ((S = T.state), (p = T.data), (d = !(b = T.error))))
                    : ((b = S), (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                  (E.status = e),
                  (E.statusText = (t || S) + ""),
                  d ? m.resolveWith(h, [p, S, E]) : m.rejectWith(h, [E, S, b]),
                  E.statusCode(y),
                  (y = void 0),
                  u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [E, f, d ? p : b]),
                  v.fireWith(h, [E, S]),
                  u && (g.trigger("ajaxComplete", [E, f]), --_.active || _.event.trigger("ajaxStop")));
            }
            return E;
          },
          getJSON: function (e, t, n) {
            return _.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return _.get(e, void 0, t, "script");
          },
        }),
        _.each(["get", "post"], function (e, t) {
          _[t] = function (e, n, i, o) {
            return v(n) && ((o = o || i), (i = n), (n = void 0)), _.ajax(_.extend({ url: e, type: t, dataType: o, data: n, success: i }, _.isPlainObject(e) && e));
          };
        }),
        _.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (_._evalUrl = function (e, t, n) {
          return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () { } },
            dataFilter: function (e) {
              _.globalEval(e, t, n);
            },
          });
        }),
        _.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
              (v(e) && (e = e.call(this[0])),
                (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                _(this).wrapInner(e.call(this, t));
              })
              : this.each(function () {
                var t = _(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              _(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  _(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (_.expr.pseudos.hidden = function (e) {
          return !_.expr.pseudos.visible(e);
        }),
        (_.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (_.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) { }
        });
      var Ut = { 0: 200, 1223: 204 },
        Vt = _.ajaxSettings.xhr();
      (m.cors = !!Vt && "withCredentials" in Vt),
        (m.ajax = Vt = !!Vt),
        _.ajaxTransport(function (e) {
          var t, i;
          if (m.cors || (Vt && !e.crossDomain))
            return {
              send: function (o, r) {
                var s,
                  a = e.xhr();
                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(s, o[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                            ? "number" != typeof a.status
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                              Ut[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        n.setTimeout(function () {
                          t && i();
                        });
                    }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        _.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        _.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return _.globalEval(e), e;
            },
          },
        }),
        _.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        _.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, o) {
                (t = _("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var zt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || _.expando + "_" + Et.guid++;
          return (this[e] = !0), e;
        },
      }),
        _.ajaxPrefilter("json jsonp", function (e, t, i) {
          var o,
            r,
            s,
            a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a ? (e[a] = e[a].replace(Yt, "$1" + o)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return s || _.error(o + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === r ? _(n).removeProp(o) : (n[o] = r), e[o] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(o)), s && v(r) && r(s[0]), (s = r = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument = (((zt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === zt.childNodes.length)),
        (_.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t || (m.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
              (r = !n && []),
              (o = D.exec(e)) ? [t.createElement(o[1])] : ((o = Se([e], t, r)), r && r.length && _(r).remove(), _.merge([], o.childNodes)));
          var i, o, r;
        }),
        (_.fn.load = function (e, t, n) {
          var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
            v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
            s.length > 0 &&
            _.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (e) {
                (r = arguments), s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
              ),
            this
          );
        }),
        (_.expr.pseudos.animated = function (e) {
          return _.grep(_.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (_.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c = _.css(e, "position"),
              u = _(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (r = _.css(e, "top")),
              (l = _.css(e, "left")),
              ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              v(t) && (t = t.call(e, n, _.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + o),
              "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
          },
        }),
        _.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                  _.offset.setOffset(this, e, t);
                });
            var t,
              n,
              i = this[0];
            return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
              else {
                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                e && e !== i && 1 === e.nodeType && (((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0)), (o.left += _.css(e, "borderLeftWidth", !0)));
              }
              return { top: t.top - o.top - _.css(i, "marginTop", !0), left: t.left - o.left - _.css(i, "marginLeft", !0) };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
              return e || re;
            });
          },
        }),
        _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
          var n = "pageYOffset" === t;
          _.fn[e] = function (i) {
            return U(
              this,
              function (e, i, o) {
                var r;
                if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
              },
              e,
              i,
              arguments.length
            );
          };
        }),
        _.each(["top", "left"], function (e, t) {
          _.cssHooks[t] = Ve(m.pixelPosition, function (e, n) {
            if (n) return (n = Ue(e, t)), Me.test(n) ? _(e).position()[t] + "px" : n;
          });
        }),
        _.each({ Height: "height", Width: "width" }, function (e, t) {
          _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
            _.fn[i] = function (o, r) {
              var s = arguments.length && (n || "boolean" != typeof o),
                a = n || (!0 === o || !0 === r ? "margin" : "border");
              return U(
                this,
                function (t, n, o) {
                  var r;
                  return y(t)
                    ? 0 === i.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                      ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                      : void 0 === o
                        ? _.css(t, n, a)
                        : _.style(t, n, o, a);
                },
                t,
                s ? o : void 0,
                s
              );
            };
          });
        }),
        _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          _.fn[t] = function (e) {
            return this.on(t, e);
          };
        }),
        _.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
          _.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
          };
        });
      var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (_.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (i = a.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }).guid = e.guid = e.guid || _.guid++),
            o
          );
      }),
        (_.holdReady = function (e) {
          e ? _.readyWait++ : _.ready(!0);
        }),
        (_.isArray = Array.isArray),
        (_.parseJSON = JSON.parse),
        (_.nodeName = A),
        (_.isFunction = v),
        (_.isWindow = y),
        (_.camelCase = Y),
        (_.type = S),
        (_.now = Date.now),
        (_.isNumeric = function (e) {
          var t = _.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (_.trim = function (e) {
          return null == e ? "" : (e + "").replace(Kt, "");
        }),
        void 0 ===
        (i = function () {
          return _;
        }.apply(t, [])) || (e.exports = i);
      var Xt = n.jQuery,
        Qt = n.$;
      return (
        (_.noConflict = function (e) {
          return n.$ === _ && (n.$ = Qt), e && n.jQuery === _ && (n.jQuery = Xt), _;
        }),
        void 0 === o && (n.jQuery = n.$ = _),
        _
      );
    });
  },
  function (e, t, n) {
    /*!
     * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e) {
      "use strict";
      e = e && e.hasOwnProperty("default") ? e.default : e;
      var t = "transitionend";
      function n(t) {
        var n = this,
          o = !1;
        return (
          e(this).one(i.TRANSITION_END, function () {
            o = !0;
          }),
          setTimeout(function () {
            o || i.triggerTransitionEnd(n);
          }, t),
          this
        );
      }
      var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          do {
            e += ~~(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : "";
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var n = e(t).css("transition-duration"),
            i = e(t).css("transition-delay"),
            o = parseFloat(n),
            r = parseFloat(i);
          return o || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (n) {
          e(n).trigger(t);
        },
        supportsTransitionEnd: function () {
          return Boolean(t);
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              var r = n[o],
                s = t[o],
                a =
                  s && i.isElement(s)
                    ? "element"
                    : ((l = s),
                      {}.toString
                        .call(l)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".');
            }
          var l;
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? i.findShadowRoot(e.parentNode) : null;
        },
      };
      return (
        (e.fn.emulateTransitionEnd = n),
        (e.event.special[i.TRANSITION_END] = {
          bindType: t,
          delegateType: t,
          handle: function (t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
          },
        }),
        i
      );
    })(n(0));
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        for (
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.15.0
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], o = 0, r = 0;
          r < i.length;
          r += 1
        )
          if (n && navigator.userAgent.indexOf(i[r]) >= 0) {
            o = 1;
            break;
          }
        var s =
          n && window.Promise
            ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                    window.Promise.resolve().then(function () {
                      (t = !1), e();
                    }));
              };
            }
            : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                    setTimeout(function () {
                      (t = !1), e();
                    }, o));
              };
            };
        function a(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function l(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function c(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function u(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = l(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + o + i) ? e : u(c(e));
        }
        var d = n && !(!window.MSInputMethodContext || !document.documentMode),
          p = n && /MSIE 10/.test(navigator.userAgent);
        function f(e) {
          return 11 === e ? d : 10 === e ? p : d || p;
        }
        function h(e) {
          if (!e) return document.documentElement;
          for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function g(e) {
          return null !== e.parentNode ? g(e.parentNode) : e;
        }
        function m(e, t) {
          if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
          var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
          r.setStart(i, 0), r.setEnd(o, 0);
          var s,
            a,
            l = r.commonAncestorContainer;
          if ((e !== l && t !== l) || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || ("HTML" !== a && h(s.firstElementChild) !== s) ? h(l) : l;
          var c = g(e);
          return c.host ? m(c.host, t) : m(e, g(t).host);
        }
        function v(e) {
          var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
          if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t];
          }
          return e[t];
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
        }
        function b(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
          );
        }
        function T(e) {
          var t = e.body,
            n = e.documentElement,
            i = f(10) && getComputedStyle(n);
          return { height: b("Height", t, n, i), width: b("Width", t, n, i) };
        }
        var w = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
          S = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          _ = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
          },
          E =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        function C(e) {
          return E({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function k(e) {
          var t = {};
          try {
            if (f(10)) {
              t = e.getBoundingClientRect();
              var n = v(e, "top"),
                i = v(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) { }
          var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            r = "HTML" === e.nodeName ? T(e.ownerDocument) : {},
            s = r.width || e.clientWidth || o.right - o.left,
            a = r.height || e.clientHeight || o.bottom - o.top,
            c = e.offsetWidth - s,
            u = e.offsetHeight - a;
          if (c || u) {
            var d = l(e);
            (c -= y(d, "x")), (u -= y(d, "y")), (o.width -= c), (o.height -= u);
          }
          return C(o);
        }
        function x(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = f(10),
            o = "HTML" === t.nodeName,
            r = k(e),
            s = k(t),
            a = u(e),
            c = l(t),
            d = parseFloat(c.borderTopWidth, 10),
            p = parseFloat(c.borderLeftWidth, 10);
          n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var h = C({ top: r.top - s.top - d, left: r.left - s.left - p, width: r.width, height: r.height });
          if (((h.marginTop = 0), (h.marginLeft = 0), !i && o)) {
            var g = parseFloat(c.marginTop, 10),
              m = parseFloat(c.marginLeft, 10);
            (h.top -= d - g), (h.bottom -= d - g), (h.left -= p - m), (h.right -= p - m), (h.marginTop = g), (h.marginLeft = m);
          }
          return (
            (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
            (h = (function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = v(t, "top"),
                o = v(t, "left"),
                r = n ? -1 : 1;
              return (e.top += i * r), (e.bottom += i * r), (e.left += o * r), (e.right += o * r), e;
            })(h, t)),
            h
          );
        }
        function O(e) {
          if (!e || !e.parentElement || f()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
          return t || document.documentElement;
        }
        function A(e, t, n, i) {
          var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? O(e) : m(e, t);
          if ("viewport" === i)
            r = (function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = x(e, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : v(n),
                a = t ? 0 : v(n, "left");
              return C({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r });
            })(s, o);
          else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = u(c(t))).nodeName && (a = e.ownerDocument.documentElement) : (a = "window" === i ? e.ownerDocument.documentElement : i);
            var d = x(a, s, o);
            if (
              "HTML" !== a.nodeName ||
              (function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n) return !1;
                if ("fixed" === l(t, "position")) return !0;
                var i = c(t);
                return !!i && e(i);
              })(s)
            )
              r = d;
            else {
              var p = T(e.ownerDocument),
                f = p.height,
                h = p.width;
              (r.top += d.top - d.marginTop), (r.bottom = f + d.top), (r.left += d.left - d.marginLeft), (r.right = h + d.left);
            }
          }
          var g = "number" == typeof (n = n || 0);
          return (r.left += g ? n : n.left || 0), (r.top += g ? n : n.top || 0), (r.right -= g ? n : n.right || 0), (r.bottom -= g ? n : n.bottom || 0), r;
        }
        function D(e, t, n, i, o) {
          var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = A(n, i, r, o),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (e) {
                return E({ key: e }, a[e], { area: ((t = a[e]), t.width * t.height) });
                var t;
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            c = l.filter(function (e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            d = e.split("-")[1];
          return u + (d ? "-" + d : "");
        }
        function I(e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          return x(n, i ? O(t) : m(t, n), i);
        }
        function N(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function L(e) {
          var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function P(e, t, n) {
          n = n.split("-")[0];
          var i = N(e),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
          return (o[s] = t[s] + t[l] / 2 - i[l] / 2), (o[a] = n === a ? t[a] - i[c] : t[L(a)]), o;
        }
        function H(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function $(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                0,
                (function (e, t, n) {
                  if (Array.prototype.findIndex)
                    return e.findIndex(function (e) {
                      return e[t] === n;
                    });
                  var i = H(e, function (e) {
                    return e[t] === n;
                  });
                  return e.indexOf(i);
                })(e, "name", n)
              )
            ).forEach(function (e) {
              e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
              var n = e.function || e.fn;
              e.enabled && a(n) && ((t.offsets.popper = C(t.offsets.popper)), (t.offsets.reference = C(t.offsets.reference)), (t = n(t, e)));
            }),
            t
          );
        }
        function j(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function R(e) {
          for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
              r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r;
          }
          return null;
        }
        function W(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function M(e, t, n, i) {
          (n.updateBound = i), W(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var o = u(e);
          return (
            (function e(t, n, i, o) {
              var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, i, { passive: !0 }), r || e(u(s.parentNode), n, i, o), o.push(s);
            })(o, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = o),
            (n.eventsEnabled = !0),
            n
          );
        }
        function F() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
              (this.state =
                ((e = this.reference),
                  (t = this.state),
                  W(e).removeEventListener("resize", t.updateBound),
                  t.scrollParents.forEach(function (e) {
                    e.removeEventListener("scroll", t.updateBound);
                  }),
                  (t.updateBound = null),
                  (t.scrollParents = []),
                  (t.scrollElement = null),
                  (t.eventsEnabled = !1),
                  t)));
        }
        function q(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function B(e, t) {
          Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
          });
        }
        var U = n && /Firefox/i.test(navigator.userAgent);
        function V(e, t, n) {
          var i = H(e, function (e) {
            return e.name === t;
          }),
            o =
              !!i &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!o) {
            var r = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
          }
          return o;
        }
        var z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
          G = z.slice(3);
        function Y(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = G.indexOf(e),
            i = G.slice(n + 1).concat(G.slice(0, n));
          return t ? i.reverse() : i;
        }
        var K = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
        function X(e, t, n, i) {
          var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              H(s, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
          return (
            (c = c.map(function (e, i) {
              var o = (1 === i ? !r : r) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (s = !0), e) : s ? ((e[e.length - 1] += t), (s = !1), e) : e.concat(t);
                }, [])
                .map(function (e) {
                  return (function (e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      r = +o[1],
                      s = o[2];
                    if (!r) return e;
                    if (0 === s.indexOf("%")) {
                      var a = void 0;
                      switch (s) {
                        case "%p":
                          a = n;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = i;
                      }
                      return (C(a)[t] / 100) * r;
                    }
                    if ("vh" === s || "vw" === s)
                      return (("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r;
                    return r;
                  })(e, o, t, n);
                });
            })).forEach(function (e, t) {
              e.forEach(function (n, i) {
                q(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
              });
            }),
            o
          );
        }
        var Q = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () { },
          onUpdate: function () { },
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = t.split("-")[1];
                if (i) {
                  var o = e.offsets,
                    r = o.reference,
                    s = o.popper,
                    a = -1 !== ["bottom", "top"].indexOf(n),
                    l = a ? "left" : "top",
                    c = a ? "width" : "height",
                    u = { start: _({}, l, r[l]), end: _({}, l, r[l] + r[c] - s[c]) };
                  e.offsets.popper = E({}, s, u[i]);
                }
                return e;
              },
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (e, t) {
                var n = t.offset,
                  i = e.placement,
                  o = e.offsets,
                  r = o.popper,
                  s = o.reference,
                  a = i.split("-")[0],
                  l = void 0;
                return (
                  (l = q(+n) ? [+n, 0] : X(n, r, s, a)),
                  "left" === a
                    ? ((r.top += l[0]), (r.left -= l[1]))
                    : "right" === a
                      ? ((r.top += l[0]), (r.left += l[1]))
                      : "top" === a
                        ? ((r.left += l[0]), (r.top -= l[1]))
                        : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                  (e.popper = r),
                  e
                );
              },
              offset: 0,
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (e, t) {
                var n = t.boundariesElement || h(e.instance.popper);
                e.instance.reference === n && (n = h(n));
                var i = R("transform"),
                  o = e.instance.popper.style,
                  r = o.top,
                  s = o.left,
                  a = o[i];
                (o.top = ""), (o.left = ""), (o[i] = "");
                var l = A(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                (o.top = r), (o.left = s), (o[i] = a), (t.boundaries = l);
                var c = t.priority,
                  u = e.offsets.popper,
                  d = {
                    primary: function (e) {
                      var n = u[e];
                      return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), _({}, e, n);
                    },
                    secondary: function (e) {
                      var n = "right" === e ? "left" : "top",
                        i = u[n];
                      return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), _({}, n, i);
                    },
                  };
                return (
                  c.forEach(function (e) {
                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                    u = E({}, u, d[t](e));
                  }),
                  (e.offsets.popper = u),
                  e
                );
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (e) {
                var t = e.offsets,
                  n = t.popper,
                  i = t.reference,
                  o = e.placement.split("-")[0],
                  r = Math.floor,
                  s = -1 !== ["top", "bottom"].indexOf(o),
                  a = s ? "right" : "bottom",
                  l = s ? "left" : "top",
                  c = s ? "width" : "height";
                return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
              },
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (e, t) {
                var n;
                if (!V(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var i = t.element;
                if ("string" == typeof i) {
                  if (!(i = e.instance.popper.querySelector(i))) return e;
                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var o = e.placement.split("-")[0],
                  r = e.offsets,
                  s = r.popper,
                  a = r.reference,
                  c = -1 !== ["left", "right"].indexOf(o),
                  u = c ? "height" : "width",
                  d = c ? "Top" : "Left",
                  p = d.toLowerCase(),
                  f = c ? "left" : "top",
                  h = c ? "bottom" : "right",
                  g = N(i)[u];
                a[h] - g < s[p] && (e.offsets.popper[p] -= s[p] - (a[h] - g)), a[p] + g > s[h] && (e.offsets.popper[p] += a[p] + g - s[h]), (e.offsets.popper = C(e.offsets.popper));
                var m = a[p] + a[u] / 2 - g / 2,
                  v = l(e.instance.popper),
                  y = parseFloat(v["margin" + d], 10),
                  b = parseFloat(v["border" + d + "Width"], 10),
                  T = m - e.offsets.popper[p] - y - b;
                return (T = Math.max(Math.min(s[u] - g, T), 0)), (e.arrowElement = i), (e.offsets.arrow = (_((n = {}), p, Math.round(T)), _(n, f, ""), n)), e;
              },
              element: "[x-arrow]",
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (e, t) {
                if (j(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = A(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                  i = e.placement.split("-")[0],
                  o = L(i),
                  r = e.placement.split("-")[1] || "",
                  s = [];
                switch (t.behavior) {
                  case K.FLIP:
                    s = [i, o];
                    break;
                  case K.CLOCKWISE:
                    s = Y(i);
                    break;
                  case K.COUNTERCLOCKWISE:
                    s = Y(i, !0);
                    break;
                  default:
                    s = t.behavior;
                }
                return (
                  s.forEach(function (a, l) {
                    if (i !== a || s.length === l + 1) return e;
                    (i = e.placement.split("-")[0]), (o = L(i));
                    var c = e.offsets.popper,
                      u = e.offsets.reference,
                      d = Math.floor,
                      p = ("left" === i && d(c.right) > d(u.left)) || ("right" === i && d(c.left) < d(u.right)) || ("top" === i && d(c.bottom) > d(u.top)) || ("bottom" === i && d(c.top) < d(u.bottom)),
                      f = d(c.left) < d(n.left),
                      h = d(c.right) > d(n.right),
                      g = d(c.top) < d(n.top),
                      m = d(c.bottom) > d(n.bottom),
                      v = ("left" === i && f) || ("right" === i && h) || ("top" === i && g) || ("bottom" === i && m),
                      y = -1 !== ["top", "bottom"].indexOf(i),
                      b = !!t.flipVariations && ((y && "start" === r && f) || (y && "end" === r && h) || (!y && "start" === r && g) || (!y && "end" === r && m)),
                      T = !!t.flipVariationsByContent && ((y && "start" === r && h) || (y && "end" === r && f) || (!y && "start" === r && m) || (!y && "end" === r && g)),
                      w = b || T;
                    (p || v || w) &&
                      ((e.flipped = !0),
                        (p || v) && (i = s[l + 1]),
                        w &&
                        (r = (function (e) {
                          return "end" === e ? "start" : "start" === e ? "end" : e;
                        })(r)),
                        (e.placement = i + (r ? "-" + r : "")),
                        (e.offsets.popper = E({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement))),
                        (e = $(e.instance.modifiers, e, "flip")));
                  }),
                  e
                );
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = e.offsets,
                  o = i.popper,
                  r = i.reference,
                  s = -1 !== ["left", "right"].indexOf(n),
                  a = -1 === ["top", "left"].indexOf(n);
                return (o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0)), (e.placement = L(t)), (e.offsets.popper = C(o)), e;
              },
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (e) {
                if (!V(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  n = H(e.instance.modifiers, function (e) {
                    return "preventOverflow" === e.name;
                  }).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                  if (!0 === e.hide) return e;
                  (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                } else {
                  if (!1 === e.hide) return e;
                  (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                }
                return e;
              },
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (e, t) {
                var n = t.x,
                  i = t.y,
                  o = e.offsets.popper,
                  r = H(e.instance.modifiers, function (e) {
                    return "applyStyle" === e.name;
                  }).gpuAcceleration;
                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var s = void 0 !== r ? r : t.gpuAcceleration,
                  a = h(e.instance.popper),
                  l = k(a),
                  c = { position: o.position },
                  u = (function (e, t) {
                    var n = e.offsets,
                      i = n.popper,
                      o = n.reference,
                      r = Math.round,
                      s = Math.floor,
                      a = function (e) {
                        return e;
                      },
                      l = r(o.width),
                      c = r(i.width),
                      u = -1 !== ["left", "right"].indexOf(e.placement),
                      d = -1 !== e.placement.indexOf("-"),
                      p = t ? (u || d || l % 2 == c % 2 ? r : s) : a,
                      f = t ? r : a;
                    return { left: p(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left), top: f(i.top), bottom: f(i.bottom), right: p(i.right) };
                  })(e, window.devicePixelRatio < 2 || !U),
                  d = "bottom" === n ? "top" : "bottom",
                  p = "right" === i ? "left" : "right",
                  f = R("transform"),
                  g = void 0,
                  m = void 0;
                if (
                  ((m = "bottom" === d ? ("HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom) : u.top),
                    (g = "right" === p ? ("HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right) : u.left),
                    s && f)
                )
                  (c[f] = "translate3d(" + g + "px, " + m + "px, 0)"), (c[d] = 0), (c[p] = 0), (c.willChange = "transform");
                else {
                  var v = "bottom" === d ? -1 : 1,
                    y = "right" === p ? -1 : 1;
                  (c[d] = m * v), (c[p] = g * y), (c.willChange = d + ", " + p);
                }
                var b = { "x-placement": e.placement };
                return (e.attributes = E({}, b, e.attributes)), (e.styles = E({}, c, e.styles)), (e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles)), e;
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (e) {
                var t, n;
                return (
                  B(e.instance.popper, e.styles),
                  (t = e.instance.popper),
                  (n = e.attributes),
                  Object.keys(n).forEach(function (e) {
                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                  }),
                  e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles),
                  e
                );
              },
              onLoad: function (e, t, n, i, o) {
                var r = I(o, t, e, n.positionFixed),
                  s = D(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", s), B(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
              },
              gpuAcceleration: void 0,
            },
          },
        },
          J = (function () {
            function e(t, n) {
              var i = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              w(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = s(this.update.bind(this))),
                (this.options = E({}, e.Defaults, o)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(E({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
                  i.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {});
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return E({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var r = this.options.eventsEnabled;
              r && this.enableEventListeners(), (this.state.eventsEnabled = r);
            }
            return (
              S(e, [
                {
                  key: "update",
                  value: function () {
                    return function () {
                      if (!this.state.isDestroyed) {
                        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        (e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed)),
                          (e.placement = D(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                          (e.originalPlacement = e.placement),
                          (e.positionFixed = this.options.positionFixed),
                          (e.offsets.popper = P(this.popper, e.offsets.reference, e.placement)),
                          (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                          (e = $(this.modifiers, e)),
                          this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                      }
                    }.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return function () {
                      return (
                        (this.state.isDestroyed = !0),
                        j(this.modifiers, "applyStyle") &&
                        (this.popper.removeAttribute("x-placement"),
                          (this.popper.style.position = ""),
                          (this.popper.style.top = ""),
                          (this.popper.style.left = ""),
                          (this.popper.style.right = ""),
                          (this.popper.style.bottom = ""),
                          (this.popper.style.willChange = ""),
                          (this.popper.style[R("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return function () {
                      this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate));
                    }.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return F.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (J.Utils = ("undefined" != typeof window ? window : e).PopperUtils), (J.placements = z), (J.Defaults = Q), (t.default = J);
      }.call(this, n(9));
  },
  function (e, t, n) {
    /*!
     * Bootstrap tooltip.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t), (n = n && n.hasOwnProperty("default") ? n.default : n);
      var s = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        a = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        c = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
      function u(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (
          var i = new window.DOMParser(),
          o = i.parseFromString(e, "text/html"),
          r = Object.keys(t),
          a = [].slice.call(o.body.querySelectorAll("*")),
          u = function (e, n) {
            var i = a[e],
              o = i.nodeName.toLowerCase();
            if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            var u = [].slice.call(i.attributes),
              d = [].concat(t["*"] || [], t[o] || []);
            u.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n)) return -1 === s.indexOf(n) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(c));
                for (
                  var i = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(e, d) || i.removeAttribute(e.nodeName);
            });
          },
          d = 0,
          p = a.length;
          d < p;
          d++
        )
          u(d);
        return o.body.innerHTML;
      }
      var d = "tooltip",
        p = ".bs.tooltip",
        f = e.fn[d],
        h = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        g = ["sanitize", "whiteList", "sanitizeFn"],
        m = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
        },
        v = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        y = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: a,
        },
        b = { SHOW: "show", OUT: "out" },
        T = {
          HIDE: "hide" + p,
          HIDDEN: "hidden" + p,
          SHOW: "show" + p,
          SHOWN: "shown" + p,
          INSERTED: "inserted" + p,
          CLICK: "click" + p,
          FOCUSIN: "focusin" + p,
          FOCUSOUT: "focusout" + p,
          MOUSEENTER: "mouseenter" + p,
          MOUSELEAVE: "mouseleave" + p,
        },
        w = { FADE: "fade", SHOW: "show" },
        S = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
        _ = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
        E = (function () {
          function o(e, n) {
            if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(n)),
              (this.tip = null),
              this._setListeners();
          }
          var s,
            a,
            l,
            c = o.prototype;
          return (
            (c.enable = function () {
              this._isEnabled = !0;
            }),
            (c.disable = function () {
              this._isEnabled = !1;
            }),
            (c.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (c.toggle = function (t) {
              if (this._isEnabled)
                if (t) {
                  var n = this.constructor.DATA_KEY,
                    i = e(t.currentTarget).data(n);
                  i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                } else {
                  if (e(this.getTipElement()).hasClass(w.SHOW)) return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (c.dispose = function () {
              clearTimeout(this._timeout),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                e(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && e(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (c.show = function () {
              var i = this;
              if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
              var o = e.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                e(this.element).trigger(o);
                var r = n.findShadowRoot(this.element),
                  s = e.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                if (o.isDefaultPrevented() || !s) return;
                var a = this.getTipElement(),
                  l = n.getUID(this.constructor.NAME);
                a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(w.FADE);
                var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                  u = this._getAttachment(c);
                this.addAttachmentClass(u);
                var d = this._getContainer();
                e(a).data(this.constructor.DATA_KEY, this),
                  e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d),
                  e(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new t(this.element, a, {
                    placement: u,
                    modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: S.ARROW }, preventOverflow: { boundariesElement: this.config.boundary } },
                    onCreate: function (e) {
                      e.originalPlacement !== e.placement && i._handlePopperPlacementChange(e);
                    },
                    onUpdate: function (e) {
                      return i._handlePopperPlacementChange(e);
                    },
                  })),
                  e(a).addClass(w.SHOW),
                  "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                var p = function () {
                  i.config.animation && i._fixTransition();
                  var t = i._hoverState;
                  (i._hoverState = null), e(i.element).trigger(i.constructor.Event.SHOWN), t === b.OUT && i._leave(null, i);
                };
                if (e(this.tip).hasClass(w.FADE)) {
                  var f = n.getTransitionDurationFromElement(this.tip);
                  e(this.tip).one(n.TRANSITION_END, p).emulateTransitionEnd(f);
                } else p();
              }
            }),
            (c.hide = function (t) {
              var i = this,
                o = this.getTipElement(),
                r = e.Event(this.constructor.Event.HIDE),
                s = function () {
                  i._hoverState !== b.SHOW && o.parentNode && o.parentNode.removeChild(o),
                    i._cleanTipClass(),
                    i.element.removeAttribute("aria-describedby"),
                    e(i.element).trigger(i.constructor.Event.HIDDEN),
                    null !== i._popper && i._popper.destroy(),
                    t && t();
                };
              if ((e(this.element).trigger(r), !r.isDefaultPrevented())) {
                if (
                  (e(o).removeClass(w.SHOW),
                    "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                    (this._activeTrigger[_.CLICK] = !1),
                    (this._activeTrigger[_.FOCUS] = !1),
                    (this._activeTrigger[_.HOVER] = !1),
                    e(this.tip).hasClass(w.FADE))
                ) {
                  var a = n.getTransitionDurationFromElement(o);
                  e(o).one(n.TRANSITION_END, s).emulateTransitionEnd(a);
                } else s();
                this._hoverState = "";
              }
            }),
            (c.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (c.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (c.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass("bs-tooltip-" + t);
            }),
            (c.getTipElement = function () {
              return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
            }),
            (c.setContent = function () {
              var t = this.getTipElement();
              this.setElementContent(e(t.querySelectorAll(S.TOOLTIP_INNER)), this.getTitle()), e(t).removeClass(w.FADE + " " + w.SHOW);
            }),
            (c.setElementContent = function (t, n) {
              "object" != typeof n || (!n.nodeType && !n.jquery)
                ? this.config.html
                  ? (this.config.sanitize && (n = u(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n))
                  : t.text(n)
                : this.config.html
                  ? e(n).parent().is(t) || t.empty().append(n)
                  : t.text(e(n).text());
            }),
            (c.getTitle = function () {
              var e = this.element.getAttribute("data-original-title");
              return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
            }),
            (c._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this.config.offset
                  ? (t.fn = function (t) {
                    return (t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                  })
                  : (t.offset = this.config.offset),
                t
              );
            }),
            (c._getContainer = function () {
              return !1 === this.config.container ? document.body : n.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
            }),
            (c._getAttachment = function (e) {
              return v[e.toUpperCase()];
            }),
            (c._setListeners = function () {
              var t = this,
                n = this.config.trigger.split(" ");
              n.forEach(function (n) {
                if ("click" === n)
                  e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                    return t.toggle(e);
                  });
                else if (n !== _.MANUAL) {
                  var i = n === _.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                    o = n === _.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                  e(t.element)
                    .on(i, t.config.selector, function (e) {
                      return t._enter(e);
                    })
                    .on(o, t.config.selector, function (e) {
                      return t._leave(e);
                    });
                }
              }),
                e(this.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    t.element && t.hide();
                  }),
                this.config.selector ? (this.config = r({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
            }),
            (c._fixTitle = function () {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
            }),
            (c._enter = function (t, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                t && (n._activeTrigger["focusin" === t.type ? _.FOCUS : _.HOVER] = !0),
                e(n.getTipElement()).hasClass(w.SHOW) || n._hoverState === b.SHOW
                  ? (n._hoverState = b.SHOW)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = b.SHOW),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                        n._hoverState === b.SHOW && n.show();
                      }, n.config.delay.show))
                      : n.show());
            }),
            (c._leave = function (t, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                t && (n._activeTrigger["focusout" === t.type ? _.FOCUS : _.HOVER] = !1),
                n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                  (n._hoverState = b.OUT),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                      n._hoverState === b.OUT && n.hide();
                    }, n.config.delay.hide))
                    : n.hide());
            }),
            (c._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
              return !1;
            }),
            (c._getConfig = function (t) {
              var i = e(this.element).data();
              return (
                Object.keys(i).forEach(function (e) {
                  -1 !== g.indexOf(e) && delete i[e];
                }),
                "number" == typeof (t = r({}, this.constructor.Default, i, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                n.typeCheckConfig(d, t, this.constructor.DefaultType),
                t.sanitize && (t.template = u(t.template, t.whiteList, t.sanitizeFn)),
                t
              );
            }),
            (c._getDelegateConfig = function () {
              var e = {};
              if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
              return e;
            }),
            (c._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(h);
              null !== n && n.length && t.removeClass(n.join(""));
            }),
            (c._handlePopperPlacementChange = function (e) {
              var t = e.instance;
              (this.tip = t.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
            }),
            (c._fixTransition = function () {
              var t = this.getTipElement(),
                n = this.config.animation;
              null === t.getAttribute("x-placement") && (e(t).removeClass(w.FADE), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
            }),
            (o._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data("bs.tooltip"),
                  i = "object" == typeof t && t;
                if ((n || !/dispose|hide/.test(t)) && (n || ((n = new o(this, i)), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            (s = o),
            (l = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return y;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return d;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return T;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return p;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return m;
                },
              },
            ]),
            (a = null) && i(s.prototype, a),
            l && i(s, l),
            o
          );
        })();
      return (
        (e.fn[d] = E._jQueryInterface),
        (e.fn[d].Constructor = E),
        (e.fn[d].noConflict = function () {
          return (e.fn[d] = f), E._jQueryInterface;
        }),
        E
      );
    })(n(0), n(2), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap alert.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var i = e.fn.alert,
        o = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        r = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        s = (function () {
          function i(e) {
            this._element = e;
          }
          var s,
            a,
            l,
            c = i.prototype;
          return (
            (c.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e));
              var n = this._triggerCloseEvent(t);
              n.isDefaultPrevented() || this._removeElement(t);
            }),
            (c.dispose = function () {
              e.removeData(this._element, "bs.alert"), (this._element = null);
            }),
            (c._getRootElement = function (n) {
              var i = t.getSelectorFromElement(n),
                o = !1;
              return i && (o = document.querySelector(i)), o || (o = e(n).closest("." + r.ALERT)[0]), o;
            }),
            (c._triggerCloseEvent = function (t) {
              var n = e.Event(o.CLOSE);
              return e(t).trigger(n), n;
            }),
            (c._removeElement = function (n) {
              var i = this;
              if ((e(n).removeClass(r.SHOW), e(n).hasClass(r.FADE))) {
                var o = t.getTransitionDurationFromElement(n);
                e(n)
                  .one(t.TRANSITION_END, function (e) {
                    return i._destroyElement(n, e);
                  })
                  .emulateTransitionEnd(o);
              } else this._destroyElement(n);
            }),
            (c._destroyElement = function (t) {
              e(t).detach().trigger(o.CLOSED).remove();
            }),
            (i._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this),
                  o = n.data("bs.alert");
                o || ((o = new i(this)), n.data("bs.alert", o)), "close" === t && o[t](this);
              });
            }),
            (i._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            (s = i),
            (l = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
            ]),
            (a = null) && n(s.prototype, a),
            l && n(s, l),
            i
          );
        })();
      return (
        e(document).on(o.CLICK_DATA_API, '[data-dismiss="alert"]', s._handleDismiss(new s())),
        (e.fn.alert = s._jQueryInterface),
        (e.fn.alert.Constructor = s),
        (e.fn.alert.noConflict = function () {
          return (e.fn.alert = i), s._jQueryInterface;
        }),
        s
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap button.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e) {
      "use strict";
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      e = e && e.hasOwnProperty("default") ? e.default : e;
      var n = "button",
        i = e.fn[n],
        o = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        r = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: 'input:not([type="hidden"])', ACTIVE: ".active", BUTTON: ".btn" },
        s = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        a = (function () {
          function n(e) {
            this._element = e;
          }
          var i,
            s,
            a,
            l = n.prototype;
          return (
            (l.toggle = function () {
              var t = !0,
                n = !0,
                i = e(this._element).closest(r.DATA_TOGGLE)[0];
              if (i) {
                var s = this._element.querySelector(r.INPUT);
                if (s) {
                  if ("radio" === s.type)
                    if (s.checked && this._element.classList.contains(o.ACTIVE)) t = !1;
                    else {
                      var a = i.querySelector(r.ACTIVE);
                      a && e(a).removeClass(o.ACTIVE);
                    }
                  if (t) {
                    if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
                    (s.checked = !this._element.classList.contains(o.ACTIVE)), e(s).trigger("change");
                  }
                  s.focus(), (n = !1);
                }
              }
              n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(o.ACTIVE)), t && e(this._element).toggleClass(o.ACTIVE);
            }),
            (l.dispose = function () {
              e.removeData(this._element, "bs.button"), (this._element = null);
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data("bs.button");
                i || ((i = new n(this)), e(this).data("bs.button", i)), "toggle" === t && i[t]();
              });
            }),
            (i = n),
            (a = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
            ]),
            (s = null) && t(i.prototype, s),
            a && t(i, a),
            n
          );
        })();
      return (
        e(document)
          .on(s.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(o.BUTTON) || (n = e(n).closest(r.BUTTON)), a._jQueryInterface.call(e(n), "toggle");
          })
          .on(s.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(r.BUTTON)[0];
            e(n).toggleClass(o.FOCUS, /^focus(in)?$/.test(t.type));
          }),
        (e.fn[n] = a._jQueryInterface),
        (e.fn[n].Constructor = a),
        (e.fn[n].noConflict = function () {
          return (e.fn[n] = i), a._jQueryInterface;
        }),
        a
      );
    })(n(0));
  },
  function (e, t, n) {
    /*!
     * Bootstrap carousel.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var r = "carousel",
        s = "bs.carousel",
        a = "." + s,
        l = e.fn[r],
        c = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        u = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        d = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        p = {
          SLIDE: "slide" + a,
          SLID: "slid" + a,
          KEYDOWN: "keydown" + a,
          MOUSEENTER: "mouseenter" + a,
          MOUSELEAVE: "mouseleave" + a,
          TOUCHSTART: "touchstart" + a,
          TOUCHMOVE: "touchmove" + a,
          TOUCHEND: "touchend" + a,
          POINTERDOWN: "pointerdown" + a,
          POINTERUP: "pointerup" + a,
          DRAG_START: "dragstart" + a,
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api",
        },
        f = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item",
          POINTER_EVENT: "pointer-event",
        },
        h = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          ITEM_IMG: ".carousel-item img",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]',
        },
        g = { TOUCH: "touch", PEN: "pen" },
        m = (function () {
          function i(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(t)),
              (this._element = e),
              (this._indicatorsElement = this._element.querySelector(h.INDICATORS)),
              (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
              this._addEventListeners();
          }
          var l,
            m,
            v,
            y = i.prototype;
          return (
            (y.next = function () {
              this._isSliding || this._slide(d.NEXT);
            }),
            (y.nextWhenVisible = function () {
              !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
            }),
            (y.prev = function () {
              this._isSliding || this._slide(d.PREV);
            }),
            (y.pause = function (e) {
              e || (this._isPaused = !0), this._element.querySelector(h.NEXT_PREV) && (t.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
            }),
            (y.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval), (this._interval = null)),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }),
            (y.to = function (t) {
              var n = this;
              this._activeElement = this._element.querySelector(h.ACTIVE_ITEM);
              var i = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                  e(this._element).one(p.SLID, function () {
                    return n.to(t);
                  });
                else {
                  if (i === t) return this.pause(), void this.cycle();
                  var o = t > i ? d.NEXT : d.PREV;
                  this._slide(o, this._items[t]);
                }
            }),
            (y.dispose = function () {
              e(this._element).off(a),
                e.removeData(this._element, s),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (y._getConfig = function (e) {
              return (e = o({}, c, e)), t.typeCheckConfig(r, e, u), e;
            }),
            (y._handleSwipe = function () {
              var e = Math.abs(this.touchDeltaX);
              if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                t > 0 && this.prev(), t < 0 && this.next();
              }
            }),
            (y._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                e(this._element).on(p.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                e(this._element)
                  .on(p.MOUSEENTER, function (e) {
                    return t.pause(e);
                  })
                  .on(p.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                  }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (y._addTouchEventListeners = function () {
              var t = this;
              if (this._touchSupported) {
                var n = function (e) {
                  t._pointerEvent && g[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                },
                  i = function (e) {
                    t._pointerEvent && g[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                      t._handleSwipe(),
                      "hover" === t._config.pause &&
                      (t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, 500 + t._config.interval)));
                  };
                e(this._element.querySelectorAll(h.ITEM_IMG)).on(p.DRAG_START, function (e) {
                  return e.preventDefault();
                }),
                  this._pointerEvent
                    ? (e(this._element).on(p.POINTERDOWN, function (e) {
                      return n(e);
                    }),
                      e(this._element).on(p.POINTERUP, function (e) {
                        return i(e);
                      }),
                      this._element.classList.add(f.POINTER_EVENT))
                    : (e(this._element).on(p.TOUCHSTART, function (e) {
                      return n(e);
                    }),
                      e(this._element).on(p.TOUCHMOVE, function (e) {
                        return (function (e) {
                          e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                        })(e);
                      }),
                      e(this._element).on(p.TOUCHEND, function (e) {
                        return i(e);
                      }));
              }
            }),
            (y._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (y._getItemIndex = function (e) {
              return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(h.ITEM)) : []), this._items.indexOf(e);
            }),
            (y._getItemByDirection = function (e, t) {
              var n = e === d.NEXT,
                i = e === d.PREV,
                o = this._getItemIndex(t),
                r = this._items.length - 1,
                s = (i && 0 === o) || (n && o === r);
              if (s && !this._config.wrap) return t;
              var a = e === d.PREV ? -1 : 1,
                l = (o + a) % this._items.length;
              return -1 === l ? this._items[this._items.length - 1] : this._items[l];
            }),
            (y._triggerSlideEvent = function (t, n) {
              var i = this._getItemIndex(t),
                o = this._getItemIndex(this._element.querySelector(h.ACTIVE_ITEM)),
                r = e.Event(p.SLIDE, { relatedTarget: t, direction: n, from: o, to: i });
              return e(this._element).trigger(r), r;
            }),
            (y._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(h.ACTIVE));
                e(n).removeClass(f.ACTIVE);
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && e(i).addClass(f.ACTIVE);
              }
            }),
            (y._slide = function (n, i) {
              var o,
                r,
                s,
                a = this,
                l = this._element.querySelector(h.ACTIVE_ITEM),
                c = this._getItemIndex(l),
                u = i || (l && this._getItemByDirection(n, l)),
                g = this._getItemIndex(u),
                m = Boolean(this._interval);
              if ((n === d.NEXT ? ((o = f.LEFT), (r = f.NEXT), (s = d.LEFT)) : ((o = f.RIGHT), (r = f.PREV), (s = d.RIGHT)), u && e(u).hasClass(f.ACTIVE))) this._isSliding = !1;
              else {
                var v = this._triggerSlideEvent(u, s);
                if (!v.isDefaultPrevented() && l && u) {
                  (this._isSliding = !0), m && this.pause(), this._setActiveIndicatorElement(u);
                  var y = e.Event(p.SLID, { relatedTarget: u, direction: s, from: c, to: g });
                  if (e(this._element).hasClass(f.SLIDE)) {
                    e(u).addClass(r), t.reflow(u), e(l).addClass(o), e(u).addClass(o);
                    var b = parseInt(u.getAttribute("data-interval"), 10);
                    b
                      ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = b))
                      : (this._config.interval = this._config.defaultInterval || this._config.interval);
                    var T = t.getTransitionDurationFromElement(l);
                    e(l)
                      .one(t.TRANSITION_END, function () {
                        e(u)
                          .removeClass(o + " " + r)
                          .addClass(f.ACTIVE),
                          e(l).removeClass(f.ACTIVE + " " + r + " " + o),
                          (a._isSliding = !1),
                          setTimeout(function () {
                            return e(a._element).trigger(y);
                          }, 0);
                      })
                      .emulateTransitionEnd(T);
                  } else e(l).removeClass(f.ACTIVE), e(u).addClass(f.ACTIVE), (this._isSliding = !1), e(this._element).trigger(y);
                  m && this.cycle();
                }
              }
            }),
            (i._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data(s),
                  r = o({}, c, e(this).data());
                "object" == typeof t && (r = o({}, r, t));
                var a = "string" == typeof t ? t : r.slide;
                if ((n || ((n = new i(this, r)), e(this).data(s, n)), "number" == typeof t)) n.to(t);
                else if ("string" == typeof a) {
                  if (void 0 === n[a]) throw new TypeError('No method named "' + a + '"');
                  n[a]();
                } else r.interval && r.ride && (n.pause(), n.cycle());
              });
            }),
            (i._dataApiClickHandler = function (n) {
              var r = t.getSelectorFromElement(this);
              if (r) {
                var a = e(r)[0];
                if (a && e(a).hasClass(f.CAROUSEL)) {
                  var l = o({}, e(a).data(), e(this).data()),
                    c = this.getAttribute("data-slide-to");
                  c && (l.interval = !1), i._jQueryInterface.call(e(a), l), c && e(a).data(s).to(c), n.preventDefault();
                }
              }
            }),
            (l = i),
            (v = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return c;
                },
              },
            ]),
            (m = null) && n(l.prototype, m),
            v && n(l, v),
            i
          );
        })();
      return (
        e(document).on(p.CLICK_DATA_API, h.DATA_SLIDE, m._dataApiClickHandler),
        e(window).on(p.LOAD_DATA_API, function () {
          for (var t = [].slice.call(document.querySelectorAll(h.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
            var o = e(t[n]);
            m._jQueryInterface.call(o, o.data());
          }
        }),
        (e.fn[r] = m._jQueryInterface),
        (e.fn[r].Constructor = m),
        (e.fn[r].noConflict = function () {
          return (e.fn[r] = l), m._jQueryInterface;
        }),
        m
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap collapse.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var r = "collapse",
        s = "bs.collapse",
        a = e.fn[r],
        l = { toggle: !0, parent: "" },
        c = { toggle: "boolean", parent: "(string|element)" },
        u = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        d = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
        p = { WIDTH: "width", HEIGHT: "height" },
        f = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        h = (function () {
          function i(e, n) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(n)),
              (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
            for (var i = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)), o = 0, r = i.length; o < r; o++) {
              var s = i[o],
                a = t.getSelectorFromElement(s),
                l = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                  return t === e;
                });
              null !== a && l.length > 0 && ((this._selector = a), this._triggerArray.push(s));
            }
            (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          var a,
            h,
            g,
            m = i.prototype;
          return (
            (m.toggle = function () {
              e(this._element).hasClass(d.SHOW) ? this.hide() : this.show();
            }),
            (m.show = function () {
              var n,
                o,
                r = this;
              if (
                !(
                  this._isTransitioning ||
                  e(this._element).hasClass(d.SHOW) ||
                  (this._parent &&
                    0 ===
                    (n = [].slice.call(this._parent.querySelectorAll(f.ACTIVES)).filter(function (e) {
                      return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(d.COLLAPSE);
                    })).length &&
                    (n = null),
                    n && (o = e(n).not(this._selector).data(s)) && o._isTransitioning)
                )
              ) {
                var a = e.Event(u.SHOW);
                if ((e(this._element).trigger(a), !a.isDefaultPrevented())) {
                  n && (i._jQueryInterface.call(e(n).not(this._selector), "hide"), o || e(n).data(s, null));
                  var l = this._getDimension();
                  e(this._element).removeClass(d.COLLAPSE).addClass(d.COLLAPSING),
                    (this._element.style[l] = 0),
                    this._triggerArray.length && e(this._triggerArray).removeClass(d.COLLAPSED).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var c = l[0].toUpperCase() + l.slice(1),
                    p = "scroll" + c,
                    h = t.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(t.TRANSITION_END, function () {
                      e(r._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).addClass(d.SHOW), (r._element.style[l] = ""), r.setTransitioning(!1), e(r._element).trigger(u.SHOWN);
                    })
                    .emulateTransitionEnd(h),
                    (this._element.style[l] = this._element[p] + "px");
                }
              }
            }),
            (m.hide = function () {
              var n = this;
              if (!this._isTransitioning && e(this._element).hasClass(d.SHOW)) {
                var i = e.Event(u.HIDE);
                if ((e(this._element).trigger(i), !i.isDefaultPrevented())) {
                  var o = this._getDimension();
                  (this._element.style[o] = this._element.getBoundingClientRect()[o] + "px"), t.reflow(this._element), e(this._element).addClass(d.COLLAPSING).removeClass(d.COLLAPSE).removeClass(d.SHOW);
                  var r = this._triggerArray.length;
                  if (r > 0)
                    for (var s = 0; s < r; s++) {
                      var a = this._triggerArray[s],
                        l = t.getSelectorFromElement(a);
                      if (null !== l) {
                        var c = e([].slice.call(document.querySelectorAll(l)));
                        c.hasClass(d.SHOW) || e(a).addClass(d.COLLAPSED).attr("aria-expanded", !1);
                      }
                    }
                  this.setTransitioning(!0), (this._element.style[o] = "");
                  var p = t.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(t.TRANSITION_END, function () {
                      n.setTransitioning(!1), e(n._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).trigger(u.HIDDEN);
                    })
                    .emulateTransitionEnd(p);
                }
              }
            }),
            (m.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (m.dispose = function () {
              e.removeData(this._element, s), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
            }),
            (m._getConfig = function (e) {
              return ((e = o({}, l, e)).toggle = Boolean(e.toggle)), t.typeCheckConfig(r, e, c), e;
            }),
            (m._getDimension = function () {
              var t = e(this._element).hasClass(p.WIDTH);
              return t ? p.WIDTH : p.HEIGHT;
            }),
            (m._getParent = function () {
              var n,
                o = this;
              t.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
              var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                s = [].slice.call(n.querySelectorAll(r));
              return (
                e(s).each(function (e, t) {
                  o._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t]);
                }),
                n
              );
            }),
            (m._addAriaAndCollapsedClass = function (t, n) {
              var i = e(t).hasClass(d.SHOW);
              n.length && e(n).toggleClass(d.COLLAPSED, !i).attr("aria-expanded", i);
            }),
            (i._getTargetFromElement = function (e) {
              var n = t.getSelectorFromElement(e);
              return n ? document.querySelector(n) : null;
            }),
            (i._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this),
                  r = n.data(s),
                  a = o({}, l, n.data(), "object" == typeof t && t ? t : {});
                if ((!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || ((r = new i(this, a)), n.data(s, r)), "string" == typeof t)) {
                  if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                  r[t]();
                }
              });
            }),
            (a = i),
            (g = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
            ]),
            (h = null) && n(a.prototype, h),
            g && n(a, g),
            i
          );
        })();
      return (
        e(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (n) {
          "A" === n.currentTarget.tagName && n.preventDefault();
          var i = e(this),
            o = t.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(o));
          e(r).each(function () {
            var t = e(this),
              n = t.data(s) ? "toggle" : i.data();
            h._jQueryInterface.call(t, n);
          });
        }),
        (e.fn[r] = h._jQueryInterface),
        (e.fn[r].Constructor = h),
        (e.fn[r].noConflict = function () {
          return (e.fn[r] = a), h._jQueryInterface;
        }),
        h
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap dropdown.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t), (n = n && n.hasOwnProperty("default") ? n.default : n);
      var s = "dropdown",
        a = "bs.dropdown",
        l = "." + a,
        c = e.fn[s],
        u = new RegExp("38|40|27"),
        d = {
          HIDE: "hide" + l,
          HIDDEN: "hidden" + l,
          SHOW: "show" + l,
          SHOWN: "shown" + l,
          CLICK: "click" + l,
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
        },
        p = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", DROPRIGHT: "dropright", DROPLEFT: "dropleft", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", POSITION_STATIC: "position-static" },
        f = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)" },
        h = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end", RIGHT: "right-start", RIGHTEND: "right-end", LEFT: "left-start", LEFTEND: "left-end" },
        g = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        m = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        v = (function () {
          function o(e, t) {
            (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
          }
          var c,
            v,
            y,
            b = o.prototype;
          return (
            (b.toggle = function () {
              if (!this._element.disabled && !e(this._element).hasClass(p.DISABLED)) {
                var i = o._getParentFromElement(this._element),
                  r = e(this._menu).hasClass(p.SHOW);
                if ((o._clearMenus(), !r)) {
                  var s = { relatedTarget: this._element },
                    a = e.Event(d.SHOW, s);
                  if ((e(i).trigger(a), !a.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                      var l = this._element;
                      "parent" === this._config.reference ? (l = i) : n.isElement(this._config.reference) && ((l = this._config.reference), void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && e(i).addClass(p.POSITION_STATIC),
                        (this._popper = new t(l, this._menu, this._getPopperConfig()));
                    }
                    "ontouchstart" in document.documentElement && 0 === e(i).closest(f.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      e(this._menu).toggleClass(p.SHOW),
                      e(i).toggleClass(p.SHOW).trigger(e.Event(d.SHOWN, s));
                  }
                }
              }
            }),
            (b.show = function () {
              if (!(this._element.disabled || e(this._element).hasClass(p.DISABLED) || e(this._menu).hasClass(p.SHOW))) {
                var t = { relatedTarget: this._element },
                  n = e.Event(d.SHOW, t),
                  i = o._getParentFromElement(this._element);
                e(i).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(p.SHOW), e(i).toggleClass(p.SHOW).trigger(e.Event(d.SHOWN, t)));
              }
            }),
            (b.hide = function () {
              if (!this._element.disabled && !e(this._element).hasClass(p.DISABLED) && e(this._menu).hasClass(p.SHOW)) {
                var t = { relatedTarget: this._element },
                  n = e.Event(d.HIDE, t),
                  i = o._getParentFromElement(this._element);
                e(i).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(p.SHOW), e(i).toggleClass(p.SHOW).trigger(e.Event(d.HIDDEN, t)));
              }
            }),
            (b.dispose = function () {
              e.removeData(this._element, a), e(this._element).off(l), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
            }),
            (b.update = function () {
              (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
            }),
            (b._addEventListeners = function () {
              var t = this;
              e(this._element).on(d.CLICK, function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
              });
            }),
            (b._getConfig = function (t) {
              return (t = r({}, this.constructor.Default, e(this._element).data(), t)), n.typeCheckConfig(s, t, this.constructor.DefaultType), t;
            }),
            (b._getMenuElement = function () {
              if (!this._menu) {
                var e = o._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(f.MENU));
              }
              return this._menu;
            }),
            (b._getPlacement = function () {
              var t = e(this._element.parentNode),
                n = h.BOTTOM;
              return (
                t.hasClass(p.DROPUP)
                  ? ((n = h.TOP), e(this._menu).hasClass(p.MENURIGHT) && (n = h.TOPEND))
                  : t.hasClass(p.DROPRIGHT)
                    ? (n = h.RIGHT)
                    : t.hasClass(p.DROPLEFT)
                      ? (n = h.LEFT)
                      : e(this._menu).hasClass(p.MENURIGHT) && (n = h.BOTTOMEND),
                n
              );
            }),
            (b._detectNavbar = function () {
              return e(this._element).closest(".navbar").length > 0;
            }),
            (b._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this._config.offset
                  ? (t.fn = function (t) {
                    return (t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                  })
                  : (t.offset = this._config.offset),
                t
              );
            }),
            (b._getPopperConfig = function () {
              var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
              return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e;
            }),
            (o._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data(a),
                  i = "object" == typeof t ? t : null;
                if ((n || ((n = new o(this, i)), e(this).data(a, n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            (o._clearMenus = function (t) {
              if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                for (var n = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                  var s = o._getParentFromElement(n[i]),
                    l = e(n[i]).data(a),
                    c = { relatedTarget: n[i] };
                  if ((t && "click" === t.type && (c.clickEvent = t), l)) {
                    var u = l._menu;
                    if (e(s).hasClass(p.SHOW) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && e.contains(s, t.target))) {
                      var h = e.Event(d.HIDE, c);
                      e(s).trigger(h),
                        h.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                          n[i].setAttribute("aria-expanded", "false"),
                          e(u).removeClass(p.SHOW),
                          e(s).removeClass(p.SHOW).trigger(e.Event(d.HIDDEN, c)));
                    }
                  }
                }
            }),
            (o._getParentFromElement = function (e) {
              var t,
                i = n.getSelectorFromElement(e);
              return i && (t = document.querySelector(i)), t || e.parentNode;
            }),
            (o._dataApiKeydownHandler = function (t) {
              if (
                (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || e(t.target).closest(f.MENU).length))) : u.test(t.which)) &&
                (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(p.DISABLED))
              ) {
                var n = o._getParentFromElement(this),
                  i = e(n).hasClass(p.SHOW);
                if (i && (!i || (27 !== t.which && 32 !== t.which))) {
                  var r = [].slice.call(n.querySelectorAll(f.VISIBLE_ITEMS));
                  if (0 !== r.length) {
                    var s = r.indexOf(t.target);
                    38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
                  }
                } else {
                  if (27 === t.which) {
                    var a = n.querySelector(f.DATA_TOGGLE);
                    e(a).trigger("focus");
                  }
                  e(this).trigger("click");
                }
              }
            }),
            (c = o),
            (y = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return g;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return m;
                },
              },
            ]),
            (v = null) && i(c.prototype, v),
            y && i(c, y),
            o
          );
        })();
      return (
        e(document)
          .on(d.KEYDOWN_DATA_API, f.DATA_TOGGLE, v._dataApiKeydownHandler)
          .on(d.KEYDOWN_DATA_API, f.MENU, v._dataApiKeydownHandler)
          .on(d.CLICK_DATA_API + " " + d.KEYUP_DATA_API, v._clearMenus)
          .on(d.CLICK_DATA_API, f.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), v._jQueryInterface.call(e(this), "toggle");
          })
          .on(d.CLICK_DATA_API, f.FORM_CHILD, function (e) {
            e.stopPropagation();
          }),
        (e.fn[s] = v._jQueryInterface),
        (e.fn[s].Constructor = v),
        (e.fn[s].noConflict = function () {
          return (e.fn[s] = c), v._jQueryInterface;
        }),
        v
      );
    })(n(0), n(2), n(1));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    /*!
     * Bootstrap modal.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var r = "modal",
        s = ".bs.modal",
        a = e.fn.modal,
        l = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        c = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        u = {
          HIDE: "hide.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        d = { SCROLLABLE: "modal-dialog-scrollable", SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
        p = {
          DIALOG: ".modal-dialog",
          MODAL_BODY: ".modal-body",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
        },
        f = (function () {
          function i(e, t) {
            (this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = e.querySelector(p.DIALOG)),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var a,
            f,
            h,
            g = i.prototype;
          return (
            (g.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e);
            }),
            (g.show = function (t) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                e(this._element).hasClass(d.FADE) && (this._isTransitioning = !0);
                var i = e.Event(u.SHOW, { relatedTarget: t });
                e(this._element).trigger(i),
                  this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(u.CLICK_DISMISS, p.DATA_DISMISS, function (e) {
                      return n.hide(e);
                    }),
                    e(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
                      e(n._element).one(u.MOUSEUP_DISMISS, function (t) {
                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(t);
                    }));
              }
            }),
            (g.hide = function (n) {
              var i = this;
              if ((n && n.preventDefault(), this._isShown && !this._isTransitioning)) {
                var o = e.Event(u.HIDE);
                if ((e(this._element).trigger(o), this._isShown && !o.isDefaultPrevented())) {
                  this._isShown = !1;
                  var r = e(this._element).hasClass(d.FADE);
                  if (
                    (r && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(document).off(u.FOCUSIN),
                      e(this._element).removeClass(d.SHOW),
                      e(this._element).off(u.CLICK_DISMISS),
                      e(this._dialog).off(u.MOUSEDOWN_DISMISS),
                      r)
                  ) {
                    var s = t.getTransitionDurationFromElement(this._element);
                    e(this._element)
                      .one(t.TRANSITION_END, function (e) {
                        return i._hideModal(e);
                      })
                      .emulateTransitionEnd(s);
                  } else this._hideModal();
                }
              }
            }),
            (g.dispose = function () {
              [window, this._element, this._dialog].forEach(function (t) {
                return e(t).off(s);
              }),
                e(document).off(u.FOCUSIN),
                e.removeData(this._element, "bs.modal"),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (g.handleUpdate = function () {
              this._adjustDialog();
            }),
            (g._getConfig = function (e) {
              return (e = o({}, l, e)), t.typeCheckConfig(r, e, c), e;
            }),
            (g._showElement = function (n) {
              var i = this,
                o = e(this._element).hasClass(d.FADE);
              (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                e(this._dialog).hasClass(d.SCROLLABLE) ? (this._dialog.querySelector(p.MODAL_BODY).scrollTop = 0) : (this._element.scrollTop = 0),
                o && t.reflow(this._element),
                e(this._element).addClass(d.SHOW),
                this._config.focus && this._enforceFocus();
              var r = e.Event(u.SHOWN, { relatedTarget: n }),
                s = function () {
                  i._config.focus && i._element.focus(), (i._isTransitioning = !1), e(i._element).trigger(r);
                };
              if (o) {
                var a = t.getTransitionDurationFromElement(this._dialog);
                e(this._dialog).one(t.TRANSITION_END, s).emulateTransitionEnd(a);
              } else s();
            }),
            (g._enforceFocus = function () {
              var t = this;
              e(document)
                .off(u.FOCUSIN)
                .on(u.FOCUSIN, function (n) {
                  document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                });
            }),
            (g._setEscapeEvent = function () {
              var t = this;
              this._isShown && this._config.keyboard
                ? e(this._element).on(u.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
                : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS);
            }),
            (g._setResizeEvent = function () {
              var t = this;
              this._isShown
                ? e(window).on(u.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
                : e(window).off(u.RESIZE);
            }),
            (g._hideModal = function () {
              var t = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  e(document.body).removeClass(d.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN);
                });
            }),
            (g._removeBackdrop = function () {
              this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
            }),
            (g._showBackdrop = function (n) {
              var i = this,
                o = e(this._element).hasClass(d.FADE) ? d.FADE : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = d.BACKDROP),
                    o && this._backdrop.classList.add(o),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(u.CLICK_DISMISS, function (e) {
                      i._ignoreBackdropClick ? (i._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide());
                    }),
                    o && t.reflow(this._backdrop),
                    e(this._backdrop).addClass(d.SHOW),
                    !n)
                )
                  return;
                if (!o) return void n();
                var r = t.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop).one(t.TRANSITION_END, n).emulateTransitionEnd(r);
              } else if (!this._isShown && this._backdrop) {
                e(this._backdrop).removeClass(d.SHOW);
                var s = function () {
                  i._removeBackdrop(), n && n();
                };
                if (e(this._element).hasClass(d.FADE)) {
                  var a = t.getTransitionDurationFromElement(this._backdrop);
                  e(this._backdrop).one(t.TRANSITION_END, s).emulateTransitionEnd(a);
                } else s();
              } else n && n();
            }),
            (g._adjustDialog = function () {
              var e = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }),
            (g._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }),
            (g._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = e.left + e.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (g._setScrollbar = function () {
              var t = this;
              if (this._isBodyOverflowing) {
                var n = [].slice.call(document.querySelectorAll(p.FIXED_CONTENT)),
                  i = [].slice.call(document.querySelectorAll(p.STICKY_CONTENT));
                e(n).each(function (n, i) {
                  var o = i.style.paddingRight,
                    r = e(i).css("padding-right");
                  e(i)
                    .data("padding-right", o)
                    .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                }),
                  e(i).each(function (n, i) {
                    var o = i.style.marginRight,
                      r = e(i).css("margin-right");
                    e(i)
                      .data("margin-right", o)
                      .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                  });
                var o = document.body.style.paddingRight,
                  r = e(document.body).css("padding-right");
                e(document.body)
                  .data("padding-right", o)
                  .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
              }
              e(document.body).addClass(d.OPEN);
            }),
            (g._resetScrollbar = function () {
              var t = [].slice.call(document.querySelectorAll(p.FIXED_CONTENT));
              e(t).each(function (t, n) {
                var i = e(n).data("padding-right");
                e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
              });
              var n = [].slice.call(document.querySelectorAll("" + p.STICKY_CONTENT));
              e(n).each(function (t, n) {
                var i = e(n).data("margin-right");
                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
              });
              var i = e(document.body).data("padding-right");
              e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
            }),
            (g._getScrollbarWidth = function () {
              var e = document.createElement("div");
              (e.className = d.SCROLLBAR_MEASURER), document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (i._jQueryInterface = function (t, n) {
              return this.each(function () {
                var r = e(this).data("bs.modal"),
                  s = o({}, l, e(this).data(), "object" == typeof t && t ? t : {});
                if ((r || ((r = new i(this, s)), e(this).data("bs.modal", r)), "string" == typeof t)) {
                  if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                  r[t](n);
                } else s.show && r.show(n);
              });
            }),
            (a = i),
            (h = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
            ]),
            (f = null) && n(a.prototype, f),
            h && n(a, h),
            i
          );
        })();
      return (
        e(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
          var i,
            r = this,
            s = t.getSelectorFromElement(this);
          s && (i = document.querySelector(s));
          var a = e(i).data("bs.modal") ? "toggle" : o({}, e(i).data(), e(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) || n.preventDefault();
          var l = e(i).one(u.SHOW, function (t) {
            t.isDefaultPrevented() ||
              l.one(u.HIDDEN, function () {
                e(r).is(":visible") && r.focus();
              });
          });
          f._jQueryInterface.call(e(i), a, this);
        }),
        (e.fn.modal = f._jQueryInterface),
        (e.fn.modal.Constructor = f),
        (e.fn.modal.noConflict = function () {
          return (e.fn.modal = a), f._jQueryInterface;
        }),
        f
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap scrollspy.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var o = "scrollspy",
        r = e.fn[o],
        s = { offset: 10, method: "auto", target: "" },
        a = { offset: "number", method: "string", target: "(string|element)" },
        l = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
        u = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        d = { OFFSET: "offset", POSITION: "position" },
        p = (function () {
          function r(t, n) {
            var i = this;
            (this._element = t),
              (this._scrollElement = "BODY" === t.tagName ? window : t),
              (this._config = this._getConfig(n)),
              (this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              e(this._scrollElement).on(l.SCROLL, function (e) {
                return i._process(e);
              }),
              this.refresh(),
              this._process();
          }
          var p,
            f,
            h,
            g = r.prototype;
          return (
            (g.refresh = function () {
              var n = this,
                i = this._scrollElement === this._scrollElement.window ? d.OFFSET : d.POSITION,
                o = "auto" === this._config.method ? i : this._config.method,
                r = o === d.POSITION ? this._getScrollTop() : 0;
              (this._offsets = []), (this._targets = []), (this._scrollHeight = this._getScrollHeight());
              var s = [].slice.call(document.querySelectorAll(this._selector));
              s.map(function (n) {
                var i,
                  s = t.getSelectorFromElement(n);
                if ((s && (i = document.querySelector(s)), i)) {
                  var a = i.getBoundingClientRect();
                  if (a.width || a.height) return [e(i)[o]().top + r, s];
                }
                return null;
              })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (e) {
                  n._offsets.push(e[0]), n._targets.push(e[1]);
                });
            }),
            (g.dispose = function () {
              e.removeData(this._element, "bs.scrollspy"),
                e(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (g._getConfig = function (n) {
              if (
                "string" !=
                typeof (n = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                      )),
                      o.forEach(function (t) {
                        i(e, t, n[t]);
                      });
                  }
                  return e;
                })({}, s, "object" == typeof n && n ? n : {})).target
              ) {
                var r = e(n.target).attr("id");
                r || ((r = t.getUID(o)), e(n.target).attr("id", r)), (n.target = "#" + r);
              }
              return t.typeCheckConfig(o, n, a), n;
            }),
            (g._getScrollTop = function () {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }),
            (g._getScrollHeight = function () {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }),
            (g._getOffsetHeight = function () {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }),
            (g._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                for (var o = this._offsets.length, r = o; r--;) {
                  var s = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);
                  s && this._activate(this._targets[r]);
                }
              }
            }),
            (g._activate = function (t) {
              (this._activeTarget = t), this._clear();
              var n = this._selector.split(",").map(function (e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
              }),
                i = e([].slice.call(document.querySelectorAll(n.join(","))));
              i.hasClass(c.DROPDOWN_ITEM)
                ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), i.addClass(c.ACTIVE))
                : (i.addClass(c.ACTIVE),
                  i
                    .parents(u.NAV_LIST_GROUP)
                    .prev(u.NAV_LINKS + ", " + u.LIST_ITEMS)
                    .addClass(c.ACTIVE),
                  i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c.ACTIVE)),
                e(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: t });
            }),
            (g._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (e) {
                  return e.classList.contains(c.ACTIVE);
                })
                .forEach(function (e) {
                  return e.classList.remove(c.ACTIVE);
                });
            }),
            (r._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data("bs.scrollspy"),
                  i = "object" == typeof t && t;
                if ((n || ((n = new r(this, i)), e(this).data("bs.scrollspy", n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            (p = r),
            (h = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return s;
                },
              },
            ]),
            (f = null) && n(p.prototype, f),
            h && n(p, h),
            r
          );
        })();
      return (
        e(window).on(l.LOAD_DATA_API, function () {
          for (var t = [].slice.call(document.querySelectorAll(u.DATA_SPY)), n = t.length; n--;) {
            var i = e(t[n]);
            p._jQueryInterface.call(i, i.data());
          }
        }),
        (e.fn[o] = p._jQueryInterface),
        (e.fn[o].Constructor = p),
        (e.fn[o].noConflict = function () {
          return (e.fn[o] = r), p._jQueryInterface;
        }),
        p
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap tab.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var i = e.fn.tab,
        o = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        r = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
        s = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          ACTIVE_UL: "> li > .active",
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
        },
        a = (function () {
          function i(e) {
            this._element = e;
          }
          var a,
            l,
            c,
            u = i.prototype;
          return (
            (u.show = function () {
              var n = this;
              if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r.ACTIVE)) || e(this._element).hasClass(r.DISABLED))) {
                var i,
                  a,
                  l = e(this._element).closest(s.NAV_LIST_GROUP)[0],
                  c = t.getSelectorFromElement(this._element);
                if (l) {
                  var u = "UL" === l.nodeName || "OL" === l.nodeName ? s.ACTIVE_UL : s.ACTIVE;
                  a = (a = e.makeArray(e(l).find(u)))[a.length - 1];
                }
                var d = e.Event(o.HIDE, { relatedTarget: this._element }),
                  p = e.Event(o.SHOW, { relatedTarget: a });
                if ((a && e(a).trigger(d), e(this._element).trigger(p), !p.isDefaultPrevented() && !d.isDefaultPrevented())) {
                  c && (i = document.querySelector(c)), this._activate(this._element, l);
                  var f = function () {
                    var t = e.Event(o.HIDDEN, { relatedTarget: n._element }),
                      i = e.Event(o.SHOWN, { relatedTarget: a });
                    e(a).trigger(t), e(n._element).trigger(i);
                  };
                  i ? this._activate(i, i.parentNode, f) : f();
                }
              }
            }),
            (u.dispose = function () {
              e.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (u._activate = function (n, i, o) {
              var a = this,
                l = !i || ("UL" !== i.nodeName && "OL" !== i.nodeName) ? e(i).children(s.ACTIVE) : e(i).find(s.ACTIVE_UL),
                c = l[0],
                u = o && c && e(c).hasClass(r.FADE),
                d = function () {
                  return a._transitionComplete(n, c, o);
                };
              if (c && u) {
                var p = t.getTransitionDurationFromElement(c);
                e(c).removeClass(r.SHOW).one(t.TRANSITION_END, d).emulateTransitionEnd(p);
              } else d();
            }),
            (u._transitionComplete = function (n, i, o) {
              if (i) {
                e(i).removeClass(r.ACTIVE);
                var a = e(i.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                a && e(a).removeClass(r.ACTIVE), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
              }
              if (
                (e(n).addClass(r.ACTIVE),
                  "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
                  t.reflow(n),
                  n.classList.contains(r.FADE) && n.classList.add(r.SHOW),
                  n.parentNode && e(n.parentNode).hasClass(r.DROPDOWN_MENU))
              ) {
                var l = e(n).closest(s.DROPDOWN)[0];
                if (l) {
                  var c = [].slice.call(l.querySelectorAll(s.DROPDOWN_TOGGLE));
                  e(c).addClass(r.ACTIVE);
                }
                n.setAttribute("aria-expanded", !0);
              }
              o && o();
            }),
            (i._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this),
                  o = n.data("bs.tab");
                if ((o || ((o = new i(this)), n.data("bs.tab", o)), "string" == typeof t)) {
                  if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                  o[t]();
                }
              });
            }),
            (a = i),
            (c = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
            ]),
            (l = null) && n(a.prototype, l),
            c && n(a, c),
            i
          );
        })();
      return (
        e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE, function (t) {
          t.preventDefault(), a._jQueryInterface.call(e(this), "show");
        }),
        (e.fn.tab = a._jQueryInterface),
        (e.fn.tab.Constructor = a),
        (e.fn.tab.noConflict = function () {
          return (e.fn.tab = i), a._jQueryInterface;
        }),
        a
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap toast.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var o = "toast",
        r = e.fn.toast,
        s = { CLICK_DISMISS: "click.dismiss.bs.toast", HIDE: "hide.bs.toast", HIDDEN: "hidden.bs.toast", SHOW: "show.bs.toast", SHOWN: "shown.bs.toast" },
        a = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
        l = { animation: "boolean", autohide: "boolean", delay: "number" },
        c = { animation: !0, autohide: !0, delay: 500 },
        u = { DATA_DISMISS: '[data-dismiss="toast"]' },
        d = (function () {
          function r(e, t) {
            (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
          }
          var d,
            p,
            f,
            h = r.prototype;
          return (
            (h.show = function () {
              var n = this;
              e(this._element).trigger(s.SHOW), this._config.animation && this._element.classList.add(a.FADE);
              var i = function () {
                n._element.classList.remove(a.SHOWING), n._element.classList.add(a.SHOW), e(n._element).trigger(s.SHOWN), n._config.autohide && n.hide();
              };
              if ((this._element.classList.remove(a.HIDE), this._element.classList.add(a.SHOWING), this._config.animation)) {
                var o = t.getTransitionDurationFromElement(this._element);
                e(this._element).one(t.TRANSITION_END, i).emulateTransitionEnd(o);
              } else i();
            }),
            (h.hide = function (t) {
              var n = this;
              this._element.classList.contains(a.SHOW) &&
                (e(this._element).trigger(s.HIDE),
                  t
                    ? this._close()
                    : (this._timeout = setTimeout(function () {
                      n._close();
                    }, this._config.delay)));
            }),
            (h.dispose = function () {
              clearTimeout(this._timeout),
                (this._timeout = null),
                this._element.classList.contains(a.SHOW) && this._element.classList.remove(a.SHOW),
                e(this._element).off(s.CLICK_DISMISS),
                e.removeData(this._element, "bs.toast"),
                (this._element = null),
                (this._config = null);
            }),
            (h._getConfig = function (n) {
              return (
                (n = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                      )),
                      o.forEach(function (t) {
                        i(e, t, n[t]);
                      });
                  }
                  return e;
                })({}, c, e(this._element).data(), "object" == typeof n && n ? n : {})),
                t.typeCheckConfig(o, n, this.constructor.DefaultType),
                n
              );
            }),
            (h._setListeners = function () {
              var t = this;
              e(this._element).on(s.CLICK_DISMISS, u.DATA_DISMISS, function () {
                return t.hide(!0);
              });
            }),
            (h._close = function () {
              var n = this,
                i = function () {
                  n._element.classList.add(a.HIDE), e(n._element).trigger(s.HIDDEN);
                };
              if ((this._element.classList.remove(a.SHOW), this._config.animation)) {
                var o = t.getTransitionDurationFromElement(this._element);
                e(this._element).one(t.TRANSITION_END, i).emulateTransitionEnd(o);
              } else i();
            }),
            (r._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this),
                  i = n.data("bs.toast"),
                  o = "object" == typeof t && t;
                if ((i || ((i = new r(this, o)), n.data("bs.toast", i)), "string" == typeof t)) {
                  if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                  i[t](this);
                }
              });
            }),
            (d = r),
            (f = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
              {
                key: "Default",
                get: function () {
                  return c;
                },
              },
            ]),
            (p = null) && n(d.prototype, p),
            f && n(d, f),
            r
          );
        })();
      return (
        (e.fn.toast = d._jQueryInterface),
        (e.fn.toast.Constructor = d),
        (e.fn.toast.noConflict = function () {
          return (e.fn.toast = r), d._jQueryInterface;
        }),
        d
      );
    })(n(0), n(1));
  },
  function (e, t, n) {
    /*!
     * Bootstrap popover.js v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e), (t = t && t.hasOwnProperty("default") ? t.default : t);
      var r = "popover",
        s = ".bs.popover",
        a = e.fn[r],
        l = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        c = o({}, t.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        u = o({}, t.DefaultType, { content: "(string|element|function)" }),
        d = { FADE: "fade", SHOW: "show" },
        p = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        f = {
          HIDE: "hide" + s,
          HIDDEN: "hidden" + s,
          SHOW: "show" + s,
          SHOWN: "shown" + s,
          INSERTED: "inserted" + s,
          CLICK: "click" + s,
          FOCUSIN: "focusin" + s,
          FOCUSOUT: "focusout" + s,
          MOUSEENTER: "mouseenter" + s,
          MOUSELEAVE: "mouseleave" + s,
        },
        h = (function (t) {
          var i, o;
          function a() {
            return t.apply(this, arguments) || this;
          }
          (o = t), ((i = a).prototype = Object.create(o.prototype)), (i.prototype.constructor = i), (i.__proto__ = o);
          var h,
            g,
            m,
            v = a.prototype;
          return (
            (v.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (v.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass("bs-popover-" + t);
            }),
            (v.getTipElement = function () {
              return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
            }),
            (v.setContent = function () {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(p.TITLE), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(p.CONTENT), n), t.removeClass(d.FADE + " " + d.SHOW);
            }),
            (v._getContent = function () {
              return this.element.getAttribute("data-content") || this.config.content;
            }),
            (v._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(l);
              null !== n && n.length > 0 && t.removeClass(n.join(""));
            }),
            (a._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data("bs.popover"),
                  i = "object" == typeof t ? t : null;
                if ((n || !/dispose|hide/.test(t)) && (n || ((n = new a(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            (h = a),
            (m = [
              {
                key: "VERSION",
                get: function () {
                  return "4.3.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return c;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return r;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return f;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return s;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return u;
                },
              },
            ]),
            (g = null) && n(h.prototype, g),
            m && n(h, m),
            a
          );
        })(t);
      return (
        (e.fn[r] = h._jQueryInterface),
        (e.fn[r].Constructor = h),
        (e.fn[r].noConflict = function () {
          return (e.fn[r] = a), h._jQueryInterface;
        }),
        h
      );
    })(n(0), n(3));
  },
  function (e, t) {
    $(document).ready(function () {
      $(document).on("click", ".dropdown-menu", function (e) {
        e.stopPropagation();
      }),
        $(window).width() < 992 &&
        ($(".has-megasubmenu a").click(function () {
          $(this).next(".megasubmenu").toggle(),
            $(".dropdown").on("hide.bs.dropdown", function () {
              $(this).find(".megasubmenu").hide();
            });
        }),
          $(".dropdown-menu a").click(function () {
            $(this).next(".submenu").length && $(this).next(".submenu").toggle(),
              $(".dropdown").on("hide.bs.dropdown", function () {
                $(this).find(".submenu").hide();
              });
          })),
        $("[data-trigger]").on("click", function () {
          var e = $(this).attr("data-trigger");
          $(e).toggleClass("show"), $("body").toggleClass("offcanvas-active"), $(".screen-overlay").toggleClass("show");
        }),
        $(document).on("keydown", function (e) {
          27 === e.keyCode && ($(".mobile-offcanvas").removeClass("show"), $("body").removeClass("overlay-active"));
        }),
        $(".btn-close, .screen-overlay").click(function () {
          $(".screen-overlay").removeClass("show"), $(".mobile-offcanvas").removeClass("show"), $("body").removeClass("offcanvas-active");
        });
    });
  },
  function (e, t, n) {
    var i, o, r;
    !(function (s) {
      "use strict";
      (o = [n(0)]),
        void 0 ===
        (r =
          "function" ==
            typeof (i = function (e) {
              var t = window.Slick || {};
              ((t = (function () {
                var t = 0;
                return function (n, i) {
                  var o,
                    r = this;
                  (r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                      return e('<button type="button" />').text(n + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                  }),
                    (r.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1,
                    }),
                    e.extend(r, r.initials),
                    (r.activeBreakpoint = null),
                    (r.animType = null),
                    (r.animProp = null),
                    (r.breakpoints = []),
                    (r.breakpointSettings = []),
                    (r.cssTransitions = !1),
                    (r.focussed = !1),
                    (r.interrupted = !1),
                    (r.hidden = "hidden"),
                    (r.paused = !0),
                    (r.positionProp = null),
                    (r.respondTo = null),
                    (r.rowCount = 1),
                    (r.shouldClick = !0),
                    (r.$slider = e(n)),
                    (r.$slidesCache = null),
                    (r.transformType = null),
                    (r.transitionType = null),
                    (r.visibilityChange = "visibilitychange"),
                    (r.windowWidth = 0),
                    (r.windowTimer = null),
                    (o = e(n).data("slick") || {}),
                    (r.options = e.extend({}, r.defaults, i, o)),
                    (r.currentSlide = r.options.initialSlide),
                    (r.originalSettings = r.options),
                    void 0 !== document.mozHidden
                      ? ((r.hidden = "mozHidden"), (r.visibilityChange = "mozvisibilitychange"))
                      : void 0 !== document.webkitHidden && ((r.hidden = "webkitHidden"), (r.visibilityChange = "webkitvisibilitychange")),
                    (r.autoPlay = e.proxy(r.autoPlay, r)),
                    (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                    (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                    (r.changeSlide = e.proxy(r.changeSlide, r)),
                    (r.clickHandler = e.proxy(r.clickHandler, r)),
                    (r.selectHandler = e.proxy(r.selectHandler, r)),
                    (r.setPosition = e.proxy(r.setPosition, r)),
                    (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                    (r.dragHandler = e.proxy(r.dragHandler, r)),
                    (r.keyHandler = e.proxy(r.keyHandler, r)),
                    (r.instanceUid = t++),
                    (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    r.registerBreakpoints(),
                    r.init(!0);
                };
              })()).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
              }),
                (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
                  var o = this;
                  if ("boolean" == typeof n) (i = n), (n = null);
                  else if (n < 0 || n >= o.slideCount) return !1;
                  o.unload(),
                    "number" == typeof n
                      ? 0 === n && 0 === o.$slides.length
                        ? e(t).appendTo(o.$slideTrack)
                        : i
                          ? e(t).insertBefore(o.$slides.eq(n))
                          : e(t).insertAfter(o.$slides.eq(n))
                      : !0 === i
                        ? e(t).prependTo(o.$slideTrack)
                        : e(t).appendTo(o.$slideTrack),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    o.$slides.each(function (t, n) {
                      e(n).attr("data-slick-index", t);
                    }),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
                }),
                (t.prototype.animateHeight = function () {
                  var e = this;
                  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                  }
                }),
                (t.prototype.animateSlide = function (t, n) {
                  var i = {},
                    o = this;
                  o.animateHeight(),
                    !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
                    !1 === o.transformsEnabled
                      ? !1 === o.options.vertical
                        ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n)
                        : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n)
                      : !1 === o.cssTransitions
                        ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                          e({ animStart: o.currentLeft }).animate(
                            { animStart: t },
                            {
                              duration: o.options.speed,
                              easing: o.options.easing,
                              step: function (e) {
                                (e = Math.ceil(e)),
                                  !1 === o.options.vertical ? ((i[o.animType] = "translate(" + e + "px, 0px)"), o.$slideTrack.css(i)) : ((i[o.animType] = "translate(0px," + e + "px)"), o.$slideTrack.css(i));
                              },
                              complete: function () {
                                n && n.call();
                              },
                            }
                          ))
                        : (o.applyTransition(),
                          (t = Math.ceil(t)),
                          !1 === o.options.vertical ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                          o.$slideTrack.css(i),
                          n &&
                          setTimeout(function () {
                            o.disableTransition(), n.call();
                          }, o.options.speed));
                }),
                (t.prototype.getNavTarget = function () {
                  var t = this.options.asNavFor;
                  return t && null !== t && (t = e(t).not(this.$slider)), t;
                }),
                (t.prototype.asNavFor = function (t) {
                  var n = this.getNavTarget();
                  null !== n &&
                    "object" == typeof n &&
                    n.each(function () {
                      var n = e(this).slick("getSlick");
                      n.unslicked || n.slideHandler(t, !0);
                    });
                }),
                (t.prototype.applyTransition = function (e) {
                  var t = this,
                    n = {};
                  !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                    !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                }),
                (t.prototype.autoPlay = function () {
                  var e = this;
                  e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
                }),
                (t.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (t.prototype.autoPlayIterator = function () {
                  var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                  e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                      (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                        ? (e.direction = 0)
                        : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                      e.slideHandler(t));
                }),
                (t.prototype.buildArrows = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
                      (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
                      t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                          !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (t.prototype.buildDots = function () {
                  var t,
                    n,
                    i = this;
                  if (!0 === i.options.dots) {
                    for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                    (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (t.prototype.buildOut = function () {
                  var t = this;
                  (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, n) {
                      e(n)
                        .attr("data-slick-index", t)
                        .data("originalStyling", e(n).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
                }),
                (t.prototype.buildRows = function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  if (((i = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 1)) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                      var l = document.createElement("div");
                      for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                          var u = e * s + (t * a.options.slidesPerRow + n);
                          r.get(u) && c.appendChild(r.get(u));
                        }
                        l.appendChild(c);
                      }
                      i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                  }
                }),
                (t.prototype.checkResponsive = function (t, n) {
                  var i,
                    o,
                    r,
                    s = this,
                    a = !1,
                    l = s.$slider.width(),
                    c = window.innerWidth || e(window).width();
                  if (
                    ("window" === s.respondTo ? (r = c) : "slider" === s.respondTo ? (r = l) : "min" === s.respondTo && (r = Math.min(c, l)),
                      s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
                  ) {
                    for (i in ((o = null), s.breakpoints))
                      s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o
                      ? null !== s.activeBreakpoint
                        ? (o !== s.activeBreakpoint || n) &&
                        ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                          (a = o))
                        : ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                          (a = o))
                      : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = o)),
                      t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                  }
                }),
                (t.prototype.changeSlide = function (t, n) {
                  var i,
                    o,
                    r,
                    s = this,
                    a = e(t.currentTarget);
                  switch (
                  (a.is("a") && t.preventDefault(),
                    a.is("li") || (a = a.closest("li")),
                    (r = s.slideCount % s.options.slidesToScroll != 0),
                    (i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
                    t.data.message)
                  ) {
                    case "previous":
                      (o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                      break;
                    case "next":
                      (o = 0 === i ? s.options.slidesToScroll : i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                      break;
                    case "index":
                      var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                      s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (t.prototype.checkNavigable = function (e) {
                  var t, n;
                  if (((t = this.getNavigableIndexes()), (n = 0), e > t[t.length - 1])) e = t[t.length - 1];
                  else
                    for (var i in t) {
                      if (e < t[i]) {
                        e = n;
                        break;
                      }
                      n = t[i];
                    }
                  return e;
                }),
                (t.prototype.cleanUpEvents = function () {
                  var t = this;
                  t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                      !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                      t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                      !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
                }),
                (t.prototype.cleanUpSlideEvents = function () {
                  var t = this;
                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (t.prototype.cleanUpRows = function () {
                  var e,
                    t = this;
                  t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
                }),
                (t.prototype.clickHandler = function (e) {
                  !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
                }),
                (t.prototype.destroy = function (t) {
                  var n = this;
                  n.autoPlayClear(),
                    (n.touchObject = {}),
                    n.cleanUpEvents(),
                    e(".slick-cloned", n.$slider).detach(),
                    n.$dots && n.$dots.remove(),
                    n.$prevArrow &&
                    n.$prevArrow.length &&
                    (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                      n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                    n.$nextArrow &&
                    n.$nextArrow.length &&
                    (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                      n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                    n.$slides &&
                    (n.$slides
                      .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                      .removeAttr("aria-hidden")
                      .removeAttr("data-slick-index")
                      .each(function () {
                        e(this).attr("style", e(this).data("originalStyling"));
                      }),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.detach(),
                      n.$list.detach(),
                      n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    (n.unslicked = !0),
                    t || n.$slider.trigger("destroy", [n]);
                }),
                (t.prototype.disableTransition = function (e) {
                  var t = this,
                    n = {};
                  (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                }),
                (t.prototype.fadeSlide = function (e, t) {
                  var n = this;
                  !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                    : (n.applyTransition(e),
                      n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                      setTimeout(function () {
                        n.disableTransition(e), t.call();
                      }, n.options.speed));
                }),
                (t.prototype.fadeSlideOut = function (e) {
                  var t = this;
                  !1 === t.cssTransitions
                    ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
                    : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                }),
                (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                  var t = this;
                  null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
                }),
                (t.prototype.focusHandler = function () {
                  var t = this;
                  t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                    n.stopImmediatePropagation();
                    var i = e(this);
                    setTimeout(function () {
                      t.options.pauseOnFocus && ((t.focussed = i.is(":focus")), t.autoPlay());
                    }, 0);
                  });
                }),
                (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                  return this.currentSlide;
                }),
                (t.prototype.getDotCount = function () {
                  var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                  if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else for (; t < e.slideCount;) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                  else if (!0 === e.options.centerMode) i = e.slideCount;
                  else if (e.options.asNavFor)
                    for (; t < e.slideCount;) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                  else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                  return i - 1;
                }),
                (t.prototype.getLeft = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this,
                    s = 0;
                  return (
                    (r.slideOffset = 0),
                    (n = r.$slides.first().outerHeight(!0)),
                    !0 === r.options.infinite
                      ? (r.slideCount > r.options.slidesToShow &&
                        ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                          (o = -1),
                          !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                          (s = n * r.options.slidesToShow * o)),
                        r.slideCount % r.options.slidesToScroll != 0 &&
                        e + r.options.slidesToScroll > r.slideCount &&
                        r.slideCount > r.options.slidesToShow &&
                        (e > r.slideCount
                          ? ((r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1), (s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                          : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1), (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
                      : e + r.options.slidesToShow > r.slideCount && ((r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth), (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                    r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (s = 0)),
                    !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
                      ? (r.slideOffset = (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
                      : !0 === r.options.centerMode && !0 === r.options.infinite
                        ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
                        : !0 === r.options.centerMode && ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
                    (t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s),
                    !0 === r.options.variableWidth &&
                    ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow)),
                      (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                      !0 === r.options.centerMode &&
                      ((i =
                        r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                          ? r.$slideTrack.children(".slick-slide").eq(e)
                          : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1)),
                        (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                        (t += (r.$list.width() - i.outerWidth()) / 2))),
                    t
                  );
                }),
                (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                  return this.options[e];
                }),
                (t.prototype.getNavigableIndexes = function () {
                  var e,
                    t = this,
                    n = 0,
                    i = 0,
                    o = [];
                  for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e;)
                    o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                  return o;
                }),
                (t.prototype.getSlick = function () {
                  return this;
                }),
                (t.prototype.getSlideCount = function () {
                  var t,
                    n,
                    i = this;
                  return (
                    (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
                    !0 === i.options.swipeToSlide
                      ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                        if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return (t = r), !1;
                      }),
                        Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
                      : i.options.slidesToScroll
                  );
                }),
                (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                  this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
                }),
                (t.prototype.init = function (t) {
                  var n = this;
                  e(n.$slider).hasClass("slick-initialized") ||
                    (e(n.$slider).addClass("slick-initialized"),
                      n.buildRows(),
                      n.buildOut(),
                      n.setProps(),
                      n.startLoad(),
                      n.loadSlider(),
                      n.initializeEvents(),
                      n.updateArrows(),
                      n.updateDots(),
                      n.checkResponsive(!0),
                      n.focusHandler()),
                    t && n.$slider.trigger("init", [n]),
                    !0 === n.options.accessibility && n.initADA(),
                    n.options.autoplay && ((n.paused = !1), n.autoPlay());
                }),
                (t.prototype.initADA = function () {
                  var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter(function (e) {
                      return e >= 0 && e < t.slideCount;
                    });
                  t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                    (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                      var o = i.indexOf(n);
                      e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== o && e(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + o });
                    }),
                      t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (o) {
                          var r = i[o];
                          e(this).attr({ role: "presentation" }),
                            e(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + o,
                                "aria-controls": "slick-slide" + t.instanceUid + r,
                                "aria-label": o + 1 + " of " + n,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
                  t.activateADA();
                }),
                (t.prototype.initArrowEvents = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                      e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                      !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
                }),
                (t.prototype.initDotEvents = function () {
                  var t = this;
                  !0 === t.options.dots && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (t.prototype.initSlideEvents = function () {
                  var t = this;
                  t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
                }),
                (t.prototype.initializeEvents = function () {
                  var t = this;
                  t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                    !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                    e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                    e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    e(t.setPosition);
                }),
                (t.prototype.initUI = function () {
                  var e = this;
                  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
                }),
                (t.prototype.keyHandler = function (e) {
                  var t = this;
                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                      ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                      : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
                }),
                (t.prototype.lazyLoad = function () {
                  function t(t) {
                    e("img[data-lazy]", t).each(function () {
                      var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                      (s.onload = function () {
                        t.animate({ opacity: 0 }, 100, function () {
                          i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                            t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                            }),
                            r.$slider.trigger("lazyLoaded", [r, t, n]);
                        });
                      }),
                        (s.onerror = function () {
                          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
                        }),
                        (s.src = n);
                    });
                  }
                  var n,
                    i,
                    o,
                    r = this;
                  if (
                    (!0 === r.options.centerMode
                      ? !0 === r.options.infinite
                        ? (o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
                        : ((i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
                      : ((i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
                        (o = Math.ceil(i + r.options.slidesToShow)),
                        !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)),
                      (n = r.$slider.find(".slick-slide").slice(i, o)),
                      "anticipated" === r.options.lazyLoad)
                  )
                    for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), (n = (n = n.add(l.eq(s))).add(l.eq(a))), s--, a++;
                  t(n),
                    r.slideCount <= r.options.slidesToShow
                      ? t(r.$slider.find(".slick-slide"))
                      : r.currentSlide >= r.slideCount - r.options.slidesToShow
                        ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
                        : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
                }),
                (t.prototype.loadSlider = function () {
                  var e = this;
                  e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
                }),
                (t.prototype.next = t.prototype.slickNext = function () {
                  this.changeSlide({ data: { message: "next" } });
                }),
                (t.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (t.prototype.pause = t.prototype.slickPause = function () {
                  this.autoPlayClear(), (this.paused = !0);
                }),
                (t.prototype.play = t.prototype.slickPlay = function () {
                  var e = this;
                  e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
                }),
                (t.prototype.postSlide = function (t) {
                  var n = this;
                  n.unslicked ||
                    (n.$slider.trigger("afterChange", [n, t]),
                      (n.animating = !1),
                      n.slideCount > n.options.slidesToShow && n.setPosition(),
                      (n.swipeLeft = null),
                      n.options.autoplay && n.autoPlay(),
                      !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
                }),
                (t.prototype.prev = t.prototype.slickPrev = function () {
                  this.changeSlide({ data: { message: "previous" } });
                }),
                (t.prototype.preventDefault = function (e) {
                  e.preventDefault();
                }),
                (t.prototype.progressiveLazyLoad = function (t) {
                  t = t || 1;
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                  l.length
                    ? ((n = l.first()),
                      (i = n.attr("data-lazy")),
                      (o = n.attr("data-srcset")),
                      (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((s = document.createElement("img")).onload = function () {
                        o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                          n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                          !0 === a.options.adaptiveHeight && a.setPosition(),
                          a.$slider.trigger("lazyLoaded", [a, n, i]),
                          a.progressiveLazyLoad();
                      }),
                      (s.onerror = function () {
                        t < 3
                          ? setTimeout(function () {
                            a.progressiveLazyLoad(t + 1);
                          }, 500)
                          : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
                      }),
                      (s.src = i))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (t.prototype.refresh = function (t) {
                  var n,
                    i,
                    o = this;
                  (i = o.slideCount - o.options.slidesToShow),
                    !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
                    o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                    (n = o.currentSlide),
                    o.destroy(!0),
                    e.extend(o, o.initials, { currentSlide: n }),
                    o.init(),
                    t || o.changeSlide({ data: { message: "index", index: n } }, !1);
                }),
                (t.prototype.registerBreakpoints = function () {
                  var t,
                    n,
                    i,
                    o = this,
                    r = o.options.responsive || null;
                  if ("array" === e.type(r) && r.length) {
                    for (t in ((o.respondTo = o.options.respondTo || "window"), r))
                      if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
                      }
                    o.breakpoints.sort(function (e, t) {
                      return o.options.mobileFirst ? e - t : t - e;
                    });
                  }
                }),
                (t.prototype.reinit = function () {
                  var t = this;
                  (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
                }),
                (t.prototype.resize = function () {
                  var t = this;
                  e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                      (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                      }, 50)));
                }),
                (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
                  var i = this;
                  if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                  i.unload(),
                    !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
                }),
                (t.prototype.setCSS = function (e) {
                  var t,
                    n,
                    i = this,
                    o = {};
                  !0 === i.options.rtl && (e = -e),
                    (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[i.positionProp] = e),
                    !1 === i.transformsEnabled
                      ? i.$slideTrack.css(o)
                      : ((o = {}),
                        !1 === i.cssTransitions ? ((o[i.animType] = "translate(" + t + ", " + n + ")"), i.$slideTrack.css(o)) : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)));
                }),
                (t.prototype.setDimensions = function () {
                  var e = this;
                  !1 === e.options.vertical
                    ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                      ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                      : !0 === e.options.variableWidth
                        ? e.$slideTrack.width(5e3 * e.slideCount)
                        : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                  var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                  !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
                }),
                (t.prototype.setFade = function () {
                  var t,
                    n = this;
                  n.$slides.each(function (i, o) {
                    (t = n.slideWidth * i * -1),
                      !0 === n.options.rtl
                        ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
                        : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                  }),
                    n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                }),
                (t.prototype.setHeight = function () {
                  var e = this;
                  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                  }
                }),
                (t.prototype.setOption = t.prototype.slickSetOption = function () {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    s = this,
                    a = !1;
                  if (
                    ("object" === e.type(arguments[0])
                      ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
                      : "string" === e.type(arguments[0]) &&
                      ((i = arguments[0]), (o = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (r = "responsive") : void 0 !== arguments[1] && (r = "single")),
                      "single" === r)
                  )
                    s.options[i] = o;
                  else if ("multiple" === r)
                    e.each(i, function (e, t) {
                      s.options[e] = t;
                    });
                  else if ("responsive" === r)
                    for (n in o)
                      if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                      else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[n]);
                      }
                  a && (s.unload(), s.reinit());
                }),
                (t.prototype.setPosition = function () {
                  var e = this;
                  e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
                }),
                (t.prototype.setProps = function () {
                  var e = this,
                    t = document.body.style;
                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform &&
                    ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                    ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                    ((e.animType = "webkitTransform"),
                      (e.transformType = "-webkit-transform"),
                      (e.transitionType = "webkitTransition"),
                      void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                    (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
                }),
                (t.prototype.setSlideClasses = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this;
                  if (((n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode)) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(r.options.slidesToShow / 2)),
                      !0 === r.options.infinite &&
                      (e >= t && e <= r.slideCount - 1 - t
                        ? r.$slides
                          .slice(e - t + s, e + t + 1)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                        : ((i = r.options.slidesToShow + e),
                          n
                            .slice(i - t + 1 + s, i + t + 2)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")),
                        0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
                      r.$slides.eq(e).addClass("slick-center");
                  } else
                    e >= 0 && e <= r.slideCount - r.options.slidesToShow
                      ? r.$slides
                        .slice(e, e + r.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                      : n.length <= r.options.slidesToShow
                        ? n.addClass("slick-active").attr("aria-hidden", "false")
                        : ((o = r.slideCount % r.options.slidesToShow),
                          (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
                          r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                            ? n
                              .slice(i - (r.options.slidesToShow - o), i + o)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                            : n
                              .slice(i, i + r.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad) || r.lazyLoad();
                }),
                (t.prototype.setupInfinite = function () {
                  var t,
                    n,
                    i,
                    o = this;
                  if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((n = null), o.slideCount > o.options.slidesToShow))) {
                    for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)
                      (n = t - 1),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n - o.slideCount)
                          .prependTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1)
                      (n = t),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n + o.slideCount)
                          .appendTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    o.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        e(this).attr("id", "");
                      });
                  }
                }),
                (t.prototype.interrupt = function (e) {
                  e || this.autoPlay(), (this.interrupted = e);
                }),
                (t.prototype.selectHandler = function (t) {
                  var n = this,
                    i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    o = parseInt(i.attr("data-slick-index"));
                  o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
                }),
                (t.prototype.slideHandler = function (e, t, n) {
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l = null,
                    c = this;
                  if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                    if (
                      (!1 === t && c.asNavFor(e),
                        (i = e),
                        (l = c.getLeft(i)),
                        (s = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                    )
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                          !0 !== n
                            ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                            : c.postSlide(i));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                          !0 !== n
                            ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                            : c.postSlide(i));
                    else {
                      if (
                        (c.options.autoplay && clearInterval(c.autoPlayTimer),
                          (o =
                            i < 0
                              ? c.slideCount % c.options.slidesToScroll != 0
                                ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                : c.slideCount + i
                              : i >= c.slideCount
                                ? c.slideCount % c.options.slidesToScroll != 0
                                  ? 0
                                  : i - c.slideCount
                                : i),
                          (c.animating = !0),
                          c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                          (r = c.currentSlide),
                          (c.currentSlide = o),
                          c.setSlideClasses(c.currentSlide),
                          c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                          c.updateDots(),
                          c.updateArrows(),
                          !0 === c.options.fade)
                      )
                        return (
                          !0 !== n
                            ? (c.fadeSlideOut(r),
                              c.fadeSlide(o, function () {
                                c.postSlide(o);
                              }))
                            : c.postSlide(o),
                          void c.animateHeight()
                        );
                      !0 !== n
                        ? c.animateSlide(l, function () {
                          c.postSlide(o);
                        })
                        : c.postSlide(o);
                    }
                }),
                (t.prototype.startLoad = function () {
                  var e = this;
                  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
                }),
                (t.prototype.swipeDirection = function () {
                  var e,
                    t,
                    n,
                    i,
                    o = this;
                  return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                    i <= 45 && i >= 0
                      ? !1 === o.options.rtl
                        ? "left"
                        : "right"
                      : i <= 360 && i >= 315
                        ? !1 === o.options.rtl
                          ? "left"
                          : "right"
                        : i >= 135 && i <= 225
                          ? !1 === o.options.rtl
                            ? "right"
                            : "left"
                          : !0 === o.options.verticalSwiping
                            ? i >= 35 && i <= 135
                              ? "down"
                              : "up"
                            : "vertical"
                  );
                }),
                (t.prototype.swipeEnd = function (e) {
                  var t,
                    n,
                    i = this;
                  if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
                  if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
                  if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                    switch ((n = i.swipeDirection())) {
                      case "left":
                      case "down":
                        (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                    }
                    "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                  } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                }),
                (t.prototype.swipeHandler = function (e) {
                  var t = this;
                  if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                    switch (
                    ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                      (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                      !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                      e.data.action)
                    ) {
                      case "start":
                        t.swipeStart(e);
                        break;
                      case "move":
                        t.swipeMove(e);
                        break;
                      case "end":
                        t.swipeEnd(e);
                    }
                }),
                (t.prototype.swipeMove = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  return (
                    (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                    ((t = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
                      (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
                      (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                      (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                      !a.options.verticalSwiping && !a.swiping && s > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                          (n = a.swipeDirection()),
                          void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                          (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                          !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                          (i = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                          ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                          ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical ? (a.swipeLeft = t + i * o) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o),
                          !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                          !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (t.prototype.swipeStart = function (e) {
                  var t,
                    n = this;
                  if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                  void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
                }),
                (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                  var e = this;
                  null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
                }),
                (t.prototype.unload = function () {
                  var t = this;
                  e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                }),
                (t.prototype.unslick = function (e) {
                  var t = this;
                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                }),
                (t.prototype.updateArrows = function () {
                  var e = this;
                  Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    !e.options.infinite &&
                    (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                      e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                      0 === e.currentSlide
                        ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
                          ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                          : e.currentSlide >= e.slideCount - 1 &&
                          !0 === e.options.centerMode &&
                          (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                }),
                (t.prototype.updateDots = function () {
                  var e = this;
                  null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                      e.$dots
                        .find("li")
                        .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                        .addClass("slick-active"));
                }),
                (t.prototype.visibility = function () {
                  var e = this;
                  e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
                }),
                (e.fn.slick = function () {
                  var e,
                    n,
                    i = this,
                    o = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    s = i.length;
                  for (e = 0; e < s; e++) if (("object" == typeof o || void 0 === o ? (i[e].slick = new t(i[e], o)) : (n = i[e].slick[o].apply(i[e].slick, r)), void 0 !== n)) return n;
                  return i;
                });
            })
            ? i.apply(t, o)
            : i) || (e.exports = r);
    })();
  },
  function (e, t, n) {
    /**
     * sticky-sidebar - A JavaScript plugin for making smart and high performance.
     * @version v3.3.1
     * @link https://github.com/abouolia/sticky-sidebar
     * @author Ahmed Bouhuolia
     * @license The MIT License (MIT)
     **/
    !(function () {
      "use strict";
      var e = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
        t = (function () {
          var t = ".stickySidebar",
            n = { topSpacing: 0, bottomSpacing: 0, containerSelector: !1, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: !0, minWidth: !1 };
          return (function () {
            function i(e) {
              var t = this,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                ((function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, i),
                  (this.options = i.extend(n, o)),
                  (this.sidebar = "string" == typeof e ? document.querySelector(e) : e),
                  void 0 === this.sidebar)
              )
                throw new Error("There is no specific sidebar element.");
              (this.sidebarInner = !1),
                (this.container = this.sidebar.parentElement),
                (this.affixedType = "STATIC"),
                (this.direction = "down"),
                (this.support = { transform: !1, transform3d: !1 }),
                (this._initialized = !1),
                (this._reStyle = !1),
                (this._breakpoint = !1),
                (this._resizeListeners = []),
                (this.dimensions = {
                  translateY: 0,
                  topSpacing: 0,
                  lastTopSpacing: 0,
                  bottomSpacing: 0,
                  lastBottomSpacing: 0,
                  sidebarHeight: 0,
                  sidebarWidth: 0,
                  containerTop: 0,
                  containerHeight: 0,
                  viewportHeight: 0,
                  viewportTop: 0,
                  lastViewportTop: 0,
                }),
                ["handleEvent"].forEach(function (e) {
                  t[e] = t[e].bind(t);
                }),
                this.initialize();
            }
            return (
              e(
                i,
                [
                  {
                    key: "initialize",
                    value: function () {
                      var e = this;
                      if (
                        (this._setSupportFeatures(),
                          this.options.innerWrapperSelector && ((this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector)), null === this.sidebarInner && (this.sidebarInner = !1)),
                          !this.sidebarInner)
                      ) {
                        var t = document.createElement("div");
                        for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                      }
                      if (this.options.containerSelector) {
                        var n = document.querySelectorAll(this.options.containerSelector);
                        if (
                          ((n = Array.prototype.slice.call(n)).forEach(function (t, n) {
                            t.contains(e.sidebar) && (e.container = t);
                          }),
                            !n.length)
                        )
                          throw new Error("The container does not contains on the sidebar.");
                      }
                      "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        (this._initialized = !0);
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function () {
                      window.addEventListener("resize", this, { passive: !0, capture: !1 }),
                        window.addEventListener("scroll", this, { passive: !0, capture: !1 }),
                        this.sidebar.addEventListener("update" + t, this),
                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
                    },
                  },
                  {
                    key: "handleEvent",
                    value: function (e) {
                      this.updateSticky(e);
                    },
                  },
                  {
                    key: "calcDimensions",
                    value: function () {
                      if (!this._breakpoint) {
                        var e = this.dimensions;
                        (e.containerTop = i.offsetRelative(this.container).top),
                          (e.containerHeight = this.container.clientHeight),
                          (e.containerBottom = e.containerTop + e.containerHeight),
                          (e.sidebarHeight = this.sidebarInner.offsetHeight),
                          (e.sidebarWidth = this.sidebar.offsetWidth),
                          (e.viewportHeight = window.innerHeight),
                          this._calcDimensionsWithScroll();
                      }
                    },
                  },
                  {
                    key: "_calcDimensionsWithScroll",
                    value: function () {
                      var e = this.dimensions;
                      (e.sidebarLeft = i.offsetRelative(this.sidebar).left),
                        (e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop),
                        (e.viewportBottom = e.viewportTop + e.viewportHeight),
                        (e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft),
                        (e.topSpacing = this.options.topSpacing),
                        (e.bottomSpacing = this.options.bottomSpacing),
                        "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0),
                        "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType
                          ? e.topSpacing < e.lastTopSpacing && ((e.translateY += e.lastTopSpacing - e.topSpacing), (this._reStyle = !0))
                          : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && ((e.translateY += e.lastBottomSpacing - e.bottomSpacing), (this._reStyle = !0)),
                        (e.lastTopSpacing = e.topSpacing),
                        (e.lastBottomSpacing = e.bottomSpacing);
                    },
                  },
                  {
                    key: "isSidebarFitsViewport",
                    value: function () {
                      return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
                    },
                  },
                  {
                    key: "observeScrollDir",
                    value: function () {
                      var e = this.dimensions;
                      if (e.lastViewportTop !== e.viewportTop) {
                        var t = "down" === this.direction ? Math.min : Math.max;
                        e.viewportTop === t(e.viewportTop, e.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
                      }
                    },
                  },
                  {
                    key: "getAffixType",
                    value: function () {
                      var e = this.dimensions,
                        t = !1;
                      this._calcDimensionsWithScroll();
                      var n = e.sidebarHeight + e.containerTop,
                        i = e.viewportTop + e.topSpacing,
                        o = e.viewportBottom - e.bottomSpacing;
                      return (
                        "up" === this.direction
                          ? i <= e.containerTop
                            ? ((e.translateY = 0), (t = "STATIC"))
                            : i <= e.translateY + e.containerTop
                              ? ((e.translateY = i - e.containerTop), (t = "VIEWPORT-TOP"))
                              : !this.isSidebarFitsViewport() && e.containerTop <= i && (t = "VIEWPORT-UNBOTTOM")
                          : this.isSidebarFitsViewport()
                            ? e.sidebarHeight + i >= e.containerBottom
                              ? ((e.translateY = e.containerBottom - n), (t = "CONTAINER-BOTTOM"))
                              : i >= e.containerTop && ((e.translateY = i - e.containerTop), (t = "VIEWPORT-TOP"))
                            : e.containerBottom <= o
                              ? ((e.translateY = e.containerBottom - n), (t = "CONTAINER-BOTTOM"))
                              : n + e.translateY <= o
                                ? ((e.translateY = o - n), (t = "VIEWPORT-BOTTOM"))
                                : e.containerTop + e.translateY <= i && (t = "VIEWPORT-UNBOTTOM"),
                        (e.translateY = Math.max(0, e.translateY)),
                        (e.translateY = Math.min(e.containerHeight, e.translateY)),
                        (e.lastViewportTop = e.viewportTop),
                        t
                      );
                    },
                  },
                  {
                    key: "_getStyle",
                    value: function (e) {
                      if (void 0 !== e) {
                        var t = { inner: {}, outer: {} },
                          n = this.dimensions;
                        switch (e) {
                          case "VIEWPORT-TOP":
                            t.inner = { position: "fixed", top: n.topSpacing, left: n.sidebarLeft - n.viewportLeft, width: n.sidebarWidth };
                            break;
                          case "VIEWPORT-BOTTOM":
                            t.inner = { position: "fixed", top: "auto", left: n.sidebarLeft, bottom: n.bottomSpacing, width: n.sidebarWidth };
                            break;
                          case "CONTAINER-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                            var o = this._getTranslate(0, n.translateY + "px");
                            t.inner = o ? { transform: o } : { position: "absolute", top: n.translateY, width: n.sidebarWidth };
                        }
                        switch (e) {
                          case "VIEWPORT-TOP":
                          case "VIEWPORT-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                          case "CONTAINER-BOTTOM":
                            t.outer = { height: n.sidebarHeight, position: "relative" };
                        }
                        return (
                          (t.outer = i.extend({ height: "", position: "" }, t.outer)),
                          (t.inner = i.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: this._getTranslate() }, t.inner)),
                          t
                        );
                      }
                    },
                  },
                  {
                    key: "stickyPosition",
                    value: function (e) {
                      if (!this._breakpoint) {
                        e = this._reStyle || e || !1;
                        var n = this.getAffixType(),
                          o = this._getStyle(n);
                        if ((this.affixedType != n || e) && n) {
                          var r = "affix." + n.toLowerCase().replace("viewport-", "") + t;
                          for (var s in (i.eventTrigger(this.sidebar, r), "STATIC" === n ? i.removeClass(this.sidebar, this.options.stickyClass) : i.addClass(this.sidebar, this.options.stickyClass), o.outer))
                            this.sidebar.style[s] = o.outer[s];
                          for (var a in o.inner) {
                            var l = "number" == typeof o.inner[a] ? "px" : "";
                            this.sidebarInner.style[a] = o.inner[a] + l;
                          }
                          var c = "affixed." + n.toLowerCase().replace("viewport-", "") + t;
                          i.eventTrigger(this.sidebar, c);
                        } else this._initialized && (this.sidebarInner.style.left = o.inner.left);
                        this.affixedType = n;
                      }
                    },
                  },
                  {
                    key: "_widthBreakpoint",
                    value: function () {
                      window.innerWidth <= this.options.minWidth
                        ? ((this._breakpoint = !0),
                          (this.affixedType = "STATIC"),
                          this.sidebar.removeAttribute("style"),
                          i.removeClass(this.sidebar, this.options.stickyClass),
                          this.sidebarInner.removeAttribute("style"))
                        : (this._breakpoint = !1);
                    },
                  },
                  {
                    key: "updateSticky",
                    value: function () {
                      var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      this._running ||
                        ((this._running = !0),
                          (function (t) {
                            requestAnimationFrame(function () {
                              switch (t) {
                                case "scroll":
                                  e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                  break;
                                case "resize":
                                default:
                                  e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
                              }
                              e._running = !1;
                            });
                          })(t.type));
                    },
                  },
                  {
                    key: "_setSupportFeatures",
                    value: function () {
                      var e = this.support;
                      (e.transform = i.supportTransform()), (e.transform3d = i.supportTransform(!0));
                    },
                  },
                  {
                    key: "_getTranslate",
                    value: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                      return this.support.transform3d ? "translate3d(" + e + ", " + t + ", " + n + ")" : !!this.support.translate && "translate(" + e + ", " + t + ")";
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      window.removeEventListener("resize", this, { caption: !1 }),
                        window.removeEventListener("scroll", this, { caption: !1 }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        (this.sidebar.style.minHeight = ""),
                        this.sidebar.removeEventListener("update" + t, this);
                      var e = { inner: {}, outer: {} };
                      for (var n in ((e.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }), (e.outer = { height: "", position: "" }), e.outer)) this.sidebar.style[n] = e.outer[n];
                      for (var i in e.inner) this.sidebarInner.style[i] = e.inner[i];
                      this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
                    },
                  },
                ],
                [
                  {
                    key: "supportTransform",
                    value: function (e) {
                      var t = !1,
                        n = e ? "perspective" : "transform",
                        i = n.charAt(0).toUpperCase() + n.slice(1),
                        o = document.createElement("support").style;
                      return (
                        (n + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ").forEach(function (e, n) {
                          if (void 0 !== o[e]) return (t = e), !1;
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "eventTrigger",
                    value: function (e, t, n) {
                      try {
                        var i = new CustomEvent(t, { detail: n });
                      } catch (e) {
                        (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n);
                      }
                      e.dispatchEvent(i);
                    },
                  },
                  {
                    key: "extend",
                    value: function (e, t) {
                      var n = {};
                      for (var i in e) void 0 !== t[i] ? (n[i] = t[i]) : (n[i] = e[i]);
                      return n;
                    },
                  },
                  {
                    key: "offsetRelative",
                    value: function (e) {
                      var t = { left: 0, top: 0 };
                      do {
                        var n = e.offsetTop,
                          i = e.offsetLeft;
                        isNaN(n) || (t.top += n), isNaN(i) || (t.left += i), (e = "BODY" === e.tagName ? e.parentElement : e.offsetParent);
                      } while (e);
                      return t;
                    },
                  },
                  {
                    key: "addClass",
                    value: function (e, t) {
                      i.hasClass(e, t) || (e.classList ? e.classList.add(t) : (e.className += " " + t));
                    },
                  },
                  {
                    key: "removeClass",
                    value: function (e, t) {
                      i.hasClass(e, t) && (e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
                    },
                  },
                  {
                    key: "hasClass",
                    value: function (e, t) {
                      return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
                    },
                  },
                ]
              ),
              i
            );
          })();
        })();
      (window.StickySidebar = t),
        (function () {
          if ("undefined" != typeof window) {
            var e = window.$ || window.jQuery || window.Zepto;
            if (e) {
              (e.fn.stickySidebar = function (n) {
                return this.each(function () {
                  var i = e(this),
                    o = e(this).data("stickySidebar");
                  if ((o || ((o = new t(this, "object" == typeof n && n)), i.data("stickySidebar", o)), "string" == typeof n)) {
                    if (void 0 === o[n] && -1 === ["destroy", "updateSticky"].indexOf(n)) throw new Error('No method named "' + n + '"');
                    o[n]();
                  }
                });
              }),
                (e.fn.stickySidebar.Constructor = t);
              var n = e.fn.stickySidebar;
              e.fn.stickySidebar.noConflict = function () {
                return (e.fn.stickySidebar = n), this;
              };
            }
          }
        })();
    })();
  },
  function (e, t) {
    $(document).ready(function () {
      $(".loading-container").delay(400).fadeOut(),
        $(".animationload").delay(400).fadeOut("fast"),
        $(window).scroll(function () {
          $(this).scrollTop() > 50 ? $(".navbar-soft").addClass("fixed-top") : $(".navbar-soft").removeClass("fixed-top");
        }),
        $(".card__post-carousel").slick({
          slidesToShow: 1,
          autoplay: !0,
          dots: !1,
          lazyLoad: "progressive",
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        }),
        $(".top__news__slider").slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: !0,
          loop: !0,
          dots: !1,
          lazyLoad: "progressive",
          prevArrow: !1,
          nextArrow: !1,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        }),
        $(".article__entry-carousel").slick({
          slidesToShow: 4,
          autoplay: !0,
          dots: !1,
          lazyLoad: "progressive",
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3, infinite: !0, dots: !1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        }),
        $(".article__entry-carousel-three").slick({
          slidesToShow: 3,
          autoplay: !0,
          dots: !1,
          lazyLoad: "progressive",
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 3, infinite: !0, dots: !0 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        }),
        $(".card__post-carousel-height").slick({
          slidesToShow: 4,
          autoplay: !0,
          dots: !0,
          lazyLoad: "progressive",
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3, infinite: !0, dots: !0 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        }),
        $(".wrapp__list__article-responsive-carousel").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: !0,
          dots: !1,
          lazyLoad: "progressive",
          prevArrow: !1,
          nextArrow: !1,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        }),
        $(".trending-news-slider").slick({
          infinite: !0,
          arrows: !0,
          dots: !1,
          autoplay: !0,
          autoplaySpeed: 5e3,
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [{ breakpoint: 768, settings: { dots: !1, arrows: !1 } }],
        }),
        $("li.search > a", this).on("click", function (e) {
          e.preventDefault(), $(".top-search").slideToggle("4000"), $(this).find("i").toggleClass("fa-times");
        }),
        $(".sidebar-sticky").stickySidebar({ topSpacing: 60, bottomSpacing: 60 }),
        $(".dropdown-footer").on("click", function () {
          $(this).toggleClass("is-active").next(".option-content").stop().slideToggle(500);
        }),
        $('a[href^="#"]').on("click", function (e) {
          var t = $(this.getAttribute("href"));
          t.length && (e.preventDefault(), $("html, body").stop().animate({ scrollTop: t.offset().top }, 1e3));
        }),
        $(window).scroll(function () {
          $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200);
        }),
        $("#return-to-top").click(function () {
          $("body,html").animate({ scrollTop: 0 }, 500);
        });
    });
  },
  function (e, t, n) { },
  function (e, t, n) {
    e.exports = n.p + "favicon.ico";
  },
  function (e, t, n) {
    e.exports = n.p + "site.webmanifest";
  },
  function (e, t, n) {
    e.exports = n.p + "icon.png";
  },
  function (e, t, n) {
    e.exports = n.p + "browserconfig.xml";
  },
  function (e, t, n) {
    e.exports = n.p + "tile.png";
  },
  function (e, t, n) {
    e.exports = n.p + "tile-wide.png";
  },
  function (e, t, n) {
    e.exports = n.p + "robots.txt";
  },
  function (e, t, n) {
    e.exports = n.p + "humans.txt";
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
      o = n.n(i);
    window.$ = window.jQuery = o.a;
    n(1), n(4), n(5), n(6), n(7), n(8), n(10), n(11), n(12), n(13), n(3), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25), n(26), n(27);
  },
]);
//# sourceMappingURL=index.bundle.js.map
