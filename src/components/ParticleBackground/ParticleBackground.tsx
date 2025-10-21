import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  // Simplified particle effect using motion
  return (
    <motion.div
      className="absolute inset-0 bg-black"
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      {/* Add canvas or particles.js integration for real particles */}
      Particles
    </motion.div>
  );
};

export default ParticleBackground;
