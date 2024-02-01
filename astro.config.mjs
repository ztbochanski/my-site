import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://zachsblog.netlify.app',
  integrations: [mdx({
    remarkPlugins: [remarkReadingTime]
  }), sitemap(), tailwind(), icon(), compress()]
});