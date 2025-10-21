import React from 'react';

interface NavbarProps {
  links: { label: string; href: string }[];
  useCss?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ links, useCss }) => {
  const className = useCss ? 'navbar' : 'flex justify-between items-center bg-gray-800 text-white p-4';
  return (
    <nav className={className}>
      <div>Logo</div>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
