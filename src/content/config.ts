// 1. Import utilities from `astro:content`
import {defineCollection, reference, z} from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date().or(z.string()),
        summary: z.string(),
        url: z.string(),
        cover: image(),
        tags: z.array(z.string()),
        ogImage: z.string(),
        posistion: z.number().default(-1),
        published: z.boolean().default(false),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {  projects };