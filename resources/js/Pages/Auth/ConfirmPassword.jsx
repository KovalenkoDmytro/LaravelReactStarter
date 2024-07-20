import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout.js";
import { Head, useForm } from "@inertiajs/react";
import {routing} from "@/utils/helpers.js";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(routing.setRoute("password.confirm"));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <p>errors.password</p>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button disabled={processing}>
                        Confirm
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
