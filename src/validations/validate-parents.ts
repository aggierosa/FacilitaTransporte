import * as yup from 'yup';

import { regexPhone } from '../utils';

export const parentSchema = yup.object().shape({
    name: yup.string().max(128).required(),
    phone: yup.string().matches(regexPhone, "Invalid phone number").max(30).required(),
});