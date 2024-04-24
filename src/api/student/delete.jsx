import { BASE_URL, student } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const deleteStudentsData = async (values) => {
    const response = await POST(student.delete_student + "/" + values, values, () => {
        toast.success(`Student deleted successfully!`);
    });
    return response;
};

export const useDeleteStudentQuery = () => {
    return useQuery('deleteStudents', deleteStudentsData);
};

export const useDeleteStudentsMutation = () => {
    return useMutation(deleteStudentsData);
};
