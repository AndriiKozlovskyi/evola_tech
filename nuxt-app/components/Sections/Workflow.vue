<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden" id="workflow">
    <div class="workflow-atmosphere"></div>
    <div class="workflow-grid-lines"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="mb-14 lg:mb-20 max-w-3xl">
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
          {{ $t('workflow.eyebrow') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-semibold tracking-tight text-on-surface mb-5 leading-tight">
          {{ $t('workflow.title') }}
        </h2>
        <p class="text-on-surface-variant text-body-lg leading-relaxed">
          {{ $t('workflow.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div
          v-for="(benefit, i) in workflowBenefits"
          :key="`benefit-${i}`"
          class="workflow-benefit-card"
          :style="{ animationDelay: `${i * 120}ms` }"
        >
          <span class="material-symbols-outlined text-primary text-xl">bolt</span>
          <p class="text-sm text-on-surface font-medium leading-relaxed">{{ benefit }}</p>
        </div>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/35 via-primary/15 to-transparent"></div>

        <div class="space-y-5">
          <article
            v-for="(step, i) in workflowSteps"
            :key="i"
            class="workflow-step-card"
            :style="{ animationDelay: `${140 + i * 90}ms` }"
          >
            <div class="workflow-step-dot hidden md:flex">
              <span>{{ i + 1 }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[10px] uppercase tracking-[0.2em] text-primary/90 font-bold mb-2">
                {{ step.phase }}
              </p>
              <h3 class="text-xl md:text-2xl font-semibold text-on-surface mb-2 tracking-tight">
                {{ step.title }}
              </h3>
              <p class="text-on-surface-variant leading-relaxed mb-3">
                {{ step.description }}
              </p>
              <div class="workflow-benefit-line">
                <span class="material-symbols-outlined text-primary text-lg">verified</span>
                <p class="text-sm text-on-surface font-medium">{{ step.benefit }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const workflowBenefits = computed(() =>
  (tm('workflow.benefits') as string[]).map(benefit => rt(benefit))
)

const workflowSteps = computed(() =>
  (tm('workflow.steps') as any[]).map(step => ({
    phase: rt(step.phase),
    title: rt(step.title),
    description: rt(step.description),
    benefit: rt(step.benefit),
  }))
)
</script>

<style scoped>
.workflow-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(42% 48% at 10% 15%, rgba(0, 102, 184, 0.08), transparent 70%),
    radial-gradient(36% 42% at 86% 18%, rgba(0, 163, 255, 0.1), transparent 72%),
    linear-gradient(180deg, rgba(242, 247, 255, 0.95) 0%, rgba(247, 250, 255, 0.9) 100%);
}

.workflow-grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0, 71, 117, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 117, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at 50% 20%, black 35%, transparent 92%);
  pointer-events: none;
}

.workflow-benefit-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(130, 163, 196, 0.28);
  border-radius: 0.85rem;
  box-shadow: 0 12px 24px rgba(13, 41, 74, 0.05);
  animation: workflow-rise 700ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.workflow-step-card {
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(138, 166, 199, 0.28);
  box-shadow: 0 18px 34px rgba(6, 42, 76, 0.06);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
  animation: workflow-rise 720ms cubic-bezier(0.21, 1, 0.36, 1) both;
}

.workflow-step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 42px rgba(6, 42, 76, 0.1);
  border-color: rgba(0, 102, 184, 0.35);
}

.workflow-step-dot {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 102, 184, 0.16), rgba(0, 163, 255, 0.2));
  color: rgba(0, 66, 117, 0.95);
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid rgba(0, 102, 184, 0.26);
  flex-shrink: 0;
}

.workflow-benefit-line {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.7rem;
  border-radius: 0.65rem;
  background: rgba(0, 102, 184, 0.08);
}

@keyframes workflow-rise {
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
