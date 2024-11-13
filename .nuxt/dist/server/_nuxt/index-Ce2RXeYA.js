import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@prisma/client";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = {
  __name: "adminLayouts",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileNavOpen = ref(false);
    const toggleMobileNav = () => {
      mobileNavOpen.value = !mobileNavOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))} data-v-c18ccce1><div class="flex justify-center mt-2" data-v-c18ccce1><nav class="w-full mt-2 ml-4 mr-4 bg-slate-600 p-4 flex justify-between items-center rounded-2xl h-14" data-v-c18ccce1><div class="flex" data-v-c18ccce1><div class="hidden sm:block" data-v-c18ccce1><div class="flex" data-v-c18ccce1><h1 class="font-bold text-3xl mt-1 ml-2 text-white" data-v-c18ccce1>ADMIN</h1><h1 class="font-bold text-3xl mt-1 ml-2 text-white" data-v-c18ccce1>DASHBOARD</h1></div></div><button class="sm:hidden btn btn-ghost btn-circle text-white" data-v-c18ccce1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-6 h-6" data-v-c18ccce1><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-c18ccce1></path></svg></button>`);
      if (unref(mobileNavOpen)) {
        _push(`<div class="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 sm:hidden" data-v-c18ccce1><div class="absolute left-0 top-0 h-full w-60 bg-white font-kanit p-2 overflow-auto" data-v-c18ccce1><div class="flex flex-col justify-center items-center" data-v-c18ccce1><h1 class="font-bold text-5xl mt-1 ml-2 text-[#FF6347]" data-v-c18ccce1>ADMIN</h1><h1 class="font-bold text-2xl mt-1 ml-2 text-[#FF6347]" data-v-c18ccce1>DASHBOARD</h1></div><div class="divider pr-4 pl-4" data-v-c18ccce1></div><ul class="flex flex-col" data-v-c18ccce1><li class="" data-v-c18ccce1>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/admin",
          class: "block py-2 px-4 hover:bg-gray-200 rounded-full border-2 border-accent",
          onClick: toggleMobileNav
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-center text-orange-400 font-bold" data-v-c18ccce1${_scopeId}>DASHBOARD</p>`);
            } else {
              return [
                createVNode("p", { class: "text-center text-orange-400 font-bold" }, "DASHBOARD")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul><ul class="menu bg-base-100 rounded-box w-70 mt-2 border-2 -mx-0 border-accent" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1> ข้อมูลภายในเว็บ</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/admin/users",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลยูสเซอร์</p>`);
            } else {
              return [
                createVNode("p", { class: "text-base" }, "ข้อมูลยูสเซอร์")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-c18ccce1>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/admin",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลร้านค้า</p>`);
            } else {
              return [
                createVNode("p", { class: "text-base" }, "ข้อมูลร้านค้า")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></li></ul><ul class="menu bg-base-100 rounded-box w-70 mt-2 border-2 -mx-0 border-accent" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1> ข้อมูลภายในคลินิค</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/admin",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลผู้ป่วย</p>`);
            } else {
              return [
                createVNode("p", { class: "text-base" }, "ข้อมูลผู้ป่วย")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></li></ul><ul class="menu bg-base-100 rounded-box w-70 mt-2 mb-2 border-2 -mx-0 border-accent" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1>ตรวจรักษา</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
        _push(ssrRenderComponent(_component_RouterLink, { to: "/admin/information" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="sm:text-base text-[15px]" data-v-c18ccce1${_scopeId}>ข้อมูลการตรวจ</p>`);
            } else {
              return [
                createVNode("p", { class: "sm:text-base text-[15px]" }, "ข้อมูลการตรวจ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center space-x-4" data-v-c18ccce1><div class="dropdown dropdown-end" data-v-c18ccce1><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar online" data-v-c18ccce1><div class="w-10 rounded-full" data-v-c18ccce1><img alt="Tailwind CSS Navbar component" src="https://img5.pic.in.th/file/secure-sv1/software-engineerc1438b6fade78e82.png" data-v-c18ccce1></div></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" data-v-c18ccce1><li data-v-c18ccce1><a class="justify-between" data-v-c18ccce1> ออกจากระบบ </a></li></ul></div></div></nav></div><div class="flex h-full mt-2" data-v-c18ccce1><aside class="w-72 bg-slate-500 rounded-xl h-full hidden sm:block mx-4" data-v-c18ccce1><div class="w-full h-26 bg-slate-600 rounded-t-xl flex justify-center items-center p-4" data-v-c18ccce1><div class="flex-col justify-center items-center" data-v-c18ccce1><div class="flex justify-center items-center avatar" data-v-c18ccce1><div class="ring-accent ring-offset-base-100 w-24 rounded-full ring ring-offset-2" data-v-c18ccce1><img src="https://img5.pic.in.th/file/secure-sv1/software-engineerc1438b6fade78e82.png" data-v-c18ccce1></div></div><div class="flex" data-v-c18ccce1><h1 class="mt-2 text-base-200" data-v-c18ccce1>Role :</h1></div></div><div class="divider p-2" data-v-c18ccce1></div></div><div class="pr-2 pl-2" data-v-c18ccce1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/admin",
        class: "flex items-center mt-3 p-2 bg-base-100 rounded-xl hover:bg-gray-100 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fa", "tachometer-alt"],
              class: "text-zinc-500 text-xl ml-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-base text-zinc-600 ml-2" data-v-c18ccce1${_scopeId}>Dashboard </p>`);
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fa", "tachometer-alt"],
                class: "text-zinc-500 text-xl ml-2"
              }),
              createVNode("p", { class: "text-base text-zinc-600 ml-2" }, "Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="menu bg-base-100 rounded-box w-70 mt-2" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1>ข้อมูลภายในเว็บ</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/admin",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fa", "user"],
              class: "text-zinc-500 text-xl mr-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลยูสเซอร์</p>`);
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fa", "user"],
                class: "text-zinc-500 text-xl mr-2"
              }),
              createVNode("p", { class: "text-base" }, "ข้อมูลยูสเซอร์")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c18ccce1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/admin",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลร้านค้า</p>`);
          } else {
            return [
              createVNode("p", { class: "text-base" }, "ข้อมูลร้านค้า")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul><ul class="menu bg-base-100 rounded-box w-70 mt-2" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1>ข้อมูลภายในคลินิค</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/admin",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลผู้ป่วย</p>`);
          } else {
            return [
              createVNode("p", { class: "text-base" }, "ข้อมูลผู้ป่วย")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul><ul class="menu bg-base-100 rounded-box w-70 mt-2 mb-2" data-v-c18ccce1><li data-v-c18ccce1><h2 class="menu-title font-light text-zinc-500 text-center text-base" data-v-c18ccce1>ตรวจรักษา</h2><ul data-v-c18ccce1><li data-v-c18ccce1>`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/admin" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base" data-v-c18ccce1${_scopeId}>ข้อมูลการตรวจ</p>`);
          } else {
            return [
              createVNode("p", { class: "text-base" }, "ข้อมูลการตรวจ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></div></aside><div class="flex-1 p-4 rounded-xl mx-auto w-full" data-v-c18ccce1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/adminLayouts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const adminLayouts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c18ccce1"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(adminLayouts, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` asdasd `);
          } else {
            return [
              createTextVNode(" asdasd ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Ce2RXeYA.js.map
