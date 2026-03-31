import { Component, type ReactNode } from 'react'

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(): State {
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
					<h1 className="font-display text-6xl font-light uppercase tracking-wider">
						Error
					</h1>
					<p className="font-body mt-4 text-lg">Something went wrong.</p>
					<button
						onClick={() => this.setState({ hasError: false })}
						className="mt-8 border border-foreground px-6 py-2 font-body text-sm uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
					>
						Try Again
					</button>
				</div>
			)
		}

		return this.props.children
	}
}
