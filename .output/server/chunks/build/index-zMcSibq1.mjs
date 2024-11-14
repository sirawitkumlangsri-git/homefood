import { useSSRContext, ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { a as adminLayouts } from './adminLayouts-Y27OrG9m.mjs';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
import './auth-DbKRVt3x.mjs';
import 'pinia';
import 'vue-router';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../_/index.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@prisma/client';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32" fill="#ffffff"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path></svg></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/icons/Trash.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Trash = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/icons/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const useres = ref([]);
    const router = useRouter();
    const deleteUser = async (email) => {
      const confirmed = confirm("\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
      if (!confirmed) return;
      try {
        const response = await fetch(`/api/user?email=${email}`, {
          method: "DELETE"
        });
        if (!response.ok) throw new Error("\u0E25\u0E1A\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
        useres.value = useres.value.filter((user) => user.email !== email);
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    };
    const editUser = (id) => {
      router.push(`/admin/users/edit/${id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(adminLayouts, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container mx-auto p-4 bg-base-100 rounded-lg" data-v-1c23af2c${_scopeId}><div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50" data-v-1c23af2c${_scopeId}><h2 class="sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide" data-v-1c23af2c${_scopeId}>\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23</h2></div><div class="overflow-x-auto mt-5" data-v-1c23af2c${_scopeId}><table class="table" data-v-1c23af2c${_scopeId}><thead data-v-1c23af2c${_scopeId}><tr data-v-1c23af2c${_scopeId}><th data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>\u0E25\u0E33\u0E14\u0E31\u0E1A</p></th><th data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>\u0E2D\u0E35\u0E40\u0E21\u0E25</p></th><th data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E15\u0E47\u0E21</p></th><th data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C</p></th><th data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>Role</p></th><th data-v-1c23af2c${_scopeId}></th></tr></thead><tbody data-v-1c23af2c${_scopeId}><!--[-->`);
            ssrRenderList(unref(useres), (user, index2) => {
              _push2(`<tr data-v-1c23af2c${_scopeId}><td data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>${ssrInterpolate(user.id)}</p></td><td data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>${ssrInterpolate(user.email)}</p></td><td data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>${ssrInterpolate(user.fullname)}</p></td><td data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>${ssrInterpolate(user.phoneNumber)}</p></td><td data-v-1c23af2c${_scopeId}><p class="text-center" data-v-1c23af2c${_scopeId}>${ssrInterpolate(user.role)}</p></td><td data-v-1c23af2c${_scopeId}><div class="flex gap-2 justify-center" data-v-1c23af2c${_scopeId}><button class="btn" data-v-1c23af2c${_scopeId}>`);
              _push2(ssrRenderComponent(Trash, null, null, _parent2, _scopeId));
              _push2(`</button><button class="btn btn-accent" data-v-1c23af2c${_scopeId}>`);
              _push2(ssrRenderComponent(Edit, null, null, _parent2, _scopeId));
              _push2(`</button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container mx-auto p-4 bg-base-100 rounded-lg" }, [
                createVNode("div", { class: "flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50" }, [
                  createVNode("h2", { class: "sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide" }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23")
                ]),
                createVNode("div", { class: "overflow-x-auto mt-5" }, [
                  createVNode("table", { class: "table" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, [
                          createVNode("p", { class: "text-center" }, "\u0E25\u0E33\u0E14\u0E31\u0E1A")
                        ]),
                        createVNode("th", null, [
                          createVNode("p", { class: "text-center" }, "\u0E2D\u0E35\u0E40\u0E21\u0E25")
                        ]),
                        createVNode("th", null, [
                          createVNode("p", { class: "text-center" }, "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E15\u0E47\u0E21")
                        ]),
                        createVNode("th", null, [
                          createVNode("p", { class: "text-center" }, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C")
                        ]),
                        createVNode("th", null, [
                          createVNode("p", { class: "text-center" }, "Role")
                        ]),
                        createVNode("th")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(useres), (user, index2) => {
                        return openBlock(), createBlock("tr", {
                          key: user.id
                        }, [
                          createVNode("td", null, [
                            createVNode("p", { class: "text-center" }, toDisplayString(user.id), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("p", { class: "text-center" }, toDisplayString(user.email), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("p", { class: "text-center" }, toDisplayString(user.fullname), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("p", { class: "text-center" }, toDisplayString(user.phoneNumber), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("p", { class: "text-center" }, toDisplayString(user.role), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "flex gap-2 justify-center" }, [
                              createVNode("button", {
                                class: "btn",
                                onClick: ($event) => deleteUser(user.email)
                              }, [
                                createVNode(Trash)
                              ], 8, ["onClick"]),
                              createVNode("button", {
                                class: "btn btn-accent",
                                onClick: ($event) => editUser(user.id)
                              }, [
                                createVNode(Edit)
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c23af2c"]]);

export { index as default };
//# sourceMappingURL=index-zMcSibq1.mjs.map
