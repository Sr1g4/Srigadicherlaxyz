import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <Experience />
      <Certifications />
      <Skills />
      <Contact />
      <Resume />
    </main>
  )
}
