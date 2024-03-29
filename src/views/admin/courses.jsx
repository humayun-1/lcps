import Popup from 'components/common/popup'
import Button from 'components/common/ui/button'
import Input from 'components/common/ui/input'
import Textarea from 'components/common/ui/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useState } from 'react'
import Svgs from 'svgs'

const Courses = ({ type }) => {
    const [Add, setAdd] = useState(false)
    return (
        <>
            <DashboardContainer routeType={type == "teacher" ? "teacher" : ""} active="Courses">
                <div className="flex flex-col gap-5">
                    <div className='flex items-center gap-3 justify-between'>
                        <h1 className="text-2xl">Courses</h1>
                        <Button onClick={() => {
                            setAdd(_ => !_)
                        }}>Add Course</Button>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            #
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone no.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Department
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Courses
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 1, 1, 1, 1, 1, 1].map((ele, i) => {
                                    return <tr className="bg-white border-b  hover:bg-gray-50 ">
                                        <td className="w-4 p-4">
                                            {i + 1}
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Name
                                        </th>
                                        <td className="px-6 py-4">
                                            Age
                                        </td>
                                        <td className="px-6 py-4">
                                            EMAIL
                                        </td>
                                        <td className="px-6 py-4">
                                            ADDRESS
                                        </td>
                                        <td className="px-6 py-4">
                                            PHONE NO.
                                        </td>
                                        <td className="px-6 py-4">
                                            DEPARTMENT
                                        </td>
                                        <td className="px-6 py-4">
                                            COURSES
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex items-center gap-3 cursor-pointer'>
                                                <Svgs.Edit />
                                                <Svgs.Delete />
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">1000</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700   ">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   ">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   ">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   ">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   ">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700   ">Next</a>
                            </li>
                        </ul>
                        <div></div>
                    </nav>
                </div>
            </DashboardContainer>
            <Popup open={Add} close={setAdd} heading={'Add Course'}>
                <div className='grid grid-cols-2 gap-4'>
                    <Input placeholder="Enter Name" label={'Name'} />
                    <Input placeholder="Enter Price" label={'Price'} />
                    <Input placeholder="Enter ID" label={'ID'} />
                    <Input placeholder="Enter Department" label={'Department'} />
                    <Input placeholder="Enter Hours" label={'Hours'} />
                    <Input placeholder="Enter Who this course is for" label={'Who this course is for'} />
                    <Textarea placeholder="Enter What you'll learn" label={'What youll learn'} />
                    <Textarea placeholder="Enter Course content" label={'Course content'} />
                    <Textarea placeholder="Enter Requirements" label={'Requirements'} />
                    <div></div>
                    <div>
                        <Button>Add Course</Button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Courses