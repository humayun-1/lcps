import { useFormik } from 'formik';
import * as Yup from 'yup';

const useCustomFormik = ({ onSubmit, validationSchema, initialValues }) => {
    const form = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: onSubmit,
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false
    });
    return form
}

export default useCustomFormik