export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2026-05-04',
  devtools: { enabled: false },

  css: ['~/assets/css/globals.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
    
  devServer: {
    https: false,  // Set to false to use HTTP. Enable HTTPS after mkcert setup if needed.
  },
    
  imports: {
    autoImport: true,
  },

  // 🌍 i18n (оптимизировано)
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'pl', iso: 'pl-PL', file: 'pl.json', name: 'Polski' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
    ],
    defaultLocale: 'en', // ✅ теперь английский основной
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    restructureDir: '',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
    bundle: {
      compositionOnly: true,
      runtimeOnly: false,
    },
    compilation: {
      strictMessage: false,
    },
  },

  app: {
    head: {
      titleTemplate: '%s | EvolaTec',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // ✅ лучше сделать общий EN
        { name: 'description', content: 'Web development, SEO and advertising services. We build websites that bring clients.' },

        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EvolaTec' },
        { property: 'og:image', content: 'https://evola-tec.com/images/about/team.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://evola-tec.com' },

        // ⚡ производительность
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },

        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap', media: 'print', onload: "this.media='all'" },
      ],

      noscript: [
        { innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap">' },
      ],
    },
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/pl', '/de', '/ru'],
      crawlLinks: true,
    },
  },

  routeRules: {
    '/**': { cache: { maxAge: 60 * 10 } },
  },

  experimental: {
    payloadExtraction: true,
  },
})