import Student from "./Student";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
  } from "typeorm";
  
  @Entity("schools")
  class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    address: string;

    @OneToMany(() => Student, (student) => student.school, )
    students!: Student[]
  }
  
  export default School;