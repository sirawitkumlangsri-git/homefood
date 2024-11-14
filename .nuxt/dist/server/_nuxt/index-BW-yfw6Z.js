import { ref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as adminLayouts } from "./adminLayouts-Y27OrG9m.js";
import { _ as _export_sfc } from "../server.mjs";
import "./auth-DbKRVt3x.js";
import "pinia";
import "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@unhead/shared";
import "unhead";
import "radix3";
import "ufo";
import "@prisma/client";
import "destr";
import "klona";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(adminLayouts, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full mt-1 bg-opacity-60" data-v-8b364835${_scopeId}><h2 class="sm:text-6xl text-4xl font-bold text-[#fefeff] text-stroke tracking-wide" data-v-8b364835${_scopeId}>DASHBOARD</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full mt-1 bg-opacity-60" }, [
                createVNode("h2", { class: "sm:text-6xl text-4xl font-bold text-[#fefeff] text-stroke tracking-wide" }, "DASHBOARD")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b364835"]]);
export {
  index as default
};
//# sourceMappingURL=index-BW-yfw6Z.js.map
