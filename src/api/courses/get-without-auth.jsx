import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getCoursesWithoutAuthData = async () => {
    const data = await GET(course.get_courses_no_auth, null);
    return data;
};

export const useGetCourseWithoutAuthQuery = () => {
    return useQuery('GetCoursesWithoutAuth', getCoursesWithoutAuthData);
};

export const useGetCourseWithoutAuthMutation = () => {
    return useMutation(getCoursesWithoutAuthData);
};
