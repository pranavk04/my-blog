
<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Alegreya+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
		@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
	</style>
</svelte:head>
<script>
	//	import "@fontsource/alegreya"; 
// import "@fontsource/work-sans";
	import "../app.css";
	import Nav from "$lib/components/nav.svelte";
	import Footer from "$lib/components/footer.svelte";
	import "../styles/fonts.css";
</script>

<div class="flex justify-center min-h-screen">
	<div class='font-heading px-10 py-5 max-w-screen-md'>
		<Nav />
		<div class='min-w-screen font-body pb-5 px-10 space-y-5'>
			<slot />
			<Footer />
		</div>
			</div>
		</div>

