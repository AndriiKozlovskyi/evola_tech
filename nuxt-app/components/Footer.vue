<template>
  <footer class="bg-slate-100 py-12 mt-32">
    <div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 w-full">
      <!-- Brand -->
      <div class="text-lg font-bold text-slate-900">
        {{ $t('footer.company') }}
      </div>

      <!-- Links -->
      <div class="flex gap-8 font-inter text-xs tracking-wider uppercase font-semibold">
        <NuxtLink
          :to="localePath('/imprint')"
          class="text-slate-500 hover:text-slate-900 hover:underline transition-all"
        >
          {{ $t('footer.links.imprint') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/privacy')"
          class="text-slate-500 hover:text-slate-900 hover:underline transition-all"
        >
          {{ $t('footer.links.privacy') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/gdpr')"
          class="text-slate-500 hover:text-slate-900 hover:underline transition-all"
        >
          {{ $t('footer.links.gdpr') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/terms')"
          class="text-slate-500 hover:text-slate-900 hover:underline transition-all"
        >
          {{ $t('footer.links.terms') }}
        </NuxtLink>
      </div>

      <!-- Copyright -->
      <div class="text-slate-500 text-xs font-medium">
        {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
