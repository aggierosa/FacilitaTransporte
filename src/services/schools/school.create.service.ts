import { ISchool } from "../../interfaces/interface.school";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import School from "../../models/School";

const createschoolService = async ({ name, address }: ISchool) => {
  const schoolRepository = AppDataSource.getRepository(School);

  const schools = await schoolRepository.find();

  const existentschool = schools.find((school) => school.name === name);

  if (existentschool) {
    throw new AppError("School already registered", 409);
  }

  const school = new School();
  school.name = name;
  school.address = address;

  schoolRepository.create(school);
  await schoolRepository.save(school);

  return school;
};

export default createschoolService;
