import { Router } from "express";

import ParentController from "../controllers/controllers.parent";
import { validateParentDriver } from "../middlewares";
import { parentSchema } from "../validations";

const parentRouter = Router();

parentRouter.post("/", validateParentDriver(parentSchema),ParentController.store);
parentRouter.get("/", ParentController.index);
parentRouter.patch("/:parentsId", ParentController.update);
parentRouter.delete("/:parentsId", ParentController.delete);

export default parentRouter;
