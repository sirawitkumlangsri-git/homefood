// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@prisma+nuxt@0.0.35_magicast@0.3.5_prisma@5.22.0_rollup@4.26.0_vite@5.4.11_@types+node@22.9.0_terser@5.36.0_/node_modules/@prisma/nuxt/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_magicast@0.3.5_rollup@4._bc5hl4yumpdvpomf6riqb5zilm/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../plugins/fontawesome.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'prisma-client' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
