import Popup from 'components/common/elements/popup'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import { useAddCourseMutation } from 'api/courses/add'
import { useGetCourseQuery } from 'api/courses/get'
import { useDeleteCourseMutation } from 'api/courses/delete'

const Courses = ({ type }) => {
    const [Add, setAdd] = useState(false);
    const [Delete, setDelete] = useState({ isOpen: false, id: '' });
    const [Update, setUpdate] = useState({ isOpen: false, id: '', course: null }); // Update to include course object

    const { mutate, isLoading } = useAddCourseMutation();
    const { data: courses, isLoading: isGetCoursesLoading, refetch: refetchCourses } = useGetCourseQuery();
    const { mutate: deleteCourse, isLoading: isDeleteCourseLoading } = useDeleteCourseMutation();

    const deleteCourseFn = (id) => {
        deleteCourse(id, {
            onSuccess: () => {
                setDelete({ isOpen: false, id: '' });
                refetchCourses();
            }
        });
    }

    useEffect(() => {
        if (Update.isOpen && Update.course) {
            form.setValues(Update.course);
        }
    }, [Update.isOpen, Update.course]);

    const onSubmit = async (values) => {
        await mutate({ type: Update.isOpen ? "UPDATE" : "ADD", data: values, id: Update.id }, {
            onSuccess: () => {
                setAdd(false);
                setUpdate({ isOpen: false, id: '', course: null });
                form.resetForm();
                refetchCourses();
            },
        });
    };

    const validationSchema = {
        name: formSchema.text,
        price: formSchema.text,
        course_id: formSchema.text,
        department: formSchema.optional,
        department_id: formSchema.number,
        hours: formSchema.text,
        course_for: formSchema.text,
        learning_details: formSchema.text,
        content: formSchema.text,
        requirements: formSchema.text,
    };

    const initialValues = {
        name: "",
        price: "",
        course_id: "",
        department: "",
        department_id: "",
        hours: "",
        course_for: "",
        learning_details: "",
        content: "",
        requirements: "",
    };

    const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
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
                                        <p className='whitespace-nowrap'>Name</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>ID</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Hours</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Price</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Department</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>What you'll learn</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Course content</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Requirements</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Who this course is for</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isGetCoursesLoading ? courses?.data.map((ele, i) => {
                                    return <>
                                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                                            <td className="w-4 p-4">
                                                {i + 1}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {ele.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {ele.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.hours}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.department_id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.learning_details}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.content}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.requirements}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.course_for}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className='flex items-center gap-3 cursor-pointer'>
                                                    <div onClick={() => {
                                                        setUpdate({ isOpen: true, id: ele.id, course: ele })
                                                    }}>
                                                        <Svgs.Edit />
                                                    </div>
                                                    <div onClick={() => {
                                                        setDelete({ isOpen: true, id: ele.id })
                                                    }}>
                                                        <Svgs.Delete />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                }) : "Loading ..."}
                            </tbody>
                        </table>
                    </div>
                    {/* <Pagginaton /> */}
                </div>
            </DashboardContainer>
            <Popup size={'md'} open={Delete.isOpen} close={setDelete} onclose={() => {
                setDelete({ id: "", isOpen: false })
            }} heading={'Delete course?'}>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Are you sure you want to delete this course?</p>
                    <div className='flex items-center justify-end gap-3'>
                        <Button className={"bg-gray-200 !text-black"} onClick={() => {
                            setDelete({ id: "", isOpen: false })
                        }}>Cancel</Button>
                        <Button isLoading={isDeleteCourseLoading} className={"bg-red-500 text-white"} onClick={() => {
                            deleteCourseFn(Delete.id)
                        }}>Delete</Button>
                    </div>
                </div>
            </Popup>
            <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
                setUpdate({ id: "", isOpen: false })
            }} heading={`${Update.isOpen ? "Update" : 'Add'} Course`}>
                <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                    <Input form={form} placeholder="Enter Name" name={"name"} label={'Name'} />
                    <Input form={form} placeholder="Enter Price" name={"price"} label={'Price'} />
                    <Input form={form} placeholder="Enter ID" name={"course_id"} label={'ID'} />
                    <Input form={form} placeholder="Enter Department" name={"department"} label={'Department'} />
                    <Input form={form} placeholder="Enter Departmen ID" name={"department_id"} type={'Number'} label={'Department ID'} />
                    <Input form={form} placeholder="Enter Hours" name={"hours"} label={'Hours'} />
                    <Input form={form} placeholder="Enter Who this course is for" name={"course_for"} label={'Who this course is for'} />
                    <div>
                    </div>
                    <Textarea form={form} placeholder="Enter Requirements" name={"requirements"} label={'Requirements'} />
                    <Textarea form={form} placeholder="Enter What you'll learn" name={"learning_details"} label={'What youll learn'} />
                    <Textarea form={form} placeholder="Enter Course content" name={"content"} label={'Course content'} />
                    <div></div>
                    <div>
                        <Button isLoading={isLoading} type={"submit"}>{Update.isOpen ? "Update" : 'Add'} Course</Button>
                    </div>
                </form>
            </Popup>
        </>
    )
}

export default Courses