import { department } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getDepartmentsData = async () => {
    const data = await GET(department.get_departments, null);
    return data;
};

export const useGetDepartmentsQuery = () => {
    return useQuery('GetDepartments', getDepartmentsData);
};

export const useGetDepartmentsMutation = () => {
    return useMutation(getDepartmentsData);
};
