import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  useCss?: boolean;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  searchable = false,
  multiple = false,
  clearable = false,
  useCss = false,
  animate = true,
  size = 'md',
  variant = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchTerm('');
      }
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
  };

  const getSizeClasses = () => {
    if (useCss) return '';
    
    const sizeMap = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    
    return sizeMap[size];
  };

  const getVariantClasses = () => {
    if (useCss) return 'dropdown-trigger';
    
    const baseClasses = 'w-full flex items-center justify-between border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500';
    const variantClasses = {
      default: 'border-gray-300 bg-white hover:border-gray-400',
      outlined: 'border-2 border-gray-300 bg-white hover:border-blue-500',
      filled: 'border-gray-300 bg-gray-50 hover:bg-gray-100'
    };
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `${baseClasses} ${getSizeClasses()} ${variantClasses[variant]} ${disabledClasses}`;
  };

  const getOptionClasses = (option: DropdownOption) => {
    if (useCss) return 'dropdown-option';
    
    const baseClasses = 'flex items-center px-4 py-2 text-sm transition-colors duration-150';
    const hoverClasses = 'hover:bg-gray-100';
    const selectedClasses = option.value === value ? 'bg-blue-50 text-blue-700' : 'text-gray-700';
    const disabledClasses = option.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `${baseClasses} ${hoverClasses} ${selectedClasses} ${disabledClasses}`;
  };

  const getDropdownClasses = () => {
    if (useCss) return 'dropdown-menu';
    
    return 'absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto';
  };

  const motionProps = animate ? {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <div ref={dropdownRef} className={useCss ? 'dropdown-container' : 'relative'}>
      <div
        className={getVariantClasses()}
        onClick={handleToggle}
      >
        <div className={useCss ? 'dropdown-selected' : 'flex items-center flex-1'}>
          {selectedOption ? (
            <div className={useCss ? 'dropdown-selected-content' : 'flex items-center'}>
              {selectedOption.icon && (
                <span className={useCss ? 'dropdown-icon' : 'mr-2'}>
                  {selectedOption.icon}
                </span>
              )}
              <span>{selectedOption.label}</span>
            </div>
          ) : (
            <span className={useCss ? 'dropdown-placeholder' : 'text-gray-500'}>
              {placeholder}
            </span>
          )}
        </div>
        
        <div className={useCss ? 'dropdown-actions' : 'flex items-center space-x-2'}>
          {clearable && value && (
            <button
              onClick={handleClear}
              className={useCss ? 'dropdown-clear' : 'text-gray-400 hover:text-gray-600'}
            >
              ×
            </button>
          )}
          <span className={useCss ? 'dropdown-arrow' : 'text-gray-400'}>
            {isOpen ? '▲' : '▼'}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={getDropdownClasses()}
            {...motionProps}
          >
            {searchable && (
              <div className={useCss ? 'dropdown-search' : 'p-2 border-b border-gray-200'}>
                <input
                  ref={searchRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className={useCss ? 'dropdown-search-input' : 'w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'}
                />
              </div>
            )}
            
            <div className={useCss ? 'dropdown-options' : 'py-1'}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className={getOptionClasses(option)}
                    onClick={() => handleSelect(option)}
                  >
                    {option.icon && (
                      <span className={useCss ? 'dropdown-option-icon' : 'mr-3'}>
                        {option.icon}
                      </span>
                    )}
                    <span>{option.label}</span>
                  </div>
                ))
              ) : (
                <div className={useCss ? 'dropdown-empty' : 'px-4 py-2 text-sm text-gray-500'}>
                  No options found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
