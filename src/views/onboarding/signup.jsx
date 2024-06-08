import React, { useEffect, useState } from 'react'
import Onboarding from 'components/layout/onboarding'
import Input from 'components/common/atoms/input'
import Button from 'components/common/atoms/button'
import useCustomFormik from 'form'
import { useNavigate } from 'react-router-dom'
import { formSchema } from 'form/formSchema'
import { roles } from 'data/api'
import Dropdown from 'components/common/atoms/dropdown'
import FileInput from 'components/common/atoms/fileInput'
import { useAddStudentsMutation } from 'api/student/add'
import { useGetStudentsQuery } from 'api/student/get'
import { useDeleteStudentsMutation } from 'api/student/delete'
import { useGetDepartmentsQuery } from 'api/department/get'
import { useGetCourseWithoutAuthQuery } from 'api/courses/get-without-auth'

const Signup = () => {
    const navigate = useNavigate();
    const { mutate, isLoading, error: error } = useAddStudentsMutation();
    const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();
    const { data: Courses, isLoading: isGetCoursesLoading, refetch: refetchCourses } = useGetCourseWithoutAuthQuery();

    const [DepartmentsOptions, setDepartmentsOptions] = useState([{ label: "Loading...", value: "" }])
    const [CoursesOptions, setCoursesOptions] = useState([{ label: "Loading...", value: "" }]);

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

    useEffect(() => {
        if (Courses?.data.length) {
            setCoursesOptions(
                Courses?.data.map(ele => {
                    return {
                        label: ele.name,
                        value: ele.id,
                    }
                })
            );
        }
    }, [Courses, isGetCoursesLoading])

    const onSubmit = async (values) => {
        console.log(values);
        await mutate({ type: "ADD", data: values, id: "" }, {
            onSuccess: () => {
                form.resetForm();
                navigate("/")
            },
        });
    };
    const validationSchema = {
        name: formSchema.text,
        address: formSchema.text,
        city: formSchema.text,
        country: formSchema.text,
        // department_id: formSchema.text,
        phone_no: formSchema.text,
        email: formSchema.text,
        profile_picture: formSchema.text,
        role_type: formSchema.text,
        role_type_id: formSchema.text,
    }
    const initialValues = {
        name: "",
        city: "",
        country: "",
        address: "",
        // department_id: "",
        phone_no: "",
        email: "",
        profile_picture: "",
        // course_id: "",
        role_type: roles.student.name,
        role_type_id: roles.student.id,
        password: "",
    }

    const form = useCustomFormik({ onSubmit, validationSchema, initialValues })
    return (
        <Onboarding>
            <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
                <div className='col-span-2'>
                    <h1 className='font-extrabold text-3xl'>Signup</h1>
                </div>
                <Input form={form} placeholder="Enter Name" label={'Name'} name={"name"} />
                <Input form={form} placeholder="Enter email" label={'email'} name={"email"} />
                <Input form={form} placeholder="Enter country" label={'country'} name={"country"} />
                <Input form={form} placeholder="Enter city" label={'city'} name={"city"} />
                <Input form={form} placeholder="Enter Address" label={'Address'} name={"address"} />
                {/* <Dropdown
                    onChange={(value) => {
                        form.setFieldValue("department_id", value.value)
                    }}
                    value={DepartmentsOptions.filter(item => item.value == form.values.department_id)}
                    placeholder={"Enter Department"}
                    title={"Department"}
                    name={"department_id"}
                    error={form.errors.department_id}
                    options={DepartmentsOptions}
                /> */}
                <Input form={form} placeholder="Enter phone no." label={'phone no.'} name={"phone_no"} />
                <Input form={form} type={'number'} placeholder="Enter Age" label={'Age'} name={"age"} />
                {/* <Dropdown
                    onChange={(value) => {
                        form.setFieldValue("course_id", JSON.stringify(value.map(ele => ele.value)))
                    }}
                    isMulti={true}
                    value={CoursesOptions.filter(item => form.values?.course_id?.includes(item.value))}
                    placeholder={"Enter Course"}
                    title={"Course"}
                    name={"course_id"}
                    error={form.errors.course_id}
                    options={CoursesOptions}
                /> */}
                <Input form={form} placeholder="Enter Password" label={'Password'} name={"password"} type={"password"} />
                <FileInput form={form} label={'Profile Picture'} name={"profile_picture"} />
                <div></div>
                <div className='col-span-2 flex flex-col gap-2'>
                    <p className='text-sm text-black'>Already have an account? <span className='cursor-pointer underline font-semibold' onClick={() => navigate("/login")}>Log In</span></p>
                    <Button type={'submit'} isLoading={isLoading} className={'w-fit'}>Sign Up</Button>
                </div>
            </form>
        </Onboarding>
    )
}

export default Signup