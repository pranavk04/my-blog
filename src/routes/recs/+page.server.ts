import type { PageServerLoad } from "./$types";
import { getSlug } from '$lib/getSlug';

export const load: PageServerLoad = async({ url }) => {
    const modules = import.meta.glob(`/src/recs/**/*.{md, svx}`);

    const promises = Object.entries(modules).map(([path, resolver]) =>
        resolver().then(
            (rec) =>
                ({
                    slug: getSlug(path),
                    ...(rec as App.RecFile).metadata
                } as App.Rec)
        )
    );

    const recs = await Promise.all(promises);
    recs.sort((a, b) => (new String(a.title) > new String(b.title) ? 1 : -1));

    return { recs: recs };
}