import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, {Fragment} from "react";
const queryClient = new QueryClient()

export default function Application({children}: React.PropsWithChildren) {
    return(
        <Fragment>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Fragment>
    )
}
