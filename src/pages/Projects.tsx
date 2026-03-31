import { PageTitle } from '@/components/page-title'

export function Projects() {
	return (
		<>
			<PageTitle title="Projects" />
			<p className="tracking-widest text-muted-foreground">
				Open-source projects are in the works. In the meantime, check out my{' '}
				<a
					href="https://github.com/McGeerDev"
					target="_blank"
					rel="noopener noreferrer"
					className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
				>
					GitHub
				</a>
				.
			</p>
		</>
	)
}
