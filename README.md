# MaxJS

Open-source React UI library. Preview at [your-username.github.io/maxjs](https://your-username.github.io/maxjs).

## Features
- TS/JS support
- CSS/Tailwind styling
- Animated components
- Script tag usage

## Installation
```bash
npm i maxjs
```

## Usage in React
```jsx
import { Button } from 'maxjs';

const App = () => <Button label="Hello" />;
```

## Usage in HTML (Script Tag)
Include React, ReactDOM, and MaxJS UMD:
```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://your-cdn/maxjs.umd.js"></script>
<div id="root"></div>
<script>
  const { Button } = MaxJS;
  ReactDOM.render(React.createElement(Button, {label: 'Hi'}), document.getElementById('root'));
</script>
```

## Development
- `npm run storybook`: Local previews
- `npm run build`: Build library
- `npm run build-storybook`: Build docs

Deploy to GitHub Pages: Push `/docs` folder, set in repo settings.

For CSS variant: Import `maxjs/dist/styles/global.css` or use `useCss` prop.
