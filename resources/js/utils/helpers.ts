import Swal from "sweetalert2";

const toShowNotification = function (
    flash: { type: string; message: string },
    settings?: object,
) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Swal.fire({
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
    }).then(() => () => {});
}

const routing = {
    setRoute : function (path: string): string {
        return route(path);
    },
    checkCurrent : function (path: string): boolean {
        return route().current(path)
    }
}

export { toShowNotification, setRoute, routing };
