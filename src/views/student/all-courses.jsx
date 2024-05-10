import React from 'react'
import Button from 'components/common/atoms/button'
import Card from 'components/common/elements/card'
import StudentContainer from 'components/layout/student-container'
import { useGetCourseQuery } from 'api/courses/get'

const AllCourses = () => {
    const data = [
        {
            title: "Degree",
            courses: [
                "Business",
                "IT & Software",
                "Health & Fitness",
                "Music",
                "Social Science"
            ]
        },
        {
            title: "Career",
            courses: [
                "IT Manager",
                "Designer",
                "Data Scientist",
                "Musician",
                "Economist"
            ]
        },
        {
            title: "Level",
            courses: [
                "All Levels",
                "Beginner",
                "Intermediate",
                "Expert"
            ]
        },
        {
            title: "Video Duration",
            courses: [
                "1-6 Hours",
                "6-12 Hours",
                "12-18 Hours",
                "18-24 Hours",
                "24+ Hours"
            ]
        },
    ];
    const { data: courses, isLoading: isGetCoursesLoading, refetch: refetchCourses } = useGetCourseQuery();

    return (
        <StudentContainer>
            <div className='bg-[#fff] py-[3rem]'>
                <div className='container md:grid grid-cols-5 gap-4'>
                    <div className='pr-[2rem]'>
                        <h1 className='font-extrabold text-3xl'>Filter</h1>
                        {
                            data.map(ele => {
                                return <>
                                    <hr className='my-3 border-[#6D6D6D]' />
                                    <div className='flex items-center justify-between gap-2'>
                                        <h1>{ele.title}</h1>
                                        <p className='text-sm text-[#6D6D6D]'>Reset</p>
                                    </div>
                                    {
                                        ele.courses.map(course => {
                                            return <div className='flex items-center gap-2'>
                                                <input type="checkbox" />
                                                <p> {course} </p>
                                            </div>
                                        })
                                    }
                                </>
                            })
                        }
                    </div>
                    <div className='col-span-4 flex flex-col gap-4'>
                        <h1 className='font-extrabold text-3xl'>Earn Your Degree</h1>
                        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                            {
                                isGetCoursesLoading ? "Loading..." : courses?.data?.map(ele => {
                                    return <Card />
                                })
                            }
                        </div>
                        <div>
                            <Button className={"border text-[#0053A5] border-[#0053A5] bg-transparent"}>Show More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </StudentContainer>
    )
}

export default AllCourses