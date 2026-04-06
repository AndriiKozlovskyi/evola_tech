<template>
  <footer class="bg-surface-dim py-16 mt-0">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <!-- Brand -->
        <div>
          <div class="text-xl font-bold tracking-tighter text-on-surface mb-2">
            Evola<span class="text-primary">Tech</span>
          </div>
          <p class="text-on-surface-variant text-sm">{{ $t('footer.copyright') }}</p>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-6 text-xs tracking-wider uppercase font-semibold">
          <NuxtLink
            to="/imprint"
            class="text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ $t('footer.links.imprint') }}
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ $t('footer.links.privacy') }}
          </NuxtLink>
          <NuxtLink
            to="/gdpr"
            class="text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ $t('footer.links.gdpr') }}
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ $t('footer.links.terms') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
