export default defineNuxtConfig({

  performance: {
    gzip: true, // Enable Gzip compression
    brotli: true, // Enable Brotli compression
    prefetch: true, // Enable prefetching
    preload: true, // Enable preloading
  },

    // Reduce JavaScript chunk size
    vite: {
      build: {
        chunkSizeWarningLimit: 500, // Set maximum chunk size
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0];
              }
            },
          },
        },
      },
    },

  // Disable unnecessary features
  experimental: {
    payloadExtraction: true, // Improve performance by extracting payloads
    inlineSSRStyles: false, // Disable inline SSR styles
  },

  // Optimize rendering
  render: {
    csp: true, // Enable Content Security Policy
    etag: true, // Enable ETag for caching
    static: {
      cacheControl: true, // Enable cache control headers
    },
  },

    // Image optimization
    image: {
      // domains: ['localhost:3000'], // Add your allowed domains for images
      // quality: 80, // Set image quality
      dir: 'assets/images',
      format: ['webp', 'jpeg'], // Use modern formats
    },
  
    // Reduce prefetching/prefetch links
    router: {
      prefetchLinks: false, // Disable automatic link prefetching
    },

      // Tree shaking and module optimization
  build: {
    analyze: false, // Disable build analysis
    extractCSS: true, // Extract CSS to separate files
    optimizeCSS: true, // Optimize CSS
    splitChunks: {
      layouts: true, // Separate layouts into their own chunks
      pages: true, // Separate pages into their own chunks
      commons: true, // Separate shared modules
    },
  },
  
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
  ],
  
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

})