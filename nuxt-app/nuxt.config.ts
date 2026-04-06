export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  // Tailwind CSS
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  // i18n Configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', dir: 'ltr' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
  },

  // Development server
  devServer: {
    https: false,  // Set to false to use HTTP. Enable HTTPS after mkcert setup if needed.
  },

  // App configuration
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The Architectural Curator - Elite IT Solutions for discerning enterprises.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' },
      ],
    },
  },

  // Runtimes
  routeRules: {
    '/**': { cache: { maxAge: 60 * 10 } },
  },

  // Auto imports
  imports: {
    autoImport: true,
  },

  experimental: {
    payloadExtraction: false,
    componentIslands: true,
  },
})
