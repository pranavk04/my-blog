import adapter from '@sveltejs/adapter-auto';
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
		adapter: adapter({ strict: false })
	}
};

export default config;


