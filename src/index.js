export const SSR_INJECT_ID = '__styleInject_SSR_MODULES';

/**
 * Inject CSS into the head tag
 * @param css The CSS string to inject
 * @param id The ID of the style tag
 * @param insertAt Where to insert the style tag
 */
export default function styleInject(css, id,  { insertAt } = {}) {
  if (!css) return
  if (typeof document === 'undefined') {
    if (globalThis) {
      globalThis[SSR_INJECT_ID] = globalThis[SSR_INJECT_ID] || [];
      globalThis[SSR_INJECT_ID].push({ css, id });
    }
    return;
  }

  if (document.getElementById(id)) {
    return;
  }
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.id = id
  style.type = 'text/css'

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}
