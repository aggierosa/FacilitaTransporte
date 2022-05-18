import { Request, Response } from "express"
import createDriverService from "../services/drivers/createDriverService"
import "express-async-errors"
import { AppDataSource } from "../data-source"
import Driver from "../models/Driver"

export default class UserController {
    static async store(request: Request, response: Response) {
      const { name, telephone } = request.body
  
      const newDriver = await createDriverService({name, telephone})
  
      return response.status(201).json(newDriver)
    }
  
    static async index(request: Request, response: Response) {
      const driverRepository = AppDataSource.getRepository(Driver);
  
      const drivers = await driverRepository.find();
  
      return response.json(drivers);
    }
  
    static async update(request: Request, response: Response) {
      const { driverId } = request.params;
      const { name, telephone } = request.body;
  
      const updatedDriver = await updateDriverService({driverId, name, telephone});
  
      return response.status(201).json(updatedDriver);
    }
  
    static async delete(request: Request, response: Response) {
      const { driverId } = request.params;
  
      const deleteDriver = await deleteDriverService(driverId);
  
      return response.status(204).json();
    }
  }