import { contact } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { GET } from 'api/common';

export const getContactData = async () => {
    const data = await GET(contact.get_Contact, null);
    return data;
};

export const useGetcontactQuery = () => {
    return useQuery('GetContact', getContactData);
};

export const useGetcontactMutation = () => {
    return useMutation(getContactData);
};
