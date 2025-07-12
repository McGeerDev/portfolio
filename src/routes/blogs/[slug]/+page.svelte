<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="py-16 sm:py-24 text-center">
  <h1 class="font-lexend-zetta text-4xl sm:text-6xl md:text-7xl font-light tracking-widest leading-tight">
    {data.title}
  </h1>
  <p class="mt-6 text-lg sm:text-xl md:text-2xl tracking-[0.3em] sm:tracking-[0.4em] text-gray-700">
    {data.content}
  </p>
</div>

