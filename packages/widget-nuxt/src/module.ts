import { defineNuxtModule, addComponent } from '@nuxt/kit'
import { WidgetConfig } from '@floatie/widget-core'

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
    addComponent({
      name: 'Widget',
      export: 'Widget',
      filePath: '@floatie/widget-vue',
    })
  },
})
