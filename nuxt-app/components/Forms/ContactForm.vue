<template>
  <div class="relative">
    <!-- Decorative blur -->
    <div class="absolute -top-8 -right-8 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative bg-surface-container-lowest p-5 sm:p-7 lg:p-10 rounded-2xl ghost-border space-y-6 sm:space-y-7">
      <!-- Topic Selection Chips -->
      <div>
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">
          {{ $t('contact.form.topicLabel') }}
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(option, i) in ($tm('contact.form.subjectOptions') as string[])"
            :key="i"
            @click="selectedTopic = $rt(option)"
            :class="[
              'px-4 sm:px-5 py-2.5 min-h-11 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
              selectedTopic === $rt(option)
                ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20 scale-[1.03]'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            ]"
          >
            {{ $rt(option) }}
          </button>
        </div>
      </div>

      <!-- Email -->
      <div class="space-y-2">
        <label for="contact-email" class="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          {{ $t('contact.form.email') }}
        </label>
        <input
          id="contact-email"
          v-model="email"
          type="email"
          inputmode="email"
          autocomplete="email"
          :placeholder="$t('contact.form.emailPlaceholder')"
          class="w-full bg-surface-container-low border-0 rounded-xl py-3.5 sm:py-4 px-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
        />
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <label for="contact-message" class="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          {{ $t('contact.form.message') }}
        </label>
        <textarea
          id="contact-message"
          v-model="message"
          :placeholder="$t('contact.form.messagePlaceholder')"
          rows="5"
          class="w-full bg-surface-container-low border-0 rounded-xl py-3.5 sm:py-4 px-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all resize-y sm:resize-none outline-none"
        ></textarea>
      </div>

      <!-- Send Button (mailto) -->
      <a
        :href="mailtoLink"
        class="w-full min-h-12 flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]"
      >
        <span class="material-symbols-outlined text-xl">send</span>
        {{ $t('contact.form.submit') }}
      </a>

      <!-- Divider (hidden on success/error) -->
      <template v-if="formState === 'idle' || formState === 'sending'">
        <div class="flex items-center gap-4">
          <div class="flex-1 h-px bg-outline-variant/20"></div>
          <span class="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/60">
            {{ $t('contact.form.orConnect') }}
          </span>
          <div class="flex-1 h-px bg-outline-variant/20"></div>
        </div>

        <!-- Direct Contact Channels -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="https://t.me/evola_manager"
            target="_blank"
            rel="noopener noreferrer"
            class="min-h-12 flex flex-row sm:flex-col items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group"
          >
            <svg class="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            <span class="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Telegram</span>
          </a>
          <a
            href="mailto:evolateam@gmail.com"
            class="min-h-12 flex flex-row sm:flex-col items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group"
          >
            <span class="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-primary transition-colors">mail</span>
            <span class="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Email</span>
          </a>
          <a
            href="tel:+48789711631"
            class="min-h-12 flex flex-row sm:flex-col items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group"
          >
            <span class="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-primary transition-colors">call</span>
            <span class="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">{{ $t('contact.form.call') }}</span>
          </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
type FormState = 'idle' | 'sending' | 'success' | 'error'

const selectedTopic = ref('')
const email = ref('')
const message = ref('')
const formState = ref<FormState>('idle')

const handleSubmit = async () => {
  formState.value = 'sending'
  try {
    const formData = new URLSearchParams({
      'form-name': 'contact',
      topic: selectedTopic.value,
      email: email.value,
      message: message.value,
    })
    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
    formState.value = 'success'
  } catch {
    formState.value = 'error'
  }
}

const resetForm = () => {
  selectedTopic.value = ''
  email.value = ''
  message.value = ''
  formState.value = 'idle'
}
</script>
