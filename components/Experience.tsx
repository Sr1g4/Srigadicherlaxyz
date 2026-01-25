import Image from 'next/image'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-foreground/20 pt-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Company Logo */}
                {exp.logo && (
                  <div className="flex-shrink-0">
                    <div className="relative w-28 h-20 md:w-36 md:h-24">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                
                {/* Experience Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="mb-2">{exp.role}</h3>
                    <p className="text-lg font-medium mb-1">{exp.company}</p>
                    <p className="text-sm opacity-70">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-4 list-none">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-3 mt-2 text-foreground/40 flex-shrink-0">•</span>
                        <span className="flex-1 leading-relaxed opacity-90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
