import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
		rollupOptions: {
			external: ["react-intersection-observer"],
			input: '/src/main.jsx',
		},
	},
	optimizeDeps: {
	    include: ['react-intersection-observer'],
	},
})
 
