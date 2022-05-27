import * as yup from 'yup';

import { regexPhone } from '../utils';

export const driverSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    telephone: yup.string().matches(regexPhone, "Invalid phone number").max(30).required(),
});