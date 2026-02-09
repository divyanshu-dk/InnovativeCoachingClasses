/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#1F2A44',
				foreground: '#F5F5F5',
				primary: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
					DEFAULT: '#E65A2E',
					foreground: '#ffffff',
				},
				secondary: {
					50: '#f0f2f5',
					100: '#e1e5e9',
					200: '#c3cbd3',
					300: '#a5b1bd',
					400: '#8797a7',
					500: '#697d91',
					600: '#4b637b',
					700: '#2d4965',
					800: '#1f2a44',
					900: '#111827',
					DEFAULT: '#1F2A44',
					foreground: '#F5F5F5',
				},
				accent: {
					50: '#f9f9f9',
					100: '#f3f3f3',
					200: '#e7e7e7',
					300: '#dbdbdb',
					400: '#cfcfcf',
					500: '#c3c3c3',
					600: '#b7b7b7',
					700: '#ababab',
					800: '#9f9f9f',
					900: '#939393',
					DEFAULT: '#D9D9D9',
					foreground: '#1F2A44',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-slow': 'bounce 2s infinite',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'spin-slow': 'spin 4s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};