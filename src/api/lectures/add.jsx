import { POST } from 'api/common';
import { lecture } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';

export const addLectures = async (params) => {
    const values = params.data;
    const URL = params.type == "ADD" ? lecture.add_lecture : lecture.update_lecture + "/" + params.id
    const response = await POST(URL, values, () => {
        toast.success(`Lecture ${params.type == "ADD" ? "added" : "updated"} successful!`);
    });
    return response;
};

export const useAddLecturesQuery = () => {
    return useQuery('AddLectures', addLectures);
};

export const useAddLecturesMutation = () => {
    return useMutation(addLectures);
};
