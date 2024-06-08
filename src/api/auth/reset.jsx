import { BASE_URL, auth } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { setToken } from 'api/common';

export const resetUser = async (credentials) => {

    const response = await fetch(BASE_URL + auth.reset, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
        // toast.error(data.message);
        console.log('ERROR', data);
        throw new Error(data.message || 'Reset failed');
    }

    toast.success('Please check your email!');
    return data;
};

export const useResetQuery = () => {
    return useQuery('reset', resetUser);
};

export const useResetMutation = () => {
    return useMutation(resetUser);
};
