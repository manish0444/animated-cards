'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { FloatingIcons } from './tech-icons'

interface CourseCardProps {
  isActive: boolean
  onClick: () => void
  number: string
  title: string
  description: string
  index: number
}

export function CourseCard({
  isActive,
  onClick,
  number,
  title,
  description,
  index
}: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isActive && cardRef.current && bgRef.current) {
      gsap.set(bgRef.current, {
        clipPath: 'circle(0% at 100% 0%)'
      })
      
      gsap.to(bgRef.current, {
        clipPath: 'circle(150% at 100% 0%)',
        duration: 0.8,
        ease: 'power3.inOut'
      })
    } else if (!isActive && bgRef.current) {
      gsap.to(bgRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        duration: 0.8,
        ease: 'power3.inOut'
      })
    }
  }, [isActive])

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-[24px] cursor-pointer ${
        isActive ? 'col-span-2' : 'col-span-1'
      }`}
      onClick={onClick}
      layout
      transition={{
        layout: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      <div className="absolute inset-0 bg-pink-50" />
      <div ref={bgRef} className="absolute inset-0 bg-red-600" />
      
      <div ref={contentRef} className="relative p-8 h-full">
        <AnimatePresence>
          {isActive && (
            <motion.div 
              className="absolute top-8 right-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex items-center gap-2 text-white font-medium">
                View all Courses <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className={`flex flex-col h-full ${!isActive ? 'justify-between p-6' : ''}`}
          layout
        >
          <motion.div 
            className={`flex flex-col gap-3 ${
              !isActive ? 'rotate-[270deg] origin-top-left translate-y-[100%] -translate-x-2' : ''
            }`}
            layout
          >
            <motion.h2 
              className={`text-xl font-bold whitespace-nowrap ${
                isActive ? 'text-white' : 'text-red-600'
              }`}
              layout
            >
              {title}
            </motion.h2>
            <motion.p 
              className={`text-sm leading-tight max-w-[200px] ${
                isActive ? 'text-pink-100' : 'text-red-600/90'
              }`}
              layout
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div 
            className={`${!isActive ? 'self-end' : ''}`}
            layout
          >
            <motion.div 
              className="flex items-baseline"
              layout
            >
              <motion.span 
                className={`text-[80px] leading-none font-bold ${
                  isActive ? 'text-white' : 'text-red-600'
                }`}
                layout
              >
                {number}
              </motion.span>
              <motion.span 
                className={`text-2xl ${
                  isActive ? 'text-pink-100' : 'text-red-600'
                }`}
                layout
              >
                +
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <FloatingIcons isActive={isActive} />
      </div>
    </motion.div>
  )
}
