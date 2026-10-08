<script>
  import publicContent from '$lib/content/activation-monitors.html?raw';
  import '$lib/styles/activation-monitors.css';

  const content = publicContent
    .replace('Pranav Venkata Konda · Research direction', 'Pranav Venkata Konda · Anthropic MATS')
    .replaceAll('href="./', 'href="/activation-monitors/');
</script>

<svelte:head>
  <title>Activation monitors under distribution shift · Anthropic MATS</title>
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <meta name="referrer" content="no-referrer" />
</svelte:head>

<article class="activation-page">
  {@html content}
  <p class="activation-linkline"><a href="./assets/research-supplement.pdf">Research supplement (PDF)</a></p>
</article>
