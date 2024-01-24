import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx({
		syntaxHighlight: 'shiki',
		shikiConfig: { theme: 'nord' },
		remarkPlugins: [remarkReadingTime],
	}), sitemap()],
});
