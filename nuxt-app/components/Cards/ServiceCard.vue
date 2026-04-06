<template>
  <div class="bg-surface-container-lowest p-8 rounded-xl ghost-border ambient-shadow transition-all hover:scale-[1.02]">
    <span class="material-symbols-outlined text-primary text-4xl mb-4">
      {{ service.icon }}
    </span>
    <h3 class="text-lg font-bold mb-2">{{ service.title }}</h3>
    <p class="text-sm text-on-surface-variant">{{ service.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
}

interface Props {
  service: Service
}

defineProps<Props>()
</script>

<style scoped>
.ghost-border {
  border: 1px solid rgba(193, 199, 210, 0.2);
}

.ambient-shadow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.ambient-shadow:hover {
  box-shadow: 0 20px 40px rgba(0, 66, 117, 0.06);
}
</style>
