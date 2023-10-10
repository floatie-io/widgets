import { defineNuxtPlugin } from '#app'

import { Widget } from '@floatie/widget-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Widget', Widget)
})
