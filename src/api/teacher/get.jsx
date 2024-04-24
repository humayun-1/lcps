import { teacher } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getTeachersData = async () => {
    const data = await GET(teacher.get_teachers, null);
    return data;
};

export const useGetTeachersQuery = () => {
    return useQuery('GetTeachers', getTeachersData);
};

export const useGetTeachersMutation = () => {
    return useMutation(getTeachersData);
};
