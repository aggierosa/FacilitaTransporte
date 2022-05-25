import Student from "../../models/Student";
import Parent from "../../models/Parent";
import School from "../../models/School";
import Driver from "../../models/Driver";
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

    const parentRepository = AppDataSource.getRepository(Parent)

    const schoolRepository = AppDataSource.getRepository(School)

    const driverRepository = AppDataSource.getRepository(Driver)

    const parent = await parentRepository.findOneBy({id: parentId}) 

    const school = await schoolRepository.findOneBy({id: schoolId}) 
    
    const driver = await driverRepository.findOneBy({id: driverId})

    const student = await studentRepository.findOneBy({id: id}) 

    if (!student) {
      throw new AppError(`We could not find a student under the id ${id}`);
    }

    if (!parent) {
      throw new AppError(`We could not find a parent under the id ${parentId}`);
    }

    if (!school) {
      throw new AppError(`We could not find a school under the id ${schoolId}`);
    }

    if (!driver) {
      throw new AppError(`We could not find a driver under the id ${driverId}`);
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