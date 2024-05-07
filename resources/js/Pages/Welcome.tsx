import { Link, Head } from '@inertiajs/react';
import * as React from 'react';
import {Fragment} from "react";
import Posts from "@/Pages/Posts/Posts.tsx";
import Application from "@/Pages/Application.tsx";

export default function Welcome() {

    return (
        <Application>
            <Head title="Welcome" />
            <h1>Welcome Page</h1>

            <Posts/>
        </Application>
    );
}
