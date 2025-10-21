import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders hero with title and subtitle', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('To MaxJS')).toBeInTheDocument();
  });

  test('title has correct heading level', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Welcome');
  });

  test('uses CSS classes when useCss is true', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" useCss={true} />);
    const hero = screen.getByText('Welcome').closest('div');
    expect(hero).toHaveClass('hero');
  });

  test('uses Tailwind classes when useCss is false', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" useCss={false} />);
    const hero = screen.getByText('Welcome').closest('div');
    expect(hero).toHaveClass('bg-gradient-to-r', 'from-blue-500', 'to-purple-500', 'text-white', 'p-20', 'text-center');
  });

  test('title has correct Tailwind classes', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveClass('text-4xl', 'font-bold');
  });

  test('subtitle has correct Tailwind classes', () => {
    render(<Hero title="Welcome" subtitle="To MaxJS" />);
    const subtitle = screen.getByText('To MaxJS');
    expect(subtitle).toHaveClass('text-xl');
  });
});
