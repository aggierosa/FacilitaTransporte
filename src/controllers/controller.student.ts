import { Request, Response } from "express";
import "express-async-errors";
import { AppDataSource } from "../data-source";
import { Student } from "../models/Student";

import createStudentService from "../services/students/createStudent.service";
import updateStudentService from "../services/students/updateStudent.service";
import deleteStudentService from "../services/students/deleteStudent.service";

export default class StudentController {
  static async store(request: Request, response: Response) {
    const {
      name,
      address,
      entry_time,
      departure_time,
      parents_id,
      school_id,
      drivers_id,
    } = request.body;
    const newStudent = await createStudentService({
      name,
      address,
      entry_time,
      departure_time,
      parents_id,
      school_id,
      drivers_id,
    });
    return response.status(201).json(newStudent);
  }

  static async index(request: Request, response: Response) {
    const studentRepository = AppDataSource.getRepository(Student);

    const student = await studentRepository.find();

    return response.json(student);
  }
  static async update(request: Request, response: Response) {
    const { studentId } = request.params;
    const { name, telephone } = request.body;

    const updatedStudent = await updateStudentService({
      studentId,
      name,
      telephone,
    });

    return response.status(201).json(updatedStudent);
  }

  static async delete(request: Request, response: Response) {
    const { studentId } = request.params;

    const deleteStudent = await deleteStudentService(studentId);

    return response.status(204).json();
  }
}
