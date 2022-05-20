import Student from "./Student";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
  
  @Entity("parents")
  class Parent {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    telephone: string;

    @OneToMany(() => Student, (student) => student.parent, )
    students!: Student[]
  }
  
  export default Parent;