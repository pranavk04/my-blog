import type { PageLoad } from './$types';
import { getSlug } from '$lib/getSlug';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async({ params }) => {
    const modules = import.meta.glob(`/src/recs/**/*.{md,svx}`);

    let match: { path?: string; resolver?: App.RecResolver } = {};
    for (const [path, resolver] of Object.entries(modules)) {
        if (getSlug(path) == params.slug) { 
            match = { path, resolver: resolver as unknown as App.RecResolver };
            break;
        }
    }

    const rec = await match?.resolver?.();

    if (!rec) {
        throw error(404);
    }

    return {
        component: rec.default,
        frontmatter: rec.metadata
    }
}