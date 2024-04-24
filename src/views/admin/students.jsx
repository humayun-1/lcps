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


const Students = ({ type }) => {
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState({ isOpen: false, id: '' });
  const [Update, setUpdate] = useState({ isOpen: false, id: '', Students: null });

  const { mutate, isLoading } = useAddStudentsMutation();
  const { data: Students, isLoading: isGetStudentsLoading, refetch: refetchStudents } = useGetStudentsQuery();
  const { mutate: deleteStudents, isLoading: isDeleteStudentsLoading } = useDeleteStudentsMutation();

  const deleteStudentsFn = (id) => {
    deleteStudents(id, {
      onSuccess: () => {
        setDelete({ isOpen: false, id: '' });
        toast.success("Students Deleted Successfully");
        refetchStudents();
      }
    });
  }

  useEffect(() => {
    if (Update.isOpen && Update.Students) {
      form.setValues(Update.Students);
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
    student_id: formSchema.text,
    department_id: formSchema.text,
    phone_no: formSchema.text,
    email: formSchema.text,
    profile_picture: formSchema.text,
    course_id: formSchema.text,
    role_type: formSchema.text,
    role_type_id: formSchema.text,
    password: formSchema.password,
  }
  const initialValues = {
    name: "",
    address: "",
    student_id: "",
    department_id: "",
    phone_no: "",
    email: "",
    profile_picture: "",
    course_id: "",
    role_type: "student",
    role_type_id: "3",
    password: "",
  }

  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
  return (
    <>
      <DashboardContainer routeType={type == "teacher" ? "teacher" : "admin"} active="Students">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Students</h1>
            <Button onClick={() => {
              setAdd(!Add)
            }}>Add Student</Button>
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
                {!isGetStudentsLoading ? Students?.data.map((ele, i) => {
                  return <tr className="bg-white border-b  hover:bg-gray-50 ">
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
                }) : <tr><td>Loading ...</td></tr>}
              </tbody>
            </table>
          </div>
          {/* <Pagginaton /> */}
        </div>
      </DashboardContainer>
      <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
        setUpdate({ id: "", isOpen: false })
      }} heading={`${Update.isOpen ? "Update" : 'Add'} Student`}>
        <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
          <Input form={form} placeholder="Enter Name" label={'Name'} name={"name"} />
          <Input form={form} placeholder="Enter Address" label={'Address'} name={"address"} />
          <Input form={form} placeholder="Enter ID" label={'ID'} name={"student_id"} />
          <Input form={form} placeholder="Enter Department" label={'Department'} name={"department_id"} />
          <Input form={form} placeholder="Enter phone no." label={'phone no.'} name={"phone_no"} />
          <Input form={form} placeholder="Enter Age" label={'Age'} name={"age"} />
          <Input form={form} placeholder="Enter email" label={'email'} name={"email"} />
          <Input form={form} placeholder="Enter Profile picture" label={'Profile picture'} type={'file'} name={"profile_picture"} />
          <Input form={form} placeholder="Enter Courses" label={'Courses'} type={"number"} name={"course_id"} />
          <Input form={form} placeholder="Enter Password" label={'Password'} name={"password"} type={"password"} />
          <div>
            <Button type={'submit'} isLoading={isLoading}>Add Student</Button>
          </div>
        </form>
      </Popup>

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