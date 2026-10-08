# Activation-monitor research page

The native SvelteKit route is `/activation-monitors/`. It imports `ActivationMonitors.svelte`, which reads the trusted, authored HTML fragment in `src/lib/content/activation-monitors.html`. The component has no client-side logic or new package dependencies. Its styles use the `.activation-page` prefix.

The page is linked from `/projects`. Its relative paper and note links depend on the route's `trailingSlash = 'always'` setting. Static resources live in `static/activation-monitors/`.

The earlier `/ant-activation-supplement/` URL redirects directly to `/activation-monitors/` with a permanent 308 response. There is no separate landing page for the original note.

## Deployment compatibility

The Vercel project rejected its discontinued Node 20 setting before building. The repository now requests Node 24 through `package.json` and pins the Kit 1-compatible Vercel adapter at 2.4.3. The root layout requests prerendering. An explicit Edge runtime avoids this adapter's retired Node 16/18 default. The verified build emits the new page, notes, and assets statically, alongside the adapter's Edge fallback function. Use Node 24 for installation and deployment checks.

## Editing and exporting

Edit the main fragment or one of the five note fragments under `src/lib/content/activation-monitor-notes/`. Regenerate the static notes and standalone version after content or style edits:

```sh
node scripts/export-activation-monitors.mjs
npm run check
npm run build
```

To export an independent folder with `index.html`, notes, and assets:

```sh
node scripts/export-activation-monitors.mjs /absolute/path/to/export
```

The standalone version at `/activation-monitors/standalone.html` can be linked or embedded in an iframe. The Svelte component can also be imported directly into an existing route. The standalone export requires no JavaScript, CDN, or package installation.

## Papers and evidence

The attention paper is now public at `https://arxiv.org/abs/2610.09620`, verified against its title and author on arXiv. The local PDF remains the author-supplied `main-arxiv.pdf` and is labeled as the author's PDF. The main page, numerical note, and exported standalone page link to the public arXiv record.

The MARS PDF is the author-supplied `sample_paper.pdf`, titled *What Can Cooperative Agents Forget?*, dated 6 October 2026. It is a working preprint. The MARS note's numerical table is transcribed from that draft and explicitly labeled as such.

The Mestre–Nagao preprint links to `https://arxiv.org/abs/2606.15036`.

The three probe summary JSON files are copies of saved local experiment artifacts. The two `*-paper-measurements.json` files are manuscript transcriptions, not new computational replays. `source-manifest.json` records hashes for the original supplied artifacts. The author's attention reproducibility archive is included intact.

The main page and notes distinguish completed measurements, exploratory controls, manuscript-reported results, and the proposed follow-up. Building or reviewing this page does not rerun inference or validate the mathematical proofs.

## Production-base provenance

The restored website base is `d290adb9b0aba9e8be42a2812da9bcd845cd4609`, the commit recorded by Vercel deployment `dpl_6Nz6LZEMTjGfJjV5ySt3gULH5VYh` as the last successful production deployment before this page was added. The restore merge retains the research-page sources, papers, notes, and hosting compatibility fix. Blog, Recs, and CV routes are absent; the external Blog navigation link and its home-page description were also removed at the author's request.

For subsequent website releases, check the current production deployment's commit and branch before selecting a base. The repository's default branch previously pointed to an older site tree.

## Current navigation

The Projects page is a concise citation list linking the attention, Mestre–Nagao, papers to their verified public arXiv records and the Khovanov-code paper to its journal article in Experimental Mathematics, followed by the activation-monitor direction and the MARS working preprint. About is temporarily removed from navigation and routing; its source is preserved at `archived-pages/about/+page.svelte` for later restoration.

## Public and committee copies

The public route is `/activation-monitors/`; public page text and metadata contain no application-program labels. The earlier supplement route and the former research route redirect to this public page. Papers and experiment notes use general research URLs. The application-discussion PDF is outside the public research bundle.

A separate review copy uses an unlisted address without passwords or accounts, as requested by the author. It is excluded from public navigation and carries `noindex, nofollow, noarchive` HTML metadata and HTTP headers. Its supplemental PDF carries the same HTTP indexing controls. Keep the link out of public navigation, sitemap entries, and public deliverable bundles. The current link is retained separately for the author.
