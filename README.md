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
styleInject(css);
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
