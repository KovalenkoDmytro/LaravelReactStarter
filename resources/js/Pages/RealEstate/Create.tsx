import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Editor } from '@tinymce/tinymce-react';

export default function Create() {
    const [data, setData] = useState({
        name: "",
        address: {
            city: "",
            postalCode: "",
            street: "",
            building: "",
        },
        shortDescription: "",
        longDescription: "",
        parameters: [],
        media: [],
    });

    const setState = (
        name: string,
        value: string | [],
        addressValue = false,
    ) => {
        if (addressValue) {
            setData((prevState) => ({
                ...prevState,
                address: { ...prevState.address, [name]: value },
            }));
        } else {
            setData((prevState) => ({ ...prevState, [name]: value }));
        }
    };


    //todo short description ,textarea
    //todo long description , TinyMCE
    //todo parameters , dynamic inputs
    //todo images , file loader


    return (
        <Authenticated pageTitle={"Create Real Estate"}>
            <TextField
                id="name"
                label="Name"
                value={data.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("name", event.target.value);
                }}
            />

            <TextField
                id="city"
                label="city"
                value={data.address.city}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("city", event.target.value, true);
                }}
            />

            <TextField
                id="postalCode"
                label="postalCode"
                value={data.address.postalCode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("postalCode", event.target.value, true);
                }}
            />

            <TextField
                id="street"
                label="street"
                value={data.address.street}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("street", event.target.value, true);
                }}
            />

            <TextField
                id="building"
                label="building"
                value={data.address.building}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("building", event.target.value, true);
                }}
            />

            <Editor
                apiKey='y8o12no2fgwj8bpkyxo3w74xk3pard61wd1k4ck3l7te2zs0'
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                }}
                initialValue="Welcome to TinyMCE!"
            />
        </Authenticated>
    );
}
