import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import StudentContainer from 'components/layout/student-container'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import React from 'react'

const ContactUs = () => {

    const validationSchema = {
        Fname: formSchema.text,
        Lname: formSchema.text,
        email: formSchema.text,
        phone: formSchema.text,
        message: formSchema.text,
    }
    const initialValues = {
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
        message: "",
    }

    const onSubmit = (values) => {
        console.log(values);
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
                                    <Input form={form} name={"Fname"} label={"First Name"} />
                                    <Input form={form} name={"Lname"} label={"Last Name"} />
                                </div>
                                <Input form={form} name={"email"} label={"Email"} />
                                <Input form={form} name={"phone"} label={"Phone"} />
                                <Textarea name={"message"} label={"Message"} />
                            </div>
                            <div>
                                <Button>Send Message</Button>
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