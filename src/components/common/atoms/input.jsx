import React from 'react'

const Input = ({ value, className, onChange, label, placeholder, type }) => {
    return (
        <div>
            {
                label && <label class="block mb-1 text-sm font-medium">{label}</label>
            }
            <input value={value} onChange={onChange} type={type ? type : "text"} class={`${className} bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`} placeholder={placeholder} />
        </div>
    )
}

export default Input