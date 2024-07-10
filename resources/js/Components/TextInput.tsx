import React, { forwardRef, useEffect, useRef } from "react";
import * as events from "node:events";

type Props = {
    id: string;
    type?: string;
    name?: string;
    value: string;
    className?: string;
    autoComplete?: string;
    isFocused?: boolean;
    onChange: (e: events) => React.ChangeEvent<HTMLInputElement>;
    required?: boolean;
};

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props }: Props,
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
