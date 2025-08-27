<script lang="ts">
	import Icon from '@iconify/svelte'
	const name = 'Devan McGeer'.toUpperCase()
</script>

<footer class="flex flex-col items-center border-t py-6">
	<div class="flex flex-wrap justify-center space-x-4">
		<a
			href="https://github.com/McGeerDev"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
		>
			<Icon icon="lucide:github" width="24" height="24" />
		</a>
		<a
			href="https://www.linkedin.com/in/devan-mcgeer/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
		>
			<Icon icon="lucide:linkedin" width="24" height="24" />
		</a>
		<a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
			<Icon icon="lucide:mail" width="24" height="24" />
		</a>
	</div>
	<div>
		<p
			class="text-md mt-4 tracking-[0.3em] text-gray-700 sm:text-lg sm:tracking-[0.4em] md:text-xl"
		>
			{name}
		</p>
	</div>
</footer>

<style>
</style>
