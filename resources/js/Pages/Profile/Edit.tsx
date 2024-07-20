import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.js";
import DeleteUserForm from "./Partials/DeleteUserForm.tsx";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.tsx";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.tsx";
import { Head } from "@inertiajs/react";
import React from "react";

type propsType = {
    mustVerifyEmail : boolean,
    status: string
}

export default function Edit({mustVerifyEmail, status } : propsType) {
    return (
        <AuthenticatedLayout pageTitle={'Profile'}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
