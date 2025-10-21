import React from 'react';
import { render, screen } from '@testing-library/react';
import FadeIn from './FadeIn';

describe('FadeIn Component', () => {
  test('renders children', () => {
    render(
      <FadeIn>
        <div>Fade In Content</div>
      </FadeIn>
    );
    expect(screen.getByText('Fade In Content')).toBeInTheDocument();
  });

  test('renders multiple children', () => {
    render(
      <FadeIn>
        <div>First Child</div>
        <div>Second Child</div>
      </FadeIn>
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });

  test('accepts custom duration', () => {
    render(
      <FadeIn duration={1.5}>
        <div>Content</div>
      </FadeIn>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('uses default duration when not specified', () => {
    render(
      <FadeIn>
        <div>Content</div>
      </FadeIn>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
