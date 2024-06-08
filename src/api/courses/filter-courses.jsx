import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const getFilterCoursesData = async (params) => {
    console.log(params, "params from QUERY");
    const data = await POST(`${course.get_filter_courses}`, params, () => {
        // console.log("FETCHED");
    });
    return data
};

export const useFilterCourseQuery = (params) => {
    return useQuery('GetFilterCourses', () => getFilterCoursesData(params));
};

export const useFilterCourseMutation = () => {
    return useMutation(getFilterCoursesData);
};
