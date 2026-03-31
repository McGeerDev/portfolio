import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
	return (
		<footer className="flex items-center justify-between border-t border-border py-6">
			<p className="text-sm tracking-[0.2em] text-muted-foreground">
				DEVAN MCGEER
			</p>
			<div className="flex space-x-2">
				<a
					href="https://github.com/McGeerDev"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					className="p-2 text-muted-foreground transition-colors hover:text-foreground"
				>
					<Github size={20} />
				</a>
				<a
					href="https://www.linkedin.com/in/devan-mcgeer/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="p-2 text-muted-foreground transition-colors hover:text-foreground"
				>
					<Linkedin size={20} />
				</a>
				<a
					href="mailto:mcgeer.devan@gmail.com"
					aria-label="Email"
					className="p-2 text-muted-foreground transition-colors hover:text-foreground"
				>
					<Mail size={20} />
				</a>
			</div>
		</footer>
	)
}
