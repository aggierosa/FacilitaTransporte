import { Request, Response } from "express"
import "express-async-errors"
import { AppDataSource } from "../data-source"
import Parent from "../models/Parent"

import createParentService from "../services/parents/parent.create.service"
import updateParentService from "../services/parents/parent.update.service"
import deleteParentService from "../services/parents/parent.delete.service"

export default class ParentController {
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
  
      const updatedParent = await updateParentService(parentId, name, telephone);
  
      return response.status(201).json(updatedParent);
    }
  
    static async delete(request: Request, response: Response) {
      const { parentId } = request.params;
  
      const deleteParent = await deleteParentService(parentId);
  
      return response.status(204).json();
    }
  }