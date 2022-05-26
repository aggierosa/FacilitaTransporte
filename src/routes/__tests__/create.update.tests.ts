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

  let parentData = {
    id: "",
    name: "John Doe",
    telephone: "1234",
  };

  let driverData = {
    id: "",
    name: "John Doe",
    telephone: "1234",
  };

  let schoolData = {
    id: "",
    name: "John Doe",
    address: "1234",
  };
  
  let studentData = {
    id: "",
    name: "John Doe",
    address: "Doe st",
    entryTime: "1pm",
    departureTime: "5pm",
    parentId: "",
    schoolId: "",
    driverId: "",
  };

  test("Should be able to create a new driver", async () => {

    const response = await request(app).post("/drivers").send(driverData);

    driverData.id = response.body.id

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to create a new school", async () => {

    const response = await request(app).post("/schools").send(schoolData);

    schoolData.id = response.body.id
    
    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");

  });

  test("Should be able to create a new parent", async () => {

    const response = await request(app).post("/parents").send(parentData);

    parentData.id = response.body.id
    
    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });
  
  test("Should be able to create a new student", async () => {

    studentData.parentId = parentData.id
    studentData.schoolId = schoolData.id
    studentData.driverId = driverData.id
    
    const response = await request(app).post("/students").send(studentData);

    studentData.id = response.body.id
    
    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to update student", async () => {

    const newStudentData = {
    id: studentData.id,
    name: "Marie Doe",
    address: "Doe st",
    entryTime: "5pm",
    departureTime: "1am"
  }
    
    const response = await request(app).patch(`/students/${studentData.id}`).send(newStudentData);
    
    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to return a list of all registered parents", async () => {
    const response = await request(app).get("/parents");

    expect(response.status).toBe(200);
    
    expect(response.body).toHaveProperty("map");
  });

  test("Should be able to delete school", async () => {
    
    const response = await request(app).delete(`/school/${schoolData.id}`);
    console.log(schoolData.id)

    expect(response.status).toBe(204);
  });

});