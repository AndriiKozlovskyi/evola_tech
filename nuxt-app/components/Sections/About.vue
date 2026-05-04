<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low overflow-hidden relative" id="about">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
      <div class="w-full lg:w-1/2 relative">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <img
          class="rounded-2xl relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          src="/images/about/team.jpg"
          alt="Team collaboration"
          width="637"
          height="478"
          loading="lazy"
          decoding="async"
          importance="low"
        />
        <div class="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-primary to-primary-container p-6 lg:p-8 rounded-xl shadow-xl z-20">
          <div class="text-on-primary text-3xl lg:text-4xl font-bold">
            {{ $t('about.yearsExperience') }}
          </div>
          <div class="text-on-primary/70 text-xs font-semibold tracking-wider uppercase">
            {{ $t('about.yearsLabel') }}
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 space-y-6">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
          {{ $t('about.title') }}
        </h2>
        <p class="text-body-lg text-on-surface-variant leading-relaxed">
          {{ $t('about.description1') }}
        </p>
        <p class="text-body-lg text-on-surface-variant leading-relaxed">
          {{ $t('about.description2') }}
        </p>
        <ul class="space-y-4 pt-4">
          <li
            v-for="(value, i) in aboutValues"
            :key="i"
            class="flex items-center gap-3"
          >
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">
              check_circle
            </span>
            <span class="font-medium">{{ value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const aboutValues = computed(() =>
  (tm('about.values') as string[]).map(value => rt(value))
)
</script>
