import { AppDataSource } from "../../data-source"
import AppError from "../../errors/AppError";
import Driver from "../../models/Driver"

const deleteDriverService = async (driverId: string) => {
    const driverRepository = AppDataSource.getRepository(Driver)

    const drivers = await driverRepository.find()

    const foundDriver = drivers.find(driver => driver.id === driverId)

    if (!foundDriver) {
        throw new AppError(`We could not find a driver under the id ${driverId}`)
    }

    await driverRepository.delete(foundDriver!.id)

    return true
}

export default deleteDriverService