import { ref, useSSRContext, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock } from "vue";
import { ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./userLayouts-ByKcYFm7.js";
import { S as Search } from "./Search-CVdpZGFx.js";
import { R as RecommendedShops } from "./RecommendedShops-193tPTgS.js";
import { P as ProductSale } from "./ProductSale-DAwI4Pe5.js";
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_2$1, P as Promotion } from "./Menu-BqSZ5h8J.js";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "@heroicons/vue/24/solid";
import "ofetch";
import "#internal/nuxt/paths";
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
const _imports_0 = "" + __buildAssetsURL("Orderfood.Bgw8Sagc.png");
const _imports_1 = "" + __buildAssetsURL("shopping.8WGayXZu.png");
const _imports_2 = "" + __buildAssetsURL("packet.CRs6qAYD.png");
const totalSlides = 4;
const _sfc_main$2 = {
  __name: "PromotionSlide",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="carousel-container overflow-hidden relative" data-v-8c6eff6e><div class="carousel-inner flex transition-transform duration-500 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 18.3}%)` })}" data-v-8c6eff6e><div class="promotion-container flex space-x-4 p-4" data-v-8c6eff6e><div class="flex gap-5" data-v-8c6eff6e><div class="promotion-background font-prompt h-[144px] w-[254px] rounded-xl relative overflow-hidden" data-v-8c6eff6e><div class="text-white" data-v-8c6eff6e><h1 class="text-[10px]" data-v-8c6eff6e>สั่งเครื่องดื่มวันนี้</h1><h1 class="text-[18px] font-bold" data-v-8c6eff6e>ได้ส่วนลด</h1></div><div class="text-white absolute bottom-5 left-5" data-v-8c6eff6e><h1 class="text-[18px] font-bold" data-v-8c6eff6e>40%</h1></div><div class="absolute top-0 right-0 w-[110px] h-[165px] overflow-hidden" data-v-8c6eff6e><img${ssrRenderAttr("src", _imports_0$1)} alt="photo-promotion1" class="object-cover w-full h-full" data-v-8c6eff6e></div></div><div class="promotion-background-2 font-prompt h-[144px] w-[254px] rounded-xl relative overflow-hidden" data-v-8c6eff6e><div class="text-white" data-v-8c6eff6e><h1 class="text-[10px]" data-v-8c6eff6e>ลดแรง</h1><h1 class="text-[18px] font-bold" data-v-8c6eff6e>สั่งอาหารมื้อนี้</h1></div><div class="text-white absolute bottom-5 left-5" data-v-8c6eff6e><h1 class="text-[10px]" data-v-8c6eff6e>ได้ลดหลายต่อ</h1></div></div><div class="main-container relative w-[254px] h-[144px] mx-auto rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#13c296] to-[#095c47] font-prompt" data-v-8c6eff6e><div class="image-wrapper absolute top-1/2 left-[140px] w-[272px] h-[181px] transform -translate-y-[49.72%] rounded-l-full overflow-hidden border-[20px] border-white/20" data-v-8c6eff6e><div class="image w-[218px] h-[145px] -mx-2" data-v-8c6eff6e><img${ssrRenderAttr("src", _imports_1$1)} alt="promotion" class="h-40" data-v-8c6eff6e></div></div><div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10" data-v-8c6eff6e><h1 class="text-white text-[10px]" data-v-8c6eff6e>วันนี้</h1><div class="reduce-percent font-inter text-[25px] font-bold leading-[30px] text-left text-white mt-1" data-v-8c6eff6e><h1 class="whitespace-nowrap" data-v-8c6eff6e>ลดมากถึง</h1><span class="text-[#92e3cf]" data-v-8c6eff6e>60%</span></div><div class="text-white absolute bottom-0 left-0" data-v-8c6eff6e><h1 class="text-[10px]" data-v-8c6eff6e>หมวดอาหารสุขภาพ</h1></div></div></div><div class="main-container relative w-[254px] h-[144px] p-4 rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#ff9684] to-[#ffcfc6] font-prompt" data-v-8c6eff6e><div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10" data-v-8c6eff6e><h1 class="text-white text-[10px]" data-v-8c6eff6e>ขนมหวานยอดนิยม</h1><div class="reduce-percent font-inter text-[25px] font-bold leading-[30px] text-left text-white mt-1" data-v-8c6eff6e><h1 data-v-8c6eff6e>ซื้อ 1</h1><h1 data-v-8c6eff6e>แถม 1</h1></div><div class="text-white absolute bottom-0 left-0" data-v-8c6eff6e><h1 class="text-[10px]" data-v-8c6eff6e>หมวดเค้ก - ขนมหวาน</h1></div></div><div class="absolute top-0 right-0 w-[160px] h-[124px] overflow-hidden" data-v-8c6eff6e><img${ssrRenderAttr("src", _imports_2$1)} alt="photo-promotion1" class="object-cover w-full h-full" data-v-8c6eff6e></div></div></div></div></div></div><div class="pl-4" data-v-8c6eff6e><!--[-->`);
      ssrRenderList(totalSlides, (n) => {
        _push(`<span class="${ssrRenderClass(["dot cursor-pointer h-[10px] w-[10px] mx-[2px] rounded-full inline-block transition-colors duration-600 ease-in-out", { "bg-gray-600": n - 1 === currentSlide.value, "bg-gray-400": n - 1 !== currentSlide.value }])}" data-v-8c6eff6e></span>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/PromotionSlide.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PromotionSlide = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8c6eff6e"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="flex flex-col mt-3 font-prompt" data-v-8ab88f55><div class="flex p-4" data-v-8ab88f55><div data-v-8ab88f55><svg class="sm:w-[48px] sm:h-[48px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8ab88f55><path opacity="0.5" d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013Z" fill="#FF826C" data-v-8ab88f55></path><path d="M8 18.4442C8 21.064 10.1113 21.8742 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013C13.871 21.4343 15 20.4922 15 18.4442C15 17.1465 14.1814 16.3459 13.5401 15.9711C13.3439 15.8564 13.1161 16.0008 13.0985 16.2273C13.0429 16.9454 12.3534 17.5174 11.8836 16.9714C11.4685 16.4889 11.2941 15.784 11.2941 15.3331V14.7439C11.2941 14.3887 10.9365 14.1533 10.631 14.3346C9.49507 15.0085 8 16.3949 8 18.4442Z" fill="#FF826C" data-v-8ab88f55></path></svg></div><div class="font-prompt mx-2 mt-0" data-v-8ab88f55><h1 class="font-bold sm:mt-3 sm:text-2xl text-[16px]" data-v-8ab88f55>เก็บคูปองส่วนลด</h1></div></div></div><div class="flex pl-5 pt-2 gap-4 overflow-x-auto font-prompt" data-v-8ab88f55><div class="sm:min-w-[200px] sm:h-[130px] min-w-[134px] h-[100px] bg-[#FF7648] rounded-3xl relative" data-v-8ab88f55><div data-v-8ab88f55><svg class="sm:right-0 sm:h-[149px] sm:w-[200px] absolute" width="134" height="100" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8ab88f55><mask id="mask0_226_3014" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="100" data-v-8ab88f55><rect width="134" height="100" rx="16" fill="#FF7648" data-v-8ab88f55></rect></mask><g mask="url(#mask0_226_3014)" data-v-8ab88f55><path fill-rule="evenodd" clip-rule="evenodd" d="M129.633 -69.246C143.356 -70.2046 160.298 -76.5662 169.855 -67.3133C179.75 -57.7336 170.568 -41.6545 171.829 -28.393C172.71 -19.1279 177.135 -10.7206 176.118 -1.46767C174.87 9.88347 173.238 21.6553 165.369 30.3809C156.233 40.5107 143.722 48.6073 129.633 50.076C114.748 51.6277 98.6112 47.9675 87.5926 38.4888C77.0178 29.3919 76.7608 14.5641 73.2194 1.54686C69.9518 -10.4641 63.9723 -22.49 67.7727 -34.3633C71.613 -46.3616 82.0795 -55.5136 93.5541 -61.9841C104.351 -68.0725 117.057 -68.3677 129.633 -69.246Z" fill="#FFC278" data-v-8ab88f55></path></g></svg></div><div class="p-4" data-v-8ab88f55><svg class="sm:w-9 sm:h-9" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8ab88f55><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99502 3H13.005C16.7856 3 18.6759 3 19.8504 4.17157C20.6591 4.97823 20.911 6.12339 20.9894 7.98947C21.005 8.35954 21.0128 8.54458 20.9437 8.66803C20.8745 8.79147 20.5987 8.94554 20.0469 9.25366C19.4341 9.59586 19.0199 10.2497 19.0199 11C19.0199 11.7503 19.4341 12.4041 20.0469 12.7463C20.5987 13.0545 20.8745 13.2085 20.9437 13.332C21.0128 13.4554 21.005 13.6405 20.9894 14.0105C20.911 15.8766 20.6591 17.0218 19.8504 17.8284C18.6759 19 16.7856 19 13.005 19H8.99502C5.21438 19 3.32407 19 2.14958 17.8284C1.34091 17.0218 1.08903 15.8766 1.01058 14.0105C0.995019 13.6405 0.987239 13.4554 1.05634 13.332C1.12545 13.2085 1.40133 13.0545 1.95308 12.7463C2.56586 12.4041 2.98007 11.7503 2.98007 11C2.98007 10.2497 2.56586 9.59586 1.95308 9.25366C1.40133 8.94554 1.12545 8.79147 1.05634 8.66802C0.987239 8.54458 0.995019 8.35954 1.01058 7.98947C1.08903 6.12339 1.34091 4.97823 2.14958 4.17157C3.32407 3 5.21439 3 8.99502 3ZM14.5478 7.46967C14.8415 7.76256 14.8415 8.23744 14.5478 8.53033L8.53289 14.5303C8.23927 14.8232 7.76321 14.8232 7.46959 14.5303C7.17596 14.2374 7.17596 13.7626 7.46959 13.4697L13.4845 7.46967C13.7782 7.17678 14.2542 7.17678 14.5478 7.46967ZM13.5149 14.5C14.0686 14.5 14.5174 14.0523 14.5174 13.5C14.5174 12.9477 14.0686 12.5 13.5149 12.5C12.9613 12.5 12.5124 12.9477 12.5124 13.5C12.5124 14.0523 12.9613 14.5 13.5149 14.5ZM8.50248 9.5C9.05614 9.5 9.50497 9.05228 9.50497 8.5C9.50497 7.94772 9.05614 7.5 8.50248 7.5C7.94882 7.5 7.49999 7.94772 7.49999 8.5C7.49999 9.05228 7.94882 9.5 8.50248 9.5Z" fill="white" data-v-8ab88f55></path></svg></div><div class="text-white font-bold pl-4" data-v-8ab88f55><h2 class="text-[14px]" data-v-8ab88f55>ร้านแนะนำ</h2><h2 class="text-[14px]" data-v-8ab88f55>฿ 100.-</h2></div></div><div class="sm:min-w-[200px] sm:h-[130px] min-w-[135px] h-[100px] bg-[#FF9684] rounded-3xl relative" data-v-8ab88f55><div data-v-8ab88f55><svg class="sm:right-0 sm:h-[149px] sm:w-[200px] absolute" width="134" height="100" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8ab88f55><mask id="mask0_226_3054" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="100" data-v-8ab88f55><rect width="134" height="100" rx="16" fill="#FF9900" data-v-8ab88f55></rect></mask><g mask="url(#mask0_226_3054)" data-v-8ab88f55><path fill-rule="evenodd" clip-rule="evenodd" d="M118.016 -90.4538C133.724 -94.7392 150.649 -86.2448 163.71 -77.0651C176.612 -67.9969 183.916 -54.2816 189.546 -40.1799C195.405 -25.5028 203.411 -9.1186 196.544 5.17572C189.77 19.2772 170.207 22.1153 155.874 29.9128C143.336 36.7343 132.541 47.8124 118.016 47.8984C103.458 47.9846 89.4901 40.4756 79.8064 30.3631C71.1205 21.2926 73.8614 7.50069 68.6615 -3.64209C62.5733 -16.6886 41.9423 -26.6017 46.9525 -40.0392C51.9967 -53.5677 76.1348 -47.8291 88.3745 -56.5123C101.147 -65.5735 102.602 -86.2487 118.016 -90.4538Z" fill="#FF6347" data-v-8ab88f55></path></g></svg></div><div class="p-4" data-v-8ab88f55><svg class="sm:w-9 sm:h-9" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8ab88f55><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99502 3H13.005C16.7856 3 18.6759 3 19.8504 4.17157C20.6591 4.97823 20.911 6.12339 20.9894 7.98947C21.005 8.35954 21.0128 8.54458 20.9437 8.66803C20.8745 8.79147 20.5987 8.94554 20.0469 9.25366C19.4341 9.59586 19.0199 10.2497 19.0199 11C19.0199 11.7503 19.4341 12.4041 20.0469 12.7463C20.5987 13.0545 20.8745 13.2085 20.9437 13.332C21.0128 13.4554 21.005 13.6405 20.9894 14.0105C20.911 15.8766 20.6591 17.0218 19.8504 17.8284C18.6759 19 16.7856 19 13.005 19H8.99502C5.21438 19 3.32407 19 2.14958 17.8284C1.34091 17.0218 1.08903 15.8766 1.01058 14.0105C0.995019 13.6405 0.987239 13.4554 1.05634 13.332C1.12545 13.2085 1.40133 13.0545 1.95308 12.7463C2.56586 12.4041 2.98007 11.7503 2.98007 11C2.98007 10.2497 2.56586 9.59586 1.95308 9.25366C1.40133 8.94554 1.12545 8.79147 1.05634 8.66802C0.987239 8.54458 0.995019 8.35954 1.01058 7.98947C1.08903 6.12339 1.34091 4.97823 2.14958 4.17157C3.32407 3 5.21439 3 8.99502 3ZM14.5478 7.46967C14.8415 7.76256 14.8415 8.23744 14.5478 8.53033L8.53289 14.5303C8.23927 14.8232 7.76321 14.8232 7.46959 14.5303C7.17596 14.2374 7.17596 13.7626 7.46959 13.4697L13.4845 7.46967C13.7782 7.17678 14.2542 7.17678 14.5478 7.46967ZM13.5149 14.5C14.0686 14.5 14.5174 14.0523 14.5174 13.5C14.5174 12.9477 14.0686 12.5 13.5149 12.5C12.9613 12.5 12.5124 12.9477 12.5124 13.5C12.5124 14.0523 12.9613 14.5 13.5149 14.5ZM8.50248 9.5C9.05614 9.5 9.50497 9.05228 9.50497 8.5C9.50497 7.94772 9.05614 7.5 8.50248 7.5C7.94882 7.5 7.49999 7.94772 7.49999 8.5C7.49999 9.05228 7.94882 9.5 8.50248 9.5Z" fill="white" data-v-8ab88f55></path></svg></div><div class="text-white font-bold pl-4" data-v-8ab88f55><h2 class="text-[14px]" data-v-8ab88f55>สั่งเยอะ ลดทันที</h2><h2 class="text-[14px]" data-v-8ab88f55>฿ 300.-</h2></div></div><div class="sm:min-w-[200px] sm:h-[130px] min-w-[135px] h-[100px] bg-red-200 rounded-3xl" data-v-8ab88f55></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/DiscountCoupon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DiscountCoupon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8ab88f55"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isDesktop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_sfc_main$3, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:mx-3 mx-0" data-v-c882cdd7${_scopeId}>`);
            if (unref(isDesktop)) {
              _push2(ssrRenderComponent(Promotion, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(PromotionSlide, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="mt-5" data-v-c882cdd7${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Search), null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center" data-v-c882cdd7${_scopeId}><div class="grid grid-cols-3 gap-5 p-3 mt-5 font-prompt" data-v-c882cdd7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/orderfood",
              class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #FF96843D, transparent)" })}" data-v-c882cdd7${_scopeId2}></div><div class="relative flex items-center justify-center w-full h-full z-10" data-v-c882cdd7${_scopeId2}><div data-v-c882cdd7${_scopeId2}><div class="flex justify-center items-center" data-v-c882cdd7${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]" data-v-c882cdd7${_scopeId2}></div><div class="mt-1" data-v-c882cdd7${_scopeId2}><h1 class="sm:text-lg text-[14px] text-white" data-v-c882cdd7${_scopeId2}>สั่งอาหาร</h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                      style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                    }),
                    createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-center items-center" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "orderfood",
                            class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                          })
                        ]),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "สั่งอาหาร")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/ordershop",
              class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #FF96843D, transparent)" })}" data-v-c882cdd7${_scopeId2}></div><div class="relative flex items-center justify-center w-full h-full z-10" data-v-c882cdd7${_scopeId2}><div data-v-c882cdd7${_scopeId2}><div class="flex justify-center items-center" data-v-c882cdd7${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]" data-v-c882cdd7${_scopeId2}></div><div class="mt-1" data-v-c882cdd7${_scopeId2}><h1 class="sm:text-lg text-[14px] text-white" data-v-c882cdd7${_scopeId2}>สั่งของ</h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                      style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                    }),
                    createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-center items-center" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "orderfood",
                            class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                          })
                        ]),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "สั่งของ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/packet",
              class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #FF96843D, transparent)" })}" data-v-c882cdd7${_scopeId2}></div><div class="relative flex items-center justify-center w-full h-full z-10" data-v-c882cdd7${_scopeId2}><div data-v-c882cdd7${_scopeId2}><div class="flex justify-center items-center" data-v-c882cdd7${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]" data-v-c882cdd7${_scopeId2}></div><div class="mt-1" data-v-c882cdd7${_scopeId2}><h1 class="sm:text-lg text-[14px] text-white" data-v-c882cdd7${_scopeId2}>แพ็กเกจ</h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                      style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                    }),
                    createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-center items-center" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "orderfood",
                            class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                          })
                        ]),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "แพ็กเกจ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex mt-5 font-prompt" data-v-c882cdd7${_scopeId}><div class="flex-1 flex p-4" data-v-c882cdd7${_scopeId}><div data-v-c882cdd7${_scopeId}><svg class="sm:w-[48px] sm:h-[48px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c882cdd7${_scopeId}><path d="M18.9983 18H5.00169C5.01188 19.3969 5.08343 20.9119 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C18.9166 20.9119 18.9881 19.3969 18.9983 18Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path><path opacity="0.5" d="M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V18H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path></svg></div><div class="font-prompt mx-2 mt-0" data-v-c882cdd7${_scopeId}><h1 class="font-bold sm:mt-2 sm:text-2xl text-[16px]" data-v-c882cdd7${_scopeId}>รวมร้านแนะนำ</h1></div></div>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/recommendedshops",
              class: "p-3 flex-1 flex font-prompt justify-end mt-1 sm:mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" data-v-c882cdd7${_scopeId2}>ดูทั้งหมด</h1><svg class="sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-c882cdd7${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-c882cdd7${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("h1", { class: "font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" }, "ดูทั้งหมด"),
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(RecommendedShops, null, null, _parent2, _scopeId));
            _push2(`<div class="flex mt-3 font-prompt" data-v-c882cdd7${_scopeId}><div class="flex-1 flex p-4" data-v-c882cdd7${_scopeId}><div data-v-c882cdd7${_scopeId}><svg class="sm:w-[48px] sm:h-[48px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c882cdd7${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M1.28849 2.76303C1.41947 2.37008 1.84421 2.15771 2.23717 2.28869L2.50208 2.37699C2.51528 2.38139 2.52844 2.38578 2.54156 2.39015C3.16793 2.59892 3.69726 2.77534 4.11349 2.96898C4.55593 3.1748 4.93982 3.42989 5.23092 3.83377C5.52201 4.23764 5.64262 4.6825 5.69797 5.16732C5.75004 5.62343 5.75002 6.18138 5.75 6.84163L5.75 9.5002C5.75 10.9356 5.75159 11.9367 5.85315 12.6921C5.9518 13.4259 6.13225 13.8144 6.40901 14.0912C6.68577 14.368 7.07435 14.5484 7.80812 14.6471C8.56347 14.7486 9.56458 14.7502 11 14.7502H18C18.4142 14.7502 18.75 15.086 18.75 15.5002C18.75 15.9144 18.4142 16.2502 18 16.2502H10.9451C9.57754 16.2502 8.47522 16.2502 7.60825 16.1337C6.70814 16.0127 5.95027 15.7538 5.34835 15.1519C4.74643 14.5499 4.48754 13.7921 4.36652 12.892C4.24996 12.025 4.24998 10.9227 4.25 9.55508L4.25 6.88324C4.25 6.17024 4.24887 5.69848 4.20765 5.33747C4.16862 4.99562 4.10047 4.83074 4.01405 4.71083C3.92763 4.59093 3.79276 4.47414 3.4808 4.32901C3.15135 4.17575 2.70415 4.02549 2.02774 3.80002L1.76283 3.71172C1.36987 3.58073 1.1575 3.15599 1.28849 2.76303Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path><path opacity="0.5" d="M5.74525 6C5.75022 6.25912 5.75021 6.53957 5.7502 6.8414L5.7502 9.5C5.7502 10.9354 5.75179 11.9365 5.85335 12.6919C5.86817 12.8021 5.88484 12.9046 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7523C18.2128 12.5045 18.4017 12.0636 18.7797 11.1818L19.2082 10.1818C20.0177 8.29294 20.4225 7.34853 19.9779 6.67426C19.5333 6 18.5058 6 16.4508 6H5.74525Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path><path d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path><path d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z" fill="#FF826C" data-v-c882cdd7${_scopeId}></path></svg></div><div class="font-prompt mx-2 mt-0" data-v-c882cdd7${_scopeId}><h1 class="font-bold sm:mt-2 sm:text-2xl text-[16px]" data-v-c882cdd7${_scopeId}>สินค้าลดราคา</h1></div></div>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/productsale",
              class: "p-3 flex-1 flex font-prompt justify-end mt-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" data-v-c882cdd7${_scopeId2}>ดูทั้งหมด</h1><svg class="sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-v-c882cdd7${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-c882cdd7${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("h1", { class: "font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" }, "ดูทั้งหมด"),
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(ProductSale, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DiscountCoupon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "sm:mx-3 mx-0" }, [
                unref(isDesktop) ? (openBlock(), createBlock(Promotion, { key: 0 })) : (openBlock(), createBlock(PromotionSlide, { key: 1 }))
              ]),
              createVNode("div", { class: "mt-5" }, [
                createVNode(unref(Search))
              ]),
              createVNode("div", { class: "flex justify-center" }, [
                createVNode("div", { class: "grid grid-cols-3 gap-5 p-3 mt-5 font-prompt" }, [
                  createVNode(_component_RouterLink, {
                    to: "/orderfood",
                    class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                        style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                      }),
                      createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex justify-center items-center" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "orderfood",
                              class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                            })
                          ]),
                          createVNode("div", { class: "mt-1" }, [
                            createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "สั่งอาหาร")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_RouterLink, {
                    to: "/ordershop",
                    class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                        style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                      }),
                      createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex justify-center items-center" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "orderfood",
                              class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                            })
                          ]),
                          createVNode("div", { class: "mt-1" }, [
                            createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "สั่งของ")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_RouterLink, {
                    to: "/packet",
                    class: "sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]",
                        style: { "background": "linear-gradient(180deg, #FF96843D, transparent)" }
                      }),
                      createVNode("div", { class: "relative flex items-center justify-center w-full h-full z-10" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex justify-center items-center" }, [
                            createVNode("img", {
                              src: _imports_2,
                              alt: "orderfood",
                              class: "sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]"
                            })
                          ]),
                          createVNode("div", { class: "mt-1" }, [
                            createVNode("h1", { class: "sm:text-lg text-[14px] text-white" }, "แพ็กเกจ")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "flex mt-5 font-prompt" }, [
                createVNode("div", { class: "flex-1 flex p-4" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[48px] sm:h-[48px]",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M18.9983 18H5.00169C5.01188 19.3969 5.08343 20.9119 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C18.9166 20.9119 18.9881 19.3969 18.9983 18Z",
                        fill: "#FF826C"
                      }),
                      createVNode("path", {
                        opacity: "0.5",
                        d: "M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V18H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z",
                        fill: "#FF826C"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "font-prompt mx-2 mt-0" }, [
                    createVNode("h1", { class: "font-bold sm:mt-2 sm:text-2xl text-[16px]" }, "รวมร้านแนะนำ")
                  ])
                ]),
                createVNode(_component_RouterLink, {
                  to: "/recommendedshops",
                  class: "p-3 flex-1 flex font-prompt justify-end mt-1 sm:mt-2"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" }, "ดูทั้งหมด"),
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ]),
                  _: 1
                })
              ]),
              createVNode(RecommendedShops),
              createVNode("div", { class: "flex mt-3 font-prompt" }, [
                createVNode("div", { class: "flex-1 flex p-4" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[48px] sm:h-[48px]",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M1.28849 2.76303C1.41947 2.37008 1.84421 2.15771 2.23717 2.28869L2.50208 2.37699C2.51528 2.38139 2.52844 2.38578 2.54156 2.39015C3.16793 2.59892 3.69726 2.77534 4.11349 2.96898C4.55593 3.1748 4.93982 3.42989 5.23092 3.83377C5.52201 4.23764 5.64262 4.6825 5.69797 5.16732C5.75004 5.62343 5.75002 6.18138 5.75 6.84163L5.75 9.5002C5.75 10.9356 5.75159 11.9367 5.85315 12.6921C5.9518 13.4259 6.13225 13.8144 6.40901 14.0912C6.68577 14.368 7.07435 14.5484 7.80812 14.6471C8.56347 14.7486 9.56458 14.7502 11 14.7502H18C18.4142 14.7502 18.75 15.086 18.75 15.5002C18.75 15.9144 18.4142 16.2502 18 16.2502H10.9451C9.57754 16.2502 8.47522 16.2502 7.60825 16.1337C6.70814 16.0127 5.95027 15.7538 5.34835 15.1519C4.74643 14.5499 4.48754 13.7921 4.36652 12.892C4.24996 12.025 4.24998 10.9227 4.25 9.55508L4.25 6.88324C4.25 6.17024 4.24887 5.69848 4.20765 5.33747C4.16862 4.99562 4.10047 4.83074 4.01405 4.71083C3.92763 4.59093 3.79276 4.47414 3.4808 4.32901C3.15135 4.17575 2.70415 4.02549 2.02774 3.80002L1.76283 3.71172C1.36987 3.58073 1.1575 3.15599 1.28849 2.76303Z",
                        fill: "#FF826C"
                      }),
                      createVNode("path", {
                        opacity: "0.5",
                        d: "M5.74525 6C5.75022 6.25912 5.75021 6.53957 5.7502 6.8414L5.7502 9.5C5.7502 10.9354 5.75179 11.9365 5.85335 12.6919C5.86817 12.8021 5.88484 12.9046 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7523C18.2128 12.5045 18.4017 12.0636 18.7797 11.1818L19.2082 10.1818C20.0177 8.29294 20.4225 7.34853 19.9779 6.67426C19.5333 6 18.5058 6 16.4508 6H5.74525Z",
                        fill: "#FF826C"
                      }),
                      createVNode("path", {
                        d: "M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z",
                        fill: "#FF826C"
                      }),
                      createVNode("path", {
                        d: "M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z",
                        fill: "#FF826C"
                      }),
                      createVNode("path", {
                        d: "M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z",
                        fill: "#FF826C"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "font-prompt mx-2 mt-0" }, [
                    createVNode("h1", { class: "font-bold sm:mt-2 sm:text-2xl text-[16px]" }, "สินค้าลดราคา")
                  ])
                ]),
                createVNode(_component_RouterLink, {
                  to: "/productsale",
                  class: "p-3 flex-1 flex font-prompt justify-end mt-1"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]" }, "ดูทั้งหมด"),
                    (openBlock(), createBlock("svg", {
                      class: "sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ]))
                  ]),
                  _: 1
                })
              ]),
              createVNode(ProductSale),
              createVNode(DiscountCoupon)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c882cdd7"]]);
export {
  index as default
};
//# sourceMappingURL=index-BwjsDmF5.js.map
