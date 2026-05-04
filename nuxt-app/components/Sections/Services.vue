<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface" id="services">
    <div class="max-w-7xl mx-auto space-y-16 lg:space-y-20">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div class="w-full lg:w-1/2 relative pb-16 lg:pb-0">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <img
            class="rounded-2xl relative z-10 w-full shadow-2xl service-visual-image"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&q=80&fm=webp"
            alt="Software planning board and laptop"
            width="637"
            height="425"
            loading="lazy"
            decoding="async"
            importance="low"
          />
          <div class="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-primary to-primary-container p-6 lg:p-8 rounded-xl shadow-xl z-20">
            <div class="text-on-primary text-3xl lg:text-4xl font-bold">
              {{ $t('services.projectsDelivered') }}
            </div>
            <div class="text-on-primary/70 text-xs font-semibold tracking-wider uppercase">
              {{ $t('services.projectsDeliveredLabel') }}
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-6 sm:p-4 p-2">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
            {{ $t('services.title') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant leading-relaxed">
            {{ $t('services.description1') }}
          </p>
          <p class="text-body-lg text-on-surface-variant leading-relaxed">
            {{ $t('services.description2') }}
          </p>
          <ul class="space-y-4 pt-2">
            <li
              v-for="(value, i) in servicesValues"
              :key="i"
              class="flex items-center gap-3"
            >
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">
                check_circle
              </span>
              <span class="font-medium">{{ value }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-3 pt-2">
            <ChipsTechnicalGhostChip
              v-for="(tag, i) in servicesTags"
              :key="i"
              :label="tag"
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardsServiceCard
          v-for="(service, i) in servicesItems"
          :key="i"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const servicesValues = computed(() =>
  (tm('services.values') as string[]).map(value => rt(value))
)

const servicesTags = computed(() =>
  (tm('services.tags') as string[]).map(tag => rt(tag))
)

const servicesItems = computed(() =>
  (tm('services.items') as any[]).map(item => ({
    icon: rt(item.icon),
    title: rt(item.title),
    description: rt(item.description),
  }))
)
</script>

<style scoped>
.service-visual-image {
  transition: transform 700ms cubic-bezier(0.21, 1, 0.36, 1), filter 700ms cubic-bezier(0.21, 1, 0.36, 1);
  filter: saturate(0.9) contrast(1.02);
}

.service-visual-image:hover {
  transform: scale(1.02);
  filter: saturate(1.05) contrast(1.04);
}
</style>
