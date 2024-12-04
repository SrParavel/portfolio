import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
    schema: z.object({
        title: z.string(),
        company: z.string(),
        from: z.string(),
        to: z.string(),
        tags: z.array(z.string()),
    })
})

export const collections = { experiences }