import { PageTitle } from '@/components/page-title'
import { Pill } from '@/components/pill'

interface Project {
	title: string
	description: string
	tech: string[]
	status: 'live' | 'upcoming'
	url?: string
}

const projects: Project[] = [
	{
		title: 'k8s-homelab',
		description:
			'Documented home Kubernetes cluster with Terraform provisioning, ArgoCD GitOps deployment, and a Grafana/Prometheus observability stack.',
		tech: ['Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
		status: 'upcoming',
	},
	{
		title: 'slo-dashboard',
		description:
			'Go CLI that reads SLO definitions from YAML, queries metrics backends for SLI data, and calculates error budget burn rate.',
		tech: ['Go', 'Datadog', 'Prometheus', 'YAML'],
		status: 'upcoming',
	},
	{
		title: 'terraform-module-library',
		description:
			'Reusable, opinionated Terraform modules for AWS infrastructure — VPC, EKS, RDS, IAM — with input validation and documentation.',
		tech: ['Terraform', 'AWS', 'HCL'],
		status: 'upcoming',
	},
	{
		title: 'incident-bot',
		description:
			'Slack bot in Go for incident management: open incidents, assign roles, track timelines, and generate post-mortem templates.',
		tech: ['Go', 'Slack API', 'PostgreSQL'],
		status: 'upcoming',
	},
	{
		title: 'otel-demo',
		description:
			'Microservices demo with 3 Go services communicating via gRPC, fully instrumented with OpenTelemetry traces, metrics, and logs.',
		tech: ['Go', 'OpenTelemetry', 'gRPC', 'Docker Compose', 'Grafana'],
		status: 'upcoming',
	},
]

export function Projects() {
	return (
		<>
			<PageTitle title="Projects" />

			<div className="mb-12 space-y-0">
				{projects.map((project, i) => (
					<div
						key={project.title}
						className={i > 0 ? 'border-t border-border pt-8 mt-8' : ''}
					>
						<div className="flex items-baseline gap-3">
							{project.url ? (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-lg font-bold tracking-wider underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
								>
									{project.title}
								</a>
							) : (
								<span className="text-lg font-bold tracking-wider">
									{project.title}
								</span>
							)}
							{project.status === 'upcoming' && (
								<span className="text-xs uppercase tracking-widest text-muted-foreground">
									upcoming
								</span>
							)}
						</div>
						<p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
							{project.description}
						</p>
						<div className="mt-3 flex flex-wrap gap-2">
							{project.tech.map((t) => (
								<Pill key={t} text={t} />
							))}
						</div>
					</div>
				))}
			</div>

			<p className="text-sm tracking-wider text-muted-foreground">
				More on{' '}
				<a
					href="https://github.com/McGeerDev"
					target="_blank"
					rel="noopener noreferrer"
					className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
				>
					GitHub
				</a>
			</p>
		</>
	)
}
