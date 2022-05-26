import { Router } from "express";

import SchoolController from "../controllers/controllers.school";

const schoolRouter = Router();

schoolRouter.post("/", SchoolController.store);
schoolRouter.get("/", SchoolController.index);
schoolRouter.get("/:school_id", SchoolController.index);
schoolRouter.patch("/:school_id", SchoolController.update);
schoolRouter.delete("/:school_id", SchoolController.delete);

export default schoolRouter;
