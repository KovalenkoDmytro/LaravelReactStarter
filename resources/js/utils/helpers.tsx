import Swal from "sweetalert2";

function toShowNotification (flash :{type : string , message : string},settings? :{}) {

    // @ts-ignore
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: flash.type,
        title: flash.message,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        ...settings,
    }).then(r => ()=>{})
}

export {
    toShowNotification,
}
