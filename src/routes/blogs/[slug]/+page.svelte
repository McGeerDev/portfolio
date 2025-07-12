<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
  console.log({data})
</script>

<div class="py-16 sm:py-24 text-center">
  <h1 class="font-lexend-zetta text-4xl sm:text-6xl md:text-7xl font-light tracking-widest leading-tight">
    {data.metadata.title}
  </h1>
  <p class="mt-6 text-lg sm:text-xl md:text-2xl tracking-[0.3em] sm:tracking-[0.4em] text-gray-700">
    {data.metadata.description}
  </p>
</div>

<label for="content">THIS IS THE BLOG CONTENT</label>
<div class="border-4 border-amber-200" id="content">

<data.content/>
</div>

