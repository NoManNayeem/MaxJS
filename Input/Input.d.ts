import React from 'react';
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
declare const Input: React.FC<InputProps>;
export default Input;
