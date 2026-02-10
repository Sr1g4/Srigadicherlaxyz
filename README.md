# Resume Website

A minimal, clean resume website built with Next.js, featuring a black and white design with light/dark mode toggle.

## Features

- **Minimal Design**: Clean, simplistic black and white aesthetic
- **Light/Dark Mode**: Toggle between light and dark themes
- **Professional Typography**: Beautiful, readable fonts optimized for all screen sizes
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast & Modern**: Built with Next.js 14 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Single post
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and typography
├── components/
│   ├── ThemeToggle.tsx     # Light/dark mode switch
│   ├── Hero.tsx            # Introduction section
│   ├── Experience.tsx      # Work experience section
│   ├── Certifications.tsx  # Certifications section
│   ├── Skills.tsx          # Skills/technologies section
│   └── Contact.tsx         # Contact information
├── content/
│   └── blog/               # MDX blog posts
└── lib/
    ├── data.ts             # Resume data (experience, skills, etc.)
    └── blog.ts             # Blog helpers (getAllPosts, getPostBySlug)
```

## Customization

Edit `lib/data.ts` to update your resume information. The data structure is straightforward and easy to modify.

### Blog

The blog is powered by MDX files in `content/blog/`. To add a post, create a new `.mdx` file there with frontmatter (`title`, `date`, `excerpt`; optional `draft: true`). Publishing is done by committing and deploying no backend required.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **next-themes** - Theme management
