import Popup from 'components/common/elements/popup'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import useCustomFormik from 'form'
import { formSchema } from 'form/formSchema'
import { useAddDepartmentMutation } from 'api/department/add'
import { useGetDepartmentQuery } from 'api/department/get'
import { useDeleteDepartmentMutation } from 'api/department/delete'
import { useGetDepartmentsQuery } from 'api/department/get'
import Dropdown from 'components/common/atoms/dropdown'
import FileInput from 'components/common/atoms/fileInput'
import SmallLoader from 'components/common/elements/loaders/small-loader'

const Departments = ({ type }) => {
    const [Add, setAdd] = useState(false);
    const [Delete, setDelete] = useState({ isOpen: false, id: '' });
    const [Update, setUpdate] = useState({ isOpen: false, id: '', department: null }); // Update to include department object

    const { mutate, isLoading } = useAddDepartmentMutation();
    const { mutate: deleteDepartment, isLoading: isDeleteDepartmentLoading } = useDeleteDepartmentMutation();
    const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();

    const [DepartmentsOptions, setDepartmentsOptions] = useState([{ label: "Loading...", value: "" }])
    const deleteDepartmentFn = (id) => {
        deleteDepartment(id, {
            onSuccess: () => {
                setDelete({ isOpen: false, id: '' });
                refetchDepartments();
            }
        });
    }

    useEffect(() => {
        if (Update.isOpen && Update.department) {
            form.setValues(Update.department);
        }
    }, [Update.isOpen, Update.department]);

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
                setUpdate({ isOpen: false, id: '', department: null });
                form.resetForm();
                refetchDepartments();
            },
        });
    };

    const validationSchema = {
        name: formSchema.text,
        content: formSchema.text,
        department_details: formSchema.mixed,
        // profile_picture: formSchema.text,
    };

    const initialValues = {
        name: "",
        content: "",
        department_details: "",
        profile_picture: "",
    };
    const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
    return (
        <>
            <DashboardContainer active="Department">
                <div className="flex flex-col gap-5">
                    <div className='flex items-center gap-3 justify-between'>
                        <h1 className="text-2xl">Departments</h1>
                        <Button onClick={() => {
                            setAdd(_ => !_)
                        }}>Add Department</Button>
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
                                        <p className='whitespace-nowrap'>Content</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Department Details</p>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <p className='whitespace-nowrap'>Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isGetDepartmentsLoading ? Departments?.data.map((ele, i) => {
                                    return <>
                                        <tr className="bg-white border-b  ">
                                            <td className="w-4 p-4">
                                                {ele.id}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {ele.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {ele.content}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ele.department_details}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className='flex items-center gap-3 cursor-pointer'>
                                                    <div onClick={() => {
                                                        setUpdate({ isOpen: true, id: ele.id, department: ele })
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
                                }) : ""}
                            </tbody>
                        </table>
                        {isGetDepartmentsLoading && <SmallLoader />}
                    </div>
                    {/* <Pagginaton /> */}
                </div>
            </DashboardContainer>
            <Popup size={'md'} open={Delete.isOpen} close={setDelete} onclose={() => {
                setDelete({ id: "", isOpen: false })
            }} heading={'Delete department?'}>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Are you sure you want to delete this department?</p>
                    <div className='flex items-center justify-end gap-3'>
                        <Button className={"bg-gray-200 !text-black"} onClick={() => {
                            setDelete({ id: "", isOpen: false })
                        }}>Cancel</Button>
                        <Button isLoading={isDeleteDepartmentLoading} className={"bg-red-500 text-white"} onClick={() => {
                            deleteDepartmentFn(Delete.id)
                        }}>Delete</Button>
                    </div>
                </div>
            </Popup>
            <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
                setUpdate({ id: "", isOpen: false })
                form.resetForm();
            }} heading={`${Update.isOpen ? "Update" : 'Add'} Department`}>
                <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                    <Input form={form} placeholder="Enter Name" name={"name"} label={'Name'} />
                    <Input form={form} placeholder="Enter Department content" name={"content"} label={'Department content'} />
                    <FileInput form={form} label={'Thumbnail'} name={"profile_picture"} />
                    <Input form={form} placeholder="Enter Department Details" name={"department_details"} label={'Department Details'} />
                    <div>
                        <Button isLoading={isLoading} type={"submit"}>{Update.isOpen ? "Update" : 'Add'} Department</Button>
                    </div>
                </form>
            </Popup>
        </>
    )
}

export default Departments