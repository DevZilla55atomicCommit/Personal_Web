---
title: 'Getting Started with Astro'
description: 'A beginner-friendly guide to Astro, the web framework for content-driven websites. Learn the basics and build your first static site.'
tags: ['tutorial', 'astro', 'web-development']
date: '2026-04-20'
image: '/images/astro-tutorial.jpg'
---

## What is Astro?

Astro is a modern web framework designed for content-driven websites. It focuses on performance and developer experience, delivering only the content and JavaScript your users actually need.

## Why Choose Astro?

Astro offers several advantages:

- **Performance:** Astro uses zero JavaScript by default, only shipping components you actually use
- **Simple:** Easy to pick up, whether you're new to web development or a seasoned pro
- **Flexible:** Supports multiple frontend frameworks or vanilla JavaScript
- **MDX Support:** Write content in Markdown or MDX with code blocks, quotes, and more

## Setting Up Your First Project

Here's how to get started with Astro in a few simple steps:

```bash
# Create a new project
npm create astro@latest my-site

# Navigate into the project
cd my-site

# Start the dev server
npm run dev
```

## Project Structure

```
my-site/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── layouts/     # Layout templates
│   └── pages/       # Page routes
├── astro.config.mjs # Configuration
└── package.json
```

## Your First Component

Create a new file `src/pages/index.astro`:

```astro
---
const greeting = 'Hello, World!';
---

<html lang="en">
  <head>
    <title>{greeting}</title>
  </head>
  <body>
    <h1>{greeting}</h1>
  </body>
</html>
```

## Next Steps

Now that you've set up your first Astro project, try:

1. Adding a navigation component
2. Creating layout files
3. Writing content in Markdown
4. Deploying to a static host like Netlify or Vercel

Happy building!
