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

<div class="min-h-screen bg-scholarly-cream flex flex-col items-center justify-center py-8">
	<div class="container max-w-2xl min-w-[350px] bg-scholarly-card rounded-3xl shadow-lg p-8 animate-fade-in font-garamond flex-1 flex flex-col">
		<Nav />
		<div class="space-y-5 flex-1 flex flex-col">
			<slot />
			<!-- Remove pb-2 here to avoid extra space above footer -->
		</div>
		<div class="mt-auto">
			<Footer />
		</div>
	</div>
</div>

