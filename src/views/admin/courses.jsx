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
import { useGetDepartmentsQuery } from 'api/department/get'
import Dropdown from 'components/common/atoms/dropdown'
import FileInput from 'components/common/atoms/fileInput'

const Courses = ({ type }) => {
    const [Add, setAdd] = useState(false);
    const [Delete, setDelete] = useState({ isOpen: false, id: '' });
    const [Update, setUpdate] = useState({ isOpen: false, id: '', course: null });
    const [View, setView] = useState({ open: false, data: "" });

    const { mutate, isLoading } = useAddCourseMutation();
    const { data: courses, isLoading: isGetCoursesLoading, refetch: refetchCourses } = useGetCourseQuery();
    const { mutate: deleteCourse, isLoading: isDeleteCourseLoading } = useDeleteCourseMutation();
    const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();

    const [DepartmentsOptions, setDepartmentsOptions] = useState([{ label: "Loading...", value: "" }])
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

    useEffect(() => {
        if (Departments?.data.length) {
            setDepartmentsOptions(
                Departments?.data.map(ele => {
                    return {
                        label: ele.name,
                        value: ele.id,
                    }
                })
            );
        }
    }, [Departments, isGetDepartmentsLoading])

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
        department_id: formSchema.mixed,
        hours: formSchema.text,
        course_for: formSchema.text,
        profile_picture: formSchema.mixed,
        learning_details: formSchema.text,
        content: formSchema.text,
        requirements: formSchema.text,
    };

    const initialValues = {
        name: "",
        price: "",
        profile_picture: "",
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
                        {
                            type != "teacher" &&
                            <Button onClick={() => {
                                setAdd(_ => !_)
                            }}>Add Course</Button>
                        }
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
                                        <p className='whitespace-nowrap'>Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isGetCoursesLoading ? courses?.data.map((ele, i) => {
                                    return <>
                                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                                            <td className="w-4 p-4">
                                                <code className='whitespace-nowrap bg-gray-50 px-1 border rounded-md'>{ele.course_id}</code>
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
                                            {
                                                type != "teacher" ?
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
                                                    :
                                                    <td className='px-6 py-4'>
                                                        <div className='cursor-pointer' onClick={() => {
                                                            setView({ open: true, data: ele })
                                                        }}>
                                                            <Svgs.Eye />
                                                        </div>
                                                    </td>
                                            }
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
            {
                type == "teacher" && <Popup heading={"Course Details"} open={View.open} close={setView} onclose={() => {
                    setView({ open: false, data: "" })
                }}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Name</h1>
                            <p className='text-sm'>{View?.data?.name}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Price</h1>
                            <p className='text-sm'>{View?.data?.price}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Course id</h1>
                            <p className='text-sm'>{View?.data?.course_id}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Hours</h1>
                            <p className='text-sm'>{View?.data?.hours}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Department</h1>
                            <p className='text-sm'>{View?.data?.department?.name}</p>
                        </div>
                        <div className='flex flex-col gap-4 col-span-2'>
                            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                                <h1>Content</h1>
                                <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.content }}></p>
                            </div>
                            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                                <h1>Course For</h1>
                                <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.course_for }}></p>
                            </div>
                            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                                <h1>Learning Details</h1>
                                <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.learning_details }}></p>
                            </div>
                            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                                <h1>Requirements</h1>
                                <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.requirements }}></p>
                            </div>
                        </div>
                    </div>
                </Popup>
            }
            <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
                setUpdate({ id: "", isOpen: false })
                form.resetForm();
            }} heading={`${Update.isOpen ? "Update" : 'Add'} Course`}>
                <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                    <Input form={form} placeholder="Enter Name" name={"name"} label={'Name'} />
                    <Input form={form} placeholder="Enter Price" name={"price"} label={'Price'} />
                    <Dropdown
                        onChange={(value) => {
                            form.setFieldValue("department_id", value.value)
                        }}
                        value={DepartmentsOptions.filter(item => item.value == form.values.department_id)}
                        placeholder={"Enter Department"}
                        title={"Department"}
                        name={"department_id"}
                        error={form.errors.department_id}
                        options={DepartmentsOptions}
                    />
                    <Input form={form} placeholder="Enter Hours" name={"hours"} type={"number"} label={'Hours'} />
                    <Input form={form} placeholder="Enter Who this course is for" name={"course_for"} label={'Who this course is for'} />
                    <div className='col-span-2'>
                        <Textarea form={form} placeholder="Enter Requirements" name={"requirements"} label={'Requirements'} />
                    </div>
                    <div className='col-span-2'>
                        <Textarea form={form} placeholder="Enter What you'll learn" name={"learning_details"} label={'What youll learn'} />
                    </div>
                    <div className='col-span-2'>
                        <Textarea form={form} placeholder="Enter Course content" name={"content"} label={'Course content'} />
                    </div>
                    <FileInput form={form} label={'Thumbnail'} name={"profile_picture"} />
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