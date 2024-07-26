import { Editor } from "@tinymce/tinymce-react";
import React from "react";

type TinyMCEEditorProps = {
    onEditorChange: (value: string) => void;
    initialValue: string;
    label: string;
    error?: boolean;
    helperText?: string;
    required?: boolean;
};

export default function TinyMCEEditor({
    onEditorChange,
    label,
    initialValue = "Welcome to TinyMCE!",
    error,
    helperText,
    required,
}: TinyMCEEditorProps) {
    return (
        <div className={`tinyMCEEditor ${error ? "__invalidate" : ""} ${required ? '__required' : ''}`}>
            <p>{label}</p>
            {helperText ?? <p>{helperText}</p>}

            <Editor
                apiKey={import.meta.env.VITE_TINY_EDITOR_KEY}
                init={{
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue={initialValue}
                onEditorChange={(value: string) => {
                    onEditorChange(value);
                }}
            />
        </div>
    );
}
