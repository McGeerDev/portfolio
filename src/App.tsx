import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Home } from '@/pages/Home'
import { BlogList } from '@/pages/BlogList'
import { BlogPost } from '@/pages/BlogPost'
import { Projects } from '@/pages/Projects'
import { Resume } from '@/pages/Resume'
import { NotFound } from '@/pages/NotFound'

export function App() {
	return (
		<div className="font-body flex min-h-screen flex-col bg-background text-foreground antialiased">
			<div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
				<Header />
				<hr className="border-foreground" />
				<main className="flex-1">
					<ErrorBoundary>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/blog" element={<BlogList />} />
							<Route path="/blog/:slug" element={<BlogPost />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/resume" element={<Resume />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</ErrorBoundary>
				</main>
				<Footer />
			</div>
		</div>
	)
}
