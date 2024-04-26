import Popup from 'components/common/elements/popup'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Textarea from 'components/common/atoms/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useEffect, useState } from 'react'
import Svgs from 'svgs'
import { formSchema } from 'form/formSchema'
import useCustomFormik from 'form'
import { useGetLecturesQuery } from 'api/lectures/get'
import { useDeleteLectureMutation } from 'api/lectures/delete'
import { useAddLecturesMutation } from 'api/lectures/add'
import { toast } from 'react-hot-toast'

const Lectures = () => {
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState({ isOpen: false, id: '' });
  const [Update, setUpdate] = useState({ isOpen: false, id: '', Lectures: null });

  const { mutate, isLoading } = useAddLecturesMutation();
  const { data: Lectures, isLoading: isGetLecturesLoading, refetch: refetchLectures } = useGetLecturesQuery();
  const { mutate: deleteLectures, isLoading: isDeleteLecturesLoading } = useDeleteLectureMutation();

  const deleteLecturesFn = (id) => {
    deleteLectures(id, {
      onSuccess: () => {
        setDelete({ isOpen: false, id: '' });
        refetchLectures();
      }
    });
  }

  useEffect(() => {
    if (Update.isOpen && Update.Lectures) {
      form.setValues(Update.Lectures);
    }
  }, [Update.isOpen, Update.Lectures]);

  const onSubmit = async (values) => {
    console.log(values);
    await mutate({ type: Update.isOpen ? "UPDATE" : "ADD", data: values, id: Update.id }, {
      onSuccess: () => {
        setAdd(false);
        setUpdate({ isOpen: false, id: '', Lectures: null });
        form.resetForm();
        refetchLectures();
      },
    });
  };

  const validationSchema = {
    title: formSchema.text,
    course_id: formSchema.text,
    video: formSchema.text,
    assignment: formSchema.text,
  }
  const initialValues = {
    title: "",
    course_id: "",
    video: "",
    assignment: "",
  }

  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });
  return (
    <>
      <DashboardContainer routeType={"teacher"} active="Lectures">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Lectures</h1>
            <Button onClick={() => {
              setAdd(!Add)
            }}>Add Lecture</Button>
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
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Video
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Assignment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  !isGetLecturesLoading ?
                    Lectures?.data?.map((ele, i) => {
                      return <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                          {i + 1}
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          {ele?.title}
                        </th>
                        <td className="px-6 py-4">
                          {ele?.video}
                        </td>
                        <td className="px-6 py-4">
                          {ele?.assignment}
                        </td>
                        <td className="px-6 py-4">
                          <div className='flex items-center gap-3 cursor-pointer'>
                            <div onClick={() => {
                              setUpdate({ isOpen: true, id: ele.id, Lectures: ele })
                            }}>
                              <Svgs.Edit />
                            </div>
                            <div className="cursor-pointer" onClick={() => {
                              setDelete({ isOpen: true, id: ele.id })
                            }}>
                              <Svgs.Delete />
                            </div>
                          </div>
                        </td>
                      </tr>
                    }) : "Loading ..."
                }
              </tbody>
            </table>
          </div>
        </div>
      </DashboardContainer>
      <Popup open={Add || Update.isOpen} close={setAdd} onclose={() => {
        setUpdate({ id: "", isOpen: false })
      }} heading={`${Update.isOpen ? "Update" : 'Add'} Lecture`}>
        <form onSubmit={form.handleSubmit} className='grid grid-cols-2 gap-4'>
          <Input form={form} name={"title"} placeholder="Enter Title" label={'Title'} />
          <Input form={form} name={"course_id"} placeholder="Enter Course" label={'Course'} type={"number"} />
          <Input form={form} name={"video"} placeholder="Enter video" label={'video'} type={"url"} />
          {/* <Input form={form} name={"video"} className={'!py-[0.47rem]'} placeholder="Video Upload" type="file" label={'Video'} /> */}
          <div className='col-span-2'>
            <Textarea form={form} name={"assignment"} placeholder="Enter Assignment" label={'Assignment'} />
          </div>
          <div>
            <Button type={'submit'} isLoading={isLoading}>Add Lecture</Button>
          </div>
        </form>
      </Popup>
      <Popup size={'md'} open={Delete.isOpen} close={setDelete} onclose={() => {
        setDelete({ id: "", isOpen: false })
      }} heading={'Delete Lectures?'}>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Are you sure you want to delete this Lectures?</p>
          <div className='flex items-center justify-end gap-3'>
            <Button className={"bg-gray-200 !text-black"} onClick={() => {
              setDelete({ id: "", isOpen: false })
            }}>Cancel</Button>
            <Button isLoading={isDeleteLecturesLoading} className={"bg-red-500 text-white"} onClick={() => {
              deleteLecturesFn(Delete.id)
            }}>Delete</Button>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Lectures