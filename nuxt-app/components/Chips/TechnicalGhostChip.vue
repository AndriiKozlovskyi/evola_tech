<template>
  <span class="bg-secondary-container/30 text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>
