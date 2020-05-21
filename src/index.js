export default function styleInject(css, { insertAt, attributes } = {}) {
  if (!css || typeof document === 'undefined') return

  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
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
  
  if (attributes) {
    Object.entries(attributes).forEach(function (entry) {
      style.setAttribute(entry[0], entry[1]);
    });
  }
}
