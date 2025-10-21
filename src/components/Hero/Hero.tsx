import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  useCss?: boolean;
  animate?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, useCss, animate }) => {
  const className = useCss ? 'hero' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white p-20 text-center';
  const Component = animate ? motion.div : 'div';
  return (
    <Component className={className} initial={animate ? { opacity: 0 } : {}} animate={animate ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </Component>
  );
};

export default Hero;
