import { POST } from 'api/common';
import { student } from 'data/api';
import { toast } from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';

export const addStudents = async (params) => {
    const values = params.data;
    const URL = params.type == "ADD" ? student.add_student : student.update_student + "/" + params.id
    const response = await POST(URL, values, () => {
        if(params?.isSignup){
            toast.success(`Account created successfully. Your account will be activated by Administration.`);
        }else{
            toast.success(`Student ${params.type == "ADD" ? "added" : "updated"} successful!`);
        }
    });
    return response;
};

export const useAddStudentsQuery = () => {
    return useQuery('AddStudents', addStudents);
};

export const useAddStudentsMutation = () => {
    return useMutation(addStudents);
};
