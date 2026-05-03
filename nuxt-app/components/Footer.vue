<template>
  <footer class="py-12 md:py-16 mt-0 border-t border-outline-variant/10 bg-surface-container-low/20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <!-- Brand -->
        <div class="space-y-3 w-full md:w-auto">
          <div class="text-xl font-bold tracking-tighter text-on-surface">
            Evola<span class="text-primary">Tech</span>
          </div>
          <p class="text-on-surface-variant text-sm">Digital products, web systems, and SEO.</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href="mailto:evolateam@gmail.com"
              class="min-h-11 px-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-base">mail</span>
              Email
            </a>
            <a
              href="tel:+48789711631"
              class="min-h-11 px-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-base">call</span>
              {{ $t('contact.form.call') }}
            </a>
            <a
              href="https://t.me/evola_manager"
              target="_blank"
              rel="noopener noreferrer"
              class="min-h-11 px-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-base">forum</span>
              Telegram
            </a>
          </div>
          <p class="text-on-surface-variant text-sm">{{ $t('footer.copyright') }}</p>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-3 text-xs tracking-wider uppercase font-semibold w-full md:w-auto">
          <NuxtLinkLocale
            to="/imprint"
            class="text-on-surface-variant hover:text-primary transition-colors min-h-10 flex items-center"
          >
            {{ $t('footer.links.imprint') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/privacy"
            class="text-on-surface-variant hover:text-primary transition-colors min-h-10 flex items-center"
          >
            {{ $t('footer.links.privacy') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/gdpr"
            class="text-on-surface-variant hover:text-primary transition-colors min-h-10 flex items-center"
          >
            {{ $t('footer.links.gdpr') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/terms"
            class="text-on-surface-variant hover:text-primary transition-colors min-h-10 flex items-center"
          >
            {{ $t('footer.links.terms') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
</template>
