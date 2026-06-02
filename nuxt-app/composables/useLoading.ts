export const useLoading = () => {
  // Shared across SSR + client + every component via useState.
  // Initial value true so the splash renders in the SSR HTML on first paint.
  const isLoading = useState<boolean>('app-loading', () => true)

  const hide = () => {
    isLoading.value = false
  }

  const show = () => {
    isLoading.value = true
    setTimeout(hide, 2000)
  }

  return { isLoading, show, hide }
}
