import React from 'react'

const Input = ({ value, className, onChange, label, placeholder, type, name, form }) => {
    return (
        <div>
            {
                label && <label class="block mb-1 text-sm font-medium">{label}</label>
            }
            <input name={name} value={value} onChange={form ? form.handleChange : onChange} type={type ? type : "text"} class={`${className} ${form?.errors[name] && "border-red-600"} bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`} placeholder={placeholder} />
            {
                form?.errors[name] && <p className='text-red-600 pt-1 text-right text-xs'>{form?.errors[name]}</p>
            }
        </div>
    )
}

export default Input