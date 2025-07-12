<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="py-16 text-center sm:py-24">
	<h1
		class="font-lexend-zetta text-4xl leading-tight font-light tracking-widest sm:text-6xl md:text-7xl"
	>
		{data.metadata.title}
	</h1>
	<p class="mt-6 text-lg tracking-[0.3em] text-gray-700 sm:text-xl sm:tracking-[0.4em] md:text-2xl">
		{data.metadata.description}
	</p>
</div>

<label for="content">THIS IS THE BLOG CONTENT</label>
<div class="border-4 border-amber-200" id="content">
	<data.content />
</div>
