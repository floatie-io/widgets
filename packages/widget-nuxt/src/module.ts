import { defineNuxtModule, addComponent, createResolver, addTypeTemplate, addTemplate } from '@nuxt/kit'
import { defu } from 'defu'
import type { Config } from '@floatie/widget-core'

export default defineNuxtModule<Config>({
  meta: {
    name: '@nuxtjs/floatie',
    configKey: 'floatie',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    clientKey: undefined,
    floatieInstance: 'https://floatie.io',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public['floatie'] = defu(nuxt.options.runtimeConfig.public['floatie'], options)
    nuxt.options.build.transpile.push('@floatie/widget-vue')

    addComponent({
      name: 'FloatieBasic',
      filePath: resolver.resolve('runtime/components/FloatieBasic.vue'),
    })
  },
})
