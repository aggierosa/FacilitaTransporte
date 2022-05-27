import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    adress: yup.string().max(128).required(),
    entry_time: yup.string().max(20),
    departure_time: yup.string().max(20),
    parentId: yup.string().required(),
    schoolId: yup.string().required(),
    driverId: yup.string().required(),
});