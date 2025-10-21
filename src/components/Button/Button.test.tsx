import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Click Me" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button label="Click Me" disabled={true} />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  test('uses CSS classes when useCss is true', () => {
    render(<Button label="Click Me" useCss={true} />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('button');
  });

  test('uses Tailwind classes when useCss is false', () => {
    render(<Button label="Click Me" useCss={false} />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'cursor-pointer');
  });
});
