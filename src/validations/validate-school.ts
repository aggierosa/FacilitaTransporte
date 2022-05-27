import * as yup from 'yup';

export const schoolSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    address: yup.string().max(128).required(),
});