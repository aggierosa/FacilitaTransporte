import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Parent from "./Parent";
import School from "./School";
import Driver from "./Driver";

@Entity("students")
class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  entryTime: string;

  @Column()
  departureTime: string;

  @ManyToOne(() => Parent, (parent) => parent.students, {
    eager: true,
  })
  parent: Parent;

  @ManyToOne(() => School, (school) => school.students, {
    eager: true,
  })
  school: School;

  @ManyToOne(() => Driver, (driver) => driver.students, {
    eager: true,
  })
  driver: Driver;
}

export default Student;
