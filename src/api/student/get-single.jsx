import { student } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getSingleStudentData = async (id) => {
    if (id) {
        const data = await GET(student.get_single_student + "/" + id, null);
        return data;
    }
};

export const useGetSingleStudentQuery = (id) => {
    return useQuery(['GetSingleStudent', id], () => getSingleStudentData(id));
};

export const useGetSingleStudentMutation = () => {
    return useMutation(getSingleStudentData);
};
