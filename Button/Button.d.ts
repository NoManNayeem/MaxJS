import React from 'react';
interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    useCss?: boolean;
    animate?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
