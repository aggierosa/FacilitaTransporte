import { Router } from "express";

import DriverController from "../controllers/controllers.driver";

const driverRouter = Router();

driverRouter.post("/", DriverController.store);
driverRouter.get("/", DriverController.index);
driverRouter.get("/:driver_id", DriverController.index);
driverRouter.patch("/:driver_id", DriverController.update);
driverRouter.delete("/:driver_id", DriverController.delete);

export default driverRouter;
