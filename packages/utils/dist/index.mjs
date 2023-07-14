var L = Object.defineProperty;
var M = (t, e, n) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => (M(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineAsyncComponent as G, ref as p, effectScope as T, getCurrentScope as x, onScopeDispose as k, unref as b, watch as O } from "vue";
function K(t = 10) {
  return (+`${Math.random().toString().substring(3, t)}${Date.now()}`).toString(36);
}
function oe(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function w(t, e = /* @__PURE__ */ new WeakMap()) {
  if (typeof t != "object" || t === null)
    return t;
  if (e.has(t))
    return e.get(t);
  if (Array.isArray(t)) {
    const r = t.map((o) => w(o, e));
    return e.set(t, r), r;
  }
  const n = {};
  return e.set(t, n), Object.keys(t).forEach((r) => {
    n[r] = w(t[r], e);
  }), n;
}
function B(t, e) {
  for (const [n, r] of Object.entries(e)) {
    const o = t == null ? void 0 : t[n];
    o && r && typeof o == "object" && typeof r == "object" ? B(o, r) : t[n] = r;
  }
  Object.keys(t).reverse().forEach((n) => {
    e.hasOwnProperty(n) || (Array.isArray(e) ? t.splice(n, 1) : delete t[n]);
  });
}
function se(t, e, n = /* @__PURE__ */ new WeakMap()) {
  const r = (o) => {
    if (Array.isArray(o))
      return o.map(r);
    if (typeof o == "object" && o !== null) {
      if (n.has(o))
        return "[Circular]";
      n.set(o, !0);
      const s = Object.keys(o).sort(), a = {};
      return s.forEach((i) => {
        a[i] = r(o[i]);
      }), n.delete(o), a;
    } else
      return o;
  };
  return JSON.stringify(r(t)) === JSON.stringify(r(e));
}
const v = (t, e) => G({
  loader: t,
  loadingComponent: e,
  delay: 80
});
function ie(t, e) {
  const n = [{ type: "root", children: t }];
  for (; n.length > 0; ) {
    const r = n.pop(), o = r == null ? void 0 : r.children;
    if (o != null)
      for (let s = 0; s < o.length; s++) {
        if (o[s].id === e)
          return {
            list: (r == null ? void 0 : r.children) ?? [],
            schema: o[s],
            index: s
          };
        n.push(...o);
      }
  }
  throw new Error(`没有查询到id为${e}的节点`);
}
function ue(t, e) {
  const n = [];
  let r = !1;
  function o(s) {
    if (n.push(s), s.id === e && (r = !0), !r && s.children != null && s.children.length > 0)
      for (let a = 0; a < s.children.length && (o(s.children[a]), !r); a++)
        ;
    r || n.pop();
  }
  return t.forEach(o), r || console.error(`没有查询到id为${e}的节点`), n;
}
function ae(t, e) {
  const n = t.split(".");
  let r = e;
  for (let o = 0; o < n.length; o++)
    if (r = r[n[o]], r == null && r !== !1 && r !== 0)
      return;
  return r;
}
function le(t, e, n) {
  const r = e.split(".");
  let o = n;
  r.forEach((s, a) => {
    if (a === r.length - 1) {
      o[s] = t;
      return;
    }
    o = o[s] ?? (o[s] = {});
  });
}
class J {
  constructor() {
    m(this, "components", {});
    m(this, "componentConfigs", {});
    m(this, "schemaGroup", []);
    m(this, "schemaGroupList", p([]));
    m(this, "viewsContainers", {
      activitybars: [],
      rightSidebars: []
    });
    m(this, "publicMethods", {
      test: {
        describe: "测试函数",
        methodName: "test",
        method: () => {
          alert("测试函数弹出");
        }
      }
    });
  }
  /**
   * 添加组件到插件管理器中
   * @param componentName 组件名称
   * @param component 组件
   */
  component(e, n) {
    typeof n == "function" && (n = v(n)), this.components[e] = n;
  }
  /**
   * 注册组件到插件管理器中
   * @param component 组件
   * @param schema 组件结构
   * @param attrSchemas 属性结构
   * @param bindModel 双向绑定value
   */
  registerComponent(e) {
    this.component(
      e.defaultSchema.type,
      e.component
    ), this.componentConfigs[e.defaultSchema.type] = e;
  }
  /**
   * 获取所有插件管理中的所有组件
   * @returns components
   */
  getComponents() {
    return this.components;
  }
  /**
   * 通过type 查询相应的组件
   * @returns components
   */
  getComponent(e) {
    return this.components[e];
  }
  /**
   * 注册活动栏
   */
  registerActivitybar(e) {
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.activitybars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.activitybars[n] = e : this.viewsContainers.activitybars.push(e);
  }
  /**
   * 获取所有activitybars
   * @returns activitybars
   */
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }
  /**
   * 注册右侧栏
   */
  registerRightSidebar(e) {
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.rightSidebars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.rightSidebars[n] = e : this.viewsContainers.rightSidebars.push(e);
  }
  /**
   * 获取所有rightSidebars
   * @returns rightSidebars
   */
  getRightSidebars() {
    return this.viewsContainers.rightSidebars;
  }
  /**
   * 获取所有插件管理中的所有组件配置
   * @returns componentAttrs
   */
  getComponentConfings() {
    return this.componentConfigs;
  }
  /**
   * 通过type获取ComponentConfing
   * @returns
   */
  getComponentConfingByType(e) {
    return this.componentConfigs[e];
  }
  /**
   * 设置分组,这个操作将会覆盖原来的数据
   * @param {*} schemaGroup
   * @returns
   */
  setSchemaGroup(e) {
    this.schemaGroup = e, this.computedSchemaGroupList();
  }
  /**
   * 添加分组
   * @param {*} schemaGroupItem
   * @returns
   */
  addSchemaGroup(e) {
    this.schemaGroup.push(e), this.computedSchemaGroupList();
  }
  /**
   * 计算schemaGroupList
   */
  computedSchemaGroupList() {
    const e = this.schemaGroup.map((n) => {
      const r = n.list.map((o) => {
        var a;
        const s = (a = this.componentConfigs[o]) == null ? void 0 : a.defaultSchema;
        return s == null ? (console.warn(`${o} 组件未注册到pluginManager中`), !1) : {
          ...s,
          id: K()
        };
      }).filter((o) => o);
      return {
        ...n,
        list: r
      };
    });
    this.schemaGroupList.value = e;
  }
  /**
   * 按照分组获取schemaGroupList
   * @returns schemaGroupList
   */
  getSchemaByGroup() {
    return this.schemaGroupList;
  }
  /**
   * 添加公共方法
   * @param method
   */
  addPublicMethod(e) {
    this.publicMethods[e.methodName] = e;
  }
}
const U = new J();
function ce() {
  const t = p({}), e = p({});
  function n(u) {
    return t.value[u];
  }
  function r(u, c) {
    t.value[u] = c;
  }
  function o(u) {
    delete t.value[u];
  }
  function s(u) {
    const c = Object.entries(U.publicMethods).reduce(
      (l, [f, d]) => (l[f] = d.method, l),
      {}
    );
    new Function(`${u}`).bind({
      getComponent: n,
      defineExpose: a,
      ...c
    })();
  }
  function a(u) {
    u != null && (e.value = u);
  }
  function i(u, ...c) {
    u == null || u.forEach((l) => {
      var d, h;
      const f = l.componentId != null && n(l.componentId);
      if (f && typeof f[l.methodName] == "function") {
        f[l.methodName](...c);
        return;
      }
      (h = (d = e.value)[l.methodName]) == null || h.call(d, ...c);
    });
  }
  return {
    componentInstances: t,
    funcs: e,
    getComponentInstance: n,
    addComponentInstance: r,
    removeComponentInstance: o,
    setMethods: s,
    doActions: i
  };
}
function R() {
  const t = p([]), e = p([]), n = p(null);
  let r = 0;
  function o(i, u = "插入组件") {
    const c = Date.now();
    r + 150 > c || (r = c, n.value != null && (t.value.push(n.value), e.value.splice(0, e.value.length)), n.value = {
      type: u,
      record: JSON.stringify(i)
    }, t.value.length > 20 && t.value.unshift());
  }
  function s() {
    if (t.value.length === 0)
      return !1;
    const i = t.value.pop();
    return n.value != null && e.value.push(n.value), n.value = i, JSON.parse(i.record);
  }
  function a() {
    if (e.value.length === 0)
      return !1;
    const i = e.value.pop();
    return n.value != null && t.value.push(n.value), n.value = i, JSON.parse(i.record);
  }
  return {
    recordList: t,
    undoList: e,
    currentRecord: n,
    push: o,
    undo: s,
    redo: a
  };
}
const fe = R();
function E(t) {
  return x() ? (k(t), !0) : !1;
}
function P(t) {
  let e = 0, n, r;
  const o = () => {
    e -= 1, r && e <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...s) => (e += 1, n || (r = T(!0), n = r.run(() => t(...s))), E(o), n);
}
function S(t) {
  return typeof t == "function" ? t() : b(t);
}
const V = typeof window < "u", W = () => {
};
function z(t) {
  var e;
  const n = S(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const I = V ? window : void 0;
function Q(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = I) : [e, n, r, o] = t, !e)
    return W;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((l) => l()), s.length = 0;
  }, i = (l, f, d, h) => (l.addEventListener(f, d, h), () => l.removeEventListener(f, d, h)), u = O(
    () => [z(e), S(o)],
    ([l, f]) => {
      a(), l && s.push(
        ...n.flatMap((d) => r.map((h) => i(l, d, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), a();
  };
  return E(c), c;
}
var X = Object.defineProperty, Y = Object.defineProperties, Z = Object.getOwnPropertyDescriptors, C = Object.getOwnPropertySymbols, q = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable, A = (t, e, n) => e in t ? X(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, N = (t, e) => {
  for (var n in e || (e = {}))
    q.call(e, n) && A(t, n, e[n]);
  if (C)
    for (var n of C(e))
      H.call(e, n) && A(t, n, e[n]);
  return t;
}, _ = (t, e) => Y(t, Z(e));
function F(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function D(...t) {
  let e, n, r = {};
  t.length === 3 ? (e = t[0], n = t[1], r = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, n = t[0], r = t[1]) : (e = t[0], n = t[1]) : (e = !0, n = t[0]);
  const {
    target: o = I,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = r, u = F(e);
  return Q(o, s, (l) => {
    l.repeat && S(i) || u(l) && n(l);
  }, a);
}
function y(t, e, n = {}) {
  return D(t, e, _(N({}, n), { eventName: "keydown" }));
}
function g(t, e, n = {}) {
  return D(t, e, _(N({}, n), { eventName: "keyup" }));
}
function j() {
  const t = p(!1), e = p(!1), n = p(!1);
  return y(" ", (r) => {
    var o = r.target;
    ["INPUT", "TEXTAREA"].includes(o.tagName) || r.preventDefault(), t.value = !0;
  }), g(" ", () => {
    t.value = !1;
  }), y("Shift", (r) => {
    r.preventDefault(), e.value = !0;
  }), g("Shift", () => {
    e.value = !1;
  }), y("Control", (r) => {
    r.preventDefault(), n.value = !0;
  }), g("Control", () => {
    n.value = !1;
  }), { pressSpace: t, pressShift: e, pressCtrl: n };
}
function ee() {
  return {
    canvasScale: p(1)
  };
}
const te = P(ee), $ = P(j);
function pe(t) {
  const { pressSpace: e } = $();
  let n = 0, r = 0;
  function o(i) {
    var u;
    n = i.x, r = i.y, (u = i.dataTransfer) == null || u.setDragImage(document.createElement("div"), 0, 0);
  }
  function s(i) {
    if (i.preventDefault(), !i.x || !i.y || !e.value)
      return;
    const u = i.x - n, c = i.y - r;
    n = i.x, r = i.y, t.value && (t.value.scrollTop -= c, t.value.scrollLeft -= u);
  }
  function a() {
    e.value = !1;
  }
  return { handleElementDragStart: o, handleElementDrag: s, handleElementDragEnd: a };
}
function de(t) {
  const { pressCtrl: e } = $(), { canvasScale: n } = te();
  function r(o) {
    if (!e.value)
      return;
    o.preventDefault();
    let s = 0;
    o.deltaY < 0 ? s = n.value + 0.05 : s = n.value - 0.05, !(s > 2 || s < 0.2) && (n.value = s);
  }
  return O(
    () => n.value,
    (o) => {
      t.value && (t.value.style.transform = `scale(${o})`);
    }
  ), { handleZoom: r, canvasScale: n };
}
function he(t, e = 16.66) {
  let n;
  function r() {
    clearInterval(n);
    const s = setInterval(t, e);
    n = Number(s);
  }
  function o() {
    clearInterval(n);
  }
  return {
    startTimedQuery: r,
    stopTimedQuery: o
  };
}
export {
  J as PluginManager,
  oe as capitalizeFirstLetter,
  w as deepClone,
  B as deepCompareAndModify,
  se as deepEqual,
  ie as findSchemaById,
  ae as getAttributeValue,
  ue as getMatchedById,
  K as getUUID,
  v as loadAsyncComponent,
  U as pluginManager,
  fe as revoke,
  le as setAttributeValue,
  pe as useElementDrag,
  de as useElementZoom,
  ce as usePageManager,
  $ as useShareKeyPress,
  te as useShareStore,
  ee as useStore,
  he as useTimedQuery
};
