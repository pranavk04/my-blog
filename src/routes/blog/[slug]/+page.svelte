<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	
	export let data: PageData;

	type N = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	
	$: component = data.component as unknown as N;
</script>
<div class="space-y-2">
	<div class="flex flex-row items-center"> 
	<a href="/blog" class="font-heading font-semibold text-xl ">Back</a>
	</div>

	<h1 class="font-heading text-3xl text-center font-black">{data.frontmatter.title}</h1>

	<p class='text-center text-gray-600'> 
	{data.frontmatter.summary}
	</p>

	<p class='text-center text-gray-600'>{data.frontmatter.date}</p>

	<div class='flex justify-center'>
		<div class="prose">
			<svelte:component this={component} />
		</div>
	</div>
</div>
