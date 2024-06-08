import { useStudentCourseQuery } from 'api/courses/student-course';
import Card from 'components/common/elements/card';
import StudentContainer from 'components/layout/student-container'
import React, { useEffect, useState } from 'react'

const MyLearning = () => {
  const [id, setid] = useState(false)
  const { data: Course, isLoading: isGetCourseLoading, refetch: refetchCourse } = useStudentCourseQuery(id);
  useEffect(() => {
    setid(JSON.parse(localStorage.getItem("data"))?.id);
  }, [])

  useEffect(() => {
    if (id) {
      refetchCourse();
    }
  }, [id])

  return (
    <StudentContainer>
      <div className='container flex flex-col gap-4 py-[4rem]'>
        <h1 className='font-extrabold text-3xl'>My Courses</h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
          {
            isGetCourseLoading ? "loading..." : Course?.data.length ? Course?.data.map(ele => {
              return <Card url={`/student/video/${ele?.id}`} data={ele} />
            }) : ""
          }
        </div>
      </div>
    </StudentContainer>
  )
}

export default MyLearning