// Load Google Fonts after page is interactive — keeps both off the critical render path.
// Text renders immediately with system fonts (font-display: swap in the URL handles the visual swap).
export default defineNuxtPlugin(() => {
  const urls = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
  ]
  urls.forEach((href) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  })
})
