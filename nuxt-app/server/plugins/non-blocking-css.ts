// Convert render-blocking <link rel="stylesheet"> for the Nuxt entry CSS
// into a non-blocking preload+swap pattern. Saves ~150ms LCP on cold loads.
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:html', (html) => {
    const swap = (line: string) =>
      line.replace(
        /<link rel="stylesheet"([^>]*?)href="(\/_nuxt\/[^"]+\.css)"([^>]*)>/g,
        (_m, before: string, href: string, after: string) =>
          `<link rel="preload" as="style"${before}href="${href}"${after} onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet"${before}href="${href}"${after}></noscript>`
      )
    html.head = html.head.map(swap)
  })
})
