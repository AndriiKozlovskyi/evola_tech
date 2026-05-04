<template>
  <div class="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ambient-shadow">
    <div class="aspect-video bg-surface-container-low overflow-hidden">
     <picture>
  <!-- WebP -->
  <source
    type="image/webp"
    :srcset="`
      ${project.image.replace('.jpg', '-400.webp')} 400w,
      ${project.image.replace('.jpg', '-640.webp')} 640w,
      ${project.image.replace('.jpg', '-800.webp')} 800w
    `"
    sizes="(max-width: 768px) 100vw, 400px"
  />

  <!-- fallback -->
  <img
    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
    :src="project.image.replace('.jpg', '-400.jpg')"
    :srcset="`
      ${project.image.replace('.jpg', '-400.jpg')} 400w,
      ${project.image.replace('.jpg', '-640.jpg')} 640w
    `"
    sizes="(max-width: 768px) 100vw, 400px"
    :alt="project.title"
    width="400"
    height="236"
    loading="lazy"
    decoding="async"
  />
</picture>
    </div>
    <div class="p-6 lg:p-8">
      <span class="text-[10px] font-bold text-primary uppercase tracking-widest">
        {{ project.category }}
      </span>
      <h3 class="text-lg font-bold mt-2 mb-2 text-on-surface">{{ project.title }}</h3>
      <p class="text-sm text-on-surface-variant mb-5 leading-relaxed">{{ project.description }}</p>
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
