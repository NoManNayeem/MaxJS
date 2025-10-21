import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  useCss?: boolean;
  animate?: boolean;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  imageAlt,
  useCss,
  animate,
  variant = 'default',
  size = 'md',
  hover = false,
  className = ''
}) => {
  const getVariantClasses = () => {
    if (useCss) return 'card';
    
    const baseClasses = 'rounded-lg overflow-hidden transition-all duration-200';
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    const variantClasses = {
      default: 'bg-white border border-gray-200',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      outlined: 'bg-white border-2 border-gray-300',
      filled: 'bg-gray-50 border border-gray-200'
    };
    const hoverClasses = hover ? 'hover:shadow-md hover:-translate-y-1' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  };

  const Component = animate ? motion.div : 'div';
  
  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component className={getVariantClasses()} {...motionProps}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="text-gray-700">
        {children}
      </div>
    </Component>
  );
};

export default Card;
