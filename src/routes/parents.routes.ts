import { Router } from "express";

import ParentController from "../controllers/controllers.parent";

const parentRouter = Router();

parentRouter.post("/", ParentController.store);
parentRouter.get("/", ParentController.index);
parentRouter.patch("/:parents_id", ParentController.update);
parentRouter.delete("/:parents_id", ParentController.delete);

export default parentRouter;
