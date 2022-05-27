import { Router } from "express";
import driverRouter from "./drivers.routes";
import parentRouter from "./parents.routes";
import schoolRouter from "./schools.routes";
import studentRouter from "./students.routes";

const routes = Router();

routes.use("/drivers", driverRouter);
routes.use("/parents", parentRouter);
routes.use("/schools", schoolRouter);
routes.use("/students", studentRouter);

export default routes;
