import Button from 'components/common/atoms/button'
import Popup from 'components/common/elements/popup'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import Input from 'components/common/atoms/input'
import { formSchema } from 'form/formSchema'
import useCustomFormik from 'form'
import { useAddTeachersMutation } from 'api/teacher/add'
import { useDeleteTeachersMutation } from 'api/teacher/delete'
import { useGetTeachersQuery } from 'api/teacher/get'

const Professors = () => {
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState({ isOpen: false, id: '' });
  const [Update, setUpdate] = useState({ isOpen: false, id: '', Teacher: null });

  const { mutate, isLoading } = useAddTeachersMutation();
  const { data: Teachers, isLoading: isGetTeachersLoading, refetch: refetchTeachers } = useGetTeachersQuery();
  const { mutate: deleteTeacher, isLoading: isDeleteTeacherLoading } = useDeleteTeachersMutation();

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
    }
  }, [Update.isOpen, Update.Teacher]);

  const onSubmit = async (values) => {
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
    "address": formSchema.text,
    "phone_no": formSchema.number,
    "age": formSchema.number,
    "department_id": formSchema.number,
    "email": formSchema.email,
    "course_id": formSchema.number,
    "password": formSchema.text,
    "role_type": formSchema.text,
    "teacher_id": formSchema.text,
  };

  const initialValues = {
    "name": "",
    "address": "",
    "phone_no": "",
    "age": "",
    "department": "",
    "email": "",
    "course": "",
    "password": "",
    "role_type": "teacher",
    "teacher_id": "",
  };

  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });

  console.log(form.errors);
  return (
    <>
      <DashboardContainer active="Professors">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Professors</h1>
            <Button onClick={() => {
              setAdd(!Add)
            }}>Add Professor</Button>
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
                    Teachers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  isGetTeachersLoading ? (
                    <tr>
                      <td>Is Loading...</td>
                    </tr>
                  ) : (
                    Teachers?.data?.map((ele, i) => (
                      <tr key={ele.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="w-4 p-4">{ele.id}</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {ele.name} {/* Render the name property */}
                        </td>
                        <td className="px-6 py-4">{ele.age}</td>
                        <td className="px-6 py-4">{ele.email}</td>
                        <td className="px-6 py-4">{ele.address}</td>
                        <td className="px-6 py-4">{ele.phone_no}</td>
                        <td className="px-6 py-4">{ele.department_id}</td>
                        <td className="px-6 py-4">{ele.teacher_id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 cursor-pointer">
                            <div onClick={() => {
                              setUpdate({ isOpen: true, id: ele.id, course: ele })
                            }}>
                              <Svgs.Edit />
                            </div>
                            <div className="cursor-pointer" onClick={() => deleteTeacherFn(ele.id)}> {/* Pass the ID to the delete function */}
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
      <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
        setUpdate({ id: "", isOpen: false })
      }} heading={`${Update.isOpen ? "Update" : 'Add'} Professor`}>
        <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
          <Input form={form} name={"name"} placeholder="Enter Name" label={'Name'} />
          <Input form={form} name={"address"} placeholder="Enter Address" label={'Address'} />
          <Input form={form} type={"number"} name={"teacher_id"} placeholder="Enter ID" label={'ID'} />
          <Input form={form} type={"number"} name={"phone_no"} placeholder="Enter Phone no." label={'Phone no.'} />
          <Input form={form} type={"number"} name={"age"} placeholder="Enter Age" label={'Age'} />
          <Input form={form} type={"number"} name={"department_id"} placeholder="Enter Department" label={'Department'} />
          <Input form={form} type="email" name={"email"} placeholder="Enter Email" label={'Email'} />
          <Input form={form} type={"number"} name={"course_id"} placeholder="Enter course" label={'Course'} />
          <Input form={form} name={"password"} placeholder="Enter Password" label={'Password'} type={'password'} />
          <div></div>
          <div>
            <Button type={'submit'}>Add Professor</Button>
          </div>
        </form>
      </Popup>
    </>
  )
}

export default Professors