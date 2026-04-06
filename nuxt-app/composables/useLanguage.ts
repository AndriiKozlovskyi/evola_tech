import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale, setLocale, t } = useI18n()

  const currentLocale = computed(() => locale.value as string)

  const toggleLanguage = async () => {
    const newLocale = currentLocale.value === 'en' ? 'de' : 'en'
    await setLocale(newLocale)

    // Persist to localStorage
    if (import.meta.client) {
      localStorage.setItem('i18n-locale', newLocale)
    }
  }

  const availableLocales = ['en', 'de']

  return {
    currentLocale,
    toggleLanguage,
    availableLocales,
    t,
  }
}
