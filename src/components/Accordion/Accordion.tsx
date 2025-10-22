import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
  key: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultActiveKeys?: string[];
  activeKeys?: string[];
  onChange?: (keys: string[]) => void;
  multiple?: boolean;
  useCss?: boolean;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'filled';
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultActiveKeys = [],
  activeKeys,
  onChange,
  multiple = false,
  useCss = false,
  animate = true,
  size = 'md',
  variant = 'default'
}) => {
  const [internalActiveKeys, setInternalActiveKeys] = useState<string[]>(
    activeKeys || defaultActiveKeys
  );

  const currentActiveKeys = activeKeys || internalActiveKeys;

  const handleToggle = (key: string) => {
    const isActive = currentActiveKeys.includes(key);
    let newActiveKeys: string[];

    if (multiple) {
      if (isActive) {
        newActiveKeys = currentActiveKeys.filter(k => k !== key);
      } else {
        newActiveKeys = [...currentActiveKeys, key];
      }
    } else {
      newActiveKeys = isActive ? [] : [key];
    }

    if (onChange) {
      onChange(newActiveKeys);
    } else {
      setInternalActiveKeys(newActiveKeys);
    }
  };

  const getSizeClasses = () => {
    if (useCss) return '';
    
    const sizeMap = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    
    return sizeMap[size];
  };

  const getAccordionClasses = () => {
    if (useCss) return 'accordion';
    
    const baseClasses = 'w-full';
    const variantClasses = {
      default: '',
      bordered: 'border border-gray-300 rounded-lg',
      filled: 'bg-gray-50 rounded-lg'
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };

  const getItemClasses = () => {
    if (useCss) return 'accordion-item';
    
    const baseClasses = 'border-b border-gray-200 last:border-b-0';
    const variantClasses = {
      default: '',
      bordered: 'border border-gray-300 rounded-lg mb-2 last:mb-0',
      filled: 'bg-white rounded-lg mb-2 last:mb-0 shadow-sm'
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };

  const getHeaderClasses = (item: AccordionItem, isActive: boolean) => {
    if (useCss) return 'accordion-header';
    
    const baseClasses = 'flex items-center justify-between w-full px-4 py-3 font-medium text-left transition-all duration-200 cursor-pointer';
    const sizeClasses = getSizeClasses();
    const disabledClasses = item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50';
    const activeClasses = isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700';
    
    return `${baseClasses} ${sizeClasses} ${disabledClasses} ${activeClasses}`;
  };

  const getContentClasses = () => {
    if (useCss) return 'accordion-content';
    
    return 'px-4 pb-4 text-gray-600';
  };

  const getIconClasses = (isActive: boolean) => {
    if (useCss) return 'accordion-icon';
    
    const baseClasses = 'transition-transform duration-200';
    const activeClasses = isActive ? 'rotate-180' : '';
    
    return `${baseClasses} ${activeClasses}`;
  };

  const motionProps = animate ? {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' }
  } : {};

  const headerMotionProps = animate ? {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <div className={getAccordionClasses()}>
      {items.map((item, index) => {
        const isActive = currentActiveKeys.includes(item.key);
        
        return (
          <div key={item.key} className={getItemClasses()}>
            <motion.button
              className={getHeaderClasses(item, isActive)}
              onClick={() => handleToggle(item.key)}
              disabled={item.disabled}
              {...headerMotionProps}
            >
              <div className={useCss ? 'accordion-title' : 'flex items-center'}>
                {item.icon && (
                  <span className={useCss ? 'accordion-item-icon' : 'mr-3'}>
                    {item.icon}
                  </span>
                )}
                <span>{item.title}</span>
              </div>
              
              <span className={getIconClasses(isActive)}>
                <svg
                  className={useCss ? 'accordion-arrow' : 'w-5 h-5'}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </motion.button>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className={getContentClasses()}
                  {...motionProps}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
