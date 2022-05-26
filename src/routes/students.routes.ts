import { Router } from "express";

import StudentController from "../controllers/controller.student";
import { validateStudents } from "../middlewares";
import { studentSchema } from "../validations";

const studentsRouter = Router();

studentsRouter.post("/", validateStudents(studentSchema),StudentController.store);
studentsRouter.get("/", StudentController.index);
studentsRouter.patch("/:studentId", StudentController.update);
studentsRouter.delete("/:studentId", StudentController.delete);

export default studentsRouter;
