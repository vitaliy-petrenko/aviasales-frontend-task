import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
  duration?: number
}

const FadeIn: React.FC<IProps> = ({ duration = .15, children, className }) => (
  <motion.div
    animate={{ opacity: [0, 1] }}
    transition={{ duration }}
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeIn
