import {
  r as h,
  a as _,
  o as a,
  c as l,
  b as t,
  i as b,
  t as m,
  u as y,
  d as v,
  e as c,
  w as p,
  f as d,
  g as w,
  h as $,
  j as k,
} from "./vendor.11e16693.js";
const N = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const u of n.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && s(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerpolicy && (n.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = r(e);
    fetch(e.href, n);
  }
};
N();
const V = { key: 0, class: "bg-white shadow" },
  j = { class: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" },
  C = {
    setup(i) {
      let o = h(0);
      return (
        setInterval(() => {
          o.value++;
        }, 1e3),
        (r, s) => {
          const e = _("router-view");
          return (
            a(),
            l("div", null, [
              r.$route.meta.title
                ? (a(),
                  l("header", V, [
                    t("div", j, [
                      t(
                        "h1",
                        {
                          onClick:
                            s[0] ||
                            (s[0] = (n) => (b(o) ? (o.value = 0) : (o = 0))),
                          class:
                            "text-3xl font-bold leading-tight text-gray-900",
                        },
                        m(r.$route.meta.title) + " / " + m(y(o)),
                        1
                      ),
                    ]),
                  ]))
                : v("", !0),
              t("main", null, [c(e)]),
            ])
          );
        }
      );
    },
  };
var x = (i, o) => {
  const r = i.__vccOpts || i;
  for (const [s, e] of o) r[s] = e;
  return r;
};
const L = {},
  S = { class: "ml-3 inline-flex rounded-md shadow" },
  B = t(
    "a",
    {
      target: "_blank",
      href: "https://github.com/web2033/vite-vue3-tailwind-starter",
      class:
        "inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none",
    },
    "Learn more",
    -1
  ),
  O = [B];
function A(i, o) {
  return a(), l("div", S, O);
}
var f = x(L, [["render", A]]);
const P = { class: "bg-gray-50" },
  R = {
    class:
      "mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8",
  },
  F = t(
    "h2",
    {
      class:
        "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10",
    },
    [
      d(" Ready to dive in? "),
      t("br"),
      t("span", { class: "text-indigo-600" }, "Vite + Vue 3 + Tailwind CSS + ParthShah"),
    ],
    -1
  ),
  H = { class: "mt-8 flex lg:mt-0 lg:flex-shrink-0" },
  T = { class: "inline-flex rounded-md shadow" },
  E = d("Next Page"),
  I = {
    setup(i) {
      return (o, r) => {
        const s = _("router-link");
        return (
          a(),
          l("div", P, [
            t("div", R, [
              F,
              t("div", H, [
                t("div", T, [
                  c(
                    s,
                    {
                      to: "/about",
                      class:
                        "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none",
                    },
                    { default: p(() => [E]), _: 1 }
                  ),
                ]),
                c(f),
              ]),
            ]),
          ])
        );
      };
    },
  },
  q = { class: "bg-gray-50" },
  D = {
    class:
      "mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8",
  },
  K = t(
    "h2",
    {
      class:
        "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10",
    },
    [
      d(" About Page "),
      t("br"),
      t("span", { class: "text-indigo-600" }, "Vite + Vue 3 + Tailwind CSS"),
    ],
    -1
  ),
  M = { class: "mt-8 flex lg:mt-0 lg:flex-shrink-0" },
  W = { class: "inline-flex rounded-md shadow" },
  z = d("Back Home"),
  G = {
    setup(i) {
      return (o, r) => {
        const s = _("router-link");
        return (
          a(),
          l("div", q, [
            t("div", D, [
              K,
              t("div", M, [
                t("div", W, [
                  c(
                    s,
                    {
                      to: "/",
                      class:
                        "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none",
                    },
                    { default: p(() => [z]), _: 1 }
                  ),
                ]),
                c(f),
              ]),
            ]),
          ])
        );
      };
    },
  },
  J = {},
  Q = { class: "bg-white shadow" },
  U = t(
    "div",
    { class: "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8" },
    [
      t(
        "h1",
        { class: "text-3xl font-bold leading-tight text-gray-900" },
        "Not Found"
      ),
    ],
    -1
  ),
  X = [U];
function Y(i, o) {
  return a(), l("header", Q, X);
}
var Z = x(J, [["render", Y]]);
const ee = [
    { path: "/", component: I, meta: { title: "Home" } },
    { path: "/about", meta: { title: "About" }, component: G },
    { path: "/:path(.*)", component: Z },
  ],
  g = w(C),
  te = $({ history: k(), routes: ee });
g.use(te);
g.mount("#app");
