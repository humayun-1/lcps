import React from 'react'
import AdminContainer from 'components/layout/admin-container';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
            text: "Number of Students Enroll (This Year) ",
            horizontalAlign: "left", // Align title to the left
            fontSize: 20, // Set the font size of the title
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 71 },
            ],
            color: "#0053a5", // Set the color of the bars
            indexLabelFontSize: 10, // Set the font size of the index labels
            columnWidth: 10, // Set the width of the bars
            cornerRadius: 10 // Set the border radius of the bars
        }]
    }
    return (
        <AdminContainer active="Home">
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
                    <CanvasJSChart options={options} />
                </div>
            </div>
        </AdminContainer>
    );
};
export default Dashboard;