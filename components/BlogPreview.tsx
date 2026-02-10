import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import BlogCard from './BlogCard'

const PREVIEW_COUNT = 3

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, PREVIEW_COUNT)
  return (
    <section id="blog" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-foreground/20 pt-8">
          <p className="text-sm tracking-[0.15em] uppercase font-medium opacity-70 mb-2">Writing</p>
          <h2 className="mb-3">Blog</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl">
            Cloud, AI systems, and building software what I work on and learn. Pick a post and dive in.
          </p>
          {posts.length === 0 ? (
            <p className="text-base opacity-80 mb-8">No posts yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} delayMs={i * 70} />
              ))}
            </div>
          )}
          <Link
            href="/blog"
            className="inline-flex items-center text-base font-medium opacity-90 hover:opacity-100 transition-opacity group"
          >
            <span className="border-b border-foreground/40 hover:border-foreground/80 transition-colors pb-0.5">
              View all posts
            </span>
            <span className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
