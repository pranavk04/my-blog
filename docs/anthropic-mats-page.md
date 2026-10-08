# Anthropic MATS page

The native SvelteKit route is `/anthropic-mats/`. It imports `AnthropicMats.svelte`, which reads the trusted, authored HTML fragment in `src/lib/content/anthropic-mats.html`. The component has no client-side logic or new package dependencies. Its styles use the `.mats-page` prefix.

The page is linked from `/projects`. Its relative paper and note links depend on the route's `trailingSlash = 'always'` setting. Static resources live in `static/anthropic-mats/`.

The earlier `/ant-mats-supplement/` URL is preserved with a short page linking the original research-note PDF and the updated direction. This route was absent from the prior SvelteKit production checkout.

## Deployment compatibility

The Vercel project rejected its discontinued Node 20 setting before building. The repository now requests Node 24 through `package.json` and pins the Kit 1-compatible Vercel adapter at 2.4.3. The root layout requests prerendering. An explicit Edge runtime avoids this adapter's retired Node 16/18 default. The verified build emits the new page, notes, and assets statically, alongside the adapter's Edge fallback function. Use Node 24 for installation and deployment checks.

## Editing and exporting

Edit the main fragment or one of the five note fragments under `src/lib/content/anthropic-mats-notes/`. Regenerate the static notes and standalone version after content or style edits:

```sh
node scripts/export-anthropic-mats.mjs
npm run check
npm run build
```

To export an independent folder with `index.html`, notes, and assets:

```sh
node scripts/export-anthropic-mats.mjs /absolute/path/to/export
```

The standalone version at `/anthropic-mats/standalone.html` can be linked or embedded in an iframe. The Svelte component can also be imported directly into an existing route. The standalone export requires no JavaScript, CDN, or package installation.

## Papers and evidence

The attention PDF is the author-supplied `main-arxiv.pdf`. Its current status is **submitted to arXiv; processing**. Add the verified public arXiv URL to the main content fragment after processing; do not infer an ID or automatically change status based on a clock. Keep the direct PDF link as an accessible fallback.

The MARS PDF is the author-supplied `sample_paper.pdf`, titled *What Can Cooperative Agents Forget?*, dated 6 October 2026. It is a working preprint. The MARS note's numerical table is transcribed from that draft and explicitly labeled as such.

The Mestre–Nagao preprint links to `https://arxiv.org/abs/2606.15036`.

The three probe summary JSON files are copies of saved local experiment artifacts. The two `*-paper-measurements.json` files are manuscript transcriptions, not new computational replays. `source-manifest.json` records hashes for the original supplied artifacts. The author's attention reproducibility archive is included intact.

The main page and notes distinguish completed measurements, exploratory controls, manuscript-reported results, and the proposed follow-up. Building or reviewing this page does not rerun inference or validate the mathematical proofs.

## Production-base provenance

The restored website base is `d290adb9b0aba9e8be42a2812da9bcd845cd4609`, the commit recorded by Vercel deployment `dpl_6Nz6LZEMTjGfJjV5ySt3gULH5VYh` as the last successful production deployment before this page was added. The restore merge retains the MATS sources, papers, notes, and hosting compatibility fix. Blog, Recs, and CV routes are absent; the external Blog navigation link and its home-page description were also removed at the author's request.

For subsequent website releases, check the current production deployment's commit and branch before selecting a base. The repository's default branch previously pointed to an older site tree.
