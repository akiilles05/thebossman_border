(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const u of l.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function _() {}
function de(e) {
  return e();
}
function le() {
  return Object.create(null);
}
function T(e) {
  e.forEach(de);
}
function Z(e) {
  return typeof e == "function";
}
function pe(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let J;
function ge(e, t) {
  return J || (J = document.createElement("a")), (J.href = t), e === J.href;
}
function ye(e) {
  return Object.keys(e).length === 0;
}
function he(e, ...t) {
  if (e == null) return _;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function we(e, t, n) {
  e.$$.on_destroy.push(he(t, n));
}
function i(e, t) {
  e.appendChild(t);
}
function be(e, t, n) {
  e.insertBefore(t, n || null);
}
function ee(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function y(e) {
  return document.createElement(e);
}
function R(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function v(e) {
  return document.createTextNode(e);
}
function N() {
  return v(" ");
}
function $e() {
  return v("");
}
function ce(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function c(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ve(e) {
  return Array.from(e.childNodes);
}
function S(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
let F;
function B(e) {
  F = e;
}
function Ee() {
  if (!F) throw new Error("Function called outside component initialization");
  return F;
}
function ie(e) {
  Ee().$$.on_mount.push(e);
}
const C = [],
  ue = [];
let A = [];
const ae = [],
  xe = Promise.resolve();
let W = !1;
function Ne() {
  W || ((W = !0), xe.then(me));
}
function X(e) {
  A.push(e);
}
const Q = new Set();
let j = 0;
function me() {
  if (j !== 0) return;
  const e = F;
  do {
    try {
      for (; j < C.length; ) {
        const t = C[j];
        j++, B(t), Oe(t.$$);
      }
    } catch (t) {
      throw ((C.length = 0), (j = 0), t);
    }
    for (B(null), C.length = 0, j = 0; ue.length; ) ue.pop()();
    for (let t = 0; t < A.length; t += 1) {
      const n = A[t];
      Q.has(n) || (Q.add(n), n());
    }
    A.length = 0;
  } while (C.length);
  for (; ae.length; ) ae.pop()();
  (W = !1), Q.clear(), B(e);
}
function Oe(e) {
  if (e.fragment !== null) {
    e.update(), T(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(X);
  }
}
function ke(e) {
  const t = [],
    n = [];
  A.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : n.push(r))),
    n.forEach((r) => r()),
    (A = t);
}
const Pe = new Set();
function Se(e, t) {
  e && e.i && (Pe.delete(e), e.i(t));
}
function je(e, t, n, r) {
  const { fragment: o, after_update: l } = e.$$;
  o && o.m(t, n),
    r ||
      X(() => {
        const u = e.$$.on_mount.map(de).filter(Z);
        e.$$.on_destroy ? e.$$.on_destroy.push(...u) : T(u),
          (e.$$.on_mount = []);
      }),
    l.forEach(X);
}
function Le(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (ke(n.after_update),
    T(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (C.push(e), Ne(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Ae(e, t, n, r, o, l, u, f = [-1]) {
  const a = F;
  B(e);
  const s = (e.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: _,
    not_equal: o,
    bound: le(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    callbacks: le(),
    dirty: f,
    skip_bound: !1,
    root: t.target || a.$$.root,
  });
  u && u(s.root);
  let p = !1;
  if (
    ((s.ctx = n
      ? n(e, t.props || {}, (d, m, ...b) => {
          const h = b.length ? b[0] : m;
          return (
            s.ctx &&
              o(s.ctx[d], (s.ctx[d] = h)) &&
              (!s.skip_bound && s.bound[d] && s.bound[d](h), p && Ce(e, d)),
            m
          );
        })
      : []),
    s.update(),
    (p = !0),
    T(s.before_update),
    (s.fragment = r ? r(s.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const d = ve(t.target);
      s.fragment && s.fragment.l(d), d.forEach(ee);
    } else s.fragment && s.fragment.c();
    t.intro && Se(e.$$.fragment),
      je(e, t.target, t.anchor, t.customElement),
      me();
  }
  B(a);
}
class Te {
  $destroy() {
    Le(this, 1), (this.$destroy = _);
  }
  $on(t, n) {
    if (!Z(n)) return _;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(n),
      () => {
        const o = r.indexOf(n);
        o !== -1 && r.splice(o, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !ye(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const L = [];
function ze(e, t) {
  return { subscribe: _e(e, t).subscribe };
}
function _e(e, t = _) {
  let n;
  const r = new Set();
  function o(f) {
    if (pe(e, f) && ((e = f), n)) {
      const a = !L.length;
      for (const s of r) s[1](), L.push(s, e);
      if (a) {
        for (let s = 0; s < L.length; s += 2) L[s][0](L[s + 1]);
        L.length = 0;
      }
    }
  }
  function l(f) {
    o(f(e));
  }
  function u(f, a = _) {
    const s = [f, a];
    return (
      r.add(s),
      r.size === 1 && (n = t(o) || _),
      f(e),
      () => {
        r.delete(s), r.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: o, update: l, subscribe: u };
}
function Ie(e, t, n) {
  const r = !Array.isArray(e),
    o = r ? [e] : e,
    l = t.length < 2;
  return ze(n, (u) => {
    let f = !1;
    const a = [];
    let s = 0,
      p = _;
    const d = () => {
        if (s) return;
        p();
        const b = t(r ? a[0] : a, u);
        l ? u(b) : (p = Z(b) ? b : _);
      },
      m = o.map((b, h) =>
        he(
          b,
          (w) => {
            (a[h] = w), (s &= ~(1 << h)), f && d();
          },
          () => {
            s |= 1 << h;
          }
        )
      );
    return (
      (f = !0),
      d(),
      function () {
        T(m), p(), (f = !1);
      }
    );
  });
}
const Ue = {
    en: {
      title: "Border Crossing",
      price: "Price:  ",
      valuta: "$",
      accept: "Pay",
      cancel: "Cancel",
    },
    hu: {
      title: "TheBossman RolePlay - Határ",
      price: "Díj:  ",
      valuta: "$",
      accept: "Átkelés",
      cancel: "Mégsem",
    },
  },
  Y = _e("en");
function Be(e, t, n) {
  if (!t) throw new Error("no key provided to $t()");
  if (!e) throw new Error(`no translation for key "${t}"`);
  let r = Ue[e][t];
  if (!r) throw new Error(`no translation found for ${e}.${t}`);
  return (
    Object.keys(n).map((o) => {
      const l = new RegExp(`{{${o}}}`, "g");
      r = r.replace(l, n[o]);
    }),
    r
  );
}
const Fe = Ie(
  Y,
  (e) =>
    (t, n = {}) =>
      Be(e, t, n)
);
function fe(e) {
  let t,
    n,
    r,
    o,
    l,
    u = e[2]("title") + "",
    f,
    a,
    s,
    p,
    d = e[2]("price") + "",
    m,
    b,
    h,
    w = `${e[0]}`,
    z,
    M = e[2]("valuta") + "",
    D,
    te,
    O,
    E,
    q = e[2]("accept") + "",
    K,
    ne,
    k,
    I,
    re,
    x,
    H = e[2]("cancel") + "",
    V,
    oe,
    P,
    U,
    G,
    se;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (o = N()),
        (l = y("h5")),
        (f = v(u)),
        (a = N()),
        (s = y("div")),
        (p = y("h5")),
        (m = v(d)),
        (b = N()),
        (h = y("span")),
        (z = v(w)),
        (D = v(M)),
        (te = N()),
        (O = y("div")),
        (E = y("button")),
        (K = v(q)),
        (ne = N()),
        (k = R("svg")),
        (I = R("path")),
        (re = N()),
        (x = y("button")),
        (V = v(H)),
        (oe = N()),
        (P = R("svg")),
        (U = R("path")),
        ge(n.src, (r = "./images/logo.png")) || c(n, "src", r),
        c(n, "alt", "Logo"),
        c(n, "class", "logo mb-2 items-center w-auto h-[48px]"),
        c(l, "id", "title"),
        c(l, "class", "text-xl font-bold mb-2"),
        c(p, "id", "price"),
        c(p, "class", "mr-1"),
        c(h, "class", "text-white"),
        c(h, "id", "border-fee"),
        c(s, "class", "flex justify-center mb-1 text-base font-bold"),
        c(I, "clip-rule", "evenodd"),
        c(
          I,
          "d",
          "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
        ),
        c(I, "fill-rule", "evenodd"),
        c(k, "fill", "currentColor"),
        c(k, "viewBox", "0 0 24 24"),
        c(k, "class", "icon"),
        c(E, "class", "button mb-2"),
        c(U, "clip-rule", "evenodd"),
        c(
          U,
          "d",
          "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
        ),
        c(U, "fill-rule", "evenodd"),
        c(P, "fill", "currentColor"),
        c(P, "viewBox", "0 0 24 24"),
        c(P, "class", "icon"),
        c(x, "class", "cancel btn btn-outline"),
        c(O, "class", "flex flex-col justify-between w-full"),
        c(t, "id", "panel"),
        c(
          t,
          "class",
          "flex-col bg-gray-800 text-white rounded-lg shadow-md mx-auto p-6"
        );
    },
    m(g, $) {
      be(g, t, $),
        i(t, n),
        i(t, o),
        i(t, l),
        i(l, f),
        i(t, a),
        i(t, s),
        i(s, p),
        i(p, m),
        i(s, b),
        i(s, h),
        i(h, z),
        i(h, D),
        i(t, te),
        i(t, O),
        i(O, E),
        i(E, K),
        i(E, ne),
        i(E, k),
        i(k, I),
        i(O, re),
        i(O, x),
        i(x, V),
        i(x, oe),
        i(x, P),
        i(P, U),
        G || ((se = [ce(E, "click", e[3]), ce(x, "click", e[4])]), (G = !0));
    },
    p(g, $) {
      $ & 4 && u !== (u = g[2]("title") + "") && S(f, u),
        $ & 4 && d !== (d = g[2]("price") + "") && S(m, d),
        $ & 1 && w !== (w = `${g[0]}`) && S(z, w),
        $ & 4 && M !== (M = g[2]("valuta") + "") && S(D, M),
        $ & 4 && q !== (q = g[2]("accept") + "") && S(K, q),
        $ & 4 && H !== (H = g[2]("cancel") + "") && S(V, H);
    },
    d(g) {
      g && ee(t), (G = !1), T(se);
    },
  };
}
function Me(e) {
  let t,
    n = e[1] && fe(e);
  return {
    c() {
      n && n.c(), (t = $e());
    },
    m(r, o) {
      n && n.m(r, o), be(r, t, o);
    },
    p(r, [o]) {
      r[1]
        ? n
          ? n.p(r, o)
          : ((n = fe(r)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: _,
    o: _,
    d(r) {
      n && n.d(r), r && ee(t);
    },
  };
}
function qe(e, t, n) {
  let r;
  we(e, Fe, (a) => n(2, (r = a)));
  let o = 0,
    l = !1;
  ie(() => {
    window.addEventListener("message", (a) => {
      const s = a.data;
      if (!s) return;
      const { action: p, language: d, translations: m } = s;
      if (!(!p || !d || !m))
        if (p === "openNUI") {
          const { title: b, price: h, accept: w, cancel: z } = m[d];
          if (!b || !h || !w || !z) return;
          n(0, (o = s.borderFee)), n(1, (l = !0));
        } else p === "closeNUI" && n(1, (l = !1));
    });
  }),
    ie(async () => {
      const a = await fetch("https://thebossman_border/getLocale"),
        { locale: s } = await a.json();
      Y.set(s);
    });
  function u() {
    fetch("https://thebossman_border/payPrice", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ action: "payPrice" }),
    }),
      n(1, (l = !1));
  }
  function f() {
    fetch("https://thebossman_border/closeNUI", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ action: "closeNUI" }),
    }),
      n(1, (l = !1));
  }
  return Y.set("en"), [o, l, r, u, f];
}
class He extends Te {
  constructor(t) {
    super(), Ae(this, t, qe, Me, pe, {});
  }
}
new He({ target: document.getElementById("app") });
