import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    period: z.string(),
    org: z.string(),
    orgEn: z.string(),
    role: z.string(),
    roleEn: z.string(),
    category: z.enum(['master', 'undergrad']),
    highlights: z.array(z.string()),
    highlightsEn: z.array(z.string()),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    kind: z.enum(['work', 'education', 'award', 'skill']),
    period: z.string().optional(),
    org: z.string().optional(),
    orgEn: z.string().optional(),
    detail: z.string().optional(),
    detailEn: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    highlightsEn: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    period: z.string(),
    scope: z.string(),
    scopeEn: z.string(),
    tagline: z.string(),
    taglineEn: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    highlightsEn: z.array(z.string()),
    link: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { research, experience, projects };
