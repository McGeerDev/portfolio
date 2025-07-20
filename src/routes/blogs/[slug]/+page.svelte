<script lang="ts">
	import Hero from '$lib/components/hero.svelte'
	import type { PageProps } from './$types'
	let { data }: PageProps = $props()
</script>

<Hero title={data.metadata.title} subtitle={data.metadata.description} />

<label for="content">THIS IS THE BLOG CONTENT</label>
<div class="border-4 border-amber-200" id="content">
	<data.content />
</div>
