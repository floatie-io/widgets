export default defineNuxtConfig({
  modules: ['../src/module'],

  devtools: {
    enabled: true,
  },

  floatie: {
    clientKey: 'my key',
    floatieInstance: 'custom instance'
  },

  compatibilityDate: '2024-09-27',
})