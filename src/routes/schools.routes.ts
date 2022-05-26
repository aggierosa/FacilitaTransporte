import { Router } from "express";

import SchoolController from "../controllers/controllers.school";
import { validateSchool } from "../middlewares";
import { schoolSchema } from "../validations";

const schoolRouter = Router();

schoolRouter.post("/", validateSchool(schoolSchema),SchoolController.store);
schoolRouter.get("/", SchoolController.index);
schoolRouter.patch("/:school_id", SchoolController.update);
schoolRouter.delete("/:school_id", SchoolController.delete);

export default schoolRouter;
