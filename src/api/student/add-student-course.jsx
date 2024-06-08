import { POST } from 'api/common';
import { student } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';

export const addStudentCourse = async (params) => {
    const URL = student.add_student_course
    const response = await POST(URL, params, () => {
        toast.success(`Course Purchased successfully!`);
    });
    return response;
};

export const useAddStudentCourseQuery = () => {
    return useQuery('AddStudentCourse', addStudentCourse);
};

export const useAddStudentCourseMutation = () => {
    return useMutation(addStudentCourse);
};
