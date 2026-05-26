<template>
  <section
    id="ai-search"
    class="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden bg-surface"
    itemscope
    itemtype="https://schema.org/Service"
  >
    <meta itemprop="serviceType" content="Generative Engine Optimization" />
    <meta itemprop="provider" content="EvolaTec" />

    <div class="ai-atmosphere"></div>

    <div class="max-w-7xl mx-auto relative z-10 space-y-20">
      <!-- Header -->
      <header class="max-w-3xl">
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
          {{ $t('aiSearch.eyebrow') }}
        </p>
        <h2
          class="text-3xl md:text-5xl font-semibold tracking-tight text-on-surface mb-5 leading-tight"
          itemprop="name"
        >
          {{ $t('aiSearch.title') }}
        </h2>
        <p class="text-on-surface-variant text-body-lg leading-relaxed" itemprop="description">
          {{ $t('aiSearch.subtitle') }}
        </p>
      </header>

      <!-- What is GEO -->
      <article class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        <div class="lg:col-span-1">
          <h3 class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-3">
            {{ $t('aiSearch.what.title') }}
          </h3>
          <div class="ai-pill">
            <span class="material-symbols-outlined text-primary text-base">smart_toy</span>
            <span class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
              ChatGPT · Perplexity · Gemini · Claude
            </span>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-4">
          <p class="text-on-surface text-body-lg leading-relaxed">
            {{ $t('aiSearch.what.p1') }}
          </p>
          <p class="text-on-surface-variant leading-relaxed">
            {{ $t('aiSearch.what.p2') }}
          </p>
        </div>
      </article>

      <!-- Why it matters - stats -->
      <section aria-labelledby="why-geo-heading">
        <h3 id="why-geo-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-8">
          {{ $t('aiSearch.why.title') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="(item, i) in whyItems"
            :key="`why-${i}`"
            class="ai-stat-card"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
              {{ item.stat }}
            </div>
            <p class="text-on-surface-variant leading-relaxed mt-3">{{ item.label }}</p>
          </div>
        </div>
      </section>

      <!-- Table 1: GEO vs SEO -->
      <section aria-labelledby="geo-vs-seo-heading">
        <div class="mb-6 max-w-3xl">
          <h3 id="geo-vs-seo-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-2">
            {{ $t('aiSearch.geoVsSeo.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('aiSearch.geoVsSeo.caption') }}</p>
        </div>
        <div class="ai-table-wrapper">
          <table class="ai-table ai-table-3col">
            <thead>
              <tr>
                <th v-for="(header, i) in geoVsSeoHeaders" :key="`gvsh-${i}`" :class="i === 2 ? 'ai-th-highlight' : ''">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in geoVsSeoRows" :key="`gvsr-${i}`">
                <th scope="row" class="ai-row-label">{{ row[0] }}</th>
                <td :data-label="geoVsSeoHeaders[1]">{{ row[1] }}</td>
                <td class="ai-td-highlight" :data-label="geoVsSeoHeaders[2]">{{ row[2] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Table 2: EvolaTec vs typical agency -->
      <section aria-labelledby="advantage-heading">
        <div class="mb-6 max-w-3xl">
          <h3 id="advantage-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-2">
            {{ $t('aiSearch.advantage.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('aiSearch.advantage.caption') }}</p>
        </div>
        <div class="ai-table-wrapper">
          <table class="ai-table ai-table-3col">
            <thead>
              <tr>
                <th v-for="(header, i) in advantageHeaders" :key="`advh-${i}`" :class="i === 2 ? 'ai-th-highlight' : ''">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in advantageRows" :key="`advr-${i}`">
                <th scope="row" class="ai-row-label">{{ row[0] }}</th>
                <td :data-label="advantageHeaders[1]">{{ row[1] }}</td>
                <td class="ai-td-highlight ai-td-with-icon flex" :data-label="advantageHeaders[2]">
                  <span class="material-symbols-outlined text-primary ai-cell-icon" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                  <span>{{ row[2] }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Table 3: What's included -->
      <section aria-labelledby="checklist-heading">
        <div class="mb-6 max-w-3xl">
          <h3 id="checklist-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-2">
            {{ $t('aiSearch.checklist.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('aiSearch.checklist.caption') }}</p>
        </div>
        <div class="ai-table-wrapper">
          <table class="ai-table ai-table-checklist">
            <thead>
              <tr>
                <th v-for="(header, i) in checklistHeaders" :key="`chh-${i}`">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in checklistRows" :key="`chr-${i}`">
                <th scope="row" class="ai-row-label ai-checklist-label">
                  <span class="material-symbols-outlined text-primary ai-cell-icon" style="font-variation-settings: 'FILL' 1;">verified</span>
                  <span>{{ row[0] }}</span>
                </th>
                <td :data-label="checklistHeaders[1]">{{ row[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ -->
      <section aria-labelledby="faq-heading">
        <h3 id="faq-heading" class="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-8">
          {{ $t('aiSearch.faq.title') }}
        </h3>
        <div class="space-y-4">
          <details
            v-for="(item, i) in faqItems"
            :key="`faq-${i}`"
            class="ai-faq-item"
            :open="i === 0"
          >
            <summary class="ai-faq-summary">
              <span class="font-semibold text-on-surface">{{ item.q }}</span>
              <span class="material-symbols-outlined text-primary ai-faq-icon">expand_more</span>
            </summary>
            <div class="ai-faq-body">
              <p class="text-on-surface-variant leading-relaxed">{{ item.a }}</p>
            </div>
          </details>
        </div>
      </section>

      <!-- CTA -->
      <div class="ai-cta-card">
        <div class="space-y-2">
          <h3 class="text-xl md:text-2xl font-semibold text-on-surface">
            {{ $t('aiSearch.cta.title') }}
          </h3>
          <p class="text-on-surface-variant">{{ $t('aiSearch.cta.subtitle') }}</p>
        </div>
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          {{ $t('aiSearch.cta.button') }}
          <span class="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const whyItems = computed(() =>
  (tm('aiSearch.why.items') as any[]).map(item => ({
    stat: rt(item.stat),
    label: rt(item.label),
  }))
)

const geoVsSeoHeaders = computed(() =>
  (tm('aiSearch.geoVsSeo.headers') as string[]).map(h => rt(h))
)
const geoVsSeoRows = computed(() =>
  (tm('aiSearch.geoVsSeo.rows') as string[][]).map(row => row.map(cell => rt(cell)))
)

const advantageHeaders = computed(() =>
  (tm('aiSearch.advantage.headers') as string[]).map(h => rt(h))
)
const advantageRows = computed(() =>
  (tm('aiSearch.advantage.rows') as string[][]).map(row => row.map(cell => rt(cell)))
)

const checklistHeaders = computed(() =>
  (tm('aiSearch.checklist.headers') as string[]).map(h => rt(h))
)
const checklistRows = computed(() =>
  (tm('aiSearch.checklist.rows') as string[][]).map(row => row.map(cell => rt(cell)))
)

const faqItems = computed(() =>
  (tm('aiSearch.faq.items') as any[]).map(item => ({
    q: rt(item.q),
    a: rt(item.a),
  }))
)
</script>

<style scoped>
.ai-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(38% 44% at 88% 12%, rgba(0, 163, 255, 0.1), transparent 72%),
    radial-gradient(34% 40% at 6% 80%, rgba(0, 102, 184, 0.08), transparent 70%);
  pointer-events: none;
}

.ai-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  background: rgba(0, 102, 184, 0.08);
  border: 1px solid rgba(0, 102, 184, 0.18);
  border-radius: 999px;
}

.ai-stat-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(138, 166, 199, 0.28);
  border-radius: 1rem;
  box-shadow: 0 14px 28px rgba(13, 41, 74, 0.05);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
  animation: ai-rise 700ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.ai-stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 40px rgba(6, 42, 76, 0.09);
  border-color: rgba(0, 102, 184, 0.32);
}

.ai-table-wrapper {
  border-radius: 1rem;
  border: 1px solid rgba(138, 166, 199, 0.3);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 16px 32px rgba(6, 42, 76, 0.05);
  overflow: hidden;
}

.ai-table {
  width: 100%;
  border-collapse: collapse;
}

.ai-table thead th {
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

.ai-th-highlight {
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.12), rgba(0, 163, 255, 0.16)) !important;
  color: rgba(0, 53, 96, 1) !important;
}

.ai-table tbody tr {
  border-bottom: 1px solid rgba(138, 166, 199, 0.18);
}

.ai-table tbody tr:last-child {
  border-bottom: none;
}

.ai-table tbody tr:hover {
  background: rgba(0, 102, 184, 0.03);
}

.ai-table th,
.ai-table td {
  padding: 1rem 1.25rem;
  vertical-align: top;
  font-size: 0.95rem;
  line-height: 1.55;
}

.ai-row-label {
  font-weight: 600;
  color: rgba(13, 41, 74, 0.92);
  width: 26%;
  background: rgba(0, 71, 117, 0.02);
}

.ai-td-highlight {
  background: rgba(0, 102, 184, 0.05);
  color: rgba(13, 41, 74, 0.94);
  font-weight: 500;
}

.ai-td-with-icon {
  display: table-cell;
}

.ai-td-with-icon .ai-cell-icon {
  font-size: 1.1rem;
  vertical-align: -3px;
  margin-right: 0.4rem;
}

.ai-checklist-label .ai-cell-icon {
  font-size: 1.1rem;
  vertical-align: -3px;
  margin-right: 0.5rem;
}

.ai-table-checklist .ai-row-label {
  width: 32%;
}

/* Mobile: stack each row as a card with labelled cells */
@media (max-width: 767px) {
  .ai-table-wrapper {
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
  }

  .ai-table,
  .ai-table thead,
  .ai-table tbody,
  .ai-table tr,
  .ai-table th,
  .ai-table td {
    display: block;
    width: 100%;
    padding: 0;
    background: transparent;
  }

  .ai-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .ai-table tbody {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .ai-table tbody tr {
    border: 1px solid rgba(138, 166, 199, 0.3);
    border-radius: 0.9rem;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 22px rgba(6, 42, 76, 0.06);
    padding: 1rem 1.05rem 1.05rem;
    overflow: hidden;
  }

  .ai-table tbody tr:hover {
    background: rgba(255, 255, 255, 0.94);
  }

  .ai-table .ai-row-label {
    width: auto;
    background: transparent;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(13, 41, 74, 0.96);
    padding: 0 0 0.7rem 0;
    margin-bottom: 0.7rem;
    border-bottom: 1px solid rgba(138, 166, 199, 0.24);
    letter-spacing: -0.005em;
  }

  /* Generic cells: render data-label as a small chip above the value */
  .ai-table tbody td {
    padding: 0.85rem 0.9rem;
    font-size: 0.92rem;
    line-height: 1.55;
    border-radius: 0.7rem;
    background: rgba(247, 250, 255, 0.95);
    border: 1px solid rgba(138, 166, 199, 0.2);
  }

  .ai-table tbody td + td {
    margin-top: 0.6rem;
  }

  .ai-table tbody td::before {
    content: attr(data-label);
    display: block;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(0, 71, 117, 0.65);
    margin-bottom: 0.35rem;
  }

  /* Highlighted (GEO / EvolaTec) column on mobile */
  .ai-table tbody td.ai-td-highlight {
    background: linear-gradient(135deg, rgba(0, 102, 184, 0.07), rgba(0, 163, 255, 0.09));
    border: 1px solid rgba(0, 102, 184, 0.28);
    color: rgba(13, 41, 74, 0.96);
    font-weight: 500;
  }

  .ai-table tbody td.ai-td-highlight::before {
    color: rgba(0, 71, 117, 0.92);
  }

  .ai-table tbody td.ai-td-with-icon {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .ai-table tbody td.ai-td-with-icon::before {
    flex-basis: 100%;
  }

  .ai-table tbody td.ai-td-with-icon .ai-cell-icon {
    font-size: 1.15rem;
    margin-right: 0.45rem;
  }

  /* Checklist (2-col) mobile: label + body stacked, no extra chip on body */
  .ai-table-checklist .ai-checklist-label {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 102, 184, 0.2);
  }

  .ai-table-checklist .ai-checklist-label .ai-cell-icon {
    color: rgb(0, 102, 184);
  }

  .ai-table-checklist tbody td {
    background: transparent;
    border: none;
    padding: 0;
    color: rgba(13, 41, 74, 0.78);
  }

  .ai-table-checklist tbody td::before {
    display: none;
  }
}

.ai-faq-item {
  border: 1px solid rgba(138, 166, 199, 0.3);
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.88);
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.ai-faq-item[open] {
  border-color: rgba(0, 102, 184, 0.35);
  box-shadow: 0 14px 28px rgba(6, 42, 76, 0.06);
}

.ai-faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  list-style: none;
}

.ai-faq-summary::-webkit-details-marker {
  display: none;
}

.ai-faq-icon {
  transition: transform 260ms ease;
}

.ai-faq-item[open] .ai-faq-icon {
  transform: rotate(180deg);
}

.ai-faq-body {
  padding: 0 1.25rem 1.25rem 1.25rem;
}

.ai-cta-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.75rem 1.75rem;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.08), rgba(0, 163, 255, 0.1));
  border: 1px solid rgba(0, 102, 184, 0.2);
  border-radius: 1.25rem;
}

@media (min-width: 768px) {
  .ai-cta-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2.25rem;
  }
}

@keyframes ai-rise {
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
