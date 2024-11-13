import { mergeProps, useSSRContext, ref, unref, resolveComponent, withCtx, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { M as Menu } from "./Menu-D0p1tXCo.js";
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
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99502 4H14.005C17.7856 4 19.6759 4 20.8504 5.17157C21.6591 5.97823 21.911 7.12339 21.9894 8.98947C22.005 9.35954 22.0128 9.54458 21.9437 9.66803C21.8745 9.79147 21.5987 9.94554 21.0469 10.2537C20.4341 10.5959 20.0199 11.2497 20.0199 12C20.0199 12.7503 20.4341 13.4041 21.0469 13.7463C21.5987 14.0545 21.8745 14.2085 21.9437 14.332C22.0128 14.4554 22.005 14.6405 21.9894 15.0105C21.911 16.8766 21.6591 18.0218 20.8504 18.8284C19.6759 20 17.7856 20 14.005 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4ZM15.5478 8.46967C15.8415 8.76256 15.8415 9.23744 15.5478 9.53033L9.53289 15.5303C9.23927 15.8232 8.76321 15.8232 8.46959 15.5303C8.17596 15.2374 8.17596 14.7626 8.46959 14.4697L14.4845 8.46967C14.7782 8.17678 15.2542 8.17678 15.5478 8.46967ZM14.5149 15.5C15.0686 15.5 15.5174 15.0523 15.5174 14.5C15.5174 13.9477 15.0686 13.5 14.5149 13.5C13.9613 13.5 13.5124 13.9477 13.5124 14.5C13.5124 15.0523 13.9613 15.5 14.5149 15.5ZM9.50248 10.5C10.0561 10.5 10.505 10.0523 10.505 9.5C10.505 8.94772 10.0561 8.5 9.50248 8.5C8.94882 8.5 8.49999 8.94772 8.49999 9.5C8.49999 10.0523 8.94882 10.5 9.50248 10.5Z" fill="url(#paint0_linear_368_6455)"></path><defs><linearGradient id="paint0_linear_368_6455" x1="22.4934" y1="10.3889" x2="0.681839" y2="13.092" gradientUnits="userSpaceOnUse"><stop stop-color="#FF9684"></stop><stop offset="1" stop-color="#FF6347"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/coupon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Coupon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.93866 3.25H14.0612C15.9038 3.24998 17.3628 3.24997 18.5046 3.4031C19.6794 3.56066 20.6301 3.89255 21.38 4.64058C22.4096 5.66758 22.6598 7.08185 22.7387 8.95797L22.7397 8.98214C22.7466 9.14598 22.7537 9.31328 22.7475 9.45419C22.7409 9.60408 22.7177 9.82054 22.598 10.0344C22.5152 10.1823 22.4043 10.2846 22.3304 10.3458C22.2502 10.4122 22.1612 10.4724 22.0764 10.5259C21.9126 10.6292 21.6912 10.7529 21.4316 10.8978L21.4125 10.9085C21.0268 11.1239 20.7699 11.533 20.7699 12C20.7699 12.467 21.0268 12.8761 21.4125 13.0915L21.4317 13.1022C21.6912 13.2472 21.9127 13.3708 22.0764 13.4741C22.1612 13.5276 22.2502 13.5878 22.3304 13.6542C22.4043 13.7154 22.5152 13.8177 22.598 13.9656C22.7177 14.1795 22.7409 14.3959 22.7475 14.5458C22.7537 14.6867 22.7466 14.854 22.7397 15.0179L22.7387 15.042C22.6598 16.9182 22.4096 18.3324 21.38 19.3594C20.6301 20.1074 19.6794 20.4393 18.5046 20.5969C17.3628 20.75 15.9038 20.75 14.0612 20.75H9.93866C8.09611 20.75 6.63706 20.75 5.49525 20.5969C4.32045 20.4393 3.36975 20.1074 2.61986 19.3594C1.59031 18.3324 1.34006 16.9182 1.26119 15.042L1.26017 15.0179C1.25325 14.854 1.24619 14.6867 1.25238 14.5458C1.25898 14.3959 1.28216 14.1795 1.40185 13.9656C1.48468 13.8177 1.59561 13.7154 1.66951 13.6542C1.74966 13.5878 1.83867 13.5276 1.92352 13.4741C2.08725 13.3708 2.30869 13.2471 2.56827 13.1022L2.58735 13.0915C2.97306 12.8761 3.23002 12.467 3.23002 12C3.23002 11.533 2.97306 11.1239 2.58735 10.9085L2.56825 10.8978C2.30868 10.7529 2.08725 10.6292 1.92352 10.5259C1.83866 10.4724 1.74966 10.4122 1.66951 10.3458C1.5956 10.2846 1.48468 10.1823 1.40185 10.0344C1.28216 9.82054 1.25898 9.60408 1.25238 9.45419C1.24619 9.31328 1.25325 9.14599 1.26017 8.98215C1.26051 8.97408 1.26085 8.96602 1.26119 8.95797C1.34006 7.08185 1.59031 5.66758 2.61986 4.64058C3.36975 3.89255 4.32046 3.56066 5.49525 3.4031C6.63706 3.24997 8.09611 3.24998 9.93866 3.25ZM21.2468 14.5842C21.2468 14.5842 21.247 14.5852 21.2473 14.5875L21.2468 14.5842ZM21.2492 14.726C21.2491 14.7325 21.2489 14.7394 21.2488 14.7464C21.2471 14.8104 21.244 14.8847 21.24 14.979C21.162 16.8351 20.9085 17.7111 20.3207 18.2974C19.8961 18.721 19.3144 18.9749 18.3053 19.1102C17.2747 19.2484 15.9164 19.25 14.0049 19.25H9.99496C8.0835 19.25 6.72516 19.2484 5.69463 19.1102C4.68549 18.9749 4.10379 18.721 3.6792 18.2974C3.09141 17.7111 2.83789 16.8351 2.75986 14.979C2.7559 14.8847 2.75279 14.8104 2.75115 14.7464C2.75096 14.7394 2.75081 14.7325 2.75067 14.726C2.87533 14.649 3.05437 14.5488 3.3187 14.4012C4.15855 13.9322 4.73002 13.0336 4.73002 12C4.73002 10.9664 4.15855 10.0678 3.3187 9.59884C3.05437 9.45123 2.87533 9.35098 2.75066 9.27401C2.7508 9.26746 2.75096 9.26065 2.75115 9.25358C2.75279 9.18961 2.7559 9.11528 2.75986 9.02097C2.83789 7.16494 3.09141 6.28889 3.6792 5.70256C4.10379 5.27902 4.68549 5.02513 5.69463 4.88979C6.72516 4.75159 8.0835 4.75 9.99496 4.75H14.0049C15.9164 4.75 17.2747 4.75159 18.3053 4.88979C19.3144 5.02513 19.8961 5.27902 20.3207 5.70256C20.9085 6.28889 21.162 7.16494 21.24 9.02098C21.244 9.11528 21.2471 9.18961 21.2488 9.25357C21.2489 9.26065 21.2491 9.26746 21.2492 9.274C21.1246 9.35098 20.9455 9.45123 20.6812 9.59884C19.8413 10.0678 19.2699 10.9664 19.2699 12C19.2699 13.0336 19.8413 13.9322 20.6812 14.4012C20.9455 14.5488 21.1246 14.649 21.2492 14.726ZM21.3735 9.19072L21.3723 9.19165C21.3766 9.18779 21.3774 9.18748 21.3735 9.19072ZM21.2468 9.41578C21.2468 9.41578 21.2469 9.41461 21.2473 9.41248L21.2468 9.41578ZM2.62643 9.19072C2.62252 9.18748 2.62334 9.18779 2.62756 9.19165L2.62643 9.19072ZM2.75263 9.41247C2.75299 9.4146 2.75309 9.41578 2.75309 9.41578L2.75263 9.41247ZM2.75309 14.5842C2.75309 14.5842 2.75299 14.5854 2.75263 14.5875L2.75309 14.5842ZM2.62757 14.8084C2.62334 14.8122 2.62252 14.8125 2.62643 14.8093L2.62757 14.8084ZM21.3723 14.8084L21.3735 14.8093C21.3774 14.8125 21.3766 14.8122 21.3723 14.8084ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L9.53028 15.5303C9.23738 15.8232 8.76251 15.8232 8.46962 15.5303C8.17672 15.2374 8.17672 14.7626 8.46962 14.4697L14.4696 8.46967C14.7625 8.17678 15.2374 8.17678 15.5303 8.46967Z" fill="#FF6347"></path><path d="M15.4999 14.5C15.4999 15.0523 15.0522 15.5 14.4999 15.5C13.9477 15.5 13.4999 15.0523 13.4999 14.5C13.4999 13.9477 13.9477 13.5 14.4999 13.5C15.0522 13.5 15.4999 13.9477 15.4999 14.5Z" fill="#FF6347"></path><path d="M10.4999 9.5C10.4999 10.0523 10.0522 10.5 9.49995 10.5C8.94766 10.5 8.49995 10.0523 8.49995 9.5C8.49995 8.94772 8.94766 8.5 9.49995 8.5C10.0522 8.5 10.4999 8.94772 10.4999 9.5Z" fill="#FF6347"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/couponlight.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CouponLight = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z" fill="#FF6347"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/clock.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Clock = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 9.56066L9.53033 12.0303C9.23744 12.3232 8.76256 12.3232 8.46967 12.0303C8.17678 11.7374 8.17678 11.2626 8.46967 10.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L15.5303 10.9697C15.8232 11.2626 15.8232 11.7374 15.5303 12.0303C15.2374 12.3232 14.7626 12.3232 14.4697 12.0303L12 9.56066ZM12 13.5607L9.53033 16.0303C9.23744 16.3232 8.76256 16.3232 8.46967 16.0303C8.17678 15.7374 8.17678 15.2626 8.46967 14.9697L11.4697 11.9697C11.7626 11.6768 12.2374 11.6768 12.5303 11.9697L15.5303 14.9697C15.8232 15.2626 15.8232 15.7374 15.5303 16.0303C15.2374 16.3232 14.7626 16.3232 14.4697 16.0303L12 13.5607Z" fill="#FF6347"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/upcost.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Upcost = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill="#FF6347"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#FF6347"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/icons/check.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Check = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Packet",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSection = ref("open");
    const selectedPacket = ref(null);
    const packets = [
      {
        src: "/packet/packet1.png",
        name: "ส่วนลดค่าอาหาร 50%",
        price: 400,
        description: [
          { text1: "จำนวน 5 ครั้ง", text2: "สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ", text3: "ใช้ได้ทุกร้านอาหาร", text4: "ระยะเวลา 14 วัน" }
        ]
      },
      {
        src: "/packet/packet1.png",
        name: "ส่วนลดค่าอาหาร ฿100",
        price: 169,
        description: [
          { text1: "จำนวน 5 ครั้ง", text2: "สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ", text3: "ใช้ได้ทุกร้านอาหาร", text4: "ระยะเวลา 14 วัน" }
        ]
      },
      {
        src: "/packet/packet2.png",
        name: "ส่วนลดส่งของ 50%",
        price: 159,
        description: [
          { text1: "จำนวน 5 ครั้ง", text2: "สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ", text3: "ใช้ได้ทุกร้านอาหาร", text4: "ระยะเวลา 14 วัน" }
        ]
      },
      {
        src: "/packet/packet2.png",
        name: "ส่วนลดส่งของ 25%",
        price: 99,
        description: [
          { text1: "จำนวน 5 ครั้ง", text2: "สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ", text3: "ใช้ได้ทุกร้านอาหาร", text4: "ระยะเวลา 14 วัน" }
        ]
      }
    ];
    const yourPackets = [
      { src: "/packet/packet1.png", name: "ส่วนลดค่าอาหาร 50%", price: 250 },
      { src: "/packet/packet1.png", name: "ส่วนลดค่าอาหาร ฿100", price: 160 },
      { src: "/packet/packet2.png", name: "ส่วนลดส่งของ 50%", price: 159 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pr-4 pl-4 font-prompt max-w-5xl mx-auto" }, _attrs))} data-v-bbc9797a><div class="flex mt-7" data-v-bbc9797a><div class="flex-1 flex flex-col cursor-pointer" data-v-bbc9797a><div class="flex justify-center" data-v-bbc9797a><h2 class="${ssrRenderClass({
        "text-[#FF6347]": unref(activeSection) === "open",
        "": unref(activeSection) !== "open"
      })}" data-v-bbc9797a>เลือกแพ็กเกจ</h2></div><div class="${ssrRenderClass({
        "border-[2px] border-[#FF6347] mt-1": unref(activeSection) === "open",
        "border-[1px] mt-1": unref(activeSection) !== "open"
      })}" data-v-bbc9797a></div></div><div class="flex-1 flex flex-col cursor-pointer" data-v-bbc9797a><div class="flex justify-center" data-v-bbc9797a><h2 class="${ssrRenderClass({
        "": unref(activeSection) === "open",
        "text-[#FF6347]": unref(activeSection) !== "open"
      })}" data-v-bbc9797a>แพ็กเกจของฉัน</h2></div><div class="${ssrRenderClass({
        "border-[1px] mt-1 ": unref(activeSection) === "open",
        "border-[2px] border-[#FF6347] mt-1": unref(activeSection) !== "open"
      })}" data-v-bbc9797a></div></div></div><button onclick="my_modal_2.showModal()" class="w-[88px] h-[28px] bg-white border-2 border-[#FF826C] rounded-lg mt-3" data-v-bbc9797a><div class="flex gap-2 mx-1" data-v-bbc9797a><svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbc9797a><path d="M6.78409 9.23709L3.03344 5.36931C2.7994 5.12797 2.94126 4.66659 3.24951 4.66659L10.7508 4.66659C11.0591 4.66659 11.2009 5.12797 10.9669 5.36931L7.21623 9.23709C7.0919 9.36531 6.90843 9.36531 6.78409 9.23709Z" fill="#FF826C" data-v-bbc9797a></path></svg><p class="text-[#FF826C]" data-v-bbc9797a>ประเภท</p></div></button><dialog id="my_modal_2" class="modal" data-v-bbc9797a><div class="modal-box absolute left-0 top-[52%] sm:left-[40%] sm:top-[30%] w-[360px] h-[340px]" data-v-bbc9797a><div class="flex flex-col" data-v-bbc9797a><div class="absolute top-2 left-[41%] sm:hidden" data-v-bbc9797a><div class="w-[61px] h-1 rounded-full bg-[#00000033]" data-v-bbc9797a></div></div><div class="mt-2 flex justify-center" data-v-bbc9797a><h3 class="text-lg font-light" data-v-bbc9797a>ประเภท</h3></div></div><div class="mt-4" data-v-bbc9797a><div class="form-control border-[1px] p-3 rounded-xl" data-v-bbc9797a><label class="label cursor-pointer" data-v-bbc9797a><div class="flex gap-5 pl-2" data-v-bbc9797a><svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbc9797a><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99502 4H14.005C17.7856 4 19.6759 4 20.8504 5.17157C21.6591 5.97823 21.911 7.12339 21.9894 8.98947C22.005 9.35954 22.0128 9.54458 21.9437 9.66803C21.8745 9.79147 21.5987 9.94554 21.0469 10.2537C20.4341 10.5959 20.0199 11.2497 20.0199 12C20.0199 12.7503 20.4341 13.4041 21.0469 13.7463C21.5987 14.0545 21.8745 14.2085 21.9437 14.332C22.0128 14.4554 22.005 14.6405 21.9894 15.0105C21.911 16.8766 21.6591 18.0218 20.8504 18.8284C19.6759 20 17.7856 20 14.005 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4ZM15.5478 8.46967C15.8415 8.76256 15.8415 9.23744 15.5478 9.53033L9.53289 15.5303C9.23927 15.8232 8.76321 15.8232 8.46959 15.5303C8.17596 15.2374 8.17596 14.7626 8.46959 14.4697L14.4845 8.46967C14.7782 8.17678 15.2542 8.17678 15.5478 8.46967ZM14.5149 15.5C15.0686 15.5 15.5174 15.0523 15.5174 14.5C15.5174 13.9477 15.0686 13.5 14.5149 13.5C13.9613 13.5 13.5124 13.9477 13.5124 14.5C13.5124 15.0523 13.9613 15.5 14.5149 15.5ZM9.50248 10.5C10.0561 10.5 10.505 10.0523 10.505 9.5C10.505 8.94772 10.0561 8.5 9.50248 8.5C8.94882 8.5 8.49999 8.94772 8.49999 9.5C8.49999 10.0523 8.94882 10.5 9.50248 10.5Z" fill="url(#paint0_linear_368_6455)" data-v-bbc9797a></path><defs data-v-bbc9797a><linearGradient id="paint0_linear_368_6455" x1="22.4934" y1="10.3889" x2="0.681839" y2="13.092" gradientUnits="userSpaceOnUse" data-v-bbc9797a><stop stop-color="#FF9684" data-v-bbc9797a></stop><stop offset="1" stop-color="#FF6347" data-v-bbc9797a></stop></linearGradient></defs></svg><h2 data-v-bbc9797a>สั่งอาหาร</h2></div><input type="checkbox" checked="checked" class="checkbox" data-v-bbc9797a></label></div></div><div class="mt-4" data-v-bbc9797a><div class="form-control border-[1px] p-3 rounded-xl" data-v-bbc9797a><label class="label cursor-pointer" data-v-bbc9797a><div class="flex gap-5 pl-2" data-v-bbc9797a>`);
      _push(ssrRenderComponent(Coupon, null, null, _parent));
      _push(`<h2 data-v-bbc9797a>ส่งของ</h2></div><input type="checkbox" checked="checked" class="checkbox" data-v-bbc9797a></label></div></div><div class="mt-4" data-v-bbc9797a><div class="form-control border-[1px] p-3 rounded-xl" data-v-bbc9797a><label class="label cursor-pointer" data-v-bbc9797a><div class="flex gap-5 pl-2" data-v-bbc9797a>`);
      _push(ssrRenderComponent(Coupon, null, null, _parent));
      _push(`<h2 data-v-bbc9797a>แรกเปลี่ยนสินค้า</h2></div><input type="checkbox" checked="checked" class="checkbox" data-v-bbc9797a></label></div></div></div><form method="dialog" class="modal-backdrop" data-v-bbc9797a><button data-v-bbc9797a>close</button></form></dialog>`);
      if (unref(activeSection) === "open") {
        _push(`<div class="mt-3" data-v-bbc9797a><!--[-->`);
        ssrRenderList(packets, (packet) => {
          _push(`<div data-v-bbc9797a><div class="w-full h-[90px] mt-2 flex bg-white shadow-lg rounded-xl" data-v-bbc9797a><div class="w-[120px]" data-v-bbc9797a><img${ssrRenderAttr("src", packet.src)}${ssrRenderAttr("alt", packet.name)} class="w-[120px] h-full object-cover rounded-l-xl shadow-md" data-v-bbc9797a></div><div class="p-3 w-[140px]" data-v-bbc9797a><p class="text-[12px] font-medium" data-v-bbc9797a>${ssrInterpolate(packet.name)}</p><p class="text-[14px] font-bold text-[#FF6347] mt-5" data-v-bbc9797a>เริ่มต้น ฿${ssrInterpolate(packet.price)}.-</p></div><div class="flex items-center justify-end w-[57px]" data-v-bbc9797a><button class="w-[26px] h-[26px] bg-[#FF96843D] rounded-full flex justify-center items-center" data-v-bbc9797a><svg class="" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbc9797a><path fill-rule="evenodd" clip-rule="evenodd" d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z" fill="#FF826C" data-v-bbc9797a></path></svg></button></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedPacket)) {
        _push(`<div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40" data-v-bbc9797a><div class="w-[375px] h-[500px] bg-white rounded-t-xl sm:rounded-xl absolute bottom-0 sm:bottom-[25%]" data-v-bbc9797a><div class="flex flex-col" data-v-bbc9797a><div class="absolute top-2 left-[41%] sm:hidden" data-v-bbc9797a><div class="w-[61px] h-1 rounded-full bg-[#00000033]" data-v-bbc9797a></div></div><div class="mt-2 flex justify-center" data-v-bbc9797a><h3 class="text-lg font-light mt-5" data-v-bbc9797a>${ssrInterpolate(unref(selectedPacket).name)}</h3></div></div><div class="flex flex-col mt-3 absolute top-[15%] left-[15%]" data-v-bbc9797a><div class="flex gap-3" data-v-bbc9797a>`);
        _push(ssrRenderComponent(CouponLight, null, null, _parent));
        _push(`<h2 data-v-bbc9797a>${ssrInterpolate(unref(selectedPacket).description[0].text1)}</h2></div><div class="flex gap-3 mt-6" data-v-bbc9797a>`);
        _push(ssrRenderComponent(Upcost, null, null, _parent));
        _push(`<p data-v-bbc9797a>${ssrInterpolate(unref(selectedPacket).description[0].text2)}</p></div><div class="flex gap-3 mt-6" data-v-bbc9797a>`);
        _push(ssrRenderComponent(Check, null, null, _parent));
        _push(`<p data-v-bbc9797a>${ssrInterpolate(unref(selectedPacket).description[0].text3)}</p></div><div class="flex gap-3 mt-6" data-v-bbc9797a>`);
        _push(ssrRenderComponent(Clock, null, null, _parent));
        _push(`<p data-v-bbc9797a>${ssrInterpolate(unref(selectedPacket).description[0].text4)}</p></div></div><div class="cursor-pointer absolute bottom-[30%] left-5 h-[53px] w-[330px] bg-[#FF6347] mt-6 rounded-3xl" data-v-bbc9797a><div class="flex justify-between p-4" data-v-bbc9797a><p class="font-medium text-[18px] text-white" data-v-bbc9797a>ซื้อแพ็กเกจนี้</p><p class="font-medium text-[18px] text-white" data-v-bbc9797a>฿${ssrInterpolate(unref(selectedPacket).price)}.00</p></div></div><div class="cursor-pointer absolute bottom-[21%] left-[45%]" data-v-bbc9797a><p class="text-[18px] text-[#0D1217] text-opacity-40" data-v-bbc9797a>ยกเลิก</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSection) === "yourpacket") {
        _push(`<div class="mt-3" data-v-bbc9797a><!--[-->`);
        ssrRenderList(yourPackets, (packet) => {
          _push(`<div data-v-bbc9797a><div class="w-full h-[90px] mt-2 flex bg-white shadow-lg rounded-xl" data-v-bbc9797a><div class="w-[120px]" data-v-bbc9797a><img${ssrRenderAttr("src", packet.src)}${ssrRenderAttr("alt", packet.name)} class="w-[120px] h-full object-cover rounded-l-xl shadow-md" data-v-bbc9797a></div><div class="p-3 w-[140px]" data-v-bbc9797a><p class="text-[12px] font-medium" data-v-bbc9797a>${ssrInterpolate(packet.name)}</p><p class="text-[14px] font-bold text-[#FF6347] mt-5" data-v-bbc9797a>เริ่มต้น ฿${ssrInterpolate(packet.price)}.-</p></div><div class="flex items-center justify-end w-[57px]" data-v-bbc9797a><div class="w-[26px] h-[26px] bg-[#FF96843D] rounded-full flex justify-center items-center" data-v-bbc9797a><svg class="" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbc9797a><path fill-rule="evenodd" clip-rule="evenodd" d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z" fill="#FF826C" data-v-bbc9797a></path></svg></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/Packet.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Packet = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bbc9797a"]]);
const _sfc_main$1 = {
  __name: "userLayoutsNoNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-7xl mt-5 pb-24" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(Menu), { class: "fixed bottom-5 left-0 right-0 z-50" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/userLayoutsNoNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pr-4 pl-10 pt-4 flex font-prompt mx-auto max-w-7xl mt-6" data-v-bed23953${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bed23953${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z" fill="#0D1217" data-v-bed23953${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      width: "26",
                      height: "26",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z",
                        fill: "#0D1217"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-1 mt-2" data-v-bed23953${_scopeId}><h2 class="text-3xl mx-16 font-bold" data-v-bed23953${_scopeId}>แพ็กเกจ</h2></div></div>`);
            _push2(ssrRenderComponent(unref(Packet), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "pr-4 pl-10 pt-4 flex font-prompt mx-auto max-w-7xl mt-6" }, [
                createVNode(_component_RouterLink, {
                  to: "/",
                  class: "flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      width: "26",
                      height: "26",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z",
                        fill: "#0D1217"
                      })
                    ]))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1 mt-2" }, [
                  createVNode("h2", { class: "text-3xl mx-16 font-bold" }, "แพ็กเกจ")
                ])
              ]),
              createVNode(unref(Packet))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/packet/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bed23953"]]);
export {
  index as default
};
//# sourceMappingURL=index-aEWv2fyv.js.map
