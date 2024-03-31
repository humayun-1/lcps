import React from 'react'
import Input from '../atoms/input'
import Svgs from 'svgs'
import Button from '../atoms/button'

const Navbar = () => {
    const navData = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Courses",
            path: "/"
        },
        {
            name: "My Learning",
            path: "/"
        },
        {
            name: "About Us",
            path: "/"
        },
        {
            name: "Contact Us",
            path: "/"
        },
    ]
    const navItems = [
        "Business",
        "IT & Software",
        "Health & Fitness",
        "Music",
        "Social Science"
    ]
    return (
        <div className='border-b shadow-md sticky top-0 bg-white z-[99999]'>
            <div className='border-b'>
                <div className='flex items-center gap-3 justify-between container py-3'>
                    <div className='flex items-center gap-3'>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-[3rem] object-contain' alt='Logo' />
                        <div className='border border-[#666666] rounded-md items-center w-[20rem] md:flex hidden'>
                            <div className='h-full px-2'>
                                <Svgs.Search />
                            </div>
                            <div className='flex-1'>
                                <Input placeholder={'What do you want to learn?'} className={"bg-white !border-none !pl-0 w-full"} />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3.5 text-sm font-semibold'>
                        {
                            navData.map(ele => {
                                return <p className='text-black cursor-pointer md:block hidden'>{ele.name}</p>
                            })
                        }
                        <div className='cursor-pointer md:block hidden'>
                            <Svgs.Cart />
                        </div>
                        <div>
                            <p className='text-[#0053A5] cursor-pointer'>Log In</p>
                        </div>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 justify-center py-2 text-sm font-semibold whitespace-nowrap overflow-auto'>
                {
                    navItems.map(ele => <p className='cursor-pointer'>{ele}</p>)
                }
            </div>
        </div>
    )
}

export default Navbar