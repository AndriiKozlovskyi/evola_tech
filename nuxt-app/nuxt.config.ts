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

        { name: 'description', content: 'EvolaTec builds modern websites, landing pages, and web apps with Vue 3 + Nuxt. Full-service digital agency: web development, SEO optimization, Google Ads, Meta Ads, and design. Serving Poland and Europe.' },

        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'EvolaTec - Web Development & Digital Agency' },
        { property: 'og:description', content: 'EvolaTec builds modern websites, landing pages, and web apps with Vue 3 + Nuxt. Full-service digital agency: web development, SEO optimization, Google Ads, Meta Ads, and design. Serving Poland and Europe.' },
        { property: 'og:site_name', content: 'EvolaTec' },
        { property: 'og:image', content: 'https://evola-tec.com/images/about/team.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'EvolaTec - Web Development & Digital Agency' },
        { name: 'twitter:description', content: 'EvolaTec builds modern websites, landing pages, and web apps with Vue 3 + Nuxt. Full-service digital agency: web development, SEO optimization, Google Ads, Meta Ads, and design. Serving Poland and Europe.' },
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

      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-18139597285',
          async: true
        },
        {
          innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18139597285');
`
        },
        {
          innerHTML: `<!-- Event snippet for Просмотр страницы conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-18139597285/IDFRCPLEw6gcEOWT0clD',
      'value': 1.0,
      'currency': 'PLN'
  });
</script>`
        }
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