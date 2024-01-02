import {
  d as S,
  o as c,
  c as p,
  r as g,
  a as te,
  t as F,
  n as j,
  _ as L,
  b as x,
  w as k,
  e as M,
  T as qe,
  u as rt,
  i as ts,
  l as ns,
  f as Ke,
  g as P,
  h as C,
  j as ve,
  k as h,
  m as u,
  p as ie,
  q as le,
  s as we,
  v as Ve,
  x as it,
  y as K,
  z as ge,
  A as bt,
  B as pn,
  C as ss,
  D as Pe,
  F as q,
  E as ee,
  G as Qe,
  H as Ee,
  I as w,
  J as fn,
  K as $e,
  L as xe,
  M as De,
  N as Ze,
  O as as,
  P as ce,
  Q as vn,
  R as mn,
  S as kt,
  U as Se,
  V as $t,
  W as wt,
  X as os,
  Y as _n,
  Z as gn,
  $ as rs,
  a0 as je,
  a1 as yn,
  a2 as bn,
  a3 as is,
  a4 as ls,
  a5 as cs,
  a6 as us,
  a7 as kn,
  a8 as ds,
  a9 as hs,
  aa as ps,
  ab as fs,
} from './framework.51JW0BDq.js';
const vs = S({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(t) {
      return (e, n) => (
        c(),
        p(
          'span',
          { class: j(['VPBadge', e.type]) },
          [g(e.$slots, 'default', {}, () => [te(F(e.text), 1)], !0)],
          2
        )
      );
    },
  }),
  ms = L(vs, [['__scopeId', 'data-v-fe14b36f']]),
  _s = { key: 0, class: 'VPBackdrop' },
  gs = S({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(t) {
      return (e, n) => (
        c(),
        x(
          qe,
          { name: 'fade' },
          { default: k(() => [e.show ? (c(), p('div', _s)) : M('', !0)]), _: 1 }
        )
      );
    },
  }),
  ys = L(gs, [['__scopeId', 'data-v-b5f16a27']]),
  B = rt;
function bs(t, e) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(t, e))
        : (t(), (s = !0) && setTimeout(() => (s = !1), e));
  };
}
function lt(t) {
  return /^\//.test(t) ? t : `/${t}`;
}
function St(t) {
  const {
    pathname: e,
    search: n,
    hash: s,
    protocol: a,
  } = new URL(t, 'http://a.com');
  if (
    ts(t) ||
    t.startsWith('#') ||
    !a.startsWith('http') ||
    (/\.(?!html|md)\w+($|\?)/i.test(t) && ns(t))
  )
    return t;
  const { site: o } = B(),
    r =
      e.endsWith('/') || e.endsWith('.html')
        ? t
        : t.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(
              /(\.md)?$/,
              o.value.cleanUrls ? '' : '.html'
            )}${n}${s}`
          );
  return Ke(r);
}
function Ne({ removeCurrent: t = !0, correspondingLink: e = !1 } = {}) {
  const { site: n, localeIndex: s, page: a, theme: o } = B(),
    r = P(() => {
      var l, d;
      return {
        label: (l = n.value.locales[s.value]) == null ? void 0 : l.label,
        link:
          ((d = n.value.locales[s.value]) == null ? void 0 : d.link) ||
          (s.value === 'root' ? '/' : `/${s.value}/`),
      };
    });
  return {
    localeLinks: P(() =>
      Object.entries(n.value.locales).flatMap(([l, d]) =>
        t && r.value.label === d.label
          ? []
          : {
              text: d.label,
              link: ks(
                d.link || (l === 'root' ? '/' : `/${l}/`),
                o.value.i18nRouting !== !1 && e,
                a.value.relativePath.slice(r.value.link.length - 1),
                !n.value.cleanUrls
              ),
            }
      )
    ),
    currentLang: r,
  };
}
function ks(t, e, n, s) {
  return e
    ? t.replace(/\/$/, '') +
        lt(
          n.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, s ? '.html' : '')
        )
    : t;
}
const $s = (t) => (ie('data-v-f437650b'), (t = t()), le(), t),
  ws = { class: 'NotFound' },
  Ss = { class: 'code' },
  Ms = { class: 'title' },
  Ps = $s(() => h('div', { class: 'divider' }, null, -1)),
  Cs = { class: 'quote' },
  Ls = { class: 'action' },
  Vs = ['href', 'aria-label'],
  Is = S({
    __name: 'NotFound',
    setup(t) {
      const { site: e, theme: n } = B(),
        { localeLinks: s } = Ne({ removeCurrent: !1 }),
        a = C('/');
      return (
        ve(() => {
          var r;
          const o = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1');
          s.value.length &&
            (a.value =
              ((r = s.value.find(({ link: i }) => i.startsWith(o))) == null
                ? void 0
                : r.link) || s.value[0].link);
        }),
        (o, r) => {
          var i, l, d, f, y;
          return (
            c(),
            p('div', ws, [
              h(
                'p',
                Ss,
                F(((i = u(n).notFound) == null ? void 0 : i.code) ?? '404'),
                1
              ),
              h(
                'h1',
                Ms,
                F(
                  ((l = u(n).notFound) == null ? void 0 : l.title) ??
                    'PAGE NOT FOUND'
                ),
                1
              ),
              Ps,
              h(
                'blockquote',
                Cs,
                F(
                  ((d = u(n).notFound) == null ? void 0 : d.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
                ),
                1
              ),
              h('div', Ls, [
                h(
                  'a',
                  {
                    class: 'link',
                    href: u(Ke)(a.value),
                    'aria-label':
                      ((f = u(n).notFound) == null ? void 0 : f.linkLabel) ??
                      'go to home',
                  },
                  F(
                    ((y = u(n).notFound) == null ? void 0 : y.linkText) ??
                      'Take me home'
                  ),
                  9,
                  Vs
                ),
              ]),
            ])
          );
        }
      );
    },
  }),
  Os = L(Is, [['__scopeId', 'data-v-f437650b']]);
function $n(t, e) {
  if (Array.isArray(t)) return ze(t);
  if (t == null) return [];
  e = lt(e);
  const n = Object.keys(t)
      .sort((a, o) => o.split('/').length - a.split('/').length)
      .find((a) => e.startsWith(lt(a))),
    s = n ? t[n] : [];
  return Array.isArray(s) ? ze(s) : ze(s.items, s.base);
}
function Es(t) {
  const e = [];
  let n = 0;
  for (const s in t) {
    const a = t[s];
    if (a.items) {
      n = e.push(a);
      continue;
    }
    e[n] || e.push({ items: [] }), e[n].items.push(a);
  }
  return e;
}
function As(t) {
  const e = [];
  function n(s) {
    for (const a of s)
      a.text &&
        a.link &&
        e.push({ text: a.text, link: a.link, docFooterText: a.docFooterText }),
        a.items && n(a.items);
  }
  return n(t), e;
}
function ct(t, e) {
  return Array.isArray(e)
    ? e.some((n) => ct(t, n))
    : we(t, e.link)
    ? !0
    : e.items
    ? ct(t, e.items)
    : !1;
}
function ze(t, e) {
  return [...t].map((n) => {
    const s = { ...n },
      a = s.base || e;
    return (
      a && s.link && (s.link = a + s.link),
      s.items && (s.items = ze(s.items, a)),
      s
    );
  });
}
function me() {
  const { frontmatter: t, page: e, theme: n } = B(),
    s = it('(min-width: 960px)'),
    a = C(!1),
    o = P(() => {
      const v = n.value.sidebar,
        _ = e.value.relativePath;
      return v ? $n(v, _) : [];
    }),
    r = C(o.value);
  K(o, (v, _) => {
    JSON.stringify(v) !== JSON.stringify(_) && (r.value = o.value);
  });
  const i = P(
      () =>
        t.value.sidebar !== !1 &&
        r.value.length > 0 &&
        t.value.layout !== 'home'
    ),
    l = P(() =>
      d
        ? t.value.aside == null
          ? n.value.aside === 'left'
          : t.value.aside === 'left'
        : !1
    ),
    d = P(() =>
      t.value.layout === 'home'
        ? !1
        : t.value.aside != null
        ? !!t.value.aside
        : n.value.aside !== !1
    ),
    f = P(() => i.value && s.value),
    y = P(() => (i.value ? Es(r.value) : []));
  function m() {
    a.value = !0;
  }
  function b() {
    a.value = !1;
  }
  function $() {
    a.value ? b() : m();
  }
  return {
    isOpen: a,
    sidebar: r,
    sidebarGroups: y,
    hasSidebar: i,
    hasAside: d,
    leftAside: l,
    isSidebarEnabled: f,
    open: m,
    close: b,
    toggle: $,
  };
}
function xs(t, e) {
  let n;
  ge(() => {
    n = t.value ? document.activeElement : void 0;
  }),
    ve(() => {
      window.addEventListener('keyup', s);
    }),
    bt(() => {
      window.removeEventListener('keyup', s);
    });
  function s(a) {
    a.key === 'Escape' && t.value && (e(), n == null || n.focus());
  }
}
const wn = C(Ve ? location.hash : '');
Ve &&
  window.addEventListener('hashchange', () => {
    wn.value = location.hash;
  });
function Ns(t) {
  const { page: e } = B(),
    n = C(!1),
    s = P(() => t.value.collapsed != null),
    a = P(() => !!t.value.link),
    o = C(!1),
    r = () => {
      o.value = we(e.value.relativePath, t.value.link);
    };
  K([e, t, wn], r), ve(r);
  const i = P(() =>
      o.value
        ? !0
        : t.value.items
        ? ct(e.value.relativePath, t.value.items)
        : !1
    ),
    l = P(() => !!(t.value.items && t.value.items.length));
  ge(() => {
    n.value = !!(s.value && t.value.collapsed);
  }),
    pn(() => {
      (o.value || i.value) && (n.value = !1);
    });
  function d() {
    s.value && (n.value = !n.value);
  }
  return {
    collapsed: n,
    collapsible: s,
    isLink: a,
    isActiveLink: o,
    hasActiveLink: i,
    hasChildren: l,
    toggle: d,
  };
}
function Ts() {
  const { hasSidebar: t } = me(),
    e = it('(min-width: 960px)'),
    n = it('(min-width: 1280px)');
  return {
    isAsideEnabled: P(() =>
      !n.value && !e.value ? !1 : t.value ? n.value : e.value
    ),
  };
}
const Hs = 71;
function Mt(t) {
  return (
    (typeof t.outline == 'object' &&
      !Array.isArray(t.outline) &&
      t.outline.label) ||
    t.outlineTitle ||
    'On this page'
  );
}
function Pt(t) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((n) => n.id && n.hasChildNodes())
    .map((n) => {
      const s = Number(n.tagName[1]);
      return { title: Fs(n), link: '#' + n.id, level: s };
    });
  return Bs(e, t);
}
function Fs(t) {
  let e = '';
  for (const n of t.childNodes)
    if (n.nodeType === 1) {
      if (
        n.classList.contains('VPBadge') ||
        n.classList.contains('header-anchor') ||
        n.classList.contains('ignore-header')
      )
        continue;
      e += n.textContent;
    } else n.nodeType === 3 && (e += n.textContent);
  return e.trim();
}
function Bs(t, e) {
  if (e === !1) return [];
  const n = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [s, a] = typeof n == 'number' ? [n, n] : n === 'deep' ? [2, 6] : n;
  t = t.filter((r) => r.level >= s && r.level <= a);
  const o = [];
  e: for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (r === 0) o.push(i);
    else {
      for (let l = r - 1; l >= 0; l--) {
        const d = t[l];
        if (d.level < i.level) {
          (d.children || (d.children = [])).push(i);
          continue e;
        }
      }
      o.push(i);
    }
  }
  return o;
}
function Ds(t, e) {
  const { isAsideEnabled: n } = Ts(),
    s = bs(o, 100);
  let a = null;
  ve(() => {
    requestAnimationFrame(o), window.addEventListener('scroll', s);
  }),
    ss(() => {
      r(location.hash);
    }),
    bt(() => {
      window.removeEventListener('scroll', s);
    });
  function o() {
    if (!n.value) return;
    const i = [].slice.call(t.value.querySelectorAll('.outline-link')),
      l = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter((b) =>
          i.some(($) => $.hash === b.hash && b.offsetParent !== null)
        ),
      d = window.scrollY,
      f = window.innerHeight,
      y = document.body.offsetHeight,
      m = Math.abs(d + f - y) < 1;
    if (l.length && m) {
      r(l[l.length - 1].hash);
      return;
    }
    for (let b = 0; b < l.length; b++) {
      const $ = l[b],
        v = l[b + 1],
        [_, E] = zs(b, $, v);
      if (_) {
        r(E);
        return;
      }
    }
  }
  function r(i) {
    a && a.classList.remove('active'),
      i == null
        ? (a = null)
        : (a = t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`));
    const l = a;
    l
      ? (l.classList.add('active'),
        (e.value.style.top = l.offsetTop + 33 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'));
  }
}
function Tt(t) {
  return t.parentElement.offsetTop - Hs;
}
function zs(t, e, n) {
  const s = window.scrollY;
  return t === 0 && s === 0
    ? [!0, null]
    : s < Tt(e)
    ? [!1, null]
    : !n || s < Tt(n)
    ? [!0, e.hash]
    : [!1, null];
}
const Rs = ['href', 'title'],
  js = S({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(t) {
      function e({ target: n }) {
        const s = n.href.split('#')[1],
          a = document.getElementById(decodeURIComponent(s));
        a == null || a.focus({ preventScroll: !0 });
      }
      return (n, s) => {
        const a = Pe('VPDocOutlineItem', !0);
        return (
          c(),
          p(
            'ul',
            { class: j(n.root ? 'root' : 'nested') },
            [
              (c(!0),
              p(
                q,
                null,
                ee(
                  n.headers,
                  ({ children: o, link: r, title: i }) => (
                    c(),
                    p('li', null, [
                      h(
                        'a',
                        {
                          class: 'outline-link',
                          href: r,
                          onClick: e,
                          title: i,
                        },
                        F(i),
                        9,
                        Rs
                      ),
                      o != null && o.length
                        ? (c(),
                          x(a, { key: 0, headers: o }, null, 8, ['headers']))
                        : M('', !0),
                    ])
                  )
                ),
                256
              )),
            ],
            2
          )
        );
      };
    },
  }),
  Ct = L(js, [['__scopeId', 'data-v-0c858b47']]),
  Ws = (t) => (ie('data-v-068ede27'), (t = t()), le(), t),
  Us = { class: 'content' },
  Gs = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  qs = { 'aria-labelledby': 'doc-outline-aria-label' },
  Ks = Ws(() =>
    h(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1
    )
  ),
  Qs = S({
    __name: 'VPDocAsideOutline',
    setup(t) {
      const { frontmatter: e, theme: n } = B(),
        s = Qe([]);
      Ee(() => {
        s.value = Pt(e.value.outline ?? n.value.outline);
      });
      const a = C(),
        o = C();
      return (
        Ds(a, o),
        (r, i) => (
          c(),
          p(
            'div',
            {
              class: j([
                'VPDocAsideOutline',
                { 'has-outline': s.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: a,
              role: 'navigation',
            },
            [
              h('div', Us, [
                h(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: o },
                  null,
                  512
                ),
                h('div', Gs, F(u(Mt)(u(n))), 1),
                h('nav', qs, [
                  Ks,
                  w(Ct, { headers: s.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2
          )
        )
      );
    },
  }),
  Zs = L(Qs, [['__scopeId', 'data-v-068ede27']]),
  Js = { class: 'VPDocAsideCarbonAds' },
  Ys = S({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(t) {
      const e = () => null;
      return (n, s) => (
        c(),
        p('div', Js, [
          w(u(e), { 'carbon-ads': n.carbonAds }, null, 8, ['carbon-ads']),
        ])
      );
    },
  }),
  Xs = (t) => (ie('data-v-04b29ed2'), (t = t()), le(), t),
  ea = { class: 'VPDocAside' },
  ta = Xs(() => h('div', { class: 'spacer' }, null, -1)),
  na = S({
    __name: 'VPDocAside',
    setup(t) {
      const { theme: e } = B();
      return (n, s) => (
        c(),
        p('div', ea, [
          g(n.$slots, 'aside-top', {}, void 0, !0),
          g(n.$slots, 'aside-outline-before', {}, void 0, !0),
          w(Zs),
          g(n.$slots, 'aside-outline-after', {}, void 0, !0),
          ta,
          g(n.$slots, 'aside-ads-before', {}, void 0, !0),
          u(e).carbonAds
            ? (c(),
              x(Ys, { key: 0, 'carbon-ads': u(e).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : M('', !0),
          g(n.$slots, 'aside-ads-after', {}, void 0, !0),
          g(n.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      );
    },
  }),
  sa = L(na, [['__scopeId', 'data-v-04b29ed2']]);
function aa() {
  const { theme: t, page: e } = B();
  return P(() => {
    const { text: n = 'Edit this page', pattern: s = '' } =
      t.value.editLink || {};
    let a;
    return (
      typeof s == 'function'
        ? (a = s(e.value))
        : (a = s.replace(/:path/g, e.value.filePath)),
      { url: a, text: n }
    );
  });
}
function oa() {
  const { page: t, theme: e, frontmatter: n } = B();
  return P(() => {
    var l, d, f, y, m, b, $, v;
    const s = $n(e.value.sidebar, t.value.relativePath),
      a = As(s),
      o = a.findIndex((_) => we(t.value.relativePath, _.link)),
      r =
        (((l = e.value.docFooter) == null ? void 0 : l.prev) === !1 &&
          !n.value.prev) ||
        n.value.prev === !1,
      i =
        (((d = e.value.docFooter) == null ? void 0 : d.next) === !1 &&
          !n.value.next) ||
        n.value.next === !1;
    return {
      prev: r
        ? void 0
        : {
            text:
              (typeof n.value.prev == 'string'
                ? n.value.prev
                : typeof n.value.prev == 'object'
                ? n.value.prev.text
                : void 0) ??
              ((f = a[o - 1]) == null ? void 0 : f.docFooterText) ??
              ((y = a[o - 1]) == null ? void 0 : y.text),
            link:
              (typeof n.value.prev == 'object' ? n.value.prev.link : void 0) ??
              ((m = a[o - 1]) == null ? void 0 : m.link),
          },
      next: i
        ? void 0
        : {
            text:
              (typeof n.value.next == 'string'
                ? n.value.next
                : typeof n.value.next == 'object'
                ? n.value.next.text
                : void 0) ??
              ((b = a[o + 1]) == null ? void 0 : b.docFooterText) ??
              (($ = a[o + 1]) == null ? void 0 : $.text),
            link:
              (typeof n.value.next == 'object' ? n.value.next.link : void 0) ??
              ((v = a[o + 1]) == null ? void 0 : v.link),
          },
    };
  });
}
const ra = {},
  ia = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  la = h(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1
  ),
  ca = h(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1
  ),
  ua = [la, ca];
function da(t, e) {
  return c(), p('svg', ia, ua);
}
const ha = L(ra, [['render', da]]),
  he = S({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(t) {
      const e = t,
        n = P(() => e.tag ?? (e.href ? 'a' : 'span')),
        s = P(() => e.href && fn.test(e.href));
      return (a, o) => (
        c(),
        x(
          $e(n.value),
          {
            class: j([
              'VPLink',
              {
                link: a.href,
                'vp-external-link-icon': s.value,
                'no-icon': a.noIcon,
              },
            ]),
            href: a.href ? u(St)(a.href) : void 0,
            target: a.target ?? (s.value ? '_blank' : void 0),
            rel: a.rel ?? (s.value ? 'noreferrer' : void 0),
          },
          { default: k(() => [g(a.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    },
  }),
  pa = { class: 'VPLastUpdated' },
  fa = ['datetime'],
  va = S({
    __name: 'VPDocFooterLastUpdated',
    setup(t) {
      const { theme: e, page: n, frontmatter: s, lang: a } = B(),
        o = P(() => new Date(s.value.lastUpdated ?? n.value.lastUpdated)),
        r = P(() => o.value.toISOString()),
        i = C('');
      return (
        ve(() => {
          ge(() => {
            var l, d, f;
            i.value = new Intl.DateTimeFormat(
              (d =
                (l = e.value.lastUpdated) == null ? void 0 : l.formatOptions) !=
                null && d.forceLocale
                ? a.value
                : void 0,
              ((f = e.value.lastUpdated) == null
                ? void 0
                : f.formatOptions) ?? { dateStyle: 'short', timeStyle: 'short' }
            ).format(o.value);
          });
        }),
        (l, d) => {
          var f;
          return (
            c(),
            p('p', pa, [
              te(
                F(
                  ((f = u(e).lastUpdated) == null ? void 0 : f.text) ||
                    u(e).lastUpdatedText ||
                    'Last updated'
                ) + ': ',
                1
              ),
              h('time', { datetime: r.value }, F(i.value), 9, fa),
            ])
          );
        }
      );
    },
  }),
  ma = L(va, [['__scopeId', 'data-v-35dd19da']]),
  _a = { key: 0, class: 'VPDocFooter' },
  ga = { key: 0, class: 'edit-info' },
  ya = { key: 0, class: 'edit-link' },
  ba = { key: 1, class: 'last-updated' },
  ka = { key: 1, class: 'prev-next' },
  $a = { class: 'pager' },
  wa = ['innerHTML'],
  Sa = ['innerHTML'],
  Ma = { class: 'pager' },
  Pa = ['innerHTML'],
  Ca = ['innerHTML'],
  La = S({
    __name: 'VPDocFooter',
    setup(t) {
      const { theme: e, page: n, frontmatter: s } = B(),
        a = aa(),
        o = oa(),
        r = P(() => e.value.editLink && s.value.editLink !== !1),
        i = P(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        l = P(() => r.value || i.value || o.value.prev || o.value.next);
      return (d, f) => {
        var y, m, b, $;
        return l.value
          ? (c(),
            p('footer', _a, [
              g(d.$slots, 'doc-footer-before', {}, void 0, !0),
              r.value || i.value
                ? (c(),
                  p('div', ga, [
                    r.value
                      ? (c(),
                        p('div', ya, [
                          w(
                            he,
                            {
                              class: 'edit-link-button',
                              href: u(a).url,
                              'no-icon': !0,
                            },
                            {
                              default: k(() => [
                                w(ha, {
                                  class: 'edit-link-icon',
                                  'aria-label': 'edit icon',
                                }),
                                te(' ' + F(u(a).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href']
                          ),
                        ]))
                      : M('', !0),
                    i.value ? (c(), p('div', ba, [w(ma)])) : M('', !0),
                  ]))
                : M('', !0),
              ((y = u(o).prev) != null && y.link) ||
              ((m = u(o).next) != null && m.link)
                ? (c(),
                  p('nav', ka, [
                    h('div', $a, [
                      (b = u(o).prev) != null && b.link
                        ? (c(),
                          x(
                            he,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: u(o).prev.link,
                            },
                            {
                              default: k(() => {
                                var v;
                                return [
                                  h(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((v = u(e).docFooter) == null
                                          ? void 0
                                          : v.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    wa
                                  ),
                                  h(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: u(o).prev.text,
                                    },
                                    null,
                                    8,
                                    Sa
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ['href']
                          ))
                        : M('', !0),
                    ]),
                    h('div', Ma, [
                      ($ = u(o).next) != null && $.link
                        ? (c(),
                          x(
                            he,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: u(o).next.link,
                            },
                            {
                              default: k(() => {
                                var v;
                                return [
                                  h(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((v = u(e).docFooter) == null
                                          ? void 0
                                          : v.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    Pa
                                  ),
                                  h(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: u(o).next.text,
                                    },
                                    null,
                                    8,
                                    Ca
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ['href']
                          ))
                        : M('', !0),
                    ]),
                  ]))
                : M('', !0),
            ]))
          : M('', !0);
      };
    },
  }),
  Va = L(La, [['__scopeId', 'data-v-6263630b']]),
  Ia = {},
  Oa = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ea = h(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1
  ),
  Aa = [Ea];
function xa(t, e) {
  return c(), p('svg', Oa, Aa);
}
const Lt = L(Ia, [['render', xa]]),
  Na = { key: 0, class: 'VPDocOutlineDropdown' },
  Ta = { key: 0, class: 'items' },
  Ha = S({
    __name: 'VPDocOutlineDropdown',
    setup(t) {
      const { frontmatter: e, theme: n } = B(),
        s = C(!1);
      Ee(() => {
        s.value = !1;
      });
      const a = Qe([]);
      return (
        Ee(() => {
          a.value = Pt(e.value.outline ?? n.value.outline);
        }),
        (o, r) =>
          a.value.length > 0
            ? (c(),
              p('div', Na, [
                h(
                  'button',
                  {
                    onClick: r[0] || (r[0] = (i) => (s.value = !s.value)),
                    class: j({ open: s.value }),
                  },
                  [te(F(u(Mt)(u(n))) + ' ', 1), w(Lt, { class: 'icon' })],
                  2
                ),
                s.value
                  ? (c(),
                    p('div', Ta, [
                      w(Ct, { headers: a.value }, null, 8, ['headers']),
                    ]))
                  : M('', !0),
              ]))
            : M('', !0)
      );
    },
  }),
  Fa = L(Ha, [['__scopeId', 'data-v-906a13ae']]),
  Ba = (t) => (ie('data-v-9cb1169d'), (t = t()), le(), t),
  Da = { class: 'container' },
  za = Ba(() => h('div', { class: 'aside-curtain' }, null, -1)),
  Ra = { class: 'aside-container' },
  ja = { class: 'aside-content' },
  Wa = { class: 'content' },
  Ua = { class: 'content-container' },
  Ga = { class: 'main' },
  qa = S({
    __name: 'VPDoc',
    setup(t) {
      const { theme: e } = B(),
        n = xe(),
        { hasSidebar: s, hasAside: a, leftAside: o } = me(),
        r = P(() => n.path.replace(/[./]+/g, '_').replace(/_html$/, ''));
      return (i, l) => {
        const d = Pe('Content');
        return (
          c(),
          p(
            'div',
            { class: j(['VPDoc', { 'has-sidebar': u(s), 'has-aside': u(a) }]) },
            [
              g(i.$slots, 'doc-top', {}, void 0, !0),
              h('div', Da, [
                u(a)
                  ? (c(),
                    p(
                      'div',
                      { key: 0, class: j(['aside', { 'left-aside': u(o) }]) },
                      [
                        za,
                        h('div', Ra, [
                          h('div', ja, [
                            w(sa, null, {
                              'aside-top': k(() => [
                                g(i.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': k(() => [
                                g(i.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': k(() => [
                                g(
                                  i.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-outline-after': k(() => [
                                g(
                                  i.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-ads-before': k(() => [
                                g(i.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': k(() => [
                                g(i.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2
                    ))
                  : M('', !0),
                h('div', Wa, [
                  h('div', Ua, [
                    g(i.$slots, 'doc-before', {}, void 0, !0),
                    w(Fa),
                    h('main', Ga, [
                      w(
                        d,
                        {
                          class: j([
                            'vp-doc',
                            [
                              r.value,
                              u(e).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class']
                      ),
                    ]),
                    w(Va, null, {
                      'doc-footer-before': k(() => [
                        g(i.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    g(i.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              g(i.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2
          )
        );
      };
    },
  }),
  Ka = L(qa, [['__scopeId', 'data-v-9cb1169d']]),
  Qa = S({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
    },
    setup(t) {
      const e = t,
        n = P(() => e.href && fn.test(e.href)),
        s = P(() => (e.tag || e.href ? 'a' : 'button'));
      return (a, o) => (
        c(),
        x(
          $e(s.value),
          {
            class: j(['VPButton', [a.size, a.theme]]),
            href: a.href ? u(St)(a.href) : void 0,
            target: n.value ? '_blank' : void 0,
            rel: n.value ? 'noreferrer' : void 0,
          },
          { default: k(() => [te(F(a.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    },
  }),
  Za = L(Qa, [['__scopeId', 'data-v-0617c479']]),
  Ja = ['src', 'alt'],
  Ya = S({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(t) {
      return (e, n) => {
        const s = Pe('VPImage', !0);
        return e.image
          ? (c(),
            p(
              q,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (c(),
                    p(
                      'img',
                      De(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: u(Ke)(
                            typeof e.image == 'string' ? e.image : e.image.src
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == 'string'
                              ? ''
                              : e.image.alt || ''),
                        }
                      ),
                      null,
                      16,
                      Ja
                    ))
                  : (c(),
                    p(
                      q,
                      { key: 1 },
                      [
                        w(
                          s,
                          De(
                            {
                              class: 'dark',
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                        w(
                          s,
                          De(
                            {
                              class: 'light',
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : M('', !0);
      };
    },
  }),
  We = L(Ya, [['__scopeId', 'data-v-ec848010']]),
  Xa = (t) => (ie('data-v-179d475b'), (t = t()), le(), t),
  eo = { class: 'container' },
  to = { class: 'main' },
  no = { key: 0, class: 'name' },
  so = ['innerHTML'],
  ao = ['innerHTML'],
  oo = ['innerHTML'],
  ro = { key: 0, class: 'actions' },
  io = { key: 0, class: 'image' },
  lo = { class: 'image-container' },
  co = Xa(() => h('div', { class: 'image-bg' }, null, -1)),
  uo = S({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(t) {
      const e = Ze('hero-image-slot-exists');
      return (n, s) => (
        c(),
        p(
          'div',
          { class: j(['VPHero', { 'has-image': n.image || u(e) }]) },
          [
            h('div', eo, [
              h('div', to, [
                g(
                  n.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    n.name
                      ? (c(),
                        p('h1', no, [
                          h(
                            'span',
                            { innerHTML: n.name, class: 'clip' },
                            null,
                            8,
                            so
                          ),
                        ]))
                      : M('', !0),
                    n.text
                      ? (c(),
                        p(
                          'p',
                          { key: 1, innerHTML: n.text, class: 'text' },
                          null,
                          8,
                          ao
                        ))
                      : M('', !0),
                    n.tagline
                      ? (c(),
                        p(
                          'p',
                          { key: 2, innerHTML: n.tagline, class: 'tagline' },
                          null,
                          8,
                          oo
                        ))
                      : M('', !0),
                  ],
                  !0
                ),
                n.actions
                  ? (c(),
                    p('div', ro, [
                      (c(!0),
                      p(
                        q,
                        null,
                        ee(
                          n.actions,
                          (a) => (
                            c(),
                            p('div', { key: a.link, class: 'action' }, [
                              w(
                                Za,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: a.theme,
                                  text: a.text,
                                  href: a.link,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href']
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : M('', !0),
              ]),
              n.image || u(e)
                ? (c(),
                  p('div', io, [
                    h('div', lo, [
                      co,
                      g(
                        n.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          n.image
                            ? (c(),
                              x(
                                We,
                                { key: 0, class: 'image-src', image: n.image },
                                null,
                                8,
                                ['image']
                              ))
                            : M('', !0),
                        ],
                        !0
                      ),
                    ]),
                  ]))
                : M('', !0),
            ]),
          ],
          2
        )
      );
    },
  }),
  ho = L(uo, [['__scopeId', 'data-v-179d475b']]),
  po = S({
    __name: 'VPHomeHero',
    setup(t) {
      const { frontmatter: e } = B();
      return (n, s) =>
        u(e).hero
          ? (c(),
            x(
              ho,
              {
                key: 0,
                class: 'VPHomeHero',
                name: u(e).hero.name,
                text: u(e).hero.text,
                tagline: u(e).hero.tagline,
                image: u(e).hero.image,
                actions: u(e).hero.actions,
              },
              {
                'home-hero-info': k(() => [g(n.$slots, 'home-hero-info')]),
                'home-hero-image': k(() => [g(n.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : M('', !0);
    },
  }),
  fo = {},
  vo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  mo = h(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1
  ),
  _o = [mo];
function go(t, e) {
  return c(), p('svg', vo, _o);
}
const yo = L(fo, [['render', go]]),
  bo = { class: 'box' },
  ko = { key: 0, class: 'icon' },
  $o = ['innerHTML'],
  wo = ['innerHTML'],
  So = ['innerHTML'],
  Mo = { key: 4, class: 'link-text' },
  Po = { class: 'link-text-value' },
  Co = S({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(t) {
      return (e, n) => (
        c(),
        x(
          he,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div',
          },
          {
            default: k(() => [
              h('article', bo, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (c(),
                    p('div', ko, [
                      w(
                        We,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ),
                    ]))
                  : typeof e.icon == 'object'
                  ? (c(),
                    x(
                      We,
                      {
                        key: 1,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width']
                    ))
                  : e.icon
                  ? (c(),
                    p(
                      'div',
                      { key: 2, class: 'icon', innerHTML: e.icon },
                      null,
                      8,
                      $o
                    ))
                  : M('', !0),
                h('h2', { class: 'title', innerHTML: e.title }, null, 8, wo),
                e.details
                  ? (c(),
                    p(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      So
                    ))
                  : M('', !0),
                e.linkText
                  ? (c(),
                    p('div', Mo, [
                      h('p', Po, [
                        te(F(e.linkText) + ' ', 1),
                        w(yo, { class: 'link-text-icon' }),
                      ]),
                    ]))
                  : M('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag']
        )
      );
    },
  }),
  Lo = L(Co, [['__scopeId', 'data-v-a06323f2']]),
  Vo = { key: 0, class: 'VPFeatures' },
  Io = { class: 'container' },
  Oo = { class: 'items' },
  Eo = S({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(t) {
      const e = t,
        n = P(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return 'grid-2';
            if (s === 3) return 'grid-3';
            if (s % 3 === 0) return 'grid-6';
            if (s > 3) return 'grid-4';
          } else return;
        });
      return (s, a) =>
        s.features
          ? (c(),
            p('div', Vo, [
              h('div', Io, [
                h('div', Oo, [
                  (c(!0),
                  p(
                    q,
                    null,
                    ee(
                      s.features,
                      (o) => (
                        c(),
                        p(
                          'div',
                          { key: o.title, class: j(['item', [n.value]]) },
                          [
                            w(
                              Lo,
                              {
                                icon: o.icon,
                                title: o.title,
                                details: o.details,
                                link: o.link,
                                'link-text': o.linkText,
                                rel: o.rel,
                                target: o.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : M('', !0);
    },
  }),
  Ao = L(Eo, [['__scopeId', 'data-v-20f83c9b']]),
  xo = S({
    __name: 'VPHomeFeatures',
    setup(t) {
      const { frontmatter: e } = B();
      return (n, s) =>
        u(e).features
          ? (c(),
            x(
              Ao,
              { key: 0, class: 'VPHomeFeatures', features: u(e).features },
              null,
              8,
              ['features']
            ))
          : M('', !0);
    },
  }),
  No = { class: 'VPHome' },
  To = S({
    __name: 'VPHome',
    setup(t) {
      return (e, n) => {
        const s = Pe('Content');
        return (
          c(),
          p('div', No, [
            g(e.$slots, 'home-hero-before', {}, void 0, !0),
            w(po, null, {
              'home-hero-info': k(() => [
                g(e.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-image': k(() => [
                g(e.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            g(e.$slots, 'home-hero-after', {}, void 0, !0),
            g(e.$slots, 'home-features-before', {}, void 0, !0),
            w(xo),
            g(e.$slots, 'home-features-after', {}, void 0, !0),
            w(s),
          ])
        );
      };
    },
  }),
  Ho = L(To, [['__scopeId', 'data-v-0c59221d']]),
  Fo = {},
  Bo = { class: 'VPPage' };
function Do(t, e) {
  const n = Pe('Content');
  return (
    c(),
    p('div', Bo, [g(t.$slots, 'page-top'), w(n), g(t.$slots, 'page-bottom')])
  );
}
const zo = L(Fo, [['render', Do]]),
  Ro = S({
    __name: 'VPContent',
    setup(t) {
      const { page: e, frontmatter: n } = B(),
        { hasSidebar: s } = me();
      return (a, o) => (
        c(),
        p(
          'div',
          {
            class: j([
              'VPContent',
              { 'has-sidebar': u(s), 'is-home': u(n).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            u(e).isNotFound
              ? g(a.$slots, 'not-found', { key: 0 }, () => [w(Os)], !0)
              : u(n).layout === 'page'
              ? (c(),
                x(
                  zo,
                  { key: 1 },
                  {
                    'page-top': k(() => [
                      g(a.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': k(() => [
                      g(a.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : u(n).layout === 'home'
              ? (c(),
                x(
                  Ho,
                  { key: 2 },
                  {
                    'home-hero-before': k(() => [
                      g(a.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': k(() => [
                      g(a.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-image': k(() => [
                      g(a.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': k(() => [
                      g(a.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': k(() => [
                      g(a.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': k(() => [
                      g(a.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : u(n).layout && u(n).layout !== 'doc'
              ? (c(), x($e(u(n).layout), { key: 3 }))
              : (c(),
                x(
                  Ka,
                  { key: 4 },
                  {
                    'doc-top': k(() => [
                      g(a.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': k(() => [
                      g(a.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'doc-footer-before': k(() => [
                      g(a.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': k(() => [
                      g(a.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': k(() => [
                      g(a.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'aside-top': k(() => [
                      g(a.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-outline-before': k(() => [
                      g(a.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': k(() => [
                      g(a.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': k(() => [
                      g(a.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': k(() => [
                      g(a.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    'aside-bottom': k(() => [
                      g(a.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                )),
          ],
          2
        )
      );
    },
  }),
  jo = L(Ro, [['__scopeId', 'data-v-5758fed0']]),
  Wo = { class: 'container' },
  Uo = ['innerHTML'],
  Go = ['innerHTML'],
  qo = S({
    __name: 'VPFooter',
    setup(t) {
      const { theme: e, frontmatter: n } = B(),
        { hasSidebar: s } = me();
      return (a, o) =>
        u(e).footer && u(n).footer !== !1
          ? (c(),
            p(
              'footer',
              { key: 0, class: j(['VPFooter', { 'has-sidebar': u(s) }]) },
              [
                h('div', Wo, [
                  u(e).footer.message
                    ? (c(),
                      p(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: u(e).footer.message,
                        },
                        null,
                        8,
                        Uo
                      ))
                    : M('', !0),
                  u(e).footer.copyright
                    ? (c(),
                      p(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: u(e).footer.copyright,
                        },
                        null,
                        8,
                        Go
                      ))
                    : M('', !0),
                ]),
              ],
              2
            ))
          : M('', !0);
    },
  }),
  Ko = L(qo, [['__scopeId', 'data-v-d7682073']]),
  Qo = { class: 'header' },
  Zo = { class: 'outline' },
  Jo = S({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(t) {
      const e = t,
        { theme: n } = B(),
        s = C(!1),
        a = C(0),
        o = C();
      Ee(() => {
        s.value = !1;
      });
      function r() {
        (s.value = !s.value),
          (a.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function i(d) {
        d.target.classList.contains('outline-link') &&
          (o.value && (o.value.style.transition = 'none'),
          ce(() => {
            s.value = !1;
          }));
      }
      function l() {
        (s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (d, f) => (
        c(),
        p(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: as({ '--vp-vh': a.value + 'px' }),
          },
          [
            d.headers.length > 0
              ? (c(),
                p(
                  'button',
                  { key: 0, onClick: r, class: j({ open: s.value }) },
                  [te(F(u(Mt)(u(n))) + ' ', 1), w(Lt, { class: 'icon' })],
                  2
                ))
              : (c(),
                p(
                  'button',
                  { key: 1, onClick: l },
                  F(u(n).returnToTopLabel || 'Return to top'),
                  1
                )),
            w(
              qe,
              { name: 'flyout' },
              {
                default: k(() => [
                  s.value
                    ? (c(),
                      p(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: o,
                          class: 'items',
                          onClick: i,
                        },
                        [
                          h('div', Qo, [
                            h(
                              'a',
                              { class: 'top-link', href: '#', onClick: l },
                              F(u(n).returnToTopLabel || 'Return to top'),
                              1
                            ),
                          ]),
                          h('div', Zo, [
                            w(Ct, { headers: d.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512
                      ))
                    : M('', !0),
                ]),
                _: 1,
              }
            ),
          ],
          4
        )
      );
    },
  }),
  Yo = L(Jo, [['__scopeId', 'data-v-a3b6dd1d']]),
  Xo = {},
  er = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  tr = h(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1
  ),
  nr = h(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1
  ),
  sr = h(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1
  ),
  ar = h(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1
  ),
  or = [tr, nr, sr, ar];
function rr(t, e) {
  return c(), p('svg', er, or);
}
const ir = L(Xo, [['render', rr]]),
  lr = ['aria-expanded'],
  cr = { class: 'menu-text' },
  ur = S({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(t) {
      const { theme: e, frontmatter: n } = B(),
        { hasSidebar: s } = me(),
        { y: a } = vn(),
        o = Qe([]),
        r = C(0);
      ve(() => {
        r.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height'
          )
        );
      }),
        Ee(() => {
          o.value = Pt(n.value.outline ?? e.value.outline);
        });
      const i = P(() => o.value.length === 0 && !s.value),
        l = P(() => ({
          VPLocalNav: !0,
          fixed: i.value,
          'reached-top': a.value >= r.value,
        }));
      return (d, f) =>
        u(n).layout !== 'home' && (!i.value || u(a) >= r.value)
          ? (c(),
            p(
              'div',
              { key: 0, class: j(l.value) },
              [
                u(s)
                  ? (c(),
                    p(
                      'button',
                      {
                        key: 0,
                        class: 'menu',
                        'aria-expanded': d.open,
                        'aria-controls': 'VPSidebarNav',
                        onClick: f[0] || (f[0] = (y) => d.$emit('open-menu')),
                      },
                      [
                        w(ir, { class: 'menu-icon' }),
                        h('span', cr, F(u(e).sidebarMenuLabel || 'Menu'), 1),
                      ],
                      8,
                      lr
                    ))
                  : M('', !0),
                w(Yo, { headers: o.value, navHeight: r.value }, null, 8, [
                  'headers',
                  'navHeight',
                ]),
              ],
              2
            ))
          : M('', !0);
    },
  }),
  dr = L(ur, [['__scopeId', 'data-v-6b0124a2']]);
function hr() {
  const t = C(!1);
  function e() {
    (t.value = !0), window.addEventListener('resize', a);
  }
  function n() {
    (t.value = !1), window.removeEventListener('resize', a);
  }
  function s() {
    t.value ? n() : e();
  }
  function a() {
    window.outerWidth >= 768 && n();
  }
  const o = xe();
  return (
    K(() => o.path, n),
    { isScreenOpen: t, openScreen: e, closeScreen: n, toggleScreen: s }
  );
}
const pr = {},
  fr = { class: 'VPSwitch', type: 'button', role: 'switch' },
  vr = { class: 'check' },
  mr = { key: 0, class: 'icon' };
function _r(t, e) {
  return (
    c(),
    p('button', fr, [
      h('span', vr, [
        t.$slots.default
          ? (c(), p('span', mr, [g(t.$slots, 'default', {}, void 0, !0)]))
          : M('', !0),
      ]),
    ])
  );
}
const gr = L(pr, [
    ['render', _r],
    ['__scopeId', 'data-v-eacf6b96'],
  ]),
  yr = {},
  br = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  kr = h(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1
  ),
  $r = [kr];
function wr(t, e) {
  return c(), p('svg', br, $r);
}
const Sr = L(yr, [['render', wr]]),
  Mr = {},
  Pr = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Cr = mn(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  Lr = [Cr];
function Vr(t, e) {
  return c(), p('svg', Pr, Lr);
}
const Ir = L(Mr, [['render', Vr]]),
  Or = S({
    __name: 'VPSwitchAppearance',
    setup(t) {
      const { isDark: e } = B(),
        n = Ze('toggle-appearance', () => {
          e.value = !e.value;
        }),
        s = P(() =>
          e.value ? 'Switch to light theme' : 'Switch to dark theme'
        );
      return (a, o) => (
        c(),
        x(
          gr,
          {
            title: s.value,
            class: 'VPSwitchAppearance',
            'aria-checked': u(e),
            onClick: u(n),
          },
          {
            default: k(() => [
              w(Ir, { class: 'sun' }),
              w(Sr, { class: 'moon' }),
            ]),
            _: 1,
          },
          8,
          ['title', 'aria-checked', 'onClick']
        )
      );
    },
  }),
  Vt = L(Or, [['__scopeId', 'data-v-9d5201c4']]),
  Er = { key: 0, class: 'VPNavBarAppearance' },
  Ar = S({
    __name: 'VPNavBarAppearance',
    setup(t) {
      const { site: e } = B();
      return (n, s) =>
        u(e).appearance && u(e).appearance !== 'force-dark'
          ? (c(), p('div', Er, [w(Vt)]))
          : M('', !0);
    },
  }),
  xr = L(Ar, [['__scopeId', 'data-v-9d740f17']]),
  It = C();
let Sn = !1,
  st = 0;
function Nr(t) {
  const e = C(!1);
  if (Ve) {
    !Sn && Tr(), st++;
    const n = K(It, (s) => {
      var a, o, r;
      s === t.el.value || ((a = t.el.value) != null && a.contains(s))
        ? ((e.value = !0), (o = t.onFocus) == null || o.call(t))
        : ((e.value = !1), (r = t.onBlur) == null || r.call(t));
    });
    bt(() => {
      n(), st--, st || Hr();
    });
  }
  return kt(e);
}
function Tr() {
  document.addEventListener('focusin', Mn),
    (Sn = !0),
    (It.value = document.activeElement);
}
function Hr() {
  document.removeEventListener('focusin', Mn);
}
function Mn() {
  It.value = document.activeElement;
}
const Fr = {},
  Br = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Dr = h(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1
  ),
  zr = [Dr];
function Rr(t, e) {
  return c(), p('svg', Br, zr);
}
const Pn = L(Fr, [['render', Rr]]),
  jr = {},
  Wr = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ur = h('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Gr = h('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  qr = h('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  Kr = [Ur, Gr, qr];
function Qr(t, e) {
  return c(), p('svg', Wr, Kr);
}
const Zr = L(jr, [['render', Qr]]),
  Jr = { class: 'VPMenuLink' },
  Yr = S({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(t) {
      const { page: e } = B();
      return (n, s) => (
        c(),
        p('div', Jr, [
          w(
            he,
            {
              class: j({
                active: u(we)(
                  u(e).relativePath,
                  n.item.activeMatch || n.item.link,
                  !!n.item.activeMatch
                ),
              }),
              href: n.item.link,
              target: n.item.target,
              rel: n.item.rel,
            },
            { default: k(() => [te(F(n.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel']
          ),
        ])
      );
    },
  }),
  Je = L(Yr, [['__scopeId', 'data-v-fda36267']]),
  Xr = { class: 'VPMenuGroup' },
  ei = { key: 0, class: 'title' },
  ti = S({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(t) {
      return (e, n) => (
        c(),
        p('div', Xr, [
          e.text ? (c(), p('p', ei, F(e.text), 1)) : M('', !0),
          (c(!0),
          p(
            q,
            null,
            ee(
              e.items,
              (s) => (
                c(),
                p(
                  q,
                  null,
                  [
                    'link' in s
                      ? (c(), x(Je, { key: 0, item: s }, null, 8, ['item']))
                      : M('', !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      );
    },
  }),
  ni = L(ti, [['__scopeId', 'data-v-0c8073dd']]),
  si = { class: 'VPMenu' },
  ai = { key: 0, class: 'items' },
  oi = S({
    __name: 'VPMenu',
    props: { items: {} },
    setup(t) {
      return (e, n) => (
        c(),
        p('div', si, [
          e.items
            ? (c(),
              p('div', ai, [
                (c(!0),
                p(
                  q,
                  null,
                  ee(
                    e.items,
                    (s) => (
                      c(),
                      p(
                        q,
                        { key: s.text },
                        [
                          'link' in s
                            ? (c(),
                              x(Je, { key: 0, item: s }, null, 8, ['item']))
                            : (c(),
                              x(
                                ni,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ['text', 'items']
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : M('', !0),
          g(e.$slots, 'default', {}, void 0, !0),
        ])
      );
    },
  }),
  ri = L(oi, [['__scopeId', 'data-v-bf2602cd']]),
  ii = ['aria-expanded', 'aria-label'],
  li = { key: 0, class: 'text' },
  ci = ['innerHTML'],
  ui = { class: 'menu' },
  di = S({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(t) {
      const e = C(!1),
        n = C();
      Nr({ el: n, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (a, o) => (
        c(),
        p(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: n,
            onMouseenter: o[1] || (o[1] = (r) => (e.value = !0)),
            onMouseleave: o[2] || (o[2] = (r) => (e.value = !1)),
          },
          [
            h(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': a.label,
                onClick: o[0] || (o[0] = (r) => (e.value = !e.value)),
              },
              [
                a.button || a.icon
                  ? (c(),
                    p('span', li, [
                      a.icon
                        ? (c(), x($e(a.icon), { key: 0, class: 'option-icon' }))
                        : M('', !0),
                      a.button
                        ? (c(),
                          p(
                            'span',
                            { key: 1, innerHTML: a.button },
                            null,
                            8,
                            ci
                          ))
                        : M('', !0),
                      w(Pn, { class: 'text-icon' }),
                    ]))
                  : (c(), x(Zr, { key: 1, class: 'icon' })),
              ],
              8,
              ii
            ),
            h('div', ui, [
              w(
                ri,
                { items: a.items },
                {
                  default: k(() => [g(a.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items']
              ),
            ]),
          ],
          544
        )
      );
    },
  }),
  Ot = L(di, [['__scopeId', 'data-v-24a85657']]),
  hi = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
    x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  pi = ['href', 'aria-label', 'innerHTML'],
  fi = S({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(t) {
      const e = t,
        n = P(() => (typeof e.icon == 'object' ? e.icon.svg : hi[e.icon]));
      return (s, a) => (
        c(),
        p(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: s.link,
            'aria-label':
              s.ariaLabel ?? (typeof s.icon == 'string' ? s.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: n.value,
          },
          null,
          8,
          pi
        )
      );
    },
  }),
  vi = L(fi, [['__scopeId', 'data-v-4c7e376e']]),
  mi = { class: 'VPSocialLinks' },
  _i = S({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(t) {
      return (e, n) => (
        c(),
        p('div', mi, [
          (c(!0),
          p(
            q,
            null,
            ee(
              e.links,
              ({ link: s, icon: a, ariaLabel: o }) => (
                c(),
                x(vi, { key: s, icon: a, link: s, ariaLabel: o }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel',
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  Et = L(_i, [['__scopeId', 'data-v-2bda75e3']]),
  gi = { key: 0, class: 'group translations' },
  yi = { class: 'trans-title' },
  bi = { key: 1, class: 'group' },
  ki = { class: 'item appearance' },
  $i = { class: 'label' },
  wi = { class: 'appearance-action' },
  Si = { key: 2, class: 'group' },
  Mi = { class: 'item social-links' },
  Pi = S({
    __name: 'VPNavBarExtra',
    setup(t) {
      const { site: e, theme: n } = B(),
        { localeLinks: s, currentLang: a } = Ne({ correspondingLink: !0 }),
        o = P(
          () =>
            (s.value.length && a.value.label) ||
            e.value.appearance ||
            n.value.socialLinks
        );
      return (r, i) =>
        o.value
          ? (c(),
            x(
              Ot,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: k(() => [
                  u(s).length && u(a).label
                    ? (c(),
                      p('div', gi, [
                        h('p', yi, F(u(a).label), 1),
                        (c(!0),
                        p(
                          q,
                          null,
                          ee(
                            u(s),
                            (l) => (
                              c(),
                              x(Je, { key: l.link, item: l }, null, 8, ['item'])
                            )
                          ),
                          128
                        )),
                      ]))
                    : M('', !0),
                  u(e).appearance && u(e).appearance !== 'force-dark'
                    ? (c(),
                      p('div', bi, [
                        h('div', ki, [
                          h(
                            'p',
                            $i,
                            F(u(n).darkModeSwitchLabel || 'Appearance'),
                            1
                          ),
                          h('div', wi, [w(Vt)]),
                        ]),
                      ]))
                    : M('', !0),
                  u(n).socialLinks
                    ? (c(),
                      p('div', Si, [
                        h('div', Mi, [
                          w(
                            Et,
                            {
                              class: 'social-links-list',
                              links: u(n).socialLinks,
                            },
                            null,
                            8,
                            ['links']
                          ),
                        ]),
                      ]))
                    : M('', !0),
                ]),
                _: 1,
              }
            ))
          : M('', !0);
    },
  }),
  Ci = L(Pi, [['__scopeId', 'data-v-e73e388e']]),
  Li = (t) => (ie('data-v-8e5e8081'), (t = t()), le(), t),
  Vi = ['aria-expanded'],
  Ii = Li(() =>
    h(
      'span',
      { class: 'container' },
      [
        h('span', { class: 'top' }),
        h('span', { class: 'middle' }),
        h('span', { class: 'bottom' }),
      ],
      -1
    )
  ),
  Oi = [Ii],
  Ei = S({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(t) {
      return (e, n) => (
        c(),
        p(
          'button',
          {
            type: 'button',
            class: j(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: n[0] || (n[0] = (s) => e.$emit('click')),
          },
          Oi,
          10,
          Vi
        )
      );
    },
  }),
  Ai = L(Ei, [['__scopeId', 'data-v-8e5e8081']]),
  xi = ['innerHTML'],
  Ni = S({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(t) {
      const { page: e } = B();
      return (n, s) => (
        c(),
        x(
          he,
          {
            class: j({
              VPNavBarMenuLink: !0,
              active: u(we)(
                u(e).relativePath,
                n.item.activeMatch || n.item.link,
                !!n.item.activeMatch
              ),
            }),
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            tabindex: '0',
          },
          {
            default: k(() => [
              h('span', { innerHTML: n.item.text }, null, 8, xi),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    },
  }),
  Ti = L(Ni, [['__scopeId', 'data-v-4e0f236b']]),
  Hi = S({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(t) {
      const e = t,
        { page: n } = B(),
        s = (o) =>
          'link' in o
            ? we(n.value.relativePath, o.link, !!e.item.activeMatch)
            : o.items.some(s),
        a = P(() => s(e.item));
      return (o, r) => (
        c(),
        x(
          Ot,
          {
            class: j({
              VPNavBarMenuGroup: !0,
              active:
                u(we)(
                  u(n).relativePath,
                  o.item.activeMatch,
                  !!o.item.activeMatch
                ) || a.value,
            }),
            button: o.item.text,
            items: o.item.items,
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      );
    },
  }),
  Fi = (t) => (ie('data-v-8afbaac8'), (t = t()), le(), t),
  Bi = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  Di = Fi(() =>
    h(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1
    )
  ),
  zi = S({
    __name: 'VPNavBarMenu',
    setup(t) {
      const { theme: e } = B();
      return (n, s) =>
        u(e).nav
          ? (c(),
            p('nav', Bi, [
              Di,
              (c(!0),
              p(
                q,
                null,
                ee(
                  u(e).nav,
                  (a) => (
                    c(),
                    p(
                      q,
                      { key: a.text },
                      [
                        'link' in a
                          ? (c(), x(Ti, { key: 0, item: a }, null, 8, ['item']))
                          : (c(),
                            x(Hi, { key: 1, item: a }, null, 8, ['item'])),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : M('', !0);
    },
  }),
  Ri = L(zi, [['__scopeId', 'data-v-8afbaac8']]);
var Ht;
const Cn = typeof window < 'u',
  ji = (t) => typeof t == 'string',
  Re = () => {};
Cn &&
  (Ht = window == null ? void 0 : window.navigator) != null &&
  Ht.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ut(t) {
  return typeof t == 'function' ? t() : u(t);
}
function Wi(t, e) {
  function n(...s) {
    t(() => e.apply(this, s), { fn: e, thisArg: this, args: s });
  }
  return n;
}
function Ui(t, e = {}) {
  let n, s;
  return (a) => {
    const o = ut(t),
      r = ut(e.maxWait);
    if ((n && clearTimeout(n), o <= 0 || (r !== void 0 && r <= 0)))
      return s && (clearTimeout(s), (s = null)), a();
    r &&
      !s &&
      (s = setTimeout(() => {
        n && clearTimeout(n), (s = null), a();
      }, r)),
      (n = setTimeout(() => {
        s && clearTimeout(s), (s = null), a();
      }, o));
  };
}
function Gi(t) {
  return t;
}
function qi(t) {
  return yn() ? (bn(t), !0) : !1;
}
function Ln(t, e = 200, n = {}) {
  return Wi(Ui(e, n), t);
}
function at(t, e = 200, n = {}) {
  if (e <= 0) return t;
  const s = C(t.value),
    a = Ln(
      () => {
        s.value = t.value;
      },
      e,
      n
    );
  return K(t, () => a()), s;
}
function Vn(t, e, n) {
  return K(
    t,
    (s, a, o) => {
      s && e(s, a, o);
    },
    n
  );
}
function Ki(t) {
  var e;
  const n = ut(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const In = Cn ? window : void 0;
function Fe(...t) {
  let e, n, s, a;
  if ((ji(t[0]) ? (([n, s, a] = t), (e = In)) : ([e, n, s, a] = t), !e))
    return Re;
  let o = Re;
  const r = K(
      () => Ki(e),
      (l) => {
        o(),
          l &&
            (l.addEventListener(n, s, a),
            (o = () => {
              l.removeEventListener(n, s, a), (o = Re);
            }));
      },
      { immediate: !0, flush: 'post' }
    ),
    i = () => {
      r(), o();
    };
  return qi(i), i;
}
const Ft =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Bt = '__vueuse_ssr_handlers__';
Ft[Bt] = Ft[Bt] || {};
const Qi = {
  ctrl: 'control',
  command: 'meta',
  cmd: 'meta',
  option: 'alt',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright',
};
function Zi(t = {}) {
  const {
      reactive: e = !1,
      target: n = In,
      aliasMap: s = Qi,
      passive: a = !0,
      onEventFired: o = Re,
    } = t,
    r = Se(new Set()),
    i = {
      toJSON() {
        return {};
      },
      current: r,
    },
    l = e ? Se(i) : i,
    d = new Set(),
    f = new Set();
  function y(v, _) {
    v in l && (e ? (l[v] = _) : (l[v].value = _));
  }
  function m() {
    for (const v of f) y(v, !1);
  }
  function b(v, _) {
    var E, V;
    const A = (E = v.key) == null ? void 0 : E.toLowerCase(),
      H = [(V = v.code) == null ? void 0 : V.toLowerCase(), A].filter(Boolean);
    A && (_ ? r.add(A) : r.delete(A));
    for (const W of H) f.add(W), y(W, _);
    A === 'meta' && !_
      ? (d.forEach((W) => {
          r.delete(W), y(W, !1);
        }),
        d.clear())
      : typeof v.getModifierState == 'function' &&
        v.getModifierState('Meta') &&
        _ &&
        [...r, ...H].forEach((W) => d.add(W));
  }
  Fe(n, 'keydown', (v) => (b(v, !0), o(v)), { passive: a }),
    Fe(n, 'keyup', (v) => (b(v, !1), o(v)), { passive: a }),
    Fe('blur', m, { passive: !0 }),
    Fe('focus', m, { passive: !0 });
  const $ = new Proxy(l, {
    get(v, _, E) {
      if (typeof _ != 'string') return Reflect.get(v, _, E);
      if (((_ = _.toLowerCase()), _ in s && (_ = s[_]), !(_ in l)))
        if (/[+_-]/.test(_)) {
          const A = _.split(/[+_-]/g).map((H) => H.trim());
          l[_] = P(() => A.every((H) => u($[H])));
        } else l[_] = C(!1);
      const V = Reflect.get(v, _, E);
      return e ? u(V) : V;
    },
  });
  return $;
}
var Dt;
(function (t) {
  (t.UP = 'UP'),
    (t.RIGHT = 'RIGHT'),
    (t.DOWN = 'DOWN'),
    (t.LEFT = 'LEFT'),
    (t.NONE = 'NONE');
})(Dt || (Dt = {}));
var Ji = Object.defineProperty,
  zt = Object.getOwnPropertySymbols,
  Yi = Object.prototype.hasOwnProperty,
  Xi = Object.prototype.propertyIsEnumerable,
  Rt = (t, e, n) =>
    e in t
      ? Ji(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  el = (t, e) => {
    for (var n in e || (e = {})) Yi.call(e, n) && Rt(t, n, e[n]);
    if (zt) for (var n of zt(e)) Xi.call(e, n) && Rt(t, n, e[n]);
    return t;
  };
const tl = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
el({ linear: Gi }, tl);
function fe(t) {
  return Array.isArray ? Array.isArray(t) : An(t) === '[object Array]';
}
const nl = 1 / 0;
function sl(t) {
  if (typeof t == 'string') return t;
  let e = t + '';
  return e == '0' && 1 / t == -nl ? '-0' : e;
}
function al(t) {
  return t == null ? '' : sl(t);
}
function ue(t) {
  return typeof t == 'string';
}
function On(t) {
  return typeof t == 'number';
}
function ol(t) {
  return t === !0 || t === !1 || (rl(t) && An(t) == '[object Boolean]');
}
function En(t) {
  return typeof t == 'object';
}
function rl(t) {
  return En(t) && t !== null;
}
function oe(t) {
  return t != null;
}
function ot(t) {
  return !t.trim().length;
}
function An(t) {
  return t == null
    ? t === void 0
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(t);
}
const il = "Incorrect 'index' type",
  ll = (t) => `Invalid value for key ${t}`,
  cl = (t) => `Pattern length exceeds max of ${t}.`,
  ul = (t) => `Missing ${t} property in key`,
  dl = (t) => `Property 'weight' in key '${t}' must be a positive integer`,
  jt = Object.prototype.hasOwnProperty;
class hl {
  constructor(e) {
    (this._keys = []), (this._keyMap = {});
    let n = 0;
    e.forEach((s) => {
      let a = xn(s);
      (n += a.weight),
        this._keys.push(a),
        (this._keyMap[a.id] = a),
        (n += a.weight);
    }),
      this._keys.forEach((s) => {
        s.weight /= n;
      });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function xn(t) {
  let e = null,
    n = null,
    s = null,
    a = 1,
    o = null;
  if (ue(t) || fe(t)) (s = t), (e = Wt(t)), (n = dt(t));
  else {
    if (!jt.call(t, 'name')) throw new Error(ul('name'));
    const r = t.name;
    if (((s = r), jt.call(t, 'weight') && ((a = t.weight), a <= 0)))
      throw new Error(dl(r));
    (e = Wt(r)), (n = dt(r)), (o = t.getFn);
  }
  return { path: e, id: n, weight: a, src: s, getFn: o };
}
function Wt(t) {
  return fe(t) ? t : t.split('.');
}
function dt(t) {
  return fe(t) ? t.join('.') : t;
}
function pl(t, e) {
  let n = [],
    s = !1;
  const a = (o, r, i) => {
    if (oe(o))
      if (!r[i]) n.push(o);
      else {
        let l = r[i];
        const d = o[l];
        if (!oe(d)) return;
        if (i === r.length - 1 && (ue(d) || On(d) || ol(d))) n.push(al(d));
        else if (fe(d)) {
          s = !0;
          for (let f = 0, y = d.length; f < y; f += 1) a(d[f], r, i + 1);
        } else r.length && a(d, r, i + 1);
      }
  };
  return a(t, ue(e) ? e.split('.') : e, 0), s ? n : n[0];
}
const fl = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  vl = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) =>
      t.score === e.score
        ? t.idx < e.idx
          ? -1
          : 1
        : t.score < e.score
        ? -1
        : 1,
  },
  ml = { location: 0, threshold: 0.6, distance: 100 },
  _l = {
    useExtendedSearch: !1,
    getFn: pl,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var N = { ...vl, ...fl, ...ml, ..._l };
const gl = /[^ ]+/g;
function yl(t = 1, e = 3) {
  const n = new Map(),
    s = Math.pow(10, e);
  return {
    get(a) {
      const o = a.match(gl).length;
      if (n.has(o)) return n.get(o);
      const r = 1 / Math.pow(o, 0.5 * t),
        i = parseFloat(Math.round(r * s) / s);
      return n.set(o, i), i;
    },
    clear() {
      n.clear();
    },
  };
}
class At {
  constructor({
    getFn: e = N.getFn,
    fieldNormWeight: n = N.fieldNormWeight,
  } = {}) {
    (this.norm = yl(n, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    (this.keys = e),
      (this._keysMap = {}),
      e.forEach((n, s) => {
        this._keysMap[n.id] = s;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      ue(this.docs[0])
        ? this.docs.forEach((e, n) => {
            this._addString(e, n);
          })
        : this.docs.forEach((e, n) => {
            this._addObject(e, n);
          }),
      this.norm.clear());
  }
  add(e) {
    const n = this.size();
    ue(e) ? this._addString(e, n) : this._addObject(e, n);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let n = e, s = this.size(); n < s; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(e, n) {
    return e[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, n) {
    if (!oe(e) || ot(e)) return;
    let s = { v: e, i: n, n: this.norm.get(e) };
    this.records.push(s);
  }
  _addObject(e, n) {
    let s = { i: n, $: {} };
    this.keys.forEach((a, o) => {
      let r = a.getFn ? a.getFn(e) : this.getFn(e, a.path);
      if (oe(r)) {
        if (fe(r)) {
          let i = [];
          const l = [{ nestedArrIndex: -1, value: r }];
          for (; l.length; ) {
            const { nestedArrIndex: d, value: f } = l.pop();
            if (oe(f))
              if (ue(f) && !ot(f)) {
                let y = { v: f, i: d, n: this.norm.get(f) };
                i.push(y);
              } else
                fe(f) &&
                  f.forEach((y, m) => {
                    l.push({ nestedArrIndex: m, value: y });
                  });
          }
          s.$[o] = i;
        } else if (ue(r) && !ot(r)) {
          let i = { v: r, n: this.norm.get(r) };
          s.$[o] = i;
        }
      }
    }),
      this.records.push(s);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Nn(
  t,
  e,
  { getFn: n = N.getFn, fieldNormWeight: s = N.fieldNormWeight } = {}
) {
  const a = new At({ getFn: n, fieldNormWeight: s });
  return a.setKeys(t.map(xn)), a.setSources(e), a.create(), a;
}
function bl(
  t,
  { getFn: e = N.getFn, fieldNormWeight: n = N.fieldNormWeight } = {}
) {
  const { keys: s, records: a } = t,
    o = new At({ getFn: e, fieldNormWeight: n });
  return o.setKeys(s), o.setIndexRecords(a), o;
}
function Be(
  t,
  {
    errors: e = 0,
    currentLocation: n = 0,
    expectedLocation: s = 0,
    distance: a = N.distance,
    ignoreLocation: o = N.ignoreLocation,
  } = {}
) {
  const r = e / t.length;
  if (o) return r;
  const i = Math.abs(s - n);
  return a ? r + i / a : i ? 1 : r;
}
function kl(t = [], e = N.minMatchCharLength) {
  let n = [],
    s = -1,
    a = -1,
    o = 0;
  for (let r = t.length; o < r; o += 1) {
    let i = t[o];
    i && s === -1
      ? (s = o)
      : !i &&
        s !== -1 &&
        ((a = o - 1), a - s + 1 >= e && n.push([s, a]), (s = -1));
  }
  return t[o - 1] && o - s >= e && n.push([s, o - 1]), n;
}
const ke = 32;
function $l(
  t,
  e,
  n,
  {
    location: s = N.location,
    distance: a = N.distance,
    threshold: o = N.threshold,
    findAllMatches: r = N.findAllMatches,
    minMatchCharLength: i = N.minMatchCharLength,
    includeMatches: l = N.includeMatches,
    ignoreLocation: d = N.ignoreLocation,
  } = {}
) {
  if (e.length > ke) throw new Error(cl(ke));
  const f = e.length,
    y = t.length,
    m = Math.max(0, Math.min(s, y));
  let b = o,
    $ = m;
  const v = i > 1 || l,
    _ = v ? Array(y) : [];
  let E;
  for (; (E = t.indexOf(e, $)) > -1; ) {
    let U = Be(e, {
      currentLocation: E,
      expectedLocation: m,
      distance: a,
      ignoreLocation: d,
    });
    if (((b = Math.min(U, b)), ($ = E + f), v)) {
      let T = 0;
      for (; T < f; ) (_[E + T] = 1), (T += 1);
    }
  }
  $ = -1;
  let V = [],
    A = 1,
    H = f + y;
  const W = 1 << (f - 1);
  for (let U = 0; U < f; U += 1) {
    let T = 0,
      D = H;
    for (; T < D; )
      Be(e, {
        errors: U,
        currentLocation: m + D,
        expectedLocation: m,
        distance: a,
        ignoreLocation: d,
      }) <= b
        ? (T = D)
        : (H = D),
        (D = Math.floor((H - T) / 2 + T));
    H = D;
    let ne = Math.max(1, m - D + 1),
      pe = r ? y : Math.min(m + D, y) + f,
      ae = Array(pe + 2);
    ae[pe + 1] = (1 << U) - 1;
    for (let I = pe; I >= ne; I -= 1) {
      let R = I - 1,
        X = n[t.charAt(R)];
      if (
        (v && (_[R] = +!!X),
        (ae[I] = ((ae[I + 1] << 1) | 1) & X),
        U && (ae[I] |= ((V[I + 1] | V[I]) << 1) | 1 | V[I + 1]),
        ae[I] & W &&
          ((A = Be(e, {
            errors: U,
            currentLocation: R,
            expectedLocation: m,
            distance: a,
            ignoreLocation: d,
          })),
          A <= b))
      ) {
        if (((b = A), ($ = R), $ <= m)) break;
        ne = Math.max(1, 2 * m - $);
      }
    }
    if (
      Be(e, {
        errors: U + 1,
        currentLocation: m,
        expectedLocation: m,
        distance: a,
        ignoreLocation: d,
      }) > b
    )
      break;
    V = ae;
  }
  const J = { isMatch: $ >= 0, score: Math.max(0.001, A) };
  if (v) {
    const U = kl(_, i);
    U.length ? l && (J.indices = U) : (J.isMatch = !1);
  }
  return J;
}
function wl(t) {
  let e = {};
  for (let n = 0, s = t.length; n < s; n += 1) {
    const a = t.charAt(n);
    e[a] = (e[a] || 0) | (1 << (s - n - 1));
  }
  return e;
}
class Tn {
  constructor(
    e,
    {
      location: n = N.location,
      threshold: s = N.threshold,
      distance: a = N.distance,
      includeMatches: o = N.includeMatches,
      findAllMatches: r = N.findAllMatches,
      minMatchCharLength: i = N.minMatchCharLength,
      isCaseSensitive: l = N.isCaseSensitive,
      ignoreLocation: d = N.ignoreLocation,
    } = {}
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: s,
        distance: a,
        includeMatches: o,
        findAllMatches: r,
        minMatchCharLength: i,
        isCaseSensitive: l,
        ignoreLocation: d,
      }),
      (this.pattern = l ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const f = (m, b) => {
        this.chunks.push({ pattern: m, alphabet: wl(m), startIndex: b });
      },
      y = this.pattern.length;
    if (y > ke) {
      let m = 0;
      const b = y % ke,
        $ = y - b;
      for (; m < $; ) f(this.pattern.substr(m, ke), m), (m += ke);
      if (b) {
        const v = y - ke;
        f(this.pattern.substr(v), v);
      }
    } else f(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: n, includeMatches: s } = this.options;
    if ((n || (e = e.toLowerCase()), this.pattern === e)) {
      let $ = { isMatch: !0, score: 0 };
      return s && ($.indices = [[0, e.length - 1]]), $;
    }
    const {
      location: a,
      distance: o,
      threshold: r,
      findAllMatches: i,
      minMatchCharLength: l,
      ignoreLocation: d,
    } = this.options;
    let f = [],
      y = 0,
      m = !1;
    this.chunks.forEach(({ pattern: $, alphabet: v, startIndex: _ }) => {
      const {
        isMatch: E,
        score: V,
        indices: A,
      } = $l(e, $, v, {
        location: a + _,
        distance: o,
        threshold: r,
        findAllMatches: i,
        minMatchCharLength: l,
        includeMatches: s,
        ignoreLocation: d,
      });
      E && (m = !0), (y += V), E && A && (f = [...f, ...A]);
    });
    let b = { isMatch: m, score: m ? y / this.chunks.length : 1 };
    return m && s && (b.indices = f), b;
  }
}
class ye {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Ut(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Ut(e, this.singleRegex);
  }
  search() {}
}
function Ut(t, e) {
  const n = t.match(e);
  return n ? n[1] : null;
}
class Sl extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'exact';
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const n = e === this.pattern;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Ml extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Pl extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'prefix-exact';
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const n = e.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Cl extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-prefix-exact';
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const n = !e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Ll extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'suffix-exact';
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const n = e.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1],
    };
  }
}
class Vl extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-suffix-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const n = !e.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Hn extends ye {
  constructor(
    e,
    {
      location: n = N.location,
      threshold: s = N.threshold,
      distance: a = N.distance,
      includeMatches: o = N.includeMatches,
      findAllMatches: r = N.findAllMatches,
      minMatchCharLength: i = N.minMatchCharLength,
      isCaseSensitive: l = N.isCaseSensitive,
      ignoreLocation: d = N.ignoreLocation,
    } = {}
  ) {
    super(e),
      (this._bitapSearch = new Tn(e, {
        location: n,
        threshold: s,
        distance: a,
        includeMatches: o,
        findAllMatches: r,
        minMatchCharLength: i,
        isCaseSensitive: l,
        ignoreLocation: d,
      }));
  }
  static get type() {
    return 'fuzzy';
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class Fn extends ye {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'include';
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let n = 0,
      s;
    const a = [],
      o = this.pattern.length;
    for (; (s = e.indexOf(this.pattern, n)) > -1; )
      (n = s + o), a.push([s, n - 1]);
    const r = !!a.length;
    return { isMatch: r, score: r ? 0 : 1, indices: a };
  }
}
const ht = [Sl, Fn, Pl, Cl, Vl, Ll, Ml, Hn],
  Gt = ht.length,
  Il = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  Ol = '|';
function El(t, e = {}) {
  return t.split(Ol).map((n) => {
    let s = n
        .trim()
        .split(Il)
        .filter((o) => o && !!o.trim()),
      a = [];
    for (let o = 0, r = s.length; o < r; o += 1) {
      const i = s[o];
      let l = !1,
        d = -1;
      for (; !l && ++d < Gt; ) {
        const f = ht[d];
        let y = f.isMultiMatch(i);
        y && (a.push(new f(y, e)), (l = !0));
      }
      if (!l)
        for (d = -1; ++d < Gt; ) {
          const f = ht[d];
          let y = f.isSingleMatch(i);
          if (y) {
            a.push(new f(y, e));
            break;
          }
        }
    }
    return a;
  });
}
const Al = new Set([Hn.type, Fn.type]);
class xl {
  constructor(
    e,
    {
      isCaseSensitive: n = N.isCaseSensitive,
      includeMatches: s = N.includeMatches,
      minMatchCharLength: a = N.minMatchCharLength,
      ignoreLocation: o = N.ignoreLocation,
      findAllMatches: r = N.findAllMatches,
      location: i = N.location,
      threshold: l = N.threshold,
      distance: d = N.distance,
    } = {}
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: s,
        minMatchCharLength: a,
        findAllMatches: r,
        ignoreLocation: o,
        location: i,
        threshold: l,
        distance: d,
      }),
      (this.pattern = n ? e : e.toLowerCase()),
      (this.query = El(this.pattern, this.options));
  }
  static condition(e, n) {
    return n.useExtendedSearch;
  }
  searchIn(e) {
    const n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    const { includeMatches: s, isCaseSensitive: a } = this.options;
    e = a ? e : e.toLowerCase();
    let o = 0,
      r = [],
      i = 0;
    for (let l = 0, d = n.length; l < d; l += 1) {
      const f = n[l];
      (r.length = 0), (o = 0);
      for (let y = 0, m = f.length; y < m; y += 1) {
        const b = f[y],
          { isMatch: $, indices: v, score: _ } = b.search(e);
        if ($) {
          if (((o += 1), (i += _), s)) {
            const E = b.constructor.type;
            Al.has(E) ? (r = [...r, ...v]) : r.push(v);
          }
        } else {
          (i = 0), (o = 0), (r.length = 0);
          break;
        }
      }
      if (o) {
        let y = { isMatch: !0, score: i / o };
        return s && (y.indices = r), y;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const pt = [];
function Nl(...t) {
  pt.push(...t);
}
function ft(t, e) {
  for (let n = 0, s = pt.length; n < s; n += 1) {
    let a = pt[n];
    if (a.condition(t, e)) return new a(t, e);
  }
  return new Tn(t, e);
}
const Ue = { AND: '$and', OR: '$or' },
  vt = { PATH: '$path', PATTERN: '$val' },
  mt = (t) => !!(t[Ue.AND] || t[Ue.OR]),
  Tl = (t) => !!t[vt.PATH],
  Hl = (t) => !fe(t) && En(t) && !mt(t),
  qt = (t) => ({ [Ue.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function Bn(t, e, { auto: n = !0 } = {}) {
  const s = (a) => {
    let o = Object.keys(a);
    const r = Tl(a);
    if (!r && o.length > 1 && !mt(a)) return s(qt(a));
    if (Hl(a)) {
      const l = r ? a[vt.PATH] : o[0],
        d = r ? a[vt.PATTERN] : a[l];
      if (!ue(d)) throw new Error(ll(l));
      const f = { keyId: dt(l), pattern: d };
      return n && (f.searcher = ft(d, e)), f;
    }
    let i = { children: [], operator: o[0] };
    return (
      o.forEach((l) => {
        const d = a[l];
        fe(d) &&
          d.forEach((f) => {
            i.children.push(s(f));
          });
      }),
      i
    );
  };
  return mt(t) || (t = qt(t)), s(t);
}
function Fl(t, { ignoreFieldNorm: e = N.ignoreFieldNorm }) {
  t.forEach((n) => {
    let s = 1;
    n.matches.forEach(({ key: a, norm: o, score: r }) => {
      const i = a ? a.weight : null;
      s *= Math.pow(r === 0 && i ? Number.EPSILON : r, (i || 1) * (e ? 1 : o));
    }),
      (n.score = s);
  });
}
function Bl(t, e) {
  const n = t.matches;
  (e.matches = []),
    oe(n) &&
      n.forEach((s) => {
        if (!oe(s.indices) || !s.indices.length) return;
        const { indices: a, value: o } = s;
        let r = { indices: a, value: o };
        s.key && (r.key = s.key.src),
          s.idx > -1 && (r.refIndex = s.idx),
          e.matches.push(r);
      });
}
function Dl(t, e) {
  e.score = t.score;
}
function zl(
  t,
  e,
  {
    includeMatches: n = N.includeMatches,
    includeScore: s = N.includeScore,
  } = {}
) {
  const a = [];
  return (
    n && a.push(Bl),
    s && a.push(Dl),
    t.map((o) => {
      const { idx: r } = o,
        i = { item: e[r], refIndex: r };
      return (
        a.length &&
          a.forEach((l) => {
            l(o, i);
          }),
        i
      );
    })
  );
}
class Me {
  constructor(e, n = {}, s) {
    (this.options = { ...N, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new hl(this.options.keys)),
      this.setCollection(e, s);
  }
  setCollection(e, n) {
    if (((this._docs = e), n && !(n instanceof At))) throw new Error(il);
    this._myIndex =
      n ||
      Nn(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    !oe(e) || (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const n = [];
    for (let s = 0, a = this._docs.length; s < a; s += 1) {
      const o = this._docs[s];
      e(o, s) && (this.removeAt(s), (s -= 1), (a -= 1), n.push(o));
    }
    return n;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: n = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: a,
      shouldSort: o,
      sortFn: r,
      ignoreFieldNorm: i,
    } = this.options;
    let l = ue(e)
      ? ue(this._docs[0])
        ? this._searchStringList(e)
        : this._searchObjectList(e)
      : this._searchLogical(e);
    return (
      Fl(l, { ignoreFieldNorm: i }),
      o && l.sort(r),
      On(n) && n > -1 && (l = l.slice(0, n)),
      zl(l, this._docs, { includeMatches: s, includeScore: a })
    );
  }
  _searchStringList(e) {
    const n = ft(e, this.options),
      { records: s } = this._myIndex,
      a = [];
    return (
      s.forEach(({ v: o, i: r, n: i }) => {
        if (!oe(o)) return;
        const { isMatch: l, score: d, indices: f } = n.searchIn(o);
        l &&
          a.push({
            item: o,
            idx: r,
            matches: [{ score: d, value: o, norm: i, indices: f }],
          });
      }),
      a
    );
  }
  _searchLogical(e) {
    const n = Bn(e, this.options),
      s = (i, l, d) => {
        if (!i.children) {
          const { keyId: y, searcher: m } = i,
            b = this._findMatches({
              key: this._keyStore.get(y),
              value: this._myIndex.getValueForItemAtKeyId(l, y),
              searcher: m,
            });
          return b && b.length ? [{ idx: d, item: l, matches: b }] : [];
        }
        const f = [];
        for (let y = 0, m = i.children.length; y < m; y += 1) {
          const b = i.children[y],
            $ = s(b, l, d);
          if ($.length) f.push(...$);
          else if (i.operator === Ue.AND) return [];
        }
        return f;
      },
      a = this._myIndex.records,
      o = {},
      r = [];
    return (
      a.forEach(({ $: i, i: l }) => {
        if (oe(i)) {
          let d = s(n, i, l);
          d.length &&
            (o[l] || ((o[l] = { idx: l, item: i, matches: [] }), r.push(o[l])),
            d.forEach(({ matches: f }) => {
              o[l].matches.push(...f);
            }));
        }
      }),
      r
    );
  }
  _searchObjectList(e) {
    const n = ft(e, this.options),
      { keys: s, records: a } = this._myIndex,
      o = [];
    return (
      a.forEach(({ $: r, i }) => {
        if (!oe(r)) return;
        let l = [];
        s.forEach((d, f) => {
          l.push(...this._findMatches({ key: d, value: r[f], searcher: n }));
        }),
          l.length && o.push({ idx: i, item: r, matches: l });
      }),
      o
    );
  }
  _findMatches({ key: e, value: n, searcher: s }) {
    if (!oe(n)) return [];
    let a = [];
    if (fe(n))
      n.forEach(({ v: o, i: r, n: i }) => {
        if (!oe(o)) return;
        const { isMatch: l, score: d, indices: f } = s.searchIn(o);
        l &&
          a.push({ score: d, key: e, value: o, idx: r, norm: i, indices: f });
      });
    else {
      const { v: o, n: r } = n,
        { isMatch: i, score: l, indices: d } = s.searchIn(o);
      i && a.push({ score: l, key: e, value: o, norm: r, indices: d });
    }
    return a;
  }
}
Me.version = '6.6.2';
Me.createIndex = Nn;
Me.parseIndex = bl;
Me.config = N;
Me.parseQuery = Bn;
Nl(xl);
const Kt = Se({
    selectedNode: '',
    selectedGroup: '',
    search: '',
    dataValue: '',
    filtered: { count: 0, items: new Map(), groups: new Set() },
  }),
  Ie = () => ({ isSearching: P(() => Kt.search !== ''), ...rs(Kt) });
function Rl(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, n) {
      var s = t.get(e);
      s ? s.push(n) : t.set(e, [n]);
    },
    off: function (e, n) {
      var s = t.get(e);
      s && (n ? s.splice(s.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, n) {
      var s = t.get(e);
      s &&
        s.slice().map(function (a) {
          a(n);
        }),
        (s = t.get('*')) &&
          s.slice().map(function (a) {
            a(e, n);
          });
    },
  };
}
const jl = Rl(),
  Ye = () => ({ emitter: jl });
function Wl(t, e) {
  let n = t.nextElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.nextElementSibling;
  }
}
function Ul(t, e) {
  let n = t.previousElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.previousElementSibling;
  }
}
const Gl = ['command-theme'],
  ql = { 'command-root': '' },
  Kl = S({ name: 'Command' }),
  Ql = S({
    ...Kl,
    props: {
      theme: { type: String, default: 'default' },
      fuseOptions: {
        type: Object,
        default: () => ({ threshold: 0.2, keys: ['label'] }),
      },
    },
    emits: ['select-item'],
    setup(t, { emit: e }) {
      const n = t,
        s = '[command-item=""]',
        a = 'command-item-key',
        o = '[command-group=""]',
        r = 'command-group-key',
        i = '[command-group-heading=""]',
        l = `${s}:not([aria-disabled="true"])`,
        d = `${s}[aria-selected="true"]`,
        f = 'command-item-select',
        y = 'data-value';
      $t('theme', n.theme || 'default');
      const { selectedNode: m, search: b, dataValue: $, filtered: v } = Ie(),
        { emitter: _ } = Ye(),
        E = C(),
        V = at(C(new Map()), 333),
        A = at(C(new Set()), 333),
        H = at(C(new Map())),
        W = P(() => {
          const O = [];
          for (const [G, z] of V.value.entries()) O.push({ key: G, label: z });
          return O;
        }),
        J = P(() => {
          const O = Me.createIndex(n.fuseOptions.keys, W.value);
          return new Me(W.value, n.fuseOptions, O);
        }),
        U = () => {
          var O, G, z;
          const Q = T();
          Q &&
            (((O = Q.parentElement) == null ? void 0 : O.firstElementChild) ===
              Q &&
              ((z = (G = Q.closest(o)) == null ? void 0 : G.querySelector(i)) ==
                null ||
                z.scrollIntoView({ block: 'nearest' })),
            Q.scrollIntoView({ block: 'nearest' }));
        },
        T = () => {
          var O;
          return (O = E.value) == null ? void 0 : O.querySelector(d);
        },
        D = (O = E.value) => {
          const G = O == null ? void 0 : O.querySelectorAll(l);
          return G ? Array.from(G) : [];
        },
        ne = () => {
          var O;
          const G = (O = E.value) == null ? void 0 : O.querySelectorAll(o);
          return G ? Array.from(G) : [];
        },
        pe = () => {
          const [O] = D();
          O && O.getAttribute(a) && (m.value = O.getAttribute(a) || '');
        },
        ae = (O) => {
          const G = D()[O];
          G && (m.value = G.getAttribute(a) || '');
        },
        I = (O) => {
          const G = T(),
            z = D(),
            Q = z.findIndex((He) => He === G),
            _e = z[Q + O];
          _e
            ? (m.value = _e.getAttribute(a) || '')
            : O > 0
            ? ae(0)
            : ae(z.length - 1);
        },
        R = (O) => {
          const G = T();
          let z = G == null ? void 0 : G.closest(o),
            Q = null;
          for (; z && !Q; )
            (z = O > 0 ? Wl(z, o) : Ul(z, o)),
              (Q = z == null ? void 0 : z.querySelector(l));
          Q ? (m.value = Q.getAttribute(a) || '') : I(O);
        },
        X = () => ae(0),
        Z = () => ae(D().length - 1),
        Ce = (O) => {
          O.preventDefault(), O.metaKey ? Z() : O.altKey ? R(1) : I(1);
        },
        tt = (O) => {
          O.preventDefault(), O.metaKey ? X() : O.altKey ? R(-1) : I(-1);
        },
        nt = (O) => {
          switch (O.key) {
            case 'n':
            case 'j': {
              O.ctrlKey && Ce(O);
              break;
            }
            case 'ArrowDown': {
              Ce(O);
              break;
            }
            case 'p':
            case 'k': {
              O.ctrlKey && tt(O);
              break;
            }
            case 'ArrowUp': {
              tt(O);
              break;
            }
            case 'Home': {
              X();
              break;
            }
            case 'End': {
              Z();
              break;
            }
            case 'Enter': {
              const G = T();
              if (G) {
                const z = new Event(f);
                G.dispatchEvent(z);
              }
            }
          }
        },
        se = () => {
          if (!b.value) {
            v.value.count = A.value.size;
            return;
          }
          v.value.groups = new Set('');
          const O = new Map(),
            G = J.value.search(b.value).map((z) => z.item);
          for (const { key: z, label: Q } of G) O.set(z, Q);
          for (const [z, Q] of H.value)
            for (const _e of Q) O.get(_e) && v.value.groups.add(z);
          ce(() => {
            (v.value.count = O.size), (v.value.items = O);
          });
        },
        be = () => {
          const O = D(),
            G = ne();
          for (const z of O) {
            const Q = z.getAttribute(a) || '',
              _e = z.getAttribute(y) || '';
            A.value.add(Q), V.value.set(Q, _e), (v.value.count = V.value.size);
          }
          for (const z of G) {
            const Q = D(z),
              _e = z.getAttribute(r) || '',
              He = new Set('');
            for (const Xn of Q) {
              const es = Xn.getAttribute(a) || '';
              He.add(es);
            }
            H.value.set(_e, He);
          }
        };
      K(
        () => m.value,
        (O) => {
          O && ce(U);
        },
        { deep: !0 }
      ),
        K(
          () => b.value,
          (O) => {
            se(), ce(pe);
          }
        ),
        _.on('selectItem', (O) => {
          e('select-item', O);
        });
      const Yn = Ln((O) => {
        O && (be(), ce(pe));
      }, 100);
      return (
        _.on('rerenderList', Yn),
        ve(() => {
          be(), pe();
        }),
        (O, G) => (
          c(),
          p(
            'div',
            {
              class: j(t.theme),
              onKeydown: nt,
              ref_key: 'commandRef',
              ref: E,
              'command-theme': t.theme,
            },
            [h('div', ql, [g(O.$slots, 'default')])],
            42,
            Gl
          )
        )
      );
    },
  }),
  Oe = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [s, a] of e) n[s] = a;
    return n;
  },
  _t = Oe(Ql, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue',
    ],
  ]),
  Zl = { 'command-dialog': '' },
  Jl = { 'command-dialog-mask': '' },
  Yl = { 'command-dialog-wrapper': '' },
  Xl = { 'command-dialog-header': '' },
  ec = { 'command-dialog-body': '' },
  tc = { key: 0, 'command-dialog-footer': '' },
  nc = S({ name: 'Command.Dialog' }),
  sc = S({
    ...nc,
    props: {
      visible: { type: Boolean, required: !0 },
      theme: { type: String, required: !0 },
    },
    emits: ['select-item'],
    setup(t, { emit: e }) {
      const n = t,
        { search: s, filtered: a } = Ie(),
        { emitter: o } = Ye(),
        r = C();
      o.on('selectItem', (l) => {
        e('select-item', l);
      });
      const i = () => {
        (s.value = ''),
          (a.value.count = 0),
          (a.value.items = new Map()),
          (a.value.groups = new Set());
      };
      return (
        Vn(() => n.visible, i),
        wt(i),
        (l, d) => (
          c(),
          x(
            os,
            { to: 'body', ref_key: 'dialogRef', ref: r },
            [
              w(
                qe,
                { name: 'command-dialog', appear: '' },
                {
                  default: k(() => [
                    t.visible
                      ? (c(),
                        x(
                          _t,
                          { key: 0, theme: t.theme },
                          {
                            default: k(() => [
                              h('div', Zl, [
                                h('div', Jl, [
                                  h('div', Yl, [
                                    h('div', Xl, [g(l.$slots, 'header')]),
                                    h('div', ec, [g(l.$slots, 'body')]),
                                    l.$slots.footer
                                      ? (c(),
                                        p('div', tc, [g(l.$slots, 'footer')]))
                                      : M('v-if', !0),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _: 3,
                          },
                          8,
                          ['theme']
                        ))
                      : M('v-if', !0),
                  ]),
                  _: 3,
                }
              ),
            ],
            512
          )
        )
      );
    },
  }),
  ac = Oe(sc, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue',
    ],
  ]);
let Dn = (t = 21) =>
  crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (e, n) => (
        (n &= 63),
        n < 36
          ? (e += n.toString(36))
          : n < 62
          ? (e += (n - 26).toString(36).toUpperCase())
          : n > 62
          ? (e += '-')
          : (e += '_'),
        e
      ),
      ''
    );
const oc = ['command-group-key', 'data-value'],
  rc = { key: 0, 'command-group-heading': '' },
  ic = { 'command-group-items': '', role: 'group' },
  lc = S({ name: 'Command.Group' }),
  cc = S({
    ...lc,
    props: { heading: { type: String, required: !0 } },
    setup(t) {
      const e = P(() => `command-group-${Dn()}`),
        { filtered: n, isSearching: s } = Ie(),
        a = P(() => (s.value ? n.value.groups.has(e.value) : !0));
      return (o, r) =>
        _n(
          (c(),
          p(
            'div',
            {
              'command-group': '',
              role: 'presentation',
              key: u(e),
              'command-group-key': u(e),
              'data-value': t.heading,
            },
            [
              t.heading ? (c(), p('div', rc, F(t.heading), 1)) : M('v-if', !0),
              h('div', ic, [g(o.$slots, 'default')]),
            ],
            8,
            oc
          )),
          [[gn, u(a)]]
        );
    },
  }),
  uc = Oe(cc, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue',
    ],
  ]),
  dc = ['placeholder', 'value'],
  hc = S({ name: 'Command.Input' }),
  pc = S({
    ...hc,
    props: {
      placeholder: { type: String, required: !0 },
      value: { type: String, required: !1 },
    },
    emits: ['input', 'update:value'],
    setup(t, { emit: e }) {
      const n = C(null),
        { search: s } = Ie(),
        a = P(() => s.value),
        o = (r) => {
          const i = r,
            l = r.target;
          (s.value = l == null ? void 0 : l.value),
            e('input', i),
            e('update:value', s.value);
        };
      return (
        ge(() => {
          var r;
          (r = n.value) == null || r.focus();
        }),
        (r, i) => (
          c(),
          p(
            'input',
            {
              ref_key: 'inputRef',
              ref: n,
              'command-input': '',
              'auto-focus': '',
              'auto-complete': 'off',
              'auto-correct': 'off',
              'spell-check': !1,
              'aria-autocomplete': 'list',
              role: 'combobox',
              'aria-expanded': !0,
              placeholder: t.placeholder,
              value: u(a),
              onInput: o,
            },
            null,
            40,
            dc
          )
        )
      );
    },
  }),
  fc = Oe(pc, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue',
    ],
  ]),
  vc = ['aria-selected', 'aria-disabled', 'command-item-key'],
  mc = S({ name: 'Command.Item' }),
  _c = S({
    ...mc,
    props: {
      shortcut: { type: Array, required: !1 },
      perform: { type: null, required: !1 },
    },
    emits: ['select'],
    setup(t, { emit: e }) {
      const n = t,
        s = 'command-item-select',
        a = 'data-value',
        { current: o } = Zi(),
        { selectedNode: r, filtered: i, isSearching: l } = Ie(),
        { emitter: d } = Ye(),
        f = C(),
        y = P(() => `command-item-${Dn()}`),
        m = P(() => {
          const v = i.value.items.get(y.value);
          return l.value ? v !== void 0 : !0;
        }),
        b = P(() => Array.from(o)),
        $ = () => {
          var v;
          const _ = {
            key: y.value,
            value: ((v = f.value) == null ? void 0 : v.getAttribute(a)) || '',
          };
          e('select', _), d.emit('selectItem', _);
        };
      return (
        Vn(b, (v) => {
          n.shortcut &&
            n.shortcut.length > 0 &&
            n.shortcut.every((_) => o.has(_.toLowerCase())) &&
            n.perform &&
            n.perform();
        }),
        ge(() => {
          var v;
          (v = f.value) == null || v.addEventListener(s, $);
        }),
        wt(() => {
          var v;
          (v = f.value) == null || v.removeEventListener(s, $);
        }),
        (v, _) =>
          _n(
            (c(),
            p(
              'div',
              {
                ref_key: 'itemRef',
                ref: f,
                'command-item': '',
                role: 'option',
                'aria-selected': u(r) === u(y),
                'aria-disabled': !u(m),
                key: u(y),
                'command-item-key': u(y),
                onClick: $,
              },
              [g(v.$slots, 'default')],
              8,
              vc
            )),
            [[gn, u(m)]]
          )
      );
    },
  }),
  gc = Oe(_c, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue',
    ],
  ]),
  yc = S({ name: 'Command.List' }),
  bc = S({
    ...yc,
    setup(t) {
      const { emitter: e } = Ye(),
        n = C(),
        s = C();
      let a = null,
        o;
      return (
        ge(() => {
          o = s.value;
          const r = n.value;
          o &&
            r &&
            ((a = new ResizeObserver((i) => {
              ce(() => {
                const l = o == null ? void 0 : o.offsetHeight;
                r == null ||
                  r.style.setProperty(
                    '--command-list-height',
                    `${l == null ? void 0 : l.toFixed(1)}px`
                  ),
                  e.emit('rerenderList', !0);
              });
            })),
            a.observe(o));
        }),
        wt(() => {
          a !== null && o && a.unobserve(o);
        }),
        (r, i) => (
          c(),
          p(
            'div',
            {
              'command-list': '',
              role: 'listbox',
              'aria-label': 'Suggestions',
              ref_key: 'listRef',
              ref: n,
            },
            [
              h(
                'div',
                { 'command-list-sizer': '', ref_key: 'heightRef', ref: s },
                [g(r.$slots, 'default')],
                512
              ),
            ],
            512
          )
        )
      );
    },
  }),
  kc = Oe(bc, [
    [
      '__file',
      '/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue',
    ],
  ]),
  $c = S({
    name: 'Command.Empty',
    setup(t, { attrs: e, slots: n }) {
      const { filtered: s } = Ie(),
        a = P(() => s.value.count === 0);
      return () =>
        a.value
          ? je('div', { 'command-empty': '', role: 'presentation', ...e }, n)
          : je('div', {
              'command-empty': 'hidden',
              role: 'presentation',
              style: { display: 'none' },
              ...e,
            });
    },
  }),
  wc = S({
    name: 'Command.Loading',
    setup(t, { attrs: e, slots: n }) {
      return () =>
        je('div', { 'command-loading': '', role: 'progressbar', ...e }, n);
    },
  }),
  Sc = S({
    name: 'Command.Separator',
    setup(t, { attrs: e, slots: n }) {
      return () =>
        je('div', { 'command-separator': '', role: 'separator', ...e });
    },
  }),
  Le = Object.assign(_t, {
    Dialog: ac,
    Empty: $c,
    Group: uc,
    Input: fc,
    Item: gc,
    List: kc,
    Loading: wc,
    Separator: Sc,
    Root: _t,
  });
var Qt;
const xt = typeof window < 'u',
  Mc = (t) => typeof t == 'function',
  Pc = (t) => typeof t == 'string',
  Ae = () => {},
  Cc =
    xt &&
    ((Qt = window == null ? void 0 : window.navigator) == null
      ? void 0
      : Qt.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Te(t) {
  return typeof t == 'function' ? t() : u(t);
}
function zn(t, e) {
  function n(...s) {
    return new Promise((a, o) => {
      Promise.resolve(
        t(() => e.apply(this, s), { fn: e, thisArg: this, args: s })
      )
        .then(a)
        .catch(o);
    });
  }
  return n;
}
const Rn = (t) => t();
function Lc(t, e = !0, n = !0, s = !1) {
  let a = 0,
    o,
    r = !0,
    i = Ae,
    l;
  const d = () => {
    o && (clearTimeout(o), (o = void 0), i(), (i = Ae));
  };
  return (y) => {
    const m = Te(t),
      b = Date.now() - a,
      $ = () => (l = y());
    return (
      d(),
      m <= 0
        ? ((a = Date.now()), $())
        : (b > m && (n || !r)
            ? ((a = Date.now()), $())
            : e &&
              (l = new Promise((v, _) => {
                (i = s ? _ : v),
                  (o = setTimeout(() => {
                    (a = Date.now()), (r = !0), v($()), d();
                  }, Math.max(0, m - b)));
              })),
          !n && !o && (o = setTimeout(() => (r = !0), m)),
          (r = !1),
          l)
    );
  };
}
function Vc(t = Rn) {
  const e = C(!0);
  function n() {
    e.value = !1;
  }
  function s() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: kt(e), pause: n, resume: s, eventFilter: a };
}
function Ic(t) {
  return t;
}
function Xe(t) {
  return yn() ? (bn(t), !0) : !1;
}
function c1(t, e = 200, n = !1, s = !0, a = !1) {
  return zn(Lc(e, n, s, a), t);
}
function Oc(t) {
  return typeof t == 'function' ? P(t) : C(t);
}
function et(t, e = !0) {
  is() ? ve(t) : e ? t() : ce(t);
}
function u1(t, e, n = {}) {
  const { immediate: s = !0 } = n,
    a = C(!1);
  let o = null;
  function r() {
    o && (clearTimeout(o), (o = null));
  }
  function i() {
    (a.value = !1), r();
  }
  function l(...d) {
    r(),
      (a.value = !0),
      (o = setTimeout(() => {
        (a.value = !1), (o = null), t(...d);
      }, Te(e)));
  }
  return (
    s && ((a.value = !0), xt && l()),
    Xe(i),
    { isPending: kt(a), start: l, stop: i }
  );
}
var Zt = Object.getOwnPropertySymbols,
  Ec = Object.prototype.hasOwnProperty,
  Ac = Object.prototype.propertyIsEnumerable,
  xc = (t, e) => {
    var n = {};
    for (var s in t) Ec.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
    if (t != null && Zt)
      for (var s of Zt(t)) e.indexOf(s) < 0 && Ac.call(t, s) && (n[s] = t[s]);
    return n;
  };
function Nc(t, e, n = {}) {
  const s = n,
    { eventFilter: a = Rn } = s,
    o = xc(s, ['eventFilter']);
  return K(t, zn(a, e), o);
}
var Tc = Object.defineProperty,
  Hc = Object.defineProperties,
  Fc = Object.getOwnPropertyDescriptors,
  Ge = Object.getOwnPropertySymbols,
  jn = Object.prototype.hasOwnProperty,
  Wn = Object.prototype.propertyIsEnumerable,
  Jt = (t, e, n) =>
    e in t
      ? Tc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  Bc = (t, e) => {
    for (var n in e || (e = {})) jn.call(e, n) && Jt(t, n, e[n]);
    if (Ge) for (var n of Ge(e)) Wn.call(e, n) && Jt(t, n, e[n]);
    return t;
  },
  Dc = (t, e) => Hc(t, Fc(e)),
  zc = (t, e) => {
    var n = {};
    for (var s in t) jn.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
    if (t != null && Ge)
      for (var s of Ge(t)) e.indexOf(s) < 0 && Wn.call(t, s) && (n[s] = t[s]);
    return n;
  };
function Un(t, e, n = {}) {
  const s = n,
    { eventFilter: a } = s,
    o = zc(s, ['eventFilter']),
    { eventFilter: r, pause: i, resume: l, isActive: d } = Vc(a);
  return {
    stop: Nc(t, e, Dc(Bc({}, o), { eventFilter: r })),
    pause: i,
    resume: l,
    isActive: d,
  };
}
function de(t) {
  var e;
  const n = Te(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const re = xt ? window : void 0;
function Y(...t) {
  let e, n, s, a;
  if (
    (Pc(t[0]) || Array.isArray(t[0])
      ? (([n, s, a] = t), (e = re))
      : ([e, n, s, a] = t),
    !e)
  )
    return Ae;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [],
    r = () => {
      o.forEach((f) => f()), (o.length = 0);
    },
    i = (f, y, m, b) => (
      f.addEventListener(y, m, b), () => f.removeEventListener(y, m, b)
    ),
    l = K(
      () => [de(e), Te(a)],
      ([f, y]) => {
        r(), f && o.push(...n.flatMap((m) => s.map((b) => i(f, m, b, y))));
      },
      { immediate: !0, flush: 'post' }
    ),
    d = () => {
      l(), r();
    };
  return Xe(d), d;
}
let Yt = !1;
function d1(t, e, n = {}) {
  const {
    window: s = re,
    ignore: a = [],
    capture: o = !0,
    detectIframe: r = !1,
  } = n;
  if (!s) return;
  Cc &&
    !Yt &&
    ((Yt = !0),
    Array.from(s.document.body.children).forEach((m) =>
      m.addEventListener('click', Ae)
    ));
  let i = !0;
  const l = (m) =>
      a.some((b) => {
        if (typeof b == 'string')
          return Array.from(s.document.querySelectorAll(b)).some(
            ($) => $ === m.target || m.composedPath().includes($)
          );
        {
          const $ = de(b);
          return $ && (m.target === $ || m.composedPath().includes($));
        }
      }),
    f = [
      Y(
        s,
        'click',
        (m) => {
          const b = de(t);
          if (!(!b || b === m.target || m.composedPath().includes(b))) {
            if ((m.detail === 0 && (i = !l(m)), !i)) {
              i = !0;
              return;
            }
            e(m);
          }
        },
        { passive: !0, capture: o }
      ),
      Y(
        s,
        'pointerdown',
        (m) => {
          const b = de(t);
          b && (i = !m.composedPath().includes(b) && !l(m));
        },
        { passive: !0 }
      ),
      r &&
        Y(s, 'blur', (m) => {
          var b;
          const $ = de(t);
          ((b = s.document.activeElement) == null ? void 0 : b.tagName) ===
            'IFRAME' &&
            !($ != null && $.contains(s.document.activeElement)) &&
            e(m);
        }),
    ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Gn(t, e = !1) {
  const n = C(),
    s = () => (n.value = !!t());
  return s(), et(s, e), n;
}
function Rc(t, e = {}) {
  const { window: n = re } = e,
    s = Gn(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function');
  let a;
  const o = C(!1),
    r = () => {
      a &&
        ('removeEventListener' in a
          ? a.removeEventListener('change', i)
          : a.removeListener(i));
    },
    i = () => {
      s.value &&
        (r(),
        (a = n.matchMedia(Oc(t).value)),
        (o.value = a.matches),
        'addEventListener' in a
          ? a.addEventListener('change', i)
          : a.addListener(i));
    };
  return ge(i), Xe(() => r()), o;
}
function h1({ window: t = re } = {}) {
  const e = (s) => {
      const { state: a, length: o } = (t == null ? void 0 : t.history) || {},
        {
          hash: r,
          host: i,
          hostname: l,
          href: d,
          origin: f,
          pathname: y,
          port: m,
          protocol: b,
          search: $,
        } = (t == null ? void 0 : t.location) || {};
      return {
        trigger: s,
        state: a,
        length: o,
        hash: r,
        host: i,
        hostname: l,
        href: d,
        origin: f,
        pathname: y,
        port: m,
        protocol: b,
        search: $,
      };
    },
    n = C(e('load'));
  return (
    t &&
      (Y(t, 'popstate', () => (n.value = e('popstate')), { passive: !0 }),
      Y(t, 'hashchange', () => (n.value = e('hashchange')), { passive: !0 })),
    n
  );
}
const gt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  yt = '__vueuse_ssr_handlers__';
gt[yt] = gt[yt] || {};
const jc = gt[yt];
function qn(t, e) {
  return jc[t] || e;
}
function Wc(t) {
  return t == null
    ? 'any'
    : t instanceof Set
    ? 'set'
    : t instanceof Map
    ? 'map'
    : t instanceof Date
    ? 'date'
    : typeof t == 'boolean'
    ? 'boolean'
    : typeof t == 'string'
    ? 'string'
    : typeof t == 'object'
    ? 'object'
    : Number.isNaN(t)
    ? 'any'
    : 'number';
}
var Uc = Object.defineProperty,
  Xt = Object.getOwnPropertySymbols,
  Gc = Object.prototype.hasOwnProperty,
  qc = Object.prototype.propertyIsEnumerable,
  en = (t, e, n) =>
    e in t
      ? Uc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  tn = (t, e) => {
    for (var n in e || (e = {})) Gc.call(e, n) && en(t, n, e[n]);
    if (Xt) for (var n of Xt(e)) qc.call(e, n) && en(t, n, e[n]);
    return t;
  };
const Kc = {
    boolean: { read: (t) => t === 'true', write: (t) => String(t) },
    object: { read: (t) => JSON.parse(t), write: (t) => JSON.stringify(t) },
    number: { read: (t) => Number.parseFloat(t), write: (t) => String(t) },
    any: { read: (t) => t, write: (t) => String(t) },
    string: { read: (t) => t, write: (t) => String(t) },
    map: {
      read: (t) => new Map(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t.entries())),
    },
    set: {
      read: (t) => new Set(JSON.parse(t)),
      write: (t) => JSON.stringify(Array.from(t)),
    },
    date: { read: (t) => new Date(t), write: (t) => t.toISOString() },
  },
  nn = 'vueuse-storage';
function Qc(t, e, n, s = {}) {
  var a;
  const {
      flush: o = 'pre',
      deep: r = !0,
      listenToStorageChanges: i = !0,
      writeDefaults: l = !0,
      mergeDefaults: d = !1,
      shallow: f,
      window: y = re,
      eventFilter: m,
      onError: b = (T) => {
        console.error(T);
      },
    } = s,
    $ = (f ? Qe : C)(e);
  if (!n)
    try {
      n = qn('getDefaultStorage', () => {
        var T;
        return (T = re) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      b(T);
    }
  if (!n) return $;
  const v = Te(e),
    _ = Wc(v),
    E = (a = s.serializer) != null ? a : Kc[_],
    { pause: V, resume: A } = Un($, () => H($.value), {
      flush: o,
      deep: r,
      eventFilter: m,
    });
  return y && i && (Y(y, 'storage', U), Y(y, nn, J)), U(), $;
  function H(T) {
    try {
      if (T == null) n.removeItem(t);
      else {
        const D = E.write(T),
          ne = n.getItem(t);
        ne !== D &&
          (n.setItem(t, D),
          y &&
            y.dispatchEvent(
              new CustomEvent(nn, {
                detail: { key: t, oldValue: ne, newValue: D, storageArea: n },
              })
            ));
      }
    } catch (D) {
      b(D);
    }
  }
  function W(T) {
    const D = T ? T.newValue : n.getItem(t);
    if (D == null) return l && v !== null && n.setItem(t, E.write(v)), v;
    if (!T && d) {
      const ne = E.read(D);
      return Mc(d)
        ? d(ne, v)
        : _ === 'object' && !Array.isArray(ne)
        ? tn(tn({}, v), ne)
        : ne;
    } else return typeof D != 'string' ? D : E.read(D);
  }
  function J(T) {
    U(T.detail);
  }
  function U(T) {
    if (!(T && T.storageArea !== n)) {
      if (T && T.key == null) {
        $.value = v;
        return;
      }
      if (!(T && T.key !== t)) {
        V();
        try {
          $.value = W(T);
        } catch (D) {
          b(D);
        } finally {
          T ? ce(A) : A();
        }
      }
    }
  }
}
function Kn(t) {
  return Rc('(prefers-color-scheme: dark)', t);
}
var Zc = Object.defineProperty,
  sn = Object.getOwnPropertySymbols,
  Jc = Object.prototype.hasOwnProperty,
  Yc = Object.prototype.propertyIsEnumerable,
  an = (t, e, n) =>
    e in t
      ? Zc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  Xc = (t, e) => {
    for (var n in e || (e = {})) Jc.call(e, n) && an(t, n, e[n]);
    if (sn) for (var n of sn(e)) Yc.call(e, n) && an(t, n, e[n]);
    return t;
  };
function eu(t = {}) {
  const {
      selector: e = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: a = re,
      storage: o,
      storageKey: r = 'vueuse-color-scheme',
      listenToStorageChanges: i = !0,
      storageRef: l,
      emitAuto: d,
    } = t,
    f = Xc({ auto: '', light: 'light', dark: 'dark' }, t.modes || {}),
    y = Kn({ window: a }),
    m = P(() => (y.value ? 'dark' : 'light')),
    b =
      l ||
      (r == null
        ? C(s)
        : Qc(r, s, o, { window: a, listenToStorageChanges: i })),
    $ = P({
      get() {
        return b.value === 'auto' && !d ? m.value : b.value;
      },
      set(V) {
        b.value = V;
      },
    }),
    v = qn('updateHTMLAttrs', (V, A, H) => {
      const W = a == null ? void 0 : a.document.querySelector(V);
      if (W)
        if (A === 'class') {
          const J = H.split(/\s/g);
          Object.values(f)
            .flatMap((U) => (U || '').split(/\s/g))
            .filter(Boolean)
            .forEach((U) => {
              J.includes(U) ? W.classList.add(U) : W.classList.remove(U);
            });
        } else W.setAttribute(A, H);
    });
  function _(V) {
    var A;
    const H = V === 'auto' ? m.value : V;
    v(e, n, (A = f[H]) != null ? A : H);
  }
  function E(V) {
    t.onChanged ? t.onChanged(V, _) : _(V);
  }
  return (
    K($, E, { flush: 'post', immediate: !0 }),
    d && K(m, () => E($.value), { flush: 'post' }),
    et(() => E($.value)),
    $
  );
}
var tu = Object.defineProperty,
  nu = Object.defineProperties,
  su = Object.getOwnPropertyDescriptors,
  on = Object.getOwnPropertySymbols,
  au = Object.prototype.hasOwnProperty,
  ou = Object.prototype.propertyIsEnumerable,
  rn = (t, e, n) =>
    e in t
      ? tu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  ru = (t, e) => {
    for (var n in e || (e = {})) au.call(e, n) && rn(t, n, e[n]);
    if (on) for (var n of on(e)) ou.call(e, n) && rn(t, n, e[n]);
    return t;
  },
  iu = (t, e) => nu(t, su(e));
function p1(t = {}) {
  const { valueDark: e = 'dark', valueLight: n = '', window: s = re } = t,
    a = eu(
      iu(ru({}, t), {
        onChanged: (i, l) => {
          var d;
          t.onChanged
            ? (d = t.onChanged) == null || d.call(t, i === 'dark')
            : l(i);
        },
        modes: { dark: e, light: n },
      })
    ),
    o = Kn({ window: s });
  return P({
    get() {
      return a.value === 'dark';
    },
    set(i) {
      i === o.value ? (a.value = 'auto') : (a.value = i ? 'dark' : 'light');
    },
  });
}
var ln = Object.getOwnPropertySymbols,
  lu = Object.prototype.hasOwnProperty,
  cu = Object.prototype.propertyIsEnumerable,
  uu = (t, e) => {
    var n = {};
    for (var s in t) lu.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
    if (t != null && ln)
      for (var s of ln(t)) e.indexOf(s) < 0 && cu.call(t, s) && (n[s] = t[s]);
    return n;
  };
function du(t, e, n = {}) {
  const s = n,
    { window: a = re } = s,
    o = uu(s, ['window']);
  let r;
  const i = Gn(() => a && 'ResizeObserver' in a),
    l = () => {
      r && (r.disconnect(), (r = void 0));
    },
    d = K(
      () => de(t),
      (y) => {
        l(),
          i.value && a && y && ((r = new ResizeObserver(e)), r.observe(y, o));
      },
      { immediate: !0, flush: 'post' }
    ),
    f = () => {
      l(), d();
    };
  return Xe(f), { isSupported: i, stop: f };
}
function f1(t, e = {}) {
  const {
      reset: n = !0,
      windowResize: s = !0,
      windowScroll: a = !0,
      immediate: o = !0,
    } = e,
    r = C(0),
    i = C(0),
    l = C(0),
    d = C(0),
    f = C(0),
    y = C(0),
    m = C(0),
    b = C(0);
  function $() {
    const v = de(t);
    if (!v) {
      n &&
        ((r.value = 0),
        (i.value = 0),
        (l.value = 0),
        (d.value = 0),
        (f.value = 0),
        (y.value = 0),
        (m.value = 0),
        (b.value = 0));
      return;
    }
    const _ = v.getBoundingClientRect();
    (r.value = _.height),
      (i.value = _.bottom),
      (l.value = _.left),
      (d.value = _.right),
      (f.value = _.top),
      (y.value = _.width),
      (m.value = _.x),
      (b.value = _.y);
  }
  return (
    du(t, $),
    K(
      () => de(t),
      (v) => !v && $()
    ),
    a && Y('scroll', $, { capture: !0, passive: !0 }),
    s && Y('resize', $, { passive: !0 }),
    et(() => {
      o && $();
    }),
    {
      height: r,
      bottom: i,
      left: l,
      right: d,
      top: f,
      width: y,
      x: m,
      y: b,
      update: $,
    }
  );
}
function v1(t, { window: e = re, scrollTarget: n } = {}) {
  const s = C(!1),
    a = () => {
      if (!e) return;
      const o = e.document,
        r = de(t);
      if (!r) s.value = !1;
      else {
        const i = r.getBoundingClientRect();
        s.value =
          i.top <= (e.innerHeight || o.documentElement.clientHeight) &&
          i.left <= (e.innerWidth || o.documentElement.clientWidth) &&
          i.bottom >= 0 &&
          i.right >= 0;
      }
    };
  return (
    K(
      () => de(t),
      () => a(),
      { immediate: !0, flush: 'post' }
    ),
    e && Y(n || e, 'scroll', a, { capture: !1, passive: !0 }),
    s
  );
}
const hu = {
  ctrl: 'control',
  command: 'meta',
  cmd: 'meta',
  option: 'alt',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright',
};
function pu(t = {}) {
  const {
      reactive: e = !1,
      target: n = re,
      aliasMap: s = hu,
      passive: a = !0,
      onEventFired: o = Ae,
    } = t,
    r = Se(new Set()),
    i = {
      toJSON() {
        return {};
      },
      current: r,
    },
    l = e ? Se(i) : i,
    d = new Set(),
    f = new Set();
  function y(v, _) {
    v in l && (e ? (l[v] = _) : (l[v].value = _));
  }
  function m() {
    r.clear();
    for (const v of f) y(v, !1);
  }
  function b(v, _) {
    var E, V;
    const A = (E = v.key) == null ? void 0 : E.toLowerCase(),
      W = [(V = v.code) == null ? void 0 : V.toLowerCase(), A].filter(Boolean);
    A && (_ ? r.add(A) : r.delete(A));
    for (const J of W) f.add(J), y(J, _);
    A === 'meta' && !_
      ? (d.forEach((J) => {
          r.delete(J), y(J, !1);
        }),
        d.clear())
      : typeof v.getModifierState == 'function' &&
        v.getModifierState('Meta') &&
        _ &&
        [...r, ...W].forEach((J) => d.add(J));
  }
  Y(n, 'keydown', (v) => (b(v, !0), o(v)), { passive: a }),
    Y(n, 'keyup', (v) => (b(v, !1), o(v)), { passive: a }),
    Y('blur', m, { passive: !0 }),
    Y('focus', m, { passive: !0 });
  const $ = new Proxy(l, {
    get(v, _, E) {
      if (typeof _ != 'string') return Reflect.get(v, _, E);
      if (((_ = _.toLowerCase()), _ in s && (_ = s[_]), !(_ in l)))
        if (/[+_-]/.test(_)) {
          const A = _.split(/[+_-]/g).map((H) => H.trim());
          l[_] = P(() => A.every((H) => u($[H])));
        } else l[_] = C(!1);
      const V = Reflect.get(v, _, E);
      return e ? u(V) : V;
    },
  });
  return $;
}
var cn;
(function (t) {
  (t.UP = 'UP'),
    (t.RIGHT = 'RIGHT'),
    (t.DOWN = 'DOWN'),
    (t.LEFT = 'LEFT'),
    (t.NONE = 'NONE');
})(cn || (cn = {}));
var fu = Object.defineProperty,
  un = Object.getOwnPropertySymbols,
  vu = Object.prototype.hasOwnProperty,
  mu = Object.prototype.propertyIsEnumerable,
  dn = (t, e, n) =>
    e in t
      ? fu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  _u = (t, e) => {
    for (var n in e || (e = {})) vu.call(e, n) && dn(t, n, e[n]);
    if (un) for (var n of un(e)) mu.call(e, n) && dn(t, n, e[n]);
    return t;
  };
const gu = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
_u({ linear: Ic }, gu);
function m1(t = 'history', e = {}) {
  const {
    initialValue: n = {},
    removeNullishValues: s = !0,
    removeFalsyValues: a = !1,
    write: o = !0,
    window: r = re,
  } = e;
  if (!r) return Se(n);
  const i = Se({});
  function l() {
    if (t === 'history') return r.location.search || '';
    if (t === 'hash') {
      const E = r.location.hash || '',
        V = E.indexOf('?');
      return V > 0 ? E.slice(V) : '';
    } else return (r.location.hash || '').replace(/^#/, '');
  }
  function d(E) {
    const V = E.toString();
    if (t === 'history') return `${V ? `?${V}` : ''}${r.location.hash || ''}`;
    if (t === 'hash-params')
      return `${r.location.search || ''}${V ? `#${V}` : ''}`;
    const A = r.location.hash || '#',
      H = A.indexOf('?');
    return H > 0
      ? `${A.slice(0, H)}${V ? `?${V}` : ''}`
      : `${A}${V ? `?${V}` : ''}`;
  }
  function f() {
    return new URLSearchParams(l());
  }
  function y(E) {
    const V = new Set(Object.keys(i));
    for (const A of E.keys()) {
      const H = E.getAll(A);
      (i[A] = H.length > 1 ? H : E.get(A) || ''), V.delete(A);
    }
    Array.from(V).forEach((A) => delete i[A]);
  }
  const { pause: m, resume: b } = Un(
    i,
    () => {
      const E = new URLSearchParams('');
      Object.keys(i).forEach((V) => {
        const A = i[V];
        Array.isArray(A)
          ? A.forEach((H) => E.append(V, H))
          : (s && A == null) || (a && !A)
          ? E.delete(V)
          : E.set(V, A);
      }),
        $(E);
    },
    { deep: !0 }
  );
  function $(E, V) {
    m(),
      V && y(E),
      r.history.replaceState(
        r.history.state,
        r.document.title,
        r.location.pathname + d(E)
      ),
      b();
  }
  function v() {
    o && $(f(), !0);
  }
  Y(r, 'popstate', v, !1), t !== 'history' && Y(r, 'hashchange', v, !1);
  const _ = f();
  return _.keys().next().value ? y(_) : Object.assign(i, n), i;
}
function yu(t = {}) {
  const {
      window: e = re,
      initialWidth: n = 1 / 0,
      initialHeight: s = 1 / 0,
      listenOrientation: a = !0,
      includeScrollbar: o = !0,
    } = t,
    r = C(n),
    i = C(s),
    l = () => {
      e &&
        (o
          ? ((r.value = e.innerWidth), (i.value = e.innerHeight))
          : ((r.value = e.document.documentElement.clientWidth),
            (i.value = e.document.documentElement.clientHeight)));
    };
  return (
    l(),
    et(l),
    Y('resize', l, { passive: !0 }),
    a && Y('orientationchange', l, { passive: !0 }),
    { width: r, height: i }
  );
}
const hn = C([
    {
      route: '/my-blog/about.html',
      meta: {
        description: '',
        hidden: !0,
        publish: !1,
        title: '关于主题',
        date: '2024-01-02 14:41:20',
      },
    },
    {
      route: '/my-blog/sop/component.html',
      meta: {
        description: '默认支持流程图，tabs面板',
        hidden: !0,
        publish: !1,
        title: '内置第三方插件能力',
        date: '2024-01-02 14:41:20',
      },
    },
    {
      route: '/my-blog/sop/learn_threejs.html',
      meta: {
        description: '学习笔记',
        sticky: 1,
        top: 1,
        recommend: 1,
        title: 'threejs',
        cover: '/public/threejs.avis',
        hiddenCover: !0,
        author: 'zhangxinxin',
        readingTime: !0,
        tag: ['threejs'],
        date: '2024-01-02 14:41:20',
      },
    },
    {
      route: '/my-blog/sop/more.html',
      meta: {
        description: '',
        top: 3,
        hidden: !0,
        publish: !1,
        title: '更多能力',
        date: '2024-01-02 14:41:20',
      },
    },
    {
      route: '/my-blog/sop/quickStart.html',
      meta: {
        description: '1分钟内完成自己的博客创建',
        hidden: !0,
        publish: !1,
        descriptionHTML:
          ' <span style="color:var(--description-font-color);">1分钟内完成自己的博客创建</span> <pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code> <span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@sugarat/theme@latest</span></span> <br/> <br/> <span class="line"><span style="color:#B392F0;">bun create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@sugarat/theme</span><span style="color:#E1E4E8;"> </span></span> </code> </pre>',
        top: 1,
        sidebar: !1,
        title: '快速上手',
        date: '2024-01-02 14:41:20',
      },
    },
    {
      route: '/my-blog/sop/style.html',
      meta: {
        description: '介绍一下自定义主题的部分样式',
        hidden: !0,
        publish: !1,
        title: '🔧 主题样式定制',
        readingTime: !1,
        recommend: 3,
        date: '2024-01-02 14:41:20',
      },
    },
  ]),
  bu = {
    customSearchQuery: function (e) {
      return e
        .replace(/[\u4E00-\u9FA5]/g, ' $& ')
        .replace(/\s+/g, ' ')
        .trim();
    },
  };
function ku(t, e = 'yyyy-MM-dd hh:mm:ss') {
  t instanceof Date || (t = new Date(t));
  const n = {
    'M+': t.getMonth() + 1,
    'd+': t.getDate(),
    'h+': t.getHours(),
    'm+': t.getMinutes(),
    's+': t.getSeconds(),
    'q+': Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds(),
  };
  /(y+)/.test(e) &&
    (e = e.replace(
      RegExp.$1,
      `${t.getFullYear()}`.substr(4 - RegExp.$1.length)
    ));
  for (const s in n)
    new RegExp(`(${s})`).test(e) &&
      (e = e.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? n[s] : `00${n[s]}`.substr(`${n[s]}`.length)
      ));
  return e;
}
const $u = {},
  wu = {
    width: '594',
    height: '112',
    viewBox: '0 0 594 112',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  Su = mn(
    '<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',
    11
  ),
  Mu = [Su];
function Pu(t, e) {
  return c(), p('svg', wu, Mu);
}
const Cu = L($u, [['render', Pu]]),
  Nt = (t) => (ie('data-v-0496792c'), (t = t()), le(), t),
  Lu = { class: 'blog-search', 'data-pagefind-ignore': 'all' },
  Vu = Nt(() =>
    h(
      'svg',
      { width: '14', height: '14', viewBox: '0 0 20 20' },
      [
        h('path', {
          d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
          stroke: 'currentColor',
          fill: 'none',
          'fill-rule': 'evenodd',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  Iu = { key: 0, class: 'search-tip' },
  Ou = { key: 1, class: 'metaKey' },
  Eu = { class: 'search-dialog' },
  Au = { class: 'link' },
  xu = { class: 'title' },
  Nu = { key: 0, class: 'date' },
  Tu = ['innerHTML'],
  Hu = { class: 'command-palette-logo' },
  Fu = {
    href: 'https://github.com/cloudcannon/pagefind',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  Bu = Nt(() => h('span', { class: 'command-palette-Label' }, 'Search by', -1)),
  Du = Nt(() =>
    h(
      'ul',
      { class: 'command-palette-commands' },
      [
        h('li', null, [
          h('kbd', { class: 'command-palette-commands-key' }, [
            h(
              'svg',
              {
                width: '15',
                height: '15',
                'aria-label': 'Enter key',
                role: 'img',
              },
              [
                h(
                  'g',
                  {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '1.2',
                  },
                  [
                    h('path', {
                      d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
                    }),
                  ]
                ),
              ]
            ),
          ]),
          h('span', { class: 'command-palette-Label' }, 'to select'),
        ]),
        h('li', null, [
          h('kbd', { class: 'command-palette-commands-key' }, [
            h(
              'svg',
              {
                width: '15',
                height: '15',
                'aria-label': 'Arrow down',
                role: 'img',
              },
              [
                h(
                  'g',
                  {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '1.2',
                  },
                  [h('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' })]
                ),
              ]
            ),
          ]),
          h('kbd', { class: 'command-palette-commands-key' }, [
            h(
              'svg',
              {
                width: '15',
                height: '15',
                'aria-label': 'Arrow up',
                role: 'img',
              },
              [
                h(
                  'g',
                  {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '1.2',
                  },
                  [h('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' })]
                ),
              ]
            ),
          ]),
          h('span', { class: 'command-palette-Label' }, 'to navigate'),
        ]),
        h('li', null, [
          h('kbd', { class: 'command-palette-commands-key' }, [
            h(
              'svg',
              {
                width: '15',
                height: '15',
                'aria-label': 'Escape key',
                role: 'img',
              },
              [
                h(
                  'g',
                  {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '1.2',
                  },
                  [
                    h('path', {
                      d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
                    }),
                  ]
                ),
              ]
            ),
          ]),
          h('span', { class: 'command-palette-Label' }, 'to close'),
        ]),
      ],
      -1
    )
  ),
  zu = S({
    __name: 'Search',
    setup(t) {
      ls((I) => ({ '0fbb95ce': d.value }));
      const e = C([]),
        n = bu,
        { localeIndex: s, site: a } = rt(),
        o = P(() => {
          var I;
          return {
            ...n,
            ...(((I = n == null ? void 0 : n.locales) == null
              ? void 0
              : I[s.value]) || {}),
          };
        }),
        r = P(() => {
          var I;
          return ((I = o.value) == null ? void 0 : I.showDate) ?? !0;
        }),
        i = yu(),
        l = P(() => i.width.value < 760),
        d = P(() => (l.value ? 0 : 1)),
        f = P(() => {
          var I;
          return (I = o.value) != null && I.heading
            ? o.value.heading.replace(/\{\{searchResult\}\}/, e.value.length)
            : `Total: ${e.value.length} search results.`;
        }),
        y = C('');
      ve(() => {
        y.value = /(Mac|iPhone|iPod|iPad)/i.test(
          navigator == null ? void 0 : navigator.platform
        )
          ? '⌘'
          : 'Ctrl';
      });
      const m = C(!1),
        b = C(''),
        $ = pu({
          passive: !1,
          onEventFired(I) {
            I.ctrlKey &&
              I.key === 'k' &&
              I.type === 'keydown' &&
              I.preventDefault();
          },
        }),
        v = $['Meta+K'],
        _ = $['Ctrl+K'],
        E = $.Escape;
      K(v, (I) => {
        I && (m.value = !0);
      }),
        K(_, (I) => {
          I && (m.value = !0);
        }),
        K(E, (I) => {
          I && (m.value = !1);
        });
      function V() {
        if (!b.value) {
          e.value = [];
          return;
        }
        (e.value = hn.value
          .filter((I) =>
            `${I.meta.description}${I.meta.title}`.includes(b.value)
          )
          .map((I) => {
            var R, X;
            return {
              ...I,
              meta: {
                ...I.meta,
                description:
                  ((X = (R = I.meta) == null ? void 0 : R.description) == null
                    ? void 0
                    : X.replace(
                        new RegExp(`(${b.value})`, 'g'),
                        '<mark>$1</mark>'
                      )) || '',
              },
            };
          })),
          e.value.sort(
            (I, R) => +new Date(R.meta.date) - +new Date(I.meta.date)
          );
      }
      const A = P(() => {
        var I;
        return ((I = o.value) == null ? void 0 : I.resultOptimization) ?? !0;
      });
      K(
        () => b.value,
        async () => {
          var I, R, X;
          if (
            !(
              (I = window == null ? void 0 : window.__pagefind__) != null &&
              I.search
            )
          )
            V();
          else {
            const Z =
              typeof o.value.customSearchQuery == 'function'
                ? o.value.customSearchQuery(b.value)
                : b.value;
            await ((X =
              (R = window == null ? void 0 : window.__pagefind__) == null
                ? void 0
                : R.search) == null
              ? void 0
              : X.call(R, Z).then(async (Ce) => {
                  const nt = (
                    await Promise.all(Ce.results.map((se) => se.data()))
                  )
                    .map((se) => {
                      var be;
                      return {
                        route: se.url.startsWith(a.value.base)
                          ? se.url
                          : Ke(se.url),
                        meta: {
                          title: se.meta.title,
                          description: se.excerpt,
                          date:
                            (be = se == null ? void 0 : se.meta) == null
                              ? void 0
                              : be.date,
                        },
                      };
                    })
                    .filter(
                      (se) =>
                        !A.value || hn.value.some((be) => be.route === se.route)
                    );
                  e.value = nt.filter(o.value.filter ?? (() => !0));
                }));
          }
          ce(() => {
            document
              .querySelectorAll('div[aria-disabled="true"]')
              .forEach((Z) => {
                Z.setAttribute('aria-disabled', 'false');
              });
          });
        }
      );
      function H(I) {
        I.target === I.currentTarget && (m.value = !1);
      }
      K(
        () => m.value,
        (I) => {
          var R;
          I
            ? ce(() => {
                var X;
                (X = document.querySelector('div[command-dialog-mask]')) ==
                  null || X.addEventListener('click', H);
              })
            : (R = document.querySelector('div[command-dialog-mask]')) ==
                null || R.removeEventListener('click', H);
        }
      );
      const W = C(999),
        J = C(0),
        U = P(() => {
          const R = (J.value % Math.ceil(e.value.length / W.value)) * W.value;
          return e.value.slice(R, R + W.value);
        }),
        T = cs(),
        D = xe();
      function ne(I) {
        (m.value = !1), D.path !== I.value && T.go(I.value);
      }
      const { lang: pe } = rt(),
        ae = P(() => o.value.langReload ?? !0);
      return (
        K(
          () => pe.value,
          () => {
            ae.value && window.location.reload();
          }
        ),
        (I, R) => {
          var X;
          return (
            c(),
            p('div', Lu, [
              h(
                'div',
                {
                  class: 'nav-search-btn-wait',
                  onClick: R[0] || (R[0] = (Z) => (m.value = !0)),
                },
                [
                  Vu,
                  l.value
                    ? M('', !0)
                    : (c(),
                      p(
                        'span',
                        Iu,
                        F(
                          ((X = o.value) == null ? void 0 : X.btnPlaceholder) ||
                            'Search'
                        ),
                        1
                      )),
                  l.value
                    ? M('', !0)
                    : (c(), p('span', Ou, F(y.value) + ' K ', 1)),
                ]
              ),
              w(
                u(Le).Dialog,
                { visible: m.value, theme: 'algolia' },
                us(
                  {
                    header: k(() => {
                      var Z;
                      return [
                        w(
                          u(Le).Input,
                          {
                            value: b.value,
                            'onUpdate:value':
                              R[1] || (R[1] = (Ce) => (b.value = Ce)),
                            placeholder:
                              ((Z = o.value) == null
                                ? void 0
                                : Z.placeholder) || 'Search Docs',
                          },
                          null,
                          8,
                          ['value', 'placeholder']
                        ),
                      ];
                    }),
                    body: k(() => [
                      h('div', Eu, [
                        w(u(Le).List, null, {
                          default: k(() => [
                            e.value.length
                              ? (c(),
                                x(
                                  u(Le).Group,
                                  { key: 1, heading: f.value },
                                  {
                                    default: k(() => [
                                      (c(!0),
                                      p(
                                        q,
                                        null,
                                        ee(
                                          U.value,
                                          (Z) => (
                                            c(),
                                            x(
                                              u(Le).Item,
                                              {
                                                key: Z.route,
                                                'data-value': Z.route,
                                                onSelect: ne,
                                              },
                                              {
                                                default: k(() => [
                                                  h('div', Au, [
                                                    h('div', xu, [
                                                      h(
                                                        'span',
                                                        null,
                                                        F(Z.meta.title),
                                                        1
                                                      ),
                                                      r.value && Z.meta.date
                                                        ? (c(),
                                                          p(
                                                            'span',
                                                            Nu,
                                                            F(
                                                              u(ku)(
                                                                Z.meta.date,
                                                                'yyyy-MM-dd'
                                                              )
                                                            ),
                                                            1
                                                          ))
                                                        : M('', !0),
                                                    ]),
                                                    h(
                                                      'div',
                                                      {
                                                        class: 'des',
                                                        innerHTML:
                                                          Z.meta.description,
                                                      },
                                                      null,
                                                      8,
                                                      Tu
                                                    ),
                                                  ]),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['data-value']
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['heading']
                                ))
                              : (c(),
                                x(
                                  u(Le).Empty,
                                  { key: 0 },
                                  {
                                    default: k(() => {
                                      var Z;
                                      return [
                                        te(
                                          F(
                                            ((Z = o.value) == null
                                              ? void 0
                                              : Z.emptyText) ||
                                              'No results found.'
                                          ),
                                          1
                                        ),
                                      ];
                                    }),
                                    _: 1,
                                  }
                                )),
                          ]),
                          _: 1,
                        }),
                      ]),
                    ]),
                    _: 2,
                  },
                  [
                    e.value.length
                      ? {
                          name: 'footer',
                          fn: k(() => [
                            h('div', Hu, [
                              h('a', Fu, [
                                Bu,
                                w(Cu, { style: { width: '77px' } }),
                              ]),
                            ]),
                            Du,
                          ]),
                          key: '0',
                        }
                      : void 0,
                  ]
                ),
                1032,
                ['visible']
              ),
            ])
          );
        }
      );
    },
  }),
  Ru = L(zu, [['__scopeId', 'data-v-0496792c']]),
  ju = S({
    __name: 'VPNavBarSocialLinks',
    setup(t) {
      const { theme: e } = B();
      return (n, s) =>
        u(e).socialLinks
          ? (c(),
            x(
              Et,
              { key: 0, class: 'VPNavBarSocialLinks', links: u(e).socialLinks },
              null,
              8,
              ['links']
            ))
          : M('', !0);
    },
  }),
  Wu = L(ju, [['__scopeId', 'data-v-c9a4fd1c']]),
  Uu = ['href'],
  Gu = S({
    __name: 'VPNavBarTitle',
    setup(t) {
      const { site: e, theme: n } = B(),
        { hasSidebar: s } = me(),
        { currentLang: a } = Ne();
      return (o, r) => (
        c(),
        p(
          'div',
          { class: j(['VPNavBarTitle', { 'has-sidebar': u(s) }]) },
          [
            h(
              'a',
              { class: 'title', href: u(n).logoLink ?? u(St)(u(a).link) },
              [
                g(o.$slots, 'nav-bar-title-before', {}, void 0, !0),
                u(n).logo
                  ? (c(),
                    x(
                      We,
                      { key: 0, class: 'logo', image: u(n).logo },
                      null,
                      8,
                      ['image']
                    ))
                  : M('', !0),
                u(n).siteTitle
                  ? (c(), p(q, { key: 1 }, [te(F(u(n).siteTitle), 1)], 64))
                  : u(n).siteTitle === void 0
                  ? (c(), p(q, { key: 2 }, [te(F(u(e).title), 1)], 64))
                  : M('', !0),
                g(o.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              Uu
            ),
          ],
          2
        )
      );
    },
  }),
  qu = L(Gu, [['__scopeId', 'data-v-bd80c3a4']]),
  Ku = {},
  Qu = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Zu = h('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  Ju = h(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1
  ),
  Yu = [Zu, Ju];
function Xu(t, e) {
  return c(), p('svg', Qu, Yu);
}
const Qn = L(Ku, [['render', Xu]]),
  ed = { class: 'items' },
  td = { class: 'title' },
  nd = S({
    __name: 'VPNavBarTranslations',
    setup(t) {
      const { theme: e } = B(),
        { localeLinks: n, currentLang: s } = Ne({ correspondingLink: !0 });
      return (a, o) =>
        u(n).length && u(s).label
          ? (c(),
            x(
              Ot,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: Qn,
                label: u(e).langMenuLabel || 'Change language',
              },
              {
                default: k(() => [
                  h('div', ed, [
                    h('p', td, F(u(s).label), 1),
                    (c(!0),
                    p(
                      q,
                      null,
                      ee(
                        u(n),
                        (r) => (
                          c(),
                          x(Je, { key: r.link, item: r }, null, 8, ['item'])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label']
            ))
          : M('', !0);
    },
  }),
  sd = L(nd, [['__scopeId', 'data-v-1225568a']]),
  ad = (t) => (ie('data-v-2e7c29e4'), (t = t()), le(), t),
  od = { class: 'container' },
  rd = { class: 'title' },
  id = { class: 'content' },
  ld = ad(() => h('div', { class: 'curtain' }, null, -1)),
  cd = { class: 'content-body' },
  ud = S({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(t) {
      const { y: e } = vn(),
        { hasSidebar: n } = me(),
        { frontmatter: s } = B(),
        a = C({});
      return (
        pn(() => {
          a.value = {
            'has-sidebar': n.value,
            top: s.value.layout === 'home' && e.value === 0,
          };
        }),
        (o, r) => (
          c(),
          p(
            'div',
            { class: j(['VPNavBar', a.value]) },
            [
              h('div', od, [
                h('div', rd, [
                  w(qu, null, {
                    'nav-bar-title-before': k(() => [
                      g(o.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': k(() => [
                      g(o.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                ]),
                h('div', id, [
                  ld,
                  h('div', cd, [
                    g(o.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    w(Ru, { class: 'search' }),
                    w(Ri, { class: 'menu' }),
                    w(sd, { class: 'translations' }),
                    w(xr, { class: 'appearance' }),
                    w(Wu, { class: 'social-links' }),
                    w(Ci, { class: 'extra' }),
                    g(o.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    w(
                      Ai,
                      {
                        class: 'hamburger',
                        active: o.isScreenOpen,
                        onClick:
                          r[0] || (r[0] = (i) => o.$emit('toggle-screen')),
                      },
                      null,
                      8,
                      ['active']
                    ),
                  ]),
                ]),
              ]),
            ],
            2
          )
        )
      );
    },
  }),
  dd = L(ud, [['__scopeId', 'data-v-2e7c29e4']]),
  hd = { key: 0, class: 'VPNavScreenAppearance' },
  pd = { class: 'text' },
  fd = S({
    __name: 'VPNavScreenAppearance',
    setup(t) {
      const { site: e, theme: n } = B();
      return (s, a) =>
        u(e).appearance && u(e).appearance !== 'force-dark'
          ? (c(),
            p('div', hd, [
              h('p', pd, F(u(n).darkModeSwitchLabel || 'Appearance'), 1),
              w(Vt),
            ]))
          : M('', !0);
    },
  }),
  vd = L(fd, [['__scopeId', 'data-v-af6c3eea']]),
  md = S({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(t) {
      const e = Ze('close-screen');
      return (n, s) => (
        c(),
        x(
          he,
          {
            class: 'VPNavScreenMenuLink',
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: u(e),
          },
          { default: k(() => [te(F(n.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick']
        )
      );
    },
  }),
  _d = L(md, [['__scopeId', 'data-v-5a38707b']]),
  gd = {},
  yd = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  bd = h(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1
  ),
  kd = [bd];
function $d(t, e) {
  return c(), p('svg', yd, kd);
}
const wd = L(gd, [['render', $d]]),
  Sd = S({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(t) {
      const e = Ze('close-screen');
      return (n, s) => (
        c(),
        x(
          he,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: u(e),
          },
          { default: k(() => [te(F(n.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick']
        )
      );
    },
  }),
  Zn = L(Sd, [['__scopeId', 'data-v-beb89698']]),
  Md = { class: 'VPNavScreenMenuGroupSection' },
  Pd = { key: 0, class: 'title' },
  Cd = S({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(t) {
      return (e, n) => (
        c(),
        p('div', Md, [
          e.text ? (c(), p('p', Pd, F(e.text), 1)) : M('', !0),
          (c(!0),
          p(
            q,
            null,
            ee(
              e.items,
              (s) => (c(), x(Zn, { key: s.text, item: s }, null, 8, ['item']))
            ),
            128
          )),
        ])
      );
    },
  }),
  Ld = L(Cd, [['__scopeId', 'data-v-6ca5e3d6']]),
  Vd = ['aria-controls', 'aria-expanded'],
  Id = ['innerHTML'],
  Od = ['id'],
  Ed = { key: 1, class: 'group' },
  Ad = S({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(t) {
      const e = t,
        n = C(!1),
        s = P(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`);
      function a() {
        n.value = !n.value;
      }
      return (o, r) => (
        c(),
        p(
          'div',
          { class: j(['VPNavScreenMenuGroup', { open: n.value }]) },
          [
            h(
              'button',
              {
                class: 'button',
                'aria-controls': s.value,
                'aria-expanded': n.value,
                onClick: a,
              },
              [
                h(
                  'span',
                  { class: 'button-text', innerHTML: o.text },
                  null,
                  8,
                  Id
                ),
                w(wd, { class: 'button-icon' }),
              ],
              8,
              Vd
            ),
            h(
              'div',
              { id: s.value, class: 'items' },
              [
                (c(!0),
                p(
                  q,
                  null,
                  ee(
                    o.items,
                    (i) => (
                      c(),
                      p(
                        q,
                        { key: i.text },
                        [
                          'link' in i
                            ? (c(),
                              p('div', { key: i.text, class: 'item' }, [
                                w(Zn, { item: i }, null, 8, ['item']),
                              ]))
                            : (c(),
                              p('div', Ed, [
                                w(
                                  Ld,
                                  { text: i.text, items: i.items },
                                  null,
                                  8,
                                  ['text', 'items']
                                ),
                              ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              Od
            ),
          ],
          2
        )
      );
    },
  }),
  xd = L(Ad, [['__scopeId', 'data-v-0df77a3d']]),
  Nd = { key: 0, class: 'VPNavScreenMenu' },
  Td = S({
    __name: 'VPNavScreenMenu',
    setup(t) {
      const { theme: e } = B();
      return (n, s) =>
        u(e).nav
          ? (c(),
            p('nav', Nd, [
              (c(!0),
              p(
                q,
                null,
                ee(
                  u(e).nav,
                  (a) => (
                    c(),
                    p(
                      q,
                      { key: a.text },
                      [
                        'link' in a
                          ? (c(), x(_d, { key: 0, item: a }, null, 8, ['item']))
                          : (c(),
                            x(
                              xd,
                              { key: 1, text: a.text || '', items: a.items },
                              null,
                              8,
                              ['text', 'items']
                            )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : M('', !0);
    },
  }),
  Hd = S({
    __name: 'VPNavScreenSocialLinks',
    setup(t) {
      const { theme: e } = B();
      return (n, s) =>
        u(e).socialLinks
          ? (c(),
            x(
              Et,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: u(e).socialLinks,
              },
              null,
              8,
              ['links']
            ))
          : M('', !0);
    },
  }),
  Fd = { class: 'list' },
  Bd = S({
    __name: 'VPNavScreenTranslations',
    setup(t) {
      const { localeLinks: e, currentLang: n } = Ne({ correspondingLink: !0 }),
        s = C(!1);
      function a() {
        s.value = !s.value;
      }
      return (o, r) =>
        u(e).length && u(n).label
          ? (c(),
            p(
              'div',
              {
                key: 0,
                class: j(['VPNavScreenTranslations', { open: s.value }]),
              },
              [
                h('button', { class: 'title', onClick: a }, [
                  w(Qn, { class: 'icon lang' }),
                  te(' ' + F(u(n).label) + ' ', 1),
                  w(Pn, { class: 'icon chevron' }),
                ]),
                h('ul', Fd, [
                  (c(!0),
                  p(
                    q,
                    null,
                    ee(
                      u(e),
                      (i) => (
                        c(),
                        p('li', { key: i.link, class: 'item' }, [
                          w(
                            he,
                            { class: 'link', href: i.link },
                            { default: k(() => [te(F(i.text), 1)]), _: 2 },
                            1032,
                            ['href']
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : M('', !0);
    },
  }),
  Dd = L(Bd, [['__scopeId', 'data-v-9c48f958']]),
  zd = { class: 'container' },
  Rd = S({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(t) {
      const e = C(null),
        n = kn(Ve ? document.body : null);
      return (s, a) => (
        c(),
        x(
          qe,
          {
            name: 'fade',
            onEnter: a[0] || (a[0] = (o) => (n.value = !0)),
            onAfterLeave: a[1] || (a[1] = (o) => (n.value = !1)),
          },
          {
            default: k(() => [
              s.open
                ? (c(),
                  p(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: e,
                      id: 'VPNavScreen',
                    },
                    [
                      h('div', zd, [
                        g(
                          s.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0
                        ),
                        w(Td, { class: 'menu' }),
                        w(Dd, { class: 'translations' }),
                        w(vd, { class: 'appearance' }),
                        w(Hd, { class: 'social-links' }),
                        g(s.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512
                  ))
                : M('', !0),
            ]),
            _: 3,
          }
        )
      );
    },
  }),
  jd = L(Rd, [['__scopeId', 'data-v-a707c9df']]),
  Wd = { key: 0, class: 'VPNav' },
  Ud = S({
    __name: 'VPNav',
    setup(t) {
      const { isScreenOpen: e, closeScreen: n, toggleScreen: s } = hr(),
        { frontmatter: a } = B(),
        o = P(() => a.value.navbar !== !1);
      return (
        $t('close-screen', n),
        ge(() => {
          Ve && document.documentElement.classList.toggle('hide-nav', !o.value);
        }),
        (r, i) =>
          o.value
            ? (c(),
              p('header', Wd, [
                w(
                  dd,
                  { 'is-screen-open': u(e), onToggleScreen: u(s) },
                  {
                    'nav-bar-title-before': k(() => [
                      g(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': k(() => [
                      g(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': k(() => [
                      g(r.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': k(() => [
                      g(r.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen']
                ),
                w(
                  jd,
                  { open: u(e) },
                  {
                    'nav-screen-content-before': k(() => [
                      g(r.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': k(() => [
                      g(r.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open']
                ),
              ]))
            : M('', !0)
      );
    },
  }),
  Gd = L(Ud, [['__scopeId', 'data-v-5f4917e6']]),
  qd = (t) => (ie('data-v-49ff784e'), (t = t()), le(), t),
  Kd = ['role', 'tabindex'],
  Qd = qd(() => h('div', { class: 'indicator' }, null, -1)),
  Zd = { key: 1, class: 'items' },
  Jd = S({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(t) {
      const e = t,
        {
          collapsed: n,
          collapsible: s,
          isLink: a,
          isActiveLink: o,
          hasActiveLink: r,
          hasChildren: i,
          toggle: l,
        } = Ns(P(() => e.item)),
        d = P(() => (i.value ? 'section' : 'div')),
        f = P(() => (a.value ? 'a' : 'div')),
        y = P(() =>
          i.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p'
        ),
        m = P(() => (a.value ? void 0 : 'button')),
        b = P(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { 'is-link': a.value },
          { 'is-active': o.value },
          { 'has-active': r.value },
        ]);
      function $(_) {
        ('key' in _ && _.key !== 'Enter') || (!e.item.link && l());
      }
      function v() {
        e.item.link && l();
      }
      return (_, E) => {
        const V = Pe('VPSidebarItem', !0);
        return (
          c(),
          x(
            $e(d.value),
            { class: j(['VPSidebarItem', b.value]) },
            {
              default: k(() => [
                _.item.text
                  ? (c(),
                    p(
                      'div',
                      De(
                        { key: 0, class: 'item', role: m.value },
                        ds(_.item.items ? { click: $, keydown: $ } : {}, !0),
                        { tabindex: _.item.items && 0 }
                      ),
                      [
                        Qd,
                        _.item.link
                          ? (c(),
                            x(
                              he,
                              {
                                key: 0,
                                tag: f.value,
                                class: 'link',
                                href: _.item.link,
                                rel: _.item.rel,
                                target: _.item.target,
                              },
                              {
                                default: k(() => [
                                  (c(),
                                  x(
                                    $e(y.value),
                                    { class: 'text', innerHTML: _.item.text },
                                    null,
                                    8,
                                    ['innerHTML']
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target']
                            ))
                          : (c(),
                            x(
                              $e(y.value),
                              { key: 1, class: 'text', innerHTML: _.item.text },
                              null,
                              8,
                              ['innerHTML']
                            )),
                        _.item.collapsed != null
                          ? (c(),
                            p(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: v,
                                onKeydown: hs(v, ['enter']),
                                tabindex: '0',
                              },
                              [w(Lt, { class: 'caret-icon' })],
                              32
                            ))
                          : M('', !0),
                      ],
                      16,
                      Kd
                    ))
                  : M('', !0),
                _.item.items && _.item.items.length
                  ? (c(),
                    p('div', Zd, [
                      _.depth < 5
                        ? (c(!0),
                          p(
                            q,
                            { key: 0 },
                            ee(
                              _.item.items,
                              (A) => (
                                c(),
                                x(
                                  V,
                                  { key: A.text, item: A, depth: _.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth']
                                )
                              )
                            ),
                            128
                          ))
                        : M('', !0),
                    ]))
                  : M('', !0),
              ]),
              _: 1,
            },
            8,
            ['class']
          )
        );
      };
    },
  }),
  Yd = L(Jd, [['__scopeId', 'data-v-49ff784e']]),
  Jn = (t) => (ie('data-v-de3fd5a0'), (t = t()), le(), t),
  Xd = Jn(() => h('div', { class: 'curtain' }, null, -1)),
  e1 = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  t1 = Jn(() =>
    h(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1
    )
  ),
  n1 = S({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(t) {
      const { sidebarGroups: e, hasSidebar: n } = me(),
        s = t,
        a = C(null),
        o = kn(Ve ? document.body : null);
      return (
        K(
          [s, a],
          () => {
            var r;
            s.open
              ? ((o.value = !0), (r = a.value) == null || r.focus())
              : (o.value = !1);
          },
          { immediate: !0, flush: 'post' }
        ),
        (r, i) =>
          u(n)
            ? (c(),
              p(
                'aside',
                {
                  key: 0,
                  class: j(['VPSidebar', { open: r.open }]),
                  ref_key: 'navEl',
                  ref: a,
                  onClick: i[0] || (i[0] = ps(() => {}, ['stop'])),
                },
                [
                  Xd,
                  h('nav', e1, [
                    t1,
                    g(r.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (c(!0),
                    p(
                      q,
                      null,
                      ee(
                        u(e),
                        (l) => (
                          c(),
                          p('div', { key: l.text, class: 'group' }, [
                            w(Yd, { item: l, depth: 0 }, null, 8, ['item']),
                          ])
                        )
                      ),
                      128
                    )),
                    g(r.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2
              ))
            : M('', !0)
      );
    },
  }),
  s1 = L(n1, [['__scopeId', 'data-v-de3fd5a0']]),
  a1 = S({
    __name: 'VPSkipLink',
    setup(t) {
      const e = xe(),
        n = C();
      K(
        () => e.path,
        () => n.value.focus()
      );
      function s({ target: a }) {
        const o = document.getElementById(decodeURIComponent(a.hash).slice(1));
        if (o) {
          const r = () => {
            o.removeAttribute('tabindex'), o.removeEventListener('blur', r);
          };
          o.setAttribute('tabindex', '-1'),
            o.addEventListener('blur', r),
            o.focus(),
            window.scrollTo(0, 0);
        }
      }
      return (a, o) => (
        c(),
        p(
          q,
          null,
          [
            h(
              'span',
              { ref_key: 'backToTop', ref: n, tabindex: '-1' },
              null,
              512
            ),
            h(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: s,
              },
              ' Skip to content '
            ),
          ],
          64
        )
      );
    },
  }),
  o1 = L(a1, [['__scopeId', 'data-v-59117760']]),
  r1 = S({
    __name: 'Layout',
    setup(t) {
      const { isOpen: e, open: n, close: s } = me(),
        a = xe();
      K(() => a.path, s), xs(e, s);
      const { frontmatter: o } = B(),
        r = fs(),
        i = P(() => !!r['home-hero-image']);
      return (
        $t('hero-image-slot-exists', i),
        (l, d) => {
          const f = Pe('Content');
          return u(o).layout !== !1
            ? (c(),
              p(
                'div',
                { key: 0, class: j(['Layout', u(o).pageClass]) },
                [
                  g(l.$slots, 'layout-top', {}, void 0, !0),
                  w(o1),
                  w(
                    ys,
                    { class: 'backdrop', show: u(e), onClick: u(s) },
                    null,
                    8,
                    ['show', 'onClick']
                  ),
                  w(Gd, null, {
                    'nav-bar-title-before': k(() => [
                      g(l.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': k(() => [
                      g(l.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': k(() => [
                      g(l.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': k(() => [
                      g(l.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': k(() => [
                      g(l.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': k(() => [
                      g(l.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  w(dr, { open: u(e), onOpenMenu: u(n) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  w(
                    s1,
                    { open: u(e) },
                    {
                      'sidebar-nav-before': k(() => [
                        g(l.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': k(() => [
                        g(l.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open']
                  ),
                  w(
                    jo,
                    { 'data-pagefind-body': '' },
                    {
                      'page-top': k(() => [
                        g(l.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': k(() => [
                        g(l.$slots, 'page-bottom', {}, void 0, !0),
                      ]),
                      'not-found': k(() => [
                        g(l.$slots, 'not-found', {}, void 0, !0),
                      ]),
                      'home-hero-before': k(() => [
                        g(l.$slots, 'home-hero-before', {}, void 0, !0),
                      ]),
                      'home-hero-info': k(() => [
                        g(l.$slots, 'home-hero-info', {}, void 0, !0),
                      ]),
                      'home-hero-image': k(() => [
                        g(l.$slots, 'home-hero-image', {}, void 0, !0),
                      ]),
                      'home-hero-after': k(() => [
                        g(l.$slots, 'home-hero-after', {}, void 0, !0),
                      ]),
                      'home-features-before': k(() => [
                        g(l.$slots, 'home-features-before', {}, void 0, !0),
                      ]),
                      'home-features-after': k(() => [
                        g(l.$slots, 'home-features-after', {}, void 0, !0),
                      ]),
                      'doc-footer-before': k(() => [
                        g(l.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      'doc-before': k(() => [
                        g(l.$slots, 'doc-before', {}, void 0, !0),
                      ]),
                      'doc-after': k(() => [
                        g(l.$slots, 'doc-after', {}, void 0, !0),
                      ]),
                      'doc-top': k(() => [
                        g(l.$slots, 'doc-top', {}, void 0, !0),
                      ]),
                      'doc-bottom': k(() => [
                        g(l.$slots, 'doc-bottom', {}, void 0, !0),
                      ]),
                      'aside-top': k(() => [
                        g(l.$slots, 'aside-top', {}, void 0, !0),
                      ]),
                      'aside-bottom': k(() => [
                        g(l.$slots, 'aside-bottom', {}, void 0, !0),
                      ]),
                      'aside-outline-before': k(() => [
                        g(l.$slots, 'aside-outline-before', {}, void 0, !0),
                      ]),
                      'aside-outline-after': k(() => [
                        g(l.$slots, 'aside-outline-after', {}, void 0, !0),
                      ]),
                      'aside-ads-before': k(() => [
                        g(l.$slots, 'aside-ads-before', {}, void 0, !0),
                      ]),
                      'aside-ads-after': k(() => [
                        g(l.$slots, 'aside-ads-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }
                  ),
                  w(Ko),
                  g(l.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2
              ))
            : (c(), x(f, { key: 1 }));
        }
      );
    },
  }),
  i1 = L(r1, [['__scopeId', 'data-v-1fb43570']]),
  _1 = {
    Layout: i1,
    enhanceApp: ({ app: t }) => {
      t.component('Badge', ms);
    },
  };
export {
  Zs as V,
  Y as a,
  yu as b,
  f1 as c,
  du as d,
  de as e,
  c1 as f,
  Cc as g,
  u1 as h,
  xt as i,
  p1 as j,
  h1 as k,
  m1 as l,
  v1 as m,
  _1 as n,
  d1 as o,
  Xe as t,
  eu as u,
};
