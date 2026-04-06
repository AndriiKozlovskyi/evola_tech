<template>
  <div class="group relative bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] ambient-shadow">
    <div class="aspect-video bg-slate-200 overflow-hidden">
      <img
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        :src="project.image"
        :alt="project.title"
      />
    </div>
    <div class="p-8">
      <span class="text-[10px] font-bold text-primary uppercase tracking-widest">
        {{ project.category }}
      </span>
      <h3 class="text-xl font-bold mt-2 mb-3">{{ project.title }}</h3>
      <p class="text-sm text-on-surface-variant mb-6">{{ project.description }}</p>
      <NuxtLink
        :to="localePath(project.link || '#')"
        class="inline-flex items-center gap-2 text-primary font-semibold text-sm"
      >
        {{ $t('portfolio.visitWebsite') }}
        <span class="material-symbols-outlined text-sm">north_east</span>
      </NuxtLink>
    </div>
    <div class="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <button class="bg-on-primary text-primary px-6 py-3 rounded-md font-bold hover:opacity-90">
        Go to Site
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/composables/useProjects'

interface Props {
  project: Project
}

defineProps<Props>()

const localePath = useLocalePath()
</script>

<style scoped>
.ambient-shadow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.ambient-shadow:hover {
  box-shadow: 0 20px 40px rgba(0, 66, 117, 0.06);
}
</style>
