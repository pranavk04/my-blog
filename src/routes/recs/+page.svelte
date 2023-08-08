<script lang="ts">
	import type { PageData } from './$types';
	import Article from "$lib/components/blog/article.svelte";

	export let data: PageData;
</script>


<h1 class="font-heading text-5xl text-center font-black">Recs</h1>

	<p> 
        What I think is good to use for a certain task or configuration, and things I think
        you should check out!
	</p>

	{#each data.recs as { slug, title, summary }}
        <div class="block px-4 mx-5">
            <a href={'recs/' + slug}>
                <h1 class="text-xl md:text-2xl mb-1 font-semibold text-primary-900">
                    {title}
                </h1>
            </a>
            <hr class="mb-2"/>
            <p>{summary}</p>
        </div>
	{/each}


