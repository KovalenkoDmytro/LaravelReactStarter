import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import ParametersCreator from "@/Components/ParametersCreator.tsx";
import {toCreate} from "@/utils/helpers.ts";


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
    const [errors, setErrors] = useState({});


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



    //todo images , file loader

    return (
        <Authenticated pageTitle={"Create Real Estate"}>
            <TextField
                id="name"
                label="Name"
                value={data.name}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("name", event.target.value);
                }}
                error={!!errors['name']}
                helperText={errors['name']?? false}
            />

            <TextField
                id="city"
                label="city"
                value={data.address.city}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("city", event.target.value, true);
                }}
                error={!!errors['address.city']}
                helperText={errors['address.city']?? false}
            />

            <TextField
                id="postalCode"
                label="postalCode"
                value={data.address.postalCode}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("postalCode", event.target.value, true);
                }}
                error={!!errors['address.postalCode']}
                helperText={errors['address.postalCode']?? false}
            />

            <TextField
                id="street"
                label="street"
                value={data.address.street}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("street", event.target.value, true);
                }}
                error={!!errors['address.street']}
                helperText={errors['address.street']?? false}
            />

            <TextField
                id="building"
                label="building"
                value={data.address.building}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setState("building", event.target.value, true);
                }}
                error={!!errors['address.building']}
                helperText={errors['address.building']?? false}
            />



            <Editor
                apiKey="y8o12no2fgwj8bpkyxo3w74xk3pard61wd1k4ck3l7te2zs0"
                init={{
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue="Welcome to TinyMCE!"
                onEditorChange={(value: string) => {
                    setState("longDescription", value);
                }}
            />

            <Editor
                apiKey="y8o12no2fgwj8bpkyxo3w74xk3pard61wd1k4ck3l7te2zs0"
                init={{
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue="Short description"
                onEditorChange={(value: string) => {
                    setState("shortDescription", value);
                }}
            />

            <ParametersCreator
                onChange={(value: []) => {
                    setState("parameters", value);
                }}
            />

            <button onClick={()=>{

                    toCreate('real-estate', data ).then(errors=>{
                       if(errors !== undefined){
                           setErrors(() => ({ ...errors }))
                       }
                    })


            }}>Create</button>
        </Authenticated>
    );
}
