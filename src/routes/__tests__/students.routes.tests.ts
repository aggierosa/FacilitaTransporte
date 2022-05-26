import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Create a student - Route", () => {
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

  test("Should be able to create a new student", async () => {
    const studentData = {
      name: "John Doe",
      address: "Doe st",
      entryTime: "1pm",
      departureTime: "5pm",
      parentId: "123",
      schoolId: "321",
      driverId: "132"
    };

    const response = await request(app).post("/students").send(studentData);
    
    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });
});