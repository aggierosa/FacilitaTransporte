import {
    Entity,
    Column,
    PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity("drivers")
  class Driver {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    telephone: string;

  }
  
  export default Driver;