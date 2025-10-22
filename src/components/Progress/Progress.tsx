import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  useCss?: boolean;
  label?: string;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  animated = true,
  striped = false,
  useCss = false,
  label,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const getSizeClasses = () => {
    if (useCss) return '';
    
    const sizeMap = {
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4'
    };
    
    return sizeMap[size];
  };

  const getVariantClasses = () => {
    if (useCss) return 'progress-bar';
    
    const variantMap = {
      default: 'bg-blue-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
      info: 'bg-cyan-600'
    };
    
    return variantMap[variant];
  };

  const getProgressClasses = () => {
    if (useCss) return 'progress';
    
    const baseClasses = 'w-full bg-gray-200 rounded-full overflow-hidden';
    const sizeClasses = getSizeClasses();
    const stripedClasses = striped ? 'bg-stripes' : '';
    
    return `${baseClasses} ${sizeClasses} ${stripedClasses} ${className}`;
  };

  const getBarClasses = () => {
    if (useCss) return 'progress-bar';
    
    const baseClasses = 'h-full transition-all duration-300 ease-in-out';
    const variantClasses = getVariantClasses();
    const stripedClasses = striped ? 'bg-stripes' : '';
    const animatedClasses = animated ? 'animate-pulse' : '';
    
    return `${baseClasses} ${variantClasses} ${stripedClasses} ${animatedClasses}`;
  };

  const getValueClasses = () => {
    if (useCss) return 'progress-value';
    
    return 'text-sm font-medium text-gray-700';
  };

  const getLabelClasses = () => {
    if (useCss) return 'progress-label';
    
    return 'text-sm font-medium text-gray-700 mb-1';
  };

  const ProgressComponent = animated ? motion.div : 'div';
  const BarComponent = animated ? motion.div : 'div';

  const motionProps = animated ? {
    initial: { width: 0 },
    animate: { width: `${percentage}%` },
    transition: { duration: 0.8, ease: 'easeOut' }
  } : {};

  return (
    <div className={useCss ? 'progress-container' : 'w-full'}>
      {label && (
        <div className={getLabelClasses()}>
          {label}
        </div>
      )}
      
      <div className={getProgressClasses()}>
        <BarComponent
          className={getBarClasses()}
          style={{ width: `${percentage}%` }}
          {...motionProps}
        />
      </div>
      
      {showValue && (
        <div className={getValueClasses()}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
