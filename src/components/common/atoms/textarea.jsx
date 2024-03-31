import React from 'react'

const Textarea = ({ value, className, onChange, label, placeholder }) => {
    return (
        <div>
            <label class="block mb-1 text-sm font-medium">{label}</label>
            <textarea rows={4} value={value} onChange={onChange} type="text" class={`${className} bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`} placeholder={placeholder}></textarea>
        </div>
    )
}

export default Textarea