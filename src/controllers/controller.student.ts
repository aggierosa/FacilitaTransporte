import { Request, Response } from "express";
import "express-async-errors";
import { AppDataSource } from "../data-source";
import Student from "../models/Student";

import CreateStudentService from "../services/students/student.create.service";
import UpdateStudentService from "../services/students/student.update.service";
import DeleteStudentService from "../services/students/student.delete.service";

export default class StudentController {
  static async store(request: Request, response: Response) {
    const {
      name,
      address,
      entryTime,
      departureTime,
      parentId,
      schoolId,
      driverId,
    } = request.body;

    const newStudent = await CreateStudentService({
      name,
      address,
      entryTime,
      departureTime,
      parentId,
      schoolId,
      driverId,
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
    const {
      name,
      address,
      entryTime,
      departureTime,
      parentId,
      schoolId,
      driverId,
    } = request.body;

    const updatedStudent = await UpdateStudentService(
      studentId,
      name,
      address,
      entryTime,
      departureTime,
      parentId,
      schoolId,
      driverId,
    );

    return response.status(201).json(updatedStudent);
  }

  static async delete(request: Request, response: Response) {
    const { studentId } = request.params;

    const deleteStudent = await DeleteStudentService(studentId);

    return response.status(204).json();
  }
}
