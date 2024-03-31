import React from 'react'
import Onboarding from 'components/layout/onboarding'
import Input from 'components/common/atoms/input'
import Button from 'components/common/atoms/button'

const Signup = () => {
    return (
        <Onboarding>
            <div className='flex flex-col gap-3'>
                <h1 className='font-extrabold text-3xl'>Sign Up</h1>
                <Input label={'Full Name'} />
                <Input label={'Email'} type={'email'} />
                <Input label={'Password'} type={'password'} />
                <div className='flex items-center justify-between gap-2 text-sm'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <input type="checkbox" name="" id="" />
                        <p>Send me special offers and learning tips.</p>
                    </div>
                </div>
                <Button>Sign Up</Button>
                <p className='text-sm text-black text-center'>Already have an account? <span className='underline font-semibold'>Log In</span></p>
            </div>
        </Onboarding>
    )
}

export default Signup