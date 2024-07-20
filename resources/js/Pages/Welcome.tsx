import { Link } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.tsx";




export default function Welcome() {
    return (
        <AuthenticatedLayout pageTitle="Welcome">

            <nav className={"navigation"}>
                <Link href="/posts">Posts</Link>
                <Link href="/photos">Photos</Link>
            </nav>
        </AuthenticatedLayout>
    );
}
