import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale, setLocale, t } = useI18n()

  const currentLocale = computed(() => locale.value as string)

  const availableLocales = ['pl', 'en', 'de', 'ru']

  const localeNames: Record<string, string> = {
    pl: 'Polski',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
  }

  const toggleLanguage = async () => {
    const idx = availableLocales.indexOf(currentLocale.value)
    const newLocale = availableLocales[(idx + 1) % availableLocales.length]
    await setLocale(newLocale)

    if (import.meta.client) {
      localStorage.setItem('i18n-locale', newLocale)
    }
  }

  const setLanguage = async (newLocale: string) => {
    await setLocale(newLocale)
    if (import.meta.client) {
      localStorage.setItem('i18n-locale', newLocale)
    }
  }

  return {
    currentLocale,
    toggleLanguage,
    setLanguage,
    availableLocales,
    localeNames,
    t,
  }
}
