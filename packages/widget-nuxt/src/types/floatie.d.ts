import type { Config } from '@floatie/widget-core'

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    floatie: Config
  }
}

export {}
