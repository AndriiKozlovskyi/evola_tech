<template>
  <header class="fixed top-0 w-full z-50 glass-nav">
    <nav class="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">
      <!-- Brand -->
      <NuxtLinkLocale to="/" class="text-2xl font-bold tracking-tighter text-on-surface">
        Evola<span class="text-primary">Tec</span>
      </NuxtLinkLocale>

      <!-- Navigation Links (Desktop) -->
      <div class="hidden lg:flex items-center gap-8 font-medium text-sm">
        <NuxtLinkLocale to="/#home" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.home') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#portfolio" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.portfolio') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#services" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.services') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#workflow" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.workflow') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#about" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.about') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#pricing" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.pricing') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/#contact" class="text-on-surface-variant hover:text-primary transition-colors">
          {{ $t('navigation.contact') }}
        </NuxtLinkLocale>
      </div>

      <!-- Language Dropdown & CTA (Desktop) -->
      <div class="hidden lg:flex items-center gap-4">
        <div class="relative">
          <button
            @click="languageDropdownOpen = !languageDropdownOpen"
            class="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-surface-container-low flex items-center gap-2"
          >
            {{ currentLocale.toUpperCase() }}
            <span class="material-symbols-outlined text-base" :style="{ transform: languageDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease' }">
              expand_more
            </span>
          </button>
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="languageDropdownOpen" class="absolute top-full right-0 mt-2 bg-surface border border-outline-variant/20 rounded-lg shadow-lg overflow-hidden min-w-[140px] z-50">
              <button
                v-for="lang in availableLocales"
                :key="lang"
                @click="selectLanguage(lang)"
                :class="[
                  'w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-container-low',
                  currentLocale === lang ? 'text-primary bg-surface-container-low' : 'text-on-surface-variant hover:text-primary'
                ]"
              >
                {{ localeNames[lang] }}
              </button>
            </div>
          </Transition>
        </div>
        <button
          @click="smoothScrollToContact"
          class="flex items-center justify-center bg-gradient-to-br from-primary to-primary-container text-on-primary w-44 h-11 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          {{ $t('navigation.cta') }}
        </button>
      </div>

      <!-- Mobile Header: Language Dropdown + Menu Button -->
      <div class="lg:hidden flex items-center gap-3">
        <!-- Language Dropdown (Mobile Header) -->
        <div class="relative">
          <button
            @click="languageDropdownOpenMobile = !languageDropdownOpenMobile"
            class="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-surface-container-low flex items-center gap-1"
          >
            {{ currentLocale.toUpperCase() }}
            <span class="material-symbols-outlined text-base" :style="{ transform: languageDropdownOpenMobile ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease' }">
              expand_more
            </span>
          </button>
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="languageDropdownOpenMobile" class="absolute top-full right-0 mt-2 bg-surface border border-outline-variant/20 rounded-lg shadow-lg overflow-hidden min-w-[140px] z-50">
              <button
                v-for="lang in availableLocales"
                :key="lang"
                @click="selectLanguageMobile(lang)"
                :class="[
                  'w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-container-low',
                  currentLocale === lang ? 'text-primary bg-surface-container-low' : 'text-on-surface-variant hover:text-primary'
                ]"
              >
                {{ localeNames[lang] }}
              </button>
            </div>
          </Transition>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-on-surface p-2"
          aria-label="Toggle menu"
        >
          <span class="material-symbols-outlined text-2xl">
            {{ mobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
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
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-40 pt-[72px]">
        <button
          class="absolute inset-0 bg-black/15 backdrop-blur-[1px]"
          @click="mobileMenuOpen = false"
          aria-label="Close menu overlay"
        ></button>

        <div class="relative glass-nav border-t border-outline-variant/10 rounded-b-2xl shadow-xl max-h-[calc(100dvh-72px)] overflow-y-auto">
          <div class="flex flex-col px-6 py-6 gap-3 max-w-7xl mx-auto">
            <NuxtLinkLocale to="/#home" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.home') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#portfolio" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.portfolio') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#services" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.services') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#workflow" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.workflow') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#about" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.about') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#pricing" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.pricing') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/#contact" @click="mobileMenuOpen = false" class="text-on-surface-variant hover:text-primary transition-colors font-medium py-2">
              {{ $t('navigation.contact') }}
            </NuxtLinkLocale>
            <div class="pt-4 border-t border-outline-variant/10 mt-2 pb-2">
              <button
                @click="smoothScrollToContactMobile"
                class="flex items-center justify-center bg-gradient-to-br from-primary to-primary-container text-on-primary w-full h-11 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              >
                {{ $t('navigation.cta') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer for fixed header -->
  <div class="h-[72px]"></div>
</template>

<script setup lang="ts">
const { currentLocale, setLanguage, availableLocales, localeNames } = useLanguage()
const mobileMenuOpen = ref(false)
const languageDropdownOpen = ref(false)
const languageDropdownOpenMobile = ref(false)
const route = useRoute()

const selectLanguage = async (lang: string) => {
  await setLanguage(lang)
  languageDropdownOpen.value = false
}

const selectLanguageMobile = async (lang: string) => {
  await setLanguage(lang)
  languageDropdownOpenMobile.value = false
}

const smoothScrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const smoothScrollToContactMobile = () => {
  mobileMenuOpen.value = false
  nextTick(() => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
    languageDropdownOpen.value = false
    languageDropdownOpenMobile.value = false
  }
)

watch(mobileMenuOpen, (isOpen) => {
  if (!import.meta.client) return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onUnmounted(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ''
})
</script>

<style scoped>
.glass-nav {
  background: rgba(247, 249, 255, 0.96);
}
</style>
