<template>
  <div class="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ambient-shadow">
    <div class="aspect-video bg-surface-container-low overflow-hidden">
      <picture>
        <source :srcset="project.image.replace('.jpg', '.webp')" type="image/webp">
        <img
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          :src="project.image"
          :alt="project.title"
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
          importance="low"
        />
      </picture>
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
