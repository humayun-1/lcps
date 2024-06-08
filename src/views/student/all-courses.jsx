// import React, { useState, useEffect } from 'react';
// import Button from 'components/common/atoms/button';
// import Card from 'components/common/elements/card';
// import StudentContainer from 'components/layout/student-container';
// import { useFilterCourseMutation } from 'api/courses/filter-courses';
// import { application_request, class_feasibility, min_edu } from 'data/common';
// import { useSearchParams } from 'react-router-dom';
// import { useGetCourseWithoutAuthQuery } from 'api/courses/get-without-auth';
// import SmallLoader from 'components/common/elements/loaders/small-loader';

// const AllCourses = () => {
//     const [filters, setFilters] = useState({});
//     const [searchParams, setSearchParams] = useSearchParams();
//     const { mutate, isLoading, data: courses } = useFilterCourseMutation();
//     const { data: Allcourses, isLoading: isGetAllCoursesLoading } = useGetCourseWithoutAuthQuery();
//     const data = [
//         {
//             name: 'Feasibility',
//             title: 'feasibility',
//             data: class_feasibility.map(ele => ele.label)
//         },
//         {
//             name: 'Application',
//             title: 'application',
//             data: application_request.map(ele => ele.label)
//         },
//         {
//             name: 'Minimum Education',
//             title: 'min_edu',
//             data: min_edu.map(ele => ele.label)
//         },
//     ];

//     const handleFilterChange = (e) => {
//         const { name, checked } = e.target;
//         const title = e.target.title;
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             [name]: title,
//         }));
//     };

//     const handleResetFilters = () => {
//         document.querySelector(".search-course").value = ""
//         setSearchParams({});
//         setFilters({});
//     };

//     const courseFilters = data.map((ele) => ({
//         title: ele.name,
//         data: ele.data.map((course) => (
//             <div key={course} className='flex items-center gap-2'>
//                 <input type="radio" title={course} name={ele.title} checked={filters[ele.title] == course} onChange={handleFilterChange} />
//                 <p> {course} </p>
//             </div>
//         )),
//     }));

//     const handleApplyFilters = () => {
//         setSearchParams({ ...filters });
//         const params = { ...filters };
//         mutate({ ...params, ...filters });
//     };

//     console.log(filters);

//     return (
//         <StudentContainer>
//             <div className='bg-[#fff] py-[3rem]'>
//                 <div className='container md:grid grid-cols-5 gap-4'>
//                     <div className='pr-[2rem]'>
//                         <div className='flex items-center justify-between flex-wrap gap-2'>
//                             <h1 className='font-extrabold text-3xl'>Filter</h1>
//                             <Button type='button' onClick={handleResetFilters}>Reset</Button>
//                         </div>
//                         <input
//                             type="text"
//                             className="search-course border border-gray-300 rounded-md pl-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                             placeholder="Search Courses"
//                             onChange={(e) => {
//                                 setFilters((prevFilters) => ({
//                                     ...prevFilters,
//                                     "search": e.target.value,
//                                 }));
//                             }}
//                         />
//                         {courseFilters.map((filter) => (
//                             <div key={filter.title}>
//                                 <hr className='my-3 border-[#6D6D6D]' />
//                                 <div className='flex items-center justify-between gap-2'>
//                                     <h1>{filter.title}</h1>
//                                 </div>
//                                 {filter.data}
//                             </div>
//                         ))}
//                         <hr className='my-3 border-[#6D6D6D]' />
//                         <Button className='w-full mx-auto' disabled={isLoading} onClick={handleApplyFilters}>Apply Filters</Button>
//                     </div>
//                     <div className='col-span-4 flex flex-col gap-4'>
//                         <h1 className='font-extrabold text-3xl'>Earn Your Degree</h1>
//                         <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
//                             {
//                                 isLoading || isGetAllCoursesLoading ? (
//                                     <SmallLoader />
//                                 ) : (
//                                     <>
//                                         {Object.keys(Object.fromEntries(searchParams)).length > 0 && (
//                                             <>
//                                                 {courses?.data?.length ? (
//                                                     courses?.data?.map((ele) => <Card data={ele} key={ele.id} />)
//                                                 ) : (
//                                                     <p className='text-center text-gray-500 font-medium'>No Filtered Data Found.</p>
//                                                 )}
//                                             </>
//                                         )}
//                                         {Object.keys(Object.fromEntries(searchParams)).length === 0 && (
//                                             <>
//                                                 {Allcourses?.data?.length ? (
//                                                     Allcourses?.data?.map((ele) => <Card data={ele} key={ele.id} />)
//                                                 ) : (
//                                                     <p className='text-center text-gray-500 font-medium'>No Courses Data Found.</p>
//                                                 )}
//                                             </>
//                                         )}
//                                     </>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </StudentContainer>
//     );
// };

// export default AllCourses;



import React, { useState, useEffect } from 'react';
import Button from 'components/common/atoms/button';
import Card from 'components/common/elements/card';
import StudentContainer from 'components/layout/student-container';
import { useFilterCourseMutation } from 'api/courses/filter-courses';
import { application_request, class_feasibility, min_edu } from 'data/common';
import { useSearchParams } from 'react-router-dom';
import { useGetCourseWithoutAuthQuery } from 'api/courses/get-without-auth';
import SmallLoader from 'components/common/elements/loaders/small-loader';
import { useGetDepartmentsQuery } from 'api/department/get';

const AllCourses = () => {
    const [uiFilters, setUiFilters] = useState({});
    const [filters, setFilters] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    const { mutate, isLoading, data: courses } = useFilterCourseMutation();
    const { data: Allcourses, isLoading: isGetAllCoursesLoading } = useGetCourseWithoutAuthQuery();
    const { data: Departments, isLoading: isGetDepartmentsLoading, refetch: refetchDepartments } = useGetDepartmentsQuery();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());
        setUiFilters(params);
        setFilters(params);
        if (Object.keys(params).length > 0) {
            mutate(params);
        }
    }, [searchParams]);

    const data = [
        {
            name: 'Feasibility',
            title: 'feasibility',
            data: class_feasibility.map(ele => ele.label)
        },
        {
            name: 'Application',
            title: 'application',
            data: application_request.map(ele => ele.label)
        },
        {
            name: 'Minimum Education',
            title: 'min_edu',
            data: min_edu.map(ele => ele.label)
        },
        {
            name: 'Department',
            title: 'department',
            data: Departments?.data?.map(ele => ele.name) || []
        },
    ];

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        const title = e.target.title;
        setUiFilters((prevFilters) => ({
            ...prevFilters,
            [name]: title,
        }));
    };

    const handleResetFilters = () => {
        document.querySelector(".search-course").value = "";
        setSearchParams({});
        setUiFilters({});
        setFilters({});
    };

    const courseFilters = data.map((ele) => ({
        title: ele.name,
        data: ele.data.map((course) => (
            <div key={course} className='flex items-center gap-2'>
                <input type="radio" className='cursor-pointer' title={course} name={ele.title} checked={uiFilters[ele.title] === course} onChange={handleFilterChange} />
                <p> {course} </p>
            </div>
        )),
    }));

    const handleApplyFilters = () => {
        setFilters(uiFilters);
        setSearchParams({ ...uiFilters });
    };

    useEffect(() => {
        if (Object.keys(filters).length > 0) {
            mutate(filters);
        }
    }, [filters, mutate]);

    return (
        <StudentContainer>
            <div className='bg-[#fff] py-[3rem]'>
                <div className='container md:grid grid-cols-5 gap-4'>
                    <div className='pr-[2rem]'>
                        <div className='flex items-center justify-between flex-wrap gap-2'>
                            <h1 className='font-extrabold text-3xl'>Filter</h1>
                            <Button type='button' onClick={handleResetFilters}>Reset</Button>
                        </div>
                        <input
                            type="text"
                            className="mt-3 search-course border border-gray-300 rounded-md pl-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                            placeholder="Search Courses"
                            onChange={(e) => {
                                setUiFilters((prevFilters) => ({
                                    ...prevFilters,
                                    "search": e.target.value,
                                }));
                            }}
                            value={uiFilters?.search}
                        />
                        {courseFilters.map((filter) => (
                            <div key={filter.title}>
                                <hr className='my-3 border-[#6D6D6D]' />
                                <div className='flex items-center justify-between gap-2'>
                                    <h1>{filter.title}</h1>
                                </div>
                                {filter.data}
                            </div>
                        ))}
                        <hr className='my-3 border-[#6D6D6D]' />
                        <Button className='w-full mx-auto' disabled={isLoading} onClick={handleApplyFilters}>Apply Filters</Button>
                    </div>
                    <div className='col-span-4 flex flex-col gap-4'>
                        <h1 className='font-extrabold text-3xl'>Earn Your Degree</h1>
                        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                            {
                                isLoading || isGetAllCoursesLoading ? (
                                    <SmallLoader />
                                ) : (
                                    <>
                                        {Object.keys(Object.fromEntries(searchParams)).length > 0 && (
                                            <>
                                                {courses?.data?.length ? (
                                                    courses?.data?.map((ele) => <Card data={ele} key={ele.id} />)
                                                ) : (
                                                    <p className='text-center text-gray-500 font-medium'>No Filtered Data Found.</p>
                                                )}
                                            </>
                                        )}
                                        {Object.keys(Object.fromEntries(searchParams)).length === 0 && (
                                            <>
                                                {Allcourses?.data?.length ? (
                                                    Allcourses?.data?.map((ele) => <Card data={ele} key={ele.id} />)
                                                ) : (
                                                    <p className='text-center text-gray-500 font-medium'>No Courses Data Found.</p>
                                                )}
                                            </>
                                        )}
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </StudentContainer>
    );
};

export default AllCourses;
