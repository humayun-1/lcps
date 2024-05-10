import { BASE_URL, BASE_URL_IMG } from 'data/api';
import React, { useState, useEffect } from 'react';

const FileInput = ({ className, onChange, label, placeholder, name, form }) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const value = form?.values[name] ? form?.values[name] : false;
    useEffect(() => {
        if (value) {
            if (typeof value === 'string') {
                // If value is a string, it's a URL, set it as preview URL
                setPreviewUrl(BASE_URL_IMG + value);
            } else if (value instanceof File) {
                // If value is a File object, create a preview URL for it
                const reader = new FileReader();
                reader.onload = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(value);
            }
        }
    }, [value]);

    const handleChange = (event) => {
        const file = event.target.files[0];
        form.setFieldValue(name, file)
        // Create a preview URL for the selected file
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
            <input
                name={name}
                onChange={handleChange}
                type="file"
                className={`${className} ${form?.errors[name] && 'border-red-600'} bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`}
                placeholder={placeholder}
                accept="image/*"
            />
            {previewUrl && (
                <div className="mt-2">
                    <img src={previewUrl} alt="Preview" className="h-[6rem] w-[6rem] object-contain border rounded-full" />
                </div>
            )}
            {form?.errors[name] && <p className="text-red-600 pt-1 text-right text-xs">{form?.errors[name]}</p>}
        </div>
    );
};

FileInput.defaultProps = {
    form: null,
};

export default FileInput;
