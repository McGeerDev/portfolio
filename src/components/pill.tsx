export function Pill({ text }: { text: string }) {
	return (
		<span className="border border-foreground px-4 py-1 text-sm tracking-wider shadow-md">
			{text}
		</span>
	)
}
