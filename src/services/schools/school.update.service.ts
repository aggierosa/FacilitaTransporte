import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import School from "../../models/School";

const updateschoolService = async (
  schoolId: string,
  name: string,
  address: string
) => {
  const schoolRepository = AppDataSource.getRepository(School);

  const schools = await schoolRepository.find();

  const foundSchool = schools.find((school) => school.id === schoolId);

  if (!foundSchool) {
    throw new AppError(`We could not find a School under the id ${schoolId}`);
  }

  await schoolRepository.update(foundSchool!.id, {
    name: name,
    address: address,
  });

  return foundSchool;
};

export default updateschoolService;
