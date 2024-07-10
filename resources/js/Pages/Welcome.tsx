import { Head, Link } from "@inertiajs/react";
import React from "react";


export default function Welcome() {

    return (
        <main>
            <Head title="Welcome" />
            <h1>Welcome Page</h1>

            <nav className={"navigation"}>
                <Link href="/posts">Posts</Link>
                <Link href="/photos">Photos</Link>
            </nav>
        </main>
    );
}
