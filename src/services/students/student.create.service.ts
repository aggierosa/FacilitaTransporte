import Student from "../../models/Student";
import Parent from "../../models/Parent";
import Driver from "../../models/Driver"
import School from "../../models/School";
import { AppDataSource } from "../../data-source";
import { IStudent } from "../../interfaces/interface.student";
import AppError from "../../errors/AppError";

const createStudentService = async (
  {name,
  address,
  entry_time,
  departure_time,
  parentId,
  schoolId,
  driverId
  }: IStudent) => {
  
    const studentRepository = AppDataSource.getRepository(Student);

    const parentRepository = AppDataSource.getRepository(Parent)

    const schoolRepository = AppDataSource.getRepository(School)

    const driverRepository = AppDataSource.getRepository(Driver)

    const parent = await parentRepository.findOneBy({id: parentId}) 

    const school = await schoolRepository.findOneBy({id: schoolId}) 
    
    const driver = await driverRepository.findOneBy({id: driverId})

    const foundStudent = await studentRepository.findOneBy({name: name}) 

    if (foundStudent) {
      throw new AppError(`There is already a student under the name ${name}`);
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

  const student = new Student()
  student.name = name
  student.address = address
  student.entry_time = entry_time
  student.departure_time = departure_time
  student.parent = parent
  student.school = school
  student.driver = driver
    
  studentRepository.create(student)
  await studentRepository.save(student);

  return student;
};

export default createStudentService;
