<template>
  <div class="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ambient-shadow">
<!-- Image -->
    <div class="relative overflow-hidden rounded-t-2xl">
      <img
        :src="project.image"
        :alt="`${project.title} — ${project.category}`"
        width="640"
        height="240"
        loading="lazy"
        decoding="async"
        class="w-full h-48 xl:h-60 object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
      />
      <!-- subtle orange tint overlay on hover -->
      <div class="absolute inset-0 bg-[#f05b04] opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>
    <div class="p-6 lg:p-8">
      <span class="text-[10px] font-bold text-primary uppercase tracking-widest">
        {{ project.category }}
      </span>
      <h3 class="text-lg font-bold mt-2 mb-5 text-on-surface">{{ project.title }}</h3>
      <a
        :href="project.link || '#'"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${$t('portfolio.visitWebsite')} – ${project.title}`"
        class="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all"
      >
        {{ $t('portfolio.visitWebsite') }}
        <span class="material-symbols-outlined text-base">north_east</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/composables/useProjects'

interface Props {
  project: Project
}

defineProps<Props>()
</script>
