import { Router } from "express";

import ParentController from "../controllers/controllers.parent";

const parentRouter = Router();

parentRouter.post("/parents", ParentController.store);
parentRouter.get("/parents", ParentController.index);
parentRouter.get("/parents/:parents_id", ParentController.index);
parentRouter.patch("/parents/:parents_id", ParentController.update);
parentRouter.delete("/parents/:parents_id", ParentController.delete);

export default parentRouter;
