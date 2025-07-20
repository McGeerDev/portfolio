<script lang="ts">
	import Hero from '$lib/components/hero.svelte'
	import Pill from '$lib/components/pill.svelte'

	const skills = [
		'gRPC',
		'Docker',
		'Terraform',
		'Golang',
		'GCP',
		'Pub/Sub',
		'MongoDB',
		'React',
		'Next.js',
		'Svelte',
		'Bash'
	]
</script>

<Hero title="Devan McGeer" subtitle="Site Reliability Engineer" />

<hr class="border-black" />

<div class="py-16 sm:py-24">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div>
			<!-- tracking-widest has to do with letter-spacing -->
			<h2 class="mb-4 text-xl font-bold tracking-widest">ABOUT ME</h2>
			<p class="text-base leading-relaxed text-gray-800">
				I believe people come first, and with Developers being my customers, I have improved their
				lives in every way I can; by building observability into their environments, speeding up
				CICD pipelines and automating away toil like package updates. My position as SRE has been as
				fulfilling as it has been challenging. Sometimes the way to improve someone's life is simply
				to merge a pull request for them or to make them coffee when they don't ask. <br /> Be good,
				be kind.
			</p>
		</div>
		<div>
			<h2 class="mb-4 text-xl font-bold tracking-widest">TECH I KNOW</h2>
			<div class="flex flex-wrap gap-3">
				<!-- eslint-disable -->
				{#each skills as skill}
					<Pill text={skill} />
				{/each}
			</div>
		</div>
	</div>
</div>
