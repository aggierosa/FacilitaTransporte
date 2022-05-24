import { Request, Response } from "express"
import "express-async-errors"
import { AppDataSource } from "../data-source"
import School from "../models/School"

import createSchoolService from "../services/schools/school.create.service"
import updateSchoolService from "../services/schools/school.update.service"
import deleteSchoolService from "../services/schools/school.delete.service"

export default class SchoolController {
    static async store(request: Request, response: Response) {
      const { name, address } = request.body
  
      const newSchool = await createSchoolService({name, address})
  
      return response.status(201).json(newSchool)
    }
  
    static async index(request: Request, response: Response) {
      const schoolRepository = AppDataSource.getRepository(School);
  
      const schools = await schoolRepository.find();
  
      return response.json(schools);
    }
  
    static async update(request: Request, response: Response) {
      const { schoolId } = request.params;
      const { name, address } = request.body;
  
      const updatedSchool = await updateSchoolService(schoolId, name, address);
  
      return response.status(201).json(updatedSchool);
    }
  
    static async delete(request: Request, response: Response) {
      const { schoolId } = request.params;
  
      const deleteSchool = await deleteSchoolService(schoolId);
  
      return response.status(204).json();
    }
  }