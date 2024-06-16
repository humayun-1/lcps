import React, { useEffect, useState } from 'react'
import Input from '../atoms/input'
import Svgs from 'svgs'
import Button from '../atoms/button'
import Avatar from './avatar'
import { removeToken } from 'api/common'
import { useNavigate } from 'react-router-dom'
import Popup from './popup'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import Dropdown from '../atoms/dropdown'
import { useAddStudentsMutation } from 'api/student/add'
import FileInput from '../atoms/fileInput'
import { roles } from 'data/api'
import { useGetSingleStudentMutation, useGetSingleStudentQuery } from 'api/student/get-single'
import { useGetDepartmentsQuery } from 'api/department/get'

const Navbar = () => {

    const [DATA, setDATA] = useState(false);
    const [Update, setUpdate] = useState({ isOpen: false, id: '', Students: null });
    const { mutate, isLoading } = useAddStudentsMutation();
    const { data: Student, isLoading: isGetStudentLoading, refetch: refetchStudent } = useGetSingleStudentQuery(DATA?.id);
    const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();
    useEffect(() => {
        setDATA(JSON.parse(localStorage.getItem("data")));
    }, [])

    useEffect(() => {
        if (DATA) {


            refetchStudent();
        }
    }, [DATA])


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
            path: "/student/my-learning",
            login: true,
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

    useEffect(() => {
        if (Update.isOpen && Student) {
            console.log(Student?.data, "Student");
            form.setValues(Student?.data);
            form.setFieldValue("role_type", roles.student.name)
            form.setFieldValue("role_type_id", roles.student.id)
        }
    }, [Update.isOpen, Student]);

    const validationSchema = {
        role_type: formSchema.text,
        role_type_id: formSchema.text,
        // address: formSchema.text,
    };

    const onSubmit = async (values) => {
        console.log(values, "values");
        await mutate({ type: "UPDATE", data: values, id: Update.id }, {
            onSuccess: () => {
                setUpdate({ isOpen: false, id: '', Students: null });
                form.resetForm();
            },
        });
    };
    const initialValues = {
        name: "",
        address: "",
        department_id: "",
        phone_no: "",
        email: "",
        country: "",
        city: "",
        profile_picture: "",
        course_id: "",
        role_type: roles.student.name,
        role_type_id: roles.student.id,
        password: "",
    }
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues });

    const [Menu, setMenu] = useState(false)
    return (
        <>
            <div className='border-b shadow-md sticky top-0 bg-white z-[99999]'>
                <div className='border-b'>
                    <div className='flex items-center gap-3 justify-between container py-3'>
                        <div className='flex items-center gap-3'>
                            <div className='cursor-pointer md:hidden block' onClick={() => setMenu(_ => !_)}>
                                <Svgs.Menu />
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-[3rem] object-contain cursor-pointer' alt='Logo' onClick={() => navigate("/")} />
                            <div className='border border-[#666666] rounded-md items-center w-[20rem] md:flex hidden'>
                                <div className='h-full px-2'>
                                    <Svgs.Search />
                                </div>
                                <div className='flex-1'>
                                    <input placeholder={'What do you want to learn?'} onKeyDown={(e) => {
                                        if (e.key == 'Enter') {
                                            const searchTerm = e.target.value;
                                            navigate(`/student/all-courses?search=${searchTerm}`);
                                        }
                                    }} className={"!border-none !pl-0 w-full !bg-white border border-[#00000099] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3.5 text-sm font-semibold'>
                            <div className='items-center gap-3.5 md:flex hidden'>
                                {
                                    navData.filter((ele) => !DATA?.role?.includes("admin") && DATA || !ele.login).map((ele) => (
                                        <p
                                            key={ele.name}
                                            className='text-black cursor-pointer'
                                            onClick={() => navigate(ele.path)}
                                        >
                                            {ele.name}
                                        </p>
                                    ))
                                }
                            </div>
                            {
                                DATA ? <div className="flex items-center">
                                    <div>
                                        <Avatar name={DATA?.name} className="rounded-full h-[2.5rem] w-[2.5rem] object-cover" />
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
                                                            {DATA?.name}
                                                        </p>
                                                        <p className="text-[#5D5D5D] text-xs">{DATA?.email}</p>
                                                        {
                                                            DATA?.role?.includes("student") && <p onClick={() => setUpdate({ isOpen: true, id: DATA.id })} className="text-[#5D5D5D] flex items-center gap-2 text-xs hover:underline">
                                                                <Svgs.Pencil />
                                                                <span>Edit Profile</span>
                                                            </p>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                DATA?.role.includes("admin") || DATA?.role.includes("teacher") ?
                                                    <div onClick={() => {
                                                        if (DATA?.role.includes("admin")) {
                                                            window.location.pathname = "/admin/";
                                                        } else if (DATA?.role.includes("teacher")) {
                                                            window.location.pathname = "/teacher/";
                                                        }
                                                    }} className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                                        <Svgs.Home />
                                                        <p>Dashboard</p>
                                                    </div> : ""
                                            }

                                            <div onClick={removeToken} className="p-3 transition-colors flex items-center gap-3 text-[#505050] hover:bg-[#ecebeb]">
                                                <Svgs.Logout />
                                                <p>Logout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> : <>
                                    <div>
                                        {/* <p className='text-[#0053A5] cursor-pointer' onClick={() => {
                                            navigate("/login")
                                        }}>Log In</p> */}
                                        <Button className={"bg-[#ffc300]"} onClick={() => {
                                            navigate("/login")
                                        }}>Portal Log In</Button>
                                    </div>
                                    {/* <Button onClick={() => {
                                        navigate("/signup")
                                    }}>Sign Up</Button> */}
                                </>
                            }

                        </div>
                    </div>
                </div>
                <div className='md:flex hidden items-center gap-3 justify-center py-2 text-sm font-semibold whitespace-nowrap overflow-auto'>
                    {
                        Departments?.data.map(ele => <p onClick={() => navigate(`/student/all-courses?department=${ele?.name}`)} className='cursor-pointer'>{ele?.name}</p>)
                    }
                </div>
                <Popup open={Update.isOpen} onclose={() => {
                    setUpdate({ id: "", isOpen: false })
                    form.resetForm();
                }} heading={`Update Student Info`}>
                    <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                        <div>

                            <label className="block mb-1 text-sm font-medium">Name</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.name}</p>
                            </div>
                        </div>
                        <div>

                            <label className="block mb-1 text-sm font-medium">phone_no</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.phone_no}</p>
                            </div>
                        </div>
                        <div>

                            <label className="block mb-1 text-sm font-medium">email</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.email}</p>
                            </div>
                        </div>
                        <div>

                            <label className="block mb-1 text-sm font-medium">country</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.country}</p>
                            </div>
                        </div>
                        <div>

                            <label className="block mb-1 text-sm font-medium">city</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.city}</p>
                            </div>
                        </div>
                        <div>

                            <label className="block mb-1 text-sm font-medium">profile_picture</label>
                            <div className='bg-gray-50 border border-[#00000099] text-gray-900 text-sm rounded-md opacity-50 block w-full p-2.5 outline-none'>
                                <p className=''>{Student?.data?.profile_picture}</p>
                            </div>
                        </div>
                        <Input form={form} placeholder="Enter Address" label={'Address'} name={"address"} />
                        <Input form={form} placeholder="Enter Password" label={'Password'} name={"password"} type={"password"} />
                        <div>
                            <Button type={'submit'} isLoading={isLoading}>Update</Button>
                        </div>
                    </form>
                </Popup>
            </div>
            {
                Menu && <div className='fixed inset-0 z-[999999999]'>
                    <div className='absolute z-[1] inset-0 bg-black/20 backdrop-blur-sm'></div>
                    <div className='h-full w-[20rem] overflow-auto flex flex-col gap-3 bg-white p-[1rem] relative z-[2]'>
                        <div className='flex items-center justify-between gap-2 mb-[1rem]'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`} className='h-[3rem] object-contain cursor-pointer' alt='Logo' onClick={() => navigate("/")} />
                            </div>
                            <div className='cursor-pointer' onClick={() => setMenu(_ => !_)}>
                                <Svgs.Close />
                            </div>
                        </div>
                        {
                            navData.filter((ele) => DATA || !ele.login).map((ele) => (
                                <p
                                    key={ele.name}
                                    className='text-black cursor-pointer'
                                    onClick={() => navigate(ele.path)}
                                >
                                    {ele.name}
                                </p>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar