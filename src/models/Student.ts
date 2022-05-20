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

  @ManyToOne(() => Parent)
  parent_id: Parent["id"];

  @ManyToOne(() => School)
  school_id: School["id"];

  @ManyToOne(() => Driver)
  driver_id: Driver["id"];
}

export default Student;
