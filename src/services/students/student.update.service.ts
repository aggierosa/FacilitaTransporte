import Student from "../../models/Student";
import { AppDataSource } from "../../data-source";

interface StudentDataParams {
  name: string;
  address: string;
  entry_time: string;
  departure_time: string;
  parent?: string;
  school?: string;
  driver?: string;
}

export default class UpdateStudentService {
  public async execute({
    id,
    name,
    address,
    entry_time,
    departure_time,
    parent,
    school,
    driver,
  }: StudentDataParams): Promise<Student> {
    const studentRepository = AppDataSource.getRepository(Student);

    const student = await studentRepository.findOne({ where: { id } });

    if (!student) {
      throw new Error("User not found");
    }

    name ? (student.name = name) : student.name;
    address ? (student.address = address) : student.address;
    entry_time ? (student.entry_time = entry_time) : student.entry_time;
    departure_time
      ? (student.departure_time = departure_time)
      : student.departure_time;
    parent ? (student.parent = parent) : student.parent;
    school ? (student.school = school) : student.school;
    driver ? (student.driver = driver) : student.driver;

    return studentRepository.save(student);
  }
}
