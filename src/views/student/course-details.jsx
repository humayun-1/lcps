import { getToken } from 'api/common';
import { useGetCourseMutation, useSingleCourseQuery } from 'api/courses/get-single';
import Button from 'components/common/atoms/button'
import SmallLoader from 'components/common/elements/loaders/small-loader';
import StudentContainer from 'components/layout/student-container'
import { BASE_URL_IMG } from 'data/api';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(false)
    const { id } = useParams();
    const { data: Course, isLoading: isGetCourseLoading, refetch: refetchCourse } = useSingleCourseQuery(id);
    useEffect(() => {
        console.log(Course);
    }, [Course])

    useEffect(() => {
        let token = getToken();
        setToken(token);
    }, [])


    return (
        <StudentContainer>
            {
                isGetCourseLoading ? <SmallLoader /> :
                    <>
                        <div className='course-detail relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${BASE_URL_IMG}${Course?.data.profile_picture}')` }}>
                            <div className='container h-full'>
                                <div className='flex flex-col justify-center gap-4 h-full'>
                                    <h1 className='text-4xl text-white font-extrabold'>{Course?.data?.name}</h1>
                                    <div className='bg-white rounded-xl p-4 pr-[3rem] w-fit flex flex-col gap-2'>
                                        <h1 className='text-xl'>Get started today</h1>
                                        <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est <br /> non, luctus.</p>
                                        <Button onClick={() => {
                                            if (token) {
                                                navigate(`/student/checkout?course_id=${id}`)
                                            } else {
                                                navigate(`/login`);
                                                toast.error("Please login to enroll!")
                                            }
                                        }} className={"w-fit"}>Enroll Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto max-w-[80rem] w-fit -translate-y-1/2 bg-white rounded-xl px-8 py-4 shadow-md border flex items-center gap-3'>
                                <div className='border-r flex flex-col gap-2 pr-[1rem]'>
                                    <h1>Bachelor Degree</h1>
                                    <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                                </div>
                                <div className='border-r flex flex-col gap-2 pr-[1rem]'>
                                    <h1>No Application Required</h1>
                                    <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                                </div>
                                <div className='border-r flex flex-col gap-2 pr-[1rem]'>
                                    <h1>${Course?.data?.price} USD Fee</h1>
                                    <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                                </div>
                                <div className='flex flex-col gap-2 pr-[1rem]'>
                                    <h1>100% Online</h1>
                                    <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='flex flex-col gap-3 mb-[3rem]'>
                                    {/* <div className='flex items-center gap-2'>
                                        {
                                            ["What you'll learn", "Course content", "Requirements", "Who this course is for"].map(ele => {
                                                return <p className='text-sm cursor-pointer text-[#6D6D6D] hover:text-[#0053A5] hover:underline'>{ele}</p>
                                            })
                                        }
                                    </div> */}
                                    {/* <h1 className='text-3xl font-extrabold'>Lorem ipsum dolor sit amet, eli</h1> */}
                                    <div className='flex flex-col gap-[3rem] quill-container'>
                                        <div className='' dangerouslySetInnerHTML={{
                                            __html: Course?.data.content
                                        }}></div>
                                        <div className='' dangerouslySetInnerHTML={{
                                            __html: Course?.data.requirements
                                        }}></div>
                                        <div className='' dangerouslySetInnerHTML={{
                                            __html: Course?.data.learning_details
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </StudentContainer>
    )
}

export default CourseDetails