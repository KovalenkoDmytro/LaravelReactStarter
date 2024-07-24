import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout.tsx";
import { Head, Link} from "@inertiajs/react";
import { toCreate } from "@/utils/helpers.ts";
import { TextField } from "@mui/material";

export default function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});

    const toSendData = ()=>{
        const config = {

            onUploadProgress: () => {
                document.body.classList.add("__loading");
            },
        };

        toCreate("register", data, config)
            .then((errors) => {
                if (errors !== undefined) {
                    setErrors(() => ({ ...errors }));
                }
            })
            .finally(function () {
                document.body.classList.remove("__loading");
            });
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <TextField
                id="name"
                label="name"
                value={data.name}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({
                        ...prevState,
                        name: event.target.value,
                    }));
                }}
                error={!!errors["name"]}
                helperText={errors["name"] ?? false}
            />

            <TextField
                id="email"
                label="email"
                value={data.email}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({
                        ...prevState,
                        email: event.target.value,
                    }));
                }}
                error={!!errors["email"]}
                helperText={errors["email"] ?? false}
            />

            <TextField
                id="password"
                label="password"
                value={data.password}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({
                        ...prevState,
                        password: event.target.value,
                    }));
                }}
                error={!!errors["password"]}
                helperText={errors["password"] ?? false}
            />

            <TextField
                id="password_confirmation"
                label="password_confirmation"
                value={data.password_confirmation}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData((prevState) => ({
                        ...prevState,
                        password_confirmation: event.target.value,
                    }));
                }}
                error={!!errors["password_confirmation"]}
                helperText={errors["password_confirmation"] ?? false}
            />

            <div className="flex items-center justify-end mt-4">
                <Link
                    href={"login"}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <button onClick={toSendData}>
                    Register
                </button>
            </div>
        </GuestLayout>
    );
}
