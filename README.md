# style-inject

[![NPM version](https://img.shields.io/npm/v/style-inject.svg?style=flat)](https://npmjs.com/package/style-inject) [![NPM downloads](https://img.shields.io/npm/dm/style-inject.svg?style=flat)](https://npmjs.com/package/style-inject) [![CircleCI](https://circleci.com/gh/egoist/style-inject/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/style-inject/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Inject style tag to document head.

## Installation

```bash
npm install style-inject
```

## Example

```javascript
import styleInject from 'style-inject';
const css = `
  body {
    margin: 0;
  }
`;
styleInject(css, options);
```

### Usage with Next (SSR)

If using a library that use `style-inject` for use css modules in Next.js,
you need to inject styles during SSR, here's an example:

```jsx
// file: pages/_document.js

import React from 'react';
import { SSR_INJECT_ID } from 'style-inject';

const SSRInjectStyles = () => {
    if (!globalThis[SSR_INJECT_ID]) return null

    return (
        <>
            {globalThis[SSR_INJECT_ID].map((module) => (
                <style id={module.id} key={module.id}>
                    {module.css}
                </style>
            ))}
        </>
    )
}

const Document = (props) => {
    const { locale } = props
    return (
        <Html lang={locale}>
            <Head>
                {/* Inject styles during ssr */}
                <SSRInjectStyles />
                {/* ... */}
            </Head>
            <body>
            {/* ... */}
            </body>
        </Html>
    )
}

export default Document

```

## Options

### insertAt

Type: `string`<br>
Possible values: `top`<br>
Default: `undefined`

Insert `style` tag to specific position of `head` element.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
