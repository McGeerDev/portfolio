import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

const navLinks = [
	{ to: '/', label: 'HOME' },
	{ to: '/blogs', label: 'BLOG' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/resume', label: 'RESUME' },
]

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className="flex flex-col py-6">
			<nav className="flex w-full items-center justify-between">
				<div className="hidden text-2xl font-bold tracking-wider md:flex">
					<Link to="/">DM</Link>
				</div>

				<div className="hidden gap-4 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="tracking-widest hover:text-muted-foreground"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden space-x-4 md:flex">
					<a
						href="https://github.com/McGeerDev"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<Github size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/devan-mcgeer/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<Linkedin size={24} />
					</a>
					<a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
						<Mail size={24} />
					</a>
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
				<div className="flex flex-col border-t border-foreground pt-4 md:hidden">
					<nav className="flex flex-col gap-3">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								onClick={() => setMenuOpen(false)}
								className="text-sm uppercase tracking-widest hover:text-muted-foreground"
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
