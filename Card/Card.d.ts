import React from 'react';
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
declare const Card: React.FC<CardProps>;
export default Card;
