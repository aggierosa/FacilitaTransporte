import { AppDataSource } from "../../data-source";
import School from "../../models/School";
import AppError from "../../errors/AppError";

const deleteSchoolService = async (schoolId: string) => {
  const schoolRepository = AppDataSource.getRepository(School);

  const schools = await schoolRepository.find();

  const foundSchool = schools.find((school) => school.id === schoolId);

  if (!foundSchool) {
    throw new AppError(`We could not find a School under the id ${schoolId}`);
  }

  await schoolRepository.delete(foundSchool!.id);
  console.log(foundSchool)

  return true;
};

export default deleteSchoolService;
