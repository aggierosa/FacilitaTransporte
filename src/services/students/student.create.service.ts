import Student from "../../models/Student";
import Parent from "../../models/Parent";
import { AppDataSource } from "../../data-source";

interface StudentDataParams {
  name: string;
  address: string;
  entry_time: string;
  departure_time: string;
  parent: string;
  school?: string;
  driver?: string;
}

export default class CreateStudentService {
  public async execute(data: StudentDataParams): Promise<Student> {
    const studentRepository = AppDataSource.getRepository(Student);

    const parentRepository = AppDataSource.getRepository(Parent);
    const { name, address, entry_time, departure_time } = data;

    const parent = parentRepository.findOneOrFail({
      id: data.parent,
    });

    const student = studentRepository.create({
      name,
      address,
      entry_time,
      departure_time,
      parent: parent,
    });

    await studentRepository.save(student);

    return student;
  }
}
