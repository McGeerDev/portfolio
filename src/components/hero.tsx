export function Hero({
	title = 'Devan McGeer',
	subtitle = 'Site Reliability Engineer',
}: {
	title?: string
	subtitle?: string
}) {
	return (
		<div className="pt-10 pb-10 sm:pt-16 sm:pb-14">
			<h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-tight font-light uppercase tracking-widest">
				{title}
			</h1>
			<p className="mt-4 text-[clamp(1rem,2vw+0.25rem,1.5rem)] uppercase tracking-[0.3em] text-muted-foreground">
				{subtitle}
			</p>
		</div>
	)
}
