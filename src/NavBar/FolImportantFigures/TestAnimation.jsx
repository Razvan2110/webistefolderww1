import React from 'react';
import { motion } from 'framer-motion';

function TestAnimation() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>Hello, Animation Test!</h1>
    </motion.div>
  );
}

export default TestAnimation;
