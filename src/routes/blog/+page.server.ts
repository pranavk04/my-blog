import type { PageServerLoad } from './$types';
import { getSlug } from '$lib/getSlug';

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/posts/**/*.{md,svx}`);

	const promises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: getSlug(path),
					...(post as App.MDFile).metadata
			} as App.Post)
	));
	const posts = await Promise.all(promises);
	posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: posts };
};

