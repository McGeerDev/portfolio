<script>
	import '../app.css'
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<div class="font-lekton flex min-h-screen flex-col bg-white text-black">
	<div class="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
		<Header />
		<hr class="border-black" />
		<main class="flex-1">
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style></style>
