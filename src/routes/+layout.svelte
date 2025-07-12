<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="font-lekton min-h-screen bg-white text-black">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<Header />
		<hr class="border-black" />
		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style></style>
