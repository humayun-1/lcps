import React from 'react'
import Button from 'components/common/atoms/button'
import Card from 'components/common/elements/card'
import StudentContainer from 'components/layout/student-container'

const AllCourses = () => {
    return (
        <StudentContainer>
            <div className='bg-[#fff] py-[3rem]'>
                <div className='container grid grid-cols-5 gap-4'>
                    <div>
                        <h1 className='font-extrabold text-3xl border-b'>Filter</h1>
                        asd
                    </div>
                    <div className='col-span-4 flex flex-col gap-4'>
                        <h1 className='font-extrabold text-3xl'>Earn Your Degree</h1>
                        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1].map(ele => {
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