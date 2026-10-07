import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import RemarkMath from 'remark-math';
import RehypeKatex from 'rehype-katex-svelte';
import RehypePrism from 'rehype-prism';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [RemarkMath], 
			rehypePlugins: [RehypeKatex, RehypePrism],
			smartypants: {
				dashes: 'oldschool'
			}
		}),
	],
	kit: {
		// All routes are prerendered by the root layout. An explicit supported
		// fallback runtime avoids this Kit 1 adapter's retired Node 16/18 default.
		adapter: adapter({ runtime: 'edge' })
	}
};

export default config;

