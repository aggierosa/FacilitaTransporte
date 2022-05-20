import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity("parents")
  class Parent {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    telephone: string;
  }
  
  export default Parent;