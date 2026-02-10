import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostMeta {
  title: string
  date: string
  excerpt: string
  slug: string
  draft?: boolean
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '')
}

function normalizeDate(value: unknown): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))
  const posts: BlogPostMeta[] = files.map((filename) => {
    const slug = getSlugFromFilename(filename)
    const fullPath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title ?? slug,
      date: normalizeDate(data.date),
      excerpt: data.excerpt ?? '',
      slug,
      draft: data.draft ?? false,
    }
  })
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (b.date.localeCompare(a.date)))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)
  let fullPath: string
  if (fs.existsSync(mdxPath)) fullPath = mdxPath
  else if (fs.existsSync(mdPath)) fullPath = mdPath
  else return null
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    title: data.title ?? slug,
    date: normalizeDate(data.date),
    excerpt: data.excerpt ?? '',
    slug,
    draft: data.draft ?? false,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => getSlugFromFilename(f))
}
