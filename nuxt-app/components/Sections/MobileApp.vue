<template>
  <section
    id="mobile-app"
    class="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden bg-surface"
    itemscope
    itemtype="https://schema.org/Service"
  >
    <meta itemprop="serviceType" content="Mobile Application Development" />
    <meta itemprop="provider" content="EvolaTec" />

    <div class="mobile-atmosphere"></div>

    <div class="max-w-7xl mx-auto relative z-10 space-y-20">
      <!-- Header -->
      <header class="max-w-3xl">
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
          {{ $t('mobileApp.eyebrow') }}
        </p>
        <h2
          class="text-3xl md:text-5xl font-semibold tracking-tight text-on-surface mb-5 leading-tight"
          itemprop="name"
        >
          {{ $t('mobileApp.title') }}
        </h2>
        <p class="text-on-surface-variant text-body-lg leading-relaxed" itemprop="description">
          {{ $t('mobileApp.subtitle') }}
        </p>
      </header>

      <!-- Intro -->
      <article class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        <div class="lg:col-span-1">
          <h3 class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-3">
            {{ $t('mobileApp.intro.title') }}
          </h3>
          <div class="mobile-pill">
            <span class="material-symbols-outlined text-primary text-base">stacks</span>
            <span class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
              React Native · Flutter · Swift · Kotlin
            </span>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-4">
          <p class="text-on-surface text-body-lg leading-relaxed">
            {{ $t('mobileApp.intro.p1') }}
          </p>
          <p class="text-on-surface-variant leading-relaxed">
            {{ $t('mobileApp.intro.p2') }}
          </p>
        </div>
      </article>

      <!-- Feature cards -->
      <section aria-labelledby="mobile-features-heading">
        <h3 id="mobile-features-heading" class="sr-only">Mobile app capabilities</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(feature, i) in features"
            :key="`mf-${i}`"
            class="mobile-feature-card"
            :style="{ animationDelay: `${i * 110}ms` }"
          >
            <span class="material-symbols-outlined text-primary mobile-feature-icon">
              {{ feature.icon }}
            </span>
            <h4 class="font-semibold text-on-surface mt-3 mb-2 text-lg leading-tight">
              {{ feature.title }}
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Checklist table -->
      <section aria-labelledby="mobile-checklist-heading">
        <div class="mb-6 max-w-3xl">
          <h3 id="mobile-checklist-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-2">
            {{ $t('mobileApp.checklist.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('mobileApp.checklist.caption') }}</p>
        </div>
        <div class="mobile-table-wrapper">
          <table class="mobile-table">
            <thead>
              <tr>
                <th v-for="(header, i) in checklistHeaders" :key="`mh-${i}`">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in checklistRows" :key="`mr-${i}`">
                <th scope="row" class="mobile-row-label">
                  <span class="material-symbols-outlined text-primary mobile-cell-icon" style="font-variation-settings: 'FILL' 1;">verified</span>
                  <span>{{ row[0] }}</span>
                </th>
                <td :data-label="checklistHeaders[1]">{{ row[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ -->
      <section aria-labelledby="mobile-faq-heading">
        <h3 id="mobile-faq-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-8">
          {{ $t('mobileApp.faq.title') }}
        </h3>
        <div class="space-y-4">
          <details
            v-for="(item, i) in faqItems"
            :key="`mfaq-${i}`"
            class="mobile-faq-item"
            :open="i === 0"
          >
            <summary class="mobile-faq-summary">
              <span class="font-semibold text-on-surface">{{ item.q }}</span>
              <span class="material-symbols-outlined text-primary mobile-faq-icon">expand_more</span>
            </summary>
            <div class="mobile-faq-body">
              <p class="text-on-surface-variant leading-relaxed">{{ item.a }}</p>
            </div>
          </details>
        </div>
      </section>

      <!-- CTA -->
      <div class="mobile-cta-card">
        <div class="space-y-2">
          <h3 class="text-xl md:text-2xl font-semibold text-on-surface">
            {{ $t('mobileApp.cta.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('mobileApp.cta.subtitle') }}</p>
        </div>
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          {{ $t('mobileApp.cta.button') }}
          <span class="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const features = computed(() =>
  (tm('mobileApp.features') as any[]).map(item => ({
    icon: rt(item.icon),
    title: rt(item.title),
    description: rt(item.description),
  }))
)

const checklistHeaders = computed(() =>
  (tm('mobileApp.checklist.headers') as string[]).map(h => rt(h))
)

const checklistRows = computed(() =>
  (tm('mobileApp.checklist.rows') as string[][]).map(row => row.map(cell => rt(cell)))
)

const faqItems = computed(() =>
  (tm('mobileApp.faq.items') as any[]).map(item => ({
    q: rt(item.q),
    a: rt(item.a),
  }))
)
</script>

<style scoped>
.mobile-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(36% 42% at 12% 18%, rgba(0, 102, 184, 0.08), transparent 72%),
    radial-gradient(40% 46% at 90% 82%, rgba(0, 163, 255, 0.1), transparent 72%);
  pointer-events: none;
}

.mobile-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  background: rgba(0, 102, 184, 0.08);
  border: 1px solid rgba(0, 102, 184, 0.18);
  border-radius: 999px;
}

.mobile-feature-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(138, 166, 199, 0.28);
  border-radius: 1rem;
  box-shadow: 0 14px 28px rgba(13, 41, 74, 0.05);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
  animation: mobile-rise 700ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.mobile-feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 40px rgba(6, 42, 76, 0.09);
  border-color: rgba(0, 102, 184, 0.32);
}

.mobile-feature-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.12), rgba(0, 163, 255, 0.16));
  padding: 0.6rem;
  border-radius: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.mobile-table-wrapper {
  border-radius: 1rem;
  border: 1px solid rgba(138, 166, 199, 0.3);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 16px 32px rgba(6, 42, 76, 0.05);
  overflow: hidden;
}

.mobile-table {
  width: 100%;
  border-collapse: collapse;
}

.mobile-table thead th {
  text-align: left;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 700;
  padding: 1rem 1.25rem;
  background: rgba(0, 71, 117, 0.04);
  color: rgba(0, 53, 96, 0.78);
  border-bottom: 1px solid rgba(138, 166, 199, 0.32);
}

.mobile-table tbody tr {
  border-bottom: 1px solid rgba(138, 166, 199, 0.18);
}

.mobile-table tbody tr:last-child {
  border-bottom: none;
}

.mobile-table tbody tr:hover {
  background: rgba(0, 102, 184, 0.03);
}

.mobile-table th,
.mobile-table td {
  padding: 1rem 1.25rem;
  vertical-align: top;
  font-size: 0.95rem;
  line-height: 1.55;
}

.mobile-row-label {
  font-weight: 600;
  color: rgba(13, 41, 74, 0.92);
  width: 32%;
  background: rgba(0, 71, 117, 0.02);
}

.mobile-row-label .mobile-cell-icon {
  font-size: 1.1rem;
  vertical-align: -3px;
  margin-right: 0.5rem;
}

/* Mobile responsive table */
@media (max-width: 767px) {
  .mobile-table-wrapper {
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
  }

  .mobile-table,
  .mobile-table thead,
  .mobile-table tbody,
  .mobile-table tr,
  .mobile-table th,
  .mobile-table td {
    display: block;
    width: 100%;
    padding: 0;
    background: transparent;
  }

  .mobile-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .mobile-table tbody {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .mobile-table tbody tr {
    border: 1px solid rgba(138, 166, 199, 0.3);
    border-radius: 0.9rem;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 22px rgba(6, 42, 76, 0.06);
    padding: 1rem 1.05rem 1.05rem;
  }

  .mobile-table .mobile-row-label {
    display: flex;
    align-items: center;
    width: auto;
    background: transparent;
    padding: 0 0 0.7rem 0;
    margin-bottom: 0.7rem;
    border-bottom: 1px solid rgba(138, 166, 199, 0.24);
    font-size: 1rem;
    font-weight: 700;
  }

  .mobile-table tbody td {
    color: rgba(13, 41, 74, 0.78);
    font-size: 0.92rem;
  }
}

.mobile-faq-item {
  border: 1px solid rgba(138, 166, 199, 0.3);
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.88);
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.mobile-faq-item[open] {
  border-color: rgba(0, 102, 184, 0.35);
  box-shadow: 0 14px 28px rgba(6, 42, 76, 0.06);
}

.mobile-faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  list-style: none;
}

.mobile-faq-summary::-webkit-details-marker {
  display: none;
}

.mobile-faq-icon {
  transition: transform 260ms ease;
}

.mobile-faq-item[open] .mobile-faq-icon {
  transform: rotate(180deg);
}

.mobile-faq-body {
  padding: 0 1.25rem 1.25rem 1.25rem;
}

.mobile-cta-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.75rem 1.75rem;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.08), rgba(0, 163, 255, 0.1));
  border: 1px solid rgba(0, 102, 184, 0.2);
  border-radius: 1.25rem;
}

@media (min-width: 768px) {
  .mobile-cta-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2.25rem;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes mobile-rise {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
