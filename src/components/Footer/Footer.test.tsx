import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with text', () => {
    render(<Footer text="© 2025 MaxJS" />);
    expect(screen.getByText('© 2025 MaxJS')).toBeInTheDocument();
  });

  test('uses correct semantic element', () => {
    render(<Footer text="© 2025 MaxJS" />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('uses CSS classes when useCss is true', () => {
    render(<Footer text="© 2025 MaxJS" useCss={true} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
  });

  test('uses Tailwind classes when useCss is false', () => {
    render(<Footer text="© 2025 MaxJS" useCss={false} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-800', 'text-white', 'p-4', 'text-center');
  });
});
