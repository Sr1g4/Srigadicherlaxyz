export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Contact</h2>
        <div className="border-t border-foreground/20 pt-8">
          <p className="text-lg leading-relaxed mb-6 opacity-90">
            I'm always open to discussing new opportunities, interesting projects,
            or just connecting with fellow engineers.
          </p>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed opacity-90">
              Feel free to reach out via email or LinkedIn.
            </p>
            <div className="pt-4">
              <a
                href="mailto:gadicherlasri@gmail.com"
                className="inline-flex items-center text-lg font-medium opacity-90 hover:opacity-100 transition-opacity duration-300 border-b border-foreground/30 hover:border-foreground/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                gadicherlasri@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
