import { Router } from "express";

import DriverController from "../controllers/controllers.driver";
import { validateParentDriver } from "../middlewares";
import { driverSchema } from "../validations";

const driverRouter = Router();

driverRouter.post("/", validateParentDriver(driverSchema),DriverController.store);
driverRouter.get("/", DriverController.index);
driverRouter.patch("/:driverId", DriverController.update);
driverRouter.delete("/:driverId", DriverController.delete);

export default driverRouter;

