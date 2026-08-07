import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const jobs = defineCollection({
  loader: glob({ base: './src/content/jobs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    employment: z.string(),
    startDate: z.string(),
    order: z.number().default(999),

  }),
});

export const collections = {
  jobs,
};