# 🏗️ Development & Architecture Guide

This document explains the Nuxt 3 project structure, design patterns, and how to extend functionality.

## Architecture Overview

```
┌─────────────────────────────────────────┐
│         Browser (Client)                │
│  ├─ Vue 3 Components                    │
│  ├─ Vue Router (page navigation)        │
│  ├─ Vue i18n (translations)             │
│  └─ Tailwind CSS (styling)              │
└────────────┬────────────────────────────┘
             │ HTTPS
┌────────────▼────────────────────────────┐
│  Nuxt 3 SSR Server (Node.js)            │
│  ├─ Server-side rendering               │
│  ├─ API routes (`server/api/`)          │
│  ├─ Middleware & plugins                │
│  └─ Static file serving                 │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│  Data Sources                           │
│  ├─ Mock JSON (Phase 4)                 │
│  ├─ Storyblok CMS (Phase 7, future)     │
│  └─ External APIs                       │
└─────────────────────────────────────────┘
```

## Component Architecture

### Pages (`pages/`)

- **Auto-routed** by Nuxt based on file structure
- Example: `pages/index.vue` → `/` route
- Example: `pages/portfolio/[id].vue` → `/portfolio/:id` dynamic route
- Each page uses `definePageMeta({ layout: 'default' })` to apply layouts

### Components (`components/`)

- **Auto-imported** — no explicit imports needed
- Organized by type:
  - `Cards/` — Self-contained card components
  - `Forms/` — Interactive form components
  - `Sections/` — Large layout sections (future)
  - `Chips/` — Small badge/tag components
  - Root level: `Header.vue`, `Footer.vue` (major page elements)

**Example usage in page:**
```vue
<PortfolioCard :project="project" />
<!-- No import needed; auto-imported -->
```

### Layouts (`layouts/`)

- Wrap pages with common structure
- `default.vue` — Header + Footer + `<slot>` for page content
- Future: Add `blog.vue` for article layouts

```vue
<!-- layouts/default.vue -->
<Header />
<main><slot /></main>  <!-- Page content injected here -->
<Footer />
```

### Composables (`composables/`)

- **Reusable logic** — shared across components/pages
- Auto-imported
- Return reactive state and methods

**Example: `useLanguage.ts`**
```ts
export const useLanguage = () => {
  const currentLocale = computed(() => locale.value)
  const toggleLanguage = async () => { ... }
  return { currentLocale, toggleLanguage }
}
```

**Usage in component:**
```ts
const { currentLocale, toggleLanguage } = useLanguage()
```

### Plugins (`plugins/`)

- Run before app initialization
- Setup global services (i18n, analytics, etc.)
- Named `*.ts` — auto-executed

**Example: `plugins/i18n.ts`**
```ts
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)  // Register i18n globally
})
```

### Server Routes (`server/api/`)

- Serverless API endpoints
- Example: `server/api/projects.get.ts` → GET `/api/projects`
- Can access environment variables, databases, etc.

**Future use (Phase 7):**
```ts
// server/api/projects.get.ts
export default defineEventHandler(async () => {
  const storyblokToken = process.env.NUXT_PUBLIC_STORYBLOK_TOKEN
  const data = await fetch(`https://api.storyblok.com/v2/stories`, {
    headers: { 'Token': storyblokToken }
  })
  return data.json()
})
```

---

## Styling & Design System

### Tailwind CSS (`tailwind.config.ts`)

All design tokens are configured here:

```ts
theme: {
  extend: {
    colors: {
      'primary': '#004275',
      'surface': '#f7f9ff',
      // ... 40+ other colors
    },
    borderRadius: {
      'xl': '0.75rem',  // Used in cards
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
    },
  },
}
```

### Global Styles (`assets/css/globals.css`)

- Loaded automatically by Nuxt
- Defines utility classes and animations
- Examples:
  - `.glass-nav` — Glassmorphism effect
  - `.ambient-shadow` — Hover shadow
  - `.ghost-border` — 20% opacity border
  - Typography utilities: `.text-display-lg`, `.text-body-lg`

### Using Colors in Components

**Option 1: Tailwind classes**
```vue
<div class="bg-primary text-on-primary">...</div>
<!-- Uses color-primary: #004275 -->
```

**Option 2: CSS custom properties (v-bind)**
```vue
<div :style="{ backgroundColor: 'var(--color-primary)' }">...</div>
```

---

## Internationalization (i18n)

### Structure

```
locales/
├── en.json    { "nav": { "home": "Home" } }
└── de.json    { "nav": { "home": "Startseite" } }
```

### Usage

```vue
<!-- Template -->
<h1>{{ $t('hero.headline') }}</h1>

<!-- Computed property -->
<script setup>
const heading = computed(() => $t('hero.headline'))
</script>
```

### Language Switching

```ts
const { currentLocale, toggleLanguage } = useLanguage()

// Toggle: en → de or de → en
await toggleLanguage()

// Get current: 'en' or 'de'
console.log(currentLocale.value)
```

### Adding New Translations

1. **Edit `locales/en.json`:**
   ```json
   {
     "newSection": {
       "title": "New Title"
     }
   }
   ```

2. **Edit `locales/de.json`:**
   ```json
   {
     "newSection": {
       "title": "Neuer Titel"
     }
   }
   ```

3. **Use in component:**
   ```vue
   <h2>{{ $t('newSection.title') }}</h2>
   ```

---

## State Management Pattern

This project uses **Composition API** for state (no Pinia needed for simple apps).

### Local Component State

```vue
<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

### Shared State via Composables

```ts
// composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count: readonly(count), increment }
}
```

```vue
<script setup>
const { count, increment } = useCounter()
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

### Persistent State (localStorage)

```ts
export const useLanguage = () => {
  const locale = ref('en')
  
  const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'de' : 'en'
    // Persist to localStorage
    if (process.client) {
      localStorage.setItem('locale', locale.value)
    }
  }
  
  return { locale, toggleLanguage }
}
```

---

## Reactive Data Patterns

### Ref (Primitive values)

```ts
const name = ref('John')
const count = ref(0)

// Access with `.value`
name.value = 'Jane'
```

### Computed

```ts
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
```

### Watch (reactive side effects)

```ts
const locale = ref('en')

watch(locale, (newVal) => {
  console.log('Language changed to:', newVal)
  localStorage.setItem('locale', newVal)
})
```

---

## HTTP Requests (API Integration)

### Server-side API Routes

**Create `server/api/projects.get.ts`:**
```ts
export default defineEventHandler(async () => {
  const storyblokToken = process.env.NUXT_PUBLIC_STORYBLOK_TOKEN
  const res = await fetch(`https://api.storyblok.com/v2/stories`, {
    headers: { 'Token': storyblokToken }
  })
  return res.json()
})
```

**Usage in component:**
```ts
const { data: projects } = await useFetch('/api/projects')
```

### Client-side Fetch

```ts
const { data, pending, error } = await useFetch('/api/projects', {
  method: 'GET',
  watch: false,  // Don't auto-refetch on dependency change
})
```

### Form Submission

```ts
const handleSubmit = async (formData) => {
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })
    console.log('Success:', response)
  } catch (err) {
    console.error('Error:', err)
  }
}
```

---

## Component Patterns

### Props & Emits

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
})

const emit = defineEmits<{
  update: [newValue: string]
}>()

const handleClick = () => {
  emit('update', 'new value')
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="handleClick">Update</button>
  </div>
</template>
```

### Slots (Content Projection)

```vue
<!-- Component: Card.vue -->
<template>
  <div class="card">
    <header><slot name="header" /></header>
    <main><slot /></main>
    <footer><slot name="footer" /></footer>
  </div>
</template>
```

```vue
<!-- Usage -->
<Card>
  <template #header>Card Title</template>
  Card content here
  <template #footer>Card footer</template>
</Card>
```

---

## TypeScript Support

### Type Components

```ts
// Define component props as interface
interface Props {
  project: Project
  variant?: 'default' | 'compact'
}

const props = defineProps<Props>()
```

### Type API Responses

```ts
interface Project {
  id: number
  title: string
  description: string
  image: string
  link?: string
}

const projects = ref<Project[]>([])
```

### Type Composables

```ts
export const useProjects = () => {
  const projects = ref<Project[]>([])
  
  const getProjectById = (id: number): Project | undefined => {
    return projects.value.find(p => p.id === id)
  }
  
  return {
    projects: readonly(projects),
    getProjectById,
  }
}
```

---

## Testing (Future)

Add Vitest for unit tests:

```bash
npm install -D vitest @vue/test-utils
```

**Example test:** `composables/__tests__/useLanguage.test.ts`
```ts
import { describe, it, expect } from 'vitest'
import { useLanguage } from '../useLanguage'

describe('useLanguage', () => {
  it('toggles between en and de', () => {
    const { currentLocale, toggleLanguage } = useLanguage()
    expect(currentLocale.value).toBe('en')
    toggleLanguage()
    expect(currentLocale.value).toBe('de')
  })
})
```

---

## Adding New Pages

1. **Create page file:**
   ```
   pages/blog.vue
   pages/blog/[slug].vue
   ```

2. **Add content:**
   ```vue
   <template>
     <div>
       <h1>Blog</h1>
       <p>{{ $t('blog.description') }}</p>
     </div>
   </template>

   <script setup>
   definePageMeta({ layout: 'default' })
   </script>
   ```

3. **Update header navigation:**
   - Add link in `components/Header.vue`
   - Add translation to `locales/en.json` and `locales/de.json`

---

## Adding New Components

1. **Create component:**
   ```
   components/Cards/BlogCard.vue
   ```

2. **Define props/emits:**
   ```vue
   <script setup lang="ts">
   interface Props {
     blog: Blog
   }
   defineProps<Props>()
   </script>
   ```

3. **Use in page:**
   ```vue
   <BlogCard v-for="post in posts" :key="post.id" :blog="post" />
   ```

---

## Performance Optimization

### Image Optimization

Use `<NuxtImg />` (requires `@nuxt/image`):

```bash
npm install @nuxt/image
```

```vue
<NuxtImg
  src="/portfolio/project.jpg"
  width="500"
  height="300"
  format="webp"
/>
```

### Code Splitting

Components are auto-split and lazy-loaded:

```vue
<Suspense>
  <HeavyComponent />
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

### Caching

Set cache headers in `nuxt.config.ts`:

```ts
routeRules: {
  '/api/**': { cache: { maxAge: 60 * 10 } },
  '/**': { cache: { maxAge: 60 * 60 * 24 } },
}
```

---

## Environment Variables

Available in components:

```ts
const apiEndpoint = useRuntimeConfig().public.storyblokToken
// Access via: import { useRuntimeConfig } from '#app'
```

Or directly from `.env.local`:

```ts
console.log(process.env.NUXT_PUBLIC_SITE_URL)
```

**Only `NUXT_PUBLIC_*` variables are exposed to client.**

---

## Debugging

### Console Logging

```ts
console.log('Data:', data)
console.error('Error:', error)
```

### Nuxt DevTools

Press `Shift` (`⇧`) + `Alt` (`⌥`) + `D` to open DevTools:
- Component tree
- State inspection
- Timeline
- Network

### TypeScript Validation

```bash
npx nuxi typecheck
```

---

## Build & Deployment

```bash
# Development
npm run dev              # HTTPS on localhost:3000

# Production build
npm run build            # Creates .output/
npm run preview          # Preview build locally

# Deploy to Netlify
git push origin main     # Auto-deploys

# Deploy to Hostinger
# Method 1: Git auto-deploy (if supported)
# Method 2: SFTP upload of `.output/public` folder
```

---

## Resources

- [Nuxt 3 Docs](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vue i18n](https://vue-i18n.intlify.dev)
- [TypeScript in Vue](https://vuejs.org/guide/typescript/overview.html)

---

**Happy coding!** Feel free to extend this architecture as the project grows.
