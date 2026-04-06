<template>
  <div class="min-h-screen bg-surface text-on-surface flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
