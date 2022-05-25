import { Router } from "express";

import DriverController from "../controllers/controllers.driver";

const driverRouter = Router();

driverRouter.post("/drivers", DriverController.store);
driverRouter.get("/drivers", DriverController.index);
driverRouter.get("/drivers/:driver_id", DriverController.index);
driverRouter.patch("/drivers/:driver_id", DriverController.update);
driverRouter.delete("/drivers/:driver_id", DriverController.delete);

export default driverRouter;
