import { Request, Response } from "express"
import "express-async-errors"
import { AppDataSource } from "../data-source"
import Parent from "../models/Parent"

import createParentService from "../services/parent/createParentService"
import updateParentService from "../services/parent/updateParentService"
import deleteParentService from "../services/parent/deleteParentService"

export default class UserController {
    static async store(request: Request, response: Response) {
      const { name, telephone } = request.body
  
      const newParent = await createParentService({name, telephone})
  
      return response.status(201).json(newParent)
    }
  
    static async index(request: Request, response: Response) {
      const parentRepository = AppDataSource.getRepository(Parent);
  
      const parents = await parentRepository.find();
  
      return response.json(parents);
    }
  
    static async update(request: Request, response: Response) {
      const { parentId } = request.params;
      const { name, telephone } = request.body;
  
      const updatedParent = await updateParentService({parentId, name, telephone});
  
      return response.status(201).json(updatedParent);
    }
  
    static async delete(request: Request, response: Response) {
      const { parentId } = request.params;
  
      const deleteParent = await deleteParentService(parentId);
  
      return response.status(204).json();
    }
  }