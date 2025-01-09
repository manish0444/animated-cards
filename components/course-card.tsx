'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import localFont from 'next/font/local'
import Image from 'next/image'


import reactIcon from '../images/react.png'
import toolsIcon from '../images/tools.png'
import vueIcon from '../images/vue.png'
import designIcon from '../images/design.png'

// Create an icon mapping
const iconMapping: { [key: string]: any } = {
  react: reactIcon,
  tools: toolsIcon,
  vue: vueIcon,
  design: designIcon
}
const nohemi = localFont({ 
  src: '../fonts/Nohemi-Bold.woff2',
  display: 'swap'
})

interface CourseCardProps {
  isActive: boolean
  onClick: () => void
  number: string
  title: string
  description: string
  index: number
  previousIndex: number
}

export function CourseCard({
  isActive,
  onClick,
  number,
  title,
  description,
  index,
  previousIndex
}: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current && bgRef.current && textRef.current && iconsRef.current) {
      if (isActive) {
        gsap.set(bgRef.current, {
          clipPath: 'circle(0% at 100% 0%)'
        })
        
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut'
          }
        })
        
        // Background expansion
        tl.to(bgRef.current, {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 1.2
        })
        
        // Text container animation for opening
        tl.to(textRef.current, {
          rotate: 0,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          transformOrigin: 'center center',
          ease: 'power2.out'
        }, '-=1')

        // Individual text elements animation
        const textElements = textRef.current.children
        tl.to(Array.from(textElements), {
          rotate: 0,
          y: 0,
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=1')

        // Modified icon animation for opening - coming from the previous card's position
        const iconDirection = index > previousIndex ? -1 : 1
        const previousCard = document.querySelector(`[data-index="${previousIndex}"]`)
        const previousCardRect = previousCard?.getBoundingClientRect()
        const currentCardRect = cardRef.current.getBoundingClientRect()
        
        if (previousCardRect) {
          const xOffset = previousCardRect.left - currentCardRect.left
          tl.fromTo(iconsRef.current.children,
            {
              opacity: 0,
              x: xOffset + (200 * iconDirection),
              scale: 0.8
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.1
            },
            '-=0.6'
          )
        }
      } else {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut'
          }
        })
        
        // Background retraction
        tl.to(bgRef.current, {
          clipPath: 'circle(0% at 100% 0%)',
          duration: 1.2
        })
        
        // Text container animation for closing
        tl.to(textRef.current, {
          rotate: -90,
          duration: 1,
          transformOrigin: 'center center',
          ease: 'power2.inOut'
        }, '-=1')

        // Individual text elements animation
        const textElements = textRef.current.children
        tl.to(Array.from(textElements), {
          rotate: 0,
          duration: 1,
          stagger: -0.1,
          ease: 'power2.inOut'
        }, '-=1')

        // Modified icon animation for closing - moving towards the next active card
        const iconDirection = index > previousIndex ? 1 : -1
        const nextActiveCard = document.querySelector('.active-card')
        const nextActiveCardRect = nextActiveCard?.getBoundingClientRect()
        const currentCardRect = cardRef.current.getBoundingClientRect()
        
        if (nextActiveCardRect) {
          const xOffset = nextActiveCardRect.left - currentCardRect.left
          tl.to(iconsRef.current.children, {
            opacity: 0,
            x: xOffset + (200 * iconDirection),
            scale: 0.8,
            duration: 0.8,
            ease: 'power2.in',
            stagger: 0.1
          }, '-=1')
        }
      }
    }
  }, [isActive, index, previousIndex])

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden cursor-pointer rounded-[32px] ${
        isActive ? 'w-[592px] h-[461px] active-card' : 'w-[280px] h-[461px]'
      }`}
      onClick={onClick}
      layout
      data-index={index}
      transition={{
        layout: { 
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
    >
      <div className="absolute inset-0 bg-[#FDEFEF] rounded-[32px]"/>
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[#C72828] rounded-[32px]"
      />
      
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div 
              className="absolute top-10 right-10 w-[161px] h-[22px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: 'anticipate'
              }}
            >
              <div className="flex items-center gap-2 text-white font-medium">
                View all Courses <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          ref={iconsRef}
          className={`absolute top-[126px] left-[66px] w-[459.52px] h-[93.36px] flex items-center gap-[42px] ${
            !isActive && 'pointer-events-none opacity-0'
          }`}
        >
          {['react', 'tools', 'vue', 'design'].map((icon) => (
            <TechIcon key={icon} icon={icon} />
          ))}
        </div>

        <div 
          className={`absolute ${
            isActive 
              ? 'top-[283px] left-[75px] w-[442px] h-[138px] gap-2 items-end flex-row-reverse' 
              : 'flex-col items-center justify-center w-[209px] h-[422px] top-[100px] gap-6 mx-auto'
          } flex transition-all duration-1000 ease-in-out`}
        >
          <div 
            ref={textRef}
            className={`w-[218px] flex flex-col transform-gpu ${
              !isActive 
                ? 'origin-center -rotate-90 z-10' 
                : 'relative z-20 mr-8'
            }`}
            style={{
              gap: '12px',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.h2 
              layout
              className={`text-2xl font-bold transform-gpu ${
                isActive ? 'text-white whitespace-nowrap' : 'text-[#C72828]'
              }`}
              transition={{
                layout: { 
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            >
              {title}
            </motion.h2>
            <motion.p 
              layout
              className={`text-sm leading-relaxed transform-gpu ${
                isActive ? 'text-pink-100' : 'text-[#D34242]'
              }`}
              transition={{
                layout: { 
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            className={`${
              isActive 
                ? 'w-[200px] h-[138px] relative' 
                : `relative flex justify-center mt-8 ${index === 1 ? '-mt-2' : ''}`
            }`}
            layout
            transition={{
              layout: { 
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
          >
            <div className="relative">
              <motion.span 
                className={`${nohemi.className} ${
                  isActive 
                    ? 'text-[150px] leading-[180px] text-white' 
                    : 'text-[150px] leading-[180px] text-[#C72828]'
                } font-bold relative`}
                animate={{
                  x: isActive ? 20 : 0
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {number}
              </motion.span>
              <motion.span 
                className={`${nohemi.className} absolute -top-2 -right-2 text-[64px] leading-[76.8px] ${
                  isActive ? 'text-pink-100' : 'text-[#C72828]'
                } font-bold`}
                animate={{
                  x: isActive ? 20 : 0
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                +
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
function TechIcon({ icon }: { icon: string }) {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <Image 
          src={iconMapping[icon]}
          alt={`${icon}`}
          width={93}
          height={93}
          className="object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const nextSibling = target.nextSibling;
            if (nextSibling && nextSibling instanceof Element) {
              nextSibling.removeAttribute('style');
            }
          }}
        />
        <span 
          className="text-white text-lg capitalize" 
          style={{ display: 'none' }}
        >
          {icon}
        </span>
      </div>
    </motion.div>
  )
}
