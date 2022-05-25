import { Router } from "express";

import SchoolController from "../controllers/controllers.school";

const schoolRouter = Router();

schoolRouter.post("/schools", SchoolController.store);
schoolRouter.get("/schools", SchoolController.index);
schoolRouter.get("/schools/:school_id", SchoolController.index);
schoolRouter.patch("/schools/:school_id", SchoolController.update);
schoolRouter.delete("/schools/:school_id", SchoolController.delete);

export default schoolRouter;
