'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
	return (
		<div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
			<h1 className="font-display text-6xl font-light uppercase tracking-wider">Error</h1>
			<p className="font-body mt-4 text-lg">Something went wrong.</p>
			<button
				onClick={reset}
				className="mt-8 border border-black px-6 py-2 font-body text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
			>
				Try Again
			</button>
		</div>
	)
}
