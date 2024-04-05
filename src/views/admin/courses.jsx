import Popup from 'components/common/elements/popup'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useState } from 'react'
import Svgs from 'svgs'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'

const Courses = ({ type }) => {
    const [Add, setAdd] = useState(false);

    const onSubmit = (values) => {
        console.log(values);
    }
    const validationSchema = {
        name: formSchema.text,
        price: formSchema.text,
        id: formSchema.text,
        department: formSchema.text,
        hours: formSchema.text,
        course_for: formSchema.text,
        learning_details: formSchema.text,
        content: formSchema.text,
        requirements: formSchema.text,
    }
    const initialValues = {
        name: "",
        price: "",
        id: "",
        department: "",
        hours: "",
        course_for: "",
        learning_details: "",
        content: "",
        requirements: "",
    }
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues })
    return (
        <>
            <DashboardContainer routeType={type == "teacher" ? "teacher" : "admin"} active="Courses">
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
                <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                    <Input form={form} placeholder="Enter Name" name={"name"} label={'Name'} />
                    <Input form={form} placeholder="Enter Price" name={"price"} label={'Price'} />
                    <Input form={form} placeholder="Enter ID" name={"id"} label={'ID'} />
                    <Input form={form} placeholder="Enter Department" name={"department"} label={'Department'} />
                    <Input form={form} placeholder="Enter Hours" name={"hours"} label={'Hours'} />
                    <Input form={form} placeholder="Enter Who this course is for" name={"course_for"} label={'Who this course is for'} />
                    <Textarea form={form} placeholder="Enter What you'll learn" name={"learning_details"} label={'What youll learn'} />
                    <Textarea form={form} placeholder="Enter Course content" name={"content"} label={'Course content'} />
                    <Textarea form={form} placeholder="Enter Requirements" name={"requirements"} label={'Requirements'} />
                    <div></div>
                    <div>
                        <Button type={"submit"}>Add Course</Button>
                    </div>
                </form>
            </Popup>
        </>
    )
}

export default Courses