import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Driver from "../../models/Driver";

const updateDriverService = async (name: string, telephone: string) => {
    const driverRepository = AppDataSource.getRepository(Driver)

    const drivers = await driverRepository.find()

    const foundDriver = drivers.find(driver => driver.name === name)

    if (!foundDriver) {
        throw new AppError(`We could not find a driver under the name ${name}`)
    }

    await driverRepository.update(foundDriver!.id, { 
        name: name,
        telephone: telephone
    })

    return foundDriver
}

export default updateDriverService