import * as Express from "express"
import * as yup from "yup";

export const validateParentDriver = (schema: yup.ObjectSchema<any>) => {
  return (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
    schema.validate(req.body)
        .catch((err) => {
            err.name;
            err.phone;
        });

    next();
  };
};