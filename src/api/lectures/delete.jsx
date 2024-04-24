import { lecture } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { POST } from 'api/common';

export const deleteLecturesData = async (values) => {
    const response = await POST(lecture.delete_lecture + "/" + values, values, () => {
        toast.success(`Lecture deleted successfully!`);
    });

    return response;
};

export const useDeleteLectureQuery = () => {
    return useQuery('deleteLectures', deleteLecturesData);
};

export const useDeleteLectureMutation = () => {
    return useMutation(deleteLecturesData);
};
