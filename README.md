# style-inject

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

## Options

### insertAt

Type: `string`<br>
Possible values: `top`<br>
Default: `undefined`

Insert `style` tag to specific position of `head` element.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
