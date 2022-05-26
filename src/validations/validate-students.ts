import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    adress: yup.string().max(128).required(),
    entry_time: yup.string().max(20),
    departure_time: yup.string().max(20),
    parents_id: yup.string().required(),
    school_id: yup.string().required(),
    drivers_id: yup.string().required(),
});