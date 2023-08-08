import type { PageLoad } from './$types';
import { getSlug } from '$lib/getSlug';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async({ params }) => {
	const modules = import.meta.glob(`/src/posts/**/*.{md,svx}`);

	let match: { path?: string; resolver?: App.MDResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (getSlug(path) == params.slug) {
			match = { path, resolver: resolver as unknown as App.MDResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post) {
		throw error(404);
	}

	return {
		component: post.default,
		frontmatter: post.metadata
	}
}
