import React from 'react'
import './PlaneLogo.scss'
import { motion } from 'framer-motion'

interface IProps {
  animated?: boolean
}

const PlaneLogo: React.FC<IProps> = ({ animated = false }) => {
  return (
    <div className='plane-logo'>
      <motion.div
        className='plane-logo__earth'
        animate={
          animated ? {
            scale: [1, 1.1, 1, 1.1, 1], rotate: [0, 180],
          } : {
            scale: 1, rotate: 0
          }
        }
        transition={
          animated ? {
            duration: 2, loop: Infinity
          } : {
            duration: .5, loop: 0
          }
        }
      />

      <div className='plane-logo__plane-wrap'>
        <motion.div
          className='plane-logo__plane'
          animate={
            animated ? {
              scale: [1, .8, .8, 1], rotate: [0, -1, 0, -1, 0], x: [0, -1, 0, 1, 0], y: [0, 1, 0, -1, 0]
            } : {
              scale: 1, rotate: 0, x: 0, y: 0
            }
          }
          transition={
            animated ? {
              duration: 4, loop: Infinity
            } : {
              duration: .5, loop: 0
            }
          }
        />
      </div>
    </div>
  )
}

export default PlaneLogo

