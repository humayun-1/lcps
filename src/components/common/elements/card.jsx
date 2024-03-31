import React from 'react'

const Card = () => {
    return (
        <div class="max-w-sm rounded-lg overflow-hidden shadow-md cursor-pointer">
            <div className='h-[15rem] overflow-hidden'>
                <img class="w-full" src="https://source.unsplash.com/random?laptops" className='transition-all hover:rotate-3 hover:scale-125 h-full object-cover w-full' alt="Sunset in the mountains" />
            </div>
            <div className='border rounded-b-lg'>
                <div class="px-4 py-4 bg-white">
                    <div className='flex items-center gap-3 justify-between text-[#6D6D6D] text-xs'>
                        <p>
                            8,614 students
                        </p>
                        <p>10h 58m</p>
                    </div>
                    <h1 class="font-bold text-lg">Bachelor of Science in Computer Science</h1>
                </div>
            </div>
        </div>
    )
}

export default Card