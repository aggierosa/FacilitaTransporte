import Student from "../../models/Student";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

 const deleteStudentService = async (id: string) => {
     const studentRepository = AppDataSource.getRepository(Student);

    const student = await studentRepository.findOne({
      where: {
        id,
      },
    });

    if (!student) {
      throw new AppError(`We could not find a student under the id ${id}`);
    }

    await studentRepository.delete(id);

    return true
 }

export default deleteStudentService