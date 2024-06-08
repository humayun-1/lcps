import React from 'react'

const FullLoader = () => {
    return (
        <div className='fixed inset-0 bg-white/50 backdrop-blur-md flex items-center justify-center z-[99999999999999]'>
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='scale-125 h-[4rem] object-contain' alt='Logo' />
                    </div>
                    <div className="main_loader"></div>
                </div>
            </div>
        </div>
    )
}

export default FullLoader