import Image from 'next/image'
import AnimatedTitle from './AnimatedTitle'
import AIText from './AIText'

const navLinks = [
  { label: 'Blog', href: '#blog' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
            <Image
              src="/Me/image.png"
              alt="Srivatsa Gadicherla"
              fill
              className="object-cover scale-150 object-[center_25%] grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>

        {/* Intro Line */}
        <div className="mb-6">
          <p className="text-lg md:text-xl opacity-80 italic">
            Hi, I'm Srivatsa Gadicherla,
          </p>
          <p className="text-lg md:text-xl opacity-80 italic">
            <AnimatedTitle />
          </p>
        </div>
        
        {/* Main Statement - Large and Bold */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-balance">
            Building scalable, production-ready solutions with AWS and modern technologies. 
            Specializing in Cloud & AI Systems, I transform complex challenges into efficient and scalable software.
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base md:text-lg opacity-80 hover:opacity-100 transition-opacity group"
            >
              <span className="border-b border-foreground/40 hover:border-foreground/80 transition-colors pb-0.5">
                {link.label}
              </span>
              <span className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">↓</span>
            </a>
          ))}
        </nav>

        {/* Personal Section */}
        <div className="mt-16 pt-8 border-t border-foreground/20">
          <div className="text-sm md:text-base leading-relaxed max-w-2xl">
            <AIText text="Beyond code, I'm passionate about continuous learning in technology and AI, snowboarding, sports. And I absolutely love dogs." />
          </div>
        </div>
      </div>
    </section>
  )
}
