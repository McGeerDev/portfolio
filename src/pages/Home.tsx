import { Hero } from '@/components/hero'
import { Pill } from '@/components/pill'

const skills = [
	'gRPC',
	'Docker',
	'Terraform',
	'Golang',
	'GCP',
	'Pub/Sub',
	'MongoDB',
	'React',
	'Svelte',
	'Bash',
]

export function Home() {
	return (
		<>
			<Hero title="Devan McGeer" subtitle="Site Reliability Engineer" />

			<hr className="border-foreground" />

			<div className="pt-20 pb-14 sm:pt-28 sm:pb-20">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
					<div>
						<h2 className="mb-4 text-xl font-bold tracking-widest">ABOUT ME</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							I believe people come first, and with Developers being my customers, I have
							improved their lives in every way I can; by building observability into their
							environments, speeding up CICD pipelines and automating away toil like package
							updates. My position as SRE has been as fulfilling as it has been challenging.
							Sometimes the way to improve someone&apos;s life is simply to merge a pull
							request for them or to make them coffee when they don&apos;t ask.
							<br />
							Be good, be kind.
						</p>
					</div>
					<div>
						<h2 className="mb-4 text-xl font-bold tracking-widest">TECH I KNOW</h2>
						<div className="flex flex-wrap gap-3">
							{skills.map((skill) => (
								<Pill key={skill} text={skill} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
