import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'pinia';
import 'vue-router';
import '@prisma/client';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const otpInputs = ref(["", "", "", "", "", ""]);
    const buttonClass = computed(() => {
      const isComplete = otpInputs.value.every((digit) => digit !== "");
      return isComplete ? "bg-[#FF6347]" : "bg-[#FFCFC6]";
    });
    const isButtonDisabled = computed(() => {
      return !otpInputs.value.every((digit) => digit !== "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen flex items-center justify-center font-prompt" }, _attrs))} data-v-4cbd97c6><div class="absolute top-[78px] w-[288px] h-[204px] flex flex-col gap-[32px]" data-v-4cbd97c6><div class="w-full h-[42px] flex justify-between items-center" data-v-4cbd97c6><div class="w-[42px] h-[42px] min-w-[42px] min-h-[42px] rounded-[22px] flex items-center gap-[10px]" data-v-4cbd97c6><button class="w-[26px] h-[26px] flex justify-center items-center" type="button" aria-label="\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A" data-v-4cbd97c6><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4cbd97c6><path fill-rule="evenodd" clip-rule="evenodd" d="M8.40802 0.925476C8.72532 1.24278 8.72532 1.75722 8.40802 2.07452L3.29504 7.1875H18.6668C19.1156 7.1875 19.4793 7.55127 19.4793 8C19.4793 8.44873 19.1156 8.8125 18.6668 8.8125H3.29504L8.40802 13.9255C8.72532 14.2428 8.72532 14.7572 8.40802 15.0745C8.09072 15.3918 7.57627 15.3918 7.25897 15.0745L0.758972 8.57452C0.441671 8.25722 0.441671 7.74278 0.758972 7.42548L7.25897 0.925476C7.57627 0.608175 8.09072 0.608175 8.40802 0.925476Z" fill="#0D1217" data-v-4cbd97c6></path></svg></button></div><div class="w-[92px] h-[33px] text-center font-extrabold text-[22px] leading-[33.26px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] bg-clip-text text-transparent" data-v-4cbd97c6> \u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19 </div><div class="w-[42px] h-[42px] min-w-[42px] min-h-[42px] rounded-[22px] flex items-center gap-[10px]" data-v-4cbd97c6></div></div><div class="w-[288px] h-[24px] text-center font-normal text-[16px] leading-[24.19px] text-[#0D1217]" data-v-4cbd97c6><span data-v-4cbd97c6>\u0E2A\u0E48\u0E07\u0E42\u0E04\u0E49\u0E14\u0E44\u0E1B\u0E17\u0E35\u0E48 (+66) 66 **** *649 \u0E41\u0E25\u0E49\u0E27</span></div><div class="w-[288px] h-[74px] flex justify-between" data-v-4cbd97c6><!--[-->`);
      ssrRenderList(unref(otpInputs), (digit, index2) => {
        _push(`<input${ssrRenderAttr("value", unref(otpInputs)[index2])} type="text" inputmode="numeric" maxlength="1" class="w-[45px] h-[74px] rounded-[8px] border border-solid text-center outline-none flex-shrink-0 font-prompt font-semibold text-[40px] leading-[60.48px]" data-v-4cbd97c6>`);
      });
      _push(`<!--]--></div></div><div class="w-[98px] h-[24px] absolute top-[294px] flex items-center justify-center font-prompt font-normal text-[16px] leading-[24.19px] text-center text-[#FF6347]" data-v-4cbd97c6> \u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07! </div><div class="absolute top-[342px] w-[288px] flex flex-col gap-[24px]" data-v-4cbd97c6><div class="w-[288px] h-[24px] font-normal text-[16px] leading-[24.19px] font-prompt text-center" data-v-4cbd97c6> \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E2B\u0E31\u0E2A OTP? </div><div class="w-[288px] h-[24px] flex justify-center items-center gap-[16px]" data-v-4cbd97c6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4cbd97c6><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 2.29167C5.74313 2.29167 2.29199 5.7428 2.29199 10C2.29199 14.2572 5.74313 17.7083 10.0003 17.7083C14.2575 17.7083 17.7087 14.2572 17.7087 10C17.7087 5.7428 14.2575 2.29167 10.0003 2.29167ZM1.04199 10C1.04199 5.05245 5.05277 1.04167 10.0003 1.04167C14.9479 1.04167 18.9587 5.05245 18.9587 10C18.9587 14.9475 14.9479 18.9583 10.0003 18.9583C5.05277 18.9583 1.04199 14.9475 1.04199 10ZM10.0003 6.04167C10.3455 6.04167 10.6253 6.32149 10.6253 6.66667V9.74112L12.5256 11.6414C12.7697 11.8855 12.7697 12.2812 12.5256 12.5253C12.2815 12.7694 11.8858 12.7694 11.6417 12.5253L9.55838 10.4419C9.44117 10.3247 9.37533 10.1658 9.37533 10V6.66667C9.37533 6.32149 9.65515 6.04167 10.0003 6.04167Z" fill="#0D1217" data-v-4cbd97c6></path></svg><div class="w-[60px] h-[24px] text-center font-prompt font-semibold text-[16px] leading-[24.19px]" data-v-4cbd97c6><span data-v-4cbd97c6>00 : 45</span></div></div><div class="w-[288px] h-[24px] text-center font-prompt font-semibold text-[16px] leading-[24.19px]" data-v-4cbd97c6><a class="text-[#FF6347] hover:underline cursor-pointer" data-v-4cbd97c6>\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07</a></div></div><button class="${ssrRenderClass([unref(buttonClass), "absolute top-[496px] w-[288px] h-[53px] rounded-[28px] px-[22px] flex items-center justify-center gap-[14px] text-white font-semibold text-[18px] leading-[27.22px] text-center"])}"${ssrIncludeBooleanAttr(unref(isButtonDisabled)) ? " disabled" : ""} data-v-4cbd97c6> \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A </button><div class="h-[24px] absolute top-[573px] font-prompt font-normal text-[14px] leading-[21.17px] pb-[72px]" data-v-4cbd97c6> \u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48 <a class="text-[#FF6347] hover:underline cursor-pointer text-[14px] leading-[21.17px] font-semibold" data-v-4cbd97c6>\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A</a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/otp/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4cbd97c6"]]);

export { index as default };
//# sourceMappingURL=index-BkDGrXbO.mjs.map
