import { defineCollection, reference, z } from "astro:content"

const epistolas = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date().optional(),
        img: z.string(),
        description: z.string(),
        relatedEpistolas: z.array(reference("epistolas")).optional()
    })
})

export const collections = {epistolas}