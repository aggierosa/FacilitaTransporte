import Student from "./Student";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
  } from "typeorm";
  
  @Entity("drivers")
  class Driver {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    telephone: string;

    @OneToMany(() => Student, (student) => student.driver, )
    students!: Student[]
  }
  
  export default Driver;