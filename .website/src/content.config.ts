import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    homepage: z.string().url(),
    github: z.string().url().optional(),
    docs: z.string().url().optional(),
    category: z.enum([
      'databases',
      'streaming',
      'monitoring',
      'data-integration',
      'dev-platforms',
      'byoc-platforms',
    ]),
    tags: z.array(z.string()),
    license: z.enum(['open-source', 'commercial', 'hybrid', 'proprietary']),
    language: z.string().optional(),
    cloudSupport: z.array(z.enum(['aws', 'gcp', 'azure', 'on-prem', 'any'])),
    stars: z.number().optional(),
    logo: z.string().optional(),
  }),
});

export const collections = {
  tools: toolsCollection,
};
