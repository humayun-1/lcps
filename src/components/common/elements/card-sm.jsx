import React from 'react'

const CardSm = () => {
    return (
        <div class="flex overflow-hidden border border-[#D8D8D8] rounded-md shadow-md">
            <div>
                <img src="https://source.unsplash.com/random?laptops" className="h-[5rem] w-[5rem] object-cover" />
            </div>
            <div class="bg-white px-4 flex flex-col justify-center">
                <div>
                    <h1 class="text-gray-900 font-bold">IT Manager</h1>
                    <p class="text-gray-700 text-xs">100 Courses</p>
                </div>
            </div>
        </div>
    )
}

export default CardSm