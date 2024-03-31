import React, { useState } from 'react'
import Svgs from 'svgs'
import DashboardContainer from 'components/layout/dashboard-container'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import Popup from 'components/common/elements/popup'

const Students = () => {
  const [Add, setAdd] = useState(false)
  return (
    <>
      <DashboardContainer routeType={'teacher'} active="Students">
        <div className="flex flex-col gap-5">
          <div className='flex items-center gap-3 justify-between'>
            <h1 className="text-2xl">Students</h1>
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
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Assignments
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
                      Name
                    </th>
                    <td className="px-6 py-4">
                      Id
                    </td>
                    <td className="px-6 py-4">
                      EMAIL
                    </td>
                    <td className="px-6 py-4">
                      Department
                    </td>
                    <td className="px-6 py-4">
                      Course
                    </td>
                    <td className="px-6 py-4">
                      <Button onClick={() => {
                        setAdd(_ => !_)
                      }} className={'!py-1.5 !text-xs'}>View</Button>
                    </td>
                    <td className="px-6 py-4">
                      <Button className={'!py-1.5 !px-3 !text-xs'}>
                        <select className='bg-transparent border-none outline-none'>
                          <option className='text-black' value="1">Pass</option>
                          <option className='text-black' value="2">Fail</option>
                        </select>
                      </Button>
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
      <Popup size={'md'} open={Add} close={setAdd} heading={'Assignemnts'}>
        <div className='grid grid-cols-2 gap-4'>
          {
            [1, 2, 3, 4, 5, 6].map(ele => {
              return <div className='flex flex-col gap-2'>
                <p className='font-semibold'>{ele}. Intro to Computer Science</p>
                <div className='flex items-center gap-2'>
                  <Button>Download</Button>
                  <Button className={"bg-transparent border !border-[#0053a5] !text-[#0053a5]"}>View</Button>
                </div>
              </div>
            })
          }

        </div>
      </Popup>
    </>

  )
}

export default Students