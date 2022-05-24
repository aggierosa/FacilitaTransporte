import Student from "../../models/Student";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

const updateStudentService = async (
  id: string,
  name: string,
  address: string,
  entryTime: string,
  departureTime: string,
  parent: string,
  school: string,
  driver: string,) => {
    const studentRepository = AppDataSource.getRepository(Student);

    const student = await studentRepository.findOne({ where: { id } });

    if (!student) {
      throw new AppError(`We could not find a driver under the id ${id}`);
    }

    await studentRepository.update(student.id, { 
      name: name,
      address: address,
      entryTime: entryTime,
      departureTime: departureTime,
      parent: parent,
      school: school,
      driver: driver
  })

    return studentRepository.save(student);
  }

export default updateStudentService