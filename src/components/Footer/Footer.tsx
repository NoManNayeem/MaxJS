import React from 'react';

interface FooterProps {
  text: string;
  useCss?: boolean;
}

const Footer: React.FC<FooterProps> = ({ text, useCss }) => {
  const className = useCss ? 'footer' : 'bg-gray-800 text-white p-4 text-center';
  return <footer className={className}>{text}</footer>;
};

export default Footer;
