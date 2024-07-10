import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
    return {
        plugins: [
            laravel({
                input: ["resources/js/app.tsx", "resources/style/app.scss"],
                refresh: true,
            }),
            react(),
            tsconfigPaths(),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./resources/js"),
                "@type": path.resolve(__dirname, "./resources/ts"),
            },
        },
    };
});
