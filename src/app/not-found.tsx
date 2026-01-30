import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
			<h1 className="font-display text-6xl font-light uppercase tracking-wider">404</h1>
			<p className="font-body mt-4 text-lg">Page not found.</p>
			<Link
				href="/"
				className="mt-8 border border-black px-6 py-2 font-body text-sm uppercase tracking-wider transition-colors hover:bg-black hover:text-white"
			>
				Return Home
			</Link>
		</div>
	)
}
