import { IDriver } from "../../interfaces/interface.driver"
import { AppDataSource } from "../../data-source"
import AppError from "../../errors/AppError"
import Driver from "../../models/Driver"

const createDriverService = async ({name, telephone}: IDriver) => {
    const driverRepository = AppDataSource.getRepository(Driver)

    const drivers = await driverRepository.find()

    const existentDriver = drivers.find(driver => driver.name === name)

    if (existentDriver){
        throw new AppError("Driver already registered", 409)
    }

    const driver = new Driver()
    driver.name = name
    driver.telephone = telephone

    driverRepository.create(driver)
    await driverRepository.save(driver)

    return driver
}

export default createDriverService
