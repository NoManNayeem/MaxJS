import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  useCss?: boolean; // Toggle for plain CSS
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, useCss, animate }) => {
  const className = useCss ? 'button' : 'bg-blue-500 text-white px-4 py-2 rounded cursor-pointer';
  const Component = animate ? motion.button : 'button';
  
  const motionProps = animate ? { whileHover: { scale: 1.05 } } : {};
  
  return (
    <Component
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {label}
    </Component>
  );
};

export default Button;
