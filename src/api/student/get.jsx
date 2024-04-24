import { student } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getStudentsData = async () => {
    const data = await GET(student.get_students, null);
    return data;
};

export const useGetStudentsQuery = () => {
    return useQuery('GetStudents', getStudentsData);
};

export const useGetStudentsMutation = () => {
    return useMutation(getStudentsData);
};
