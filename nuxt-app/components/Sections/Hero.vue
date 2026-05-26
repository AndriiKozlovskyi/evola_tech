<template>
  <section
    class="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto py-8 lg:py-20"
    id="home"
  >
    <div class="max-w-4xl space-y-6 md:space-y-7">
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

      <!-- Price block -->
      <div class="hero-price">
        <div class="hero-price-amount">
          <span class="hero-price-from">{{ $t('hero.priceFrom') }}</span>
          <span class="hero-price-value">{{ $t('hero.priceValue') }}</span>
        </div>
        <span class="hero-price-divider" aria-hidden="true"></span>
        <a href="#pricing" class="hero-price-link">
          {{ $t('hero.priceLink') }}
          <span class="material-symbols-outlined hero-price-arrow">arrow_forward</span>
        </a>
      </div>

      <!-- Capability chips -->
      <div class="grid grid-cols-2 sm:grid-cols-4 items-center gap-2.5">
        <span
          v-for="(chip, i) in heroChips"
          :key="`hero-chip-${i}`"
          class="hero-chip"
        >
          {{ chip }}
        </span>
      </div>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          class="hero-cta-primary"
        >
          {{ $t('hero.cta1') }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
        <a
          href="#services"
          class="hero-cta-secondary"
        >
          {{ $t('hero.cta2') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const heroChips = computed(() =>
  (tm('hero.chips') as string[]).map(chip => rt(chip))
)
</script>

<style scoped>
.hero-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.95rem;
  background: rgba(0, 102, 184, 0.06);
  border: 1px solid rgba(0, 102, 184, 0.18);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 53, 96, 0.92);
  letter-spacing: -0.005em;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
  text-align: center;
}

.hero-chip:hover {
  background: rgba(0, 102, 184, 0.1);
  border-color: rgba(0, 102, 184, 0.3);
  transform: translateY(-1px);
}

/* Price block — prominent gradient pill */
.hero-price {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  padding: 0.65rem 1.1rem 0.65rem 1rem;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.05), rgba(0, 163, 255, 0.08));
  border: 1px solid rgba(0, 102, 184, 0.2);
  border-radius: 0.95rem;
  box-shadow: 0 6px 18px rgba(13, 41, 74, 0.05);
  width: fit-content;
  max-width: 100%;
}

.hero-price-amount {
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
}

.hero-price-from {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(0, 53, 96, 0.62);
}

.hero-price-value {
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, rgba(0, 102, 184, 1), rgba(0, 163, 255, 1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.hero-price-divider {
  width: 1px;
  height: 1.4rem;
  background: rgba(0, 102, 184, 0.22);
  flex-shrink: 0;
}

.hero-price-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: rgb(0, 102, 184);
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 200ms ease;
}

.hero-price-link:hover {
  color: rgb(0, 71, 117);
}

.hero-price-link:hover .hero-price-arrow {
  transform: translateX(3px);
}

.hero-price-arrow {
  font-size: 1.05rem;
  transition: transform 220ms ease;
}

/* CTAs */
.hero-cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.85rem;
  background: linear-gradient(135deg, rgb(0, 102, 184), rgb(0, 163, 255));
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  box-shadow: 0 10px 24px rgba(0, 102, 184, 0.22);
  transition: transform 200ms ease, box-shadow 200ms ease;
  text-decoration: none;
  white-space: nowrap;
}

.hero-cta-primary:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 14px 30px rgba(0, 102, 184, 0.28);
}

.hero-cta-primary:active {
  transform: scale(0.98);
}

.hero-cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 0.85rem;
  border: 1.5px solid rgba(0, 102, 184, 0.45);
  background: transparent;
  color: rgb(0, 102, 184);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  text-align: center;
  transition: background 200ms ease, border-color 200ms ease;
  text-decoration: none;
  white-space: nowrap;
}

.hero-cta-secondary:hover {
  background: rgba(0, 102, 184, 0.06);
  border-color: rgba(0, 102, 184, 0.65);
}

@media (max-width: 639px) {
  .hero-price {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
