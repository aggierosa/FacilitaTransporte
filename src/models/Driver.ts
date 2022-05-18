import Student from "./Student.ts"

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
  
  @Entity("drivers")
  class Driver {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    telephone: string;

    @OneToMany(type => Student, students => students.Driver)
    Student: Student []
  
  }
  
  export default Driver;