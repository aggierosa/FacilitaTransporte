import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Parent from "../../models/Parent";

const updateParentService = async (parentId: string, name: string, telephone: string) => {
    const parentRepository = AppDataSource.getRepository(Parent)

    const parents = await parentRepository.find()

    const foundParent = parents.find(parent => parent.id === parentId)

    if (!foundParent) {
        throw new AppError(`We could not find a parent under the id ${parentId}`)
    }

    await parentRepository.update(foundParent!.id, { 
        name: name,
        telephone: telephone
    })

    return foundParent
}

export default updateParentService