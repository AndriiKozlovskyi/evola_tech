<template>
  <section class="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low" id="portfolio">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-on-surface mb-4">
          {{ $t('portfolio.title') }}
        </h2>
        <div class="w-16 h-1 bg-primary rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardsPortfolioCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { projects } = useProjects()
</script>
