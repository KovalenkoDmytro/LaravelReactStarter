import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import React, { useState } from "react";
import { TextField } from "@mui/material";

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


        </Authenticated>
    );
}
