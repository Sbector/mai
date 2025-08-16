import { defineCollection, reference, z } from "astro:content"
import { glob, file } from 'astro/loaders';

const epistolas = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/epistolas' }),
    schema:
        ({ image }) => z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.coerce.date(),
            cover: image(),
            coverAlt: z.string(),
            itemCollection: reference("itemCollections")
        }),
});

const itemCollections = defineCollection({
    loader: file("./src/data/itemCollections.json"),
    schema:
        ({ image }) => z.object({
            title: z.string(),
            description: z.string(),
            images: z.array(z.object({
                title: z.string(),
                description: z.string(),
                imageRoute: image(),
            })),
        })
})

export const collections = { epistolas, itemCollections }