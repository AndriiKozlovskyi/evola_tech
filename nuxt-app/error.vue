<template>
  <div class="min-h-screen bg-surface text-on-surface flex flex-col">
    <Header />
    <main class="flex-grow flex items-center justify-center px-6 lg:px-8">
      <div class="text-center max-w-md space-y-6">
        <div class="text-8xl font-bold text-primary/20 leading-none select-none">
          {{ error?.statusCode ?? '?' }}
        </div>
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
          {{ is404 ? $t('error.notFoundTitle') : $t('error.defaultTitle') }}
        </h1>
        <p class="text-on-surface-variant leading-relaxed">
          {{ is404 ? $t('error.notFoundMessage') : $t('error.defaultMessage') }}
        </p>
        <button
          @click="handleGoHome"
          class="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span class="material-symbols-outlined">arrow_back</span>
          {{ $t('error.goHome') }}
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number; message?: string } | null }>()

const { t } = useI18n()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: () => is404.value ? t('error.notFoundTitle') : t('error.defaultTitle'),
})

const handleGoHome = () => clearError({ redirect: '/' })
</script>
