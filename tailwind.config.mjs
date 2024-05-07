/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: theme => ({
				'hero-pattern' : "url(/public/fondo barberia.jpg)",
			})
		},

		gridTemplateColumns: {
			'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
			'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
		  },
	},
	plugins: [],
}
