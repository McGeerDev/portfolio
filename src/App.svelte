<script lang="ts">
	// An array of your projects
	const projects = [
		{
			name: 'Socratic Reasoning App',
			description:
				'An application designed to facilitate critical thinking and deeper understanding through guided questioning, built with Next.js, the Gemini API, and deployed on Vercel.',
			url: 'https://socraitic.vercel.app/',
			tech: ['Next.js', 'Gemini API', 'Vercel', 'Tailwind CSS']
		}
		// Add more projects here if you have them
	];

	// Your social media and professional links
	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com/McGeerDev' },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/devan-mcgeer/' }
	];
</script>

<div class="min-h-screen bg-gray-50 font-sans text-gray-800">
	<header class="sticky top-0 z-10 bg-white shadow-sm">
		<div class="container mx-auto flex items-center justify-between px-6 py-4">
			<h1 class="text-2xl font-bold text-gray-900">Devan McGeer</h1>
			<nav class="hidden space-x-8 md:flex">
				<a href="#about" class="text-gray-600 transition duration-300 hover:text-indigo-600"
					>About</a
				>
				<a href="#projects" class="text-gray-600 transition duration-300 hover:text-indigo-600"
					>Projects</a
				>
				<a href="#contact" class="text-gray-600 transition duration-300 hover:text-indigo-600"
					>Contact</a
				>
			</nav>
		</div>
	</header>

	<main class="container mx-auto px-6 py-12 md:py-20">
		<section id="hero" class="mb-20 text-center">
			<h2 class="mb-4 text-4xl leading-tight font-extrabold text-gray-900 md:text-6xl">
				Site Reliability Engineer
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
				Building and maintaining scalable, reliable, and efficient systems. Passionate about
				automation, observability, and creating resilient infrastructure.
			</p>
		</section>

		<section id="about" class="mb-20 scroll-mt-20">
			<div class="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
				<h3 class="mb-4 text-3xl font-bold text-gray-900">About Me</h3>
				<p class="leading-relaxed text-gray-700">
					I am a Site Reliability Engineer (SRE) with a strong background in software engineering
					and systems administration. My expertise lies in automating infrastructure, monitoring
					system performance, and ensuring high availability for critical services. I thrive on
					solving complex problems and am always looking for opportunities to improve system
					reliability and efficiency.
				</p>
			</div>
		</section>

		<section id="projects" class="mb-20 scroll-mt-20">
			<h3 class="mb-8 text-center text-3xl font-bold text-gray-900">My Projects</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-1">
				{#each projects as project}
					<div
						class="transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
					>
						<div class="p-8">
							<h4 class="mb-2 text-2xl font-bold text-gray-900">{project.name}</h4>
							<p class="mb-4 text-gray-700">{project.description}</p>
							<div class="mb-4 flex flex-wrap gap-2">
								{#each project.tech as techItem}
									<span
										class="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
										>{techItem}</span
									>
								{/each}
							</div>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block font-semibold text-indigo-600 transition duration-300 hover:text-indigo-800"
							>
								View Project &rarr;
							</a>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="scroll-mt-20 text-center">
			<div class="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
				<h3 class="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h3>
				<p class="mx-auto mb-6 max-w-xl text-gray-700">
					I'm always open to discussing new opportunities or interesting projects. Feel free to
					connect with me.
				</p>
				<div class="flex justify-center space-x-6">
					{#each socialLinks as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-600 transition duration-300 hover:text-indigo-600"
						>
							<span class="sr-only">{link.name}</span>
							<!-- Basic SVG icons for simplicity -->
							{#if link.name === 'GitHub'}
								<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
										clip-rule="evenodd"
									/></svg
								>
							{:else if link.name === 'LinkedIn'}
								<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/></svg
								>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-200 bg-white">
		<div class="container mx-auto px-6 py-4 text-center text-gray-600">
			<p>&copy; {new Date().getFullYear()} Devan McGeer. All Rights Reserved.</p>
		</div>
	</footer>
</div>

<style>
	/* Smooth scrolling for anchor links */
	html {
		scroll-behavior: smooth;
	}
</style>
