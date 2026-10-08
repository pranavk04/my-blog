<script lang="ts">
	export let src: string;
	export let title: string;
</script>

<div>
	<b>
		<a class=" text-primary-400 hover:text-primary-300" href={src}>
			{title}:
		</a>
	</b>
	<slot />
</div>
