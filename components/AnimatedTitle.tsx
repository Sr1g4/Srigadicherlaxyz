'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const titles = [
  'Software Engineer',
  'Cloud Architect',
  'Learner',
  'Innovator',
]

export default function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsVisible(true)
      }, 600)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  // Gradient colors that work in both light and dark mode with more contrast
  const gradientColors = isDark
    ? 'from-white via-gray-200 to-white'
    : 'from-black via-gray-600 to-black'

  return (
    <div className="relative h-8 md:h-10 text-xl md:text-2xl font-light mb-8 overflow-hidden">
      <span
        key={currentIndex}
        className={`absolute inset-0 flex items-center justify-center ${
          isVisible
            ? 'animate-fade-in-up'
            : 'animate-fade-out-up'
        }`}
      >
        <span className="relative inline-block">
          <span 
            className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradientColors} bg-200% ${
              isVisible ? 'animate-gradient-shift animate-illuminate' : ''
            }`}
          >
            {titles[currentIndex]}
          </span>
          <span 
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-foreground/60 to-transparent transition-all duration-1000 ease-in-out ${
              isVisible ? 'w-full opacity-100 animate-gradient-shift' : 'w-0 opacity-0'
            }`}
          />
        </span>
      </span>
    </div>
  )
}
