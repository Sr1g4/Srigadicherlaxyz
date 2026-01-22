'use client'

import { companies } from '@/lib/data'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Overview() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="overview" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Where I've Worked</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="border-t border-foreground/20 pt-8 flex flex-col items-center text-center group"
            >
              {company.logo ? (
                <div className={`mb-6 relative transition-all duration-300 ${
                  company.name === 'IONIX AI' ? 'w-52 h-32' : 'w-40 h-24'
                } ${
                  isDark ? 'opacity-95' : 'opacity-80'
                } group-hover:opacity-100 group-hover:scale-105`}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    style={{
                      mixBlendMode: isDark ? 'screen' : 'multiply',
                    }}
                    unoptimized
                  />
                </div>
              ) : (
                <h3 className="mb-6 text-2xl font-medium">{company.name}</h3>
              )}
              <p className="text-sm opacity-70 mb-1 font-medium">{company.role}</p>
              <p className="text-sm opacity-60">{company.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
