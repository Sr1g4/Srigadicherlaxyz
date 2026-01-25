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
    <span className="relative inline-block h-7 md:h-8 overflow-hidden align-bottom">
      <span
        key={currentIndex}
        className={`inline-block transition-all duration-500 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        <span className="relative inline-block">
          <span 
            className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradientColors} bg-200% ${
              isVisible ? 'animate-gradient-shift' : ''
            }`}
          >
            {titles[currentIndex]}
          </span>
        </span>
      </span>
    </span>
  )
}
