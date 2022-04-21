export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  head: {
    title: 'Quote_book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' }
    ],
  },

  css: [
    'vue-multiselect/dist/vue-multiselect.min.css',
    '~/scss/reset.scss',
  ],

  plugins: [
    '~/plugins/vue-multiselect.js',
    '~/plugins/vue2-touch-events.js'
  ],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  build: {},
}
