import { course } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { POST, getToken } from 'api/common';

export const addCourses = async (params) => {
    const values = params.data;
    const URL = params.type == "ADD" ? course.add_course : course.update_course + "/" + params.id
    const response = await POST(URL, values, () => {
        toast.success(`Course ${params.type == "ADD" ? "added" : "updated"} successfully!`);
    });
    return response;
};

export const useAddCourseQuery = () => {
    return useQuery('AddCourse', addCourses);
};

export const useAddCourseMutation = () => {
    return useMutation(addCourses);
};
