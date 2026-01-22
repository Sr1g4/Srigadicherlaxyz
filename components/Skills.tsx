import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Skills</h2>
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="border-t border-foreground/20 pt-6">
              <h3 className="mb-4">{category.name}</h3>
              <p className="leading-relaxed opacity-90">{category.items.join(' • ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
