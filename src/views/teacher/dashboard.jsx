import DashboardContainer from 'components/layout/dashboard-container';
import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Dashboard = () => {
  const dummy = [
    {
      title: "Total Students",
      value: "50055"
    },
    {
      title: "Total Professors",
      value: "50055"
    },
    {
      title: "Total Courses",
      value: "50055"
    },
    {
      title: "Fee Collection",
      value: "50055"
    },
  ]
  return (
    <DashboardContainer routeType={'teacher'} active="Home">
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>Home</h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-3'>
          {
            dummy.map(ele => {
              return <div className='bg-white px-4 py-3 rounded-md'>
                <p className='text-sm text-[#666666]'>{ele.title}</p>
                <p className='font-bold mt-1.5'>{ele.value}</p>
              </div>
            })
          }
        </div>
        <div className='bg-white rounded-md px-4 py-3'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'Event 1', date: '2024-03-17' },
              { title: 'Event 2', date: '2024-03-18' }
            ]}
          />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard