!(function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  var n = [],
    i = t.document,
    o = Object.getPrototypeOf,
    s = n.slice,
    r = n.concat,
    a = n.push,
    l = n.indexOf,
    c = {},
    u = c.toString,
    h = c.hasOwnProperty,
    d = h.toString,
    f = d.call(Object),
    p = {};
  function g(t, e) {
    var n = (e = e || i).createElement("script");
    (n.text = t), e.head.appendChild(n).parentNode.removeChild(n);
  }
  var m = function (t, e) {
      return new m.fn.init(t, e);
    },
    v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    y = /^-ms-/,
    b = /-([a-z])/g,
    w = function (t, e) {
      return e.toUpperCase();
    };
  function _(t) {
    var e = !!t && "length" in t && t.length,
      n = m.type(t);
    return (
      "function" !== n &&
      !m.isWindow(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (m.fn = m.prototype =
    {
      jquery: "3.1.1",
      constructor: m,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (t) {
        return null == t
          ? s.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function (t) {
        var e = m.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function (t) {
        return m.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          m.map(this, function (e, n) {
            return t.call(e, n, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var t,
          e,
          n,
          i,
          o,
          s,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || m.isFunction(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (n = r[e]),
                r !== (i = t[e]) &&
                  (c && i && (m.isPlainObject(i) || (o = m.isArray(i)))
                    ? (o
                        ? ((o = !1), (s = n && m.isArray(n) ? n : []))
                        : (s = n && m.isPlainObject(n) ? n : {}),
                      (r[e] = m.extend(c, s, i)))
                    : void 0 !== i && (r[e] = i));
        return r;
      }),
    m.extend({
      expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === m.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        var e = m.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      },
      isPlainObject: function (t) {
        var e, n;
        return (
          !(!t || "[object Object]" !== u.call(t)) &&
          (!(e = o(t)) ||
            ("function" ==
              typeof (n = h.call(e, "constructor") && e.constructor) &&
              d.call(n) === f))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? c[u.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        g(t);
      },
      camelCase: function (t) {
        return t.replace(y, "ms-").replace(b, w);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e) {
        var n,
          i = 0;
        if (_(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(v, "");
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (_(Object(t))
              ? m.merge(n, "string" == typeof t ? [t] : t)
              : a.call(n, t)),
          n
        );
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : l.call(e, t, n);
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
        return (t.length = o), t;
      },
      grep: function (t, e, n) {
        for (var i = [], o = 0, s = t.length, r = !n; o < s; o++)
          !e(t[o], o) !== r && i.push(t[o]);
        return i;
      },
      map: function (t, e, n) {
        var i,
          o,
          s = 0,
          a = [];
        if (_(t))
          for (i = t.length; s < i; s++)
            null != (o = e(t[s], s, n)) && a.push(o);
        else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
        return r.apply([], a);
      },
      guid: 1,
      proxy: function (t, e) {
        var n, i, o;
        if (
          ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
          m.isFunction(t))
        )
          return (
            (i = s.call(arguments, 2)),
            ((o = function () {
              return t.apply(e || this, i.concat(s.call(arguments)));
            }).guid = t.guid =
              t.guid || m.guid++),
            o
          );
      },
      now: Date.now,
      support: p,
    }),
    "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        c["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var x = (function (t) {
    var e,
      n,
      i,
      o,
      s,
      r,
      a,
      l,
      c,
      u,
      h,
      d,
      f,
      p,
      g,
      m,
      v,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      _ = t.document,
      x = 0,
      C = 0,
      T = rt(),
      E = rt(),
      S = rt(),
      D = function (t, e) {
        return t === e && (h = !0), 0;
      },
      A = {}.hasOwnProperty,
      $ = [],
      I = $.pop,
      k = $.push,
      P = $.push,
      N = $.slice,
      O = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      j = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      H =
        "\\[" +
        j +
        "*(" +
        M +
        ")(?:" +
        j +
        "*([*^$|!~]?=)" +
        j +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        j +
        "*\\]",
      F =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        H +
        ")*)|.*)\\)|)",
      R = new RegExp(j + "+", "g"),
      z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
      q = new RegExp("^" + j + "*," + j + "*"),
      W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
      B = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
      Q = new RegExp(F),
      V = new RegExp("^" + M + "$"),
      U = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            j +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            j +
            "*(?:([+-]|)" +
            j +
            "*(\\d+)|))" +
            j +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            j +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            j +
            "*((?:-\\d)?\\d*)" +
            j +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
      tt = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      nt = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      it = function () {
        d();
      },
      ot = yt(
        function (t) {
          return !0 === t.disabled && ("form" in t || "label" in t);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      P.apply(($ = N.call(_.childNodes)), _.childNodes),
        $[_.childNodes.length].nodeType;
    } catch (t) {
      P = {
        apply: $.length
          ? function (t, e) {
              k.apply(t, N.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    function st(t, e, i, o) {
      var s,
        a,
        c,
        u,
        h,
        p,
        v,
        y = e && e.ownerDocument,
        x = e ? e.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
      )
        return i;
      if (
        !o &&
        ((e ? e.ownerDocument || e : _) !== f && d(e), (e = e || f), g)
      ) {
        if (11 !== x && (h = G.exec(t)))
          if ((s = h[1])) {
            if (9 === x) {
              if (!(c = e.getElementById(s))) return i;
              if (c.id === s) return i.push(c), i;
            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s)
              return i.push(c), i;
          } else {
            if (h[2]) return P.apply(i, e.getElementsByTagName(t)), i;
            if (
              (s = h[3]) &&
              n.getElementsByClassName &&
              e.getElementsByClassName
            )
              return P.apply(i, e.getElementsByClassName(s)), i;
          }
        if (n.qsa && !S[t + " "] && (!m || !m.test(t))) {
          if (1 !== x) (y = e), (v = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (u = e.getAttribute("id"))
                ? (u = u.replace(et, nt))
                : e.setAttribute("id", (u = w)),
                a = (p = r(t)).length;
              a--;

            )
              p[a] = "#" + u + " " + vt(p[a]);
            (v = p.join(",")), (y = (Z.test(t) && gt(e.parentNode)) || e);
          }
          if (v)
            try {
              return P.apply(i, y.querySelectorAll(v)), i;
            } catch (t) {
            } finally {
              u === w && e.removeAttribute("id");
            }
        }
      }
      return l(t.replace(z, "$1"), e, i, o);
    }
    function rt() {
      var t = [];
      return function e(n, o) {
        return (
          t.push(n + " ") > i.cacheLength && delete e[t.shift()],
          (e[n + " "] = o)
        );
      };
    }
    function at(t) {
      return (t[w] = !0), t;
    }
    function lt(t) {
      var e = f.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ct(t, e) {
      for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
    }
    function ut(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function ht(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function dt(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && e.type === t;
      };
    }
    function ft(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function pt(t) {
      return at(function (e) {
        return (
          (e = +e),
          at(function (n, i) {
            for (var o, s = t([], n.length, e), r = s.length; r--; )
              n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((n = st.support = {}),
    (s = st.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (d = st.setDocument =
      function (t) {
        var e,
          o,
          r = t ? t.ownerDocument || t : _;
        return r !== f && 9 === r.nodeType && r.documentElement
          ? ((p = (f = r).documentElement),
            (g = !s(f)),
            _ !== f &&
              (o = f.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener("unload", it, !1)
                : o.attachEvent && o.attachEvent("onunload", it)),
            (n.attributes = lt(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (n.getElementsByTagName = lt(function (t) {
              return (
                t.appendChild(f.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = K.test(f.getElementsByClassName)),
            (n.getById = lt(function (t) {
              return (
                (p.appendChild(t).id = w),
                !f.getElementsByName || !f.getElementsByName(w).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (t) {
                  var e = t.replace(J, tt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (t) {
                  var e = t.replace(J, tt);
                  return function (t) {
                    var n =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                  };
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var n,
                      i,
                      o,
                      s = e.getElementById(t);
                    if (s) {
                      if ((n = s.getAttributeNode("id")) && n.value === t)
                        return [s];
                      for (o = e.getElementsByName(t), i = 0; (s = o[i++]); )
                        if ((n = s.getAttributeNode("id")) && n.value === t)
                          return [s];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : n.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return s;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                  return e.getElementsByClassName(t);
              }),
            (v = []),
            (m = []),
            (n.qsa = K.test(f.querySelectorAll)) &&
              (lt(function (t) {
                (p.appendChild(t).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + j + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    m.push("\\[" + j + "*(?:value|" + L + ")"),
                  t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                  t.querySelectorAll(":checked").length || m.push(":checked"),
                  t.querySelectorAll("a#" + w + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              lt(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = f.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    m.push("name" + j + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (p.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (n.matchesSelector = K.test(
              (y =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector)
            )) &&
              lt(function (t) {
                (n.disconnectedMatch = y.call(t, "*")),
                  y.call(t, "[s!='']:x"),
                  v.push("!=", F);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (e = K.test(p.compareDocumentPosition)),
            (b =
              e || K.test(p.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (D = e
              ? function (t, e) {
                  if (t === e) return (h = !0), 0;
                  var i =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!n.sortDetached && e.compareDocumentPosition(t) === i)
                      ? t === f || (t.ownerDocument === _ && b(_, t))
                        ? -1
                        : e === f || (e.ownerDocument === _ && b(_, e))
                        ? 1
                        : u
                        ? O(u, t) - O(u, e)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (h = !0), 0;
                  var n,
                    i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    r = [t],
                    a = [e];
                  if (!o || !s)
                    return t === f
                      ? -1
                      : e === f
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : u
                      ? O(u, t) - O(u, e)
                      : 0;
                  if (o === s) return ut(t, e);
                  for (n = t; (n = n.parentNode); ) r.unshift(n);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (; r[i] === a[i]; ) i++;
                  return i
                    ? ut(r[i], a[i])
                    : r[i] === _
                    ? -1
                    : a[i] === _
                    ? 1
                    : 0;
                }),
            f)
          : f;
      }),
    (st.matches = function (t, e) {
      return st(t, null, null, e);
    }),
    (st.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== f && d(t),
        (e = e.replace(B, "='$1']")),
        n.matchesSelector &&
          g &&
          !S[e + " "] &&
          (!v || !v.test(e)) &&
          (!m || !m.test(e)))
      )
        try {
          var i = y.call(t, e);
          if (
            i ||
            n.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return i;
        } catch (t) {}
      return st(e, f, null, [t]).length > 0;
    }),
    (st.contains = function (t, e) {
      return (t.ownerDocument || t) !== f && d(t), b(t, e);
    }),
    (st.attr = function (t, e) {
      (t.ownerDocument || t) !== f && d(t);
      var o = i.attrHandle[e.toLowerCase()],
        s = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
      return void 0 !== s
        ? s
        : n.attributes || !g
        ? t.getAttribute(e)
        : (s = t.getAttributeNode(e)) && s.specified
        ? s.value
        : null;
    }),
    (st.escape = function (t) {
      return (t + "").replace(et, nt);
    }),
    (st.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (st.uniqueSort = function (t) {
      var e,
        i = [],
        o = 0,
        s = 0;
      if (
        ((h = !n.detectDuplicates),
        (u = !n.sortStable && t.slice(0)),
        t.sort(D),
        h)
      ) {
        for (; (e = t[s++]); ) e === t[s] && (o = i.push(s));
        for (; o--; ) t.splice(i[o], 1);
      }
      return (u = null), t;
    }),
    (o = st.getText =
      function (t) {
        var e,
          n = "",
          i = 0,
          s = t.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
          } else if (3 === s || 4 === s) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += o(e);
        return n;
      }),
    ((i = st.selectors =
      {
        cacheLength: 50,
        createPseudo: at,
        match: U,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(J, tt)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || st.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && st.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              n = !t[6] && t[2];
            return U.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : n &&
                    Q.test(n) &&
                    (e = r(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(J, tt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = T[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) &&
                T(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, e, n) {
            return function (i) {
              var o = st.attr(i, t);
              return null == o
                ? "!=" === e
                : !e ||
                    ((o += ""),
                    "=" === e
                      ? o === n
                      : "!=" === e
                      ? o !== n
                      : "^=" === e
                      ? n && 0 === o.indexOf(n)
                      : "*=" === e
                      ? n && o.indexOf(n) > -1
                      : "$=" === e
                      ? n && o.slice(-n.length) === n
                      : "~=" === e
                      ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1
                      : "|=" === e &&
                        (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (t, e, n, i, o) {
            var s = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === i && 0 === o
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, n, l) {
                  var c,
                    u,
                    h,
                    d,
                    f,
                    p,
                    g = s !== r ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (m) {
                    if (s) {
                      for (; g; ) {
                        for (d = e; (d = d[g]); )
                          if (
                            a
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        p = g = "only" === t && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [r ? m.firstChild : m.lastChild]), r && y)) {
                      for (
                        b =
                          (f =
                            (c =
                              (u =
                                (h = (d = m)[w] || (d[w] = {}))[d.uniqueID] ||
                                (h[d.uniqueID] = {}))[t] || [])[0] === x &&
                            c[1]) && c[2],
                          d = f && m.childNodes[f];
                        (d = (++f && d && d[g]) || (b = f = 0) || p.pop());

                      )
                        if (1 === d.nodeType && ++b && d === e) {
                          u[t] = [x, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (c =
                            (u =
                              (h = (d = e)[w] || (d[w] = {}))[d.uniqueID] ||
                              (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++f && d && d[g]) || (b = f = 0) || p.pop()) &&
                        ((a
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (h = d[w] || (d[w] = {}))[d.uniqueID] ||
                              (h[d.uniqueID] = {}))[t] = [x, b]),
                          d !== e));

                      );
                    return (b -= o) === i || (b % i == 0 && b / i >= 0);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var n,
              o =
                i.pseudos[t] ||
                i.setFilters[t.toLowerCase()] ||
                st.error("unsupported pseudo: " + t);
            return o[w]
              ? o(e)
              : o.length > 1
              ? ((n = [t, t, "", e]),
                i.setFilters.hasOwnProperty(t.toLowerCase())
                  ? at(function (t, n) {
                      for (var i, s = o(t, e), r = s.length; r--; )
                        t[(i = O(t, s[r]))] = !(n[i] = s[r]);
                    })
                  : function (t) {
                      return o(t, 0, n);
                    })
              : o;
          },
        },
        pseudos: {
          not: at(function (t) {
            var e = [],
              n = [],
              i = a(t.replace(z, "$1"));
            return i[w]
              ? at(function (t, e, n, o) {
                  for (var s, r = i(t, null, o, []), a = t.length; a--; )
                    (s = r[a]) && (t[a] = !(e[a] = s));
                })
              : function (t, o, s) {
                  return (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop();
                };
          }),
          has: at(function (t) {
            return function (e) {
              return st(t, e).length > 0;
            };
          }),
          contains: at(function (t) {
            return (
              (t = t.replace(J, tt)),
              function (e) {
                return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: at(function (t) {
            return (
              V.test(t || "") || st.error("unsupported lang: " + t),
              (t = t.replace(J, tt).toLowerCase()),
              function (e) {
                var n;
                do {
                  if (
                    (n = g
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id;
          },
          root: function (t) {
            return t === p;
          },
          focus: function (t) {
            return (
              t === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: ft(!1),
          disabled: ft(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !i.pseudos.empty(t);
          },
          header: function (t) {
            return X.test(t.nodeName);
          },
          input: function (t) {
            return Y.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: pt(function () {
            return [0];
          }),
          last: pt(function (t, e) {
            return [e - 1];
          }),
          eq: pt(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: pt(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: pt(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: pt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
            return t;
          }),
          gt: pt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[e] = ht(e);
    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
    function mt() {}
    function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function yt(t, e, n) {
      var i = e.dir,
        o = e.next,
        s = o || i,
        r = n && "parentNode" === s,
        a = C++;
      return e.first
        ? function (e, n, o) {
            for (; (e = e[i]); ) if (1 === e.nodeType || r) return t(e, n, o);
            return !1;
          }
        : function (e, n, l) {
            var c,
              u,
              h,
              d = [x, a];
            if (l) {
              for (; (e = e[i]); )
                if ((1 === e.nodeType || r) && t(e, n, l)) return !0;
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || r)
                  if (
                    ((u =
                      (h = e[w] || (e[w] = {}))[e.uniqueID] ||
                      (h[e.uniqueID] = {})),
                    o && o === e.nodeName.toLowerCase())
                  )
                    e = e[i] || e;
                  else {
                    if ((c = u[s]) && c[0] === x && c[1] === a)
                      return (d[2] = c[2]);
                    if (((u[s] = d), (d[2] = t(e, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function bt(t) {
      return t.length > 1
        ? function (e, n, i) {
            for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
            return !0;
          }
        : t[0];
    }
    function wt(t, e, n, i, o) {
      for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
      return r;
    }
    function _t(t, e, n, i, o, s) {
      return (
        i && !i[w] && (i = _t(i)),
        o && !o[w] && (o = _t(o, s)),
        at(function (s, r, a, l) {
          var c,
            u,
            h,
            d = [],
            f = [],
            p = r.length,
            g =
              s ||
              (function (t, e, n) {
                for (var i = 0, o = e.length; i < o; i++) st(t, e[i], n);
                return n;
              })(e || "*", a.nodeType ? [a] : a, []),
            m = !t || (!s && e) ? g : wt(g, d, t, a, l),
            v = n ? (o || (s ? t : p || i) ? [] : r) : m;
          if ((n && n(m, v, a, l), i))
            for (c = wt(v, f), i(c, [], a, l), u = c.length; u--; )
              (h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
          if (s) {
            if (o || t) {
              if (o) {
                for (c = [], u = v.length; u--; )
                  (h = v[u]) && c.push((m[u] = h));
                o(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (h = v[u]) &&
                  (c = o ? O(s, h) : d[u]) > -1 &&
                  (s[c] = !(r[c] = h));
            }
          } else (v = wt(v === r ? v.splice(p, v.length) : v)), o ? o(null, r, v, l) : P.apply(r, v);
        })
      );
    }
    function xt(t) {
      for (
        var e,
          n,
          o,
          s = t.length,
          r = i.relative[t[0].type],
          a = r || i.relative[" "],
          l = r ? 1 : 0,
          u = yt(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          h = yt(
            function (t) {
              return O(e, t) > -1;
            },
            a,
            !0
          ),
          d = [
            function (t, n, i) {
              var o =
                (!r && (i || n !== c)) ||
                ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
              return (e = null), o;
            },
          ];
        l < s;
        l++
      )
        if ((n = i.relative[t[l].type])) d = [yt(bt(d), n)];
        else {
          if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
            for (o = ++l; o < s && !i.relative[t[o].type]; o++);
            return _t(
              l > 1 && bt(d),
              l > 1 &&
                vt(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(z, "$1"),
              n,
              l < o && xt(t.slice(l, o)),
              o < s && xt((t = t.slice(o))),
              o < s && vt(t)
            );
          }
          d.push(n);
        }
      return bt(d);
    }
    return (
      (mt.prototype = i.filters = i.pseudos),
      (i.setFilters = new mt()),
      (r = st.tokenize =
        function (t, e) {
          var n,
            o,
            s,
            r,
            a,
            l,
            c,
            u = E[t + " "];
          if (u) return e ? 0 : u.slice(0);
          for (a = t, l = [], c = i.preFilter; a; ) {
            for (r in ((n && !(o = q.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
            (n = !1),
            (o = W.exec(a)) &&
              ((n = o.shift()),
              s.push({ value: n, type: o[0].replace(z, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(o = U[r].exec(a)) ||
                (c[r] && !(o = c[r](o))) ||
                ((n = o.shift()),
                s.push({ value: n, type: r, matches: o }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return e ? a.length : a ? st.error(t) : E(t, l).slice(0);
        }),
      (a = st.compile =
        function (t, e) {
          var n,
            o = [],
            s = [],
            a = S[t + " "];
          if (!a) {
            for (e || (e = r(t)), n = e.length; n--; )
              (a = xt(e[n]))[w] ? o.push(a) : s.push(a);
            (a = S(
              t,
              (function (t, e) {
                var n = e.length > 0,
                  o = t.length > 0,
                  s = function (s, r, a, l, u) {
                    var h,
                      p,
                      m,
                      v = 0,
                      y = "0",
                      b = s && [],
                      w = [],
                      _ = c,
                      C = s || (o && i.find.TAG("*", u)),
                      T = (x += null == _ ? 1 : Math.random() || 0.1),
                      E = C.length;
                    for (
                      u && (c = r === f || r || u);
                      y !== E && null != (h = C[y]);
                      y++
                    ) {
                      if (o && h) {
                        for (
                          p = 0, r || h.ownerDocument === f || (d(h), (a = !g));
                          (m = t[p++]);

                        )
                          if (m(h, r || f, a)) {
                            l.push(h);
                            break;
                          }
                        u && (x = T);
                      }
                      n && ((h = !m && h) && v--, s && b.push(h));
                    }
                    if (((v += y), n && y !== v)) {
                      for (p = 0; (m = e[p++]); ) m(b, w, r, a);
                      if (s) {
                        if (v > 0)
                          for (; y--; ) b[y] || w[y] || (w[y] = I.call(l));
                        w = wt(w);
                      }
                      P.apply(l, w),
                        u &&
                          !s &&
                          w.length > 0 &&
                          v + e.length > 1 &&
                          st.uniqueSort(l);
                    }
                    return u && ((x = T), (c = _)), b;
                  };
                return n ? at(s) : s;
              })(s, o)
            )).selector = t;
          }
          return a;
        }),
      (l = st.select =
        function (t, e, n, o) {
          var s,
            l,
            c,
            u,
            h,
            d = "function" == typeof t && t,
            f = !o && r((t = d.selector || t));
          if (((n = n || []), 1 === f.length)) {
            if (
              (l = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === e.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0]))
                return n;
              d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
            }
            for (
              s = U.needsContext.test(t) ? 0 : l.length;
              s-- && ((c = l[s]), !i.relative[(u = c.type)]);

            )
              if (
                (h = i.find[u]) &&
                (o = h(
                  c.matches[0].replace(J, tt),
                  (Z.test(l[0].type) && gt(e.parentNode)) || e
                ))
              ) {
                if ((l.splice(s, 1), !(t = o.length && vt(l))))
                  return P.apply(n, o), n;
                break;
              }
          }
          return (
            (d || a(t, f))(
              o,
              e,
              !g,
              n,
              !e || (Z.test(t) && gt(e.parentNode)) || e
            ),
            n
          );
        }),
      (n.sortStable = w.split("").sort(D).join("") === w),
      (n.detectDuplicates = !!h),
      d(),
      (n.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
      })),
      lt(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        ct("type|href|height|width", function (t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        lt(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        ct("value", function (t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      lt(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        ct(L, function (t, e, n) {
          var i;
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
        }),
      st
    );
  })(t);
  (m.find = x),
    (m.expr = x.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.uniqueSort = m.unique = x.uniqueSort),
    (m.text = x.getText),
    (m.isXMLDoc = x.isXML),
    (m.contains = x.contains),
    (m.escapeSelector = x.escape);
  var C = function (t, e, n) {
      for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && m(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    T = function (t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    E = m.expr.match.needsContext,
    S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function A(t, e, n) {
    return m.isFunction(e)
      ? m.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        })
      : e.nodeType
      ? m.grep(t, function (t) {
          return (t === e) !== n;
        })
      : "string" != typeof e
      ? m.grep(t, function (t) {
          return l.call(e, t) > -1 !== n;
        })
      : D.test(e)
      ? m.filter(e, t, n)
      : ((e = m.filter(e, t)),
        m.grep(t, function (t) {
          return l.call(e, t) > -1 !== n && 1 === t.nodeType;
        }));
  }
  (m.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? m.find.matchesSelector(i, t)
          ? [i]
          : []
        : m.find.matches(
            t,
            m.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (t) {
        var e,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof t)
          return this.pushStack(
            m(t).filter(function () {
              for (e = 0; e < i; e++) if (m.contains(o[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < i; e++) m.find(t, o[e], n);
        return i > 1 ? m.uniqueSort(n) : n;
      },
      filter: function (t) {
        return this.pushStack(A(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(A(this, t || [], !0));
      },
      is: function (t) {
        return !!A(this, "string" == typeof t && E.test(t) ? m(t) : t || [], !1)
          .length;
      },
    });
  var $,
    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((m.fn.init = function (t, e, n) {
    var o, s;
    if (!t) return this;
    if (((n = n || $), "string" == typeof t)) {
      if (
        !(o =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : I.exec(t)) ||
        (!o[1] && e)
      )
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (o[1]) {
        if (
          ((e = e instanceof m ? e[0] : e),
          m.merge(
            this,
            m.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)
          ),
          S.test(o[1]) && m.isPlainObject(e))
        )
          for (o in e)
            m.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
        return this;
      }
      return (
        (s = i.getElementById(o[2])) && ((this[0] = s), (this.length = 1)), this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : m.isFunction(t)
      ? void 0 !== n.ready
        ? n.ready(t)
        : t(m)
      : m.makeArray(t, this);
  }).prototype = m.fn),
    ($ = m(i));
  var k = /^(?:parents|prev(?:Until|All))/,
    P = { children: !0, contents: !0, next: !0, prev: !0 };
  function N(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  m.fn.extend({
    has: function (t) {
      var e = m(t, this),
        n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) if (m.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var n,
        i = 0,
        o = this.length,
        s = [],
        r = "string" != typeof t && m(t);
      if (!E.test(t))
        for (; i < o; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? r.index(n) > -1
                : 1 === n.nodeType && m.find.matchesSelector(n, t))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(s.length > 1 ? m.uniqueSort(s) : s);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? l.call(m(t), this[0])
          : l.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(m.uniqueSort(m.merge(this.get(), m(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    m.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return C(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return C(t, "parentNode", n);
        },
        next: function (t) {
          return N(t, "nextSibling");
        },
        prev: function (t) {
          return N(t, "previousSibling");
        },
        nextAll: function (t) {
          return C(t, "nextSibling");
        },
        prevAll: function (t) {
          return C(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return C(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return C(t, "previousSibling", n);
        },
        siblings: function (t) {
          return T((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return T(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || m.merge([], t.childNodes);
        },
      },
      function (t, e) {
        m.fn[t] = function (n, i) {
          var o = m.map(this, e, n);
          return (
            "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = m.filter(i, o)),
            this.length > 1 &&
              (P[t] || m.uniqueSort(o), k.test(t) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var O = /[^\x20\t\r\n\f]+/g;
  function L(t) {
    return t;
  }
  function j(t) {
    throw t;
  }
  function M(t, e, n) {
    var i;
    try {
      t && m.isFunction((i = t.promise))
        ? i.call(t).done(e).fail(n)
        : t && m.isFunction((i = t.then))
        ? i.call(t, e, n)
        : e.call(void 0, t);
    } catch (t) {
      n.call(void 0, t);
    }
  }
  (m.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? (function (t) {
            var e = {};
            return (
              m.each(t.match(O) || [], function (t, n) {
                e[n] = !0;
              }),
              e
            );
          })(t)
        : m.extend({}, t);
    var e,
      n,
      i,
      o,
      s = [],
      r = [],
      a = -1,
      l = function () {
        for (o = t.once, i = e = !0; r.length; a = -1)
          for (n = r.shift(); ++a < s.length; )
            !1 === s[a].apply(n[0], n[1]) &&
              t.stopOnFalse &&
              ((a = s.length), (n = !1));
        t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            s &&
              (n && !e && ((a = s.length - 1), r.push(n)),
              (function e(n) {
                m.each(n, function (n, i) {
                  m.isFunction(i)
                    ? (t.unique && c.has(i)) || s.push(i)
                    : i && i.length && "string" !== m.type(i) && e(i);
                });
              })(arguments),
              n && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            m.each(arguments, function (t, e) {
              for (var n; (n = m.inArray(e, s, n)) > -1; )
                s.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? m.inArray(t, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (o = r = []), (s = n = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (o = r = []), n || e || (s = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (t, n) {
          return (
            o ||
              ((n = [t, (n = n || []).slice ? n.slice() : n]),
              r.push(n),
              e || l()),
            this
          );
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
    m.extend({
      Deferred: function (e) {
        var n = [
            [
              "notify",
              "progress",
              m.Callbacks("memory"),
              m.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              m.Callbacks("once memory"),
              m.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              m.Callbacks("once memory"),
              m.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return o.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return m
                .Deferred(function (e) {
                  m.each(n, function (n, i) {
                    var o = m.isFunction(t[i[4]]) && t[i[4]];
                    s[i[1]](function () {
                      var t = o && o.apply(this, arguments);
                      t && m.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[i[0] + "With"](this, o ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function (e, i, o) {
              var s = 0;
              function r(e, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var t, c;
                      if (!(e < s)) {
                        if ((t = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          m.isFunction(c)
                            ? o
                              ? c.call(t, r(s, n, L, o), r(s, n, j, o))
                              : (s++,
                                c.call(
                                  t,
                                  r(s, n, L, o),
                                  r(s, n, j, o),
                                  r(s, n, L, n.notifyWith)
                                ))
                            : (i !== L && ((a = void 0), (l = [t])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    u = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (t) {
                            m.Deferred.exceptionHook &&
                              m.Deferred.exceptionHook(t, u.stackTrace),
                              e + 1 >= s &&
                                (i !== j && ((a = void 0), (l = [t])),
                                n.rejectWith(a, l));
                          }
                        };
                  e
                    ? u()
                    : (m.Deferred.getStackHook &&
                        (u.stackTrace = m.Deferred.getStackHook()),
                      t.setTimeout(u));
                };
              }
              return m
                .Deferred(function (t) {
                  n[0][3].add(r(0, t, m.isFunction(o) ? o : L, t.notifyWith)),
                    n[1][3].add(r(0, t, m.isFunction(e) ? e : L)),
                    n[2][3].add(r(0, t, m.isFunction(i) ? i : j));
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? m.extend(t, o) : o;
            },
          },
          s = {};
        return (
          m.each(n, function (t, e) {
            var r = e[2],
              a = e[5];
            (o[e[1]] = r.add),
              a &&
                r.add(
                  function () {
                    i = a;
                  },
                  n[3 - t][2].disable,
                  n[0][2].lock
                ),
              r.add(e[3].fire),
              (s[e[0]] = function () {
                return (
                  s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[e[0] + "With"] = r.fireWith);
          }),
          o.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          i = Array(n),
          o = s.call(arguments),
          r = m.Deferred(),
          a = function (t) {
            return function (n) {
              (i[t] = this),
                (o[t] = arguments.length > 1 ? s.call(arguments) : n),
                --e || r.resolveWith(i, o);
            };
          };
        if (
          e <= 1 &&
          (M(t, r.done(a(n)).resolve, r.reject),
          "pending" === r.state() || m.isFunction(o[n] && o[n].then))
        )
          return r.then();
        for (; n--; ) M(o[n], a(n), r.reject);
        return r.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (m.Deferred.exceptionHook = function (e, n) {
    t.console &&
      t.console.warn &&
      e &&
      H.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }),
    (m.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var F = m.Deferred();
  function R() {
    i.removeEventListener("DOMContentLoaded", R),
      t.removeEventListener("load", R),
      m.ready();
  }
  (m.fn.ready = function (t) {
    return (
      F.then(t).catch(function (t) {
        m.readyException(t);
      }),
      this
    );
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? m.readyWait++ : m.ready(!0);
      },
      ready: function (t) {
        (!0 === t ? --m.readyWait : m.isReady) ||
          ((m.isReady = !0),
          (!0 !== t && --m.readyWait > 0) || F.resolveWith(i, [m]));
      },
    }),
    (m.ready.then = F.then),
    "complete" === i.readyState ||
    ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? t.setTimeout(m.ready)
      : (i.addEventListener("DOMContentLoaded", R),
        t.addEventListener("load", R));
  var z = function (t, e, n, i, o, s, r) {
      var a = 0,
        l = t.length,
        c = null == n;
      if ("object" === m.type(n))
        for (a in ((o = !0), n)) z(t, e, a, n[a], !0, s, r);
      else if (
        void 0 !== i &&
        ((o = !0),
        m.isFunction(i) || (r = !0),
        c &&
          (r
            ? (e.call(t, i), (e = null))
            : ((c = e),
              (e = function (t, e, n) {
                return c.call(m(t), n);
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : s;
    },
    q = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  function W() {
    this.expando = m.expando + W.uid++;
  }
  (W.uid = 1),
    (W.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            q(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, n) {
        var i,
          o = this.cache(t);
        if ("string" == typeof e) o[m.camelCase(e)] = n;
        else for (i in e) o[m.camelCase(i)] = e[i];
        return o;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][m.camelCase(e)];
      },
      access: function (t, e, n) {
        return void 0 === e || (e && "string" == typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function (t, e) {
        var n,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = m.isArray(e)
              ? e.map(m.camelCase)
              : (e = m.camelCase(e)) in i
              ? [e]
              : e.match(O) || []).length;
            for (; n--; ) delete i[e[n]];
          }
          (void 0 === e || m.isEmptyObject(i)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !m.isEmptyObject(e);
      },
    });
  var B = new W(),
    Q = new W(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function Y(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((i = "data-" + e.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = t.getAttribute(i)))
      ) {
        try {
          n = (function (t) {
            return (
              "true" === t ||
              ("false" !== t &&
                ("null" === t
                  ? null
                  : t === +t + ""
                  ? +t
                  : V.test(t)
                  ? JSON.parse(t)
                  : t))
            );
          })(n);
        } catch (t) {}
        Q.set(t, e, n);
      } else n = void 0;
    return n;
  }
  m.extend({
    hasData: function (t) {
      return Q.hasData(t) || B.hasData(t);
    },
    data: function (t, e, n) {
      return Q.access(t, e, n);
    },
    removeData: function (t, e) {
      Q.remove(t, e);
    },
    _data: function (t, e, n) {
      return B.access(t, e, n);
    },
    _removeData: function (t, e) {
      B.remove(t, e);
    },
  }),
    m.fn.extend({
      data: function (t, e) {
        var n,
          i,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((o = Q.get(s)), 1 === s.nodeType && !B.get(s, "hasDataAttrs"))
          ) {
            for (n = r.length; n--; )
              r[n] &&
                0 === (i = r[n].name).indexOf("data-") &&
                ((i = m.camelCase(i.slice(5))), Y(s, i, o[i]));
            B.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof t
          ? this.each(function () {
              Q.set(this, t);
            })
          : z(
              this,
              function (e) {
                var n;
                if (s && void 0 === e)
                  return void 0 !== (n = Q.get(s, t))
                    ? n
                    : void 0 !== (n = Y(s, t))
                    ? n
                    : void 0;
                this.each(function () {
                  Q.set(this, t, e);
                });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          Q.remove(this, t);
        });
      },
    }),
    m.extend({
      queue: function (t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = B.get(t, e)),
            n &&
              (!i || m.isArray(n)
                ? (i = B.access(t, e, m.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = m.queue(t, e),
          i = n.length,
          o = n.shift(),
          s = m._queueHooks(t, e);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === e && n.unshift("inprogress"),
            delete s.stop,
            o.call(
              t,
              function () {
                m.dequeue(t, e);
              },
              s
            )),
          !i && s && s.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          B.get(t, n) ||
          B.access(t, n, {
            empty: m.Callbacks("once memory").add(function () {
              B.remove(t, [e + "queue", n]);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), n--),
          arguments.length < n
            ? m.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var n = m.queue(this, t, e);
                m._queueHooks(this, t),
                  "fx" === t && "inprogress" !== n[0] && m.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          m.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var n,
          i = 1,
          o = m.Deferred(),
          s = this,
          r = this.length,
          a = function () {
            --i || o.resolveWith(s, [s]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          r--;

        )
          (n = B.get(s[r], t + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(e);
      },
    });
  var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    K = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
    G = ["Top", "Right", "Bottom", "Left"],
    Z = function (t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display &&
          m.contains(t.ownerDocument, t) &&
          "none" === m.css(t, "display"))
      );
    },
    J = function (t, e, n, i) {
      var o,
        s,
        r = {};
      for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
      for (s in ((o = n.apply(t, i || [])), e)) t.style[s] = r[s];
      return o;
    };
  function tt(t, e, n, i) {
    var o,
      s = 1,
      r = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return m.css(t, e, "");
          },
      l = a(),
      c = (n && n[3]) || (m.cssNumber[e] ? "" : "px"),
      u = (m.cssNumber[e] || ("px" !== c && +l)) && K.exec(m.css(t, e));
    if (u && u[3] !== c) {
      (c = c || u[3]), (n = n || []), (u = +l || 1);
      do {
        (u /= s = s || ".5"), m.style(t, e, u + c);
      } while (s !== (s = a() / l) && 1 !== s && --r);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  var et = {};
  function nt(t) {
    var e,
      n = t.ownerDocument,
      i = t.nodeName,
      o = et[i];
    return (
      o ||
      ((e = n.body.appendChild(n.createElement(i))),
      (o = m.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === o && (o = "block"),
      (et[i] = o),
      o)
    );
  }
  function it(t, e) {
    for (var n, i, o = [], s = 0, r = t.length; s < r; s++)
      (i = t[s]).style &&
        ((n = i.style.display),
        e
          ? ("none" === n &&
              ((o[s] = B.get(i, "display") || null),
              o[s] || (i.style.display = "")),
            "" === i.style.display && Z(i) && (o[s] = nt(i)))
          : "none" !== n && ((o[s] = "none"), B.set(i, "display", n)));
    for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
    return t;
  }
  m.fn.extend({
    show: function () {
      return it(this, !0);
    },
    hide: function () {
      return it(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            Z(this) ? m(this).show() : m(this).hide();
          });
    },
  });
  var ot = /^(?:checkbox|radio)$/i,
    st = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    rt = /^$|\/(?:java|ecma)script/i,
    at = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function lt(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && m.nodeName(t, e)) ? m.merge([t], n) : n
    );
  }
  function ct(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
      B.set(t[n], "globalEval", !e || B.get(e[n], "globalEval"));
  }
  (at.optgroup = at.option),
    (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead),
    (at.th = at.td);
  var ut,
    ht,
    dt = /<|&#?\w+;/;
  function ft(t, e, n, i, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        u,
        h = e.createDocumentFragment(),
        d = [],
        f = 0,
        p = t.length;
      f < p;
      f++
    )
      if ((s = t[f]) || 0 === s)
        if ("object" === m.type(s)) m.merge(d, s.nodeType ? [s] : s);
        else if (dt.test(s)) {
          for (
            r = r || h.appendChild(e.createElement("div")),
              a = (st.exec(s) || ["", ""])[1].toLowerCase(),
              l = at[a] || at._default,
              r.innerHTML = l[1] + m.htmlPrefilter(s) + l[2],
              u = l[0];
            u--;

          )
            r = r.lastChild;
          m.merge(d, r.childNodes), ((r = h.firstChild).textContent = "");
        } else d.push(e.createTextNode(s));
    for (h.textContent = "", f = 0; (s = d[f++]); )
      if (i && m.inArray(s, i) > -1) o && o.push(s);
      else if (
        ((c = m.contains(s.ownerDocument, s)),
        (r = lt(h.appendChild(s), "script")),
        c && ct(r),
        n)
      )
        for (u = 0; (s = r[u++]); ) rt.test(s.type || "") && n.push(s);
    return h;
  }
  (ut = i.createDocumentFragment().appendChild(i.createElement("div"))),
    (ht = i.createElement("input")).setAttribute("type", "radio"),
    ht.setAttribute("checked", "checked"),
    ht.setAttribute("name", "t"),
    ut.appendChild(ht),
    (p.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ut.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue);
  var pt = i.documentElement,
    gt = /^key/,
    mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    vt = /^([^.]*)(?:\.(.+)|)/;
  function yt() {
    return !0;
  }
  function bt() {
    return !1;
  }
  function wt() {
    try {
      return i.activeElement;
    } catch (t) {}
  }
  function _t(t, e, n, i, o, s) {
    var r, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
        _t(t, a, n, i, e[a], s);
      return t;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = bt;
    else if (!o) return t;
    return (
      1 === s &&
        ((r = o),
        ((o = function (t) {
          return m().off(t), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = m.guid++))),
      t.each(function () {
        m.event.add(this, e, o, i, n);
      })
    );
  }
  (m.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        d,
        f,
        p,
        g,
        v = B.get(t);
      if (v)
        for (
          n.handler && ((n = (s = n).handler), (o = s.selector)),
            o && m.find.matchesSelector(pt, o),
            n.guid || (n.guid = m.guid++),
            (l = v.events) || (l = v.events = {}),
            (r = v.handle) ||
              (r = v.handle =
                function (e) {
                  return void 0 !== m && m.event.triggered !== e.type
                    ? m.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match(O) || [""]).length;
          c--;

        )
          (f = g = (a = vt.exec(e[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            f &&
              ((h = m.event.special[f] || {}),
              (f = (o ? h.delegateType : h.bindType) || f),
              (h = m.event.special[f] || {}),
              (u = m.extend(
                {
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && m.expr.match.needsContext.test(o),
                  namespace: p.join("."),
                },
                s
              )),
              (d = l[f]) ||
                (((d = l[f] = []).delegateCount = 0),
                (h.setup && !1 !== h.setup.call(t, i, p, r)) ||
                  (t.addEventListener && t.addEventListener(f, r))),
              h.add &&
                (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (m.event.global[f] = !0));
    },
    remove: function (t, e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        d,
        f,
        p,
        g,
        v = B.hasData(t) && B.get(t);
      if (v && (l = v.events)) {
        for (c = (e = (e || "").match(O) || [""]).length; c--; )
          if (
            ((f = g = (a = vt.exec(e[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              h = m.event.special[f] || {},
                d = l[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = s = d.length;
              s--;

            )
              (u = d[s]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (d.splice(s, 1),
                  u.selector && d.delegateCount--,
                  h.remove && h.remove.call(t, u));
            r &&
              !d.length &&
              ((h.teardown && !1 !== h.teardown.call(t, p, v.handle)) ||
                m.removeEvent(t, f, v.handle),
              delete l[f]);
          } else for (f in l) m.event.remove(t, f + e[c], n, i, !0);
        m.isEmptyObject(l) && B.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        n,
        i,
        o,
        s,
        r,
        a = m.event.fix(t),
        l = new Array(arguments.length),
        c = (B.get(this, "events") || {})[a.type] || [],
        u = m.event.special[a.type] || {};
      for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (
        ((a.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, a))
      ) {
        for (
          r = m.event.handlers.call(this, a, c), e = 0;
          (o = r[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
              ((a.handleObj = s),
              (a.data = s.data),
              void 0 !==
                (i = (
                  (m.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        o,
        s,
        r,
        a = [],
        l = e.delegateCount,
        c = t.target;
      if (l && c.nodeType && !("click" === t.type && t.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (s = [], r = {}, n = 0; n < l; n++)
              void 0 === r[(o = (i = e[n]).selector + " ")] &&
                (r[o] = i.needsContext
                  ? m(o, this).index(c) > -1
                  : m.find(o, this, null, [c]).length),
                r[o] && s.push(i);
            s.length && a.push({ elem: c, handlers: s });
          }
      return (
        (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(m.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (t) {
      return t[m.expando] ? t : new m.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== wt() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === wt() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            m.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (t) {
          return m.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (m.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (m.Event = function (t, e) {
      if (!(this instanceof m.Event)) return new m.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? yt
              : bt),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && m.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || m.now()),
        (this[m.expando] = !0);
    }),
    (m.Event.prototype = {
      constructor: m.Event,
      isDefaultPrevented: bt,
      isPropagationStopped: bt,
      isImmediatePropagationStopped: bt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = yt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = yt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = yt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
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
        which: function (t) {
          var e = t.button;
          return null == t.which && gt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && mt.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        },
      },
      m.event.addProp
    ),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        m.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n,
              i = t.relatedTarget,
              o = t.handleObj;
            return (
              (i && (i === this || m.contains(this, i))) ||
                ((t.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (t.type = e)),
              n
            );
          },
        };
      }
    ),
    m.fn.extend({
      on: function (t, e, n, i) {
        return _t(this, t, e, n, i);
      },
      one: function (t, e, n, i) {
        return _t(this, t, e, n, i, 1);
      },
      off: function (t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            m(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
          !1 === n && (n = bt),
          this.each(function () {
            m.event.remove(this, t, n, e);
          })
        );
      },
    });
  var xt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ct = /<script|<style|<link/i,
    Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Dt(t, e) {
    return (
      (m.nodeName(t, "table") &&
        m.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        t.getElementsByTagName("tbody")[0]) ||
      t
    );
  }
  function At(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function $t(t) {
    var e = Et.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function It(t, e) {
    var n, i, o, s, r, a, l, c;
    if (1 === e.nodeType) {
      if (
        B.hasData(t) &&
        ((s = B.access(t)), (r = B.set(e, s)), (c = s.events))
      )
        for (o in (delete r.handle, (r.events = {}), c))
          for (n = 0, i = c[o].length; n < i; n++) m.event.add(e, o, c[o][n]);
      Q.hasData(t) && ((a = Q.access(t)), (l = m.extend({}, a)), Q.set(e, l));
    }
  }
  function kt(t, e, n, i) {
    e = r.apply([], e);
    var o,
      s,
      a,
      l,
      c,
      u,
      h = 0,
      d = t.length,
      f = d - 1,
      v = e[0],
      y = m.isFunction(v);
    if (y || (d > 1 && "string" == typeof v && !p.checkClone && Tt.test(v)))
      return t.each(function (o) {
        var s = t.eq(o);
        y && (e[0] = v.call(this, o, s.html())), kt(s, e, n, i);
      });
    if (
      d &&
      ((s = (o = ft(e, t[0].ownerDocument, !1, t, i)).firstChild),
      1 === o.childNodes.length && (o = s),
      s || i)
    ) {
      for (l = (a = m.map(lt(o, "script"), At)).length; h < d; h++)
        (c = o),
          h !== f &&
            ((c = m.clone(c, !0, !0)), l && m.merge(a, lt(c, "script"))),
          n.call(t[h], c, h);
      if (l)
        for (u = a[a.length - 1].ownerDocument, m.map(a, $t), h = 0; h < l; h++)
          (c = a[h]),
            rt.test(c.type || "") &&
              !B.access(c, "globalEval") &&
              m.contains(u, c) &&
              (c.src
                ? m._evalUrl && m._evalUrl(c.src)
                : g(c.textContent.replace(St, ""), u));
    }
    return t;
  }
  function Pt(t, e, n) {
    for (var i, o = e ? m.filter(e, t) : t, s = 0; null != (i = o[s]); s++)
      n || 1 !== i.nodeType || m.cleanData(lt(i)),
        i.parentNode &&
          (n && m.contains(i.ownerDocument, i) && ct(lt(i, "script")),
          i.parentNode.removeChild(i));
    return t;
  }
  m.extend({
    htmlPrefilter: function (t) {
      return t.replace(xt, "<$1></$2>");
    },
    clone: function (t, e, n) {
      var i,
        o,
        s,
        r,
        a,
        l,
        c,
        u = t.cloneNode(!0),
        h = m.contains(t.ownerDocument, t);
      if (
        !(
          p.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          m.isXMLDoc(t)
        )
      )
        for (r = lt(u), i = 0, o = (s = lt(t)).length; i < o; i++)
          (a = s[i]),
            (l = r[i]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && ot.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (e)
        if (n)
          for (s = s || lt(t), r = r || lt(u), i = 0, o = s.length; i < o; i++)
            It(s[i], r[i]);
        else It(t, u);
      return (
        (r = lt(u, "script")).length > 0 && ct(r, !h && lt(t, "script")), u
      );
    },
    cleanData: function (t) {
      for (var e, n, i, o = m.event.special, s = 0; void 0 !== (n = t[s]); s++)
        if (q(n)) {
          if ((e = n[B.expando])) {
            if (e.events)
              for (i in e.events)
                o[i] ? m.event.remove(n, i) : m.removeEvent(n, i, e.handle);
            n[B.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    m.fn.extend({
      detach: function (t) {
        return Pt(this, t, !0);
      },
      remove: function (t) {
        return Pt(this, t);
      },
      text: function (t) {
        return z(
          this,
          function (t) {
            return void 0 === t
              ? m.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return kt(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Dt(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return kt(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = Dt(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return kt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return kt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (m.cleanData(lt(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return m.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return z(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Ct.test(t) &&
              !at[(st.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = m.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (m.cleanData(lt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return kt(
          this,
          arguments,
          function (e) {
            var n = this.parentNode;
            m.inArray(this, t) < 0 &&
              (m.cleanData(lt(this)), n && n.replaceChild(e, this));
          },
          t
        );
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        m.fn[t] = function (t) {
          for (var n, i = [], o = m(t), s = o.length - 1, r = 0; r <= s; r++)
            (n = r === s ? this : this.clone(!0)),
              m(o[r])[e](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Nt = /^margin/,
    Ot = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
    Lt = function (e) {
      var n = e.ownerDocument.defaultView;
      return (n && n.opener) || (n = t), n.getComputedStyle(e);
    };
  function jt(t, e, n) {
    var i,
      o,
      s,
      r,
      a = t.style;
    return (
      (n = n || Lt(t)) &&
        ("" !== (r = n.getPropertyValue(e) || n[e]) ||
          m.contains(t.ownerDocument, t) ||
          (r = m.style(t, e)),
        !p.pixelMarginRight() &&
          Ot.test(r) &&
          Nt.test(e) &&
          ((i = a.width),
          (o = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = s))),
      void 0 !== r ? r + "" : r
    );
  }
  function Mt(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (l.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (l.innerHTML = ""),
          pt.appendChild(a);
        var e = t.getComputedStyle(l);
        (n = "1%" !== e.top),
          (r = "2px" === e.marginLeft),
          (o = "4px" === e.width),
          (l.style.marginRight = "50%"),
          (s = "4px" === e.marginRight),
          pt.removeChild(a),
          (l = null);
      }
    }
    var n,
      o,
      s,
      r,
      a = i.createElement("div"),
      l = i.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (p.clearCloneStyle = "content-box" === l.style.backgroundClip),
      (a.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      a.appendChild(l),
      m.extend(p, {
        pixelPosition: function () {
          return e(), n;
        },
        boxSizingReliable: function () {
          return e(), o;
        },
        pixelMarginRight: function () {
          return e(), s;
        },
        reliableMarginLeft: function () {
          return e(), r;
        },
      }));
  })();
  var Ht = /^(none|table(?!-c[ea]).+)/,
    Ft = { position: "absolute", visibility: "hidden", display: "block" },
    Rt = { letterSpacing: "0", fontWeight: "400" },
    zt = ["Webkit", "Moz", "ms"],
    qt = i.createElement("div").style;
  function Wt(t) {
    if (t in qt) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--; )
      if ((t = zt[n] + e) in qt) return t;
  }
  function Bt(t, e, n) {
    var i = K.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }
  function Qt(t, e, n, i, o) {
    var s,
      r = 0;
    for (
      s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0;
      s < 4;
      s += 2
    )
      "margin" === n && (r += m.css(t, n + G[s], !0, o)),
        i
          ? ("content" === n && (r -= m.css(t, "padding" + G[s], !0, o)),
            "margin" !== n && (r -= m.css(t, "border" + G[s] + "Width", !0, o)))
          : ((r += m.css(t, "padding" + G[s], !0, o)),
            "padding" !== n &&
              (r += m.css(t, "border" + G[s] + "Width", !0, o)));
    return r;
  }
  function Vt(t, e, n) {
    var i,
      o = !0,
      s = Lt(t),
      r = "border-box" === m.css(t, "boxSizing", !1, s);
    if (
      (t.getClientRects().length && (i = t.getBoundingClientRect()[e]),
      i <= 0 || null == i)
    ) {
      if (
        (((i = jt(t, e, s)) < 0 || null == i) && (i = t.style[e]), Ot.test(i))
      )
        return i;
      (o = r && (p.boxSizingReliable() || i === t.style[e])),
        (i = parseFloat(i) || 0);
    }
    return i + Qt(t, e, n || (r ? "border" : "content"), o, s) + "px";
  }
  function Ut(t, e, n, i, o) {
    return new Ut.prototype.init(t, e, n, i, o);
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = jt(t, "opacity");
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
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          s,
          r,
          a = m.camelCase(e),
          l = t.style;
        if (
          ((e = m.cssProps[a] || (m.cssProps[a] = Wt(a) || a)),
          (r = m.cssHooks[e] || m.cssHooks[a]),
          void 0 === n)
        )
          return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e];
        "string" === (s = typeof n) &&
          (o = K.exec(n)) &&
          o[1] &&
          ((n = tt(t, e, o)), (s = "number")),
          null != n &&
            n == n &&
            ("number" === s &&
              (n += (o && o[3]) || (m.cssNumber[a] ? "" : "px")),
            p.clearCloneStyle ||
              "" !== n ||
              0 !== e.indexOf("background") ||
              (l[e] = "inherit"),
            (r && "set" in r && void 0 === (n = r.set(t, n, i))) || (l[e] = n));
      }
    },
    css: function (t, e, n, i) {
      var o,
        s,
        r,
        a = m.camelCase(e);
      return (
        (e = m.cssProps[a] || (m.cssProps[a] = Wt(a) || a)),
        (r = m.cssHooks[e] || m.cssHooks[a]) &&
          "get" in r &&
          (o = r.get(t, !0, n)),
        void 0 === o && (o = jt(t, e, i)),
        "normal" === o && e in Rt && (o = Rt[e]),
        "" === n || n
          ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
          : o
      );
    },
  }),
    m.each(["height", "width"], function (t, e) {
      m.cssHooks[e] = {
        get: function (t, n, i) {
          if (n)
            return !Ht.test(m.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Vt(t, e, i)
              : J(t, Ft, function () {
                  return Vt(t, e, i);
                });
        },
        set: function (t, n, i) {
          var o,
            s = i && Lt(t),
            r =
              i &&
              Qt(t, e, i, "border-box" === m.css(t, "boxSizing", !1, s), s);
          return (
            r &&
              (o = K.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((t.style[e] = n), (n = m.css(t, e))),
            Bt(0, n, r)
          );
        },
      };
    }),
    (m.cssHooks.marginLeft = Mt(p.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(jt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              J(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (m.cssHooks[t + e] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[t + G[i] + e] = s[i] || s[i - 2] || s[0];
          return o;
        },
      }),
        Nt.test(t) || (m.cssHooks[t + e].set = Bt);
    }),
    m.fn.extend({
      css: function (t, e) {
        return z(
          this,
          function (t, e, n) {
            var i,
              o,
              s = {},
              r = 0;
            if (m.isArray(e)) {
              for (i = Lt(t), o = e.length; r < o; r++)
                s[e[r]] = m.css(t, e[r], !1, i);
              return s;
            }
            return void 0 !== n ? m.style(t, e, n) : m.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
    }),
    (m.Tween = Ut),
    (Ut.prototype = {
      constructor: Ut,
      init: function (t, e, n, i, o, s) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = o || m.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = s || (m.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = Ut.propHooks[this.prop];
        return t && t.get ? t.get(this) : Ut.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = Ut.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                m.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ut.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ut.prototype.init.prototype = Ut.prototype),
    (Ut.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = m.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          m.fx.step[t.prop]
            ? m.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[m.cssProps[t.prop]] && !m.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : m.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (Ut.propHooks.scrollTop = Ut.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (m.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (m.fx = Ut.prototype.init),
    (m.fx.step = {});
  var Yt,
    Xt,
    Kt = /^(?:toggle|show|hide)$/,
    Gt = /queueHooks$/;
  function Zt() {
    Xt && (t.requestAnimationFrame(Zt), m.fx.tick());
  }
  function Jt() {
    return (
      t.setTimeout(function () {
        Yt = void 0;
      }),
      (Yt = m.now())
    );
  }
  function te(t, e) {
    var n,
      i = 0,
      o = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      o["margin" + (n = G[i])] = o["padding" + n] = t;
    return e && (o.opacity = o.width = t), o;
  }
  function ee(t, e, n) {
    for (
      var i,
        o = (ne.tweeners[e] || []).concat(ne.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((i = o[s].call(n, e, t))) return i;
  }
  function ne(t, e, n) {
    var i,
      o,
      s = 0,
      r = ne.prefilters.length,
      a = m.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var e = Yt || Jt(),
            n = Math.max(0, c.startTime + c.duration - e),
            i = 1 - (n / c.duration || 0),
            s = 0,
            r = c.tweens.length;
          s < r;
          s++
        )
          c.tweens[s].run(i);
        return (
          a.notifyWith(t, [c, i, n]),
          i < 1 && r ? n : (a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: m.extend({}, e),
        opts: m.extend(!0, { specialEasing: {}, easing: m.easing._default }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: Yt || Jt(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, n) {
          var i = m.Tween(
            t,
            c.opts,
            e,
            n,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (e) {
          var n = 0,
            i = e ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            e
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
              : a.rejectWith(t, [c, e]),
            this
          );
        },
      }),
      u = c.props;
    for (
      !(function (t, e) {
        var n, i, o, s, r;
        for (n in t)
          if (
            ((o = e[(i = m.camelCase(n))]),
            (s = t[n]),
            m.isArray(s) && ((o = s[1]), (s = t[n] = s[0])),
            n !== i && ((t[i] = s), delete t[n]),
            (r = m.cssHooks[i]) && ("expand" in r))
          )
            for (n in ((s = r.expand(s)), delete t[i], s))
              (n in t) || ((t[n] = s[n]), (e[n] = o));
          else e[i] = o;
      })(u, c.opts.specialEasing);
      s < r;
      s++
    )
      if ((i = ne.prefilters[s].call(c, t, u, c.opts)))
        return (
          m.isFunction(i.stop) &&
            (m._queueHooks(c.elem, c.opts.queue).stop = m.proxy(i.stop, i)),
          i
        );
    return (
      m.map(u, ee, c),
      m.isFunction(c.opts.start) && c.opts.start.call(t, c),
      m.fx.timer(m.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  (m.Animation = m.extend(ne, {
    tweeners: {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e);
          return tt(n.elem, t, K.exec(e), n), n;
        },
      ],
    },
    tweener: function (t, e) {
      m.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(O));
      for (var n, i = 0, o = t.length; i < o; i++)
        (n = t[i]),
          (ne.tweeners[n] = ne.tweeners[n] || []),
          ne.tweeners[n].unshift(e);
    },
    prefilters: [
      function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c,
          u,
          h = "width" in e || "height" in e,
          d = this,
          f = {},
          p = t.style,
          g = t.nodeType && Z(t),
          v = B.get(t, "fxshow");
        for (i in (n.queue ||
          (null == (r = m._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          d.always(function () {
            d.always(function () {
              r.unqueued--, m.queue(t, "fx").length || r.empty.fire();
            });
          })),
        e))
          if (((o = e[i]), Kt.test(o))) {
            if (
              (delete e[i],
              (s = s || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              g = !0;
            }
            f[i] = (v && v[i]) || m.style(t, i);
          }
        if ((l = !m.isEmptyObject(e)) || !m.isEmptyObject(f))
          for (i in (h &&
            1 === t.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = v && v.display) && (c = B.get(t, "display")),
            "none" === (u = m.css(t, "display")) &&
              (c
                ? (u = c)
                : (it([t], !0),
                  (c = t.style.display || c),
                  (u = m.css(t, "display")),
                  it([t]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === m.css(t, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = B.access(t, "fxshow", { display: c })),
              s && (v.hidden = !g),
              g && it([t], !0),
              d.done(function () {
                for (i in (g || it([t]), B.remove(t, "fxshow"), f))
                  m.style(t, i, f[i]);
              })),
              (l = ee(g ? v[i] : 0, i, d)),
              i in v ||
                ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? ne.prefilters.unshift(t) : ne.prefilters.push(t);
    },
  })),
    (m.speed = function (t, e, n) {
      var o =
        t && "object" == typeof t
          ? m.extend({}, t)
          : {
              complete: n || (!n && e) || (m.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !m.isFunction(e) && e),
            };
      return (
        m.fx.off || i.hidden
          ? (o.duration = 0)
          : "number" != typeof o.duration &&
            (o.duration in m.fx.speeds
              ? (o.duration = m.fx.speeds[o.duration])
              : (o.duration = m.fx.speeds._default)),
        (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
        (o.old = o.complete),
        (o.complete = function () {
          m.isFunction(o.old) && o.old.call(this),
            o.queue && m.dequeue(this, o.queue);
        }),
        o
      );
    }),
    m.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(Z)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function (t, e, n, i) {
        var o = m.isEmptyObject(t),
          s = m.speed(e, n, i),
          r = function () {
            var e = ne(this, m.extend({}, t), s);
            (o || B.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        );
      },
      stop: function (t, e, n) {
        var i = function (t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          "string" != typeof t && ((n = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              o = null != t && t + "queueHooks",
              s = m.timers,
              r = B.get(this);
            if (o) r[o] && r[o].stop && i(r[o]);
            else for (o in r) r[o] && r[o].stop && Gt.test(o) && i(r[o]);
            for (o = s.length; o--; )
              s[o].elem !== this ||
                (null != t && s[o].queue !== t) ||
                (s[o].anim.stop(n), (e = !1), s.splice(o, 1));
            (!e && n) || m.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              n = B.get(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              s = m.timers,
              r = i ? i.length : 0;
            for (
              n.finish = !0,
                m.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = s.length;
              e--;

            )
              s[e].elem === this &&
                s[e].queue === t &&
                (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; e < r; e++)
              i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (t, e) {
      var n = m.fn[e];
      m.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t
          ? n.apply(this, arguments)
          : this.animate(te(e, !0), t, i, o);
      };
    }),
    m.each(
      {
        slideDown: te("show"),
        slideUp: te("hide"),
        slideToggle: te("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        m.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var t,
        e = 0,
        n = m.timers;
      for (Yt = m.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || m.fx.stop(), (Yt = void 0);
    }),
    (m.fx.timer = function (t) {
      m.timers.push(t), t() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      Xt ||
        (Xt = t.requestAnimationFrame
          ? t.requestAnimationFrame(Zt)
          : t.setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      t.cancelAnimationFrame ? t.cancelAnimationFrame(Xt) : t.clearInterval(Xt),
        (Xt = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (e, n) {
      return (
        (e = (m.fx && m.fx.speeds[e]) || e),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = t.setTimeout(n, e);
          i.stop = function () {
            t.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var t = i.createElement("input"),
        e = i.createElement("select").appendChild(i.createElement("option"));
      (t.type = "checkbox"),
        (p.checkOn = "" !== t.value),
        (p.optSelected = e.selected),
        ((t = i.createElement("input")).value = "t"),
        (t.type = "radio"),
        (p.radioValue = "t" === t.value);
    })();
  var ie,
    oe = m.expr.attrHandle;
  m.fn.extend({
    attr: function (t, e) {
      return z(this, m.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        m.removeAttr(this, t);
      });
    },
  }),
    m.extend({
      attr: function (t, e, n) {
        var i,
          o,
          s = t.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === t.getAttribute
            ? m.prop(t, e, n)
            : ((1 === s && m.isXMLDoc(t)) ||
                (o =
                  m.attrHooks[e.toLowerCase()] ||
                  (m.expr.match.bool.test(e) ? ie : void 0)),
              void 0 !== n
                ? null === n
                  ? void m.removeAttr(t, e)
                  : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t.setAttribute(e, n + ""), n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : null == (i = m.find.attr(t, e))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!p.radioValue && "radio" === e && m.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var n,
          i = 0,
          o = e && e.match(O);
        if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
      },
    }),
    (ie = {
      set: function (t, e, n) {
        return !1 === e ? m.removeAttr(t, n) : t.setAttribute(n, n), n;
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = oe[e] || m.find.attr;
      oe[e] = function (t, e, i) {
        var o,
          s,
          r = e.toLowerCase();
        return (
          i ||
            ((s = oe[r]),
            (oe[r] = o),
            (o = null != n(t, e, i) ? r : null),
            (oe[r] = s)),
          o
        );
      };
    });
  var se = /^(?:input|select|textarea|button)$/i,
    re = /^(?:a|area)$/i;
  function ae(t) {
    return (t.match(O) || []).join(" ");
  }
  function le(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  m.fn.extend({
    prop: function (t, e) {
      return z(this, m.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[m.propFix[t] || t];
      });
    },
  }),
    m.extend({
      prop: function (t, e, n) {
        var i,
          o,
          s = t.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && m.isXMLDoc(t)) ||
              ((e = m.propFix[e] || e), (o = m.propHooks[e])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                ? i
                : (t[e] = n)
              : o && "get" in o && null !== (i = o.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = m.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : se.test(t.nodeName) || (re.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    p.optSelected ||
      (m.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    m.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (m.isFunction(t))
          return this.each(function (e) {
            m(this).addClass(t.call(this, e, le(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(O) || []; (n = this[l++]); )
            if (((o = le(n)), (i = 1 === n.nodeType && " " + ae(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (a = ae(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (m.isFunction(t))
          return this.each(function (e) {
            m(this).removeClass(t.call(this, e, le(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(O) || []; (n = this[l++]); )
            if (((o = le(n)), (i = 1 === n.nodeType && " " + ae(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                for (; i.indexOf(" " + s + " ") > -1; )
                  i = i.replace(" " + s + " ", " ");
              o !== (a = ae(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : m.isFunction(t)
          ? this.each(function (n) {
              m(this).toggleClass(t.call(this, n, le(this), e), e);
            })
          : this.each(function () {
              var e, i, o, s;
              if ("string" === n)
                for (i = 0, o = m(this), s = t.match(O) || []; (e = s[i++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== n) ||
                  ((e = le(this)) && B.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : B.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + ae(le(n)) + " ").indexOf(e) > -1)
            return !0;
        return !1;
      },
    });
  var ce = /\r/g;
  m.fn.extend({
    val: function (t) {
      var e,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = m.isFunction(t)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? t.call(this, n, m(this).val()) : t)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : m.isArray(o) &&
                  (o = m.map(o, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                m.valHooks[this.type] ||
                m.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (e = m.valHooks[o.type] || m.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (n = e.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(ce, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = m.find.attr(t, "value");
            return null != e ? e : ae(m.text(t));
          },
        },
        select: {
          get: function (t) {
            var e,
              n,
              i,
              o = t.options,
              s = t.selectedIndex,
              r = "select-one" === t.type,
              a = r ? null : [],
              l = r ? s + 1 : o.length;
            for (i = s < 0 ? l : r ? s : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled ||
                  !m.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((e = m(n).val()), r)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var n, i, o = t.options, s = m.makeArray(e), r = o.length;
              r--;

            )
              ((i = o[r]).selected =
                m.inArray(m.valHooks.option.get(i), s) > -1) && (n = !0);
            return n || (t.selectedIndex = -1), s;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (t, e) {
          if (m.isArray(e)) return (t.checked = m.inArray(m(t).val(), e) > -1);
        },
      }),
        p.checkOn ||
          (m.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var ue = /^(?:focusinfocus|focusoutblur)$/;
  m.extend(m.event, {
    trigger: function (e, n, o, s) {
      var r,
        a,
        l,
        c,
        u,
        d,
        f,
        p = [o || i],
        g = h.call(e, "type") ? e.type : e,
        v = h.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = l = o = o || i),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !ue.test(g + m.event.triggered) &&
          (g.indexOf(".") > -1 &&
            ((v = g.split(".")), (g = v.shift()), v.sort()),
          (u = g.indexOf(":") < 0 && "on" + g),
          ((e = e[m.expando]
            ? e
            : new m.Event(g, "object" == typeof e && e)).isTrigger = s ? 2 : 3),
          (e.namespace = v.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = o),
          (n = null == n ? [e] : m.makeArray(n, [e])),
          (f = m.event.special[g] || {}),
          s || !f.trigger || !1 !== f.trigger.apply(o, n)))
      ) {
        if (!s && !f.noBubble && !m.isWindow(o)) {
          for (
            c = f.delegateType || g, ue.test(c + g) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            p.push(a), (l = a);
          l === (o.ownerDocument || i) &&
            p.push(l.defaultView || l.parentWindow || t);
        }
        for (r = 0; (a = p[r++]) && !e.isPropagationStopped(); )
          (e.type = r > 1 ? c : f.bindType || g),
            (d = (B.get(a, "events") || {})[e.type] && B.get(a, "handle")) &&
              d.apply(a, n),
            (d = u && a[u]) &&
              d.apply &&
              q(a) &&
              ((e.result = d.apply(a, n)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = g),
          s ||
            e.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(p.pop(), n)) ||
            !q(o) ||
            (u &&
              m.isFunction(o[g]) &&
              !m.isWindow(o) &&
              ((l = o[u]) && (o[u] = null),
              (m.event.triggered = g),
              o[g](),
              (m.event.triggered = void 0),
              l && (o[u] = l))),
          e.result
        );
      }
    },
    simulate: function (t, e, n) {
      var i = m.extend(new m.Event(), n, { type: t, isSimulated: !0 });
      m.event.trigger(i, null, e);
    },
  }),
    m.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          m.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return m.event.trigger(t, e, n, !0);
      },
    }),
    m.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, e) {
        m.fn[e] = function (t, n) {
          return arguments.length > 0
            ? this.on(e, null, t, n)
            : this.trigger(e);
        };
      }
    ),
    m.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    (p.focusin = "onfocusin" in t),
    p.focusin ||
      m.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = function (t) {
          m.event.simulate(e, t.target, m.event.fix(t));
        };
        m.event.special[e] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = B.access(i, e);
            o || i.addEventListener(t, n, !0), B.access(i, e, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = B.access(i, e) - 1;
            o
              ? B.access(i, e, o)
              : (i.removeEventListener(t, n, !0), B.remove(i, e));
          },
        };
      });
  var he = t.location,
    de = m.now(),
    fe = /\?/;
  m.parseXML = function (e) {
    var n;
    if (!e || "string" != typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        m.error("Invalid XML: " + e),
      n
    );
  };
  var pe = /\[\]$/,
    ge = /\r?\n/g,
    me = /^(?:submit|button|image|reset|file)$/i,
    ve = /^(?:input|select|textarea|keygen)/i;
  function ye(t, e, n, i) {
    var o;
    if (m.isArray(e))
      m.each(e, function (e, o) {
        n || pe.test(t)
          ? i(t, o)
          : ye(
              t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== m.type(e)) i(t, e);
    else for (o in e) ye(t + "[" + o + "]", e[o], n, i);
  }
  (m.param = function (t, e) {
    var n,
      i = [],
      o = function (t, e) {
        var n = m.isFunction(e) ? e() : e;
        i[i.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (m.isArray(t) || (t.jquery && !m.isPlainObject(t)))
      m.each(t, function () {
        o(this.name, this.value);
      });
    else for (n in t) ye(n, t[n], e, o);
    return i.join("&");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = m.prop(this, "elements");
          return t ? m.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              ve.test(this.nodeName) &&
              !me.test(t) &&
              (this.checked || !ot.test(t))
            );
          })
          .map(function (t, e) {
            var n = m(this).val();
            return null == n
              ? null
              : m.isArray(n)
              ? m.map(n, function (t) {
                  return { name: e.name, value: t.replace(ge, "\r\n") };
                })
              : { name: e.name, value: n.replace(ge, "\r\n") };
          })
          .get();
      },
    });
  var be = /%20/g,
    we = /#.*$/,
    _e = /([?&])_=[^&]*/,
    xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ce = /^(?:GET|HEAD)$/,
    Te = /^\/\//,
    Ee = {},
    Se = {},
    De = "*/".concat("*"),
    Ae = i.createElement("a");
  function $e(t) {
    return function (e, n) {
      "string" != typeof e && ((n = e), (e = "*"));
      var i,
        o = 0,
        s = e.toLowerCase().match(O) || [];
      if (m.isFunction(n))
        for (; (i = s[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
            : (t[i] = t[i] || []).push(n);
    };
  }
  function Ie(t, e, n, i) {
    var o = {},
      s = t === Se;
    function r(a) {
      var l;
      return (
        (o[a] = !0),
        m.each(t[a] || [], function (t, a) {
          var c = a(e, n, i);
          return "string" != typeof c || s || o[c]
            ? s
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    return r(e.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function ke(t, e) {
    var n,
      i,
      o = m.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    return i && m.extend(!0, t, i), t;
  }
  (Ae.href = he.href),
    m.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: he.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            he.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": De,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": m.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? ke(ke(t, m.ajaxSettings), e) : ke(m.ajaxSettings, t);
      },
      ajaxPrefilter: $e(Ee),
      ajaxTransport: $e(Se),
      ajax: function (e, n) {
        "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
        var o,
          s,
          r,
          a,
          l,
          c,
          u,
          h,
          d,
          f,
          p = m.ajaxSetup({}, n),
          g = p.context || p,
          v = p.context && (g.nodeType || g.jquery) ? m(g) : m.event,
          y = m.Deferred(),
          b = m.Callbacks("once memory"),
          w = p.statusCode || {},
          _ = {},
          x = {},
          C = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (u) {
                if (!a)
                  for (a = {}; (e = xe.exec(r)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return u ? r : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == u &&
                  ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                  (_[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == u && (p.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (u) T.always(t[T.status]);
                else for (e in t) w[e] = [w[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || C;
              return o && o.abort(e), E(0, e), this;
            },
          };
        if (
          (y.promise(T),
          (p.url = ((e || p.url || he.href) + "").replace(
            Te,
            he.protocol + "//"
          )),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""]),
          null == p.crossDomain)
        ) {
          c = i.createElement("a");
          try {
            (c.href = p.url),
              (c.href = c.href),
              (p.crossDomain =
                Ae.protocol + "//" + Ae.host != c.protocol + "//" + c.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = m.param(p.data, p.traditional)),
          Ie(Ee, p, n, T),
          u)
        )
          return T;
        for (d in ((h = m.event && p.global) &&
          0 == m.active++ &&
          m.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Ce.test(p.type)),
        (s = p.url.replace(we, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(be, "+"))
          : ((f = p.url.slice(s.length)),
            p.data && ((s += (fe.test(s) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((s = s.replace(_e, "$1")),
              (f = (fe.test(s) ? "&" : "?") + "_=" + de++ + f)),
            (p.url = s + f)),
        p.ifModified &&
          (m.lastModified[s] &&
            T.setRequestHeader("If-Modified-Since", m.lastModified[s]),
          m.etag[s] && T.setRequestHeader("If-None-Match", m.etag[s])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", p.contentType),
        T.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + De + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          T.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u))
          return T.abort();
        if (
          ((C = "abort"),
          b.add(p.complete),
          T.done(p.success),
          T.fail(p.error),
          (o = Ie(Se, p, n, T)))
        ) {
          if (((T.readyState = 1), h && v.trigger("ajaxSend", [T, p]), u))
            return T;
          p.async &&
            p.timeout > 0 &&
            (l = t.setTimeout(function () {
              T.abort("timeout");
            }, p.timeout));
          try {
            (u = !1), o.send(_, E);
          } catch (t) {
            if (u) throw t;
            E(-1, t);
          }
        } else E(-1, "No Transport");
        function E(e, n, i, a) {
          var c,
            d,
            f,
            _,
            x,
            C = n;
          u ||
            ((u = !0),
            l && t.clearTimeout(l),
            (o = void 0),
            (r = a || ""),
            (T.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || 304 === e),
            i &&
              (_ = (function (t, e, n) {
                for (
                  var i, o, s, r, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) s = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                      s = o;
                      break;
                    }
                    r || (r = o);
                  }
                  s = s || r;
                }
                if (s) return s !== l[0] && l.unshift(s), n[s];
              })(p, T, i)),
            (_ = (function (t, e, n, i) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
              if (u[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
              for (s = u.shift(); s; )
                if (
                  (t.responseFields[s] && (n[t.responseFields[s]] = e),
                  !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = s),
                  (s = u.shift()))
                )
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                    if (!(r = c[l + " " + s] || c["* " + s]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === s &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[o])
                            : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && t.throws) e = r(e);
                      else
                        try {
                          e = r(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: r
                              ? t
                              : "No conversion from " + l + " to " + s,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(p, _, T, c)),
            c
              ? (p.ifModified &&
                  ((x = T.getResponseHeader("Last-Modified")) &&
                    (m.lastModified[s] = x),
                  (x = T.getResponseHeader("etag")) && (m.etag[s] = x)),
                204 === e || "HEAD" === p.type
                  ? (C = "nocontent")
                  : 304 === e
                  ? (C = "notmodified")
                  : ((C = _.state), (d = _.data), (c = !(f = _.error))))
              : ((f = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (n || C) + ""),
            c ? y.resolveWith(g, [d, C, T]) : y.rejectWith(g, [T, C, f]),
            T.statusCode(w),
            (w = void 0),
            h && v.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? d : f]),
            b.fireWith(g, [T, C]),
            h &&
              (v.trigger("ajaxComplete", [T, p]),
              --m.active || m.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (t, e, n) {
        return m.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return m.get(t, void 0, e, "script");
      },
    }),
    m.each(["get", "post"], function (t, e) {
      m[e] = function (t, n, i, o) {
        return (
          m.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
          m.ajax(
            m.extend(
              { url: t, type: e, dataType: o, data: n, success: i },
              m.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (m._evalUrl = function (t) {
      return m.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (m.isFunction(t) && (t = t.call(this[0])),
            (e = m(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return m.isFunction(t)
          ? this.each(function (e) {
              m(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = m(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = m.isFunction(t);
        return this.each(function (n) {
          m(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              m(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (m.expr.pseudos.hidden = function (t) {
      return !m.expr.pseudos.visible(t);
    }),
    (m.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (m.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Pe = { 0: 200, 1223: 204 },
    Ne = m.ajaxSettings.xhr();
  (p.cors = !!Ne && "withCredentials" in Ne),
    (p.ajax = Ne = !!Ne),
    m.ajaxTransport(function (e) {
      var n, i;
      if (p.cors || (Ne && !e.crossDomain))
        return {
          send: function (o, s) {
            var r,
              a = e.xhr();
            if (
              (a.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (r in e.xhrFields) a[r] = e.xhrFields[r];
            for (r in (e.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(e.mimeType),
            e.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              a.setRequestHeader(r, o[r]);
            (n = function (t) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.onreadystatechange =
                      null),
                  "abort" === t
                    ? a.abort()
                    : "error" === t
                    ? "number" != typeof a.status
                      ? s(0, "error")
                      : s(a.status, a.statusText)
                    : s(
                        Pe[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      t.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (n) throw t;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    m.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    m.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return m.globalEval(t), t;
        },
      },
    }),
    m.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    m.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain)
        return {
          send: function (o, s) {
            (e = m("<script>")
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (n = function (t) {
                  e.remove(),
                    (n = null),
                    t && s("error" === t.type ? 404 : 200, t.type);
                })
              )),
              i.head.appendChild(e[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Oe,
    Le = [],
    je = /(=)\?(?=&|$)|\?\?/;
  function Me(t) {
    return m.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Le.pop() || m.expando + "_" + de++;
      return (this[t] = !0), t;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (e, n, i) {
      var o,
        s,
        r,
        a =
          !1 !== e.jsonp &&
          (je.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              je.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (o = e.jsonpCallback =
            m.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(je, "$1" + o))
            : !1 !== e.jsonp &&
              (e.url += (fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function () {
            return r || m.error(o + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (s = t[o]),
          (t[o] = function () {
            r = arguments;
          }),
          i.always(function () {
            void 0 === s ? m(t).removeProp(o) : (t[o] = s),
              e[o] && ((e.jsonpCallback = n.jsonpCallback), Le.push(o)),
              r && m.isFunction(s) && s(r[0]),
              (r = s = void 0);
          }),
          "script"
        );
    }),
    (p.createHTMLDocument =
      (((Oe = i.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Oe.childNodes.length)),
    (m.parseHTML = function (t, e, n) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((n = e), (e = !1)),
          e ||
            (p.createHTMLDocument
              ? (((o = (e =
                  i.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = i.location.href),
                e.head.appendChild(o))
              : (e = i)),
          (r = !n && []),
          (s = S.exec(t))
            ? [e.createElement(s[1])]
            : ((s = ft([t], e, r)),
              r && r.length && m(r).remove(),
              m.merge([], s.childNodes)));
      var o, s, r;
    }),
    (m.fn.load = function (t, e, n) {
      var i,
        o,
        s,
        r = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((i = ae(t.slice(a))), (t = t.slice(0, a))),
        m.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        r.length > 0 &&
          m
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function (t) {
              (s = arguments),
                r.html(i ? m("<div>").append(m.parseHTML(t)).find(i) : t);
            })
            .always(
              n &&
                function (t, e) {
                  r.each(function () {
                    n.apply(this, s || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        m.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (m.expr.pseudos.animated = function (t) {
      return m.grep(m.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (m.offset = {
      setOffset: function (t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c = m.css(t, "position"),
          u = m(t),
          h = {};
        "static" === c && (t.style.position = "relative"),
          (a = u.offset()),
          (s = m.css(t, "top")),
          (l = m.css(t, "left")),
          ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1
            ? ((r = (i = u.position()).top), (o = i.left))
            : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
          m.isFunction(e) && (e = e.call(t, n, m.extend({}, a))),
          null != e.top && (h.top = e.top - a.top + r),
          null != e.left && (h.left = e.left - a.left + o),
          "using" in e ? e.using.call(t, h) : u.css(h);
      },
    }),
    m.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                m.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i,
          o,
          s = this[0];
        return s
          ? s.getClientRects().length
            ? (i = s.getBoundingClientRect()).width || i.height
              ? ((n = Me((o = s.ownerDocument))),
                (e = o.documentElement),
                {
                  top: i.top + n.pageYOffset - e.clientTop,
                  left: i.left + n.pageXOffset - e.clientLeft,
                })
              : i
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === m.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                m.nodeName(t[0], "html") || (i = t.offset()),
                (i = {
                  top: i.top + m.css(t[0], "borderTopWidth", !0),
                  left: i.left + m.css(t[0], "borderLeftWidth", !0),
                })),
            {
              top: e.top - i.top - m.css(n, "marginTop", !0),
              left: e.left - i.left - m.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === m.css(t, "position");

          )
            t = t.offsetParent;
          return t || pt;
        });
      },
    }),
    m.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var n = "pageYOffset" === e;
        m.fn[t] = function (i) {
          return z(
            this,
            function (t, i, o) {
              var s = Me(t);
              if (void 0 === o) return s ? s[e] : t[i];
              s
                ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset)
                : (t[i] = o);
            },
            t,
            i,
            arguments.length
          );
        };
      }
    ),
    m.each(["top", "left"], function (t, e) {
      m.cssHooks[e] = Mt(p.pixelPosition, function (t, n) {
        if (n)
          return (n = jt(t, e)), Ot.test(n) ? m(t).position()[e] + "px" : n;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (t, e) {
      m.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (n, i) {
          m.fn[i] = function (o, s) {
            var r = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === s ? "margin" : "border");
            return z(
              this,
              function (e, n, o) {
                var s;
                return m.isWindow(e)
                  ? 0 === i.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((s = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      s["scroll" + t],
                      e.body["offset" + t],
                      s["offset" + t],
                      s["client" + t]
                    ))
                  : void 0 === o
                  ? m.css(e, n, a)
                  : m.style(e, n, o, a);
              },
              e,
              r ? o : void 0,
              r
            );
          };
        }
      );
    }),
    m.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
    }),
    (m.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var He = t.jQuery,
    Fe = t.$;
  return (
    (m.noConflict = function (e) {
      return t.$ === m && (t.$ = Fe), e && t.jQuery === m && (t.jQuery = He), m;
    }),
    e || (t.jQuery = t.$ = m),
    m
  );
}),
  (function (t, e, n, i) {
    "use strict";
    function o(t, e) {
      var i,
        o,
        s,
        r = [],
        a = 0;
      (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
        (e = e || {}),
        t && t.data && (e = f(t.data.options, e)),
        (i = e.$target || n(t.currentTarget).trigger("blur")),
        ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
          (e.selector
            ? (r = n(e.selector))
            : (o = i.attr("data-fancybox") || "")
            ? (r = (r = t.data ? t.data.items : []).length
                ? r.filter('[data-fancybox="' + o + '"]')
                : n('[data-fancybox="' + o + '"]'))
            : (r = [i]),
          (a = n(r).index(i)) < 0 && (a = 0),
          ((s = n.fancybox.open(r, e, a)).$trigger = i)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
      if (n.fn.fancybox)
        return void console.info("fancyBox already initialized");
      var s = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function (t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function (t, e) {
              return "image" === t.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        r = n(t),
        a = n(e),
        l = 0,
        c =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          },
        u =
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          },
        h = (function () {
          var t,
            n = e.createElement("fakeelement"),
            i = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (t in i) if (void 0 !== n.style[t]) return i[t];
          return "transitionend";
        })(),
        d = function (t) {
          return t && t.length && t[0].offsetHeight;
        },
        f = function (t, e) {
          var i = n.extend(!0, {}, t, e);
          return (
            n.each(e, function (t, e) {
              n.isArray(e) && (i[t] = e);
            }),
            i
          );
        },
        p = function (t) {
          var i, o;
          return (
            !(!t || t.ownerDocument !== e) &&
            (n(".fancybox-container").css("pointer-events", "none"),
            (i = {
              x: t.getBoundingClientRect().left + t.offsetWidth / 2,
              y: t.getBoundingClientRect().top + t.offsetHeight / 2,
            }),
            (o = e.elementFromPoint(i.x, i.y) === t),
            n(".fancybox-container").css("pointer-events", ""),
            o)
          );
        },
        g = function (t, e, i) {
          var o = this;
          (o.opts = f({ index: i }, n.fancybox.defaults)),
            n.isPlainObject(e) && (o.opts = f(o.opts, e)),
            n.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)),
            (o.id = o.opts.id || ++l),
            (o.currIndex = parseInt(o.opts.index, 10) || 0),
            (o.prevIndex = null),
            (o.prevPos = null),
            (o.currPos = 0),
            (o.firstRun = !0),
            (o.group = []),
            (o.slides = {}),
            o.addContent(t),
            o.group.length && o.init();
        };
      n.extend(g.prototype, {
        init: function () {
          var i,
            o,
            s = this,
            r = s.group[s.currIndex].opts;
          r.closeExisting && n.fancybox.close(!0),
            n("body").addClass("fancybox-active"),
            !n.fancybox.getInstance() &&
              !1 !== r.hideScrollbar &&
              !n.fancybox.isMobile &&
              e.body.scrollHeight > t.innerHeight &&
              (n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (t.innerWidth - e.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              n("body").addClass("compensate-for-scrollbar")),
            (o = ""),
            n.each(r.buttons, function (t, e) {
              o += r.btnTpl[e] || "";
            }),
            (i = n(
              s.translate(
                s,
                r.baseTpl
                  .replace("{{buttons}}", o)
                  .replace(
                    "{{arrows}}",
                    r.btnTpl.arrowLeft + r.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + s.id)
              .addClass(r.baseClass)
              .data("FancyBox", s)
              .appendTo(r.parentEl)),
            (s.$refs = { container: i }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (t) {
              s.$refs[t] = i.find(".fancybox-" + t);
            }),
            s.trigger("onInit"),
            s.activate(),
            s.jumpTo(s.currIndex);
        },
        translate: function (t, e) {
          var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            return void 0 === n[e] ? t : n[e];
          });
        },
        addContent: function (t) {
          var e,
            i = this,
            o = n.makeArray(t);
          n.each(o, function (t, e) {
            var o,
              s,
              r,
              a,
              l,
              c = {},
              u = {};
            n.isPlainObject(e)
              ? ((c = e), (u = e.opts || e))
              : "object" === n.type(e) && n(e).length
              ? ((u = (o = n(e)).data() || {}),
                ((u = n.extend(!0, {}, u, u.options)).$orig = o),
                (c.src = i.opts.src || u.src || o.attr("href")),
                c.type || c.src || ((c.type = "inline"), (c.src = e)))
              : (c = { type: "html", src: e + "" }),
              (c.opts = n.extend(!0, {}, i.opts, u)),
              n.isArray(u.buttons) && (c.opts.buttons = u.buttons),
              n.fancybox.isMobile &&
                c.opts.mobile &&
                (c.opts = f(c.opts, c.opts.mobile)),
              (s = c.type || c.opts.type),
              (a = c.src || ""),
              !s &&
                a &&
                ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((s = "video"),
                    c.opts.video.format ||
                      (c.opts.video.format =
                        "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                  : a.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (s = "image")
                  : a.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((s = "iframe"),
                    (c = n.extend(!0, c, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === a.charAt(0) && (s = "inline")),
              s ? (c.type = s) : i.trigger("objectNeedsType", c),
              c.contentType ||
                (c.contentType =
                  n.inArray(c.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : c.type),
              (c.index = i.group.length),
              "auto" == c.opts.smallBtn &&
                (c.opts.smallBtn =
                  n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
              "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
              (c.$thumb = c.opts.$thumb || null),
              c.opts.$trigger &&
                c.index === i.opts.index &&
                ((c.$thumb = c.opts.$trigger.find("img:first")),
                c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
              (c.$thumb && c.$thumb.length) ||
                !c.opts.$orig ||
                (c.$thumb = c.opts.$orig.find("img:first")),
              c.$thumb && !c.$thumb.length && (c.$thumb = null),
              (c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null)),
              "function" === n.type(c.opts.caption) &&
                (c.opts.caption = c.opts.caption.apply(e, [i, c])),
              "function" === n.type(i.opts.caption) &&
                (c.opts.caption = i.opts.caption.apply(e, [i, c])),
              c.opts.caption instanceof n ||
                (c.opts.caption =
                  void 0 === c.opts.caption ? "" : c.opts.caption + ""),
              "ajax" === c.type &&
                (l = a.split(/\s+/, 2)).length > 1 &&
                ((c.src = l.shift()), (c.opts.filter = l.shift())),
              c.opts.modal &&
                (c.opts = n.extend(!0, c.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              i.group.push(c);
          }),
            Object.keys(i.slides).length &&
              (i.updateControls(),
              (e = i.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var e = this;
          e.removeEvents(),
            e.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (t) {
                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            r.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type
                ? (e.requestId && u(e.requestId),
                  (e.requestId = c(function () {
                    e.update(t);
                  })))
                : (e.current &&
                    "iframe" === e.current.type &&
                    e.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      e.$refs.stage.show(), e.update(t);
                    },
                    n.fancybox.isMobile ? 600 : 250
                  ));
            }),
            a.on("keydown.fb", function (t) {
              var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                o = t.keyCode || t.which;
              if (9 != o)
                return !i.opts.keyboard ||
                  t.ctrlKey ||
                  t.altKey ||
                  t.shiftKey ||
                  n(t.target).is("input,textarea,video,audio,select")
                  ? void 0
                  : 8 === o || 27 === o
                  ? (t.preventDefault(), void e.close(t))
                  : 37 === o || 38 === o
                  ? (t.preventDefault(), void e.previous())
                  : 39 === o || 40 === o
                  ? (t.preventDefault(), void e.next())
                  : void e.trigger("afterKeydown", t, o);
              i.opts.trapFocus && e.focus(t);
            }),
            e.group[e.currIndex].opts.idleTime &&
              ((e.idleSecondsCounter = 0),
              a.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (t) {
                  (e.idleSecondsCounter = 0),
                    e.isIdle && e.showControls(),
                    (e.isIdle = !1);
                }
              ),
              (e.idleInterval = t.setInterval(function () {
                ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                  !e.isDragging &&
                  ((e.isIdle = !0),
                  (e.idleSecondsCounter = 0),
                  e.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var e = this;
          r.off("orientationchange.fb resize.fb"),
            a.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            e.idleInterval &&
              (t.clearInterval(e.idleInterval), (e.idleInterval = null));
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t);
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t);
        },
        jumpTo: function (t, e) {
          var i,
            o,
            s,
            r,
            a,
            l,
            c,
            u,
            h,
            f = this,
            p = f.group.length;
          if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
            if (
              ((t = parseInt(t, 10)),
              !(s = f.current ? f.current.opts.loop : f.opts.loop) &&
                (t < 0 || t >= p))
            )
              return !1;
            if (
              ((i = f.firstRun = !Object.keys(f.slides).length),
              (a = f.current),
              (f.prevIndex = f.currIndex),
              (f.prevPos = f.currPos),
              (r = f.createSlide(t)),
              p > 1 &&
                ((s || r.index < p - 1) && f.createSlide(t + 1),
                (s || r.index > 0) && f.createSlide(t - 1)),
              (f.current = r),
              (f.currIndex = r.index),
              (f.currPos = r.pos),
              f.trigger("beforeShow", i),
              f.updateControls(),
              (r.forcedDuration = void 0),
              n.isNumeric(e)
                ? (r.forcedDuration = e)
                : (e = r.opts[i ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              (o = f.isMoved(r)),
              r.$slide.addClass("fancybox-slide--current"),
              i)
            )
              return (
                r.opts.animationEffect &&
                  e &&
                  f.$refs.container.css("transition-duration", e + "ms"),
                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                f.loadSlide(r),
                void f.preload("image")
              );
            (l = n.fancybox.getTranslate(a.$slide)),
              (c = n.fancybox.getTranslate(f.$refs.stage)),
              n.each(f.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }),
              a.pos !== r.pos && (a.isComplete = !1),
              a.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              o
                ? ((h = l.left - (a.pos * l.width + a.pos * a.opts.gutter)),
                  n.each(f.slides, function (t, i) {
                    i.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var o = i.pos * l.width + i.pos * i.opts.gutter;
                    n.fancybox.setTranslate(i.$slide, {
                      top: 0,
                      left: o - c.left + h,
                    }),
                      i.pos !== r.pos &&
                        i.$slide.addClass(
                          "fancybox-slide--" +
                            (i.pos > r.pos ? "next" : "previous")
                        ),
                      d(i.$slide),
                      n.fancybox.animate(
                        i.$slide,
                        {
                          top: 0,
                          left:
                            (i.pos - r.pos) * l.width +
                            (i.pos - r.pos) * i.opts.gutter,
                        },
                        e,
                        function () {
                          i.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            i.pos === f.currPos && f.complete();
                        }
                      );
                  }))
                : e &&
                  r.opts.transitionEffect &&
                  ((u =
                    "fancybox-animated fancybox-fx-" + r.opts.transitionEffect),
                  a.$slide.addClass(
                    "fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")
                  ),
                  n.fancybox.animate(
                    a.$slide,
                    u,
                    e,
                    function () {
                      a.$slide
                        .removeClass(u)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              r.isLoaded ? f.revealContent(r) : f.loadSlide(r),
              f.preload("image");
          }
        },
        createSlide: function (t) {
          var e,
            i,
            o = this;
          return (
            (i = (i = t % o.group.length) < 0 ? o.group.length + i : i),
            !o.slides[t] &&
              o.group[i] &&
              ((e = n('<div class="fancybox-slide"></div>').appendTo(
                o.$refs.stage
              )),
              (o.slides[t] = n.extend(!0, {}, o.group[i], {
                pos: t,
                $slide: e,
                isLoaded: !1,
              })),
              o.updateSlide(o.slides[t])),
            o.slides[t]
          );
        },
        scaleToActual: function (t, e, i) {
          var o,
            s,
            r,
            a,
            l,
            c = this,
            u = c.current,
            h = u.$content,
            d = n.fancybox.getTranslate(u.$slide).width,
            f = n.fancybox.getTranslate(u.$slide).height,
            p = u.width,
            g = u.height;
          c.isAnimating ||
            c.isMoved() ||
            !h ||
            "image" != u.type ||
            !u.isLoaded ||
            u.hasError ||
            ((c.isAnimating = !0),
            n.fancybox.stop(h),
            (t = void 0 === t ? 0.5 * d : t),
            (e = void 0 === e ? 0.5 * f : e),
            ((o = n.fancybox.getTranslate(h)).top -= n.fancybox.getTranslate(
              u.$slide
            ).top),
            (o.left -= n.fancybox.getTranslate(u.$slide).left),
            (a = p / o.width),
            (l = g / o.height),
            (s = 0.5 * d - 0.5 * p),
            (r = 0.5 * f - 0.5 * g),
            p > d &&
              ((s = o.left * a - (t * a - t)) > 0 && (s = 0),
              s < d - p && (s = d - p)),
            g > f &&
              ((r = o.top * l - (e * l - e)) > 0 && (r = 0),
              r < f - g && (r = f - g)),
            c.updateCursor(p, g),
            n.fancybox.animate(
              h,
              { top: r, left: s, scaleX: a, scaleY: l },
              i || 366,
              function () {
                c.isAnimating = !1;
              }
            ),
            c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
        },
        scaleToFit: function (t) {
          var e,
            i = this,
            o = i.current,
            s = o.$content;
          i.isAnimating ||
            i.isMoved() ||
            !s ||
            "image" != o.type ||
            !o.isLoaded ||
            o.hasError ||
            ((i.isAnimating = !0),
            n.fancybox.stop(s),
            (e = i.getFitPos(o)),
            i.updateCursor(e.width, e.height),
            n.fancybox.animate(
              s,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / s.width(),
                scaleY: e.height / s.height(),
              },
              t || 366,
              function () {
                i.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (t) {
          var e,
            i,
            o,
            s,
            r = t.$content,
            a = t.$slide,
            l = t.width || t.opts.width,
            c = t.height || t.opts.height,
            u = {};
          return (
            !!(t.isLoaded && r && r.length) &&
            ((e = n.fancybox.getTranslate(this.$refs.stage).width),
            (i = n.fancybox.getTranslate(this.$refs.stage).height),
            (e -=
              parseFloat(a.css("paddingLeft")) +
              parseFloat(a.css("paddingRight")) +
              parseFloat(r.css("marginLeft")) +
              parseFloat(r.css("marginRight"))),
            (i -=
              parseFloat(a.css("paddingTop")) +
              parseFloat(a.css("paddingBottom")) +
              parseFloat(r.css("marginTop")) +
              parseFloat(r.css("marginBottom"))),
            (l && c) || ((l = e), (c = i)),
            (l *= o = Math.min(1, e / l, i / c)) > e - 0.5 && (l = e),
            (c *= o) > i - 0.5 && (c = i),
            "image" === t.type
              ? ((u.top =
                  Math.floor(0.5 * (i - c)) + parseFloat(a.css("paddingTop"))),
                (u.left =
                  Math.floor(0.5 * (e - l)) + parseFloat(a.css("paddingLeft"))))
              : "video" === t.contentType &&
                (c >
                l /
                  (s =
                    t.opts.width && t.opts.height
                      ? l / c
                      : t.opts.ratio || 16 / 9)
                  ? (c = l / s)
                  : l > c * s && (l = c * s)),
            (u.width = l),
            (u.height = c),
            u)
          );
        },
        update: function (t) {
          var e = this;
          n.each(e.slides, function (n, i) {
            e.updateSlide(i, t);
          });
        },
        updateSlide: function (t, e) {
          var i = this,
            o = t && t.$content,
            s = t.width || t.opts.width,
            r = t.height || t.opts.height,
            a = t.$slide;
          i.adjustCaption(t),
            o &&
              (s || r || "video" === t.contentType) &&
              !t.hasError &&
              (n.fancybox.stop(o),
              n.fancybox.setTranslate(o, i.getFitPos(t)),
              t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
            i.adjustLayout(t),
            a.length &&
              (a.trigger("refresh"),
              t.pos === i.currPos &&
                i.$refs.toolbar
                  .add(i.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    a.get(0).scrollHeight > a.get(0).clientHeight
                  )),
            i.trigger("onUpdate", t, e);
        },
        centerSlide: function (t) {
          var e = this,
            i = e.current,
            o = i.$slide;
          !e.isClosing &&
            i &&
            (o.siblings().css({ transform: "", opacity: "" }),
            o
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            n.fancybox.animate(
              o,
              { top: 0, left: 0, opacity: 1 },
              void 0 === t ? 0 : t,
              function () {
                o.css({ transform: "", opacity: "" }),
                  i.isComplete || e.complete();
              },
              !1
            ));
        },
        isMoved: function (t) {
          var e,
            i,
            o = t || this.current;
          return (
            !!o &&
            ((i = n.fancybox.getTranslate(this.$refs.stage)),
            (e = n.fancybox.getTranslate(o.$slide)),
            !o.$slide.hasClass("fancybox-animated") &&
              (Math.abs(e.top - i.top) > 0.5 ||
                Math.abs(e.left - i.left) > 0.5))
          );
        },
        updateCursor: function (t, e) {
          var i,
            o,
            s = this,
            r = s.current,
            a = s.$refs.container;
          r &&
            !s.isClosing &&
            s.Guestures &&
            (a.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (o = !!(i = s.canPan(t, e)) || s.isZoomable()),
            a.toggleClass("fancybox-is-zoomable", o),
            n("[data-fancybox-zoom]").prop("disabled", !o),
            i
              ? a.addClass("fancybox-can-pan")
              : o &&
                ("zoom" === r.opts.clickContent ||
                  (n.isFunction(r.opts.clickContent) &&
                    "zoom" == r.opts.clickContent(r)))
              ? a.addClass("fancybox-can-zoomIn")
              : r.opts.touch &&
                (r.opts.touch.vertical || s.group.length > 1) &&
                "video" !== r.contentType &&
                a.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var t,
            e = this,
            n = e.current;
          if (n && !e.isClosing && "image" === n.type && !n.hasError) {
            if (!n.isLoaded) return !0;
            if (
              (t = e.getFitPos(n)) &&
              (n.width > t.width || n.height > t.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (t, e) {
          var i = !1,
            o = this.current,
            s = o.$content;
          return (
            void 0 !== t && void 0 !== e
              ? (i = t < o.width && e < o.height)
              : s &&
                (i =
                  (i = n.fancybox.getTranslate(s)).width < o.width &&
                  i.height < o.height),
            i
          );
        },
        canPan: function (t, e) {
          var i = this.current,
            o = null,
            s = !1;
          return (
            "image" === i.type &&
              (i.isComplete || (t && e)) &&
              !i.hasError &&
              ((s = this.getFitPos(i)),
              void 0 !== t && void 0 !== e
                ? (o = { width: t, height: e })
                : i.isComplete && (o = n.fancybox.getTranslate(i.$content)),
              o &&
                s &&
                (s =
                  Math.abs(o.width - s.width) > 1.5 ||
                  Math.abs(o.height - s.height) > 1.5)),
            s
          );
        },
        loadSlide: function (t) {
          var e,
            i,
            o,
            s = this;
          if (!t.isLoading && !t.isLoaded) {
            if (((t.isLoading = !0), !1 === s.trigger("beforeLoad", t)))
              return (t.isLoading = !1), !1;
            switch (
              ((e = t.type),
              (i = t.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(t.opts.slideClass),
              e)
            ) {
              case "image":
                s.setImage(t);
                break;
              case "iframe":
                s.setIframe(t);
                break;
              case "html":
                s.setContent(t, t.src || t.content);
                break;
              case "video":
                s.setContent(
                  t,
                  t.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      "{{format}}",
                      t.opts.videoFormat || t.opts.video.format || ""
                    )
                    .replace("{{poster}}", t.thumb || "")
                );
                break;
              case "inline":
                n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                break;
              case "ajax":
                s.showLoading(t),
                  (o = n.ajax(
                    n.extend({}, t.opts.ajax.settings, {
                      url: t.src,
                      success: function (e, n) {
                        "success" === n && s.setContent(t, e);
                      },
                      error: function (e, n) {
                        e && "abort" !== n && s.setError(t);
                      },
                    })
                  )),
                  i.one("onReset", function () {
                    o.abort();
                  });
                break;
              default:
                s.setError(t);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var i,
            o = this;
          setTimeout(function () {
            var e = t.$image;
            o.isClosing ||
              !t.isLoading ||
              (e && e.length && e[0].complete) ||
              t.hasError ||
              o.showLoading(t);
          }, 50),
            o.checkSrcset(t),
            (t.$content = n('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              t.thumb &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              ((i = e.createElement("img")).onerror = function () {
                n(this).remove(), (t.$ghost = null);
              }),
              (i.onload = function () {
                o.afterLoad(t);
              }),
              (t.$ghost = n(i)
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", t.thumb))),
            o.setBigImage(t);
        },
        checkSrcset: function (e) {
          var n,
            i,
            o,
            s,
            r = e.opts.srcset || e.opts.image.srcset;
          if (r) {
            (o = t.devicePixelRatio || 1),
              (s = t.innerWidth * o),
              (i = r.split(",").map(function (t) {
                var e = {};
                return (
                  t
                    .trim()
                    .split(/\s+/)
                    .forEach(function (t, n) {
                      var i = parseInt(t.substring(0, t.length - 1), 10);
                      if (0 === n) return (e.url = t);
                      i && ((e.value = i), (e.postfix = t[t.length - 1]));
                    }),
                  e
                );
              })).sort(function (t, e) {
                return t.value - e.value;
              });
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              if (
                ("w" === l.postfix && l.value >= s) ||
                ("x" === l.postfix && l.value >= o)
              ) {
                n = l;
                break;
              }
            }
            !n && i.length && (n = i[i.length - 1]),
              n &&
                ((e.src = n.url),
                e.width &&
                  e.height &&
                  "w" == n.postfix &&
                  ((e.height = (e.width / e.height) * n.value),
                  (e.width = n.value)),
                (e.opts.srcset = r));
          }
        },
        setBigImage: function (t) {
          var i = this,
            o = e.createElement("img"),
            s = n(o);
          (t.$image = s
            .one("error", function () {
              i.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (i.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                i.afterLoad(t)),
                i.isClosing ||
                  (t.opts.srcset &&
                    (((e = t.opts.sizes) && "auto" !== e) ||
                      (e =
                        (t.width / t.height > 1 && r.width() / r.height() > 1
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    s.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !i.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  i.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (o.complete || "complete" == o.readyState) &&
            s.naturalWidth &&
            s.naturalHeight
              ? s.trigger("load")
              : o.error && s.trigger("error");
        },
        resolveImageSlideSize: function (t, e, n) {
          var i = parseInt(t.opts.width, 10),
            o = parseInt(t.opts.height, 10);
          (t.width = e),
            (t.height = n),
            i > 0 && ((t.width = i), (t.height = Math.floor((i * n) / e))),
            o > 0 && ((t.width = Math.floor((o * e) / n)), (t.height = o));
        },
        setIframe: function (t) {
          var e,
            i = this,
            o = t.opts.iframe,
            s = t.$slide;
          (t.$content = n(
            '<div class="fancybox-content' +
              (o.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(o.css)
            .appendTo(s)),
            s.addClass("fancybox-slide--" + t.contentType),
            (t.$iframe = e =
              n(o.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(o.attr)
                .appendTo(t.$content)),
            o.preload
              ? (i.showLoading(t),
                e.on("load.fb error.fb", function (e) {
                  (this.isReady = 1),
                    t.$slide.trigger("refresh"),
                    i.afterLoad(t);
                }),
                s.on("refresh.fb", function () {
                  var n,
                    i = t.$content,
                    r = o.css.width,
                    a = o.css.height;
                  if (1 === e[0].isReady) {
                    try {
                      n = e.contents().find("body");
                    } catch (t) {}
                    n &&
                      n.length &&
                      n.children().length &&
                      (s.css("overflow", "visible"),
                      i.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === r &&
                        (r = Math.ceil(
                          Math.max(n[0].clientWidth, n.outerWidth(!0))
                        )),
                      i.css("width", r || "").css("max-width", ""),
                      void 0 === a &&
                        (a = Math.ceil(
                          Math.max(n[0].clientHeight, n.outerHeight(!0))
                        )),
                      i.css("height", a || ""),
                      s.css("overflow", "auto")),
                      i.removeClass("fancybox-is-hidden");
                  }
                }))
              : i.afterLoad(t),
            e.attr("src", t.src),
            s.one("onReset", function () {
              try {
                n(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (t) {}
              n(this).off("refresh.fb").empty(),
                (t.isLoaded = !1),
                (t.isRevealed = !1);
            });
        },
        setContent: function (t, e) {
          var i = this;
          i.isClosing ||
            (i.hideLoading(t),
            t.$content && n.fancybox.stop(t.$content),
            t.$slide.empty(),
            (function (t) {
              return t && t.hasOwnProperty && t instanceof n;
            })(e) && e.parent().length
              ? ((e.hasClass("fancybox-content") ||
                  e.parent().hasClass("fancybox-content")) &&
                  e.parents(".fancybox-slide").trigger("onReset"),
                (t.$placeholder = n("<div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : t.hasError ||
                ("string" === n.type(e) &&
                  (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"),
                t.$placeholder &&
                  (t.$placeholder
                    .after(e.removeClass("fancybox-content").hide())
                    .remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError ||
                  (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
            }),
            n(e).appendTo(t.$slide),
            n(e).is("video,audio") &&
              (n(e).addClass("fancybox-video"),
              n(e).wrap("<div></div>"),
              (t.contentType = "video"),
              (t.opts.width = t.opts.width || n(e).attr("width")),
              (t.opts.height = t.opts.height || n(e).attr("height"))),
            (t.$content = t.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            t.$content.siblings().hide(),
            t.$content.length ||
              (t.$content = t.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            t.$content.addClass("fancybox-content"),
            t.$slide.addClass("fancybox-slide--" + t.contentType),
            i.afterLoad(t));
        },
        setError: function (t) {
          (t.hasError = !0),
            t.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + t.contentType)
              .addClass("fancybox-slide--error"),
            (t.contentType = "html"),
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (t) {
          var e = this;
          (t = t || e.current) &&
            !t.$spinner &&
            (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
              .appendTo(t.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (t) {
          (t = t || this.current) &&
            t.$spinner &&
            (t.$spinner.stop().remove(), delete t.$spinner);
        },
        afterLoad: function (t) {
          var e = this;
          e.isClosing ||
            ((t.isLoading = !1),
            (t.isLoaded = !0),
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            !t.opts.smallBtn ||
              (t.$smallBtn && t.$smallBtn.length) ||
              (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
                t.$content
              )),
            t.opts.protect &&
              t.$content &&
              !t.hasError &&
              (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0;
              }),
              "image" === t.type &&
                n('<div class="fancybox-spaceball"></div>').appendTo(
                  t.$content
                )),
            e.adjustCaption(t),
            e.adjustLayout(t),
            t.pos === e.currPos && e.updateCursor(),
            e.revealContent(t));
        },
        adjustCaption: function (t) {
          var e,
            n = this,
            i = t || n.current,
            o = i.opts.caption,
            s = i.opts.preventCaptionOverlap,
            r = n.$refs.caption,
            a = !1;
          r.toggleClass("fancybox-caption--separate", s),
            s &&
              o &&
              o.length &&
              (i.pos !== n.currPos
                ? ((e = r.clone().appendTo(r.parent()))
                    .children()
                    .eq(0)
                    .empty()
                    .html(o),
                  (a = e.outerHeight(!0)),
                  e.empty().remove())
                : n.$caption && (a = n.$caption.outerHeight(!0)),
              i.$slide.css("padding-bottom", a || ""));
        },
        adjustLayout: function (t) {
          var e,
            n,
            i,
            o,
            s = t || this.current;
          s.isLoaded &&
            !0 !== s.opts.disableLayoutFix &&
            (s.$content.css("margin-bottom", ""),
            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
              ((i = s.$slide[0].style["padding-bottom"]),
              (o = s.$slide.css("padding-bottom")),
              parseFloat(o) > 0 &&
                ((e = s.$slide[0].scrollHeight),
                s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = o),
                s.$slide.css("padding-bottom", i))),
            s.$content.css("margin-bottom", n));
        },
        revealContent: function (t) {
          var e,
            i,
            o,
            s,
            r = this,
            a = t.$slide,
            l = !1,
            c = !1,
            u = r.isMoved(t),
            h = t.isRevealed;
          return (
            (t.isRevealed = !0),
            (e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
            (o =
              t.opts[r.firstRun ? "animationDuration" : "transitionDuration"]),
            (o = parseInt(
              void 0 === t.forcedDuration ? o : t.forcedDuration,
              10
            )),
            (!u && t.pos === r.currPos && o) || (e = !1),
            "zoom" === e &&
              (t.pos === r.currPos &&
              o &&
              "image" === t.type &&
              !t.hasError &&
              (c = r.getThumbPos(t))
                ? (l = r.getFitPos(t))
                : (e = "fade")),
            "zoom" === e
              ? ((r.isAnimating = !0),
                (l.scaleX = l.width / c.width),
                (l.scaleY = l.height / c.height),
                "auto" == (s = t.opts.zoomOpacity) &&
                  (s = Math.abs(t.width / t.height - c.width / c.height) > 0.1),
                s && ((c.opacity = 0.1), (l.opacity = 1)),
                n.fancybox.setTranslate(
                  t.$content.removeClass("fancybox-is-hidden"),
                  c
                ),
                d(t.$content),
                void n.fancybox.animate(t.$content, l, o, function () {
                  (r.isAnimating = !1), r.complete();
                }))
              : (r.updateSlide(t),
                e
                  ? (n.fancybox.stop(a),
                    (i =
                      "fancybox-slide--" +
                      (t.pos >= r.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      e),
                    a.addClass(i).removeClass("fancybox-slide--current"),
                    t.$content.removeClass("fancybox-is-hidden"),
                    d(a),
                    "image" !== t.type && t.$content.hide().show(0),
                    void n.fancybox.animate(
                      a,
                      "fancybox-slide--current",
                      o,
                      function () {
                        a.removeClass(i).css({ transform: "", opacity: "" }),
                          t.pos === r.currPos && r.complete();
                      },
                      !0
                    ))
                  : (t.$content.removeClass("fancybox-is-hidden"),
                    h ||
                      !u ||
                      "image" !== t.type ||
                      t.hasError ||
                      t.$content.hide().fadeIn("fast"),
                    void (t.pos === r.currPos && r.complete())))
          );
        },
        getThumbPos: function (t) {
          var e,
            i,
            o,
            s,
            r,
            a = !1,
            l = t.$thumb;
          return (
            !(!l || !p(l[0])) &&
            ((e = n.fancybox.getTranslate(l)),
            (i = parseFloat(l.css("border-top-width") || 0)),
            (o = parseFloat(l.css("border-right-width") || 0)),
            (s = parseFloat(l.css("border-bottom-width") || 0)),
            (r = parseFloat(l.css("border-left-width") || 0)),
            (a = {
              top: e.top + i,
              left: e.left + r,
              width: e.width - o - r,
              height: e.height - i - s,
              scaleX: 1,
              scaleY: 1,
            }),
            e.width > 0 && e.height > 0 && a)
          );
        },
        complete: function () {
          var t,
            e = this,
            i = e.current,
            o = {};
          !e.isMoved() &&
            i.isLoaded &&
            (i.isComplete ||
              ((i.isComplete = !0),
              i.$slide.siblings().trigger("onReset"),
              e.preload("inline"),
              d(i.$slide),
              i.$slide.addClass("fancybox-slide--complete"),
              n.each(e.slides, function (t, i) {
                i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1
                  ? (o[i.pos] = i)
                  : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
              }),
              (e.slides = o)),
            (e.isAnimating = !1),
            e.updateCursor(),
            e.trigger("afterShow"),
            i.opts.video.autoStart &&
              i.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next();
                }),
            i.opts.autoFocus &&
              "html" === i.contentType &&
              ((t = i.$content.find("input[autofocus]:enabled:visible:first"))
                .length
                ? t.trigger("focus")
                : e.focus(null, !0)),
            i.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (t) {
          var e,
            n,
            i = this;
          i.group.length < 2 ||
            ((n = i.slides[i.currPos + 1]),
            (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e),
            n && n.type === t && i.loadSlide(n));
        },
        focus: function (t, i) {
          var o,
            s,
            r = this,
            a = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          r.isClosing ||
            ((o = (o =
              !t && r.current && r.current.isComplete
                ? r.current.$slide.find(
                    "*:visible" + (i ? ":not(.fancybox-close-small)" : "")
                  )
                : r.$refs.container.find("*:visible"))
              .filter(a)
              .filter(function () {
                return (
                  "hidden" !== n(this).css("visibility") &&
                  !n(this).hasClass("disabled")
                );
              })).length
              ? ((s = o.index(e.activeElement)),
                t && t.shiftKey
                  ? (s < 0 || 0 == s) &&
                    (t.preventDefault(), o.eq(o.length - 1).trigger("focus"))
                  : (s < 0 || s == o.length - 1) &&
                    (t && t.preventDefault(), o.eq(0).trigger("focus")))
              : r.$refs.container.trigger("focus"));
        },
        activate: function () {
          var t = this;
          n(".fancybox-container").each(function () {
            var e = n(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (t, e) {
          var i,
            o,
            s,
            r,
            a,
            l,
            u,
            h = this,
            f = h.current,
            p = function () {
              h.cleanUp(t);
            };
          return !(
            h.isClosing ||
            ((h.isClosing = !0),
            !1 === h.trigger("beforeClose", t)
              ? ((h.isClosing = !1),
                c(function () {
                  h.update();
                }),
                1)
              : (h.removeEvents(),
                (s = f.$content),
                (i = f.opts.animationEffect),
                (o = n.isNumeric(e) ? e : i ? f.opts.animationDuration : 0),
                f.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== t ? n.fancybox.stop(f.$slide) : (i = !1),
                f.$slide.siblings().trigger("onReset").remove(),
                o &&
                  h.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", o + "ms"),
                h.hideLoading(f),
                h.hideControls(!0),
                h.updateCursor(),
                "zoom" !== i ||
                  (s &&
                    o &&
                    "image" === f.type &&
                    !h.isMoved() &&
                    !f.hasError &&
                    (u = h.getThumbPos(f))) ||
                  (i = "fade"),
                "zoom" === i
                  ? (n.fancybox.stop(s),
                    (r = n.fancybox.getTranslate(s)),
                    (l = {
                      top: r.top,
                      left: r.left,
                      scaleX: r.width / u.width,
                      scaleY: r.height / u.height,
                      width: u.width,
                      height: u.height,
                    }),
                    (a = f.opts.zoomOpacity),
                    "auto" == a &&
                      (a =
                        Math.abs(f.width / f.height - u.width / u.height) >
                        0.1),
                    a && (u.opacity = 0),
                    n.fancybox.setTranslate(s, l),
                    d(s),
                    n.fancybox.animate(s, u, o, p),
                    0)
                  : (i && o
                      ? n.fancybox.animate(
                          f.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + i,
                          o,
                          p
                        )
                      : !0 === t
                      ? setTimeout(p, o)
                      : p(),
                    0)))
          );
        },
        cleanUp: function (e) {
          var i,
            o,
            s,
            r = this,
            a = r.current.opts.$orig;
          r.current.$slide.trigger("onReset"),
            r.$refs.container.empty().remove(),
            r.trigger("afterClose", e),
            r.current.opts.backFocus &&
              ((a && a.length && a.is(":visible")) || (a = r.$trigger),
              a &&
                a.length &&
                ((o = t.scrollX),
                (s = t.scrollY),
                a.trigger("focus"),
                n("html, body").scrollTop(s).scrollLeft(o))),
            (r.current = null),
            (i = n.fancybox.getInstance())
              ? i.activate()
              : (n("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                n("#fancybox-style-noscroll").remove());
        },
        trigger: function (t, e) {
          var i,
            o = Array.prototype.slice.call(arguments, 1),
            s = this,
            r = e && e.opts ? e : s.current;
          if (
            (r ? o.unshift(r) : (r = s),
            o.unshift(s),
            n.isFunction(r.opts[t]) && (i = r.opts[t].apply(r, o)),
            !1 === i)
          )
            return i;
          "afterClose" !== t && s.$refs
            ? s.$refs.container.trigger(t + ".fb", o)
            : a.trigger(t + ".fb", o);
        },
        updateControls: function () {
          var t = this,
            i = t.current,
            o = i.index,
            s = t.$refs.container,
            r = t.$refs.caption,
            a = i.opts.caption;
          i.$slide.trigger("refresh"),
            a && a.length
              ? ((t.$caption = r), r.children().eq(0).html(a))
              : (t.$caption = null),
            t.hasHiddenControls || t.isIdle || t.showControls(),
            s.find("[data-fancybox-count]").html(t.group.length),
            s.find("[data-fancybox-index]").html(o + 1),
            s
              .find("[data-fancybox-prev]")
              .prop("disabled", !i.opts.loop && o <= 0),
            s
              .find("[data-fancybox-next]")
              .prop("disabled", !i.opts.loop && o >= t.group.length - 1),
            "image" === i.type
              ? s
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", i.opts.image.src || i.src)
                  .show()
              : i.opts.toolbar &&
                s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            n(e.activeElement).is(":hidden,[disabled]") &&
              t.$refs.container.trigger("focus");
        },
        hideControls: function (t) {
          var e = ["infobar", "toolbar", "nav"];
          (!t && this.current.opts.preventCaptionOverlap) || e.push("caption"),
            this.$refs.container.removeClass(
              e
                .map(function (t) {
                  return "fancybox-show-" + t;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
          (t.hasHiddenControls = !1),
            (t.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(e.infobar && t.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!t.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(e.arrows && t.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!e.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (n.fancybox = {
          version: "3.5.7",
          defaults: s,
          getInstance: function (t) {
            var e = n(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              i = Array.prototype.slice.call(arguments, 1);
            return (
              e instanceof g &&
              ("string" === n.type(t)
                ? e[t].apply(e, i)
                : "function" === n.type(t) && t.apply(e, i),
              e)
            );
          },
          open: function (t, e, n) {
            return new g(t, e, n);
          },
          close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function () {
            this.close(!0), a.add("body").off("click.fb-start", "**");
          },
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d: (function () {
            var n = e.createElement("div");
            return (
              t.getComputedStyle &&
              t.getComputedStyle(n) &&
              t.getComputedStyle(n).getPropertyValue("transform") &&
              !(e.documentMode && e.documentMode < 11)
            );
          })(),
          getTranslate: function (t) {
            var e;
            return (
              !(!t || !t.length) && {
                top: (e = t[0].getBoundingClientRect()).top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity")),
              }
            );
          },
          setTranslate: function (t, e) {
            var n = "",
              i = {};
            if (t && e)
              return (
                (void 0 === e.left && void 0 === e.top) ||
                  ((n =
                    (void 0 === e.left ? t.position().left : e.left) +
                    "px, " +
                    (void 0 === e.top ? t.position().top : e.top) +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                void 0 !== e.scaleX && void 0 !== e.scaleY
                  ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                  : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                n.length && (i.transform = n),
                void 0 !== e.opacity && (i.opacity = e.opacity),
                void 0 !== e.width && (i.width = e.width),
                void 0 !== e.height && (i.height = e.height),
                t.css(i)
              );
          },
          animate: function (t, e, i, o, s) {
            var r,
              a = this;
            n.isFunction(i) && ((o = i), (i = null)),
              a.stop(t),
              (r = a.getTranslate(t)),
              t.on(h, function (l) {
                (!l ||
                  !l.originalEvent ||
                  (t.is(l.originalEvent.target) &&
                    "z-index" != l.originalEvent.propertyName)) &&
                  (a.stop(t),
                  n.isNumeric(i) && t.css("transition-duration", ""),
                  n.isPlainObject(e)
                    ? void 0 !== e.scaleX &&
                      void 0 !== e.scaleY &&
                      a.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: r.width * e.scaleX,
                        height: r.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== s && t.removeClass(e),
                  n.isFunction(o) && o(l));
              }),
              n.isNumeric(i) && t.css("transition-duration", i + "ms"),
              n.isPlainObject(e)
                ? (void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    (delete e.width,
                    delete e.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  n.fancybox.setTranslate(t, e))
                : t.addClass(e),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger(h);
                }, i + 33)
              );
          },
          stop: function (t, e) {
            t &&
              t.length &&
              (clearTimeout(t.data("timer")),
              e && t.trigger(h),
              t.off(h).css("transition-duration", ""),
              t.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (n.fn.fancybox = function (t) {
          var e;
          return (
            (e = (t = t || {}).selector || !1)
              ? n("body")
                  .off("click.fb-start", e)
                  .on("click.fb-start", e, { options: t }, o)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: t },
                  o
                ),
            this
          );
        }),
        a.on("click.fb-start", "[data-fancybox]", o),
        a.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
            .eq(n(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: n(this) });
        }),
        (function () {
          var t = null;
          a.on(
            "mousedown mouseup focus blur",
            ".fancybox-button",
            function (e) {
              switch (e.type) {
                case "mousedown":
                  t = n(this);
                  break;
                case "mouseup":
                  t = null;
                  break;
                case "focusin":
                  n(".fancybox-button").removeClass("fancybox-focus"),
                    n(this).is(t) ||
                      n(this).is("[disabled]") ||
                      n(this).addClass("fancybox-focus");
                  break;
                case "focusout":
                  n(".fancybox-button").removeClass("fancybox-focus");
              }
            }
          );
        })();
    }
  })(window, document, jQuery),
  (function (t) {
    "use strict";
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      n = function (e, n, i) {
        if (e)
          return (
            (i = i || ""),
            "object" === t.type(i) && (i = t.param(i, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
            e
          );
      };
    t(document).on("objectNeedsType.fb", function (i, o, s) {
      var r,
        a,
        l,
        c,
        u,
        h,
        d,
        f = s.src || "",
        p = !1;
      (r = t.extend(!0, {}, e, s.opts.media)),
        t.each(r, function (e, i) {
          if ((l = f.match(i.matcher))) {
            if (
              ((p = i.type), (d = e), (h = {}), i.paramPlace && l[i.paramPlace])
            ) {
              "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)),
                (u = u.split("&"));
              for (var o = 0; o < u.length; ++o) {
                var r = u[o].split("=", 2);
                2 == r.length &&
                  (h[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
              }
            }
            return (
              (c = t.extend(!0, {}, i.params, s.opts[e], h)),
              (f =
                "function" === t.type(i.url)
                  ? i.url.call(this, l, c, s)
                  : n(i.url, l, c)),
              (a =
                "function" === t.type(i.thumb)
                  ? i.thumb.call(this, l, c, s)
                  : n(i.thumb, l)),
              "youtube" === e
                ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    );
                  }))
                : "vimeo" === e && (f = f.replace("&%23", "#")),
              !1
            );
          }
        }),
        p
          ? (s.opts.thumb ||
              (s.opts.$thumb && s.opts.$thumb.length) ||
              (s.opts.thumb = a),
            "iframe" === p &&
              (s.opts = t.extend(!0, s.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            t.extend(s, {
              type: p,
              src: f,
              origSrc: s.src,
              contentSource: d,
              contentType:
                "image" === p
                  ? "image"
                  : "gmap_place" == d || "gmap_search" == d
                  ? "map"
                  : "video",
            }))
          : f && (s.type = s.opts.defaultType);
    });
    var i = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        this[t].loaded
          ? setTimeout(function () {
              n.done(t);
            })
          : this[t].loading ||
            ((this[t].loading = !0),
            ((e = document.createElement("script")).type = "text/javascript"),
            (e.src = this[t].src),
            "youtube" === t
              ? (window.onYouTubeIframeAPIReady = function () {
                  (n[t].loaded = !0), n.done(t);
                })
              : (e.onload = function () {
                  (n[t].loaded = !0), n.done(t);
                }),
            document.body.appendChild(e));
      },
      done: function (e) {
        var n, i;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((i = n.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? new YT.Player(i.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                })
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                new Vimeo.Player(i).on("ended", function () {
                  n.next();
                }));
      },
    };
    t(document).on({
      "afterShow.fb": function (t, e, n) {
        e.group.length > 1 &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          i.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (t, e, n) {
    "use strict";
    var i =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
      o =
        t.cancelAnimationFrame ||
        t.webkitCancelAnimationFrame ||
        t.mozCancelAnimationFrame ||
        t.oCancelAnimationFrame ||
        function (e) {
          t.clearTimeout(e);
        },
      s = function (e) {
        var n = [];
        for (var i in (e =
          (e = e.originalEvent || e || t.e).touches && e.touches.length
            ? e.touches
            : e.changedTouches && e.changedTouches.length
            ? e.changedTouches
            : [e]))
          e[i].pageX
            ? n.push({ x: e[i].pageX, y: e[i].pageY })
            : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY });
        return n;
      },
      r = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      a = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      l = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          i = t.getComputedStyle(e)["overflow-x"],
          o =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
        return o || s;
      },
      c = function (t) {
        for (
          var e = !1;
          !(e = l(t.get(0))) &&
          (t = t.parent()).length &&
          !t.hasClass("fancybox-stage") &&
          !t.is("body");

        );
        return e;
      },
      u = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function () {
      var t = this;
      t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (o(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (u.prototype.ontouchstart = function (i) {
        var o = this,
          l = n(i.target),
          u = o.instance,
          h = u.current,
          d = h.$slide,
          f = h.$content,
          p = "touchstart" == i.type;
        if (
          (p && o.$container.off("mousedown.fb.touch"),
          (!i.originalEvent || 2 != i.originalEvent.button) &&
            d.length &&
            l.length &&
            !a(l) &&
            !a(l.parent()) &&
            (l.is("img") ||
              !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left)))
        ) {
          if (!h || u.isAnimating || h.$slide.hasClass("fancybox-animated"))
            return i.stopPropagation(), void i.preventDefault();
          (o.realPoints = o.startPoints = s(i)),
            o.startPoints.length &&
              (h.touch && i.stopPropagation(),
              (o.startEvent = i),
              (o.canTap = !0),
              (o.$target = l),
              (o.$content = f),
              (o.opts = h.opts.touch),
              (o.isPanning = !1),
              (o.isSwiping = !1),
              (o.isZooming = !1),
              (o.isScrolling = !1),
              (o.canPan = u.canPan()),
              (o.startTime = new Date().getTime()),
              (o.distanceX = o.distanceY = o.distance = 0),
              (o.canvasWidth = Math.round(d[0].clientWidth)),
              (o.canvasHeight = Math.round(d[0].clientHeight)),
              (o.contentLastPos = null),
              (o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0,
              }),
              (o.sliderStartPos = n.fancybox.getTranslate(d)),
              (o.stagePos = n.fancybox.getTranslate(u.$refs.stage)),
              (o.sliderStartPos.top -= o.stagePos.top),
              (o.sliderStartPos.left -= o.stagePos.left),
              (o.contentStartPos.top -= o.stagePos.top),
              (o.contentStartPos.left -= o.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  p
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(o, "ontouchend")
                )
                .on(
                  p ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(o, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", o.onscroll, !0),
              (((o.opts || o.canPan) &&
                (l.is(o.$stage) || o.$stage.find(l).length)) ||
                (l.is(".fancybox-image") && i.preventDefault(),
                n.fancybox.isMobile &&
                  l.parents(".fancybox-caption").length)) &&
                ((o.isScrollable = c(l) || c(l.parent())),
                (n.fancybox.isMobile && o.isScrollable) || i.preventDefault(),
                (1 === o.startPoints.length || h.hasError) &&
                  (o.canPan
                    ? (n.fancybox.stop(o.$content), (o.isPanning = !0))
                    : (o.isSwiping = !0),
                  o.$container.addClass("fancybox-is-grabbing")),
                2 === o.startPoints.length &&
                  "image" === h.type &&
                  (h.isLoaded || h.$ghost) &&
                  ((o.canTap = !1),
                  (o.isSwiping = !1),
                  (o.isPanning = !1),
                  (o.isZooming = !0),
                  n.fancybox.stop(o.$content),
                  (o.centerPointStartX =
                    0.5 * (o.startPoints[0].x + o.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (o.centerPointStartY =
                    0.5 * (o.startPoints[0].y + o.startPoints[1].y) -
                    n(t).scrollTop()),
                  (o.percentageOfImageAtPinchPointX =
                    (o.centerPointStartX - o.contentStartPos.left) /
                    o.contentStartPos.width),
                  (o.percentageOfImageAtPinchPointY =
                    (o.centerPointStartY - o.contentStartPos.top) /
                    o.contentStartPos.height),
                  (o.startDistanceBetweenFingers = r(
                    o.startPoints[0],
                    o.startPoints[1]
                  )))));
        }
      }),
      (u.prototype.onscroll = function (t) {
        (this.isScrolling = !0),
          e.removeEventListener("scroll", this.onscroll, !0);
      }),
      (u.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = s(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = r(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = r(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = r(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (u.prototype.onSwipe = function (e) {
        var s,
          r = this,
          a = r.instance,
          l = r.isSwiping,
          c = r.sliderStartPos.left || 0;
        if (!0 !== l)
          "x" == l &&
            (r.distanceX > 0 &&
            (r.instance.group.length < 2 ||
              (0 === r.instance.current.index && !r.instance.current.opts.loop))
              ? (c += Math.pow(r.distanceX, 0.8))
              : r.distanceX < 0 &&
                (r.instance.group.length < 2 ||
                  (r.instance.current.index === r.instance.group.length - 1 &&
                    !r.instance.current.opts.loop))
              ? (c -= Math.pow(-r.distanceX, 0.8))
              : (c += r.distanceX)),
            (r.sliderLastPos = {
              top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
              left: c,
            }),
            r.requestId && (o(r.requestId), (r.requestId = null)),
            (r.requestId = i(function () {
              r.sliderLastPos &&
                (n.each(r.instance.slides, function (t, e) {
                  var i = e.pos - r.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: r.sliderLastPos.top,
                    left:
                      r.sliderLastPos.left +
                      i * r.canvasWidth +
                      i * e.opts.gutter,
                  });
                }),
                r.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(r.distance) > 10) {
          if (
            ((r.canTap = !1),
            a.group.length < 2 && r.opts.vertical
              ? (r.isSwiping = "y")
              : a.isDragging ||
                !1 === r.opts.vertical ||
                ("auto" === r.opts.vertical && n(t).width() > 800)
              ? (r.isSwiping = "x")
              : ((s = Math.abs(
                  (180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI
                )),
                (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
            "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
          )
            return void (r.isScrolling = !0);
          (a.isDragging = r.isSwiping),
            (r.startPoints = r.newPoints),
            n.each(a.slides, function (t, e) {
              var i, o;
              n.fancybox.stop(e.$slide),
                (i = n.fancybox.getTranslate(e.$slide)),
                (o = n.fancybox.getTranslate(a.$refs.stage)),
                e.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                e.pos === a.current.pos &&
                  ((r.sliderStartPos.top = i.top - o.top),
                  (r.sliderStartPos.left = i.left - o.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: i.top - o.top,
                  left: i.left - o.left,
                });
            }),
            a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
        }
      }),
      (u.prototype.onPan = function () {
        var t = this;
        r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
          ? (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && o(t.requestId),
            (t.requestId = i(function () {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (u.prototype.limitMovement = function () {
        var t,
          e,
          n,
          i,
          o,
          s,
          r = this,
          a = r.canvasWidth,
          l = r.canvasHeight,
          c = r.distanceX,
          u = r.distanceY,
          h = r.contentStartPos,
          d = h.left,
          f = h.top,
          p = h.width,
          g = h.height;
        return (
          (o = p > a ? d + c : d),
          (s = f + u),
          (t = Math.max(0, 0.5 * a - 0.5 * p)),
          (e = Math.max(0, 0.5 * l - 0.5 * g)),
          (n = Math.min(a - p, 0.5 * a - 0.5 * p)),
          (i = Math.min(l - g, 0.5 * l - 0.5 * g)),
          c > 0 && o > t && (o = t - 1 + Math.pow(-t + d + c, 0.8) || 0),
          c < 0 && o < n && (o = n + 1 - Math.pow(n - d - c, 0.8) || 0),
          u > 0 && s > e && (s = e - 1 + Math.pow(-e + f + u, 0.8) || 0),
          u < 0 && s < i && (s = i + 1 - Math.pow(i - f - u, 0.8) || 0),
          { top: s, left: o }
        );
      }),
      (u.prototype.limitPosition = function (t, e, n, i) {
        var o = this.canvasWidth,
          s = this.canvasHeight;
        return (
          n > o
            ? (t = (t = t > 0 ? 0 : t) < o - n ? o - n : t)
            : (t = Math.max(0, o / 2 - n / 2)),
          i > s
            ? (e = (e = e > 0 ? 0 : e) < s - i ? s - i : e)
            : (e = Math.max(0, s / 2 - i / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function () {
        var e = this,
          s = e.contentStartPos,
          a = s.width,
          l = s.height,
          c = s.left,
          u = s.top,
          h = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          d = Math.floor(a * h),
          f = Math.floor(l * h),
          p = (a - d) * e.percentageOfImageAtPinchPointX,
          g = (l - f) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          b = {
            top: u + (g + (v - e.centerPointStartY)),
            left: c + (p + y),
            scaleX: h,
            scaleY: h,
          };
        (e.canTap = !1),
          (e.newWidth = d),
          (e.newHeight = f),
          (e.contentLastPos = b),
          e.requestId && o(e.requestId),
          (e.requestId = i(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function (t) {
        var i = this,
          r = i.isSwiping,
          a = i.isPanning,
          l = i.isZooming,
          c = i.isScrolling;
        if (
          ((i.endPoints = s(t)),
          (i.dMs = Math.max(new Date().getTime() - i.startTime, 1)),
          i.$container.removeClass("fancybox-is-grabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", i.onscroll, !0),
          i.requestId && (o(i.requestId), (i.requestId = null)),
          (i.isSwiping = !1),
          (i.isPanning = !1),
          (i.isZooming = !1),
          (i.isScrolling = !1),
          (i.instance.isDragging = !1),
          i.canTap)
        )
          return i.onTap(t);
        (i.speed = 100),
          (i.velocityX = (i.distanceX / i.dMs) * 0.5),
          (i.velocityY = (i.distanceY / i.dMs) * 0.5),
          a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c);
      }),
      (u.prototype.endSwiping = function (t, e) {
        var i = this,
          o = !1,
          s = i.instance.group.length,
          r = Math.abs(i.distanceX),
          a = "x" == t && s > 1 && ((i.dMs > 130 && r > 10) || r > 50);
        (i.sliderLastPos = null),
          "y" == t && !e && Math.abs(i.distanceY) > 50
            ? (n.fancybox.animate(
                i.instance.current.$slide,
                {
                  top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
                  opacity: 0,
                },
                200
              ),
              (o = i.instance.close(!0, 250)))
            : a && i.distanceX > 0
            ? (o = i.instance.previous(300))
            : a && i.distanceX < 0 && (o = i.instance.next(300)),
          !1 !== o || ("x" != t && "y" != t) || i.instance.centerSlide(200),
          i.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function () {
        var t,
          e,
          i,
          o = this;
        o.contentLastPos &&
          (!1 === o.opts.momentum || o.dMs > 350
            ? ((t = o.contentLastPos.left), (e = o.contentLastPos.top))
            : ((t = o.contentLastPos.left + 500 * o.velocityX),
              (e = o.contentLastPos.top + 500 * o.velocityY)),
          ((i = o.limitPosition(
            t,
            e,
            o.contentStartPos.width,
            o.contentStartPos.height
          )).width = o.contentStartPos.width),
          (i.height = o.contentStartPos.height),
          n.fancybox.animate(o.$content, i, 366));
      }),
      (u.prototype.endZooming = function () {
        var t,
          e,
          i,
          o,
          s = this,
          r = s.instance.current,
          a = s.newWidth,
          l = s.newHeight;
        s.contentLastPos &&
          ((t = s.contentLastPos.left),
          (o = {
            top: (e = s.contentLastPos.top),
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1,
          }),
          n.fancybox.setTranslate(s.$content, o),
          a < s.canvasWidth && l < s.canvasHeight
            ? s.instance.scaleToFit(150)
            : a > r.width || l > r.height
            ? s.instance.scaleToActual(
                s.centerPointStartX,
                s.centerPointStartY,
                150
              )
            : ((i = s.limitPosition(t, e, a, l)),
              n.fancybox.animate(s.$content, i, 150)));
      }),
      (u.prototype.onTap = function (e) {
        var i,
          o = this,
          r = n(e.target),
          a = o.instance,
          l = a.current,
          c = (e && s(e)) || o.startPoints,
          u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
          h = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
          d = function (t) {
            var i = l.opts[t];
            if ((n.isFunction(i) && (i = i.apply(a, [l, e])), i))
              switch (i) {
                case "close":
                  a.close(o.startEvent);
                  break;
                case "toggleControls":
                  a.toggleControls();
                  break;
                case "next":
                  a.next();
                  break;
                case "nextOrClose":
                  a.group.length > 1 ? a.next() : a.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == l.type &&
                    (l.isLoaded || l.$ghost) &&
                    (a.canPan()
                      ? a.scaleToFit()
                      : a.isScaledDown()
                      ? a.scaleToActual(u, h)
                      : a.group.length < 2 && a.close(o.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (r.is("img") || !(u > r[0].clientWidth + r.offset().left))
        ) {
          if (
            r.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            i = "Outside";
          else if (r.is(".fancybox-slide")) i = "Slide";
          else {
            if (
              !a.current.$content ||
              !a.current.$content.find(r).addBack().filter(r).length
            )
              return;
            i = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(u - o.tapX) > 50 || Math.abs(h - o.tapY) > 50)
            )
              return this;
            d("dblclick" + i);
          } else
            (o.tapX = u),
              (o.tapY = h),
              l.opts["dblclick" + i] &&
              l.opts["dblclick" + i] !== l.opts["click" + i]
                ? (o.tapped = setTimeout(function () {
                    (o.tapped = null), a.isAnimating || d("click" + i);
                  }, 500))
                : d("click" + i);
          return this;
        }
      }),
      n(e)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new u(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          i = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          n.group.length < 2 || !i
            ? t.$button.hide()
            : i.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          i = n.instance,
          o = i.current;
        o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1)
          ? n.isActive &&
            "video" !== o.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                o.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              i.current.opts.loop || i.current.index != i.group.length - 1
                ? i.next()
                : i.jumpTo(0);
            }, o.opts.slideShow.speed)))
          : (n.stop(), (i.idleSecondsCounter = 0), i.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1),
          t.instance.trigger("onSlideShowChange", !1),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, i) {
          var o = e && e.SlideShow;
          i
            ? o && n.opts.slideShow.autoStart && o.start()
            : o && o.isActive && o.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var i = e && e.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function (n, i, o, s, r) {
          var a = i && i.SlideShow;
          !a ||
            !o.opts.slideShow ||
            (80 !== r && 32 !== r) ||
            e(t.activeElement).is("button,a,input") ||
            (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = {},
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i];
        if (o && o[1] in t) {
          for (var s = 0; s < o.length; s++) n[e[0][s]] = o[s];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var i = {
        request: function (e) {
          (e = e || t.documentElement)[n.requestFullscreen](
            e.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = i.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !t)
              .toggleClass("fancybox-button--fsexit", t));
        });
    }
    e(t).on({
      "onInit.fb": function (t, e) {
        n
          ? e && e.group[e.currIndex].opts.fullScreen
            ? (e.$refs.container.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), i.toggle();
                }
              ),
              e.opts.fullScreen &&
                !0 === e.opts.fullScreen.autoStart &&
                i.request(),
              (e.FullScreen = i))
            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
          : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      },
      "afterKeydown.fb": function (t, e, n, i, o) {
        e &&
          e.FullScreen &&
          70 === o &&
          (i.preventDefault(), e.FullScreen.toggle());
      },
      "beforeClose.fb": function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass("fancybox-is-fullscreen") &&
          i.exit();
      },
    });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var i = function (t) {
      this.init(t);
    };
    e.extend(i.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          i = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var o = 0, s = n.length;
          o < s && (n[o].thumb && i++, !(i > 1));
          o++
        );
        i > 1 && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          i = this,
          o = i.instance,
          s = i.opts.parentEl,
          r = [];
        i.$grid ||
          ((i.$grid = e(
            '<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>'
          ).appendTo(o.$refs.container.find(s).addBack().filter(s))),
          i.$grid.on("click", "a", function () {
            o.jumpTo(e(this).attr("data-index"));
          })),
          i.$list ||
            (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)),
          e.each(o.group, function (e, n) {
            (t = n.thumb) || "image" !== n.type || (t = n.src),
              r.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (i.$list[0].innerHTML = r.join("")),
          "x" === i.opts.axis &&
            i.$list.width(
              parseInt(i.$grid.css("padding-right"), 10) +
                o.group.length * i.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          i = this,
          o = i.$list,
          s = i.$grid;
        i.instance.current &&
          ((n = (e = o
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + i.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === i.opts.axis &&
          (n.top < 0 || n.top > o.height() - e.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t)
            : "x" === i.opts.axis &&
              (n.left < s.scrollLeft() ||
                n.left > s.scrollLeft() + (s.width() - e.outerWidth())) &&
              o.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            (n = new i(e)).isActive &&
            !0 === n.opts.autoStart &&
            n.show();
        },
        "beforeShow.fb": function (t, e, n, i) {
          var o = e && e.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, i, o) {
          var s = e && e.Thumbs;
          s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          n,
          i = e.fancybox.getInstance(),
          o = i.current || null;
        o &&
          ("function" === e.type(o.opts.share.url) &&
            (t = o.opts.share.url.apply(o, [i, o])),
          (n = o.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === o.type ? encodeURIComponent(o.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(
              /\{\{url_raw\}\}/g,
              (function (t) {
                var e = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#x2F;",
                  "`": "&#x60;",
                  "=": "&#x3D;",
                };
                return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                  return e[t];
                });
              })(t)
            )
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (t, e, n) {
    "use strict";
    function i() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        i =
          (n.length > 1 &&
            /^\+?\d+$/.test(n[n.length - 1]) &&
            parseInt(n.pop(-1), 10)) ||
          1;
      return { hash: e, index: i < 1 ? 1 : i, gallery: n.join("-") };
    }
    function o(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function s(t) {
      var e, n;
      return (
        !!t &&
        "" !==
          (n =
            (e = t.current ? t.current.opts : t.opts).hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) &&
        n
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            "onInit.fb": function (t, e) {
              var n, o;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = i()),
                (o = s(e)) &&
                  n.gallery &&
                  o == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, i, o, r) {
              var a;
              o &&
                !1 !== o.opts.hash &&
                (a = s(i)) &&
                ((i.currentHash =
                  a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                t.location.hash !== "#" + i.currentHash &&
                  (r && !i.origHash && (i.origHash = t.location.hash),
                  i.hashTimer && clearTimeout(i.hashTimer),
                  (i.hashTimer = setTimeout(function () {
                    "replaceState" in t.history
                      ? (t.history[r ? "pushState" : "replaceState"](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            "#" +
                            i.currentHash
                        ),
                        r && (i.hasCreatedHistory = !0))
                      : (t.location.hash = i.currentHash),
                      (i.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (n, i, o) {
              o &&
                !1 !== o.opts.hash &&
                (clearTimeout(i.hashTimer),
                i.currentHash && i.hasCreatedHistory
                  ? t.history.back()
                  : i.currentHash &&
                    ("replaceState" in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (i.origHash || "")
                        )
                      : (t.location.hash = i.origHash)),
                (i.currentHash = null));
            },
          }),
          n(t).on("hashchange.fb", function () {
            var t = i(),
              e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, i) {
              var o = n(i).data("FancyBox");
              if (o && o.currentHash) return (e = o), !1;
            }),
              e
                ? e.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : "" !== t.gallery && o(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || o(i());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, i) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var i = e.current,
              o = new Date().getTime();
            e.group.length < 2 ||
              !1 === i.opts.wheel ||
              ("auto" === i.opts.wheel && "image" !== i.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              i.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                o - n < 250 ||
                  ((n = o),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery),
  (function (t, e, n, i) {
    function o(e, n) {
      (this.settings = null),
        (this.options = t.extend({}, o.Defaults, n)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, n) {
            this._handlers[n] = t.proxy(this[n], this);
          }, this)
        ),
        t.each(
          o.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          o.Workers,
          t.proxy(function (e, n) {
            this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (o.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (o.Type = { Event: "event", State: "state" }),
      (o.Plugins = {}),
      (o.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              n = !this.settings.autoWidth,
              i = this.settings.rtl,
              o = {
                width: "auto",
                "margin-left": i ? e : "",
                "margin-right": i ? "" : e,
              };
            !n && this.$stage.children().css(o), (t.css = o);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              n = null,
              i = this._items.length,
              o = !this.settings.autoWidth,
              s = [];
            for (t.items = { merge: !1, width: e }; i--; )
              (n = this._mergers[i]),
                (n =
                  (this.settings.mergeFit &&
                    Math.min(n, this.settings.items)) ||
                  n),
                (t.items.merge = n > 1 || t.items.merge),
                (s[i] = o ? e * n : this._items[i].width());
            this._widths = s;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              n = this._items,
              i = this.settings,
              o = Math.max(2 * i.items, 4),
              s = 2 * Math.ceil(n.length / 2),
              r = i.loop && n.length ? (i.rewind ? o : Math.max(o, s)) : 0,
              a = "",
              l = "";
            for (r /= 2; r > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += n[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)),
                (l = n[e[e.length - 1]][0].outerHTML + l),
                (r -= 1);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                n = -1,
                i = 0,
                o = 0,
                s = [];
              ++n < e;

            )
              (i = s[n - 1] || 0),
                (o = this._widths[this.relative(n)] + this.settings.margin),
                s.push(i + o * t);
            this._coordinates = s;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(n);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              n = !this.settings.autoWidth,
              i = this.$stage.children();
            if (n && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  i.eq(e).css(t.css);
            else n && ((t.css.width = t.items.width), i.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              n,
              i,
              o = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + s,
              a = r + this.width() * o,
              l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++)
              (t = this._coordinates[n - 1] || 0),
                (e = Math.abs(this._coordinates[n]) + s * o),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(n);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage.children().eq(this.current()).addClass("center");
          },
        },
      ]),
      (o.prototype.initializeStage = function () {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass,
            }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
            this.$element.append(this.$stage.parent()));
      }),
      (o.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length)
          return (
            (this._items = e.get().map(function (e) {
              return t(e);
            })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (o.prototype.initialize = function () {
        var t, e, n;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : void 0),
          (n = this.$element.children(e).width()),
          t.length && n <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (o.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (o.prototype.setup = function () {
        var e = this.viewport(),
          n = this.options.responsive,
          i = -1,
          o = null;
        n
          ? (t.each(n, function (t) {
              t <= e && t > i && (i = Number(t));
            }),
            "function" ==
              typeof (o = t.extend({}, this.options, n[i])).stagePadding &&
              (o.stagePadding = o.stagePadding()),
            delete o.responsive,
            o.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + i
                  )
              ))
          : (o = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: o } }),
          (this._breakpoint = i),
          (this.settings = o),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (o.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (o.prototype.prepare = function (e) {
        var n = this.trigger("prepare", { content: e });
        return (
          n.data ||
            (n.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: n.data }),
          n.data
        );
      }),
      (o.prototype.update = function () {
        for (
          var e = 0,
            n = this._pipe.length,
            i = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            o = {};
          e < n;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, i).length > 0) &&
            this._pipe[e].run(o),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (o.prototype.width = function (t) {
        switch ((t = t || o.Width.Default)) {
          case o.Width.Inner:
          case o.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (o.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (o.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.isVisible() &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (o.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (o.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which &&
          (t.support.transform
            ? (i = {
                x: (i = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === i.length ? 12 : 4],
                y: i[16 === i.length ? 13 : 5],
              })
            : ((i = this.$stage.position()),
              (i = {
                x: this.settings.rtl
                  ? i.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : i.left,
                y: i.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = i),
          (this._drag.stage.current = i),
          (this._drag.pointer = this.pointer(e)),
          t(n).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(n).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var i = this.difference(this._drag.pointer, this.pointer(e));
              t(n).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (o.prototype.onDragMove = function (t) {
        var e = null,
          n = null,
          i = null,
          o = this.difference(this._drag.pointer, this.pointer(t)),
          s = this.difference(this._drag.stage.start, o);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (n = this.coordinates(this.maximum() + 1) - e),
              (s.x = ((((s.x - e) % n) + n) % n) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (n = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (i = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
              (s.x = Math.max(Math.min(s.x, e + i), n + i))),
          (this._drag.stage.current = s),
          this.animate(s.x));
      }),
      (o.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)),
          o = this._drag.stage.current,
          s = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(o.x, 0 !== i.x ? s : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = s),
            (Math.abs(i.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (o.prototype.closest = function (e, n) {
        var i = -1,
          o = this.width(),
          s = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              s,
              t.proxy(function (t, r) {
                return (
                  "left" === n && e > r - 30 && e < r + 30
                    ? (i = t)
                    : "right" === n && e > r - o - 30 && e < r - o + 30
                    ? (i = t + 1)
                    : this.op(e, "<", r) &&
                      this.op(e, ">", void 0 !== s[t + 1] ? s[t + 1] : r - o) &&
                      (i = "left" === n ? t + 1 : t),
                  -1 === i
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", s[this.minimum()])
              ? (i = e = this.minimum())
              : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())),
          i
        );
      }),
      (o.prototype.animate = function (e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          n && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : ""),
              })
            : n
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (o.prototype.current = function (t) {
        if (void 0 === t) return this._current;
        if (0 !== this._items.length) {
          if (((t = this.normalize(t)), this._current !== t)) {
            var e = this.trigger("change", {
              property: { name: "position", value: t },
            });
            void 0 !== e.data && (t = this.normalize(e.data)),
              (this._current = t),
              this.invalidate("position"),
              this.trigger("changed", {
                property: { name: "position", value: this._current },
              });
          }
          return this._current;
        }
      }),
      (o.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (o.prototype.reset = function (t) {
        void 0 !== (t = this.normalize(t)) &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (o.prototype.normalize = function (t, e) {
        var n = this._items.length,
          i = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || n < 1
            ? (t = void 0)
            : (t < 0 || t >= n + i) &&
              (t = ((((t - i / 2) % n) + n) % n) + i / 2),
          t
        );
      }),
      (o.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (o.prototype.maximum = function (t) {
        var e,
          n,
          i,
          o = this.settings,
          s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
          if ((e = this._items.length))
            for (
              n = this._items[--e].width(), i = this.$element.width();
              e-- &&
              !((n += this._items[e].width() + this.settings.margin) > i);

            );
          s = e + 1;
        } else
          s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0);
      }),
      (o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (o.prototype.items = function (t) {
        return void 0 === t
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (o.prototype.mergers = function (t) {
        return void 0 === t
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (o.prototype.clones = function (e) {
        var n = this._clones.length / 2,
          i = n + this._items.length,
          o = function (t) {
            return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2;
          };
        return void 0 === e
          ? t.map(this._clones, function (t, e) {
              return o(e);
            })
          : t.map(this._clones, function (t, n) {
              return t === e ? o(n) : null;
            });
      }),
      (o.prototype.speed = function (t) {
        return void 0 !== t && (this._speed = t), this._speed;
      }),
      (o.prototype.coordinates = function (e) {
        var n,
          i = 1,
          o = e - 1;
        return void 0 === e
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((i = -1), (o = e + 1)),
                (n = this._coordinates[e]),
                (n +=
                  ((this.width() - n + (this._coordinates[o] || 0)) / 2) * i))
              : (n = this._coordinates[o] || 0),
            (n = Math.ceil(n)));
      }),
      (o.prototype.duration = function (t, e, n) {
        return 0 === n
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(n || this.settings.smartSpeed);
      }),
      (o.prototype.to = function (t, e) {
        var n = this.current(),
          i = null,
          o = t - this.relative(n),
          s = (o > 0) - (o < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r),
            (i = (((((t = n + o) - a) % r) + r) % r) + a) !== t &&
              i - o <= l &&
              i - o > 0 &&
              ((n = i - o), (t = i), this.reset(n)))
          : (t = this.settings.rewind
              ? ((t % (l += 1)) + l) % l
              : Math.max(a, Math.min(l, t))),
          this.speed(this.duration(n, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (o.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (o.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (o.prototype.onTransitionEnd = function (t) {
        if (
          void 0 !== t &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (o.prototype.viewport = function () {
        var i;
        return (
          this.options.responsiveBaseElement !== e
            ? (i = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (i = e.innerWidth)
            : n.documentElement && n.documentElement.clientWidth
            ? (i = n.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          i
        );
      }),
      (o.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (o.prototype.add = function (e, n) {
        var i = this.relative(this._current);
        (n = void 0 === n ? this._items.length : this.normalize(n, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: n }),
          (e = this.prepare(e)),
          0 === this._items.length || n === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[n - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[n].before(e),
              this._items.splice(n, 0, e),
              this._mergers.splice(
                n,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[i] && this.reset(this._items[i].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: n });
      }),
      (o.prototype.remove = function (t) {
        void 0 !== (t = this.normalize(t, !0)) &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (o.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, n) {
            this.enter("pre-loading"),
              (n = t(n)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    n.attr("src", t.target.src),
                      n.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  n.attr("src") ||
                    n.attr("data-src") ||
                    n.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (o.prototype.destroy = function () {
        for (var i in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(n).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (o.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
          case "<":
            return i ? t > n : t < n;
          case ">":
            return i ? t < n : t > n;
          case ">=":
            return i ? t <= n : t >= n;
          case "<=":
            return i ? t >= n : t <= n;
        }
      }),
      (o.prototype.on = function (t, e, n, i) {
        t.addEventListener
          ? t.addEventListener(e, n, i)
          : t.attachEvent && t.attachEvent("on" + e, n);
      }),
      (o.prototype.off = function (t, e, n, i) {
        t.removeEventListener
          ? t.removeEventListener(e, n, i)
          : t.detachEvent && t.detachEvent("on" + e, n);
      }),
      (o.prototype.trigger = function (e, n, i, s, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, i], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          c = t.Event(
            [e, "owl", i || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, n)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: o.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, c)),
          c
        );
      }),
      (o.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            void 0 === this._states.current[e] && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (o.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var n = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !n ||
                !n.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : n.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === o.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (n, i) {
                return t.inArray(n, this._states.tags[e.name]) === i;
              }, this)
            )));
      }),
      (o.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (o.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (o.prototype.pointer = function (t) {
        var n = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((n.x = t.pageX), (n.y = t.pageY))
            : ((n.x = t.clientX), (n.y = t.clientY)),
          n
        );
      }),
      (o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (o.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var i = t(this),
            s = i.data("owl.carousel");
          s ||
            ((s = new o(this, "object" == typeof e && e)),
            i.data("owl.carousel", s),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, n) {
                s.register({ type: o.Type.Event, name: n }),
                  s.$element.on(
                    n + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([n]),
                        s[n].apply(this, [].slice.call(arguments, 1)),
                        this.release([n]));
                    }, s)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n);
        });
      }),
      (t.fn.owlCarousel.Constructor = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (o.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (o.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (o.prototype.destroy = function () {
        var t, n;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              ) {
                var n = this._core.settings,
                  i = (n.center && Math.ceil(n.items / 2)) || n.items,
                  o = (n.center && -1 * i) || 0,
                  s =
                    (e.property && void 0 !== e.property.value
                      ? e.property.value
                      : this._core.current()) + o,
                  r = this._core.clones().length,
                  a = t.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  n.lazyLoadEager > 0 &&
                  ((i += n.lazyLoadEager),
                  n.loop && ((s -= n.lazyLoadEager), i++));
                  o++ < i;

                )
                  this.load(r / 2 + this._core.relative(s)),
                    r && t.each(this._core.clones(this._core.relative(s)), a),
                    s++;
              }
            }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (o.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n),
          o = i && i.find(".owl-lazy");
        !o ||
          t.inArray(i.get(0), this._loaded) > -1 ||
          (o.each(
            t.proxy(function (n, i) {
              var o,
                s = t(i),
                r =
                  (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                  s.attr("data-src") ||
                  s.attr("data-srcset");
              this._core.trigger("load", { element: s, url: r }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : s.is("source")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: s, url: r },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", r)
                  : (((o = new Image()).onload = t.proxy(function () {
                      s.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: r },
                          "lazy"
                        );
                    }, this)),
                    (o.src = r));
            }, this)
          ),
          this._loaded.push(i.get(0)));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (n) {
      (this._core = n),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var i = this;
      t(e).on("load", function () {
        i._core.settings.autoHeight && i.update();
      }),
        t(e).resize(function () {
          i._core.settings.autoHeight &&
            (null != i._intervalId && clearTimeout(i._intervalId),
            (i._intervalId = setTimeout(function () {
              i.update();
            }, 250)));
        });
    };
    (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (o.prototype.update = function () {
        var e = this._core._current,
          n = e + this._core.settings.items,
          i = this._core.settings.lazyLoad,
          o = this._core.$stage.children().toArray().slice(e, n),
          s = [],
          r = 0;
        t.each(o, function (e, n) {
          s.push(t(n).height());
        }),
          (r = Math.max.apply(null, s)) <= 1 &&
            i &&
            this._previousHeight &&
            (r = this._previousHeight),
          (this._previousHeight = r),
          this._core.$stage
            .parent()
            .height(r)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var n = t(e.content).find(".owl-video");
              n.length &&
                (n.css("display", "none"), this.fetch(n, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (o.prototype.fetch = function (t, e) {
        var n = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          i =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          o = t.attr("data-width") || this._core.settings.videoWidth,
          s = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (i = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
          if (!(i[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          n = "vzaar";
        }
        (i = i[6]),
          (this._videos[r] = { type: n, id: i, width: o, height: s }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (o.prototype.thumbnail = function (e, n) {
        var i,
          o,
          s =
            n.width && n.height
              ? "width:" + n.width + "px;height:" + n.height + "px;"
              : "",
          r = e.find("img"),
          a = "src",
          l = "",
          c = this._core.settings,
          u = function (n) {
            '<div class="owl-video-play-icon"></div>',
              (i = c.lazyLoad
                ? t("<div/>", { class: "owl-video-tn " + l, srcType: n })
                : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + n + ")",
                  })),
              e.after(i),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: s })),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          r.length)
        )
          return u(r.attr(a)), r.remove(), !1;
        "youtube" === n.type
          ? ((o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"), u(o))
          : "vimeo" === n.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (o = t[0].thumbnail_large), u(o);
              },
            })
          : "vzaar" === n.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (o = t.framegrab_url), u(o);
              },
            });
      }),
      (o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (o.prototype.play = function (e) {
        var n,
          i = t(e.target).closest("." + this._core.settings.itemClass),
          o = this._videos[i.attr("data-video")],
          s = o.width || "100%",
          r = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          (n = t(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", r),
          n.attr("width", s),
          "youtube" === o.type
            ? n.attr(
                "src",
                "//www.youtube.com/embed/" +
                  o.id +
                  "?autoplay=1&rel=0&v=" +
                  o.id
              )
            : "vimeo" === o.type
            ? n.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1")
            : "vzaar" === o.type &&
              n.attr(
                "src",
                "//view.vzaar.com/" + o.id + "/player?autoplay=true"
              ),
          t(n)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(i.find(".owl-video")),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (o.prototype.isInFullScreen = function () {
        var e =
          n.fullscreenElement ||
          n.mozFullScreenElement ||
          n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, o.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = void 0),
        (this.next = void 0),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (o.Defaults = { animateOut: !1, animateIn: !1 }),
      (o.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            n = t.proxy(this.clear, this),
            i = this.core.$stage.children().eq(this.previous),
            o = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(t.support.animation.end, n)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            s &&
              o
                .one(t.support.animation.end, n)
                .addClass("animated owl-animated-in")
                .addClass(s));
        }
      }),
      (o.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = function (e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, n) {
            t.namespace && this.play(e, n);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (o.prototype._next = function (i) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, i),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            n.hidden ||
            this._core.next(i || this._core.settings.autoplaySpeed);
      }),
      (o.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (o.prototype.play = function (n, i) {
        var o;
        this._core.is("rotating") || this._core.enter("rotating"),
          (n = n || this._core.settings.autoplayTimeout),
          (o = Math.min(this._time % (this._timeout || n), n)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : e.clearTimeout(this._call),
          (this._time += (this.read() % n) - o),
          (this._timeout = n),
          (this._call = e.setTimeout(t.proxy(this._next, this, i), n - o));
      }),
      (o.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          e.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (o.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          e.clearTimeout(this._call));
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    "use strict";
    var o = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (o.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (o.prototype.initialize = function () {
        var e,
          n = this._core.settings;
        for (e in ((this._controls.$relative = (
          n.navContainer
            ? t(n.navContainer)
            : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + n.navElement + ">")
          .addClass(n.navClass[0])
          .html(n.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(n.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + n.navElement + ">")
          .addClass(n.navClass[1])
          .html(n.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(n.navSpeed);
            }, this)
          )),
        n.dotsData ||
          (this._templates = [
            t('<button role="button">')
              .addClass(n.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          n.dotsContainer
            ? t(n.dotsContainer)
            : t("<div>").addClass(n.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (o.prototype.destroy = function () {
        var t, e, n, i, o;
        for (t in ((o = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && o.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (o.prototype.update = function () {
        var t,
          e,
          n = this._core.clones().length / 2,
          i = n + this._core.items().length,
          o = this._core.maximum(!0),
          s = this._core.settings,
          r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if (
          ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)),
          s.dots || "page" == s.slideBy)
        )
          for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
            if (e >= r || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - n),
                  end: t - n + r - 1,
                }),
                Math.min(o, t - n) === o)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (o.prototype.draw = function () {
        var e,
          n = this._core.settings,
          i = this._core.items().length <= n.items,
          o = this._core.relative(this._core.current()),
          s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i),
          n.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !s && o <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !s && o >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !n.dots || i),
          n.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            n.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (o.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            n &&
            (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items),
        };
      }),
      (o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, n) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (o.prototype.getPosition = function (e) {
        var n,
          i,
          o = this._core.settings;
        return (
          "page" == o.slideBy
            ? ((n = t.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              e ? ++n : --n,
              (n = this._pages[((n % i) + i) % i].start))
            : ((n = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              e ? (n += o.slideBy) : (n -= o.slideBy)),
          n
        );
      }),
      (o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (o.prototype.to = function (e, n, i) {
        var o;
        !i && this._pages.length
          ? ((o = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % o) + o) % o].start,
              n
            ))
          : t.proxy(this._overrides.to, this._core)(e, n);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    "use strict";
    var o = function (n) {
      (this._core = n),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (n) {
            n.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var n = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!n) return;
              this._hashes[n] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (n) {
            if (n.namespace && "position" === n.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                o = t
                  .map(this._hashes, function (t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!o || e.location.hash.slice(1) === o) return;
              e.location.hash = o;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var n = e.location.hash.substring(1),
              i = this._core.$stage.children(),
              o = this._hashes[n] && i.index(this._hashes[n]);
            void 0 !== o &&
              o !== this._core.current() &&
              this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (o.Defaults = { URLhashListener: !1 }),
      (o.prototype.destroy = function () {
        var n, i;
        for (n in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, n, i) {
    var o = t("<support>").get(0).style,
      s = "Webkit Moz O ms".split(" "),
      r = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      a = function () {
        return !!u("transform");
      },
      l = function () {
        return !!u("perspective");
      },
      c = function () {
        return !!u("animation");
      };
    function u(e, n) {
      var r = !1,
        a = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + s.join(a + " ") + a).split(" "), function (t, e) {
          if (o[e] !== i) return (r = !n || e), !1;
        }),
        r
      );
    }
    function h(t) {
      return u(t, !0);
    }
    (function () {
      return !!u("transition");
    })() &&
      ((t.support.transition = new String(h("transition"))),
      (t.support.transition.end = r.transition.end[t.support.transition])),
      c() &&
        ((t.support.animation = new String(h("animation"))),
        (t.support.animation.end = r.animation.end[t.support.animation])),
      a() &&
        ((t.support.transform = new String(h("transform"))),
        (t.support.transform3d = l()));
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.Popper = e());
  })(this, function () {
    "use strict";
    function t(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }
    function e(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n;
    }
    function n(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function i(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;
        case "#document":
          return t.body;
      }
      var o = e(t),
        s = o.overflow,
        r = o.overflowX,
        a = o.overflowY;
      return /(auto|scroll|overlay)/.test(s + a + r) ? t : i(n(t));
    }
    function o(t) {
      return 11 === t ? U : 10 === t ? Y : U || Y;
    }
    function s(t) {
      if (!t) return document.documentElement;
      for (
        var n = o(10) ? document.body : null, i = t.offsetParent;
        i === n && t.nextElementSibling;

      )
        i = (t = t.nextElementSibling).offsetParent;
      var r = i && i.nodeName;
      return r && "BODY" !== r && "HTML" !== r
        ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) &&
          "static" === e(i, "position")
          ? s(i)
          : i
        : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
    }
    function r(t) {
      return null === t.parentNode ? t : r(t.parentNode);
    }
    function a(t, e) {
      if (!(t && t.nodeType && e && e.nodeType))
        return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        l = document.createRange();
      l.setStart(i, 0), l.setEnd(o, 0);
      var c = l.commonAncestorContainer;
      if ((t !== c && e !== c) || i.contains(o))
        return (function (t) {
          var e = t.nodeName;
          return "BODY" !== e && ("HTML" === e || s(t.firstElementChild) === t);
        })(c)
          ? c
          : s(c);
      var u = r(t);
      return u.host ? a(u.host, e) : a(t, r(e).host);
    }
    function l(t) {
      var e =
          "top" ===
          (1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top")
            ? "scrollTop"
            : "scrollLeft",
        n = t.nodeName;
      if ("BODY" === n || "HTML" === n) {
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e];
      }
      return t[e];
    }
    function c(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(e, "top"),
        o = l(e, "left"),
        s = n ? -1 : 1;
      return (
        (t.top += i * s),
        (t.bottom += i * s),
        (t.left += o * s),
        (t.right += o * s),
        t
      );
    }
    function u(t, e) {
      var n = "x" === e ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
      return (
        parseFloat(t["border" + n + "Width"], 10) +
        parseFloat(t["border" + i + "Width"], 10)
      );
    }
    function h(t, e, n, i) {
      return z(
        e["offset" + t],
        e["scroll" + t],
        n["client" + t],
        n["offset" + t],
        n["scroll" + t],
        o(10)
          ? n["offset" + t] +
              i["margin" + ("Height" === t ? "Top" : "Left")] +
              i["margin" + ("Height" === t ? "Bottom" : "Right")]
          : 0
      );
    }
    function d() {
      var t = document.body,
        e = document.documentElement,
        n = o(10) && getComputedStyle(e);
      return { height: h("Height", t, e, n), width: h("Width", t, e, n) };
    }
    function f(t) {
      return Z({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function p(t) {
      var n = {};
      try {
        if (o(10)) {
          n = t.getBoundingClientRect();
          var i = l(t, "top"),
            s = l(t, "left");
          (n.top += i), (n.left += s), (n.bottom += i), (n.right += s);
        } else n = t.getBoundingClientRect();
      } catch (t) {}
      var r = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top,
        },
        a = "HTML" === t.nodeName ? d() : {},
        c = a.width || t.clientWidth || r.right - r.left,
        h = a.height || t.clientHeight || r.bottom - r.top,
        p = t.offsetWidth - c,
        g = t.offsetHeight - h;
      if (p || g) {
        var m = e(t);
        (p -= u(m, "x")), (g -= u(m, "y")), (r.width -= p), (r.height -= g);
      }
      return f(r);
    }
    function g(t, n) {
      var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        r = o(10),
        a = "HTML" === n.nodeName,
        l = p(t),
        u = p(n),
        h = i(t),
        d = e(n),
        g = parseFloat(d.borderTopWidth, 10),
        m = parseFloat(d.borderLeftWidth, 10);
      s &&
        "HTML" === n.nodeName &&
        ((u.top = z(u.top, 0)), (u.left = z(u.left, 0)));
      var v = f({
        top: l.top - u.top - g,
        left: l.left - u.left - m,
        width: l.width,
        height: l.height,
      });
      if (((v.marginTop = 0), (v.marginLeft = 0), !r && a)) {
        var y = parseFloat(d.marginTop, 10),
          b = parseFloat(d.marginLeft, 10);
        (v.top -= g - y),
          (v.bottom -= g - y),
          (v.left -= m - b),
          (v.right -= m - b),
          (v.marginTop = y),
          (v.marginLeft = b);
      }
      return (
        (r && !s ? n.contains(h) : n === h && "BODY" !== h.nodeName) &&
          (v = c(v, n)),
        v
      );
    }
    function m(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = t.ownerDocument.documentElement,
        i = g(t, n),
        o = z(n.clientWidth, window.innerWidth || 0),
        s = z(n.clientHeight, window.innerHeight || 0),
        r = e ? 0 : l(n),
        a = e ? 0 : l(n, "left");
      return f({
        top: r - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: o,
        height: s,
      });
    }
    function v(t) {
      var i = t.nodeName;
      return (
        "BODY" !== i &&
        "HTML" !== i &&
        ("fixed" === e(t, "position") || v(n(t)))
      );
    }
    function y(t) {
      if (!t || !t.parentElement || o()) return document.documentElement;
      for (var n = t.parentElement; n && "none" === e(n, "transform"); )
        n = n.parentElement;
      return n || document.documentElement;
    }
    function b(t, e, o, s) {
      var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        l = { top: 0, left: 0 },
        c = r ? y(t) : a(t, e);
      if ("viewport" === s) l = m(c, r);
      else {
        var u;
        "scrollParent" === s
          ? "BODY" === (u = i(n(e))).nodeName &&
            (u = t.ownerDocument.documentElement)
          : (u = "window" === s ? t.ownerDocument.documentElement : s);
        var h = g(u, c, r);
        if ("HTML" !== u.nodeName || v(c)) l = h;
        else {
          var f = d(),
            p = f.height,
            b = f.width;
          (l.top += h.top - h.marginTop),
            (l.bottom = p + h.top),
            (l.left += h.left - h.marginLeft),
            (l.right = b + h.left);
        }
      }
      return (l.left += o), (l.top += o), (l.right -= o), (l.bottom -= o), l;
    }
    function w(t) {
      return t.width * t.height;
    }
    function _(t, e, n, i, o) {
      var s =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var r = b(n, i, s, o),
        a = {
          top: { width: r.width, height: e.top - r.top },
          right: { width: r.right - e.right, height: r.height },
          bottom: { width: r.width, height: r.bottom - e.bottom },
          left: { width: e.left - r.left, height: r.height },
        },
        l = Object.keys(a)
          .map(function (t) {
            return Z({ key: t }, a[t], { area: w(a[t]) });
          })
          .sort(function (t, e) {
            return e.area - t.area;
          }),
        c = l.filter(function (t) {
          var e = t.width,
            i = t.height;
          return e >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        h = t.split("-")[1];
      return u + (h ? "-" + h : "");
    }
    function x(t, e, n) {
      var i =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return g(n, i ? y(e) : a(e, n), i);
    }
    function C(t) {
      var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function T(t) {
      var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }
    function E(t, e, n) {
      n = n.split("-")[0];
      var i = C(t),
        o = { width: i.width, height: i.height },
        s = -1 !== ["right", "left"].indexOf(n),
        r = s ? "top" : "left",
        a = s ? "left" : "top",
        l = s ? "height" : "width",
        c = s ? "width" : "height";
      return (
        (o[r] = e[r] + e[l] / 2 - i[l] / 2),
        (o[a] = n === a ? e[a] - i[c] : e[T(a)]),
        o
      );
    }
    function S(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function D(e, n, i) {
      return (
        (void 0 === i
          ? e
          : e.slice(
              0,
              (function (t, e, n) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function (t) {
                    return t[e] === n;
                  });
                var i = S(t, function (t) {
                  return t[e] === n;
                });
                return t.indexOf(i);
              })(e, "name", i)
            )
        ).forEach(function (e) {
          e.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = e.function || e.fn;
          e.enabled &&
            t(i) &&
            ((n.offsets.popper = f(n.offsets.popper)),
            (n.offsets.reference = f(n.offsets.reference)),
            (n = i(n, e)));
        }),
        n
      );
    }
    function A(t, e) {
      return t.some(function (t) {
        var n = t.name;
        return t.enabled && n === e;
      });
    }
    function $(t) {
      for (
        var e = [!1, "ms", "Webkit", "Moz", "O"],
          n = t.charAt(0).toUpperCase() + t.slice(1),
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i],
          s = o ? "" + o + n : t;
        if (void 0 !== document.body.style[s]) return s;
      }
      return null;
    }
    function I(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function k(t, e, n, o) {
      (n.updateBound = o),
        I(t).addEventListener("resize", n.updateBound, { passive: !0 });
      var s = i(t);
      return (
        (function t(e, n, o, s) {
          var r = "BODY" === e.nodeName,
            a = r ? e.ownerDocument.defaultView : e;
          a.addEventListener(n, o, { passive: !0 }),
            r || t(i(a.parentNode), n, o, s),
            s.push(a);
        })(s, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = s),
        (n.eventsEnabled = !0),
        n
      );
    }
    function P() {
      var t, e;
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((t = this.reference),
          (e = this.state),
          I(t).removeEventListener("resize", e.updateBound),
          e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound);
          }),
          (e.updateBound = null),
          (e.scrollParents = []),
          (e.scrollElement = null),
          (e.eventsEnabled = !1),
          e)));
    }
    function N(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function O(t, e) {
      Object.keys(e).forEach(function (n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          N(e[n]) &&
          (i = "px"),
          (t.style[n] = e[n] + i);
      });
    }
    function L(t, e, n) {
      var i = S(t, function (t) {
          return t.name === e;
        }),
        o =
          !!i &&
          t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order;
          });
      if (!o) {
        var s = "`" + e + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            s +
            " modifier in order to work, be sure to include it before " +
            s +
            "!"
        );
      }
      return o;
    }
    function j(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = tt.indexOf(t),
        i = tt.slice(n + 1).concat(tt.slice(0, n));
      return e ? i.reverse() : i;
    }
    function M(t, e, n, i) {
      var o = [0, 0],
        s = -1 !== ["right", "left"].indexOf(i),
        r = t.split(/(\+|\-)/).map(function (t) {
          return t.trim();
        }),
        a = r.indexOf(
          S(r, function (t) {
            return -1 !== t.search(/,|\s/);
          })
        );
      r[a] &&
        -1 === r[a].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === a
            ? [r]
            : [
                r.slice(0, a).concat([r[a].split(l)[0]]),
                [r[a].split(l)[1]].concat(r.slice(a + 1)),
              ];
      return (
        (c = c.map(function (t, i) {
          var o = (1 === i ? !s : s) ? "height" : "width",
            r = !1;
          return t
            .reduce(function (t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                ? ((t[t.length - 1] = e), (r = !0), t)
                : r
                ? ((t[t.length - 1] += e), (r = !1), t)
                : t.concat(e);
            }, [])
            .map(function (t) {
              return (function (t, e, n, i) {
                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  s = +o[1],
                  r = o[2];
                if (!s) return t;
                if (0 === r.indexOf("%")) {
                  var a;
                  switch (r) {
                    case "%p":
                      a = n;
                      break;
                    case "%":
                    case "%r":
                    default:
                      a = i;
                  }
                  return (f(a)[e] / 100) * s;
                }
                return "vh" === r || "vw" === r
                  ? (("vh" === r
                      ? z(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : z(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      s
                  : s;
              })(t, o, e, n);
            });
        })).forEach(function (t, e) {
          t.forEach(function (n, i) {
            N(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
          });
        }),
        o
      );
    }
    for (
      var H = Math.min,
        F = Math.round,
        R = Math.floor,
        z = Math.max,
        q = "undefined" != typeof window && "undefined" != typeof document,
        W = ["Edge", "Trident", "Firefox"],
        B = 0,
        Q = 0;
      Q < W.length;
      Q += 1
    )
      if (q && 0 <= navigator.userAgent.indexOf(W[Q])) {
        B = 1;
        break;
      }
    var V =
        q && window.Promise
          ? function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function () {
                    (e = !1), t();
                  }));
              };
            }
          : function (t) {
              var e = !1;
              return function () {
                e ||
                  ((e = !0),
                  setTimeout(function () {
                    (e = !1), t();
                  }, B));
              };
            },
      U = q && !(!window.MSInputMethodContext || !document.documentMode),
      Y = q && /MSIE 10/.test(navigator.userAgent),
      X = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      K = (function () {
        function t(t, e) {
          for (var n, i = 0; i < e.length; i++)
            ((n = e[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        return function (e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      G = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      },
      Z =
        Object.assign ||
        function (t) {
          for (var e, n = 1; n < arguments.length; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        },
      J = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      tt = J.slice(3),
      et = "flip",
      nt = "clockwise",
      it = "counterclockwise",
      ot = (function () {
        function e(n, i) {
          var o = this,
            s =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          X(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(o.update);
            }),
            (this.update = V(this.update.bind(this))),
            (this.options = Z({}, e.Defaults, s)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(Z({}, e.Defaults.modifiers, s.modifiers)).forEach(
              function (t) {
                o.options.modifiers[t] = Z(
                  {},
                  e.Defaults.modifiers[t] || {},
                  s.modifiers ? s.modifiers[t] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (t) {
                return Z({ name: t }, o.options.modifiers[t]);
              })
              .sort(function (t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function (e) {
              e.enabled &&
                t(e.onLoad) &&
                e.onLoad(o.reference, o.popper, o.options, e, o.state);
            }),
            this.update();
          var r = this.options.eventsEnabled;
          r && this.enableEventListeners(), (this.state.eventsEnabled = r);
        }
        return (
          K(e, [
            {
              key: "update",
              value: function () {
                return function () {
                  if (!this.state.isDestroyed) {
                    var t = {
                      instance: this,
                      styles: {},
                      arrowStyles: {},
                      attributes: {},
                      flipped: !1,
                      offsets: {},
                    };
                    (t.offsets.reference = x(
                      this.state,
                      this.popper,
                      this.reference,
                      this.options.positionFixed
                    )),
                      (t.placement = _(
                        this.options.placement,
                        t.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (t.originalPlacement = t.placement),
                      (t.positionFixed = this.options.positionFixed),
                      (t.offsets.popper = E(
                        this.popper,
                        t.offsets.reference,
                        t.placement
                      )),
                      (t.offsets.popper.position = this.options.positionFixed
                        ? "fixed"
                        : "absolute"),
                      (t = D(this.modifiers, t)),
                      this.state.isCreated
                        ? this.options.onUpdate(t)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(t));
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
                    A(this.modifiers, "applyStyle") &&
                      (this.popper.removeAttribute("x-placement"),
                      (this.popper.style.position = ""),
                      (this.popper.style.top = ""),
                      (this.popper.style.left = ""),
                      (this.popper.style.right = ""),
                      (this.popper.style.bottom = ""),
                      (this.popper.style.willChange = ""),
                      (this.popper.style[$("transform")] = "")),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy &&
                      this.popper.parentNode.removeChild(this.popper),
                    this
                  );
                }.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return function () {
                  this.state.eventsEnabled ||
                    (this.state = k(
                      this.reference,
                      this.options,
                      this.state,
                      this.scheduleUpdate
                    ));
                }.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return P.call(this);
              },
            },
          ]),
          e
        );
      })();
    return (
      (ot.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ot.placements = J),
      (ot.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = e.split("-")[1];
              if (i) {
                var o = t.offsets,
                  s = o.reference,
                  r = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: G({}, l, s[l]),
                    end: G({}, l, s[l] + s[c] - r[c]),
                  };
                t.offsets.popper = Z({}, r, u[i]);
              }
              return t;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var n,
                i = e.offset,
                o = t.placement,
                s = t.offsets,
                r = s.popper,
                a = s.reference,
                l = o.split("-")[0];
              return (
                (n = N(+i) ? [+i, 0] : M(i, r, a, l)),
                "left" === l
                  ? ((r.top += n[0]), (r.left -= n[1]))
                  : "right" === l
                  ? ((r.top += n[0]), (r.left += n[1]))
                  : "top" === l
                  ? ((r.left += n[0]), (r.top -= n[1]))
                  : "bottom" === l && ((r.left += n[0]), (r.top += n[1])),
                (t.popper = r),
                t
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, e) {
              var n = e.boundariesElement || s(t.instance.popper);
              t.instance.reference === n && (n = s(n));
              var i = $("transform"),
                o = t.instance.popper.style,
                r = o.top,
                a = o.left,
                l = o[i];
              (o.top = ""), (o.left = ""), (o[i] = "");
              var c = b(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                n,
                t.positionFixed
              );
              (o.top = r), (o.left = a), (o[i] = l), (e.boundaries = c);
              var u = e.priority,
                h = t.offsets.popper,
                d = {
                  primary: function (t) {
                    var n = h[t];
                    return (
                      h[t] < c[t] &&
                        !e.escapeWithReference &&
                        (n = z(h[t], c[t])),
                      G({}, t, n)
                    );
                  },
                  secondary: function (t) {
                    var n = "right" === t ? "left" : "top",
                      i = h[n];
                    return (
                      h[t] > c[t] &&
                        !e.escapeWithReference &&
                        (i = H(
                          h[n],
                          c[t] - ("right" === t ? h.width : h.height)
                        )),
                      G({}, n, i)
                    );
                  },
                };
              return (
                u.forEach(function (t) {
                  var e =
                    -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                  h = Z({}, h, d[e](t));
                }),
                (t.offsets.popper = h),
                t
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = t.offsets,
                n = e.popper,
                i = e.reference,
                o = t.placement.split("-")[0],
                s = R,
                r = -1 !== ["top", "bottom"].indexOf(o),
                a = r ? "right" : "bottom",
                l = r ? "left" : "top",
                c = r ? "width" : "height";
              return (
                n[a] < s(i[l]) && (t.offsets.popper[l] = s(i[l]) - n[c]),
                n[l] > s(i[a]) && (t.offsets.popper[l] = s(i[a])),
                t
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, n) {
              var i;
              if (!L(t.instance.modifiers, "arrow", "keepTogether")) return t;
              var o = n.element;
              if ("string" == typeof o) {
                if (!(o = t.instance.popper.querySelector(o))) return t;
              } else if (!t.instance.popper.contains(o))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  t
                );
              var s = t.placement.split("-")[0],
                r = t.offsets,
                a = r.popper,
                l = r.reference,
                c = -1 !== ["left", "right"].indexOf(s),
                u = c ? "height" : "width",
                h = c ? "Top" : "Left",
                d = h.toLowerCase(),
                p = c ? "left" : "top",
                g = c ? "bottom" : "right",
                m = C(o)[u];
              l[g] - m < a[d] && (t.offsets.popper[d] -= a[d] - (l[g] - m)),
                l[d] + m > a[g] && (t.offsets.popper[d] += l[d] + m - a[g]),
                (t.offsets.popper = f(t.offsets.popper));
              var v = l[d] + l[u] / 2 - m / 2,
                y = e(t.instance.popper),
                b = parseFloat(y["margin" + h], 10),
                w = parseFloat(y["border" + h + "Width"], 10),
                _ = v - t.offsets.popper[d] - b - w;
              return (
                (_ = z(H(a[u] - m, _), 0)),
                (t.arrowElement = o),
                (t.offsets.arrow = (G((i = {}), d, F(_)), G(i, p, ""), i)),
                t
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (t, e) {
              if (A(t.instance.modifiers, "inner")) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var n = b(
                  t.instance.popper,
                  t.instance.reference,
                  e.padding,
                  e.boundariesElement,
                  t.positionFixed
                ),
                i = t.placement.split("-")[0],
                o = T(i),
                s = t.placement.split("-")[1] || "",
                r = [];
              switch (e.behavior) {
                case et:
                  r = [i, o];
                  break;
                case nt:
                  r = j(i);
                  break;
                case it:
                  r = j(i, !0);
                  break;
                default:
                  r = e.behavior;
              }
              return (
                r.forEach(function (a, l) {
                  if (i !== a || r.length === l + 1) return t;
                  (i = t.placement.split("-")[0]), (o = T(i));
                  var c = t.offsets.popper,
                    u = t.offsets.reference,
                    h = R,
                    d =
                      ("left" === i && h(c.right) > h(u.left)) ||
                      ("right" === i && h(c.left) < h(u.right)) ||
                      ("top" === i && h(c.bottom) > h(u.top)) ||
                      ("bottom" === i && h(c.top) < h(u.bottom)),
                    f = h(c.left) < h(n.left),
                    p = h(c.right) > h(n.right),
                    g = h(c.top) < h(n.top),
                    m = h(c.bottom) > h(n.bottom),
                    v =
                      ("left" === i && f) ||
                      ("right" === i && p) ||
                      ("top" === i && g) ||
                      ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!e.flipVariations &&
                      ((y && "start" === s && f) ||
                        (y && "end" === s && p) ||
                        (!y && "start" === s && g) ||
                        (!y && "end" === s && m));
                  (d || v || b) &&
                    ((t.flipped = !0),
                    (d || v) && (i = r[l + 1]),
                    b &&
                      (s = (function (t) {
                        return "end" === t
                          ? "start"
                          : "start" === t
                          ? "end"
                          : t;
                      })(s)),
                    (t.placement = i + (s ? "-" + s : "")),
                    (t.offsets.popper = Z(
                      {},
                      t.offsets.popper,
                      E(t.instance.popper, t.offsets.reference, t.placement)
                    )),
                    (t = D(t.instance.modifiers, t, "flip")));
                }),
                t
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = t.offsets,
                o = i.popper,
                s = i.reference,
                r = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (o[r ? "left" : "top"] =
                  s[n] - (a ? o[r ? "width" : "height"] : 0)),
                (t.placement = T(e)),
                (t.offsets.popper = f(o)),
                t
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!L(t.instance.modifiers, "hide", "preventOverflow")) return t;
              var e = t.offsets.reference,
                n = S(t.instance.modifiers, function (t) {
                  return "preventOverflow" === t.name;
                }).boundaries;
              if (
                e.bottom < n.top ||
                e.left > n.right ||
                e.top > n.bottom ||
                e.right < n.left
              ) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
              }
              return t;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var n = e.x,
                i = e.y,
                o = t.offsets.popper,
                r = S(t.instance.modifiers, function (t) {
                  return "applyStyle" === t.name;
                }).gpuAcceleration;
              void 0 !== r &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var a,
                l,
                c = void 0 === r ? e.gpuAcceleration : r,
                u = p(s(t.instance.popper)),
                h = { position: o.position },
                d = {
                  left: R(o.left),
                  top: F(o.top),
                  bottom: F(o.bottom),
                  right: R(o.right),
                },
                f = "bottom" === n ? "top" : "bottom",
                g = "right" === i ? "left" : "right",
                m = $("transform");
              if (
                ((l = "bottom" == f ? -u.height + d.bottom : d.top),
                (a = "right" == g ? -u.width + d.right : d.left),
                c && m)
              )
                (h[m] = "translate3d(" + a + "px, " + l + "px, 0)"),
                  (h[f] = 0),
                  (h[g] = 0),
                  (h.willChange = "transform");
              else {
                var v = "bottom" == f ? -1 : 1,
                  y = "right" == g ? -1 : 1;
                (h[f] = l * v), (h[g] = a * y), (h.willChange = f + ", " + g);
              }
              var b = { "x-placement": t.placement };
              return (
                (t.attributes = Z({}, b, t.attributes)),
                (t.styles = Z({}, h, t.styles)),
                (t.arrowStyles = Z({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              return (
                O(t.instance.popper, t.styles),
                (function (t, e) {
                  Object.keys(e).forEach(function (n) {
                    !1 === e[n]
                      ? t.removeAttribute(n)
                      : t.setAttribute(n, e[n]);
                  });
                })(t.instance.popper, t.attributes),
                t.arrowElement &&
                  Object.keys(t.arrowStyles).length &&
                  O(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function (t, e, n, i, o) {
              var s = x(o, e, t, n.positionFixed),
                r = _(
                  n.placement,
                  s,
                  e,
                  t,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                e.setAttribute("x-placement", r),
                O(e, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      ot
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e((t.bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function o(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s() {
      return (s =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e),
      (n = n && n.hasOwnProperty("default") ? n.default : n);
    var r,
      a,
      l,
      c,
      u,
      h,
      d,
      f,
      p,
      g,
      m,
      v,
      y,
      b,
      w,
      _,
      x,
      C,
      T = (function (t) {
        var e = !1;
        var n = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var n,
              i = e.getAttribute("data-target");
            (i && "#" !== i) || (i = e.getAttribute("href") || ""),
              "#" === i.charAt(0) &&
                ((n = i),
                (i = n =
                  "function" == typeof t.escapeSelector
                    ? t.escapeSelector(n).substr(1)
                    : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
            try {
              return t(document).find(i).length > 0 ? i : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, i) {
            for (var o in i)
              if (Object.prototype.hasOwnProperty.call(i, o)) {
                var s = i[o],
                  r = e[o],
                  a =
                    r && n.isElement(r)
                      ? "element"
                      : ((l = r),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(s).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      o +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      s +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (t.fn.emulateTransitionEnd = function (e) {
            var i = this,
              o = !1;
            return (
              t(this).one(n.TRANSITION_END, function () {
                o = !0;
              }),
              setTimeout(function () {
                o || n.triggerTransitionEnd(i);
              }, e),
              this
            );
          }),
          n.supportsTransitionEnd() &&
            (t.event.special[n.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            }),
          n
        );
      })(e),
      E =
        ((a = "alert"),
        (c = "." + (l = "bs.alert")),
        (u = (r = e).fn[a]),
        (h = {
          CLOSE: "close" + c,
          CLOSED: "closed" + c,
          CLICK_DATA_API: "click" + c + ".data-api",
        }),
        "alert",
        "fade",
        "show",
        (d = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
            }),
            (e.dispose = function () {
              r.removeData(this._element, l), (this._element = null);
            }),
            (e._getRootElement = function (t) {
              var e = T.getSelectorFromElement(t),
                n = !1;
              return (
                e && (n = r(e)[0]), n || (n = r(t).closest(".alert")[0]), n
              );
            }),
            (e._triggerCloseEvent = function (t) {
              var e = r.Event(h.CLOSE);
              return r(t).trigger(e), e;
            }),
            (e._removeElement = function (t) {
              var e = this;
              r(t).removeClass("show"),
                T.supportsTransitionEnd() && r(t).hasClass("fade")
                  ? r(t)
                      .one(T.TRANSITION_END, function (n) {
                        return e._destroyElement(t, n);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(t);
            }),
            (e._destroyElement = function (t) {
              r(t).detach().trigger(h.CLOSED).remove();
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = r(this),
                  i = n.data(l);
                i || ((i = new t(this)), n.data(l, i)),
                  "close" === e && i[e](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            o(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        r(document).on(
          h.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          d._handleDismiss(new d())
        ),
        (r.fn[a] = d._jQueryInterface),
        (r.fn[a].Constructor = d),
        (r.fn[a].noConflict = function () {
          return (r.fn[a] = u), d._jQueryInterface;
        }),
        d),
      S =
        ((p = "button"),
        (m = "." + (g = "bs.button")),
        (v = ".data-api"),
        (y = (f = e).fn[p]),
        (b = "active"),
        "btn",
        "focus",
        (w = '[data-toggle^="button"]'),
        '[data-toggle="buttons"]',
        "input",
        ".active",
        (_ = ".btn"),
        (x = {
          CLICK_DATA_API: "click" + m + v,
          FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
        }),
        (C = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              var t = !0,
                e = !0,
                n = f(this._element).closest('[data-toggle="buttons"]')[0];
              if (n) {
                var i = f(this._element).find("input")[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && f(this._element).hasClass(b)) t = !1;
                    else {
                      var o = f(n).find(".active")[0];
                      o && f(o).removeClass(b);
                    }
                  if (t) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !f(this._element).hasClass(b)),
                      f(i).trigger("change");
                  }
                  i.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !f(this._element).hasClass(b)
                ),
                t && f(this._element).toggleClass(b);
            }),
            (e.dispose = function () {
              f.removeData(this._element, g), (this._element = null);
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = f(this).data(g);
                n || ((n = new t(this)), f(this).data(g, n)),
                  "toggle" === e && n[e]();
              });
            }),
            o(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            t
          );
        })()),
        f(document)
          .on(x.CLICK_DATA_API, w, function (t) {
            t.preventDefault();
            var e = t.target;
            f(e).hasClass("btn") || (e = f(e).closest(_)),
              C._jQueryInterface.call(f(e), "toggle");
          })
          .on(x.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = f(t.target).closest(_)[0];
            f(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
          }),
        (f.fn[p] = C._jQueryInterface),
        (f.fn[p].Constructor = C),
        (f.fn[p].noConflict = function () {
          return (f.fn[p] = y), C._jQueryInterface;
        }),
        C),
      D = (function (t) {
        var e = "carousel",
          n = "bs.carousel",
          i = "." + n,
          r = t.fn[e],
          a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
          },
          c = "next",
          u = "prev",
          h = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          d = "active",
          f = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]',
          },
          p = (function () {
            function r(e, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(
                  f.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            var p = r.prototype;
            return (
              (p.next = function () {
                this._isSliding || this._slide(c);
              }),
              (p.nextWhenVisible = function () {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (p.prev = function () {
                this._isSliding || this._slide(u);
              }),
              (p.pause = function (e) {
                e || (this._isPaused = !0),
                  t(this._element).find(f.NEXT_PREV)[0] &&
                    T.supportsTransitionEnd() &&
                    (T.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (p.cycle = function (t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (p.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(h.SLID, function () {
                      return n.to(e);
                    });
                  else {
                    if (i === e) return this.pause(), void this.cycle();
                    var o = e > i ? c : u;
                    this._slide(o, this._items[e]);
                  }
              }),
              (p.dispose = function () {
                t(this._element).off(i),
                  t.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (p._getConfig = function (t) {
                return (t = s({}, a, t)), T.typeCheckConfig(e, t, l), t;
              }),
              (p._addEventListeners = function () {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(h.KEYDOWN, function (t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(h.MOUSEENTER, function (t) {
                        return e.pause(t);
                      })
                      .on(h.MOUSELEAVE, function (t) {
                        return e.cycle(t);
                      }),
                    "ontouchstart" in document.documentElement &&
                      t(this._element).on(h.TOUCHEND, function () {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (p._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                  }
              }),
              (p._getItemIndex = function (e) {
                return (
                  (this._items = t.makeArray(t(e).parent().find(f.ITEM))),
                  this._items.indexOf(e)
                );
              }),
              (p._getItemByDirection = function (t, e) {
                var n = t === c,
                  i = t === u,
                  o = this._getItemIndex(e),
                  s = this._items.length - 1;
                if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
                  return e;
                var r = (o + (t === u ? -1 : 1)) % this._items.length;
                return -1 === r
                  ? this._items[this._items.length - 1]
                  : this._items[r];
              }),
              (p._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                  o = this._getItemIndex(
                    t(this._element).find(f.ACTIVE_ITEM)[0]
                  ),
                  s = t.Event(h.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: o,
                    to: i,
                  });
                return t(this._element).trigger(s), s;
              }),
              (p._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement).find(f.ACTIVE).removeClass(d);
                  var n =
                    this._indicatorsElement.children[this._getItemIndex(e)];
                  n && t(n).addClass(d);
                }
              }),
              (p._slide = function (e, n) {
                var i,
                  o,
                  s,
                  r = this,
                  a = t(this._element).find(f.ACTIVE_ITEM)[0],
                  l = this._getItemIndex(a),
                  u = n || (a && this._getItemByDirection(e, a)),
                  p = this._getItemIndex(u),
                  g = Boolean(this._interval);
                if (
                  (e === c
                    ? ((i = "carousel-item-left"),
                      (o = "carousel-item-next"),
                      (s = "left"))
                    : ((i = "carousel-item-right"),
                      (o = "carousel-item-prev"),
                      (s = "right")),
                  u && t(u).hasClass(d))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(u, s).isDefaultPrevented() &&
                  a &&
                  u
                ) {
                  (this._isSliding = !0),
                    g && this.pause(),
                    this._setActiveIndicatorElement(u);
                  var m = t.Event(h.SLID, {
                    relatedTarget: u,
                    direction: s,
                    from: l,
                    to: p,
                  });
                  T.supportsTransitionEnd() &&
                  t(this._element).hasClass("slide")
                    ? (t(u).addClass(o),
                      T.reflow(u),
                      t(a).addClass(i),
                      t(u).addClass(i),
                      t(a)
                        .one(T.TRANSITION_END, function () {
                          t(u)
                            .removeClass(i + " " + o)
                            .addClass(d),
                            t(a).removeClass(d + " " + o + " " + i),
                            (r._isSliding = !1),
                            setTimeout(function () {
                              return t(r._element).trigger(m);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(a).removeClass(d),
                      t(u).addClass(d),
                      (this._isSliding = !1),
                      t(this._element).trigger(m)),
                    g && this.cycle();
                }
              }),
              (r._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    o = s({}, a, t(this).data());
                  "object" == typeof e && (o = s({}, o, e));
                  var l = "string" == typeof e ? e : o.slide;
                  if (
                    (i || ((i = new r(this, o)), t(this).data(n, i)),
                    "number" == typeof e)
                  )
                    i.to(e);
                  else if ("string" == typeof l) {
                    if (void 0 === i[l])
                      throw new TypeError('No method named "' + l + '"');
                    i[l]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (r._dataApiClickHandler = function (e) {
                var i = T.getSelectorFromElement(this);
                if (i) {
                  var o = t(i)[0];
                  if (o && t(o).hasClass("carousel")) {
                    var a = s({}, t(o).data(), t(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (a.interval = !1),
                      r._jQueryInterface.call(t(o), a),
                      l && t(o).data(n).to(l),
                      e.preventDefault();
                  }
                }
              }),
              o(r, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              r
            );
          })();
        return (
          t(document).on(
            h.CLICK_DATA_API,
            f.DATA_SLIDE,
            p._dataApiClickHandler
          ),
          t(window).on(h.LOAD_DATA_API, function () {
            t(f.DATA_RIDE).each(function () {
              var e = t(this);
              p._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = p._jQueryInterface),
          (t.fn[e].Constructor = p),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), p._jQueryInterface;
          }),
          p
        );
      })(e),
      A = (function (t) {
        var e = "collapse",
          n = "bs.collapse",
          i = "." + n,
          r = t.fn[e],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          u = "show",
          h = "collapse",
          d = "collapsing",
          f = "collapsed",
          p = "width",
          g = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
          },
          m = (function () {
            function i(e, n) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(n)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var i = t(g.DATA_TOGGLE), o = 0; o < i.length; o++) {
                var s = i[o],
                  r = T.getSelectorFromElement(s);
                null !== r &&
                  t(r).filter(e).length > 0 &&
                  ((this._selector = r), this._triggerArray.push(s));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var r = i.prototype;
            return (
              (r.toggle = function () {
                t(this._element).hasClass(u) ? this.hide() : this.show();
              }),
              (r.show = function () {
                var e,
                  o,
                  s = this;
                if (
                  !(
                    this._isTransitioning ||
                    t(this._element).hasClass(u) ||
                    (this._parent &&
                      0 ===
                        (e = t.makeArray(
                          t(this._parent)
                            .find(g.ACTIVES)
                            .filter(
                              '[data-parent="' + this._config.parent + '"]'
                            )
                        )).length &&
                      (e = null),
                    e &&
                      (o = t(e).not(this._selector).data(n)) &&
                      o._isTransitioning)
                  )
                ) {
                  var r = t.Event(c.SHOW);
                  if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                    e &&
                      (i._jQueryInterface.call(
                        t(e).not(this._selector),
                        "hide"
                      ),
                      o || t(e).data(n, null));
                    var a = this._getDimension();
                    t(this._element).removeClass(h).addClass(d),
                      (this._element.style[a] = 0),
                      this._triggerArray.length > 0 &&
                        t(this._triggerArray)
                          .removeClass(f)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var l = function () {
                      t(s._element).removeClass(d).addClass(h).addClass(u),
                        (s._element.style[a] = ""),
                        s.setTransitioning(!1),
                        t(s._element).trigger(c.SHOWN);
                    };
                    if (T.supportsTransitionEnd()) {
                      var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                      t(this._element)
                        .one(T.TRANSITION_END, l)
                        .emulateTransitionEnd(600),
                        (this._element.style[a] = this._element[p] + "px");
                    } else l();
                  }
                }
              }),
              (r.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(u)) {
                  var n = t.Event(c.HIDE);
                  if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      T.reflow(this._element),
                      t(this._element)
                        .addClass(d)
                        .removeClass(h)
                        .removeClass(u),
                      this._triggerArray.length > 0)
                    )
                      for (var o = 0; o < this._triggerArray.length; o++) {
                        var s = this._triggerArray[o],
                          r = T.getSelectorFromElement(s);
                        null !== r &&
                          (t(r).hasClass(u) ||
                            t(s).addClass(f).attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var a = function () {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(d)
                          .addClass(h)
                          .trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      T.supportsTransitionEnd()
                        ? t(this._element)
                            .one(T.TRANSITION_END, a)
                            .emulateTransitionEnd(600)
                        : a();
                  }
                }
              }),
              (r.setTransitioning = function (t) {
                this._isTransitioning = t;
              }),
              (r.dispose = function () {
                t.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (r._getConfig = function (t) {
                return (
                  ((t = s({}, a, t)).toggle = Boolean(t.toggle)),
                  T.typeCheckConfig(e, t, l),
                  t
                );
              }),
              (r._getDimension = function () {
                return t(this._element).hasClass(p) ? p : "height";
              }),
              (r._getParent = function () {
                var e = this,
                  n = null;
                T.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = t(this._config.parent)[0]);
                var o =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(n)
                    .find(o)
                    .each(function (t, n) {
                      e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                        n,
                      ]);
                    }),
                  n
                );
              }),
              (r._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                  var i = t(e).hasClass(u);
                  n.length > 0 &&
                    t(n).toggleClass(f, !i).attr("aria-expanded", i);
                }
              }),
              (i._getTargetFromElement = function (e) {
                var n = T.getSelectorFromElement(e);
                return n ? t(n)[0] : null;
              }),
              (i._jQueryInterface = function (e) {
                return this.each(function () {
                  var o = t(this),
                    r = o.data(n),
                    l = s({}, a, o.data(), "object" == typeof e && e);
                  if (
                    (!r && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    r || ((r = new i(this, l)), o.data(n, r)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === r[e])
                      throw new TypeError('No method named "' + e + '"');
                    r[e]();
                  }
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              i
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this),
              o = T.getSelectorFromElement(this);
            t(o).each(function () {
              var e = t(this),
                o = e.data(n) ? "toggle" : i.data();
              m._jQueryInterface.call(e, o);
            });
          }),
          (t.fn[e] = m._jQueryInterface),
          (t.fn[e].Constructor = m),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), m._jQueryInterface;
          }),
          m
        );
      })(e),
      $ = (function (t) {
        var e = "dropdown",
          i = "bs.dropdown",
          r = "." + i,
          a = ".data-api",
          l = t.fn[e],
          c = new RegExp("38|40|27"),
          u = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            CLICK: "click" + r,
            CLICK_DATA_API: "click" + r + a,
            KEYDOWN_DATA_API: "keydown" + r + a,
            KEYUP_DATA_API: "keyup" + r + a,
          },
          h = "disabled",
          d = "show",
          f = "dropup",
          p = "dropdown-menu-right",
          g = '[data-toggle="dropdown"]',
          m = ".dropdown-menu",
          v = { offset: 0, flip: !0, boundary: "scrollParent" },
          y = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
          },
          b = (function () {
            function a(t, e) {
              (this._element = t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var l = a.prototype;
            return (
              (l.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(h)) {
                  var e = a._getParentFromElement(this._element),
                    i = t(this._menu).hasClass(d);
                  if ((a._clearMenus(), !i)) {
                    var o = { relatedTarget: this._element },
                      s = t.Event(u.SHOW, o);
                    if ((t(e).trigger(s), !s.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === n)
                          throw new TypeError(
                            "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                          );
                        var r = this._element;
                        t(e).hasClass(f) &&
                          (t(this._menu).hasClass("dropdown-menu-left") ||
                            t(this._menu).hasClass(p)) &&
                          (r = e),
                          "scrollParent" !== this._config.boundary &&
                            t(e).addClass("position-static"),
                          (this._popper = new n(
                            r,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === t(e).closest(".navbar-nav").length &&
                        t("body").children().on("mouseover", null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        t(this._menu).toggleClass(d),
                        t(e).toggleClass(d).trigger(t.Event(u.SHOWN, o));
                    }
                  }
                }
              }),
              (l.dispose = function () {
                t.removeData(this._element, i),
                  t(this._element).off(r),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (l.update = function () {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (l._addEventListeners = function () {
                var e = this;
                t(this._element).on(u.CLICK, function (t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }),
              (l._getConfig = function (n) {
                return (
                  (n = s(
                    {},
                    this.constructor.Default,
                    t(this._element).data(),
                    n
                  )),
                  T.typeCheckConfig(e, n, this.constructor.DefaultType),
                  n
                );
              }),
              (l._getMenuElement = function () {
                if (!this._menu) {
                  var e = a._getParentFromElement(this._element);
                  this._menu = t(e).find(m)[0];
                }
                return this._menu;
              }),
              (l._getPlacement = function () {
                var e = t(this._element).parent(),
                  n = "bottom-start";
                return (
                  e.hasClass(f)
                    ? ((n = "top-start"),
                      t(this._menu).hasClass(p) && (n = "top-end"))
                    : e.hasClass("dropright")
                    ? (n = "right-start")
                    : e.hasClass("dropleft")
                    ? (n = "left-start")
                    : t(this._menu).hasClass(p) && (n = "bottom-end"),
                  n
                );
              }),
              (l._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0;
              }),
              (l._getPopperConfig = function () {
                var t = this,
                  e = {};
                return (
                  "function" == typeof this._config.offset
                    ? (e.fn = function (e) {
                        return (
                          (e.offsets = s(
                            {},
                            e.offsets,
                            t._config.offset(e.offsets) || {}
                          )),
                          e
                        );
                      })
                    : (e.offset = this._config.offset),
                  {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: e,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary,
                      },
                    },
                  }
                );
              }),
              (a._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(i);
                  if (
                    (n ||
                      ((n = new a(this, "object" == typeof e ? e : null)),
                      t(this).data(i, n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              (a._clearMenus = function (e) {
                if (
                  !e ||
                  (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                )
                  for (var n = t.makeArray(t(g)), o = 0; o < n.length; o++) {
                    var s = a._getParentFromElement(n[o]),
                      r = t(n[o]).data(i),
                      l = { relatedTarget: n[o] };
                    if (r) {
                      var c = r._menu;
                      if (
                        t(s).hasClass(d) &&
                        !(
                          e &&
                          (("click" === e.type &&
                            /input|textarea/i.test(e.target.tagName)) ||
                            ("keyup" === e.type && 9 === e.which)) &&
                          t.contains(s, e.target)
                        )
                      ) {
                        var h = t.Event(u.HIDE, l);
                        t(s).trigger(h),
                          h.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              t("body")
                                .children()
                                .off("mouseover", null, t.noop),
                            n[o].setAttribute("aria-expanded", "false"),
                            t(c).removeClass(d),
                            t(s).removeClass(d).trigger(t.Event(u.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (a._getParentFromElement = function (e) {
                var n,
                  i = T.getSelectorFromElement(e);
                return i && (n = t(i)[0]), n || e.parentNode;
              }),
              (a._dataApiKeydownHandler = function (e) {
                if (
                  (/input|textarea/i.test(e.target.tagName)
                    ? !(
                        32 === e.which ||
                        (27 !== e.which &&
                          ((40 !== e.which && 38 !== e.which) ||
                            t(e.target).closest(m).length))
                      )
                    : c.test(e.which)) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !this.disabled && !t(this).hasClass(h))
                ) {
                  var n = a._getParentFromElement(this),
                    i = t(n).hasClass(d);
                  if (
                    (i || (27 === e.which && 32 === e.which)) &&
                    (!i || (27 !== e.which && 32 !== e.which))
                  ) {
                    var o = t(n)
                      .find(".dropdown-menu .dropdown-item:not(.disabled)")
                      .get();
                    if (0 !== o.length) {
                      var s = o.indexOf(e.target);
                      38 === e.which && s > 0 && s--,
                        40 === e.which && s < o.length - 1 && s++,
                        s < 0 && (s = 0),
                        o[s].focus();
                    }
                  } else {
                    if (27 === e.which) {
                      var r = t(n).find(g)[0];
                      t(r).trigger("focus");
                    }
                    t(this).trigger("click");
                  }
                }
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return v;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return y;
                  },
                },
              ]),
              a
            );
          })();
        return (
          t(document)
            .on(u.KEYDOWN_DATA_API, g, b._dataApiKeydownHandler)
            .on(u.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler)
            .on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, b._clearMenus)
            .on(u.CLICK_DATA_API, g, function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                b._jQueryInterface.call(t(this), "toggle");
            })
            .on(u.CLICK_DATA_API, ".dropdown form", function (t) {
              t.stopPropagation();
            }),
          (t.fn[e] = b._jQueryInterface),
          (t.fn[e].Constructor = b),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = l), b._jQueryInterface;
          }),
          b
        );
      })(e),
      I = (function (t) {
        var e = "bs.modal",
          n = "." + e,
          i = t.fn.modal,
          r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api",
          },
          c = "modal-open",
          u = "fade",
          h = "show",
          d = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler",
          },
          f = (function () {
            function i(e, n) {
              (this._config = this._getConfig(n)),
                (this._element = e),
                (this._dialog = t(e).find(d.DIALOG)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var f = i.prototype;
            return (
              (f.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
              }),
              (f.show = function (e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                  T.supportsTransitionEnd() &&
                    t(this._element).hasClass(u) &&
                    (this._isTransitioning = !0);
                  var i = t.Event(l.SHOW, { relatedTarget: e });
                  t(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      t(document.body).addClass(c),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(this._element).on(
                        l.CLICK_DISMISS,
                        d.DATA_DISMISS,
                        function (t) {
                          return n.hide(t);
                        }
                      ),
                      t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                          t(e.target).is(n._element) &&
                            (n._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return n._showElement(e);
                      }));
                }
              }),
              (f.hide = function (e) {
                var n = this;
                if (
                  (e && e.preventDefault(),
                  !this._isTransitioning && this._isShown)
                ) {
                  var i = t.Event(l.HIDE);
                  if (
                    (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var o =
                      T.supportsTransitionEnd() && t(this._element).hasClass(u);
                    o && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(document).off(l.FOCUSIN),
                      t(this._element).removeClass(h),
                      t(this._element).off(l.CLICK_DISMISS),
                      t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                      o
                        ? t(this._element)
                            .one(T.TRANSITION_END, function (t) {
                              return n._hideModal(t);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal();
                  }
                }
              }),
              (f.dispose = function () {
                t.removeData(this._element, e),
                  t(window, document, this._element, this._backdrop).off(n),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._scrollbarWidth = null);
              }),
              (f.handleUpdate = function () {
                this._adjustDialog();
              }),
              (f._getConfig = function (t) {
                return (t = s({}, r, t)), T.typeCheckConfig("modal", t, a), t;
              }),
              (f._showElement = function (e) {
                var n = this,
                  i = T.supportsTransitionEnd() && t(this._element).hasClass(u);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  (this._element.scrollTop = 0),
                  i && T.reflow(this._element),
                  t(this._element).addClass(h),
                  this._config.focus && this._enforceFocus();
                var o = t.Event(l.SHOWN, { relatedTarget: e }),
                  s = function () {
                    n._config.focus && n._element.focus(),
                      (n._isTransitioning = !1),
                      t(n._element).trigger(o);
                  };
                i
                  ? t(this._dialog)
                      .one(T.TRANSITION_END, s)
                      .emulateTransitionEnd(300)
                  : s();
              }),
              (f._enforceFocus = function () {
                var e = this;
                t(document)
                  .off(l.FOCUSIN)
                  .on(l.FOCUSIN, function (n) {
                    document !== n.target &&
                      e._element !== n.target &&
                      0 === t(e._element).has(n.target).length &&
                      e._element.focus();
                  });
              }),
              (f._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard
                  ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                      27 === t.which && (t.preventDefault(), e.hide());
                    })
                  : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS);
              }),
              (f._setResizeEvent = function () {
                var e = this;
                this._isShown
                  ? t(window).on(l.RESIZE, function (t) {
                      return e.handleUpdate(t);
                    })
                  : t(window).off(l.RESIZE);
              }),
              (f._hideModal = function () {
                var e = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    t(document.body).removeClass(c),
                      e._resetAdjustments(),
                      e._resetScrollbar(),
                      t(e._element).trigger(l.HIDDEN);
                  });
              }),
              (f._removeBackdrop = function () {
                this._backdrop &&
                  (t(this._backdrop).remove(), (this._backdrop = null));
              }),
              (f._showBackdrop = function (e) {
                var n = this,
                  i = t(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                  var o = T.supportsTransitionEnd() && i;
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(l.CLICK_DISMISS, function (t) {
                      n._ignoreBackdropClick
                        ? (n._ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          ("static" === n._config.backdrop
                            ? n._element.focus()
                            : n.hide());
                    }),
                    o && T.reflow(this._backdrop),
                    t(this._backdrop).addClass(h),
                    !e)
                  )
                    return;
                  if (!o) return void e();
                  t(this._backdrop)
                    .one(T.TRANSITION_END, e)
                    .emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                  t(this._backdrop).removeClass(h);
                  var s = function () {
                    n._removeBackdrop(), e && e();
                  };
                  T.supportsTransitionEnd() && t(this._element).hasClass(u)
                    ? t(this._backdrop)
                        .one(T.TRANSITION_END, s)
                        .emulateTransitionEnd(150)
                    : s();
                } else e && e();
              }),
              (f._adjustDialog = function () {
                var t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  t &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !t &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (f._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (f._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  t.left + t.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (f._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                  t(d.FIXED_CONTENT).each(function (n, i) {
                    var o = t(i)[0].style.paddingRight,
                      s = t(i).css("padding-right");
                    t(i)
                      .data("padding-right", o)
                      .css(
                        "padding-right",
                        parseFloat(s) + e._scrollbarWidth + "px"
                      );
                  }),
                    t(d.STICKY_CONTENT).each(function (n, i) {
                      var o = t(i)[0].style.marginRight,
                        s = t(i).css("margin-right");
                      t(i)
                        .data("margin-right", o)
                        .css(
                          "margin-right",
                          parseFloat(s) - e._scrollbarWidth + "px"
                        );
                    }),
                    t(d.NAVBAR_TOGGLER).each(function (n, i) {
                      var o = t(i)[0].style.marginRight,
                        s = t(i).css("margin-right");
                      t(i)
                        .data("margin-right", o)
                        .css(
                          "margin-right",
                          parseFloat(s) + e._scrollbarWidth + "px"
                        );
                    });
                  var n = document.body.style.paddingRight,
                    i = t("body").css("padding-right");
                  t("body")
                    .data("padding-right", n)
                    .css(
                      "padding-right",
                      parseFloat(i) + this._scrollbarWidth + "px"
                    );
                }
              }),
              (f._resetScrollbar = function () {
                t(d.FIXED_CONTENT).each(function (e, n) {
                  var i = t(n).data("padding-right");
                  void 0 !== i &&
                    t(n).css("padding-right", i).removeData("padding-right");
                }),
                  t(d.STICKY_CONTENT + ", " + d.NAVBAR_TOGGLER).each(function (
                    e,
                    n
                  ) {
                    var i = t(n).data("margin-right");
                    void 0 !== i &&
                      t(n).css("margin-right", i).removeData("margin-right");
                  });
                var e = t("body").data("padding-right");
                void 0 !== e &&
                  t("body").css("padding-right", e).removeData("padding-right");
              }),
              (f._getScrollbarWidth = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"),
                  document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e;
              }),
              (i._jQueryInterface = function (n, o) {
                return this.each(function () {
                  var r = t(this).data(e),
                    a = s(
                      {},
                      i.Default,
                      t(this).data(),
                      "object" == typeof n && n
                    );
                  if (
                    (r || ((r = new i(this, a)), t(this).data(e, r)),
                    "string" == typeof n)
                  ) {
                    if (void 0 === r[n])
                      throw new TypeError('No method named "' + n + '"');
                    r[n](o);
                  } else a.show && r.show(o);
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return r;
                  },
                },
              ]),
              i
            );
          })();
        return (
          t(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function (n) {
            var i,
              o = this,
              r = T.getSelectorFromElement(this);
            r && (i = t(r)[0]);
            var a = t(i).data(e)
              ? "toggle"
              : s({}, t(i).data(), t(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
              n.preventDefault();
            var c = t(i).one(l.SHOW, function (e) {
              e.isDefaultPrevented() ||
                c.one(l.HIDDEN, function () {
                  t(o).is(":visible") && o.focus();
                });
            });
            f._jQueryInterface.call(t(i), a, this);
          }),
          (t.fn.modal = f._jQueryInterface),
          (t.fn.modal.Constructor = f),
          (t.fn.modal.noConflict = function () {
            return (t.fn.modal = i), f._jQueryInterface;
          }),
          f
        );
      })(e),
      k = (function (t) {
        var e = "tooltip",
          i = "bs.tooltip",
          r = "." + i,
          a = t.fn[e],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
          },
          u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
          },
          h = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
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
          },
          d = "show",
          f = "out",
          p = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            INSERTED: "inserted" + r,
            CLICK: "click" + r,
            FOCUSIN: "focusin" + r,
            FOCUSOUT: "focusout" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r,
          },
          g = "fade",
          m = "show",
          v = "hover",
          y = "focus",
          b = (function () {
            function a(t, e) {
              if (void 0 === n)
                throw new TypeError(
                  "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = t),
                (this.config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
            }
            var b = a.prototype;
            return (
              (b.enable = function () {
                this._isEnabled = !0;
              }),
              (b.disable = function () {
                this._isEnabled = !1;
              }),
              (b.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (b.toggle = function (e) {
                if (this._isEnabled)
                  if (e) {
                    var n = this.constructor.DATA_KEY,
                      i = t(e.currentTarget).data(n);
                    i ||
                      ((i = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(n, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger()
                        ? i._enter(null, i)
                        : i._leave(null, i);
                  } else {
                    if (t(this.getTipElement()).hasClass(m))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (b.dispose = function () {
                clearTimeout(this._timeout),
                  t.removeData(this.element, this.constructor.DATA_KEY),
                  t(this.element).off(this.constructor.EVENT_KEY),
                  t(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && t(this.tip).remove(),
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
              (b.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  t(this.element).trigger(i);
                  var o = t.contains(
                    this.element.ownerDocument.documentElement,
                    this.element
                  );
                  if (i.isDefaultPrevented() || !o) return;
                  var s = this.getTipElement(),
                    r = T.getUID(this.constructor.NAME);
                  s.setAttribute("id", r),
                    this.element.setAttribute("aria-describedby", r),
                    this.setContent(),
                    this.config.animation && t(s).addClass(g);
                  var l =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, s, this.element)
                        : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var u =
                    !1 === this.config.container
                      ? document.body
                      : t(this.config.container);
                  t(s).data(this.constructor.DATA_KEY, this),
                    t.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || t(s).appendTo(u),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new n(this.element, s, {
                      placement: c,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ".arrow" },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function (t) {
                        t.originalPlacement !== t.placement &&
                          e._handlePopperPlacementChange(t);
                      },
                      onUpdate: function (t) {
                        e._handlePopperPlacementChange(t);
                      },
                    })),
                    t(s).addClass(m),
                    "ontouchstart" in document.documentElement &&
                      t("body").children().on("mouseover", null, t.noop);
                  var h = function () {
                    e.config.animation && e._fixTransition();
                    var n = e._hoverState;
                    (e._hoverState = null),
                      t(e.element).trigger(e.constructor.Event.SHOWN),
                      n === f && e._leave(null, e);
                  };
                  T.supportsTransitionEnd() && t(this.tip).hasClass(g)
                    ? t(this.tip)
                        .one(T.TRANSITION_END, h)
                        .emulateTransitionEnd(a._TRANSITION_DURATION)
                    : h();
                }
              }),
              (b.hide = function (e) {
                var n = this,
                  i = this.getTipElement(),
                  o = t.Event(this.constructor.Event.HIDE),
                  s = function () {
                    n._hoverState !== d &&
                      i.parentNode &&
                      i.parentNode.removeChild(i),
                      n._cleanTipClass(),
                      n.element.removeAttribute("aria-describedby"),
                      t(n.element).trigger(n.constructor.Event.HIDDEN),
                      null !== n._popper && n._popper.destroy(),
                      e && e();
                  };
                t(this.element).trigger(o),
                  o.isDefaultPrevented() ||
                    (t(i).removeClass(m),
                    "ontouchstart" in document.documentElement &&
                      t("body").children().off("mouseover", null, t.noop),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger[y] = !1),
                    (this._activeTrigger[v] = !1),
                    T.supportsTransitionEnd() && t(this.tip).hasClass(g)
                      ? t(i).one(T.TRANSITION_END, s).emulateTransitionEnd(150)
                      : s(),
                    (this._hoverState = ""));
              }),
              (b.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (b.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (b.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e);
              }),
              (b.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (b.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".tooltip-inner"),
                  this.getTitle()
                ),
                  e.removeClass(g + " " + m);
              }),
              (b.setElementContent = function (e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery)
                  ? i
                    ? t(n).parent().is(e) || e.empty().append(n)
                    : e.text(t(n).text())
                  : e[i ? "html" : "text"](n);
              }),
              (b.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return (
                  t ||
                    (t =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  t
                );
              }),
              (b._getAttachment = function (t) {
                return u[t.toUpperCase()];
              }),
              (b._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                  if ("click" === n)
                    t(e.element).on(
                      e.constructor.Event.CLICK,
                      e.config.selector,
                      function (t) {
                        return e.toggle(t);
                      }
                    );
                  else if ("manual" !== n) {
                    var i =
                        n === v
                          ? e.constructor.Event.MOUSEENTER
                          : e.constructor.Event.FOCUSIN,
                      o =
                        n === v
                          ? e.constructor.Event.MOUSELEAVE
                          : e.constructor.Event.FOCUSOUT;
                    t(e.element)
                      .on(i, e.config.selector, function (t) {
                        return e._enter(t);
                      })
                      .on(o, e.config.selector, function (t) {
                        return e._leave(t);
                      });
                  }
                  t(e.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      return e.hide();
                    });
                }),
                  this.config.selector
                    ? (this.config = s({}, this.config, {
                        trigger: "manual",
                        selector: "",
                      }))
                    : this._fixTitle();
              }),
              (b._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (b._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                  e && (n._activeTrigger["focusin" === e.type ? y : v] = !0),
                  t(n.getTipElement()).hasClass(m) || n._hoverState === d
                    ? (n._hoverState = d)
                    : (clearTimeout(n._timeout),
                      (n._hoverState = d),
                      n.config.delay && n.config.delay.show
                        ? (n._timeout = setTimeout(function () {
                            n._hoverState === d && n.show();
                          }, n.config.delay.show))
                        : n.show());
              }),
              (b._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                  e && (n._activeTrigger["focusout" === e.type ? y : v] = !1),
                  n._isWithActiveTrigger() ||
                    (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.hide
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.hide();
                        }, n.config.delay.hide))
                      : n.hide());
              }),
              (b._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
                return !1;
              }),
              (b._getConfig = function (n) {
                return (
                  "number" ==
                    typeof (n = s(
                      {},
                      this.constructor.Default,
                      t(this.element).data(),
                      n
                    )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                  "number" == typeof n.title && (n.title = n.title.toString()),
                  "number" == typeof n.content &&
                    (n.content = n.content.toString()),
                  T.typeCheckConfig(e, n, this.constructor.DefaultType),
                  n
                );
              }),
              (b._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                  for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] &&
                      (t[e] = this.config[e]);
                return t;
              }),
              (b._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  n = e.attr("class").match(l);
                null !== n && n.length > 0 && e.removeClass(n.join(""));
              }),
              (b._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(t.placement));
              }),
              (b._fixTransition = function () {
                var e = this.getTipElement(),
                  n = this.config.animation;
                null === e.getAttribute("x-placement") &&
                  (t(e).removeClass(g),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = n));
              }),
              (a._jQueryInterface = function (e) {
                return this.each(function () {
                  var n = t(this).data(i),
                    o = "object" == typeof e && e;
                  if (
                    (n || !/dispose|hide/.test(e)) &&
                    (n || ((n = new a(this, o)), t(this).data(i, n)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return h;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return e;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return p;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return r;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              a
            );
          })();
        return (
          (t.fn[e] = b._jQueryInterface),
          (t.fn[e].Constructor = b),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = a), b._jQueryInterface;
          }),
          b
        );
      })(e),
      P = (function (t) {
        var e = "popover",
          n = "bs.popover",
          i = "." + n,
          r = t.fn[e],
          a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = s({}, k.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          c = s({}, k.DefaultType, { content: "(string|element|function)" }),
          u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
          },
          h = (function (s) {
            var r, h;
            function d() {
              return s.apply(this, arguments) || this;
            }
            (h = s),
              ((r = d).prototype = Object.create(h.prototype)),
              (r.prototype.constructor = r),
              (r.__proto__ = h);
            var f = d.prototype;
            return (
              (f.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (f.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e);
              }),
              (f.getTipElement = function () {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (f.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".popover-header"),
                  this.getTitle()
                );
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                  this.setElementContent(e.find(".popover-body"), n),
                  e.removeClass("fade show");
              }),
              (f._getContent = function () {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (f._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                  n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""));
              }),
              (d._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n),
                    o = "object" == typeof e ? e : null;
                  if (
                    (i || !/destroy|hide/.test(e)) &&
                    (i || ((i = new d(this, o)), t(this).data(n, i)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new TypeError('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              o(d, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return e;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return n;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return u;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              d
            );
          })(k);
        return (
          (t.fn[e] = h._jQueryInterface),
          (t.fn[e].Constructor = h),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), h._jQueryInterface;
          }),
          h
        );
      })(e),
      N = (function (t) {
        var e = "scrollspy",
          n = "bs.scrollspy",
          i = "." + n,
          r = t.fn[e],
          a = { offset: 10, method: "auto", target: "" },
          l = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          c = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
          },
          u = "active",
          h = {
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
          d = "position",
          f = (function () {
            function r(e, n) {
              var i = this;
              (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(n)),
                (this._selector =
                  this._config.target +
                  " " +
                  h.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  h.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  h.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                t(this._scrollElement).on(c.SCROLL, function (t) {
                  return i._process(t);
                }),
                this.refresh(),
                this._process();
            }
            var f = r.prototype;
            return (
              (f.refresh = function () {
                var e = this,
                  n =
                    this._scrollElement === this._scrollElement.window
                      ? "offset"
                      : d,
                  i = "auto" === this._config.method ? n : this._config.method,
                  o = i === d ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  t
                    .makeArray(t(this._selector))
                    .map(function (e) {
                      var n,
                        s = T.getSelectorFromElement(e);
                      if ((s && (n = t(s)[0]), n)) {
                        var r = n.getBoundingClientRect();
                        if (r.width || r.height) return [t(n)[i]().top + o, s];
                      }
                      return null;
                    })
                    .filter(function (t) {
                      return t;
                    })
                    .sort(function (t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function (t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
              }),
              (f.dispose = function () {
                t.removeData(this._element, n),
                  t(this._scrollElement).off(i),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (f._getConfig = function (n) {
                if ("string" != typeof (n = s({}, a, n)).target) {
                  var i = t(n.target).attr("id");
                  i || ((i = T.getUID(e)), t(n.target).attr("id", i)),
                    (n.target = "#" + i);
                }
                return T.typeCheckConfig(e, n, l), n;
              }),
              (f._getScrollTop = function () {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (f._getScrollHeight = function () {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (f._getOffsetHeight = function () {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (f._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  n = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i);
                } else {
                  if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] &&
                      t >= this._offsets[o] &&
                      (void 0 === this._offsets[o + 1] ||
                        t < this._offsets[o + 1]) &&
                      this._activate(this._targets[o]);
                }
              }),
              (f._activate = function (e) {
                (this._activeTarget = e), this._clear();
                var n = this._selector.split(",");
                n = n.map(function (t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                });
                var i = t(n.join(","));
                i.hasClass("dropdown-item")
                  ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(u),
                    i.addClass(u))
                  : (i.addClass(u),
                    i
                      .parents(h.NAV_LIST_GROUP)
                      .prev(h.NAV_LINKS + ", " + h.LIST_ITEMS)
                      .addClass(u),
                    i
                      .parents(h.NAV_LIST_GROUP)
                      .prev(h.NAV_ITEMS)
                      .children(h.NAV_LINKS)
                      .addClass(u)),
                  t(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e,
                  });
              }),
              (f._clear = function () {
                t(this._selector).filter(h.ACTIVE).removeClass(u);
              }),
              (r._jQueryInterface = function (e) {
                return this.each(function () {
                  var i = t(this).data(n);
                  if (
                    (i ||
                      ((i = new r(this, "object" == typeof e && e)),
                      t(this).data(n, i)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new TypeError('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              o(r, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              r
            );
          })();
        return (
          t(window).on(c.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(h.DATA_SPY)), n = e.length; n--; ) {
              var i = t(e[n]);
              f._jQueryInterface.call(i, i.data());
            }
          }),
          (t.fn[e] = f._jQueryInterface),
          (t.fn[e].Constructor = f),
          (t.fn[e].noConflict = function () {
            return (t.fn[e] = r), f._jQueryInterface;
          }),
          f
        );
      })(e),
      O = (function (t) {
        var e = "bs.tab",
          n = "." + e,
          i = t.fn.tab,
          s = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api",
          },
          r = "active",
          a = "show",
          l = ".active",
          c = "> li > .active",
          u = (function () {
            function n(t) {
              this._element = t;
            }
            var i = n.prototype;
            return (
              (i.show = function () {
                var e = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      t(this._element).hasClass(r)) ||
                    t(this._element).hasClass("disabled")
                  )
                ) {
                  var n,
                    i,
                    o = t(this._element).closest(".nav, .list-group")[0],
                    a = T.getSelectorFromElement(this._element);
                  if (o) {
                    var u = "UL" === o.nodeName ? c : l;
                    i = (i = t.makeArray(t(o).find(u)))[i.length - 1];
                  }
                  var h = t.Event(s.HIDE, { relatedTarget: this._element }),
                    d = t.Event(s.SHOW, { relatedTarget: i });
                  if (
                    (i && t(i).trigger(h),
                    t(this._element).trigger(d),
                    !d.isDefaultPrevented() && !h.isDefaultPrevented())
                  ) {
                    a && (n = t(a)[0]), this._activate(this._element, o);
                    var f = function () {
                      var n = t.Event(s.HIDDEN, { relatedTarget: e._element }),
                        o = t.Event(s.SHOWN, { relatedTarget: i });
                      t(i).trigger(n), t(e._element).trigger(o);
                    };
                    n ? this._activate(n, n.parentNode, f) : f();
                  }
                }
              }),
              (i.dispose = function () {
                t.removeData(this._element, e), (this._element = null);
              }),
              (i._activate = function (e, n, i) {
                var o = this,
                  s = (
                    "UL" === n.nodeName ? t(n).find(c) : t(n).children(l)
                  )[0],
                  r =
                    i &&
                    T.supportsTransitionEnd() &&
                    s &&
                    t(s).hasClass("fade"),
                  a = function () {
                    return o._transitionComplete(e, s, i);
                  };
                s && r
                  ? t(s).one(T.TRANSITION_END, a).emulateTransitionEnd(150)
                  : a();
              }),
              (i._transitionComplete = function (e, n, i) {
                if (n) {
                  t(n).removeClass(a + " " + r);
                  var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                  o && t(o).removeClass(r),
                    "tab" === n.getAttribute("role") &&
                      n.setAttribute("aria-selected", !1);
                }
                if (
                  (t(e).addClass(r),
                  "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                  T.reflow(e),
                  t(e).addClass(a),
                  e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
                ) {
                  var s = t(e).closest(".dropdown")[0];
                  s && t(s).find(".dropdown-toggle").addClass(r),
                    e.setAttribute("aria-expanded", !0);
                }
                i && i();
              }),
              (n._jQueryInterface = function (i) {
                return this.each(function () {
                  var o = t(this),
                    s = o.data(e);
                  if (
                    (s || ((s = new n(this)), o.data(e, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new TypeError('No method named "' + i + '"');
                    s[i]();
                  }
                });
              }),
              o(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              n
            );
          })();
        return (
          t(document).on(
            s.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (e) {
              e.preventDefault(), u._jQueryInterface.call(t(this), "show");
            }
          ),
          (t.fn.tab = u._jQueryInterface),
          (t.fn.tab.Constructor = u),
          (t.fn.tab.noConflict = function () {
            return (t.fn.tab = i), u._jQueryInterface;
          }),
          u
        );
      })(e);
    !(function (t) {
      if (void 0 === t)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        e[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(e),
      (t.Util = T),
      (t.Alert = E),
      (t.Button = S),
      (t.Carousel = D),
      (t.Collapse = A),
      (t.Dropdown = $),
      (t.Modal = I),
      (t.Popover = P),
      (t.Scrollspy = N),
      (t.Tab = O),
      (t.Tooltip = k),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  jQuery(
    (function () {
      "use strict";
      document.addEventListener("touchstart", function () {}, !1),
        jQuery(function () {
          jQuery(window).unbind("scroll"),
            jQuery('<div class="overlapblackbg"></div>').prependTo(".wsmenu"),
            jQuery("#wsnavtoggle").click(function () {
              $("body").hasClass("wsactivefooter") &&
                jQuery("body").removeClass("wsactivefooter"),
                jQuery("body").toggleClass("wsactive");
            }),
            jQuery("#footer_showmenu").click(function () {
              jQuery("body").toggleClass("wsactive wsactivefooter");
            }),
            jQuery(".overlapblackbg").click(function () {
              jQuery("body").removeClass("wsactive");
            }),
            jQuery(".wsmenu > .wsmenu-list > li")
              .has(".sub-menu")
              .prepend(
                '<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>'
              ),
            jQuery(".wsmenu-click").click(function () {
              jQuery(this)
                .toggleClass("ws-activearrow")
                .parent()
                .siblings()
                .children()
                .removeClass("ws-activearrow"),
                jQuery(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu")
                  .not(
                    jQuery(this).siblings(
                      ".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu"
                    )
                  )
                  .slideUp("slow"),
                jQuery(this).siblings(".sub-menu").slideToggle("slow");
            }),
            jQuery(".wsmenu > .wsmenu-list > li > ul > li")
              .has(".sub-menu")
              .prepend(
                '<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>'
              ),
            jQuery(".wsmenu > .wsmenu-list > li > ul > li > ul > li")
              .has(".sub-menu")
              .prepend(
                '<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>'
              ),
            jQuery(".wsmenu-click02").click(function () {
              jQuery(this)
                .children(".wsmenu-arrow")
                .toggleClass("wsmenu-rotate"),
                jQuery(this).siblings("li > .sub-menu").slideToggle("slow");
            }),
            jQuery(window).on("resize", function () {
              jQuery(window).outerWidth() < 992
                ? (jQuery(".wsmenu").css(
                    "height",
                    jQuery(this).height() + "px"
                  ),
                  jQuery(".wsmenucontainer").css(
                    "min-width",
                    jQuery(this).width() + "px"
                  ))
                : (jQuery(".wsmenu").removeAttr("style"),
                  jQuery(".wsmenucontainer").removeAttr("style"),
                  jQuery("body").removeClass("wsactive"),
                  jQuery(
                    ".wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu"
                  ).removeAttr("style"),
                  jQuery(".wsmenu-click").removeClass("ws-activearrow"),
                  jQuery(".wsmenu-click02 > i").removeClass("wsmenu-rotate"));
            }),
            jQuery(window).trigger("resize");
        });
    })()
  ),
  $(document).ready(function () {});
