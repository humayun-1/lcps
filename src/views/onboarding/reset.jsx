import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Onboarding from 'components/layout/onboarding'
import React from 'react'

const Reset = () => {
    return (
        <Onboarding>
            <div className='flex flex-col gap-3'>
                <div>
                    <h1 className='font-extrabold text-3xl'>Reset your Password</h1>
                    <p className='text-sm text-black'>We will send you an email to reset your password</p>
                </div>
                <Input label={'Email'} type={'email'} />
                <Button>Reset Password</Button>
            </div>
        </Onboarding>
    )
}

export default Reset