import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { WidgetConfig } from '@floatie/widget-core'

export default defineNuxtModule<WidgetConfig>({
  meta: {
    name: '@floatie/nuxt',
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
