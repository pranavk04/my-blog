
<script lang="ts">
	export let slug = '';
	export let title: string;
	export let summary: string;
	export let date: string;
</script>

<article>
	<div class="block px-4 mx-5">
	<a href={'blog/' + slug}><h1 class="text-md mb-1 font-semibold text-primary-900">{title}</h1></a>
		<p class="mb-1 text-sm text-primary-800">{date}</p>
		<hr class="mb-1"/>
		<p class="text-sm">{summary}</p>
	</div>
</article>
