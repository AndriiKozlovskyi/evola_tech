<template>
  <div class="bg-surface-container-lowest p-8 lg:p-10 rounded-2xl ghost-border">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name & Email Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            {{ $t('contact.form.fullName') }}
          </label>
          <input
            v-model="form.fullName"
            type="text"
            :placeholder="$t('contact.form.fullNamePlaceholder')"
            class="w-full bg-surface-container-low border-0 rounded-xl py-3 px-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-primary transition-all"
            required
          />
          <p v-if="errors.fullName" class="text-error text-xs">{{ errors.fullName }}</p>
        </div>
        <div class="space-y-2">
          <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            {{ $t('contact.form.email') }}
          </label>
          <input
            v-model="form.email"
            type="email"
            :placeholder="$t('contact.form.emailPlaceholder')"
            class="w-full bg-surface-container-low border-0 rounded-xl py-3 px-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-primary transition-all"
            required
          />
          <p v-if="errors.email" class="text-error text-xs">{{ errors.email }}</p>
        </div>
      </div>

      <!-- Subject -->
      <div class="space-y-2">
        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          {{ $t('contact.form.subject') }}
        </label>
        <select
          v-model="form.subject"
          class="w-full bg-surface-container-low border-0 rounded-xl py-3 px-4 text-on-surface focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-primary transition-all"
        >
          <option
            v-for="(option, i) in ($tm('contact.form.subjectOptions') as string[])"
            :key="i"
            :value="$rt(option)"
          >
            {{ $rt(option) }}
          </option>
        </select>
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          {{ $t('contact.form.message') }}
        </label>
        <textarea
          v-model="form.message"
          :placeholder="$t('contact.form.messagePlaceholder')"
          rows="4"
          class="w-full bg-surface-container-low border-0 rounded-xl py-3 px-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0 focus:bg-surface-container-lowest focus:border-b-2 focus:border-primary transition-all resize-none"
          required
        ></textarea>
        <p v-if="errors.message" class="text-error text-xs">{{ errors.message }}</p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? '...' : $t('contact.form.submit') }}
      </button>

      <!-- Success Message -->
      <p v-if="successMessage" class="text-green-600 text-sm font-medium text-center">
        {{ successMessage }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  fullName: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')

const validateForm = () => {
  errors.fullName = form.fullName.trim() ? '' : 'Full name is required'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email is required'
  errors.message = form.message.length >= 10 ? '' : 'Message must be at least 10 characters'

  return !errors.fullName && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  successMessage.value = ''

  try {
    // TODO: Replace with actual form submission (Formspree, Netlify Functions, etc.)
    console.log('Form data:', form)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    successMessage.value = 'Thank you! Your inquiry has been sent.'
    form.fullName = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (err) {
    console.error('Form submission error:', err)
  } finally {
    isSubmitting.value = false
  }
}
</script>
