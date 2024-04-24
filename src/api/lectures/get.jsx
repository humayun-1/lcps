import { lecture } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getLecturesData = async () => {
    const data = await GET(lecture.get_lectures, null);
    return data;
};

export const useGetLecturesQuery = () => {
    return useQuery('GetLectures', getLecturesData);
};

export const useGetLecturesMutation = () => {
    return useMutation(getLecturesData);
};
