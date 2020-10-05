import { motion } from 'framer-motion';
import React from 'react'

export const Hover: React.FC<{}> = ({children}) => {
    return (
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {children}
      </motion.button>
    );
}