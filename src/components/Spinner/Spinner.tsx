import React from 'react';
import { motion } from 'framer-motion';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  animate?: boolean;
  useCss?: boolean;
  label?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  animate = true,
  useCss = false,
  label,
  className = ''
}) => {
  const getSizeClasses = () => {
    if (useCss) return 'spinner';
    
    const sizeMap = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
    };
    
    return sizeMap[size];
  };

  const getColorClasses = () => {
    if (useCss) return 'spinner-color';
    
    const colorMap = {
      primary: 'border-blue-600',
      secondary: 'border-gray-600',
      success: 'border-green-600',
      warning: 'border-yellow-600',
      error: 'border-red-600',
      info: 'border-cyan-600'
    };
    
    return colorMap[color];
  };

  const getSpinnerClasses = () => {
    if (useCss) return 'spinner';
    
    const baseClasses = 'animate-spin rounded-full border-2 border-gray-300';
    const sizeClasses = getSizeClasses();
    const colorClasses = getColorClasses();
    
    return `${baseClasses} ${sizeClasses} ${colorClasses} ${className}`;
  };

  const getLabelClasses = () => {
    if (useCss) return 'spinner-label';
    
    return 'text-sm text-gray-600 ml-2';
  };

  const SpinnerComponent = animate ? motion.div : 'div';

  const motionProps = animate ? {
    animate: { rotate: 360 },
    transition: { duration: 1, repeat: Infinity, ease: 'linear' }
  } : {};

  return (
    <div className={useCss ? 'spinner-container' : 'flex items-center'}>
      <SpinnerComponent
        className={getSpinnerClasses()}
        {...motionProps}
      />
      {label && (
        <span className={getLabelClasses()}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Spinner;
