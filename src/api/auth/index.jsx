import { BASE_URL, auth } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-toastify';

export const loginUser = async (credentials) => {

    const response = await fetch(BASE_URL + auth.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
        throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    toast.success('Login successful!');
    if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        window.location.pathname = "/admin/";
    }
    return data;
};

export const useLoginQuery = () => {
    return useQuery('login', loginUser);
};

export const useLoginMutation = () => {
    return useMutation(loginUser);
};
