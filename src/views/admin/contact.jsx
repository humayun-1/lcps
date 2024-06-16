import { useGetcontactQuery } from 'api/contact/get';
import SmallLoader from 'components/common/elements/loaders/small-loader';
import Popup from 'components/common/elements/popup';
import DashboardContainer from 'components/layout/dashboard-container';
import React, { useState } from 'react';
import Svgs from 'svgs';

const Contact = () => {
    const { data: Contact, isLoading: isGetContactLoading, refetch: refetchContact } = useGetcontactQuery();
    const [View, setView] = useState({ open: false, data: null });

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
                                <th scope="col" className="px-6 py-3">
                                    <p className='whitespace-nowrap'>Message</p>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <p className='whitespace-nowrap'>Action</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isGetContactLoading && Contact?.data.map((ele, i) => (
                                <tr key={ele.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="w-4 p-4">
                                        <code className='whitespace-nowrap bg-gray-50 px-1 border rounded-md'>{ele.id}</code>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {ele.first_name} {ele.last_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div dangerouslySetInnerHTML={{ __html: ele.message }}></div>
                                    </td>
                                    <td>
                                        <div className='cursor-pointer mx-auto w-fit' onClick={() => setView({ open: true, data: ele })}>
                                            <Svgs.Eye />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isGetContactLoading && <SmallLoader />}
                </div>
            </div>

            <Popup heading={"Contact Details"} open={View.open} close={() => setView({ open: false, data: null })}>
                {View.data && (
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Name</h1>
                            <p className='text-sm'>{View.data.first_name} {View.data.last_name}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md'>
                            <h1>Email</h1>
                            <p className='text-sm'>{View.data.email}</p>
                        </div>
                        <div className='flex flex-col gap-0.5 border p-2 rounded-md col-span-2'>
                            <h1>Message</h1>
                            <p className='text-sm'>{View.data.message}</p>
                        </div>
                    </div>
                )}
            </Popup>
        </DashboardContainer>
    );
};

export default Contact;
