import { defineNuxtModule, addComponent } from '@nuxt/kit'
import type { WidgetConfig } from '@floatie/widget-core'

export default defineNuxtModule<WidgetConfig>({
  meta: {
    name: '@nuxtjs/floatie',
    configKey: 'floatie',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup(options, nuxt) {
    nuxt.options.build.transpile.push('@floatie/widget-vue')

    addComponent({
      name: 'Widget',
      export: 'Widget',
      filePath: '@floatie/widget-vue',
    })
  },
})
