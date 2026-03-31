import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
	{ to: '/', label: 'HOME' },
	{ to: '/blog', label: 'BLOG' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/resume', label: 'RESUME' },
]

function isActive(pathname: string, to: string): boolean {
	if (to === '/') return pathname === '/'
	return pathname.startsWith(to)
}

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const { pathname } = useLocation()

	return (
		<header className="flex flex-col py-6">
			<nav className="flex w-full items-center justify-between">
				<div className="hidden text-2xl font-bold tracking-wider md:flex">
					<Link to="/">DM</Link>
				</div>

				<div className="hidden gap-6 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`tracking-widest transition-colors hover:text-muted-foreground ${
								isActive(pathname, link.to)
									? 'underline decoration-foreground underline-offset-4'
									: ''
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Mobile */}
				<div className="flex w-full items-center justify-between md:hidden">
					<Link to="/" className="text-2xl font-bold tracking-wider">
						DM
					</Link>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{menuOpen && (
				<div className="flex flex-col border-t border-border pt-4 md:hidden">
					<nav className="flex flex-col">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								onClick={() => setMenuOpen(false)}
								className={`py-3 text-base uppercase tracking-widest hover:text-muted-foreground ${
									isActive(pathname, link.to) ? 'font-bold' : ''
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	)
}
