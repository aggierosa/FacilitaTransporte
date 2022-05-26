import * as yup from 'yup';

export const schoolSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    adress: yup.string().max(128).required(),
});