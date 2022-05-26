import { Router } from "express";

import DriverController from "../controllers/controllers.driver";
import { validateParentDriver } from "../middlewares";
import { driverSchema } from "../validations";

const driverRouter = Router();

driverRouter.post("/", validateParentDriver(driverSchema),DriverController.store);
driverRouter.get("/", DriverController.index);
driverRouter.patch("/:driver_id", DriverController.update);
driverRouter.delete("/:driver_id", DriverController.delete);

export default driverRouter;

