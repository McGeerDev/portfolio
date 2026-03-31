export function PageTitle({ title }: { title: string }) {
	return (
		<div className="pt-10 pb-6 sm:pt-14 sm:pb-8">
			<h1 className="font-display text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-light tracking-widest">
				{title.toUpperCase()}
			</h1>
		</div>
	)
}
