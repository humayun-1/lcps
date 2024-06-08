import { useGetcontactQuery } from 'api/contact/get';
import SmallLoader from 'components/common/elements/loaders/small-loader';
import DashboardContainer from 'components/layout/dashboard-container'
import React, { useState } from 'react'

const Contact = () => {
    const { data: Contact, isLoading: isGetContactLoading, refetch: refetchContact } = useGetcontactQuery();
    const [View, setView] = useState({ open: false, data: "" });
    console.log(Contact, "Contact");
    return (
        <DashboardContainer active={"Contact"}>
            <div className="flex flex-col gap-5">
                <div className='flex items-center gap-3 justify-between'>
                    <h1 className="text-2xl">Contact Us Queries</h1>
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
                                    <p className='whitespace-nowrap'>Email</p>
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    <p className='whitespace-nowrap'>Phone</p>
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    <p className='whitespace-nowrap'>Message</p>
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    <p className='whitespace-nowrap'>Action</p>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {!isGetContactLoading ? Contact?.data.map((ele, i) => {
                                return <>
                                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                                        <td className="w-4 p-4">
                                            <code className='whitespace-nowrap bg-gray-50 px-1 border rounded-md'>{ele.id}</code>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {ele.first_name} {ele.last_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {ele.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {ele.message}
                                        </td>
                                        {/* <td className='px-6 py-4'>
                                            <div className='cursor-pointer' onClick={() => {
                                                setView({ open: true, data: ele })
                                            }}>
                                                <Svgs.Eye />
                                            </div>
                                        </td> */}
                                    </tr>
                                </>
                            }) : ""}
                        </tbody>
                    </table>
                    {isGetContactLoading && <SmallLoader />}
                </div>
                {/* <Pagginaton /> */}
            </div>

            {/* <Popup heading={"Course Details"} open={View.open} close={setView} onclose={() => {
                setView({ open: false, data: "" })
            }}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                        <h1>Name</h1>
                        <p className='text-sm'>{View?.data?.name}</p>
                    </div>
                    <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                        <h1>Price</h1>
                        <p className='text-sm'>{View?.data?.price}</p>
                    </div>
                    <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                        <h1>Course id</h1>
                        <p className='text-sm'>{View?.data?.course_id}</p>
                    </div>
                    <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                        <h1>Hours</h1>
                        <p className='text-sm'>{View?.data?.hours}</p>
                    </div>
                    <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                        <h1>Department</h1>
                        <p className='text-sm'>{View?.data?.department?.name}</p>
                    </div>
                    <div className='flex flex-col gap-4 col-span-2'>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Content</h1>
                            <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.content }}></p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Course For</h1>
                            <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.course_for }}></p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Learning Details</h1>
                            <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.learning_details }}></p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Requirements</h1>
                            <p className='text-sm' dangerouslySetInnerHTML={{ __html: View?.data?.requirements }}></p>
                        </div>
                    </div>
                </div>
            </Popup> */}
        </DashboardContainer>
    )
}

export default Contact