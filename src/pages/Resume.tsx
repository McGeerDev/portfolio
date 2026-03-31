import { PageTitle } from '@/components/page-title'

interface Role {
	title: string
	start: string
	end: string
	location: string
	description?: string
}

interface Experience {
	company: string
	url: string
	roles: Role[]
}

interface Education {
	school: string
	field: string
	start: string
	end: string
}

const experience: Experience[] = [
	{
		company: 'DIDx',
		url: 'https://www.didx.co.za',
		roles: [
			{
				title: 'Site Reliability Engineer',
				start: 'Dec 2025',
				end: 'Present',
				location: 'Remote, South Africa',
				description:
					'Own infrastructure reliability for a global DID number marketplace. Build observability with Datadog, manage Kubernetes clusters, and automate deployment pipelines to reduce incident response time.',
			},
		],
	},
	{
		company: 'Mesh.trade',
		url: 'https://mesh.trade',
		roles: [
			{
				title: 'Site Reliability Engineer',
				start: 'Apr 2025',
				end: 'Dec 2025',
				location: 'Gauteng, South Africa',
				description:
					'Introduced SRE practices into the development lifecycle. Built CI/CD pipelines, implemented monitoring and alerting with Datadog, and reduced deploy times by automating toil across the platform.',
			},
			{
				title: 'Software Engineer',
				start: 'Apr 2024',
				end: 'Apr 2025',
				location: 'Gauteng, South Africa',
				description:
					'Developed backend services in Go for a regulated digital asset exchange. Worked with gRPC, NATS messaging, and MongoDB. Shipped features for trade execution and settlement workflows.',
			},
		],
	},
	{
		company: 'Rezco',
		url: 'https://www.rezco.co.za',
		roles: [
			{
				title: 'Systems Developer',
				start: 'Dec 2022',
				end: 'Apr 2024',
				location: 'Western Cape, South Africa',
				description:
					'Built and maintained internal tools for an asset management firm. Automated reporting workflows, integrated third-party data feeds, and maintained legacy systems while migrating to modern stacks.',
			},
		],
	},
	{
		company: 'zenAptix',
		url: 'https://www.zenaptix.com',
		roles: [
			{
				title: 'Software Developer',
				start: 'Aug 2021',
				end: 'Nov 2022',
				location: 'Western Cape, South Africa',
				description:
					'Full-stack development on energy management software. Built frontend interfaces with Svelte and backend APIs. Contributed to data pipeline work for utility meter analytics.',
			},
		],
	},
	{
		company: 'Ninety10 Software Solutions',
		url: 'https://www.ninety10.co.za',
		roles: [
			{
				title: 'Junior Web Developer',
				start: 'Dec 2020',
				end: 'Aug 2021',
				location: 'Gauteng, South Africa',
				description:
					'First professional role. Built web applications for clients using React and Node.js. Learned production workflows: code review, version control, and deployment processes.',
			},
		],
	},
]

const education: Education[] = [
	{
		school: 'Stellenbosch University',
		field: 'Electrical and Electronics Engineering',
		start: '2014',
		end: '2017',
	},
]

const certifications = [
	'AWS Cloud Practitioner',
	'GitOps Foundations',
	'Treating Go as an Object-Oriented Language',
]

export function Resume() {
	return (
		<>
			<PageTitle title="Resume" />

			<section className="pb-14 sm:pb-20">
				<h2 className="mb-10 text-xl font-bold tracking-widest">EXPERIENCE</h2>

				<div>
					{experience.map((exp, i) => (
						<div
							key={exp.company}
							className={i > 0 ? 'border-t border-border pt-8 mt-8' : ''}
						>
							{exp.roles.map((role, j) => (
								<div
									key={`${role.title}-${role.start}`}
									className={`grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6${j > 0 ? ' mt-8' : ''}`}
								>
									<p className="text-sm tracking-wide text-muted-foreground sm:pt-0.5">
										{role.start} – {role.end}
									</p>

									<div>
										{j === 0 ? (
											<a
												href={exp.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-lg font-bold tracking-wider underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
											>
												{exp.company}
											</a>
										) : null}
										<p className={j === 0 ? 'mt-1 font-bold' : 'font-bold'}>
											{role.title}
										</p>
										<p className="mt-0.5 text-sm tracking-wide text-muted-foreground">
											{role.location}
										</p>
										{role.description && (
											<p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
												{role.description}
											</p>
										)}
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</section>

			<hr className="border-border" />

			<section className="pt-10 pb-14 sm:pt-14 sm:pb-20">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr]">
					<div>
						<h2 className="mb-6 text-xl font-bold tracking-widest">EDUCATION</h2>
						{education.map((edu) => (
							<div key={edu.school}>
								<p className="font-bold">{edu.school}</p>
								<p className="mt-1 text-base text-muted-foreground">{edu.field}</p>
								<p className="mt-1 text-sm tracking-wide text-muted-foreground">
									{edu.start} – {edu.end}
								</p>
							</div>
						))}
					</div>

					<div>
						<h2 className="mb-6 text-xl font-bold tracking-widest">CERTIFICATIONS</h2>
						<ul className="space-y-2">
							{certifications.map((cert) => (
								<li key={cert} className="text-base text-muted-foreground">
									{cert}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
