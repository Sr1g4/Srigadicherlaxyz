import AnimatedTitle from './AnimatedTitle'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name and Title Section */}
        <div className="mb-12 space-y-6">
          <h1 className="text-balance">Srivatsa Gadicherla</h1>
          <AnimatedTitle />
        </div>
        
        {/* Main Introduction */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-lg md:text-xl leading-relaxed">
            <p className="opacity-90 mb-6">
              Building scalable, production-ready solutions with AWS and modern technologies. 
              Specializing in Cloud & AI Systems, I transform complex challenges into elegant, 
              efficient software.
            </p>
          </div>

          {/* Personal Section */}
          <div className="border-t border-foreground/20 pt-8 mt-10">
            <p className="text-base md:text-lg leading-relaxed opacity-80 font-light">
              Beyond code, I'm passionate about continuous learning, snowboarding, sports . And yes, I absolutely love dogs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
