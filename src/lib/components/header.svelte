<script lang="ts">
	import Icon from '@iconify/svelte'
</script>

<header class="flex items-center justify-between py-6">
	<div class="text-2xl font-bold tracking-wider">
		<a href="/">DM</a>
	</div>

	<nav class="hidden items-center space-x-8 md:flex">
		<a href="/" class="tracking-widest hover:text-gray-600">HOME</a>
		<a href="/blogs" class="tracking-widest hover:text-gray-600">BLOG</a>

		<div class="flex items-center space-x-4">
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
