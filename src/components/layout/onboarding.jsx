import React from 'react'

const Onboarding = ({ children }) => {
    return (
        <div className='min-h-screen h-screen'>
            <div className='md:grid grid-cols-2 h-full'>
                <div>
                    <div className='w-[80%] max-w-[600px] mx-auto py-[4rem] h-full flex flex-col justify-center'>
                        {children}
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