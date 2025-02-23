export default defineNuxtConfig({
  // ssr: true,
  // Image optimization
  image: {
    // domains: ['localhost:3000'], // Add your allowed domains for images
    // quality: 80, // Set image quality
    dir: 'assets/images',
    format: ['webp', 'jpeg'], // Use modern formats
  },

  // devServer: {
  //   https: {
  //     key: '../../../../Windows/System32/localhost-key.pem',
  //     cert: '../../../../Windows/System32/localhost.pem'
  //   }
  // },

  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: "Barwazah",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ar", class: "html_direction" },
      meta: [
        { name: "description", content: "موقع اميال لتاجير السيارات" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/sm-logo.svg" },
      ],
    },
  },

  // primevue
  modules: [
    'nuxt-primevue',
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    "nuxt-echarts"
  ],

  echarts: {
    ssr: true,
    renderer: ['canvas', 'svg'],
    charts: ['BarChart', 'MapChart'],
    components: [
      'DatasetComponent',
      'GridComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'GeoComponent',
      'VisualMapComponent',
    ],
  },

  alias: {
  // "@": resolve(__dirname, "/"),
  assets: "/<rootDir>/assets",
},

  css: [
    "bootstrap/dist/css/bootstrap.rtl.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primevue/resources/primevue.min.css",
    "~/assets/css/style.scss",
  ],

  compatibilityDate: '2024-12-18',
})