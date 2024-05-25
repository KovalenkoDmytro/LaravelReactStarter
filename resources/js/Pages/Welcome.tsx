import {Head, Link} from '@inertiajs/react';
import * as React from 'react';
import {Fragment} from "react";

export default function Welcome() {

    return (
        <Fragment>
            <Head title="Welcome" />
            <h1>Welcome Page</h1>

            <nav className={'navigation'}>
                <Link href="/posts">Posts</Link>
            </nav>
        </Fragment>
    );
}
