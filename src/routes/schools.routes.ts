import { Router } from "express";

import SchoolController from "../controllers/controllers.school";
import { validateSchool } from "../middlewares";
import { schoolSchema } from "../validations";

const schoolRouter = Router();

schoolRouter.post("/", validateSchool(schoolSchema),SchoolController.store);
schoolRouter.get("/", SchoolController.index);
schoolRouter.patch("/:schoolId", SchoolController.update);
schoolRouter.delete("/:schoolId", SchoolController.delete);

export default schoolRouter;
