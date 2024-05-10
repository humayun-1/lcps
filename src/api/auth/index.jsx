import { BASE_URL, auth } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { setToken } from 'api/common';

export const loginUser = async (credentials) => {

    const response = await fetch(BASE_URL + auth.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
        toast.error(data.message);
        console.log('ERROR', data);
        throw new Error(data.message || 'Login failed');
    }

    toast.success('Login successful!');
    if (data.access_token) {
        setToken(data.access_token,data);
        console.log(data.role, "datadata");
        if (data?.role.includes("admin")) {
            window.location.pathname = "/admin/";
        } else if(data?.role.includes("teacher")) {
            window.location.pathname = "/teacher/";
        }else{
            window.location.pathname = "/student";
        }
    }
    return data;
};

export const useLoginQuery = () => {
    return useQuery('login', loginUser);
};

export const useLoginMutation = () => {
    return useMutation(loginUser);
};
