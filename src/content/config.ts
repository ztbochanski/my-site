import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.enum(['programming-languages', 'lifestyle', 'resources']),
		source: z.object({
			title: z.string(),
			url: z.string(),
		}),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog };
