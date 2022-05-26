import Student from "../../models/Student";
import Parent from "../../models/Parent";
import { AppDataSource } from "../../data-source";
import { IStudent } from "../../interfaces/interface.student";
import AppError from "../../errors/AppError";

const createStudentService = async ({name,address,entryTime,departureTime,parentId}: IStudent) => {
  
  const studentRepository = AppDataSource.getRepository(Student);

  const students = await studentRepository.find();

  const existentStudent = students.find(student => student.name === name);

  if (existentStudent) {
    throw new AppError("Student already registered", 409);
  }

  const parentRepository = AppDataSource.getRepository(Parent)

  const parents = await parentRepository.findOneBy({id: parentId}) 

  if (!parents) {
    throw new AppError(`We couldn't find a parent under the id ${parentId}`, 409);
  }

  const student = new Student()
  student.name = name
  student.address = address
  student.entryTime = entryTime
  student.departureTime = departureTime
  student.parent = parents
    
  studentRepository.create(student)
  await studentRepository.save(student);

  return student;
};

export default createStudentService;
