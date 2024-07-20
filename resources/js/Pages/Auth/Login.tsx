import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout.tsx";
import { Head, Link, useForm } from "@inertiajs/react";
import axios from "axios";
import {routing, toShowNotification} from "@/utils/helpers.ts";

export default function Login({canResetPassword,}: { canResetPassword: boolean; }) {

    const { data, setData, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        axios
            .post("login", data)
            .then(function (response) {
                if (response.status === 200) {
                    window.location.href = `${window.location.origin}/login`;
                }
            })
            .catch(function (error) {
                toShowNotification({
                    type: "error",
                    message: error.response.data.message,
                });
            });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <p>{errors.email}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="password">Password </label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <p>{errors.password}</p>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setData("remember", e.target.checked)}
                        />

                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={"forgot-password"}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button disabled={processing}>Log in</button>
                </div>
            </form>

            <Link href={routing.setRoute("register")}>Register</Link>
        </GuestLayout>
    );
}
