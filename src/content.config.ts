import { defineCollection, reference, z } from "astro:content"
import { glob, file } from 'astro/loaders';

const epistolas = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/epistolas' }),
    schema:
        z.object({
            title: z.string(),
            description: z.string(),
            imageCollection: reference("imageCollections").optional()
        }),
});

const imageCollections = defineCollection({
    loader: file("./src/data/imageCollections.json"),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        imageRoutes: z.array(image()),
    })
})

export const collections = { epistolas, imageCollections }