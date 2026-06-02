import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale, setLocale, t } = useI18n()

  const currentLocale = computed(() => locale.value as string)

  const availableLocales = ['en', 'pl', 'de', 'ru'] as const

  const localeNames: Record<string, string> = {
    pl: 'Polski',
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
  }

  const { show, hide } = useLoading()

  const toggleLanguage = async () => {
    const idx = availableLocales.indexOf(currentLocale.value as typeof availableLocales[number])
    const newLocale = availableLocales[(idx + 1) % availableLocales.length]
    if (newLocale === currentLocale.value) return
    show()
    try {
      await setLocale(newLocale)
    } finally {
      setTimeout(hide, 300)
    }
    if (import.meta.client) {
      localStorage.setItem('i18n-locale', newLocale)
    }
  }

  const setLanguage = async (newLocale: string) => {
    if (newLocale === currentLocale.value) return
    show()
    try {
      await setLocale(newLocale)
    } finally {
      setTimeout(hide, 300)
    }
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
