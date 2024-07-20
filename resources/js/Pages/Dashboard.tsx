import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.tsx";
import React, {useEffect} from "react";
import {toShowNotification} from "@/utils/helpers.ts";

export default function Dashboard({ flash} : {flash : {type: string, message: string} | undefined}) {

    useEffect(() => {
        if(flash !== undefined){
            toShowNotification(flash)
        }

    }, [flash]);

    return (
        <AuthenticatedLayout pageTitle={'Dashboard'}>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You&apos;re logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
