import "../scss/app.scss";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
const queryClient = new QueryClient();

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <QueryClientProvider client={queryClient}>
                <StrictMode>
                    <App {...props} />
                </StrictMode>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>,
        );
    },
    progress: {
        color: "#97ff62",
    },
}).then(() => {});
