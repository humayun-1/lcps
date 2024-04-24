import { BASE_URL, teacher } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const deleteTeachersData = async (values) => {
    const response = await POST(teacher.delete_teacher + "/" + values, values, () => {
        toast.success(`teacher deleted successfully!`);
    });

    return response;
};

export const useDeleteTeachersQuery = () => {
    return useQuery('deleteTeachers', deleteTeachersData);
};

export const useDeleteTeachersMutation = () => {
    return useMutation(deleteTeachersData);
};
