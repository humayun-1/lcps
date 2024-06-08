import { contact, dashboard } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getAnalyticsData = async () => {
    const data = await GET(dashboard.analytics_data,null,true);
    return data;
};

export const useGetAnalyticsDataQuery = () => {
    return useQuery('GetAnalyticsData', getAnalyticsData);
};

export const useGetAnalyticsDataMutation = () => {
    return useMutation(getAnalyticsData);
};
