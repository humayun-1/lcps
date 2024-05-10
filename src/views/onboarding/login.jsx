import { useLoginMutation } from 'api/auth';
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Onboarding from 'components/layout/onboarding'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import React from 'react'
import { toast } from 'react-hot-toast';
import Svgs from 'svgs'

const Login = () => {
    const { mutate, isLoading } = useLoginMutation();
    const onSubmit = async (values) => {
        await mutate(values);
    };
    
    const validationSchema = {
        email: formSchema.email,
        password: formSchema.password,
    }
    const initialValues = {
        email: "",
        password: "",
    }
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues })
    return (
        <Onboarding>
            <form onSubmit={form.handleSubmit} className='flex flex-col gap-3'>
                <h1 className='font-extrabold text-3xl'>Login</h1>
                <Input form={form} name={"email"} label={'Email'} type={'email'} />
                <Input form={form} name={"password"} label={'Password'} type={'password'} />
                <div className='flex items-center justify-between gap-2 text-sm'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input type="checkbox" name="" id="" />
                        <p>Keep me logged in</p>
                    </div>
                    <div>
                        <p className='underline font-semibold text-black cursor-pointer'>Forgot Password?</p>
                    </div>
                </div>
                <Button isLoading={isLoading} type="submit">Login</Button>
                {/* <div className='flex items-center gap-1'>
                    <div className='h-[2px] bg-[#D8D8D8] flex-1'></div>
                    <div>or</div>
                    <div className='h-[2px] bg-[#D8D8D8] flex-1'></div>
                </div>
                <Button className={"bg-white border border-[#797979]"}>
                    <div className='flex items-center justify-center gap-2'>
                        <Svgs.Google />
                        <span className='text-black font-semibold'>Continue with Google</span>
                    </div>
                </Button> */}
                <p className='text-sm text-black text-center'>Don’t have an account? <span className='underline font-semibold'>Sign Up</span></p>
            </form>
        </Onboarding>
    )
}

export default Login