import { department } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { POST, getToken } from 'api/common';

export const addDepartments = async (params) => {
    const values = params.data;
    const URL = params.type == "ADD" ? department.add_department : department.update_department + "/" + params.id
    const response = await POST(URL, values, () => {
        toast.success(`Department ${params.type == "ADD" ? "added" : "updated"} successfully!`);
    });
    return response;
};

export const useAddDepartmentQuery = () => {
    return useQuery('AddDepartment', addDepartments);
};

export const useAddDepartmentMutation = () => {
    return useMutation(addDepartments);
};
