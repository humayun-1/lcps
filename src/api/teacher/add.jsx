import { POST } from 'api/common';
import { teacher } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';

export const addTeachers = async (params) => {
    const values = params.data;
    const URL = params.type == "ADD" ? teacher.add_teacher : teacher.update_teacher + "/" + params.id
    const response = await POST(URL, values, () => {
        toast.success(`Teacher ${params.type == "ADD" ? "added" : "updated"} successful!`);
    });
    return response;
};

export const useAddTeachersQuery = () => {
    return useQuery('AddTeachers', addTeachers);
};

export const useAddTeachersMutation = () => {
    return useMutation(addTeachers);
};
