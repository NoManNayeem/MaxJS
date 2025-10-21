import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  error?: string;
  helperText?: string;
  required?: boolean;
  useCss?: boolean;
  animate?: boolean;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  error,
  helperText,
  required = false,
  useCss,
  animate,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = ''
}) => {
  const [, setIsFocused] = useState(false);

  const getVariantClasses = () => {
    if (useCss) return 'input';
    
    const baseClasses = 'transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };
    const variantClasses = {
      default: 'border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
      filled: 'bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500',
      outlined: 'border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0'
    };
    const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';
    const iconClasses = icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${iconClasses} ${fullWidth ? 'w-full' : ''} ${className}`;
  };

  const Component = animate ? motion.input : 'input';
  
  const motionProps = animate ? {
    whileFocus: { scale: 1.02 },
    transition: { duration: 0.1 }
  } : {};

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400">
              {icon}
            </div>
          </div>
        )}
        
        <Component
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          className={getVariantClasses()}
          {...motionProps}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="text-gray-400">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
