# The Architectural Curator - Portfolio Site

A high-end, editorial IT portfolio website built with **Nuxt 3**, **Vue 3**, **Tailwind CSS**, **Vue i18n** (German/English), and designed for deployment on **Netlify** (preview) and **Hostinger** (production).

## 🎯 Features

- ✅ **Nuxt 3 SSR** — Server-side rendering for optimal SEO & performance
- ✅ **Vue i18n** — Full German/English translations (DE/EN)
- ✅ **Tailwind CSS** — Design tokens matching "The Architectural Curator" brand
- ✅ **Responsive Design** — Mobile-first, fully responsive layout
- ✅ **Contact Form** — With validation (ready for Formspree/Netlify Functions integration)
- ✅ **Modern Components** — Portfolio cards, service cards, chips, header, footer
- ✅ **Local SSL (mkcert)** — Secure development environment
- ✅ **Design System** — Based on Material Design specifications

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **mkcert** (for local SSL certificates)
- **Git** (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd nuxt-app
npm install
```

### 2. Setup Local SSL with mkcert

If you don't have mkcert installed:

```bash
# macOS (Homebrew)
brew install mkcert

# Ubuntu/Debian
sudo apt get install mkcert

# Windows (Chocolatey)
choco install mkcert

# Or visit: https://github.com/FiloSottile/mkcert
```

Generate certificates for localhost:

```bash
cd nuxt-app
mkcert localhost
# This creates: localhost.pem and localhost-key.pem
```

### 3. Start Development Server

```bash
npm run dev
```

Access the site at: **https://localhost:3000**

(You may need to trust the mkcert certificate in your browser)

### 4. Switch Languages

Use the **DE | EN** button in the top-right corner to toggle between German and English.

## 🏗️ Project Structure

```
nuxt-app/
├── components/
│   ├── Header.vue                    # Navigation bar with language switcher
│   ├── Footer.vue                    # Footer with links
│   ├── Cards/
│   │   ├── PortfolioCard.vue        # Portfolio project card
│   │   └── ServiceCard.vue          # Service offering card
│   ├── Forms/
│   │   └── ContactForm.vue          # Contact form with validation
│   └── Chips/
│       └── TechnicalGhostChip.vue   # Skill badge component
├── pages/
│   ├── index.vue                    # Home page (all sections)
│   └── portfolio/[id].vue           # Portfolio detail page (stub)
├── layouts/
│   └── default.vue                  # Main layout wrapper
├── composables/
│   ├── useLanguage.ts               # i18n language switching logic
│   └── useProjects.ts               # Project data management
├── locales/
│   ├── en.json                      # English translations
│   └── de.json                      # German translations
├── assets/
│   └── css/
│       └── globals.css              # Global styles & utilities
├── plugins/
│   └── i18n.ts                      # Vue i18n configuration
├── public/                          # Static assets
├── server/api/                      # API routes (future: Storyblok calls)
├── nuxt.config.ts                   # Nuxt configuration (Tailwind, i18n, SSL)
├── tailwind.config.ts               # Tailwind design tokens
├── tsconfig.json                    # TypeScript configuration
├── .env.local                       # Environment variables (local)
├── .gitignore                       # Git ignore rules
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

## 🎨 Design System

All colors, typography, and spacing follow the Material Design 3 specification defined in `DESIGN.md`. Key tokens are configured in `tailwind.config.ts`:

- **Colors:** Primary (#004275), surfaces, error states
- **Typography:** Inter font, 7 scale levels (Label → Display-LG)
- **Spacing:** Tailwind's 4px base unit
- **Radius:** Minimal rounded corners (lg: 0.75rem)

## 🌍 Internationalization (i18n)

Translations are stored in:

- `locales/en.json` — English
- `locales/de.json` — German

**To add new text:**

1. Add key-value pair to both `en.json` and `de.json`
2. Use in component: `{{ $t('key.path') }}`

**Example:**

```json
// locales/en.json
{
  "hero": {
    "headline": "IT Solutions for Your Business."
  }
}
```

```vue
<!-- Template -->
<h2>{{ $t('hero.headline') }}</h2>
```

## 🚀 Build & Preview

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

Then open: **https://localhost:3000**

## 📤 Deployment

### Netlify (Staging/Preview)

1. Push code to GitHub repository
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.output/public`
5. Set environment variable: `NODE_ENV=production`

**Auto-deploys on every push to `main` branch.**

### Hostinger (Production)

1. Log into Hostinger control panel
2. Navigate to your hosting account
3. Enable Node.js support (if required)
4. Choose deployment method:
   - **Option A:** Git auto-deploy (connect GitHub repo)
   - **Option B:** Manual upload (SFTP `.output/public` after build)

5. Configure SSL certificate (Hostinger auto-provides free SSL with most plans)
6. Point custom domain to hosting IP

## 📝 Environment Variables

Create `.env.local` in `nuxt-app/` (already provided with defaults):

```env
# Storyblok API (Phase 7)
NUXT_PUBLIC_STORYBLOK_TOKEN=your_token_here

# Form Backend (Phase 5)
NUXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_id

# App Settings
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_LOCALE=en
```

## 📧 Contact Form Integration (Phase 5)

The contact form is currently configured to log to console. To send emails:

**Option 1: Formspree** (Recommended)

```bash
1. Sign up at https://formspree.io
2. Create form, get endpoint URL
3. Add to .env.local: NUXT_PUBLIC_FORMSPREE_ENDPOINT
4. Update ContactForm.vue to POST to endpoint
```

**Option 2: Netlify Functions**

```bash
1. Define serverless function in /server/api/submit-form.post.ts
2. ContactForm.vue POSTs to /api/submit-form
```

**Option 3: Custom Backend**

```bash
1. Host Node.js/Express API on Hostinger
2. Create endpoint for contact form
3. Update ContactForm.vue to POST to your API
```

## 🗂️ Phase 2 Completion Checklist (✅ Complete)

- [x] Nuxt 3 project scaffolded with TypeScript
- [x] Tailwind CSS configured with design tokens
- [x] Vue i18n setup for DE/EN translations
- [x] Components created: Header, Footer, Cards, Form, Chips
- [x] Pages created: Home, Portfolio (stub)
- [x] Layouts created: Default
- [x] Composables created: useLanguage, useProjects
- [x] Locales created: en.json, de.json
- [x] Global CSS created: globals.css
- [x] mkcert SSL setup instructions
- [x] Package.json with all dependencies

## 🔮 Phase 7: Storyblok Integration (Deferred)

When ready to integrate Storyblok for content management:

1. Generate Storyblok API token
2. Install `@storyblok/vue`: `npm install @storyblok/vue`
3. Create `composables/useStoryblok.ts` for API queries
4. Update pages & components to fetch from Storyblok
5. Create Storyblok components schema matching Vue components

## 🐛 Troubleshooting

### mkcert certificate errors in browser

1. Trust the mkcert root certificate:
   - **macOS:** `mkcert -install`
   - **Windows:** Run as Administrator in PowerShell
   - **Linux:** Follow mkcert docs for your distro

2. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### i18n translations not showing

1. Verify key exists in both `en.json` and `de.json`
2. Check key path matches template: `{{ $t('path.to.key') }}`
3. Ensure `plugins/i18n.ts` is loaded (it should auto-load)

### Build fails with TypeScript errors

1. Ensure Node.js 18+ installed: `node --version`
2. Delete `node_modules/` and `.nuxt/`:
   ```bash
   rm -rf node_modules .nuxt
   npm install
   npm run build
   ```

3. Check TypeScript errors: `npx nuxi typecheck`

## 📚 Resources

- [Nuxt 3 Documentation](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vue i18n](https://vue-i18n.intlify.dev)
- [Material Design 3](https://material.io/design)
- [Formspree](https://formspree.io)

## 📄 License

© 2024 The Architectural Curator. All rights reserved.

---

**Next Steps:**

- Phase 3: Add full i18n translations (✅ Complete)
- Phase 4: Create API data integration
- Phase 5: Implement form backend
- Phase 6: Deploy to Netlify & Hostinger
- Phase 7: Integrate Storyblok CMS (deferred)
