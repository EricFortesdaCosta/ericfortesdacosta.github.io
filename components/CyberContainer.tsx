import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const CyberContainer: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`container mx-auto px-4 py-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};