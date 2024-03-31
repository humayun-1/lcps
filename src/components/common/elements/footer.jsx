import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-[#F5FAFF]'>
            <div className='border-b'>
                <div className='grid md:grid-cols-3 gap-4 container py-[3rem]'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-[4rem] object-contain' alt='Logo' />
                        <p className='text-sm mt-3'>Proin ullamcorper purus at diam eleifend luctus. Etiam sem dui, vulputat.</p>
                    </div>
                    <div className='w-fit md:mx-auto flex flex-col gap-2'>
                        <h1 className='font-semibold text-lg'>Main</h1>
                        <p className='text-sm cursor-pointer'>Home</p>
                        <p className='text-sm cursor-pointer'>About Us</p>
                        <p className='text-sm cursor-pointer'>Courses</p>
                        <p className='text-sm cursor-pointer'>My Learning</p>
                    </div>
                    <div className='w-fit md:mx-auto flex flex-col gap-2'>
                        <h1 className='font-semibold text-lg'>Contact Us</h1>
                        <p>mark@ezshiphardwoods.com</p>
                    </div>
                </div>
            </div>
            <div className='container grid md:grid-cols-3 gap-3 text-sm py-3 md:text-start text-center'>
                <p>© {currentYear} London College of Practical Studies, Inc.</p>
                <div className='flex items-center justify-center font-semibold gap-2'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer