import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => navigate('/student/course-details')} >
            <div className='h-[15rem] overflow-hidden'>
                <img src="https://source.unsplash.com/random?laptops" className='transition-all hover:rotate-3 hover:scale-125 h-full object-cover w-full' alt="Sunset in the mountains" />
            </div>
            <div className='border rounded-b-lg'>
                <div className="px-4 py-4 bg-white">
                    <div className='flex items-center gap-3 justify-between text-[#6D6D6D] text-xs'>
                        <p>
                            {data ? `$${data?.price}` : "8,614 students"}
                        </p>
                        <p>{data ? `${data?.hourse}` : "10h 58m"}</p>
                    </div>
                    <h1 className="font-bold text-lg">{data ? `${data?.hourse}` : "Bachelor of Science in Computer Science"}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card