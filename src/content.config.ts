import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live in src/content/blog/*.md — one file per post.
// Frontmatter drives the SEO: title, description, date, cover, tags, optional YouTube id.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(80).max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().default('/images/rooms/hero-deck-2000.jpg'),
    coverAlt: z.string(),
    tags: z.array(z.string()).default([]),
    youtube: z.string().optional(), // YouTube video ID, e.g. dQw4w9WgXcQ
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
