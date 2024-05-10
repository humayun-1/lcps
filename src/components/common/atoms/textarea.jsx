import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Textarea = ({ name, form, className, onChange, label, placeholder }) => {
    return (
        <div className='h-[15rem] pb-[4rem]'>
            <label className="block mb-1 text-sm font-medium">{label}</label>
            {/* <textarea value={form.values[name]} name={name} rows={4} onChange={form ? form.handleChange : onChange} type="text" className={`${className} ${form?.errors[name] && "border-red-600"} bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none`} placeholder={placeholder}></textarea> */}
            <ReactQuill
                className='h-full'
                value={form?.values[name]}
                name={name}
                onChange={(value) => {
                    if (form.handleChange) {
                        console.log(value);
                        form.setFieldValue(name, value)
                    }
                }}
                theme="snow"
                placeholder={placeholder}
            />
            {
                form?.errors[name] && <p className='text-red-600 pt-1 text-right text-xs'>{form?.errors[name]}</p>
            }
        </div>
    )
}

export default Textarea