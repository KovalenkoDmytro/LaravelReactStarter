import React, {Fragment, ReactNode} from "react";
import Header from "@/Components/Header.tsx";
import {Head} from "@inertiajs/react";


type propsType = {
    children: ReactNode,
    pageTitle: string,
}

export default function Authenticated({pageTitle, children } : propsType) {


    return (
        <main className="">
            <Header />

            {pageTitle && (
                <Fragment>
                    <Head title={pageTitle} />
                    <h2 className="pageTitle">{pageTitle}</h2>
                </Fragment>
            )}

            <main>{children}</main>
        </main>
    );
}
