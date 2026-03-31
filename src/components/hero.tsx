export function Hero({
	title = 'Devan McGeer',
	subtitle = 'Site Reliability Engineer',
}: {
	title?: string
	subtitle?: string
}) {
	return (
		<div className="pt-20 pb-12 sm:pt-32 sm:pb-16">
			<h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-tight font-light tracking-widest">
				{title.toUpperCase()}
			</h1>
			<p className="mt-4 text-[clamp(1rem,2vw+0.25rem,1.5rem)] tracking-[0.3em] text-muted-foreground">
				{subtitle.toUpperCase()}
			</p>
		</div>
	)
}
