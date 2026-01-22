import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(0.95)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        illuminate: {
          '0%': { 
            filter: 'brightness(1) drop-shadow(0 0 0px currentColor)',
          },
          '50%': { 
            filter: 'brightness(1.2) drop-shadow(0 0 8px currentColor)',
          },
          '100%': { 
            filter: 'brightness(1) drop-shadow(0 0 0px currentColor)',
          },
        },
        slideInGlow: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)',
            filter: 'blur(4px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
            filter: 'blur(0px)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-out-up': 'fadeOutUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'illuminate': 'illuminate 2.5s ease-in-out infinite',
        'slide-in-glow': 'slideInGlow 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
export default config
