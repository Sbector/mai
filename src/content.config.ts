import { defineCollection, reference, z } from "astro:content";
import { glob, file } from "astro/loaders";

const epistolas = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/epistolas",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),

        // Ruta a imagen en /public
        cover: z.string(),
        coverAlt: z.string(),

        // Relación con itemCollections
        itemCollection: reference("itemCollections").optional(),
    }),
});

const itemCollections = defineCollection({
  loader: file("./src/data/itemCollections.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        // Ruta absoluta desde /public
        imageRoute: z.string(),
      }),
    ),
  }),
});

export const collections = { epistolas, itemCollections }