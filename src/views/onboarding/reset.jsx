import { useResetMutation } from 'api/auth/reset'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Onboarding from 'components/layout/onboarding'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Reset = () => {
    const { mutate, isLoading } = useResetMutation();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        await mutate(values);
        form.resetForm();
    };

    const validationSchema = {
        email: formSchema.email,
    }
    const initialValues = {
        email: "",
    }
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues })
    return (
        <Onboarding>
            <form onSubmit={form.handleSubmit} className='flex flex-col gap-3'>
                <div>
                    <h1 className='font-extrabold text-3xl'>Reset your Password</h1>
                    <p className='text-sm text-black'>We will send you an email to reset your password</p>
                </div>
                <Input form={form} name={"email"} label={'Email'} type={'email'} />
                <Button type={"submit"}>Reset Password</Button>
            </form>
        </Onboarding>
    )
}

export default Reset