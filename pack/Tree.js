/*! For license information please see Tree.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
    823: (e, t, o) => {
      o.d(t, {Z: () => a});
      var r = o(81), n = o.n(r), s = o(645), i = o.n(s)()(n());
      i.push([e.id, "\r\n/*\r\n.jstree-node {\r\n  transition-duration: 4s;\r\n  animation-delay: 4s;\r\n  animation-duration: 5s;\r\n}*/\r\n", ""]);
      const a = i
    }, 645: e => {
      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map((function (t) {
            var o = "", r = void 0 !== t[5];
            return t[4] && (o += "@supports (".concat(t[4], ") {")), t[2] && (o += "@media ".concat(t[2], " {")), r && (o += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), o += e(t), r && (o += "}"), t[2] && (o += "}"), t[4] && (o += "}"), o
          })).join("")
        }, t.i = function (e, o, r, n, s) {
          "string" == typeof e && (e = [[null, e, void 0]]);
          var i = {};
          if (r) for (var a = 0; a < this.length; a++) {
            var c = this[a][0];
            null != c && (i[c] = !0)
          }
          for (var l = 0; l < e.length; l++) {
            var d = [].concat(e[l]);
            r && i[d[0]] || (void 0 !== s && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = s), o && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = o) : d[2] = o), n && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = n) : d[4] = "".concat(n)), t.push(d))
          }
        }, t
      }
    }, 81: e => {
      e.exports = function (e) {
        return e[1]
      }
    }, 379: e => {
      var t = [];

      function o(e) {
        for (var o = -1, r = 0; r < t.length; r++) if (t[r].identifier === e) {
          o = r;
          break
        }
        return o
      }

      function r(e, r) {
        for (var s = {}, i = [], a = 0; a < e.length; a++) {
          var c = e[a], l = r.base ? c[0] + r.base : c[0], d = s[l] || 0, u = "".concat(l, " ").concat(d);
          s[l] = d + 1;
          var f = o(u), h = {css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5]};
          if (-1 !== f) t[f].references++, t[f].updater(h); else {
            var p = n(h, r);
            r.byIndex = a, t.splice(a, 0, {identifier: u, updater: p, references: 1})
          }
          i.push(u)
        }
        return i
      }

      function n(e, t) {
        var o = t.domAPI(t);
        o.update(e);
        return function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
            o.update(e = t)
          } else o.remove()
        }
      }

      e.exports = function (e, n) {
        var s = r(e = e || [], n = n || {});
        return function (e) {
          e = e || [];
          for (var i = 0; i < s.length; i++) {
            var a = o(s[i]);
            t[a].references--
          }
          for (var c = r(e, n), l = 0; l < s.length; l++) {
            var d = o(s[l]);
            0 === t[d].references && (t[d].updater(), t.splice(d, 1))
          }
          s = c
        }
      }
    }, 569: e => {
      var t = {};
      e.exports = function (e, o) {
        var r = function (e) {
          if (void 0 === t[e]) {
            var o = document.querySelector(e);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
              o = o.contentDocument.head
            } catch (e) {
              o = null
            }
            t[e] = o
          }
          return t[e]
        }(e);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(o)
      }
    }, 216: e => {
      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    }, 565: (e, t, o) => {
      e.exports = function (e) {
        var t = o.nc;
        t && e.setAttribute("nonce", t)
      }
    }, 795: e => {
      e.exports = function (e) {
        var t = e.insertStyleElement(e);
        return {
          update: function (o) {
            !function (e, t, o) {
              var r = "";
              o.supports && (r += "@supports (".concat(o.supports, ") {")), o.media && (r += "@media ".concat(o.media, " {"));
              var n = void 0 !== o.layer;
              n && (r += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")), r += o.css, n && (r += "}"), o.media && (r += "}"), o.supports && (r += "}");
              var s = o.sourceMap;
              s && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleTagTransform(r, e, t.options)
            }(t, e, o)
          }, remove: function () {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    }, 589: e => {
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e; else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    }
  }, t = {};

  function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var s = t[r] = {id: r, exports: {}};
    return e[r](s, s.exports, o), s.exports
  }

  o.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, {a: t}), t
  }, o.d = (e, t) => {
    for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
  }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.nc = void 0, (() => {
    const e = Vue;
    var t = o.n(e);

    function r(e) {
      return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, r(e)
    }

    function n(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    }

    function s(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, o = new Array(e.length); t < e.length; t++) o[t] = e[t];
          return o
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function i() {
      return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
    }

    function a(e, t) {
      c(e, t), Object.getOwnPropertyNames(t.prototype).forEach((function (o) {
        c(e.prototype, t.prototype, o)
      })), Object.getOwnPropertyNames(t).forEach((function (o) {
        c(e, t, o)
      }))
    }

    function c(e, t, o) {
      (o ? Reflect.getOwnMetadataKeys(t, o) : Reflect.getOwnMetadataKeys(t)).forEach((function (r) {
        var n = o ? Reflect.getOwnMetadata(r, t, o) : Reflect.getOwnMetadata(r, t);
        o ? Reflect.defineMetadata(r, n, e, o) : Reflect.defineMetadata(r, n, e)
      }))
    }

    var l = {__proto__: []} instanceof Array;

    function d(e, t) {
      var o = t.prototype._init;
      t.prototype._init = function () {
        var t = this, o = Object.getOwnPropertyNames(e);
        if (e.$options.props) for (var r in e.$options.props) e.hasOwnProperty(r) || o.push(r);
        o.forEach((function (o) {
          Object.defineProperty(t, o, {
            get: function () {
              return e[o]
            }, set: function (t) {
              e[o] = t
            }, configurable: !0
          })
        }))
      };
      var r = new t;
      t.prototype._init = o;
      var n = {};
      return Object.keys(r).forEach((function (e) {
        void 0 !== r[e] && (n[e] = r[e])
      })), n
    }

    var u = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

    function f(e) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o.name = o.name || e._componentTag || e.name;
      var r = e.prototype;
      Object.getOwnPropertyNames(r).forEach((function (e) {
        if ("constructor" !== e) if (u.indexOf(e) > -1) o[e] = r[e]; else {
          var t = Object.getOwnPropertyDescriptor(r, e);
          void 0 !== t.value ? "function" == typeof t.value ? (o.methods || (o.methods = {}))[e] = t.value : (o.mixins || (o.mixins = [])).push({
            data: function () {
              return n({}, e, t.value)
            }
          }) : (t.get || t.set) && ((o.computed || (o.computed = {}))[e] = {get: t.get, set: t.set})
        }
      })), (o.mixins || (o.mixins = [])).push({
        data: function () {
          return d(this, e)
        }
      });
      var s = e.__decorators__;
      s && (s.forEach((function (e) {
        return e(o)
      })), delete e.__decorators__);
      var c = Object.getPrototypeOf(e.prototype), l = c instanceof t() ? c.constructor : t(), f = l.extend(o);
      return p(f, e, l), i() && a(f, e), f
    }

    var h = {prototype: !0, arguments: !0, callee: !0, caller: !0};

    function p(e, t, o) {
      Object.getOwnPropertyNames(t).forEach((function (n) {
        if (!h[n]) {
          var s = Object.getOwnPropertyDescriptor(e, n);
          if (!s || s.configurable) {
            var i, a, c = Object.getOwnPropertyDescriptor(t, n);
            if (!l) {
              if ("cid" === n) return;
              var d = Object.getOwnPropertyDescriptor(o, n);
              if (i = c.value, a = r(i), null != i && ("object" === a || "function" === a) && d && d.value === c.value) return
            }
            0, Object.defineProperty(e, n, c)
          }
        }
      }))
    }

    function y(e) {
      return "function" == typeof e ? f(e) : function (t) {
        return f(t, e)
      }
    }

    y.registerHooks = function (e) {
      u.push.apply(u, s(e))
    };
    const v = y;
    var g = "undefined" != typeof Reflect && void 0 !== Reflect.getMetadata;

    function m(e) {
      return void 0 === e && (e = {}), function (t, o) {
        var r;
        !function (e, t, o) {
          if (g && !Array.isArray(e) && "function" != typeof e && !e.hasOwnProperty("type") && void 0 === e.type) {
            var r = Reflect.getMetadata("design:type", t, o);
            r !== Object && (e.type = r)
          }
        }(e, t, o), (r = function (t, o) {
          (t.props || (t.props = {}))[o] = e
        }, function (e, t, o) {
          var n = "function" == typeof e ? e : e.constructor;
          n.__decorators__ || (n.__decorators__ = []), "number" != typeof o && (o = void 0), n.__decorators__.push((function (e) {
            return r(e, t, o)
          }))
        })(t, o)
      }
    }

    class MyTreeLogic {
      constructor() {
        this.RootNode = null, this.LastSelectedNode = null, this.SortFunction = null, this.SearchFunction = null, this.SelectFunction = null, this.CanBeSelectedFunction = null, this.SearchModeOn = !1, this._searchResultCssClass = "jstree-search", this._multiSelectEnabled = !1, this._selectedNodes = [], this.LastSortByField = null, this.LastAscending = !1
      }

      get SearchResultCssClass() {
        return this._searchResultCssClass
      }

      set SearchResultCssClass(e) {
        this._searchResultCssClass = e
      }

      get MultiSelectEnabled() {
        return this._multiSelectEnabled
      }

      set MultiSelectEnabled(e) {
        this._multiSelectEnabled = e, this._selectedNodes.forEach((e => e.state.selected = !1)), this._selectedNodes.splice(0, this._selectedNodes.length), this.LastSelectedNode && (this.LastSelectedNode.state.selected = !1, this.LastSelectedNode = null)
      }

      get SelectedNodes() {
        return this._selectedNodes
      }

      ToggleSelectNode(e) {
        if ((!this.CanBeSelectedFunction || this.CanBeSelectedFunction(e)) && (!this.SelectFunction || this.SelectFunction(e))) if (e.state.selected = !e.state.selected, this.MultiSelectEnabled) {
          this.LastSelectedNode !== e && (this.LastSelectedNode = e);
          const t = this._selectedNodes.findIndex((t => t === e));
          e.state.selected ? -1 === t && this._selectedNodes.push(e) : t > -1 && this._selectedNodes.splice(t, 1)
        } else this.LastSelectedNode === e ? e.state.selected || (this.LastSelectedNode = null) : (this.LastSelectedNode && (this.LastSelectedNode.state.selected = !1), this.LastSelectedNode = e), e.state.selected ? this._selectedNodes[0] = e : this._selectedNodes.splice(0, this._selectedNodes.length)
      }

      _getById(e, t) {
        for (const o of e) if (o.id && o.id === t) return o;
        for (const o of e) if (o.children) {
          const e = this._getById(o.children, t);
          if (e) return e
        }
        return null
      }

      GetById(e) {
        var t;
        return this._getById(null === (t = this.RootNode) || void 0 === t ? void 0 : t.children, e)
      }

      SetRootNode(e, t) {
        if (this.RootNode = e, !0 === t) {
          if (this.SelectedNodes.length > 0) {
            const e = [];
            this.LastSelectedNode = null;
            for (const t of this.SelectedNodes) {
              const o = this.GetById(t.id);
              o && (o.state.selected = !0, e.push(o), this.LastSelectedNode = o)
            }
            this.SelectedNodes.splice(0, this.SelectedNodes.length), e.forEach((e => this.SelectedNodes.push(e)))
          }
        } else this.LastSelectedNode = null, this.SelectedNodes.splice(0, this.SelectedNodes.length)
      }

      OrderBy(e, t) {
        this.SortFunction && (this.LastSortByField = e, this.LastAscending = t, this._orderChildren(this.RootNode.children))
      }

      _orderChildren(e) {
        e.sort(((e, t) => this.SortFunction(e, t, this.LastSortByField, this.LastAscending)));
        for (const t of e) t.children && this._orderChildren(t.children)
      }

      _toggleOpenedState(e, t) {
        for (const o of e) o.state.opened = t, o.children && this._toggleOpenedState(o.children, t)
      }

      DeselectAll() {
        this.LastSelectedNode && (this.LastSelectedNode.state.selected = !1, this.LastSelectedNode = null)
      }

      OpenAll(e) {
        e ? this._toggleOpenedState(e, !0) : (this.RootNode.state.opened = !0, this._toggleOpenedState(this.RootNode.children, !0))
      }

      CloseAll(e) {
        e ? this._toggleOpenedState(e, !1) : (this.RootNode.state.opened = !1, this._toggleOpenedState(this.RootNode.children, !1))
      }

      _findParent(e, t) {
        for (const o of e) if (o.children.some((e => e === t))) return o;
        for (const o of e) if (o.children) {
          const e = this._findParent(o.children, t);
          if (e) return e
        }
        return null
      }

      FindParent(e) {
        return this._findParent(this.RootNode.children, e)
      }

      OpenParents(e) {
        let t = e;
        do {
          t = this.FindParent(t), t && (t.state.disabled = !1, t.state.opened = !0)
        } while (t)
      }

      ForEachNode(e, t) {
        for (const o of e) t(o), o.children && this.ForEachNode(o.children, t)
      }

      Search() {
        var e;
        if (!this.SearchFunction) return;
        this.SearchModeOn = !0, this.CloseAll();
        const t = [];
        this.ForEachNode(null === (e = this.RootNode) || void 0 === e ? void 0 : e.children, (e => {
          e.state.disabled = !this.SearchFunction(e), e.state.disabled || t.push(e)
        }));
        for (const e of t) this.OpenParents(e);
        this.OpenAll()
      }

      ClearSearch() {
        var e;
        this.ForEachNode(null === (e = this.RootNode) || void 0 === e ? void 0 : e.children, (e => e.state.disabled = !1)), this.OpenAll(), this.SearchModeOn = !1
      }

      SelectNodeById(e) {
        const t = this.GetById(e);
        t && !t.state.selected && this.ToggleSelectNode(t)
      }
    }

    var _ = function (e, t, o, r) {
      var n, s = arguments.length, i = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, r); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (i = (s < 3 ? n(i) : s > 3 ? n(t, o, i) : n(t, o)) || i);
      return s > 3 && i && Object.defineProperty(t, o, i), i
    }, N = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let S = class MyTreeNode extends (t()) {
      constructor() {
        super(...arguments), this.Hovered = !1
      }

      get MultiSelectEnabled() {
        return this.MyTreeLogic.MultiSelectEnabled
      }

      get NodeCssClasses() {
        const e = [];
        return this.HasChildren || e.push("jstree-leaf"), this.NodeItem.state.opened ? e.push("jstree-open") : e.push("jstree-closed"), this.MyTreeLogic.SearchModeOn && this.MyTreeLogic.SearchResultCssClass && e.push(this.MyTreeLogic.SearchResultCssClass), e
      }

      get HasChildren() {
        return !!this.NodeItem && (this.NodeItem.children && this.NodeItem.children.length > 0)
      }

      ToggleOpenClose() {
        this.NodeItem && (this.NodeItem.state.opened = !this.NodeItem.state.opened)
      }

      FindNearId(e) {
        const t = e.target.closest(".jstree-node");
        return t ? t.__vue__ : (console.warn("FindNearId: cannot find any .jstree-node near here!"), null)
      }

      SetHovered(e) {
        this.Hovered = e
      }

      MouseHover(e) {
        var t;
        null === (t = this.FindNearId(e)) || void 0 === t || t.SetHovered(!0)
      }

      MouseOut(e) {
        var t;
        null === (t = this.FindNearId(e)) || void 0 === t || t.SetHovered(!1)
      }
    };
    _([m({required: !0, type: Object}), N("design:type", Object)], S.prototype, "NodeItem", void 0), _([m({
      required: !0,
      type: Object
    }), N("design:type", MyTreeLogic)], S.prototype, "MyTreeLogic", void 0), S = _([v({components: {MyTreeNode: S}})], S);
    const b = S;
    var O = o(379), j = o.n(O), C = o(795), M = o.n(C), R = o(569), T = o.n(R), w = o(565), I = o.n(w), L = o(216),
      x = o.n(L), P = o(589), E = o.n(P), F = o(823), A = {};
    A.styleTagTransform = E(), A.setAttributes = I(), A.insert = T().bind(null, "head"), A.domAPI = M(), A.insertStyleElement = x();
    j()(F.Z, A);
    F.Z && F.Z.locals && F.Z.locals;

    function D(e, t, o, r, n, s, i, a) {
      var c, l = "function" == typeof e ? e.options : e;
      if (t && (l.render = t, l.staticRenderFns = o, l._compiled = !0), r && (l.functional = !0), s && (l._scopeId = "data-v-" + s), i ? (c = function (e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
      }, l._ssrRegister = c) : n && (c = a ? function () {
        n.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
      } : n), c) if (l.functional) {
        l._injectStyles = c;
        var d = l.render;
        l.render = function (e, t) {
          return c.call(t), d(e, t)
        }
      } else {
        var u = l.beforeCreate;
        l.beforeCreate = u ? [].concat(u, c) : [c]
      }
      return {exports: e, options: l}
    }

    const B = D(b, (function () {
      var e = this, t = e._self._c;
      e._self._setupProxy;
      return t("li", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.NodeItem.state.disabled,
          expression: "!NodeItem.state.disabled"
        }],
        staticClass: "jstree-node",
        class: e.NodeCssClasses,
        attrs: {role: "none", "data-node-id": e.NodeItem.id},
        on: {mouseover: e.MouseHover, mouseout: e.MouseOut}
      }, [t("div", {
        staticClass: "jstree-wholerow",
        class: {"jstree-wholerow-hovered": e.Hovered, "jstree-wholerow-clicked": e.NodeItem.state.selected},
        attrs: {role: "presentation"}
      }, [e._v(" \n  ")]), e._v(" "), t("i", {
        staticClass: "jstree-icon jstree-ocl",
        attrs: {role: "presentation", "aria-expanded": "true"},
        on: {
          click: function (t) {
            return t.stopPropagation(), t.preventDefault(), e.ToggleOpenClose.apply(null, arguments)
          }
        }
      }), e._v(" "), t("a", {
        staticClass: "jstree-anchor",
        class: {"jstree-clicked": e.NodeItem.state.selected},
        attrs: {href: "#", role: "treeitem", "aria-selected": e.NodeItem.state.selected}
      }, [e.MultiSelectEnabled && e.NodeItem.state.selected ? t("i", {staticClass: "fas fa-check-square"}) : e._e(), e._v(" "), e.MultiSelectEnabled && !e.NodeItem.state.selected ? t("i", {staticClass: "far fa-square"}) : e._e(), e._v(" "), e._t("NodeDisplay", (function () {
        return [t("i", {
          staticClass: "jstree-icon jstree-themeicon fas fa-folder text-primary jstree-themeicon-custom",
          attrs: {role: "presentation"}
        }), e._v("\n      " + e._s(e.NodeItem.text) + "\n    ")]
      }), {NodeItem: e.NodeItem})], 2), e._v(" "), e.NodeItem.children && e.NodeItem.children.length > 0 ? t("ul", {
        staticClass: "jstree-children",
        attrs: {role: "group"}
      }, e._l(e.NodeItem.children, (function (o) {
        return t("MyTreeNode", {
          key: o.id,
          attrs: {"node-item": o, "my-tree-logic": e.MyTreeLogic},
          scopedSlots: e._u([e._l(e.$scopedSlots, (function (t, o) {
            return {
              key: o, fn: function (t) {
                return [e._t(o, null, null, t)]
              }
            }
          }))], null, !0)
        })
      })), 1) : e._e()])
    }), [], !1, null, null, null).exports;
    var k = function (e, t, o, r) {
      var n, s = arguments.length, i = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, r); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (i = (s < 3 ? n(i) : s > 3 ? n(t, o, i) : n(t, o)) || i);
      return s > 3 && i && Object.defineProperty(t, o, i), i
    }, H = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
    let $ = class MyTree extends (t()) {
      Click(e) {
        const t = this.FindNearId(e);
        t && this.MyTreeLogic.ToggleSelectNode(t.NodeItem)
      }

      FindNearId(e) {
        const t = e.target.closest(".jstree-node");
        return t ? t.__vue__ : (console.warn("FindNearId: cannot find any .jstree-node near here!"), null)
      }
    };
    k([m({
      required: !0,
      type: Object
    }), H("design:type", MyTreeLogic)], $.prototype, "MyTreeLogic", void 0), $ = k([v({components: {MyTreeNode: B}})], $);
    const q = D($, (function () {
      var e = this, t = e._self._c;
      e._self._setupProxy;
      return t("div", {
        staticClass: "jstree jstree-2 jstree-default jstree-default-large jstree-checkbox-selection",
        attrs: {role: "tree"}
      }, [t("ul", {
        staticClass: "jstree-container-ul jstree-children jstree-striped jstree-no-checkboxes jstree-wholerow-ul jstree-no-dots",
        attrs: {role: "group"},
        on: {
          click: function (t) {
            return t.stopPropagation(), t.preventDefault(), e.Click.apply(null, arguments)
          }
        }
      }, [t("MyTreeNode", {
        attrs: {"node-item": e.MyTreeLogic.RootNode, "my-tree-logic": e.MyTreeLogic},
        scopedSlots: e._u([{
          key: "NodeDisplay", fn: function ({NodeItem: t}) {
            return [e._t("NodeDisplay", null, {NodeItem: t})]
          }
        }], null, !0)
      })], 1)])
    }), [], !1, null, null, null).exports;
    var Z;
    !function (e) {
      e[e.Boring = 0] = "Boring", e[e.Cool = 1] = "Cool", e[e.SuperCool = 2] = "SuperCool"
    }(Z || (Z = {}));
    var U = function (e, t, o, r) {
      var n, s = arguments.length, i = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, r); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (i = (s < 3 ? n(i) : s > 3 ? n(t, o, i) : n(t, o)) || i);
      return s > 3 && i && Object.defineProperty(t, o, i), i
    };
    let V = class Tree extends (t()) {
      constructor() {
        super(...arguments), this.MyTreeLogicData = new MyTreeLogic
      }

      mounted() {
        const e = {
          id: "1",
          state: {selected: !1, opened: !1, disabled: !1},
          text: "ROOT",
          Value: {CoolLevel: Z.SuperCool, ExpireAt: null, Name: "ROOT"},
          children: [{
            id: "2",
            state: {selected: !1, opened: !1, disabled: !1},
            text: "Father 1",
            Value: {CoolLevel: Z.SuperCool, ExpireAt: "2022-04-04T10:40:00Z", Name: "Father 1"},
            children: []
          }]
        };
        this.MyTreeLogicData.SetRootNode(e), this.MyTreeLogicData.OpenAll()
      }
    };
    V = U([v({components: {MyTree: q}})], V);
    const G = D(V, (function () {
      var e = this, t = e._self._c;
      e._self._setupProxy;
      return t("div", [this.MyTreeLogicData.RootNode ? t("MyTree", {attrs: {"my-tree-logic": e.MyTreeLogicData}}) : e._e()], 1)
    }), [], !1, null, null, null).exports;
    new (t())({el: "#app", render: e => e(G)})
  })()
})();
