import { Hero } from '@/components/hero'
import { Pill } from '@/components/pill'

const skillGroups = [
	{
		category: 'Infrastructure & Cloud',
		skills: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Docker'],
	},
	{
		category: 'Languages',
		skills: ['Go', 'Bash', 'TypeScript'],
	},
	{
		category: 'Observability',
		skills: ['Datadog', 'OpenTelemetry'],
	},
	{
		category: 'Messaging & Data',
		skills: ['NATS', 'Pub/Sub', 'MongoDB', 'PostgreSQL'],
	},
	{
		category: 'CI/CD & Tooling',
		skills: ['GitHub Actions', 'ArgoCD'],
	},
	{
		category: 'Frontend',
		skills: ['React', 'Svelte'],
	},
]

export function Home() {
	return (
		<>
			<Hero title="Devan McGeer" subtitle="Site Reliability Engineer" />

			<hr className="border-border" />

			<div className="pt-8 pb-14 sm:pt-12 sm:pb-20">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr]">
					<div>
						<h2 className="mb-4 text-xl font-bold tracking-widest">ABOUT</h2>
						<div className="mb-5">
							<img
								src="/assets/headshot.jpg"
								alt="Devan McGeer"
								width="144"
								height="144"
								className="h-36 w-36 rounded-sm object-cover"
								loading="lazy"
							/>
						</div>
						<p className="text-base leading-relaxed text-muted-foreground">
							Site Reliability Engineer with 5 years of experience across full-stack
							development and infrastructure engineering. Currently building
							observability and disaster recovery systems at DIDx. I work across Go,
							Kubernetes, Terraform, and AWS — focused on reducing toil through
							automation, improving system reliability through better instrumentation,
							and making deployment pipelines faster and safer.
						</p>
						<p className="mt-4 text-sm tracking-wider text-muted-foreground">
							Available for remote work globally
						</p>
					</div>
					<div>
						<h2 className="mb-6 text-xl font-bold tracking-widest">SKILLS</h2>
						<div className="space-y-5">
							{skillGroups.map((group) => (
								<div key={group.category}>
									<p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
										{group.category}
									</p>
									<div className="flex flex-wrap gap-2">
										{group.skills.map((skill) => (
											<Pill key={skill} text={skill} />
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
