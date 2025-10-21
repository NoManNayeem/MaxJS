import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const mockLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  test('renders navbar with logo', () => {
    render(<Navbar links={mockLinks} />);
    const logo = screen.getByText('Logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Navbar links={mockLinks} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('links have correct href attributes', () => {
    render(<Navbar links={mockLinks} />);
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  test('uses CSS classes when useCss is true', () => {
    render(<Navbar links={mockLinks} useCss={true} />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar');
  });

  test('uses Tailwind classes when useCss is false', () => {
    render(<Navbar links={mockLinks} useCss={false} />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('flex', 'justify-between', 'items-center', 'bg-gray-800', 'text-white', 'p-4');
  });
});
