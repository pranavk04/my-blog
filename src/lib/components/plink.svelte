<script lang="ts">
	export let src: string;
	export let title: string;
</script>

<div>
	<b>
		<a class="text-lg text-primary-900 hover:text-primary-500" href={src}>
			{title}
		</a>
	</b>
	<hr class="my-2"/>
	<slot />
</div>
