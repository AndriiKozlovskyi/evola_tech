export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2026-05-04',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  // Tailwind CSS
  tailwindcss: {},

  // i18n Configuration
  i18n: {
    locales: [
      { code: 'pl', iso: 'pl-PL', name: 'Polski', dir: 'ltr', file: 'pl.json' },
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', dir: 'ltr', file: 'de.json' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', dir: 'ltr', file: 'ru.json' },
    ],
    lazy: true,
    langDir: 'locales',
    restructureDir: '',
    defaultLocale: 'pl',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },

  // Development server
  devServer: {
    https: false,  // Set to false to use HTTP. Enable HTTPS after mkcert setup if needed.
  },

  // App configuration
  app: {
    head: {
      title: 'EvolaTech - Tworzenie stron internetowych i landing page',
      titleTemplate: '%s | EvolaTech',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Profesjonalne tworzenie stron internetowych, landing page i e-commerce. Web development, SEO, Google Ads, Meta Ads.' },
        { name: 'theme-color', content: '#0066B8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'EvolaTech' },
        { name: 'copyright', content: 'EvolaTech 2024-2026' },
        { name: 'language', content: 'Polish' },
        // Open Graph tags
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EvolaTech' },
        { property: 'og:title', content: 'EvolaTech - Tworzenie stron internetowych i landing page' },
        { property: 'og:description', content: 'Profesjonalne tworzenie stron internetowych, landing page i e-commerce. Web development, SEO, Google Ads, Meta Ads.' },
        { property: 'og:url', content: 'https://evola-tec.com' },
        { property: 'og:image', content: 'https://evola-tec.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'EvolaTech - Web Development Services' },
        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@evola_tech' },
        { name: 'twitter:creator', content: '@evola_tech' },
        { name: 'twitter:title', content: 'EvolaTech - Tworzenie stron internetowych i landing page' },
        { name: 'twitter:description', content: 'Profesjonalne tworzenie stron internetowych, landing page i e-commerce.' },
        { name: 'twitter:image', content: 'https://evola-tec.com/og-image.jpg' },
        // Additional SEO tags
        { name: 'revisit-after', content: '7 days' },
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        { rel: 'canonical', href: 'https://evola-tec.com' },
        // Preconnect for external resources
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google.com' },
        // Non-blocking Inter font (body text)
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', media: 'print', onload: "this.media='all'" },
        // Non-blocking Material Symbols (icons)
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0', media: 'print', onload: "this.media='all'" },
      ],
      noscript: [
        { innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0">' },
      ],
    },
  },

  nitro: {
    preset: 'static',
    prerender: {
      // Seed the default locale root plus localized pages; crawlLinks discovers the rest.
      routes: ['/', '/en', '/de', '/ru'],
      crawlLinks: true,
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
    appManifest: process.env.NODE_ENV === 'production',
    payloadExtraction: true,
    componentIslands: false,
  },
})
