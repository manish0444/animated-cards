'use client'

import { motion } from 'framer-motion'

export const TechIcon = ({ icon, className = '' }: { icon: string; className?: string }) => {
  const icons = {
    react: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <circle cx="12" cy="12" r="2.139" />
        <path d="M12,4.793c-1.885,0-3.723,0.255-5.374,0.759c-1.627,0.496-2.917,1.193-3.822,2.061C1.912,8.472,1.5,9.427,1.5,10.386
          c0,0.959,0.412,1.914,1.304,2.773c0.905,0.868,2.195,1.565,3.822,2.061c1.651,0.504,3.489,0.759,5.374,0.759
          c1.885,0,3.723-0.255,5.374-0.759c1.627-0.496,2.917-1.193,3.822-2.061c0.892-0.859,1.304-1.814,1.304-2.773
          c0-0.959-0.412-1.914-1.304-2.773c-0.905-0.868-2.195-1.565-3.822-2.061C15.723,5.048,13.885,4.793,12,4.793z" />
        <path d="M12,19.207c1.885,0,3.723-0.255,5.374-0.759c1.627-0.496,2.917-1.193,3.822-2.061c0.892-0.859,1.304-1.814,1.304-2.773
          c0-0.959-0.412-1.914-1.304-2.773c-0.905-0.868-2.195-1.565-3.822-2.061C15.723,8.276,13.885,8.021,12,8.021
          c-1.885,0-3.723,0.255-5.374,0.759c-1.627,0.496-2.917,1.193-3.822,2.061C1.912,11.7,1.5,12.655,1.5,13.614
          c0,0.959,0.412,1.914,1.304,2.773c0.905,0.868,2.195,1.565,3.822,2.061C8.277,18.952,10.115,19.207,12,19.207z" />
      </svg>
    ),
    vue: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.197 1.608l.003-.006h-4.425L12 6.4 9.225 1.602H4.8l7.2 12.36 7.2-12.36z" />
        <path d="M12 22.41L0 1.61h4.374L12 15.01 19.626 1.61H24L12 22.41z" />
      </svg>
    ),
    tools: (
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-yellow-400/20 rounded-sm w-3 h-3" />
        <div className="bg-blue-400/20 rounded-sm w-3 h-3" />
        <div className="bg-green-400/20 rounded-sm w-3 h-3" />
        <div className="bg-red-400/20 rounded-sm w-3 h-3" />
      </div>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  }

  return (
    <motion.div
      className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center ${
        className
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icons[icon as keyof typeof icons]}
    </motion.div>
  )
}

export const FloatingIcons = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div 
      className="flex gap-4 absolute bottom-8 left-8"
      initial={false}
      animate={isActive ? {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2 }
      } : {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      }}
    >
      <TechIcon icon="react" className="text-[#61DAFB]" />
      <TechIcon icon="tools" className="text-yellow-400" />
      <TechIcon icon="vue" className="text-[#42B883]" />
      <TechIcon icon="design" className="text-blue-400" />
    </motion.div>
  )
}

