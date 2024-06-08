import DashboardContainer from 'components/layout/dashboard-container';
import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useGetAnalyticsDataQuery } from 'api/analytics';
import SmallLoader from 'components/common/elements/loaders/small-loader';

const Dashboard = () => {
  const { data: Analytics, isLoading: isGetAnalyticsLoading, refetch: refetchAnalytics } = useGetAnalyticsDataQuery();
  return (
    isGetAnalyticsLoading ? <SmallLoader /> : <DashboardContainer routeType={'teacher'} active="Home">
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>Home</h1>
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-3'>
          <div className="bg-white px-4 py-3 rounded-md">
            <p className="text-sm text-[#666666]">Total Students</p>
            <p className="font-bold mt-1.5">{Analytics.studentsCount}</p>
          </div>
          <div className="bg-white px-4 py-3 rounded-md">
            <p className="text-sm text-[#666666]">Total Professors</p>
            <p className="font-bold mt-1.5">{Analytics.professorsCount}</p>
          </div>
          <div className="bg-white px-4 py-3 rounded-md">
            <p className="text-sm text-[#666666]">Total Courses</p>
            <p className="font-bold mt-1.5">{Analytics.coursesCount}</p>
          </div>
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