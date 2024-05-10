import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const validaition_message = "This Field is Required"
const text = Yup.string().required(validaition_message);
const email = Yup.string().email("Enter correct email").required(validaition_message);
const password = Yup.string().min(8, "Password must be of 8 digits").required(validaition_message);
const confirm = Yup.string().required(validaition_message).oneOf([Yup.ref('password'), null], 'Passwords must match');
const optional = Yup.string().nullable();
const url = Yup.string().url().required();
const mixed = Yup.mixed().required();
const phone_number = Yup.string()
    .required(validaition_message)
    // .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "too short")
    .max(20, "too long");
const number = Yup.number("Please enter a valid number");
export const formSchema = {
    text,
    email,
    password,
    confirm,
    optional,
    number,
    phone_number,
    url,
    mixed
}