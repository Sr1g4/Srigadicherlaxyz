import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Skills</h2>
        <div className="space-y-10">
          {skills.map((category, index) => (
            <div key={index} className="border-t border-foreground/20 pt-6">
              <h3 className="mb-4 text-lg font-medium">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm border border-foreground/20 rounded-full opacity-80 hover:opacity-100 hover:border-foreground/40 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
