import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getCoursesData = async () => {
    const data = await GET(course.get_courses, null);
    return data;
};

export const useGetCourseQuery = () => {
    return useQuery('GetCourses', getCoursesData);
};

export const useGetCourseMutation = () => {
    return useMutation(getCoursesData);
};
