import { Router } from "express";
import driverRouter from "./drivers.routes";
import parentsRouter from "./parents.routes";
import schoolRouter from "./school.routes";
import studentsRouter from "./students.routes";

const routes = Router();

routes.use("/drivers", driverRouter);
routes.use("/parents", parentsRouter);
routes.use("/schools", schoolRouter);
routes.use("/students", studentsRouter);

export default routes;
