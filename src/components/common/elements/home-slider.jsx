import React from 'react'
import Button from '../atoms/button'

const HomeSlider = () => {
    return (
        <div className='grid md:grid-cols-3 container'>
            <div className='py-[3rem] flex flex-col justify-center gap-3 h-full'>
                <h1 className='font-extrabold text-4xl'>Build Your Future, Choose your Course</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus iure corrupti!</p>
                <div><Button>Explore new courses</Button></div>
            </div>
            <div className='col-span-2 h-[28rem]'>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/onboarding-students.jpg`} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}

export default HomeSlider