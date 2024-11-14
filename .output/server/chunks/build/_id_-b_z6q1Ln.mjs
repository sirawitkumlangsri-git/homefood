import { ref, resolveComponent, withCtx, unref, createTextVNode, openBlock, createBlock, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { a as adminLayouts } from './adminLayouts-Y27OrG9m.mjs';
import { u as useRouter, f as useRoute } from './server.mjs';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const loading = ref(true);
    const form = ref({
      email: "",
      role: "",
      fullname: "",
      phoneNumber: ""
    });
    const submitForm = async () => {
      const id = route.params.id;
      try {
        const response = await fetch(`/api/admin/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form.value)
        });
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        router.push("/admin/users");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(adminLayouts, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<div class="text-center"${_scopeId}>Loading...</div>`);
            } else {
              _push2(`<div class="flex justify-center p-4"${_scopeId}><form class="w-full"${_scopeId}><label class="form-control w-full mt-3"${_scopeId}><div class="label"${_scopeId}><span class="label-text"${_scopeId}>\u0E0A\u0E37\u0E48\u0E2D</span></div><input type="text"${ssrRenderAttr("value", unref(form).fullname)} class="input input-bordered w-full" required${_scopeId}></label><label class="form-control w-full mt-3"${_scopeId}><div class="label"${_scopeId}><span class="label-text"${_scopeId}>\u0E2D\u0E35\u0E40\u0E21\u0E25</span></div><input type="email"${ssrRenderAttr("value", unref(form).email)} class="input input-bordered w-full" required${_scopeId}></label><label class="form-control w-full"${_scopeId}><div class="label"${_scopeId}><span class="label-text"${_scopeId}>role</span></div><select class="select select-bordered"${_scopeId}><option value="user"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "user") : ssrLooseEqual(unref(form).role, "user")) ? " selected" : ""}${_scopeId}>User</option><option value="admin"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "admin") : ssrLooseEqual(unref(form).role, "admin")) ? " selected" : ""}${_scopeId}>Admin</option><option value="cashier"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "cashier") : ssrLooseEqual(unref(form).role, "cashier")) ? " selected" : ""}${_scopeId}>Cashier</option></select></label><div class="flex sm:justify-end justify-center gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_RouterLink, {
                to: "/admin/users",
                class: "btn btn-accent font-light my-5 text-white sm:w-60 w-36"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A `);
                  } else {
                    return [
                      createTextVNode(" \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}><button type="submit" class="btn btn-accent my-5 text-white font-light sm:w-60 w-36"${_scopeId}>\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02</button></div></div></form></div>`);
            }
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, "Loading...")) : (openBlock(), createBlock("div", {
                key: 1,
                class: "flex justify-center p-4"
              }, [
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"]),
                  class: "w-full"
                }, [
                  createVNode("label", { class: "form-control w-full mt-3" }, [
                    createVNode("div", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "\u0E0A\u0E37\u0E48\u0E2D")
                    ]),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(form).fullname = $event,
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).fullname]
                    ])
                  ]),
                  createVNode("label", { class: "form-control w-full mt-3" }, [
                    createVNode("div", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "\u0E2D\u0E35\u0E40\u0E21\u0E25")
                    ]),
                    withDirectives(createVNode("input", {
                      type: "email",
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ]),
                  createVNode("label", { class: "form-control w-full" }, [
                    createVNode("div", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "role")
                    ]),
                    withDirectives(createVNode("select", {
                      class: "select select-bordered",
                      "onUpdate:modelValue": ($event) => unref(form).role = $event
                    }, [
                      createVNode("option", { value: "user" }, "User"),
                      createVNode("option", { value: "admin" }, "Admin"),
                      createVNode("option", { value: "cashier" }, "Cashier")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).role]
                    ])
                  ]),
                  createVNode("div", { class: "flex sm:justify-end justify-center gap-5" }, [
                    createVNode(_component_RouterLink, {
                      to: "/admin/users",
                      class: "btn btn-accent font-light my-5 text-white sm:w-60 w-36"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-accent my-5 text-white font-light sm:w-60 w-36"
                      }, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02")
                    ])
                  ])
                ], 32)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-b_z6q1Ln.mjs.map
