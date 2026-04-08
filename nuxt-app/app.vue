<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <!-- Hidden Netlify form for build-time detection -->
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input name="bot-field" />
      <input name="topic" />
      <input name="email" />
      <textarea name="message"></textarea>
    </form>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

