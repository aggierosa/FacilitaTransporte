import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
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
  entry_time: string;

  @Column()
  departure_time: string;

  @ManyToOne(() => Parent, (parent) => parent.students, {
    eager: true
  })
  parent!: Parent;

  @ManyToOne(() => School, (school) => school.students, {
    eager: true
  })
  school!: Parent;

  @ManyToOne(() => Driver, (driver) => driver.students, {
    eager: true
  })
  driver!: Parent;
}

export default Student;
