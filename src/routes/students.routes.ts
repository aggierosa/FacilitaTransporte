import { Router } from "express";

import StudentController from "../controllers/controller.student";

const studentsRouter = Router();

studentsRouter.post("/students", StudentController.store);
studentsRouter.get("/students", StudentController.index);
studentsRouter.get("/students/:student_id", StudentController.index);
studentsRouter.patch("/students/:student_id", StudentController.update);
studentsRouter.delete("/students/:student_id", StudentController.delete);

export default studentsRouter;
