import * as Yup from 'yup';

const text = Yup.string().required('This Field is Required');
const email = Yup.string().email("Enter correct email").required('This Field is Required');
const password = Yup.string().min(8,"Password must be of 8 digits").required('This Field is Required');
const confirm = Yup.string().required('This Field is Required').oneOf([Yup.ref('password'), null], 'Passwords must match');
const optional = Yup.string().nullable();
const number = Yup.number("Please enter a valid number");
export const formSchema = {
    text,
    email,
    password,
    confirm,
    optional,
    number
}