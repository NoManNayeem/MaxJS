import React from 'react';
interface HeroProps {
    title: string;
    subtitle: string;
    useCss?: boolean;
    animate?: boolean;
}
declare const Hero: React.FC<HeroProps>;
export default Hero;
