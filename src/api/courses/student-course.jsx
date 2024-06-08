import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getStudentCoursesData = async (id) => {
    if (id) {
        const data = await GET(`${course.get_student_courses}/${id}`, null);
        return data;
    }
};

export const useStudentCourseQuery = (id) => {
    return useQuery('GetStudentCourses', () => getStudentCoursesData(id));
};

export const useGetCourseMutation = () => {
    return useMutation(getStudentCoursesData);
};
