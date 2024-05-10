import Popup from 'components/common/elements/popup'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import { formSchema } from 'form/formSchema'
import useCustomFormik from 'form'
import { useGetStudentsQuery } from 'api/student/get'
import { useDeleteStudentsMutation } from 'api/student/delete'
import { useAddStudentsMutation } from 'api/student/add'
import { toast } from 'react-hot-toast'
import Pagginaton from 'components/common/elements/pagginaton';
import { roles } from 'data/api'
import Dropdown from 'components/common/atoms/dropdown'
import { useGetDepartmentsQuery } from 'api/department/get'
import { useGetCourseQuery } from 'api/courses/get'
import FileInput from 'components/common/atoms/fileInput'
import Toggle from 'components/common/atoms/toggle'


const Students = ({ type }) => {
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState({ isOpen: false, id: '' });
  const [Update, setUpdate] = useState({ isOpen: false, id: '', Students: null });
  const [View, setView] = useState({ open: false, data: {} });

  const { mutate, isLoading } = useAddStudentsMutation();
  const { data: Students, isLoading: isGetStudentsLoading, refetch: refetchStudents } = useGetStudentsQuery();
  const { mutate: deleteStudents, isLoading: isDeleteStudentsLoading } = useDeleteStudentsMutation();
  const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();
  const { data: Courses, isLoading: isGetCoursesLoading, refetch: refetchCourses } = useGetCourseQuery();

  const [DepartmentsOptions, setDepartmentsOptions] = useState([{ label: "Loading...", value: "" }])
  const [CoursesOptions, setCoursesOptions] = useState([{ label: "Loading...", value: "" }])

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
  const deleteStudentsFn = (id) => {
    deleteStudents(id, {
      onSuccess: () => {
        setDelete({ isOpen: false, id: '' });
        refetchStudents();
      }
    });
  }

  useEffect(() => {
    if (Update.isOpen && Update.Students) {
      form.setValues(Update.Students);
      form.setFieldValue("role_type", roles.student.name)
      form.setFieldValue("role_type_id", roles.student.id)
    }
  }, [Update.isOpen, Update.Students]);

  const onSubmit = async (values) => {
    console.log(values);
    await mutate({ type: Update.isOpen ? "UPDATE" : "ADD", data: values, id: Update.id }, {
      onSuccess: () => {
        setAdd(false);
        setUpdate({ isOpen: false, id: '', Students: null });
        form.resetForm();
        refetchStudents();
      },
    });
  };

  const validationSchema = {
    name: formSchema.text,
    address: formSchema.text,
    department_id: formSchema.text,
    phone_no: formSchema.text,
    email: formSchema.text,
    profile_picture: formSchema.text,
    role_type: formSchema.text,
    role_type_id: formSchema.text,
  }
  const initialValues = {
    name: "",
    address: "",
    department_id: "",
    phone_no: "",
    email: "",
    profile_picture: "",
    course_id: "",
    role_type: roles.student.name,
    role_type_id: roles.student.id,
    password: "",
  }
  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
  console.log(form.errors);
  return (
    <>
      <DashboardContainer routeType={type == "teacher" ? "teacher" : "admin"} active="Students">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Students</h1>
            {
              type != "teacher" && <Button onClick={() => {
                setAdd(!Add)
              }}>Add Student</Button>
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
                    <p className='whitespace-nowrap'>Email</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className='whitespace-nowrap'>Address</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className='whitespace-nowrap'>Phone No.</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className='whitespace-nowrap'>Status</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p className='whitespace-nowrap'>Action</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!isGetStudentsLoading ? Students?.data.map((ele, i) => {
                  return <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <td className="w-4 p-4">
                      <code className='whitespace-nowrap bg-gray-50 px-1 border rounded-md'>{ele.student_id}</code>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {ele.name}
                    </th>
                    <td className="px-6 py-4">
                      {ele.id}
                    </td>
                    <td className="px-6 py-4">
                      {ele.email}
                    </td>
                    <td className="px-6 py-4">
                      {ele.address}
                    </td>
                    <td className="px-6 py-4">
                      {ele.phone_no}
                    </td>
                    <td className="px-6 py-4">
                      {ele.status}
                    </td>
                    {
                      type != "teacher" ?
                        <td className="px-6 py-4">
                          <div className='flex items-center gap-3 cursor-pointer'>
                            <div onClick={() => {
                              setUpdate({ isOpen: true, id: ele.id, Students: ele })
                            }}>
                              <Svgs.Edit />
                            </div>
                            <div onClick={() => {
                              setDelete({ isOpen: true, id: ele.id })
                            }}>
                              <Svgs.Delete />
                            </div>
                          </div>
                        </td> : <td className='px-6 py-4'>
                          <div className='cursor-pointer' onClick={() => {
                            setView({ open: true, data: ele })
                          }}>
                            <Svgs.Eye />
                          </div>
                        </td>
                    }
                  </tr>
                }) : <tr><td>Loading ...</td></tr>}
              </tbody>
            </table>
          </div>
          {/* <Pagginaton /> */}
        </div>
      </DashboardContainer>
      <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
        setUpdate({ id: "", isOpen: false })
        form.resetForm();
      }} heading={`${Update.isOpen ? "Update" : 'Add'} Student`}>
        <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
          <Input form={form} placeholder="Enter Name" label={'Name'} name={"name"} />
          <Input form={form} placeholder="Enter Address" label={'Address'} name={"address"} />
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
          <Input form={form} placeholder="Enter phone no." label={'phone no.'} name={"phone_no"} />
          <Input form={form} type={'number'} placeholder="Enter Age" label={'Age'} name={"age"} />
          <Input form={form} placeholder="Enter email" label={'email'} name={"email"} />
          <Dropdown
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
          />
          <Input form={form} placeholder="Enter Password" label={'Password'} name={"password"} type={"password"} />
          <FileInput form={form} label={'Profile Picture'} name={"profile_picture"} />
          <div></div>
          <div>
            <Button type={'submit'} isLoading={isLoading}>Add Student</Button>
          </div>
        </form>
      </Popup>

      {
        type == "teacher" && <Popup heading={"Student Details"} open={View.open} close={setView} onclose={() => {
          setView({ open: false, data: "" })
        }}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Id</h1>
              <p className='text-sm'>{View?.data?.student_id}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Name</h1>
              <p className='text-sm'>{View?.data?.name}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Address</h1>
              <p className='text-sm'>{View?.data?.address}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Age</h1>
              <p className='text-sm'>{View?.data?.age}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Email</h1>
              <p className='text-sm'>{View?.data?.email}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Department</h1>
              <p className='text-sm'>{View?.data?.department?.name}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Phone No.</h1>
              <p className='text-sm'>{View?.data?.phone_no}</p>
            </div>
            <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
              <h1>Status</h1>
              <p className='text-sm'>{View?.data?.status}</p>
            </div>
          </div>
        </Popup>
      }

      <Popup size={'md'} open={Delete.isOpen} close={setDelete} onclose={() => {
        setDelete({ id: "", isOpen: false })
      }} heading={'Delete Student?'}>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Are you sure you want to delete this Student?</p>
          <div className='flex items-center justify-end gap-3'>
            <Button className={"bg-gray-200 !text-black"} onClick={() => {
              setDelete({ id: "", isOpen: false })
            }}>Cancel</Button>
            <Button isLoading={isDeleteStudentsLoading} className={"bg-red-500 text-white"} onClick={() => {
              deleteStudentsFn(Delete.id)
            }}>Delete</Button>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Students