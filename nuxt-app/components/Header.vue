<template>
  <header class="fixed top-0 w-full z-50 glass-nav shadow-sm">
    <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
      <!-- Brand -->
      <div class="text-2xl font-bold tracking-tighter text-slate-900">
        The Architectural Curator
      </div>

      <!-- Navigation Links (Desktop) -->
      <div class="hidden md:flex items-center gap-8 font-inter tracking-tight font-medium text-sm">
        <NuxtLink
          :to="localePath('/')"
          class="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
        >
          {{ $t('navigation.home') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/#portfolio')"
          class="text-slate-600 hover:text-slate-900 transition-colors"
        >
          {{ $t('navigation.portfolio') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/#services')"
          class="text-slate-600 hover:text-slate-900 transition-colors"
        >
          {{ $t('navigation.services') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/#about')"
          class="text-slate-600 hover:text-slate-900 transition-colors"
        >
          {{ $t('navigation.about') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/#contact')"
          class="text-slate-600 hover:text-slate-900 transition-colors"
        >
          {{ $t('navigation.contact') }}
        </NuxtLink>
      </div>

      <!-- Language & CTA -->
      <div class="flex items-center gap-6">
        <button
          @click="toggleLanguage"
          class="text-slate-500 font-inter text-sm font-medium hover:text-slate-900 transition-colors"
        >
          {{ currentLocale === 'en' ? 'DE' : 'EN' }}
        </button>
        <NuxtLink
          :to="localePath('/#contact')"
          class="bg-primary text-on-primary px-5 py-2.5 rounded-md text-sm font-semibold transition-all hover:opacity-80"
        >
          {{ $t('navigation.cta') }}
        </NuxtLink>
      </div>
    </nav>
  </header>

  <!-- Spacer for fixed header -->
  <div class="h-24"></div>
</template>

<script setup lang="ts">
const { currentLocale, toggleLanguage } = useLanguage()
const localePath = useLocalePath()
</script>

<style scoped>
.glass-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
