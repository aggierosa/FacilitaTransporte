import { Router } from "express";

import ParentController from "../controllers/controllers.parent";
import { validateParentDriver } from "../middlewares";
import { parentSchema } from "../validations";

const parentRouter = Router();

parentRouter.post("/", validateParentDriver(parentSchema),ParentController.store);
parentRouter.get("/", ParentController.index);
parentRouter.get("/:parents_id", ParentController.index);
parentRouter.patch("/:parents_id", ParentController.update);
parentRouter.delete("/:parents_id", ParentController.delete);

export default parentRouter;
