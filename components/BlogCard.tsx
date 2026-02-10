import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/blog'

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

interface BlogCardProps {
  post: BlogPostMeta
  /** Stagger delay in ms for entrance animation */
  delayMs?: number
}

export default function BlogCard({ post, delayMs }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border border-foreground/20 rounded-lg p-6 transition-all duration-300 hover:border-foreground/40 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] opacity-95 group origin-center animate-fade-in-up [animation-fill-mode:backwards]"
      style={delayMs !== undefined ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:underline">
        {post.title}
      </h3>
      {post.date && (
        <p className="text-sm opacity-70 mb-3">{formatDate(post.date)}</p>
      )}
      {post.excerpt && (
        <p className="text-sm md:text-base leading-relaxed opacity-90 line-clamp-3">
          {post.excerpt}
        </p>
      )}
      <span className="inline-block mt-4 text-sm font-medium border-b border-foreground/40 group-hover:border-foreground/80 transition-colors">
        Read more →
      </span>
    </Link>
  )
}
