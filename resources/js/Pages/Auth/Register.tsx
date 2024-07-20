import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout.tsx";
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";

export default function Register() {
    const { data, setData, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const props = usePage().props

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();


        router.post('/register', {
            _token: props.csrf_token,
            ...data
        })

    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <p>{errors.name}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <p>{errors.email}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="password" >Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <p>{errors.password}</p>
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation">Confirm Password </label>

                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    <p>{errors.password_confirmation}</p>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={"login"}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <button disabled={processing}>
                        Register
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
