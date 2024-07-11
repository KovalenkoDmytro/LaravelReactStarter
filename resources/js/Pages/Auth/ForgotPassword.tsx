import GuestLayout from "@/Layouts/GuestLayout.tsx";
import InputError from "@/Components/InputError.tsx";
import PrimaryButton from "@/Components/PrimaryButton.tsx";
import TextInput from "@/Components/TextInput.tsx";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import axios from "axios";
import { toShowNotification } from "@/utils/helpers.ts";

export default function ForgotPassword({ status }: { status: string }) {
    const { data, setData, processing, errors } = useForm({
        email: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        axios
            .post("/forgot-password", data)
            .then((response) => {
                toShowNotification(response.data);
            })

            .catch(function (error) {
                toShowNotification({ type: "error", message: error.message });
            });
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
