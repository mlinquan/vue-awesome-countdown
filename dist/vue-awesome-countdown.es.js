var c = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var s = c((u, f) => {
  (function(n, e) {
    typeof u == "object" && typeof f < "u" ? e(u) : typeof define == "function" && define.amd ? define(["exports"], e) : (n = n || self, e(n.VueAwesomeCountdown = {}));
  })(globalThis, function(n) {
    let e = null;
    const t = {
      install: (o, i) => {
        const d = i || "vac";
        typeof o.use == "function" && typeof o.component == "function" ? e = require("./vue-awesome-countdown-v3.vue").default : typeof o.component == "function" && (e = require("./vue-awesome-countdown.vue").default), e && (o.component(d, e), o.component("countdown", e));
      }
    };
    typeof window < "u" && window.Vue && window.Vue.use(t), n.default = t, n.VueAwesomeCountdown = t, Object.defineProperty(n, "__esModule", { value: !0 });
  });
});
export default s();
