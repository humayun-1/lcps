import React from 'react'
import { useNavigate } from 'react-router-dom'
import Svgs from 'svgs'

const Onboarding = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen h-screen'>
            <div className='md:grid grid-cols-2 h-full'>
                <div>
                    <div className='w-[80%] max-w-[600px] mx-auto py-[4rem] h-full flex flex-col items-start justify-between'>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-[3rem] object-contain cursor-pointer' alt='Logo' onClick={() => navigate("/")} />
                        <div className='w-full'>
                            {children}
                        </div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/imgs/onboarding-students.jpg`} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Onboarding