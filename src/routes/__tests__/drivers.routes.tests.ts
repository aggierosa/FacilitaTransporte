import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";
import createDriverService from "../../services/drivers/driver.create.service"

describe("Create a driver - Route", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize().then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during initialization", err)
      );
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create a new driver", async () => {
    const driverData = {
      name: "John Doe",
      telephone: "123456",
    };

    const response = await request(app).post("/drivers").send(driverData);

    console.log("Hello")
    
    expect(response.status).toBe(404);

    expect(response.body).toHaveProperty("id");
  });
});