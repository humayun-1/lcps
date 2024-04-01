import Button from 'components/common/atoms/button'
import StudentContainer from 'components/layout/student-container'
import React from 'react'

const CourseDetails = () => {
    return (
        <StudentContainer>
            <>
                <div className='course-detail relative'>
                    <div className='container h-full'>
                        <div className='flex flex-col justify-center gap-4 h-full'>
                            <h1 className='text-4xl text-white font-extrabold'>Bachelor of Science in Computer Science</h1>
                            <div className='bg-white rounded-xl p-4 pr-[3rem] w-fit flex flex-col gap-2'>
                                <h1 className='text-xl'>Get started today</h1>
                                <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est <br /> non, luctus.</p>
                                <Button className={"w-fit"}>Add to Cart</Button>
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
                            <h1>$74.00 USD Fee</h1>
                            <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                        </div>
                        <div className='flex flex-col gap-2 pr-[1rem]'>
                            <h1>100% Online</h1>
                            <p className='text-sm text-[#6D6D6D]'>Vestibulum a urna consequat, tempus est non, luctus.</p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='flex flex-col gap-3 mb-[3rem]'>
                            <div className='flex items-center gap-2'>
                                {
                                    ["What you'll learn", "Course content", "Requirements", "Who this course is for"].map(ele => {
                                        return <p className='text-sm cursor-pointer text-[#6D6D6D] hover:text-[#0053A5] hover:underline'>{ele}</p>
                                    })
                                }
                            </div>
                            <h1 className='text-3xl font-extrabold'>Lorem ipsum dolor sit amet, eli</h1>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis, augue sit amet commodo eleifend, nunc odio sodales sapien, id dapibus est tortor ac quam. Vestibulum non sapien leo. Aenean ex dui, lacinia nec sollicitudin in, aliquet ut mauris. Vivamus fermentum sit amet ante bibendum lobortis. Pellentesque mollis faucibus orci, sed euismod leo volutpat ac. Duis mollis eros ut semper laoreet. Pellentesque vestibulum vulputate cursus. Cras aliquam volutpat libero in semper. Phasellus laoreet sollicitudin scelerisque.
                                Quisque ultricies eros vitae sem dictum vehicula. Fusce at congue turpis. Donec est nibh, condimentum feugiat fringilla quis, pretium vitae lorem. Proin vitae est enim. Integer non accumsan augue. Duis ligula risus, ullamcorper eu ipsum in, mollis imperdiet ipsum. Duis ante dolor, aliquam nec massa sed, maximus suscipit nibh. Etiam nunc urna, consectetur at vehicula at, eleifend sed odio.
                                In hac habitasse platea dictumst. Cras quis nulla viverra, fermentum urna sit amet, sagittis sem. Integer vel diam bibendum, euismod tellus eu, mollis sem. Etiam eget interdum purus. Donec sit amet purus tempus erat ultricies condimentum. Proin elementum enim a mi finibus, non pellentesque sem lacinia. Nullam sodales nisi dolor, vitae faucibus est sagittis ut. Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.</p>
                            <div>
                                <ul className='grid grid-cols-2 gap-4 list-disc list-inside'>
                                    <li>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                        <p className='text-sm'>
                                            Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                        <p className='text-sm'>
                                            Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                        <p className='text-sm'>
                                            Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                        <p className='text-sm'>
                                            Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </StudentContainer>
    )
}

export default CourseDetails