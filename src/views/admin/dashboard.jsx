import React, { useEffect, useState } from 'react'
import DashboardContainer from 'components/layout/dashboard-container';
import CanvasJSReact from '@canvasjs/react-charts';
import { useGetAnalyticsDataQuery } from 'api/analytics';
import SmallLoader from 'components/common/elements/loaders/small-loader';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
    const { data: Analytics, isLoading: isGetAnalyticsLoading, refetch: refetchAnalytics } = useGetAnalyticsDataQuery();
    const [chartDataPoints, setChartDataPoints] = useState([])
    useEffect(() => {
        if (Analytics && Analytics.studentsPerMonth) {
            const transformedDataPoints = Analytics.studentsPerMonth.map((item, index) => ({
                x: index + 1, // Using index as x value
                label: item.month, // Display month as label on x-axis
                y: parseInt(item.count, 10) // Converting count to number
            }));
            setChartDataPoints(transformedDataPoints);
        }
    }, [Analytics]);

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
            text: "Number of Students Enroll (This Year)",
            horizontalAlign: "left",
            fontSize: 20,
        },
        axisY: {
            includeZero: true
        },
        axisX: {
            title: "Months",
        },
        data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: chartDataPoints,
            color: "#0053a5",
            indexLabelFontSize: 10,
            columnWidth: 10,
            cornerRadius: 10
        }]
    };
    return (
        <DashboardContainer active="Home">
            {
                isGetAnalyticsLoading ? <SmallLoader /> : <div className='flex flex-col gap-5'>
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
                        <CanvasJSChart options={options} />
                    </div>
                </div>
            }
        </DashboardContainer>
    );
};
export default Dashboard;


