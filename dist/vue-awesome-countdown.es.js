import { openBlock as O, createBlock as j, resolveDynamicComponent as N, mergeProps as T, toHandlers as U, withCtx as B, renderSlot as m, normalizeProps as r, guardReactiveProps as y, createCommentVNode as g, defineComponent as W, ref as v, computed as q, watch as F, onMounted as G, onUnmounted as J } from "vue";
const K = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, i] of t)
    o[n] = i;
  return o;
}, L = {
  name: "vue-awesome-countdown",
  props: {
    startTime: {
      type: [String, Number, Date],
      default: null,
      validator: function(e) {
        return new Date(e).toString() !== "Invalid Date";
      }
    },
    endTime: {
      type: [String, Number, Date],
      default: null,
      validator: function(e) {
        return new Date(e).toString() !== "Invalid Date";
      }
    },
    leftTime: {
      type: Number,
      default: 0
    },
    autoStart: {
      type: Boolean,
      default: !0
    },
    speed: {
      type: Number,
      default: 1e3,
      validator: function(e) {
        return e >= 0;
      }
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  computed: {
    thousandSpeed() {
      return this.speed > 0 && this.speed % 1e3 === 0;
    }
  },
  data: function() {
    return {
      state: "beforeStart",
      // beforeStart, stopped, process, finished
      attrs: {},
      actualStartTime: null,
      actualEndTime: null,
      timeObj: {},
      countdownTimer: null,
      runTimes: 0,
      usedTime: 0,
      remainingTime: 0
    };
  },
  watch: {
    speed(e, t) {
      const o = this;
      if (e < 0 && (e = 0), e !== t) {
        clearTimeout(o.countdownTimer);
        const n = Date.now(), i = Math.floor((n - o.actualStartTime) / e), a = n % e;
        o.runTimes = i, o.$nextTick(() => {
          o.countdownTimer = setTimeout(o.doCountdown, a);
        });
      }
    }
  },
  created() {
    const e = this, t = e.startTime && new Date(e.startTime).getTime() || 0, o = t && t - Date.now() || 0;
    e.autoStart && (e.state = "preheat", setTimeout(() => {
      e.startCountdown(!0);
    }, o));
  },
  beforeDestroy() {
    this.countdownTimer && clearTimeout(this.countdownTimer);
  },
  methods: {
    startCountdown(e) {
      const t = this;
      t.state !== "beforeStart" && t.state !== "stopped" && t.state !== "paused" && !e || (e && Object.assign(t.$data, t.$options.data.call(t)), t.state === "stopped" && (t.remainingTime = t.actualEndTime - Date.now()), t.actualEndTime || (t.actualEndTime = t.endTime || Date.now() + (t.remainingTime || t.leftTime)), t.state === "paused" && (t.actualEndTime = Date.now() + t.remainingTime), t.$emit("start", t), t.state = "process", t.doCountdown());
    },
    stopCountdown() {
      const e = this;
      e.state === "process" && (clearTimeout(e.countdownTimer), e.$emit("stop", e), e.state = "stopped");
    },
    pauseCountdown() {
      const e = this;
      e.state === "process" && (clearTimeout(e.countdownTimer), e.remainingTime = e.actualEndTime - Date.now(), e.$emit("paused", e), e.state = "paused");
    },
    switchCountdown() {
      const e = this;
      if (e.state === "stopped" || e.state === "beforeStart")
        return e.startCountdown();
      if (e.state === "process")
        return e.stopCountdown();
    },
    finishCountdown() {
      const e = this;
      e.state = "finished", e.timeObj = {}, e.usedTime = Date.now() - e.actualStartTime, e.$emit("finish", e);
    },
    doCountdown() {
      const e = this;
      if (e.state !== "process")
        return;
      e.actualStartTime || (e.actualStartTime = Date.now());
      let t = new Date(e.actualEndTime).getTime() - Date.now();
      if (t > 0) {
        const n = {};
        let i = t / 1e3, a = t % 1e3;
        e.thousandSpeed && a > 990 && (i = Math.ceil(i), a = 0);
        const f = {
          d: i / 60 / 60 / 24,
          h: i / 60 / 60 % 24,
          m: i / 60 % 60,
          s: i % 60,
          ms: a
        }, c = {
          d: parseInt(f.d, 10).toString(),
          h: parseInt(f.h, 10).toString().padStart(2, "0"),
          m: parseInt(f.m, 10).toString().padStart(2, "0"),
          s: parseInt(f.s, 10).toString().padStart(2, "0"),
          ms: f.ms.toString().padStart(3, "0")
        }, d = {
          d: parseInt(Math.ceil(i / 60 / 60 / 24), 10),
          h: parseInt(Math.ceil(i / 60 / 60), 10),
          m: parseInt(Math.ceil(i / 60), 10),
          s: parseInt(Math.ceil(i), 10)
        };
        n.endTime = e.actualEndTime, n.speed = e.speed, e.usedTime = Date.now() - e.actualStartTime, n.leftTime = t, e.remainingTime = t, e.timeObj = Object.assign({}, n, c, {
          org: f,
          ceil: d
        }), e.$emit("process", e);
      } else {
        e.finishCountdown();
        return;
      }
      let o = e.speed + (e.actualStartTime + e.runTimes++ * e.speed - Date.now());
      o < 0 && (o = o + e.speed), t < e.speed && (o = t), e.countdownTimer = setTimeout(e.doCountdown, o);
    }
  }
};
function Q(e, t, o, n, i, a) {
  return O(), j(N(o.tag), T(e.attrs, U(e.$listeners)), {
    default: B(() => [
      m(e.$slots, "prev", r(y(this._self))),
      e.state === "beforeStart" ? m(e.$slots, "before", r(T({ key: 0 }, this._self))) : g("", !0),
      e.state === "preheat" ? m(e.$slots, "preheat", r(T({ key: 1 }, this._self))) : g("", !0),
      e.state === "process" || e.state === "stopped" || e.state === "paused" ? m(e.$slots, "process", r(T({ key: 2 }, this._self))) : g("", !0),
      e.state === "finished" ? m(e.$slots, "finish", r(T({ key: 3 }, this._self))) : g("", !0),
      m(e.$slots, "default", r(y(this._self)))
    ]),
    _: 3
  }, 16);
}
const X = /* @__PURE__ */ K(L, [["render", Q]]), Y = /* @__PURE__ */ W({
  __name: "vue-awesome-countdown-v3",
  props: {
    startTime: { default: void 0 },
    endTime: { default: void 0 },
    leftTime: { default: 0 },
    autoStart: { type: Boolean, default: !0 },
    speed: { default: 1e3 },
    tag: { default: "span" }
  },
  emits: ["start", "stop", "paused", "finish", "process"],
  setup(e, { expose: t, emit: o }) {
    const n = e, i = o, a = v("beforeStart"), f = v({}), c = v(null), d = v(null), D = v({
      endTime: null,
      speed: n.speed,
      leftTime: 0,
      usedTime: 0,
      remainingTime: 0,
      d: "0",
      h: "00",
      m: "00",
      s: "00",
      ms: "000",
      org: {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      },
      ceil: {
        d: 0,
        h: 0,
        m: 0,
        s: 0
      }
    }), S = v(null), M = v(0), $ = v(0), w = v(0), I = q(() => n.speed > 0 && n.speed % 1e3 === 0);
    F(() => n.speed, (s, p) => {
      if (s < 0 && (s = 0), s !== p) {
        C();
        const u = Date.now(), b = Math.floor((u - (c.value || 0)) / s), h = u % s;
        M.value = b, S.value = setTimeout(E, h);
      }
    });
    const C = () => {
      S.value && (clearTimeout(S.value), S.value = null);
    };
    G(() => {
      if (n.autoStart)
        if (a.value = "preheat", n.startTime) {
          const p = new Date(n.startTime).getTime() - Date.now();
          S.value = setTimeout(() => {
            k(!0);
          }, p);
        } else
          S.value = setTimeout(() => {
            k(!0);
          }, 0);
    }), J(() => {
      C();
    });
    const k = (s) => {
      a.value !== "beforeStart" && a.value !== "stopped" && a.value !== "paused" && !s || (C(), s && (a.value = "beforeStart", c.value = null, d.value = null, M.value = 0, $.value = 0, w.value = 0, D.value = {
        ...D.value,
        leftTime: 0,
        remainingTime: 0,
        d: "0",
        h: "00",
        m: "00",
        s: "00",
        ms: "000"
      }), a.value === "stopped" && (w.value = (d.value || 0) - Date.now()), d.value || (d.value = n.endTime ? new Date(n.endTime).getTime() : Date.now() + (w.value || n.leftTime)), a.value === "paused" && (d.value = Date.now() + w.value), i("start", l), a.value = "process", E());
    }, V = () => {
      a.value === "process" && (C(), i("stop", l), a.value = "stopped");
    }, _ = () => {
      a.value === "process" && (C(), w.value = (d.value || 0) - Date.now(), i("paused", l), a.value = "paused");
    }, z = () => {
      if (a.value === "stopped" || a.value === "beforeStart")
        return k();
      if (a.value === "process")
        return V();
    }, A = () => {
      C(), a.value = "finished", D.value = {
        ...D.value,
        leftTime: 0,
        remainingTime: 0,
        d: "0",
        h: "00",
        m: "00",
        s: "00",
        ms: "000"
      }, $.value = Date.now() - (c.value || 0), i("finish", l);
    }, E = () => {
      if (a.value !== "process")
        return;
      c.value || (c.value = Date.now());
      let s = (d.value || 0) - Date.now();
      if (s > 0) {
        let u = s / 1e3, b = s % 1e3;
        I.value && b > 990 && (u = Math.ceil(u), b = 0);
        const h = {
          d: u / 60 / 60 / 24,
          h: u / 60 / 60 % 24,
          m: u / 60 % 60,
          s: u % 60,
          ms: b
        }, H = {
          d: Math.floor(h.d).toString(),
          h: Math.floor(h.h).toString().padStart(2, "0"),
          m: Math.floor(h.m).toString().padStart(2, "0"),
          s: Math.floor(h.s).toString().padStart(2, "0"),
          ms: h.ms.toString().padStart(3, "0")
        }, R = {
          d: Math.ceil(u / 60 / 60 / 24),
          h: Math.ceil(u / 60 / 60),
          m: Math.ceil(u / 60),
          s: Math.ceil(u)
        };
        $.value = Date.now() - (c.value || 0), w.value = s, D.value = {
          endTime: d.value,
          speed: n.speed,
          leftTime: s,
          usedTime: $.value,
          remainingTime: w.value,
          ...H,
          org: h,
          ceil: R
        }, i("process", l);
      } else {
        A();
        return;
      }
      let p = n.speed + ((c.value || 0) + M.value++ * n.speed - Date.now());
      p < 0 && (p = p + n.speed), s < n.speed && (p = s), S.value = setTimeout(E, p);
    }, l = {
      get state() {
        return a.value;
      },
      get attrs() {
        return f.value;
      },
      get actualStartTime() {
        return c.value;
      },
      get actualEndTime() {
        return d.value;
      },
      get timeObj() {
        return D.value;
      },
      get runTimes() {
        return M.value;
      },
      get usedTime() {
        return $.value;
      },
      get remainingTime() {
        return w.value;
      },
      get thousandSpeed() {
        return I.value;
      },
      startCountdown: k,
      stopCountdown: V,
      pauseCountdown: _,
      switchCountdown: z
    };
    return t(l), (s, p) => (O(), j(N(e.tag), r(y(f.value)), {
      default: B(() => [
        m(s.$slots, "prev", r(y(l))),
        a.value === "beforeStart" ? m(s.$slots, "before", r(T({ key: 0 }, l))) : g("", !0),
        a.value === "preheat" ? m(s.$slots, "preheat", r(T({ key: 1 }, l))) : g("", !0),
        a.value === "process" || a.value === "stopped" || a.value === "paused" ? m(s.$slots, "process", r(T({ key: 2 }, l))) : g("", !0),
        a.value === "finished" ? m(s.$slots, "finish", r(T({ key: 3 }, l))) : g("", !0),
        m(s.$slots, "default", r(y(l)))
      ]),
      _: 3
    }, 16));
  }
}), P = () => typeof window < "u" && window.Vue && window.Vue.version && window.Vue.version.startsWith("2.") ? X : Y, Z = (e, t) => {
  const o = t || "vac", n = P();
  n && (e.component(o, n), e.component("countdown", n));
}, x = {
  install: Z
};
typeof window < "u" && window.Vue && window.Vue.use(x);
const te = P();
export {
  te as VueAwesomeCountdown,
  x as default
};
