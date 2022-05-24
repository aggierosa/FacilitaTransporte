import Student from "../../models/Student";
import Parent from "../../models/Parent";
import { AppDataSource } from "../../data-source";
import { IStudent } from "../../interfaces/interface.student";
import AppError from "../../errors/AppError";

const createStudentService = async (
  {name,
  address,
  entryTime,
  departureTime,
  parentId}: IStudent
) => {
  const studentRepository = AppDataSource.getRepository(Student);

  const parentRepository = AppDataSource.getRepository(Parent)

  const findParent = parentRepository.findOne({where: {id === parentId}})

  const students = studentRepository.findOne({where: {name === name}});

  const existentStudent = students.find(student => student.name === name);

  if (existentStudent) {
    throw new AppError("Student already registered", 409);
  }

  const createStudent = studentRepository.create({
    name, address, entryTime, departureTime, parent: findParent
  });
  await studentRepository.save(createStudent);

  return student;
};

export default createStudentService;
