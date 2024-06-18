import Button from 'components/common/atoms/button'
import Popup from 'components/common/elements/popup'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import Input from 'components/common/atoms/input'
import { formSchema, validaition_message } from 'form/formSchema'
import useCustomFormik from 'form'
import { useAddTeachersMutation } from 'api/teacher/add'
import { useDeleteTeachersMutation } from 'api/teacher/delete'
import { useGetTeachersQuery } from 'api/teacher/get'
import Dropdown from 'components/common/atoms/dropdown'
import { useGetDepartmentsQuery } from 'api/department/get'
import { BASE_URL_IMG, roles } from 'data/api'
import FileInput from 'components/common/atoms/fileInput'
import * as Yup from 'yup';
import { useGetCourseQuery } from 'api/courses/get'
import SmallLoader from 'components/common/elements/loaders/small-loader'
import { CSVExport } from 'api/common'

const Teachers = () => {
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState({ isOpen: false, id: '' });
  const [Update, setUpdate] = useState({ isOpen: false, id: '', Teacher: null });

  const { mutate, isLoading } = useAddTeachersMutation();
  const { data: Teachers, isLoading: isGetTeachersLoading, refetch: refetchTeachers } = useGetTeachersQuery();
  const { mutate: deleteTeacher, isLoading: isDeleteTeacherLoading } = useDeleteTeachersMutation();
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



  const deleteTeacherFn = (id) => {
    deleteTeacher(id, {
      onSuccess: () => {
        setDelete({ isOpen: false, id: '' });
        refetchTeachers();
      }
    });
  }

  useEffect(() => {
    if (Update.isOpen && Update.Teacher) {
      form.setValues(Update.Teacher);
      form.setFieldValue("role_type", roles.teacher.name)
      form.setFieldValue("role_type_id", roles.teacher.id)
    }
  }, [Update.isOpen, Update.Teacher]);

  const onSubmit = async (values) => {
    console.log(form.values, "form.values.profile_picture");
    await mutate({ type: Update.isOpen ? "UPDATE" : "ADD", data: values, id: Update.id }, {
      onSuccess: () => {
        setAdd(false);
        setUpdate({ isOpen: false, id: '', Teacher: null });
        form.resetForm();
        refetchTeachers();
      },
    });
  };


  const validationSchema = {
    "name": formSchema.text,
    "department_id": formSchema.text,
    "address": formSchema.text,
    "phone_no": formSchema.phone_number,
    "age": formSchema.number,
    "email": formSchema.email,
    "profile_picture": formSchema.text,
    "role_type_id": formSchema.text,
    "role_type": formSchema.text,
  };

  const initialValues = {
    "name": "",
    "department_id": "",
    "address": "",
    "phone_no": "",
    "age": "",
    "email": "",
    "profile_picture": "",
    "password": "",
    "role_type": roles.teacher.name,
    "role_type_id": roles.teacher.id,
  };

  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
  return (
    <>
      <DashboardContainer active="Teachers">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Teachers</h1>
            <div className='flex items-center gap-2'>
              <Button onClick={() => {
                setAdd(!Add)
              }}>Add Teacher</Button>
              <CSVExport data={Teachers?.data} filename='teachers-data.csv' />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      Id
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  isGetTeachersLoading ? (
                    ""
                  ) : (
                    Teachers?.data?.map((ele, i) => (
                      <tr key={ele.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="w-4 p-4">
                          <code className='whitespace-nowrap bg-gray-50 px-1 border rounded-md'>{ele.teacher_id}</code>
                        </td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <div className='flex items-center gap-2'>
                            <div className='h-[2.5rem] w-[2.5rem]'>
                              <img src={`${BASE_URL_IMG}${ele?.profile_picture}`} className='border w-full h-full object-contain rounded-full' />
                            </div>
                            <p>{ele.name}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">{ele.age}</td>
                        <td className="px-6 py-4">{ele.email}</td>
                        <td className="px-6 py-4">{ele.address}</td>
                        <td className="px-6 py-4">{ele.phone_no}</td>
                        <td className="px-6 py-4">{ele.department.name}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 cursor-pointer">
                            <div onClick={() => {
                              setUpdate({ isOpen: true, id: ele.id, Teacher: ele })
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
                    ))
                  )
                }

              </tbody>
            </table>
            {isGetTeachersLoading && <SmallLoader />}
          </div>
        </div>
      </DashboardContainer>
      <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
        setUpdate({ id: "", isOpen: false })
        form.resetForm();
      }} heading={`${Update.isOpen ? "Update" : 'Add'} Teacher`}>
        <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
          <Input form={form} name={"name"} placeholder="Enter Name" label={'Name'} />
          <Input form={form} name={"address"} placeholder="Enter Address" label={'Address'} />
          <Input form={form} type={"tel"} name={"phone_no"} placeholder="Enter Phone no." label={'Phone no.'} />
          <Input form={form} type={"number"} name={"age"} placeholder="Enter Age" label={'Age'} />
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
          <Dropdown
            onChange={(value) => {
              console.log(value.map(ele => ele.value), "valuevalue");
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
          <Input form={form} type="email" name={"email"} placeholder="Enter Email" label={'Email'} />
          <Input form={form} name={"password"} placeholder="Enter Password" label={'Password'} type={'password'} />
          <FileInput form={form} label={'Profile Picture'} name={"profile_picture"} />
          <div></div>
          <div>
            <Button type={'submit'}>{Update.isOpen ? "Update" : 'Add'} Teacher</Button>
          </div>
        </form>
      </Popup>
      <Popup size={'md'} open={Delete.isOpen} close={setDelete} onclose={() => {
        setDelete({ id: "", isOpen: false })
      }} heading={'Delete Teacher?'}>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Are you sure you want to delete this Teacher?</p>
          <div className='flex items-center justify-end gap-3'>
            <Button className={"bg-gray-200 !text-black"} onClick={() => {
              setDelete({ id: "", isOpen: false })
            }}>Cancel</Button>
            <Button isLoading={isDeleteTeacherLoading} className={"bg-red-500 text-white"} onClick={() => {
              deleteTeacherFn(Delete.id)
            }}>Delete</Button>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Teachers