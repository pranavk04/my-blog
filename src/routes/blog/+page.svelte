<script lang="ts">
	import type { PageData } from './$types';
	import Article from "$lib/components/blog/article.svelte";

	export let data: PageData;
</script>


<h1 class="font-heading text-5xl text-center font-black">Blog</h1>

	<p> 
		Welcome to my blog. I'll mostly stick to writing about my thoughts, math, and technology, 
		but I'm happy to take any suggestions.
	</p>

	{#each data.posts as { slug, title, summary, date }}
		<Article {slug} {title} {summary} {date} />
	{/each}


