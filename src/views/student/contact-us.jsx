import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import StudentContainer from 'components/layout/student-container'
import React from 'react'

const ContactUs = () => {
    return (
        <StudentContainer>
            <div className='md:grid grid-cols-2 h-full'>
                <div>
                    <div className='w-[80%] max-w-[600px] mx-auto py-[4rem] h-full flex flex-col justify-center'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-4xl font-semibold'>We'd love to hear from <br /> you!</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Input label={"First Name"} />
                                    <Input label={"Last Name"} />
                                </div>
                                <Input label={"Email"} />
                                <Input label={"Phone"} />
                                <Textarea label={"Message"} />
                            </div>
                            <div>
                                <Button>Send Message</Button>
                            </div>
                        </div>
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