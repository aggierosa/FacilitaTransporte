import { AppDataSource } from "../../data-source"
import Driver from "../../entities/Driver"
import AppError from "../../errors/AppError";

const deleteDriverService = async (name: string) => {
    const driverRepository = AppDataSource.getRepository(Driver)

    const drivers = await driverRepository.find()

    const foundDriver = drivers.find(driver => driver.name === name)

    if (!foundDriver) {
        throw new AppError(`We could not find a driver under the name ${name}`)
    }

    await driverRepository.delete(foundDriver!.id)

    return true
}

export default deleteDriverService