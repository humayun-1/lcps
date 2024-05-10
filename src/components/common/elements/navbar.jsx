import React, { useEffect, useState } from 'react'
import Input from '../atoms/input'
import Svgs from 'svgs'
import Button from '../atoms/button'
import Avatar from './avatar'
import { removeToken } from 'api/common'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [DATA, setDATA] = useState(false);
    useEffect(() => {
        setDATA(localStorage.getItem("data"))
    }, [])

    const navigate = useNavigate();

    const navData = [
        {
            name: "Home",
            path: "/student"
        },
        {
            name: "Courses",
            path: "/student/all-courses"
        },
        {
            name: "My Learning",
            path: "/student"
        },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Contact Us",
            path: "/contact"
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
                                return <p className='text-black cursor-pointer md:block hidden' onClick={()=>{
                                    navigate(ele.path)
                                }}>{ele.name}</p>
                            })
                        }
                        {/* <div className='cursor-pointer md:block hidden'>
                            <Svgs.Cart />
                        </div> */}
                        {
                            DATA ? <div className="flex items-center">
                                <div>
                                    <Avatar name={'John Doe'} className="rounded-full h-[2.5rem] w-[2.5rem] object-cover" />
                                </div>
                                <div className="relative dropdown-opener px-2 cursor-pointer">
                                    <Svgs.Chevron />
                                    <div className="dropdown-body font-normal text-[#5d5d5d] text-sm bg-white absolute right-0 lg:top-full top-[130%] w-[16rem] overflow-x-auto rounded-lg shadow text-left">
                                        <div className="py-1 px-3 transition-colors text-[#505050] bg-[#f9f9fd]">
                                            <div className="bg-[#f9f9fd] py-2 rounded-lg flex gap-2 items-center">
                                                <img
                                                    src="https://ui-avatars.com/api/?color=fff&background=0053a5&name=John+Doe"
                                                    className="rounded-full h-[3.375rem] w-[3.375rem] object-cover"
                                                />
                                                <div className="flex justify-center flex-col">
                                                    <p className="text-[#5D5D5D] font-semibold capitalize">
                                                        John Doe
                                                    </p>
                                                    <p className="text-[#5D5D5D] text-xs">johndoe@gmail.com</p>
                                                    {/* <p className="text-[#5D5D5D] flex items-center gap-2 text-xs hover:underline">
                                                    <Svgs.Pencil />
                                                    <span>Edit Profile</span>
                                                </p> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                        <Svgs.Cog />
                                        <p>Settings</p>
                                    </div> */}
                                        <div onClick={removeToken} className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                            <Svgs.Logout />
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : <>
                                <div>
                                    <p className='text-[#0053A5] cursor-pointer'>Log In</p>
                                </div>
                                <Button>Sign Up</Button>
                            </>
                        }

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