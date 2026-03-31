export function Pill({ text }: { text: string }) {
	return (
		<span className="border border-foreground px-4 py-1 text-sm tracking-wider transition-colors hover:bg-foreground hover:text-background">
			{text}
		</span>
	)
}
