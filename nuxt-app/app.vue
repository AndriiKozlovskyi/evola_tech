<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped>
body {
  font-family: 'Inter', sans-serif;
  background-color: #f7f9ff;
  color: #181c20;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.glass-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
}

.ambient-shadow:hover {
  box-shadow: 0 20px 40px rgba(0, 66, 117, 0.06);
}

.ghost-border {
  border: 1px solid rgba(193, 199, 210, 0.2);
}
</style>
