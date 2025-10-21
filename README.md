# MaxJS

[![npm version](https://badge.fury.io/js/maxjs.svg)](https://badge.fury.io/js/maxjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://NoManNayeem.github.io/MaxJS)

**MaxJS** is an open-source, free React-based UI library designed for end-to-end frontend development. Inspired by libraries like React Bits, it provides a collection of reusable, animated, and customizable components with support for both TypeScript and JavaScript, and flexible styling options.

## 🚀 Live Demo

**📖 [View Documentation & Live Examples](https://NoManNayeem.github.io/MaxJS)**

## ✨ Features

- **🎯 Dual Language Support**: Components written in TypeScript with JavaScript compatibility
- **🎨 Flexible Styling**: Default Tailwind CSS integration with optional plain CSS modules
- **🎭 Comprehensive Components**: Essential UI elements like Button, Navbar, Hero, Footer, Card, plus animated ones
- **⚡ Smooth Animations**: Powered by Framer Motion for customizable animations
- **📦 Multiple Installation Options**: npm package for modern React apps; UMD bundle for script tag inclusion
- **📚 Live Documentation**: Storybook-based site with interactive demos and code examples
- **🔧 Highly Customizable**: Props for variants, themes, animations; supports dark mode
- **♿ Accessibility First**: ARIA attributes and keyboard navigation built-in
- **⚡ Performance Optimized**: Lightweight with no unnecessary renders

## 📦 Installation

### npm (Recommended)
```bash
npm install maxjs
```

### yarn
```bash
yarn add maxjs
```

## 🚀 Quick Start

### React Projects

```jsx
import React from 'react';
import { Button, Navbar, Hero, Footer } from 'maxjs';

function App() {
  return (
    <div>
      <Navbar links={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' }
      ]} />
      
      <Hero 
        title="Welcome to MaxJS" 
        subtitle="Build stunning UIs with ease"
        animate={true}
      />
      
      <Button 
        label="Get Started" 
        onClick={() => console.log('Clicked!')}
        animate={true}
      />
      
      <Footer text="© 2025 MaxJS" />
    </div>
  );
}

export default App;
```

### HTML with Script Tags

```html
<!DOCTYPE html>
<html>
<head>
  <title>MaxJS Example</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/framer-motion@10/dist/framer-motion.js"></script>
  <script src="https://unpkg.com/maxjs/dist/index.umd.cjs"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    const { Button, Hero } = MaxJS;
    const { createElement } = React;
    
    ReactDOM.render(
      createElement('div', null,
        createElement(Hero, { 
          title: 'Hello MaxJS!', 
          subtitle: 'From HTML' 
        }),
        createElement(Button, { 
          label: 'Click Me',
          onClick: () => alert('Hello from MaxJS!')
        })
      ),
      document.getElementById('root')
    );
  </script>
</body>
</html>
```

## 🎨 Styling Options

### Tailwind CSS (Default)
```jsx
import { Button } from 'maxjs';

// Uses Tailwind classes by default
<Button label="Tailwind Button" />
```

### Plain CSS
```jsx
import { Button } from 'maxjs';
import 'maxjs/dist/styles/global.css';

// Use useCss prop for plain CSS styling
<Button label="CSS Button" useCss={true} />
```

## 🎭 Animation Examples

```jsx
import { Button, FadeIn, Hero } from 'maxjs';

function AnimatedApp() {
  return (
    <FadeIn duration={1}>
      <Hero 
        title="Animated Hero" 
        subtitle="With smooth transitions"
        animate={true}
      />
      <Button 
        label="Animated Button" 
        animate={true}
        onClick={() => console.log('Animated click!')}
      />
    </FadeIn>
  );
}
```

## 📚 Available Components

### Core Components
- **Button** - Interactive buttons with hover effects
- **Navbar** - Responsive navigation bars
- **Hero** - Eye-catching hero sections with gradients
- **Footer** - Simple footer components

### Animation Components
- **FadeIn** - Smooth fade-in animations
- **ParticleBackground** - Animated particle backgrounds

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/NoManNayeem/MaxJS.git
cd MaxJS

# Install dependencies
npm install

# Start development server
npm run storybook
```

### Available Scripts

```bash
# Development
npm run storybook          # Start Storybook dev server
npm run test               # Run tests
npm run test:watch         # Run tests in watch mode

# Building
npm run build              # Build the library
npm run build-storybook    # Build documentation site

# Deployment
npm run deploy             # Deploy to GitHub Pages
npm run publish:npm        # Publish to npm
```

## 🧪 Testing

MaxJS comes with comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test -- --coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Adding New Components

1. Create component directory: `src/components/NewComponent/`
2. Add implementation: `NewComponent.tsx`
3. Add CSS styles: `newcomponent.css`
4. Add Storybook stories: `NewComponent.stories.tsx`
5. Export from `src/index.ts`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI library framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Storybook](https://storybook.js.org/) - Component documentation
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

- 📖 [Documentation](https://NoManNayeem.github.io/MaxJS)
- 🐛 [Report Issues](https://github.com/NoManNayeem/MaxJS/issues)
- 💬 [Discussions](https://github.com/NoManNayeem/MaxJS/discussions)

---

**Made with ❤️ by [NoManNayeem](https://github.com/NoManNayeem)**