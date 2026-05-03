export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
  ],

  // Tailwind CSS
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  // Fonts – self-hosted Inter, no CDN blocking request
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
    defaults: { display: 'swap' },
  },

  // Image optimization
  image: {
    domains: ['images.unsplash.com'],
    formats: ['webp', 'avif'],
  },

  // i18n Configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', dir: 'ltr', file: 'de.json' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', dir: 'ltr', file: 'ru.json' },
    ],
    langDir: 'locales',
    restructureDir: '',
    defaultLocale: 'en',
    strategy: 'no_prefix',
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EvolaTech' },
        { property: 'og:image', content: 'https://evola-tec/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@evola_tech' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        // Preconnect for Material Symbols (loaded async via plugin)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/gdpr', '/imprint', '/privacy', '/terms'],
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
