import React from 'react';
import { render, screen } from '@testing-library/react';
import ParticleBackground from './ParticleBackground';

describe('ParticleBackground Component', () => {
  test('renders particle background', () => {
    render(<ParticleBackground />);
    expect(screen.getByText('Particles')).toBeInTheDocument();
  });

  test('has correct positioning classes', () => {
    render(<ParticleBackground />);
    const background = screen.getByText('Particles').closest('div');
    expect(background).toHaveClass('absolute', 'inset-0', 'bg-black');
  });
});
