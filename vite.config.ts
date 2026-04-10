import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const cspPolicies = {
	production: [
		"default-src 'self'",
		"script-src 'self'",
		"style-src 'self' https://fonts.googleapis.com",
		"font-src 'self' https://fonts.gstatic.com",
		"img-src 'self' data: https://mcgeer.dev",
		"connect-src 'self'",
		"frame-src 'none'",
		"object-src 'none'",
		"base-uri 'self'",
		"form-action 'self'",
	],
	development: [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline'",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
		"font-src 'self' https://fonts.gstatic.com",
		"img-src 'self' data: https://mcgeer.dev",
		"connect-src 'self' ws: wss:",
		"frame-src 'none'",
		"object-src 'none'",
		"base-uri 'self'",
		"form-action 'self'",
	],
}

function cspPlugin(): Plugin {
	return {
		name: 'csp-policy',
		transformIndexHtml: {
			order: 'pre',
			handler(_html, ctx) {
				const env = ctx.server ? 'development' : 'production'
				return _html.replace('%VITE_CSP%', cspPolicies[env].join('; '))
			},
		},
	}
}

export default defineConfig({
	plugins: [react(), cspPlugin()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
		modulePreload: { polyfill: false },
	},
})
