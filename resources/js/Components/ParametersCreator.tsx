import React, {useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { TextField } from "@mui/material";

export default function ParametersCreator({onChange} : {onChange: (newParameters: []) => void}) {
    const [parameters, setParameters] = useState([]);

    const html = (
        <div className="inputs__parameter">
            <TextField id="parameter_name" label="Parameter name" />
            <TextField id="parameter_value" label="Parameter value" />
        </div>
    );

    const Modal = function () {
        withReactContent(Swal).fire({
            title: <p>Hello World</p>,
            preConfirm: () => {
                const parameter_name =
                    document.querySelector("#parameter_name").value;
                const parameter_value =
                    document.querySelector("#parameter_value").value;

                const newParameters = [...parameters, {
                    [parameter_name]: parameter_value,
                }, ]

                setParameters(newParameters);
                onChange(newParameters)
            },
            focusConfirm: false,
            showCancelButton: true,
            showDenyButton: true,
            showCloseButton: true,
            html: html,
            confirmButtonText: <p>confirm</p>,
            denyButtonText: <p>deny</p>,
            cancelButtonText: <p>cancel</p>,
            closeButtonHtml: <p>X</p>,
        });
    };

   const removeParameter = ()=>{
       const parameterName = event.target.dataset.name
       const newParameters = parameters.filter(parameter => Object.keys(parameter)[0] !== parameterName)

       setParameters(newParameters);
       onChange(newParameters)
   }

    return (
        <div className="parametersCreator">

            {parameters &&
                <div className="parameter__items">
                    {parameters.map((parameter, index) => {
                        return (
                            <div key={index}>
                                <div className="parameter">
                                    <p>
                                        {Object.keys(parameter)[0]} :{" "}
                                        {Object.values(parameter)[0]}{" "}
                                    </p>
                                    <button
                                        data-name={Object.keys(parameter)[0]}
                                        onClick={removeParameter}
                                    >X
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }


            <button className="btn" onClick={Modal}>
                Create new
            </button>
        </div>
    );
}
