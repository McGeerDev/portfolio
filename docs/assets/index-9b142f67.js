(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
	new MutationObserver((r) => {
		for (const c of r)
			if (c.type === 'childList')
				for (const s of c.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && i(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(r) {
		const c = {};
		return (
			r.integrity && (c.integrity = r.integrity),
			r.referrerPolicy && (c.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === 'use-credentials'
				? (c.credentials = 'include')
				: r.crossOrigin === 'anonymous'
					? (c.credentials = 'omit')
					: (c.credentials = 'same-origin'),
			c
		);
	}
	function i(r) {
		if (r.ep) return;
		r.ep = !0;
		const c = n(r);
		fetch(r.href, c);
	}
})();
function a() {}
function L(e) {
	return e();
}
function O() {
	return Object.create(null);
}
function p(e) {
	e.forEach(L);
}
function N(e) {
	return typeof e == 'function';
}
function S(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
function A(e) {
	return Object.keys(e).length === 0;
}
function I(e, t, n) {
	e.insertBefore(t, n || null);
}
function P(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function B(e) {
	return document.createElement(e);
}
function C(e) {
	return Array.from(e.childNodes);
}
let $;
function d(e) {
	$ = e;
}
const l = [],
	E = [],
	m = [],
	k = [],
	H = Promise.resolve();
let g = !1;
function q() {
	g || ((g = !0), H.then(j));
}
function y(e) {
	m.push(e);
}
const _ = new Set();
let f = 0;
function j() {
	if (f !== 0) return;
	const e = $;
	do {
		try {
			for (; f < l.length; ) {
				const t = l[f];
				(f++, d(t), D(t.$$));
			}
		} catch (t) {
			throw ((l.length = 0), (f = 0), t);
		}
		for (d(null), l.length = 0, f = 0; E.length; ) E.pop()();
		for (let t = 0; t < m.length; t += 1) {
			const n = m[t];
			_.has(n) || (_.add(n), n());
		}
		m.length = 0;
	} while (l.length);
	for (; k.length; ) k.pop()();
	((g = !1), _.clear(), d(e));
}
function D(e) {
	if (e.fragment !== null) {
		(e.update(), p(e.before_update));
		const t = e.dirty;
		((e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(y));
	}
}
const F = new Set();
function G(e, t) {
	e && e.i && (F.delete(e), e.i(t));
}
function K(e, t, n, i) {
	const { fragment: r, after_update: c } = e.$$;
	(r && r.m(t, n),
		i ||
			y(() => {
				const s = e.$$.on_mount.map(L).filter(N);
				(e.$$.on_destroy ? e.$$.on_destroy.push(...s) : p(s), (e.$$.on_mount = []));
			}),
		c.forEach(y));
}
function T(e, t) {
	const n = e.$$;
	n.fragment !== null &&
		(p(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function z(e, t) {
	(e.$$.dirty[0] === -1 && (l.push(e), q(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31));
}
function J(e, t, n, i, r, c, s, M = [-1]) {
	const h = $;
	d(e);
	const o = (e.$$ = {
		fragment: null,
		ctx: [],
		props: c,
		update: a,
		not_equal: r,
		bound: O(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (h ? h.$$.context : [])),
		callbacks: O(),
		dirty: M,
		skip_bound: !1,
		root: t.target || h.$$.root
	});
	s && s(o.root);
	let b = !1;
	if (
		((o.ctx = n
			? n(e, t.props || {}, (u, x, ...w) => {
					const v = w.length ? w[0] : x;
					return (
						o.ctx &&
							r(o.ctx[u], (o.ctx[u] = v)) &&
							(!o.skip_bound && o.bound[u] && o.bound[u](v), b && z(e, u)),
						x
					);
				})
			: []),
		o.update(),
		(b = !0),
		p(o.before_update),
		(o.fragment = i ? i(o.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const u = C(t.target);
			(o.fragment && o.fragment.l(u), u.forEach(P));
		} else o.fragment && o.fragment.c();
		(t.intro && G(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), j());
	}
	d(h);
}
class Q {
	$destroy() {
		(T(this, 1), (this.$destroy = a));
	}
	$on(t, n) {
		if (!N(n)) return a;
		const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(t) {
		this.$$set && !A(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
function R(e) {
	let t;
	return {
		c() {
			((t = B('main')), (t.innerHTML = '<h1>Hi, I am Devan McGeer</h1>'));
		},
		m(n, i) {
			I(n, t, i);
		},
		p: a,
		i: a,
		o: a,
		d(n) {
			n && P(t);
		}
	};
}
class U extends Q {
	constructor(t) {
		(super(), J(this, t, null, R, S, {}));
	}
}
new U({ target: document.getElementById('app') });
