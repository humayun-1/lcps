import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Onboarding from 'components/layout/onboarding'
import React from 'react'
import Svgs from 'svgs'

const Login = () => {
    return (
        <Onboarding>
            <div className='flex flex-col gap-3'>
                <h1 className='font-extrabold text-3xl'>Login</h1>
                <Input label={'Email'} type={'email'} />
                <Input label={'Password'} type={'password'} />
                <div className='flex items-center justify-between gap-2 text-sm'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input type="checkbox" name="" id="" />
                        <p>Keep me logged in</p>
                    </div>
                    <div>
                        <p className='underline font-semibold text-black cursor-pointer'>Forgot Password?</p>
                    </div>
                </div>
                <Button>Login</Button>
                <div className='flex items-center gap-1'>
                    <div className='h-[2px] bg-[#D8D8D8] flex-1'></div>
                    <div>or</div>
                    <div className='h-[2px] bg-[#D8D8D8] flex-1'></div>
                </div>
                <Button className={"bg-white border border-[#797979]"}>
                    <div className='flex items-center justify-center gap-2'>
                        <Svgs.Google />
                        <span className='text-black font-semibold'>Continue with Google</span>
                    </div>
                </Button>
                <p className='text-sm text-black text-center'>Don’t have an account? <span className='underline font-semibold'>Sign Up</span></p>
            </div>
        </Onboarding>
    )
}

export default Login