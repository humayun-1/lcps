import { removeToken } from 'api/common'
import Avatar from 'components/common/elements/avatar'
import { adminRouteList } from 'data/routes/admin-routes'
import { teacherRouteList } from 'data/routes/teacher-routes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Svgs from 'svgs'
const DashboardContainer = ({ children, active, routeType }) => {
    const navigate = useNavigate();
    const [Show, setShow] = useState(false)
    const routeList = {
        admin: adminRouteList,
        teacher: teacherRouteList,
    }
    return (
        <div className='container'>
            <div className='md:grid grid-cols-12 h-screen overflow-hidden'>
                <div className={`md:col-span-2 md:flex hidden flex-col overflow-auto ${Show && "fixed top-0 left-0 bottom-0 z-[2222] bg-white w-[16rem] !flex"}`}>
                    <div className='border-r px-[1rem] md:px-[2rem] py-3 border-b h-[5rem] flex items-end justify-between '>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-full object-contain' alt='Logo' />
                        <div className='md:hidden block cursor-pointer' onClick={() => {
                            setShow(!Show)
                        }}>
                            <Svgs.Close />
                        </div>
                    </div>
                    <div className='border-r pl-[1rem] md:pl-[2rem] pr-4 py-[1rem] space-y-2 flex-1 overflow-auto'>
                        {
                            routeList[routeType].map(ele => {
                                return <div onClick={() => {
                                    navigate(ele.path)
                                }} className={`flex items-center gap-2 ${ele.name == active ? "text-[#0053a5]" : "text-[#535353]"} text-sm border border-white hover:border-[#eee] p-2 rounded-md cursor-pointer transition-all`}>
                                    <div className={`h-[2.3rem] w-[2.3rem] ${ele.name == active ? "bg-[#0053a5] text-white" : "bg-[#EEEEEE]"} flex items-center justify-center rounded-md`}>
                                        {ele.icon}
                                    </div>
                                    <div>
                                        {ele.name}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='md:col-span-10 flex flex-col overflow-auto'>
                    <div className='border-b h-[5rem] flex items-center justify-between md:px-[2rem]'>
                        <div className='flex items-center gap-2'>
                            <div className='md:hidden block cursor-pointer' onClick={() => {
                                setShow(!Show)
                            }}>
                                <Svgs.Menu />
                            </div>
                            <div>
                                <form className="w-[14rem] hover:md:w-[18rem] transition-all mx-auto">
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                                            <Svgs.Search />
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-2 pe-10 text-gray-900 border border-[##E9ECEF] rounded text-sm outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <div className='bg-[#EEEEEE] h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full cursor-pointer'>
                                    <Svgs.Bell />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
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
                                                        <p className="text-[#5D5D5D] flex items-center gap-2 text-xs hover:underline">
                                                            <Svgs.Pencil />
                                                            <span>Edit Profile</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                                <Svgs.Cog />
                                                <p>Settings</p>
                                            </div>
                                            <div onClick={removeToken} className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                                <Svgs.Logout />
                                                <p>Logout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='bg-[#f8f9fa] flex-1 overflow-auto md:px-[2rem] px-[1rem] py-[1rem]'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

DashboardContainer.defaultProps = {
    routeType: "admin"
}

export default DashboardContainer