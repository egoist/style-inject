export default function styleInject(css, { insertAt, insertBeforeQuerySelector } = {}) {
  if (!css || typeof document === 'undefined') return

  const head = document.head || document.getElementsByTagName('head')[0]
  const insertBeforeNode = insertBeforeQuerySelector && head.querySelector(insertBeforeQuerySelector);
  const style = document.createElement('style')
  style.type = 'text/css'

  // if an insertBeforeNode is found, insert before that node
  if (insertBeforeNode) {
    head.insertBefore(style, insertBeforeNode)
  } else if (insertAt === 'top') {
    // if an insertAt 'top' is passed, insert before head's first child
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    // append child to head
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}
