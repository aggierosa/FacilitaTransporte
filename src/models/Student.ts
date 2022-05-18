import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import Parent from "./Parent.ts";
import School from "./School.ts";
import Driver from "./Driver.ts";

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

  @OneToOne(() => Parent)
  parent_id: Parent.id;

  @OneToOne(() => School)
  school_id: School.id;

  @OneToOne(() => Driver)
  driver_id: Driver.id;
}

export default Student;
