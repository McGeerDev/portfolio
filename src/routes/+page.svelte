<script>
	import Hero from '$lib/components/hero.svelte'
</script>

<Hero title="Devan McGeer" subtitle="Site Reliability Engineer"/>

<hr class="border-black" />

<div class="py-16 sm:py-24">
	<div class="grid grid-cols-1 md:grid-cols-2">
    		<div>
			<!-- tracking-widest has to do with letter-spacing -->
			<h2 class="mb-4 text-xl font-bold tracking-widest">ABOUT ME</h2>
			<p class="text-base leading-relaxed text-gray-800">
				I am an SRE who loves optimisation and improvement
			</p>
		</div>
		<div >
			<h2 class="mb-4 text-xl font-bold tracking-widest ">TECH I KNOW</h2>
			<div class="flex flex-wrap gap-3">
				<span class="border border-black px-4 py-1 text-sm tracking-wider">gRPC</span>
				<span class="border border-black px-4 py-1 text-sm tracking-wider">Next.js</span>
				<span class="border border-black px-4 py-1 text-sm tracking-wider">Svelte</span>
			</div>
		</div>
	</div>
</div>
