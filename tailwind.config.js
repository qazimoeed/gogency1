/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false, // Disable Preflight
	},
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
}
