import { AppDataSource } from "../../data-source";
import School from "../../models/School";
import AppError from "../../errors/AppError";

const deleteSchoolService = async (name: string) => {
  const schoolRepository = AppDataSource.getRepository(School);

  const Schools = await schoolRepository.find();

  const foundSchool = Schools.find((school) => school.name === name);

  if (!foundSchool) {
    throw new AppError(`We could not find a School under the name ${name}`);
  }

  await schoolRepository.delete(foundSchool!.id);

  return true;
};

export default deleteSchoolService;
