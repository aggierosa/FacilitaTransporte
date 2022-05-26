import * as Express from "express"
import * as yup from "yup";

export const validateStudents = (schema: yup.ObjectSchema<any>) => {
  return (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
    schema.validate(req.body)
        .catch((err) => {
            err.name;
            err.adress;
            err.entry_time;
            err.departure_time;
            err.parents_id;
            err.school_id;
            err.drivers_id;
        });

    next();
  };
};