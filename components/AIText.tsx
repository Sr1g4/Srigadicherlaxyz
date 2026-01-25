'use client'

import { useState, useEffect } from 'react'

interface AITextProps {
  text: string
  className?: string
}

export default function AIText({ text, className = '' }: AITextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        // Build the string with some "scramble" effect on the current character
        let result = text.slice(0, currentIndex)
        if (currentIndex < text.length) {
          // Add a random character at the end for scramble effect
          result += chars[Math.floor(Math.random() * chars.length)]
        }
        setDisplayText(result)
        currentIndex++
      } else {
        setDisplayText(text)
        setIsComplete(true)
        clearInterval(typeInterval)
      }
    }, 35)

    return () => clearInterval(typeInterval)
  }, [text])

  // Cursor blink effect
  useEffect(() => {
    if (isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 530)
      
      // Stop cursor after a few seconds
      const timeout = setTimeout(() => {
        clearInterval(cursorInterval)
        setShowCursor(false)
      }, 3000)

      return () => {
        clearInterval(cursorInterval)
        clearTimeout(timeout)
      }
    }
  }, [isComplete])

  return (
    <span className={`font-mono ${className}`}>
      <span className="opacity-50">&gt; </span>
      <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
        {displayText}
      </span>
      <span 
        className={`inline-block w-2 h-5 ml-0.5 bg-foreground/80 align-middle transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  )
}
