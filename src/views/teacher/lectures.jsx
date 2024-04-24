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
        toast.success("Lectures Deleted Successfully");
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
                {[1, 1, 1, 1, 1, 1, 1].map((ele, i) => {
                  return <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <td className="w-4 p-4">
                      {i + 1}
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Title
                    </th>
                    <td className="px-6 py-4">
                      Video
                    </td>
                    <td className="px-6 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id dictum turpis. Aenean vitae sem sit.
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
    </>
  )
}

export default Lectures