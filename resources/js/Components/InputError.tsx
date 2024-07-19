type propsType = {
    message?: string,
    className?: string,
}

export default function InputError({ message, className = "", ...props } : propsType) {
    return message ? (
        <p {...props} className={"text-sm text-red-600 " + className}>
            {message}
        </p>
    ) : null;
}