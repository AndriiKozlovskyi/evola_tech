<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <!-- Hidden Netlify form for build-time detection -->
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input name="bot-field" />
      <input name="topic" />
      <input name="email" />
      <textarea name="message"></textarea>
    </form>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Loading splash: covers everything until fonts + window load are ready -->
    <Transition
      enter-active-class="loading-splash-transition"
      leave-active-class="loading-splash-transition"
      enter-from-class="loading-splash-hidden"
      leave-to-class="loading-splash-hidden"
    >
      <div
        v-if="isLoading"
        class="loading-splash"
        role="status"
        aria-live="polite"
        aria-label="Loading EvolaTec"
      >
        <div class="loading-content">
          <div class="loading-brand">
            Evola<span class="loading-brand-accent">Tec</span>
          </div>
          <div class="loading-bar">
            <div class="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead({
  htmlAttrs: { lang: () => locale.value },
})

const { isLoading, hide } = useLoading()
const router = useRouter()

onMounted(() => {
  const allReady = Promise.all([
    document.fonts.ready,
    new Promise<void>(resolve => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', () => resolve(), { once: true })
    }),
  ])
  const safetyCap = new Promise<void>(resolve => setTimeout(resolve, 4000))

  Promise.race([allReady, safetyCap]).then(hide)
})

// Auto-hide on any subsequent navigation (e.g. language switch).
router.afterEach(() => {
  setTimeout(hide, 300)
})
</script>

<style>
.loading-splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(60% 50% at 50% 35%, rgba(0, 163, 255, 0.08), transparent 70%),
    linear-gradient(180deg, #f7faff 0%, #eaf2fc 100%);
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: loading-rise 600ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.loading-brand {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: rgb(24, 28, 32);
  line-height: 1;
}

.loading-brand-accent {
  background: linear-gradient(135deg, rgb(0, 102, 184), rgb(0, 163, 255));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: loading-pulse 1.8s ease-in-out infinite;
}

.loading-bar {
  width: 180px;
  height: 3px;
  background: rgba(0, 102, 184, 0.1);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}

.loading-bar-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 102, 184, 0.9) 40%,
    rgba(0, 163, 255, 1) 60%,
    transparent 100%
  );
  animation: loading-slide 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  border-radius: 999px;
}

.loading-splash-transition {
  transition: opacity 500ms ease;
}

.loading-splash-hidden {
  opacity: 0;
}

@keyframes loading-slide {
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(110%);
  }
}

@keyframes loading-rise {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes loading-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
}

@media (prefers-reduced-motion: reduce) {
  .loading-content,
  .loading-brand-accent,
  .loading-bar-fill {
    animation: none !important;
  }
  .loading-splash-transition {
    transition: opacity 200ms ease;
  }
}
</style>
