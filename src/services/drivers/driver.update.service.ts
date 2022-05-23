import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Driver from "../../models/Driver";

const updateDriverService = async (driverId: string, name: string, telephone: string) => {
    const driverRepository = AppDataSource.getRepository(Driver)

    const drivers = await driverRepository.find()

    const foundDriver = drivers.find(driver => driver.id === driverId)

    if (!foundDriver) {
        throw new AppError(`We could not find a driver under the id ${driverId}`)
    }

    await driverRepository.update(foundDriver!.id, { 
        name: name,
        telephone: telephone
    })

    return foundDriver
}

export default updateDriverService