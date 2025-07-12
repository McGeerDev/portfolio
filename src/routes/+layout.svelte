<script>
  import '../app.css';
  import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="bg-white min-h-screen text-black font-lekton">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Header/>
    <hr class="border-black" />
    <main>
      <slot />
    </main>

    <Footer/>
  </div>
</div>

<style></style>
