import { BASE_URL, course } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const deleteCoursesData = async (values) => {
    const response = await POST(course.delete_course + "/" + values, values, () => {
        toast.success(`Course deleted successfully!`);
    });

    return response;
};

export const useDeleteCourseQuery = () => {
    return useQuery('deleteCourses', deleteCoursesData);
};

export const useDeleteCourseMutation = () => {
    return useMutation(deleteCoursesData);
};
