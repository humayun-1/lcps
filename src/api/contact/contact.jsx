import { contact } from 'data/api';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { POST, getToken } from 'api/common';

export const addContact = async (params) => {
    console.log(params, "params");
    const response = await POST(contact.contact, params, () => {
        toast.success(`Form submitted successfully!`);
    });
    return response;
};

export const useAddContactQuery = () => {
    return useQuery('contact', addContact);
};

export const useAddContactMutation = () => {
    return useMutation(addContact);
};
