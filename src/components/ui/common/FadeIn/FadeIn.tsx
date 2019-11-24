import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
  duration?: number
  initialX?: number
}

const FadeIn: React.FC<IProps> = ({ duration = .2, children, className, initialX }) => {
  const additional = {
    x: [initialX || 0, 0]
  }

  return (
    <motion.div
      animate={{ opacity: [0, 1], ...additional }}
      initial={{ opacity: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
