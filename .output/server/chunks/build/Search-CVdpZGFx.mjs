import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center relative font-prompt" }, _attrs))} data-v-9ffbf119><input type="text" class="bg-[#1F2A370D] sm:w-[540px] h-[56px] w-[350px] rounded-lg border-2 pl-10 pr-10" placeholder="\u0E04\u0E49\u0E19\u0E2B\u0E32..." data-v-9ffbf119>`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-6 h-6 text-gray-500 absolute sm:left-96 left-6 top-1/2 transform -translate-y-1/2" }, null, _parent));
      _push(`<svg class="w-6 h-6 text-gray-500 absolute sm:right-96 right-8 top-1/2 transform -translate-y-1/2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ffbf119><path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 7C18.25 9.07107 16.5711 10.75 14.5 10.75C12.4289 10.75 10.75 9.07107 10.75 7C10.75 4.92893 12.4289 3.25 14.5 3.25C16.5711 3.25 18.25 4.92893 18.25 7ZM14.5 9.25C15.7426 9.25 16.75 8.24264 16.75 7C16.75 5.75736 15.7426 4.75 14.5 4.75C13.2574 4.75 12.25 5.75736 12.25 7C12.25 8.24264 13.2574 9.25 14.5 9.25Z" fill="#0D1217" data-v-9ffbf119></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 17C5.75 19.0711 7.42893 20.75 9.5 20.75C11.5711 20.75 13.25 19.0711 13.25 17C13.25 14.9289 11.5711 13.25 9.5 13.25C7.42893 13.25 5.75 14.9289 5.75 17ZM9.5 19.25C8.25736 19.25 7.25 18.2426 7.25 17C7.25 15.7574 8.25736 14.75 9.5 14.75C10.7426 14.75 11.75 15.7574 11.75 17C11.75 18.2426 10.7426 19.25 9.5 19.25Z" fill="#0D1217" data-v-9ffbf119></path><path d="M14.25 16.9585C14.25 16.5443 14.5858 16.2085 15 16.2085H22C22.4142 16.2085 22.75 16.5443 22.75 16.9585C22.75 17.3727 22.4142 17.7085 22 17.7085H15C14.5858 17.7085 14.25 17.3727 14.25 16.9585Z" fill="#0D1217" data-v-9ffbf119></path><path d="M9 6.20852C9.41421 6.20852 9.75 6.54431 9.75 6.95852C9.75 7.37273 9.41421 7.70852 9 7.70852L2 7.70852C1.58579 7.70852 1.25 7.37273 1.25 6.95852C1.25 6.54431 1.58579 6.20852 2 6.20852L9 6.20852Z" fill="#0D1217" data-v-9ffbf119></path><path d="M1.25 16.9585C1.25 16.5443 1.58579 16.2085 2 16.2085H4C4.41421 16.2085 4.75 16.5443 4.75 16.9585C4.75 17.3727 4.41421 17.7085 4 17.7085H2C1.58579 17.7085 1.25 17.3727 1.25 16.9585Z" fill="#0D1217" data-v-9ffbf119></path><path d="M22 6.20852C22.4142 6.20852 22.75 6.54431 22.75 6.95852C22.75 7.37273 22.4142 7.70852 22 7.70852H20C19.5858 7.70852 19.25 7.37273 19.25 6.95852C19.25 6.54431 19.5858 6.20852 20 6.20852H22Z" fill="#0D1217" data-v-9ffbf119></path></svg></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ffbf119"]]);

export { Search as S };
//# sourceMappingURL=Search-CVdpZGFx.mjs.map
