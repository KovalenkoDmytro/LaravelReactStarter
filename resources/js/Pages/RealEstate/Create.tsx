import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import {useState} from "react";
import Input from "@/Components/Input.tsx";

export default function Create(){

    const [data, setData] = useState({
        name: "",
        address : {
            city: "",
            postalCode: "",
            street : "",
            building: ""
        },
        shortDescription: "",
        longDescription: "",
        parameters : [],
        media : []
    })

    const setState = (name : string, value : string|[]) => {
        setData(prevState => ({...prevState, [name]: value}));
    }

    //todo name  , input
    //todo short description ,textarea
    //todo long description , TinyMCE
    //todo parameters , dynamic inputs
    //todo images , file loader
    //todo address for map , inputs

    return(
        <Authenticated pageTitle={"Create Real Estate"}>
            <Input id="name" placeholder="Name" label="Name" onChange={(event)=>{
                setState('name', event.target.value);
            }}/>






        </Authenticated>
    )
}
