import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { siteUrl } from '@/lib/site'

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  const title = `${post.title} | Blog | Srivatsa Gadicherla`
  const url = `${siteUrl}/blog/${slug}`
  return {
    title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.content,
    options: {},
  })

  return (
    <main className="min-h-screen">
      <article className="px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-base opacity-80 hover:opacity-100 transition-opacity mb-10 group animate-fade-in-up [animation-fill-mode:backwards]"
          >
            <span className="border-b border-foreground/40 hover:border-foreground/80 transition-colors pb-0.5">
              Back to Blog
            </span>
            <span className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">←</span>
          </Link>
          <header className="mb-12">
            <div className="h-0.5 w-16 bg-foreground/30 rounded-full origin-left animate-line-reveal mb-8" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3 animate-fade-in-up [animation-fill-mode:backwards] [animation-delay:150ms]">
              {post.title}
            </h1>
            {post.date && (
              <time
                className="text-sm opacity-70 block animate-fade-in-up [animation-fill-mode:backwards] [animation-delay:250ms]"
                dateTime={post.date}
              >
                {formatDate(post.date)}
              </time>
            )}
            <div className="h-px bg-foreground/10 mt-8 animate-fade-in-up [animation-fill-mode:backwards] [animation-delay:350ms]" />
          </header>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-p:leading-relaxed prose-p:opacity-90 prose-a:border-b prose-a:border-foreground/40 hover:prose-a:border-foreground/80 prose-strong:font-semibold animate-fade-in-up [animation-fill-mode:backwards] [animation-delay:400ms]">
            {content}
          </div>
        </div>
      </article>
    </main>
  )
}
