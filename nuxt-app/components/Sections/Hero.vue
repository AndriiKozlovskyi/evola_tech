<template>
  <section
    class="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-20"
    id="home"
  >
    <div class="max-w-4xl space-y-6 md:space-y-7">
      <!-- Availability badge -->
      <div class="hero-badge">
        <span class="hero-dot" aria-hidden="true"></span>
        <span class="text-sm font-medium text-on-surface">
          {{ $t('hero.badge') }}
        </span>
        <span class="hero-badge-sep" aria-hidden="true">·</span>
        <span class="text-sm text-on-surface-variant">
          {{ $t('hero.badgeNote') }}
        </span>
      </div>

      <!-- Eyebrow -->
      <span class="text-label-md font-bold text-primary tracking-[0.2em] uppercase block">
        {{ $t('hero.label') }}
      </span>

      <!-- Headline -->
      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-on-surface"
      >
        {{ $t('hero.headline') }}
        <span
          v-if="$t('hero.headlineHighlight')"
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container"
        >
          <br />{{ $t('hero.headlineHighlight') }}
        </span>
      </h1>

      <!-- Description -->
      <p class="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
        {{ $t('hero.description') }}
      </p>

      <!-- Capability chips -->
      <div class="flex flex-wrap gap-2.5">
        <span
          v-for="(chip, i) in heroChips"
          :key="`hero-chip-${i}`"
          class="hero-chip"
        >
          {{ chip }}
        </span>
      </div>

      <!-- CTAs -->
      <div class="pt-2 flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {{ $t('hero.cta1') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
        <a
          href="#services"
          class="ghost-border text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-surface-container-low text-center"
        >
          {{ $t('hero.cta2') }}
        </a>
      </div>

      <!-- Price anchor -->
      <p class="hero-price">
        <span class="hero-price-label">{{ $t('hero.priceLabel') }}</span>
        <span class="hero-price-sep" aria-hidden="true">—</span>
        <a href="#pricing" class="hero-price-link">
          {{ $t('hero.priceLink') }}
          <span class="material-symbols-outlined hero-price-arrow">arrow_forward</span>
        </a>
      </p>

      <!-- Stats strip -->
      <dl class="hero-stats">
        <div
          v-for="(stat, i) in heroStats"
          :key="`hero-stat-${i}`"
          class="hero-stat"
        >
          <dt class="hero-stat-value">{{ stat.value }}</dt>
          <dd class="hero-stat-label">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const heroChips = computed(() =>
  (tm('hero.chips') as string[]).map(chip => rt(chip))
)

const heroStats = computed(() =>
  (tm('hero.stats') as any[]).map(stat => ({
    value: rt(stat.value),
    label: rt(stat.label),
  }))
)
</script>

<style scoped>
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.95rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 102, 184, 0.18);
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(13, 41, 74, 0.05);
  backdrop-filter: blur(6px);
  width: fit-content;
}

.hero-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #16a34a;
  box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.55);
  animation: hero-pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  flex-shrink: 0;
}

.hero-badge-sep {
  color: rgba(13, 41, 74, 0.35);
}

@keyframes hero-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.5);
  }
  50% {
    box-shadow: 0 0 0 7px rgba(22, 163, 74, 0);
  }
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.9rem;
  background: rgba(0, 102, 184, 0.06);
  border: 1px solid rgba(0, 102, 184, 0.18);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 53, 96, 0.92);
  letter-spacing: -0.005em;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
}

.hero-chip:hover {
  background: rgba(0, 102, 184, 0.1);
  border-color: rgba(0, 102, 184, 0.3);
  transform: translateY(-1px);
}

.hero-price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 0.92rem;
  color: rgba(13, 41, 74, 0.72);
}

.hero-price-label {
  font-weight: 600;
  color: rgba(13, 41, 74, 0.95);
}

.hero-price-sep {
  color: rgba(13, 41, 74, 0.35);
}

.hero-price-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: rgb(0, 102, 184);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px dashed rgba(0, 102, 184, 0.35);
  padding-bottom: 1px;
  transition: color 200ms ease, border-color 200ms ease;
}

.hero-price-link:hover {
  color: rgb(0, 71, 117);
  border-bottom-color: rgb(0, 71, 117);
}

.hero-price-link:hover .hero-price-arrow {
  transform: translateX(3px);
}

.hero-price-arrow {
  font-size: 1rem;
  transition: transform 220ms ease;
}

.hero-stats {
  margin: 0;
  margin-top: 1rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(138, 166, 199, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 1.5rem;
}

@media (min-width: 640px) {
  .hero-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 0 1.5rem;
  }

  .hero-stat + .hero-stat {
    border-left: 1px solid rgba(138, 166, 199, 0.28);
    padding-left: 1.5rem;
  }
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.hero-stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, rgba(0, 102, 184, 1), rgba(0, 163, 255, 1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.hero-stat-label {
  margin: 0;
  font-size: 0.78rem;
  color: rgba(13, 41, 74, 0.72);
  font-weight: 500;
  line-height: 1.35;
}
</style>
