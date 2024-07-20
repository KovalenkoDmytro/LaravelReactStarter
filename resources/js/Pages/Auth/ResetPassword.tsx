import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout.tsx";
import { Head, useForm } from "@inertiajs/react";
import axios from "axios";
import { toShowNotification } from "@/utils/helpers.ts";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .post("/reset-password", data)
            .then((response) => {
                toShowNotification(response.data, {
                    didDestroy: function () {
                        window.location.replace(
                            `${window.location.origin}/login`,
                        );
                    },
                });
            })
            .catch(function (error) {
                toShowNotification({ type: "error", message: error.message });
            });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email  </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <p>{errors.email}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <p>{errors.password}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation" >Confirm Password </label>

                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    <p>{errors.password_confirmation}</p>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button  disabled={processing}>
                        Reset Password
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
