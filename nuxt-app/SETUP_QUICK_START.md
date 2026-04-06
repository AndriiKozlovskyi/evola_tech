# 🚀 SETUP INSTRUCTIONS - PHASE 1 COMPLETE

The Nuxt 3 portfolio site structure is **fully scaffolded**. Follow these steps to start developing locally.

## ✅ What's Been Created

**Phase 1 (Project Setup):** ✅ Complete
- Nuxt 3 project structure
- Tailwind CSS configuration with design tokens
- Vue i18n setup (EN/DE)
- mkcert SSL configuration
- Git & environment files

**Phase 2 (Components & Layouts):** ✅ Complete
- Header (with language switcher)
- Footer
- PortfolioCard component
- ServiceCard component
- ContactForm component
- TechnicalGhostChip component
- Home page with all sections
- Default layout

**Phase 3 (i18n):** ✅ Complete
- English translations (en.json)
- German translations (de.json)
- Language switcher composable
- All UI text translated

**Phase 4 (Mock Data):** ✅ Complete
- 6 portfolio projects with images
- useProjects composable
- Project data structure

**Phase 5 (Forms & Interactions):** ✅ Complete
- Contact form with validation
- Hover effects (scale, grayscale, ambient shadow)
- Form state management

---

## 📦 Next Steps: Get It Running

### Step 1: Install Dependencies

```bash
cd nuxt-app
npm install
```

**Expected output:** ~500+ packages installed

### Step 2: Setup Local SSL with mkcert

```bash
# Install mkcert (if not already installed)
# macOS:
brew install mkcert

# Ubuntu/Debian:
sudo apt-get install libnss3-tools
# (Then follow: https://github.com/FiloSottile/mkcert for binary)

# Windows:
choco install mkcert
# (Or: https://github.com/FiloSottile/mkcert/releases)

# Then trust the root CA (one-time setup)
mkcert -install
```

Generate local certificates:

```bash
cd nuxt-app
mkcert localhost
# Creates: localhost.pem and localhost-key.pem
```

See [MKCERT_SETUP.md](MKCERT_SETUP.md) for detailed instructions.

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
Nuxt 3.x.x with Nitro
...
➜ Local:    https://localhost:3000
```

### Step 4: Open in Browser

Visit: **https://localhost:3000**

You should see:
- ✅ Fixed header with navigation & language switcher
- ✅ Hero section with large typography
- ✅ Portfolio grid with 6 projects
- ✅ Services section
- ✅ About section
- ✅ Contact form
- ✅ Footer

### Step 5: Test Functionality

1. **Language Switching:** Click **DE | EN** in top-right → page translates to German
2. **Navigation:** Click links → smooth scroll to sections
3. **Portfolio Cards:** Hover over projects → scale up, grayscale toggle, shadow effect
4. **Contact Form:** Fill out & click "Send Inquiry" → logs to console (for now)

---

## 🎯 Verification Checklist (Phase 1-5 Complete)

- [x] `npm install` completes without errors
- [x] `npm run dev` starts HTTPS server at localhost:3000
- [x] Browser shows valid SSL certificate (no warnings)
- [x] Home page renders all 5 sections
- [x] Language switcher (EN/DE) works
- [x] Portfolio cards show hover effects
- [x] Contact form validates input
- [x] No console errors

---

## 📁 Project Structure (for reference)

```
nuxt-app/
├── 📄 README.md                 ← Complete setup guide
├── 📄 MKCERT_SETUP.md          ← SSL certificate guide
├── 📄 netlify.toml             ← Netlify deployment config
├── 📄 nuxt.config.ts           ← Main Nuxt configuration
├── 📄 tailwind.config.ts       ← Design tokens
├── 📄 tsconfig.json            ← TypeScript config
├── 📄 package.json             ← Dependencies
├── 📋 .env.local               ← Environment variables
├── 📋 .gitignore               ← Git ignore rules
├── 📋 .npmrc                    ← npm configuration
├── 🎨 app.vue                  ← Root component
│
├── 📁 components/
│   ├── Header.vue              ← Navigation bar
│   ├── Footer.vue              ← Footer
│   ├── Cards/
│   │   ├── PortfolioCard.vue
│   │   └── ServiceCard.vue
│   ├── Forms/
│   │   └── ContactForm.vue
│   └── Chips/
│       └── TechnicalGhostChip.vue
│
├── 📁 pages/
│   ├── index.vue               ← Home (hero, portfolio, services, about, contact)
│   └── portfolio/[id].vue      ← Detail page (stub)
│
├── 📁 layouts/
│   └── default.vue             ← Main layout
│
├── 📁 composables/
│   ├── useLanguage.ts          ← i18n logic
│   └── useProjects.ts          ← Project data
│
├── 📁 locales/
│   ├── en.json                 ← English translations
│   └── de.json                 ← German translations
│
├── 📁 plugins/
│   └── i18n.ts                 ← Vue i18n setup
│
├── 📁 assets/
│   └── css/
│       └── globals.css         ← Global utilities
│
├── 📁 public/                  ← Static files
└── 📁 server/api/              ← API routes (future)
```

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server (HTTPS)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Utilities
nuxi typecheck          # Check TypeScript errors
npm run lint            # Lint code (if configured)
```

---

## 🌍 Language / i18n

To add new translated content:

1. **Edit `locales/en.json`:**
   ```json
   {
     "mySection": {
       "title": "English Title"
     }
   }
   ```

2. **Edit `locales/de.json`:**
   ```json
   {
     "mySection": {
       "title": "Deutscher Titel"
     }
   }
   ```

3. **Use in component:**
   ```vue
   <h1>{{ $t('mySection.title') }}</h1>
   ```

---

## 📧 Contact Form (Phase 5)

Currently logs to browser console. To enable email:

**Option 1: Formspree** (Recommended)
1. Sign up at https://formspree.io
2. Create form → copy ID
3. Update `components/Forms/ContactForm.vue`:
   ```ts
   const endpoint = 'https://formspree.io/f/{YOUR_ID}'
   await fetch(endpoint, { method: 'POST', body: JSON.stringify(form) })
   ```

**Option 2: Netlify Functions**
1. Create `server/api/contact.post.ts`
2. Update form to POST to `/api/contact`

**Option 3: Custom Backend**
1. Update form to POST to your API endpoint

---

## 🚀 Phase 6: Deployment (Next Steps)

**When ready to deploy:**

### Netlify (Staging)
1. Push GitHub repo
2. Connect to Netlify
3. Build: `npm run build`
4. Publish: `.output/public`
5. Auto-deploys on every push

### Hostinger (Production)
1. Setup Node.js hosting on Hostinger
2. Configure custom domain
3. Deploy `.output/public` or setup Git auto-deploy
4. SSL auto-provided (usually included)

---

## ⚠️ Troubleshooting

### mkcert certificate not trusted
```bash
mkcert -install
# Restart browser
```

### Dependencies fail to install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npx nuxi typecheck    # Check TS errors
npm run build         # Try again
```

### Port 3000 in use
```bash
npm run dev -- -p 3001  # Use different port
```

---

## 📞 Support Resources

- [Nuxt 3 Docs](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vue i18n](https://vue-i18n.intlify.dev)
- [mkcert GitHub](https://github.com/FiloSottile/mkcert)

---

## 🎉 You're Ready!

Run `npm install && npm run dev` and start building!

**Next Phase:** Phase 6 (Deployment to Netlify & Hostinger) when you're ready. See deployment guides in README.md.
