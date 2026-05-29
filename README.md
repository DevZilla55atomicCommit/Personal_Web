# Dev Portfolio

A modern, accessible portfolio website built with [Astro](https://astro.build/).

## Features

- ⚡️ **Fast by default** - Astro ships zero JavaScript by default
- 🌙 **Dark mode support** - Built-in dark mode with smooth transitions
- 📱 **Mobile responsive** - Works great on all devices
- ♿ **Accessible** - Built with accessibility best practices
- 🎨 **Tailwind CSS** - Modern utility-first styling
- 📝 **MDX content** - Write content in Markdown or MDX
- 🚀 **SEO optimized** - Meta tags and structured data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components
├── layouts/         # Page layouts
├── pages/           # Page routes
├── styles/          # CSS files
└── config.mjs       # Site configuration

content/
├── _projects/       # Project content (MD/MDX)
└── writing/         # Blog posts (MD/MDX)

public/              # Static assets
```

## Adding Projects

1. Create a new folder in `content/_projects/`
2. Add an `index.md` or `index.mdx` file with frontmatter:

```md
---
title: 'Project Name'
description: 'Project description'
tags: ['tag1', 'tag2']
date: '2026-05-01'
image: '/images/project.jpg'
featured: true
featuredRank: 1
---
```

3. Edit the content as needed

## Adding Blog Posts

1. Create a new folder in `content/writing/`
2. Add an `index.md` or `index.mdx` file with frontmatter:

```md
---
title: 'Post Title'
description: 'Post description'
tags: ['tag1', 'tag2']
date: '2026-05-01'
image: '/images/post.jpg'
---
```

## Customization

Edit `src/config.mjs` to customize:

- Site title and description
- Social media links
- Navigation links
- Theme colors

## License

MIT
