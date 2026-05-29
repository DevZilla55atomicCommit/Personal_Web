import { defineCollection } from 'astro:content';
import { mdx } from '@astrojs/mdx';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => ({
    title: image(),
    description: image().optional(),
    tags: image().optional(),
    link: image().optional(),
    date: image().optional(),
    image: image().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: ({ image }) => ({
    title: image(),
    description: image().optional(),
    tags: image().optional(),
    date: image().optional(),
    image: image().optional(),
  }),
});

export const collections = {
  projects,
  writing,
};
