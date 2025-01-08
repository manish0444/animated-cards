'use client'

import { useState } from 'react'
import { CourseCard } from '@/components/course-card'

export default function Page() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      number: '23',
      title: 'All Courses',
      description: "courses you're powering through right now.",
    },
    {
      number: '05',
      title: 'Upcoming Courses',
      description: 'exciting new courses waiting to boost your skills.',
    },
    {
      number: '10',
      title: 'Ongoing Courses',
      description: 'currently happening—don\'t miss out on the action!',
    }
  ]

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl text-gray-900 mb-2">
          Explore our classes and master trending skills!
        </h1>
        <h2 className="text-4xl font-bold mb-8">
          Dive Into{' '}
          <span className="text-emerald-500">What's Hot Right Now!</span>{' '}
          <span role="img" aria-label="fire">🔥</span>
        </h2>
        
        <div className="grid grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <CourseCard
              key={index}
              isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

