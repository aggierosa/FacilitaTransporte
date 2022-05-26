import { Router } from "express";

import StudentController from "../controllers/controller.student";
import { validateStudents } from "../middlewares";
import { studentSchema } from "../validations";

const studentsRouter = Router();

studentsRouter.post("/", validateStudents(studentSchema),StudentController.store);
studentsRouter.get("/", StudentController.index);
studentsRouter.get("/:student_id", StudentController.index);
studentsRouter.patch("/:student_id", StudentController.update);
studentsRouter.delete("/:student_id", StudentController.delete);

export default studentsRouter;
