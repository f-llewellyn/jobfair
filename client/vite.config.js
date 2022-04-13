import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VitePWA({
			includeAssets: ["*.{png,svg}"],
			manifest: {
				name: "Jobfair",
				short_name: "Jobfair",
				description:
					"An app that allows young people to find fair and worthwhile employment, without fear of exploitation.",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
		}),
		vue(),
	],
	server: {
		port: 5000,
	},
	proxy: {
		"/api": {
			target: "http://localhost:3000",
		},
	},
});
