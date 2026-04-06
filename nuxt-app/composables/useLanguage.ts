import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale, t } = useI18n()
  const router = useRouter()
  const localePath = useLocalePath()

  const currentLocale = computed(() => locale.value as string)

  const toggleLanguage = async () => {
    const newLocale = currentLocale.value === 'en' ? 'de' : 'en'
    locale.value = newLocale

    // Persist to localStorage
    if (process.client) {
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
