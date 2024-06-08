import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getSingleCourseData = async (id) => {
    if (id) {
        const data = await GET(`${course.get_single_course}/${id}`, null);
        return data;
    }
};

export const useSingleCourseQuery = (id) => {
    return useQuery('GetSingleCourse', () => getSingleCourseData(id));
};

export const useGetCourseMutation = () => {
    return useMutation(getSingleCourseData);
};
