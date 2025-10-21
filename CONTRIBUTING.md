# Contributing to MaxJS

Thank you for your interest in contributing to MaxJS! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/MaxJS.git
   cd MaxJS
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run storybook
   ```

## 🛠️ Development Workflow

### 1. Creating a New Component

When adding a new component, follow this structure:

```
src/components/NewComponent/
├── NewComponent.tsx          # Main component implementation
├── newcomponent.css          # CSS styles (optional)
├── NewComponent.stories.tsx  # Storybook stories
└── index.ts                 # Export file
```

### 2. Component Guidelines

#### TypeScript Interface
```typescript
interface NewComponentProps {
  // Required props
  title: string;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  animate?: boolean;
  useCss?: boolean;
  
  // Event handlers
  onClick?: () => void;
  
  // Children
  children?: React.ReactNode;
}
```

#### Component Structure
```typescript
import React from 'react';
import { motion } from 'framer-motion';

const NewComponent: React.FC<NewComponentProps> = ({ 
  title, 
  variant = 'primary', 
  animate = false,
  useCss = false,
  onClick,
  children 
}) => {
  const className = useCss ? 'new-component' : 'bg-blue-500 text-white p-4';
  const Component = animate ? motion.div : 'div';
  
  const motionProps = animate ? { 
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  } : {};
  
  return (
    <Component className={className} onClick={onClick} {...motionProps}>
      <h2>{title}</h2>
      {children}
    </Component>
  );
};

export default NewComponent;
```

#### Storybook Stories
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import NewComponent from './NewComponent';

const meta: Meta<typeof NewComponent> = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    animate: { control: 'boolean' },
    useCss: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof NewComponent>;

export const Default: Story = {
  args: { title: 'Default Component' }
};

export const Animated: Story = {
  args: { title: 'Animated Component', animate: true }
};

export const CSS: Story = {
  args: { title: 'CSS Styled Component', useCss: true }
};
```

### 3. Testing

Create comprehensive tests for your component:

```typescript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewComponent from './NewComponent';

describe('NewComponent', () => {
  test('renders with title', () => {
    render(<NewComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<NewComponent title="Test" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('uses CSS classes when useCss is true', () => {
    render(<NewComponent title="Test" useCss={true} />);
    expect(screen.getByText('Test').closest('div')).toHaveClass('new-component');
  });
});
```

### 4. Export the Component

Add your component to the main exports:

```typescript
// src/index.ts
export * from './components/NewComponent';
```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new components
- Define proper interfaces for all props
- Use `React.FC<Props>` for component definitions
- Prefer optional props with sensible defaults

### Styling
- Support both Tailwind CSS and plain CSS
- Use `useCss` prop to toggle between styling methods
- Follow BEM methodology for CSS classes when not using Tailwind
- Ensure responsive design

### Animations
- Use Framer Motion for animations
- Make animations optional via `animate` prop
- Provide smooth, performant animations
- Don't animate by default (let users opt-in)

### Accessibility
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Maintain good color contrast
- Use semantic HTML elements

## 🧪 Testing Guidelines

### Test Coverage
- Write tests for all component functionality
- Test both Tailwind and CSS variants
- Test animation states
- Test user interactions
- Aim for 100% test coverage

### Test Structure
```typescript
describe('ComponentName', () => {
  // Rendering tests
  test('renders correctly', () => {});
  
  // Props tests
  test('handles props correctly', () => {});
  
  // Interaction tests
  test('handles user interactions', () => {});
  
  // Styling tests
  test('applies correct styles', () => {});
  
  // Animation tests
  test('animates when enabled', () => {});
});
```

## 📋 Pull Request Process

### Before Submitting
1. **Run tests**: `npm test`
2. **Build library**: `npm run build`
3. **Build Storybook**: `npm run build-storybook`
4. **Check linting**: Ensure no linting errors

### PR Checklist
- [ ] Component follows the established pattern
- [ ] TypeScript interfaces are properly defined
- [ ] Both Tailwind and CSS variants work
- [ ] Animations are optional and smooth
- [ ] Accessibility features are included
- [ ] Tests are comprehensive and passing
- [ ] Storybook stories are complete
- [ ] Documentation is updated
- [ ] No console warnings or errors

### PR Description
Include:
- Description of changes
- Screenshots/GIFs if visual changes
- Testing instructions
- Any breaking changes

## 🐛 Reporting Issues

When reporting issues, please include:
- MaxJS version
- React version
- Browser/Node version
- Steps to reproduce
- Expected vs actual behavior
- Code examples if applicable

## 💡 Feature Requests

For feature requests, please:
- Check existing issues first
- Provide use cases and examples
- Explain the benefit to the community
- Consider implementation complexity

## 📄 License

By contributing to MaxJS, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to MaxJS! 🎉
