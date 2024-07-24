import React, {useEffect, useState} from "react";
import GuestLayout from "@/Layouts/GuestLayout.tsx";
import { Head, Link, useForm } from "@inertiajs/react";
import axios from "axios";
import {routing, toShowNotification} from "@/utils/helpers.ts";
import {TextField} from "@mui/material";

export default function Login({canResetPassword,}: { canResetPassword: boolean; }) {

    const [data, setData] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const [errors, setErrors] = useState({});



    const toLogIn = () => {

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

            <TextField
                id="email"
                label="email"
                value={data.email}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({ ...prevState, email: event.target.value }));
                }}
                error={!!errors['email']}
                helperText={errors['email']?? false}
            />

            <TextField
                id="password"
                label="password"
                value={data.password}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({ ...prevState, password: event.target.value }));
                }}
                error={!!errors['password']}
                helperText={errors['password']?? false}
            />




            <label className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setData((prevState) => ({ ...prevState, remember: event.target.checked }));
                            }}
                        />

                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>


                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={"forgot-password"}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button onClick={toLogIn}>Log in</button>
                </div>


            <Link href={routing.setRoute("register")}>Register</Link>
        </GuestLayout>
    );
}
