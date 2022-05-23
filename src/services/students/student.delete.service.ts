import Student from "../../models/Student";
import { DeleteResult } from "typeorm";
import { AppDataSource } from "../../data-source";

interface UserDataParams {
  id: string;
}

export default class DeleteStudentService {
  public async execute({ id }: UserDataParams): Promise<DeleteResult> {
    const studentRepository = AppDataSource.getRepository(Student);

    const student = await studentRepository.findOne({
      where: {
        id,
      },
    });

    if (!student) {
      throw new Error("User not found");
    }

    return await studentRepository.delete(id);
  }
}
