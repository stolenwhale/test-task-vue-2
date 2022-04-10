export default {
  ssr: false,
  target: 'static',
  build: {
    publicPath: '/nuxt/',
  },
  router: {
    base: './',
    mode: 'hash'
  },
  head: {
    title: 'test-task-vue-2',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },
  styleResources: {
    scss: [
      '~/assets/styles/_includes.scss',
      '~/assets/styles/_vars.scss',
      '~/assets/styles/_fonts.scss',
      '~/assets/styles/_base.scss',
      '~/assets/styles/_normalize.scss'
    ],
  },
  plugins: ['@/plugins/antd-ui'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-bem-module',
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
}
