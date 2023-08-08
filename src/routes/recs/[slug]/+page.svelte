<script lang="ts">
    import type { PageData } from "./$types";
    import type { SvelteComponentTyped } from "svelte";

    export let data: PageData;

    type N = $$Generic<typeof SvelteComponentTyped<any, any, any>>;

    $: component = data.component as unknown as N;
</script>

<h1 class="font-heading text-5xl text-center font-black">
    {data.frontmatter.title}
</h1>

<p class='text-center text-gray-600'> 
    {data.frontmatter.summary}
</p>

<div class='flex justify-center'>
<div class="prose">
    <svelte:component this={component} />
</div>
</div>
