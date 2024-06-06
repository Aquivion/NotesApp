/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				customBackground: 'rgb(17 24 39)',
			},
		},
	},
	plugins: [],
}
