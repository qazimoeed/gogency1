/** @type {import('tailwindcss').Config} */
import shimmerBtnAnimation from "./src/components/magicui/shimmerBtnAnimation"

module.exports = {
	...shimmerBtnAnimation,
	corePlugins: {
		preflight: false, // Disable Preflight
	},
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	},
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			fontSize: {
				xs: "12px",
				base: "16px",
			},
			lineHeight: {
				3: "12px",
				5: "20px",
			},
			boxShadow: {
				custom: "0px 4px 4px 0px #00000040",
			},
			colors: {
				"custom-gray": "#8d8d8d",
			},
			animation: {
				backgroundPositionSpin:
					"background-position-spin 3000ms infinite alternate",
			},
			keyframes: {
				"background-position-spin": {
					"0%": { backgroundPosition: "top center" },
					"100%": { backgroundPosition: "bottom center" },
				},
			},
		},
	},
	plugins: [],
}
