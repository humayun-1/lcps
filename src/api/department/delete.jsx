import { BASE_URL, department } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const deleteDepartmentsData = async (values) => {
    const response = await POST(department.delete_department + "/" + values, values, () => {
        toast.success(`Department deleted successfully!`);
    });

    return response;
};

export const useDeleteDepartmentQuery = () => {
    return useQuery('deleteDepartments', deleteDepartmentsData);
};

export const useDeleteDepartmentMutation = () => {
    return useMutation(deleteDepartmentsData);
};
