import { MigrationInterface, QueryRunner } from "typeorm";

export class initallmigration1653606740016 implements MigrationInterface {
    name = 'initallmigration1653606740016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "telephone" character varying NOT NULL, CONSTRAINT "PK_9a4dc67c7b8e6a9cb918938d353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schools" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, "entryTime" character varying NOT NULL, "departureTime" character varying NOT NULL, "parentId" uuid, "schoolId" uuid, "driverId" uuid, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "telephone" character varying NOT NULL, CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_6fea943b3b432a9e3e38d53c31b" FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_44855579fce3690c57ae8b12999" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_ef997685571c1fd0aa66f5d3ca9" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_ef997685571c1fd0aa66f5d3ca9"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_44855579fce3690c57ae8b12999"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_6fea943b3b432a9e3e38d53c31b"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "schools"`);
        await queryRunner.query(`DROP TABLE "parents"`);
    }

}
