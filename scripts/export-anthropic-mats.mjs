import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const staticDir = path.join(root, 'static/anthropic-mats');
const sourceDir = path.join(root, 'src/lib/content');
const notes = ['monitor-transfer', 'authorization-presentation', 'mars-experiments', 'attention-observability', 'proposed-study'];
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const wrapper = (title, body, cssPath, back = false) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(title)} — research and experiment notes by Pranav Venkata Konda.">
  <title>${escape(title)} · Pranav Konda</title>
  <link rel="stylesheet" href="${cssPath}">
  <style>body { margin: 0; padding: clamp(1.2rem, 4vw, 3.5rem); background: #fffefb; } main { display: block; }</style>
</head>
<body><main><article class="mats-page">
${back ? '<p class="mats-note-back"><a href="../">← Research direction</a></p>' : ''}
${body}
</article></main></body>
</html>
`;

await mkdir(path.join(staticDir, 'notes'), { recursive: true });
await mkdir(path.join(staticDir, 'assets'), { recursive: true });
await cp(path.join(root, 'src/lib/styles/anthropic-mats.css'), path.join(staticDir, 'assets/page.css'));
const main = await readFile(path.join(sourceDir, 'anthropic-mats.html'), 'utf8');
const document = wrapper('Activation monitors under distribution shift', main, './assets/page.css');
await writeFile(path.join(staticDir, 'standalone.html'), document);
for (const slug of notes) {
  const body = await readFile(path.join(sourceDir, 'anthropic-mats-notes', `${slug}.html`), 'utf8');
  const title = body.match(/<h1>([^<]+)<\/h1>/)?.[1];
  if (!title) throw new Error(`Missing note title: ${slug}`);
  await writeFile(path.join(staticDir, 'notes', `${slug}.html`), wrapper(title, body, '../assets/page.css', true));
}
if (process.argv[2]) {
  const output = path.resolve(process.argv[2]);
  await mkdir(output, { recursive: true });
  await cp(staticDir, output, { recursive: true });
  await writeFile(path.join(output, 'index.html'), document);
}
console.log('Exported standalone page and five notes from the shared content sources.');
