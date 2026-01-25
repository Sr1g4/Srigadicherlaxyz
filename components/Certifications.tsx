import Image from 'next/image'
import { certifications } from '@/lib/data'

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border-t border-foreground/20 pt-6">
              <div className="flex items-start gap-6">
                {/* AWS Logo */}
                {cert.issuer === 'Amazon Web Services' && (
                  <div className="relative w-36 h-24 md:w-44 md:h-28 flex-shrink-0">
                    <Image
                      src="/logos/AWS.png"
                      alt="AWS Certified"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="mb-2">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="text-sm opacity-70 mb-3">{cert.issuer}</p>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-70 transition-opacity inline-block mt-2"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
