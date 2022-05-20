import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity("schools")
  class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    address: string;
  }
  
  export default School;