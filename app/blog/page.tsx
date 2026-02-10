import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'
import { siteUrl } from '@/lib/site'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on cloud, AI systems, and software engineering.',
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: 'Blog | Srivatsa Gadicherla',
    description: 'Thoughts on cloud, AI systems, and software engineering.',
    url: `${siteUrl}/blog`,
    type: 'website',
  },
}

const STAGGER_DELAY_MS = 80

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main className="min-h-screen">
      {/* Hero intro */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up [animation-fill-mode:backwards]">
            <p className="text-sm tracking-[0.2em] uppercase font-medium opacity-70 mb-4">
              Writing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              Ideas worth reading
            </h1>
            <div className="h-1 w-24 bg-foreground/30 rounded-full origin-left animate-line-reveal mb-6" />
            <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up [animation-fill-mode:backwards] [animation-delay:200ms]">
              On building with AI and the cloud clear, practical, and worth your time.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-lg opacity-90 border-t border-foreground/20 pt-8 animate-fade-in-up">
              No posts yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} delayMs={i * STAGGER_DELAY_MS} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
