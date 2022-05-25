import Student from "../../models/Student";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

const updateStudentService = async (
  id: string,
  name: string,
  address: string,
  entryTime: string,
  departureTime: string,
  parentId: string,
  schoolId: string,
  driverId: string,) => {
    const studentRepository = AppDataSource.getRepository(Student);

// fazer find pelo id do parent, school e driver

    const student = await studentRepository.findOneBy({id: id}) 

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
      driver: driver,
  })

    return studentRepository.save(student);
  }

export default updateStudentService