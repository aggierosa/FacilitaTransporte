import { Router } from "express";

import StudentController from "../controllers/controller.student";
import { validateStudents } from "../middlewares";
import { studentSchema } from "../validations";

const studentRouter = Router();

studentRouter.post("/", validateStudents(studentSchema),StudentController.store);
studentRouter.get("/", StudentController.index);
studentRouter.patch("/:studentId", StudentController.update);
studentRouter.delete("/:studentId", StudentController.delete);

export default studentRouter;
