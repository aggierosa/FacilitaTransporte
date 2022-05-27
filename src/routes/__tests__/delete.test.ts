import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing success - Routes", () => {
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

  let schoolData = {
    id: "",
    name: "John Doe",
    address: "1234",
  };

  test("Should be able to create a new school", async () => {

    const response = await request(app).post("/schools").send(schoolData);

    schoolData.id = response.body.id
    
    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");

  });

test("Should be able to delete school", async () => {
    
    const response = await request(app).delete(`/school/${schoolData.id}`);
    console.log(schoolData.id)

    expect(response.status).toBe(204);
  });
});