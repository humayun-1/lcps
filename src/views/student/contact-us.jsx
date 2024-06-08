import { useAddContactMutation } from 'api/contact/contact'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import StudentContainer from 'components/layout/student-container'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import React from 'react'

const ContactUs = () => {
    const { mutate, isLoading } = useAddContactMutation();

    const validationSchema = {
        first_name: formSchema.text,
        last_name: formSchema.text,
        email: formSchema.text,
        message: formSchema.text,
    }
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        message: "",
    }

    const onSubmit = async (values) => {
        await mutate(values);
        form.resetForm();
    }
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues });

    return (
        <StudentContainer>
            <div className='md:grid grid-cols-2 h-full'>
                <div>
                    <div className='w-[80%] max-w-[600px] mx-auto py-[4rem] h-full flex flex-col justify-center'>
                        <form onSubmit={form.handleSubmit} className='flex flex-col gap-5'>
                            <h1 className='text-4xl font-semibold'>We'd love to hear from <br /> you!</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Input form={form} name={"first_name"} label={"First Name"} />
                                    <Input form={form} name={"last_name"} label={"Last Name"} />
                                </div>
                                <Input form={form} name={"email"} label={"Email"} />
                                <div>
                                    <p>Message</p>
                                    <textarea value={form.values.message} onChange={form.handleChange} className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none' name="message" id="" rows={6}></textarea>
                                    {form.errors.message && <p className="text-red-600 pt-1 text-right text-xs">This Field is Required</p>}
                                </div>
                            </div>
                            <div>
                                <Button type={"submit"}>Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/imgs/onboarding-students.jpg`} className="h-full w-full object-cover" />
                </div>
            </div>
        </StudentContainer>
    )
}

export default ContactUs