import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const toShowNotification = function (
    flash: { type: string; message: string },
    settings?: object,
    onTimeOut?: ()=>void,
) {
    withReactContent(Swal).fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: flash.type,
        title: flash.message,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        ...settings,
    }).then(() => {
        if(onTimeOut!== undefined){
            onTimeOut()
        }
    });
}

const routing = {
    setRoute : function (path: string): string {
        return route(path);
    },
    checkCurrent : function (path: string): boolean {
        return route().current(path)
    },
}

const  toCreate = async ( url : string, data : object, config = {}) => {


    const redirect = function (){
        window.location.href = `/${url}`
    }

    return await axios.post(`/${url}`, {...data}, {...config} )
        .then(response =>{
            toShowNotification({ type: response.data.type, message: response.data.message }, {}, redirect )
        }

    )
        .catch(error => {
            if (error.response) {

                const errors = error.response.data.errors;

                const message = Object.values(errors).flat().toString()

                toShowNotification({ type: "error", message })

                return errors

            }
        })



};

export { toShowNotification, routing, toCreate };
