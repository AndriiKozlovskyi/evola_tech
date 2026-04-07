<template>
  <header class="fixed top-0 w-full z-50 glass-nav">
    <nav class="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">
      <!-- Brand -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-on-surface">
        Evola<span class="text-primary">Tech</span>
      </NuxtLink>

      <!-- Navigation Links (Desktop) -->
      <div class="hidden lg:flex items-center gap-8 font-medium text-sm">
        <NuxtLink to="/#home" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.home') }}
        </NuxtLink>
        <NuxtLink to="/#portfolio" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.portfolio') }}
        </NuxtLink>
        <NuxtLink to="/#services" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.services') }}
        </NuxtLink>
        <NuxtLink to="/#about" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.about') }}
        </NuxtLink>
        <NuxtLink to="/#contact" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.contact') }}
        </NuxtLink>
      </div>

      <!-- Language & CTA (Desktop) -->
      <div class="hidden lg:flex items-center gap-4">
        <button
          @click="toggleLanguage"
          class="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-surface-container-low"
        >
          {{ currentLocale === 'en' ? 'DE' : 'EN' }}
        </button>
        <NuxtLink
          to="/#contact"
          class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {{ $t('navigation.cta') }}
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden text-on-surface p-2"
        aria-label="Toggle menu"
      >
        <span class="material-symbols-outlined text-2xl">
          {{ mobileMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden glass-nav border-t border-outline-variant/10">
        <div class="flex flex-col px-6 py-6 gap-4 max-w-7xl mx-auto">
          <NuxtLink to="/#home" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
            {{ $t('navigation.home') }}
          </NuxtLink>
          <NuxtLink to="/#portfolio" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
            {{ $t('navigation.portfolio') }}
          </NuxtLink>
          <NuxtLink to="/#services" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
            {{ $t('navigation.services') }}
          </NuxtLink>
          <NuxtLink to="/#about" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
            {{ $t('navigation.about') }}
          </NuxtLink>
          <NuxtLink to="/#contact" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
            {{ $t('navigation.contact') }}
          </NuxtLink>
          <div class="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
            <button
              @click="toggleLanguage"
              class="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors"
            >
              {{ currentLocale === 'en' ? 'DE' : 'EN' }}
            </button>
            <NuxtLink
              to="/#contact"
              @click="mobileMenuOpen = false"
              class="flex-1 text-center bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              {{ $t('navigation.cta') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer for fixed header -->
  <div class="h-[72px]"></div>
</template>

<script setup lang="ts">
const { currentLocale, toggleLanguage } = useLanguage()
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.glass-nav {
  background: rgba(247, 249, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
