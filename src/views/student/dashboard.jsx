import Button from 'components/common/atoms/button'
import Card from 'components/common/elements/card'
import CardSm from 'components/common/elements/card-sm'
import HomeSlider from 'components/common/elements/home-slider'
import StudentContainer from 'components/layout/student-container'
import React from 'react'

const Dashboard = () => {
    return (
        <StudentContainer>
            <HomeSlider />
            <div className='bg-[#F5FAFF] py-[3rem]'>
                <div className='container flex flex-col gap-4'>
                    <h1 className='font-extrabold text-3xl'>Earn Your Degree</h1>
                    <div className='flex items-center gap-4 whitespace-nowrap overflow-auto'>
                        {
                            [
                                "All",
                                "Business",
                                "IT & Software",
                                "Health & Fitness",
                                "Music",
                                "Social Science"
                            ].map(ele => <p className='text-sm font-semibold hover:text-[#0053A5] cursor-pointer hover:underline transition-all text-[#6D6D6D]'>{ele}</p>)
                        }
                    </div>
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1].map(ele => {
                                return <Card />
                            })
                        }
                    </div>
                    <div>
                        <Button className={"border text-[#0053A5] border-[#0053A5] bg-transparent"}>View all</Button>
                    </div>
                </div>
            </div>
            <div className='bg-[#fff] py-[3rem]'>
                <div className='container flex flex-col gap-4'>
                    <h1 className='font-extrabold text-3xl'>Explore Career Related Courses</h1>
                    <div className='grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 flex-wrap'>
                        {
                            [1, 1, 2, 1, 2, 1, 1, 1, 1, 1,].map(ele => {
                                return <CardSm />
                            })
                        }
                    </div>
                    <div>
                        <Button className={"border text-[#0053A5] border-[#0053A5] bg-transparent"}>View all</Button>
                    </div>
                </div>
            </div>
        </StudentContainer>
    )
}

export default Dashboard