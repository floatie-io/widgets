import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

interface FloatieConfig {
  clientKey?: string
}

export default defineNuxtModule<FloatieConfig>({
  meta: {
    name: '@nuxtjs/floatie',
    configKey: 'floatie',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    clientKey: undefined,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.floatie = defu(nuxt.options.runtimeConfig.public.floatie!, {
      clientKey: options.clientKey,
    })

    nuxt.options.build.transpile.push('@floatie/widget-vue')

    addComponent({
      name: 'FloatieBasic',
      filePath: resolver.resolve('runtime/components/FloatieBasic.vue'),
    })
  },
})
