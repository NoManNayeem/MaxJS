import React from 'react';
interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    useCss?: boolean;
    animate?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
