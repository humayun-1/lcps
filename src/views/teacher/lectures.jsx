import Popup from 'components/common/popup'
import Button from 'components/common/ui/button'
import Input from 'components/common/ui/input'
import Textarea from 'components/common/ui/textarea'
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useState } from 'react'
import Svgs from 'svgs'

const Lectures = () => {
  const [Add, setAdd] = useState(false)
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
      <Popup open={Add} close={setAdd} heading={'Add Lecture'}>
        <div className='grid grid-cols-2 gap-4'>
          <Input placeholder="Enter Name" label={'Name'} />
          <Input className={'!py-[0.47rem]'} placeholder="Video Upload" type="file" label={'Video'} />
          <div className='col-span-2'>
            <Textarea placeholder="Enter Assignment" label={'Assignment'} />
          </div>
          <div>
            <Button>Add Lecture</Button>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Lectures