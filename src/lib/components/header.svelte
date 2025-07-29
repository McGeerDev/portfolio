<script lang="ts">
	import Icon from '@iconify/svelte'
</script>

<header class="flex items-center py-6">
	<nav class="w-full items-center justify-between md:flex">
		<div class="hidden text-2xl font-bold tracking-wider md:flex">
			<a href="/">DM</a>
		</div>
		<div class="flex justify-center gap-4">
			<a href="/" class="tracking-widest hover:text-gray-600">HOME</a>
			<a href="/blogs" class="tracking-widest hover:text-gray-600">BLOG</a>
		</div>

		<div class="hidden space-x-4 md:flex">
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
	</nav>
</header>
