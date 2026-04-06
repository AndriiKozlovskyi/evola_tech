# 🚀 Quick Reference Guide

Fast lookup for common Nuxt 3 development tasks.

## Setup & Installation

```bash
# Install dependencies
npm install

# Setup local SSL (one-time)
mkcert localhost && mkcert -install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Component Template Snippets

### Basic Component
```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
const message = ref('Hello')
</script>

<style scoped>
div {
  padding: 1rem;
}
</style>
```

### Component with Props
```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
})
</script>

<template>
  <div>
    <h2>{{ props.title }}</h2>
    <p>Count: {{ props.count }}</p>
  </div>
</template>
```

### Component with Emits
```vue
<script setup lang="ts">
const emit = defineEmits<{
  click: [value: string]
}>()
</script>

<template>
  <button @click="emit('click', 'clicked')">Click me</button>
</template>
```

### Component with Slots
```vue
<template>
  <div class="card">
    <header><slot name="header" /></header>
    <main><slot /></main>
  </div>
</template>
```

## Routing & Navigation

```vue
<!-- Navigate to route -->
<NuxtLink to="/">Home</NuxtLink>
<NuxtLink :to="localePath('/')">Home (i18n-aware)</NuxtLink>

<!-- Get current route -->
<script setup>
const route = useRoute()
console.log(route.path)
</script>

<!-- Navigate programmatically -->
<script setup>
const router = useRouter()
router.push('/')
</script>
```

## Composables

### Create Composable
```ts
// composables/useExample.ts
export const useExample = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count: readonly(count), increment }
}
```

### Use Composable
```vue
<script setup>
const { count, increment } = useExample()
</script>
```

## Internationalization (i18n)

```vue
<!-- Display translated text -->
<h1>{{ $t('hero.headline') }}</h1>

<!-- Get current language -->
<script setup>
const { currentLocale, toggleLanguage } = useLanguage()
</script>

<!-- Add translation -->
<!-- 1. Edit locales/en.json and locales/de.json -->
<!-- 2. Use: {{ $t('key.path') }} -->
```

## State Management

```ts
// Ref (primitive)
const count = ref(0)
count.value++

// Computed (derived)
const doubled = computed(() => count.value * 2)

// Watch (side effects)
watch(count, (newValue) => {
  console.log('Changed to:', newValue)
})
```

## API Calls

```ts
// Server API
const { data } = await useFetch('/api/projects')

// External API
const { data } = await useFetch('https://api.example.com/data', {
  headers: { 'Authorization': 'Bearer token' }
})

// Form submission
await $fetch('/api/contact', {
  method: 'POST',
  body: { name, email, message }
})
```

## Styling

```vue
<!-- Tailwind classes -->
<div class="bg-primary text-on-primary px-4 py-2 rounded-md">
  Button
</div>

<!-- Inline styles -->
<div :style="{ backgroundColor: '#004275', padding: '1rem' }">
  Styled
</div>

<!-- CSS module -->
<style module>
.container {
  display: flex;
}
</style>

<template>
  <div :class="$style.container">Container</div>
</template>
```

## Conditional Rendering

```vue
<!-- v-if -->
<div v-if="isVisible">Visible</div>
<div v-else-if="isLoading">Loading</div>
<div v-else>Hidden</div>

<!-- v-show (CSS display) -->
<div v-show="isVisible">Visible</div>

<!-- v-for -->
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
```

## Form Handling

```vue
<script setup>
const form = reactive({
  name: '',
  email: '',
})

const handleSubmit = () => {
  console.log(form)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.name" type="text" />
    <input v-model="form.email" type="email" />
    <button type="submit">Submit</button>
  </form>
</template>
```

## Error Handling

```ts
try {
  const data = await $fetch('/api/data')
} catch (error) {
  console.error('API error:', error)
}
```

## Environment Variables

```ts
// Public (exposed to client)
const config = useRuntimeConfig()
const token = config.public.storyblokToken

// Server-only (in API routes)
const secret = process.env.SECRET_KEY
```

## Debugging

```ts
// Console logging
console.log('Debug:', data)

// Nuxt DevTools (Shift+Alt+D)
// - Component tree
// - Timeline
// - Network

// TypeCheck
npx nuxi typecheck
```

## Project Files Quick Reference

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Main config (modules, build, server) |
| `tailwind.config.ts` | Design tokens & Tailwind config |
| `tsconfig.json` | TypeScript configuration |
| `package.json` | Dependencies & scripts |
| `.env.local` | Local environment variables |
| `app.vue` | Root component |
| `pages/` | File-based routes |
| `components/` | Reusable Vue components (auto-imported) |
| `composables/` | Shareable logic (auto-imported) |
| `layouts/` | Page layouts |
| `plugins/` | Global plugins (auto-loaded) |
| `server/api/` | API routes |
| `locales/` | i18n translations |
| `assets/css/` | Global styles |
| `public/` | Static files |

## Color Tokens (Tailwind)

```
Primary:        bg-primary, text-primary (#004275)
On Primary:     text-on-primary (#ffffff)
Surface:        bg-surface (#f7f9ff)
Surface Low:    bg-surface-container-low (#f1f4f9)
Surface Lowest: bg-surface-container-lowest (#ffffff)
Error:          bg-error (#ba1a1a)
On Surface:     text-on-surface (#181c20)

Full list: tailwind.config.ts
```

## Common Commands

```bash
# Development
npm run dev                  # Start dev server

# Building
npm run build               # Build for prod
npm run preview             # Preview build

# Code quality (future)
npx nuxi typecheck          # TypeScript check
npm run lint                # Lint (if installed)
npm run format              # Format (if installed)
```

## Useful Keyboard Shortcuts (VS Code)

```
Cmd+P            Quick file open
Cmd+Shift+F      Find in files (for i18n text)
Cmd+B            Toggle sidebar
Cmd+J            Toggle terminal
F2               Rename symbol
Cmd+D            Select next occurrence
Alt+Up/Down      Move line up/down
```

## Keyboard Shortcuts (Development)

```
npm run dev → https://localhost:3000
Shift+Alt+D     Open Nuxt DevTools
F12             Browser DevTools
```

## Performance Tips

1. **Lazy load components:**
   ```vue
   <component :is="() => import('~components/HeavyComponent')" />
   ```

2. **Use `readonly()` for props:**
   ```ts
   return { data: readonly(data) }
   ```

3. **Optimize images:**
   - Use WebP format
   - Compress before upload
   - Use `<NuxtImg />` for lazy loading

4. **Cache API responses:**
   ```ts
   await useFetch('/api/data', {
     key: 'projects',  // Caches request
   })
   ```

## SEO Best Practices

1. **Add page meta:**
   ```ts
   definePageMeta({
     name: 'ProjectDetail',
   })
   
   useHead({
     title: 'Project Title',
     meta: [
       { name: 'description', content: 'Project description' }
     ]
   })
   ```

2. **Structured data:**
   ```ts
   useHead({
     script: [
       {
         type: 'application/ld+json',
         children: JSON.stringify({ ... })
       }
     ]
   })
   ```

## Browser DevTools Tips

1. **Console:** Check for JS errors
2. **Network:** Verify API calls, caching headers
3. **Elements:** Inspect CSS (Tailwind classes)
4. **Application → Local Storage:** Check i18n language persisted

---

**For detailed explanations, see:**
- [README.md](README.md) — Setup & features
- [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) — Architecture & patterns
- [SETUP_QUICK_START.md](SETUP_QUICK_START.md) — Getting started
