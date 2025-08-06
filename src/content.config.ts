import { defineCollection, reference, z } from "astro:content"
import { glob } from 'astro/loaders';

const epistolas = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/epistolas' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        cover: z.array(image()),
        coverAlt: z.string(),
    }),
});

export const collections = { epistolas }