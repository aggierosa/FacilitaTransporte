import { IParent } from "../../interfaces/interface.parent"
import { AppDataSource } from "../../data-source"
import AppError from "../../errors/AppError"
import Parent from "../../models/Parent"

const createParentService = async ({name, telephone}: IParent) => {
    const parentRepository = AppDataSource.getRepository(Parent)

    const parents = await parentRepository.find()

    const existentParent = parents.find(parent => parent.name === name)

    if (existentParent){
        throw new AppError("Parent already registered", 409)
    }

    const parent = new Parent()
    parent.name = name
    parent.telephone = telephone

    parentRepository.create(parent)
    await parentRepository.save(parent)

    return parent
}

export default createParentService
