import React from "react";

type propsType = {
    label: string;
    id: string;
    placeholder?: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
    label,
    id,
    placeholder = "",
    type = "text",
    onChange,
}: propsType) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={(event) => {
                    if (onChange) {
                        onChange(event);
                    }
                }}
            />
        </>
    );
}
