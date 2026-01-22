export default function Resume() {
  return (
    <section id="resume" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Resume</h2>
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full max-w-2xl">
              <div className="border border-foreground/20 rounded-lg p-10 bg-background/30 backdrop-blur-sm">
                <p className="text-center text-lg opacity-90 mb-2 font-medium">
                  Download Resume
                </p>
                <p className="text-center text-sm opacity-70 mb-8">
                  Get the complete document with all details
                </p>
                <div className="flex justify-center">
                  <a
                    href="/resume/Srivatsa-Gadicherla-Resume.docx"
                    download
                    className="inline-flex items-center px-8 py-4 border-2 border-foreground/30 hover:border-foreground/60 hover:bg-foreground/5 active:bg-foreground/10 transition-all duration-300 rounded-lg font-medium group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
