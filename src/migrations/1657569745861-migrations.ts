import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1657569745861 implements MigrationInterface {
    name = 'migrations1657569745861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accomodations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "roomsQuantity" integer NOT NULL, "roomType" character varying NOT NULL, "bedsQuantity" integer NOT NULL, "bedType" character varying NOT NULL, "bathRoomsQuantity" integer NOT NULL, "costPerNight" integer NOT NULL, "servicesIncluded" text array NOT NULL, CONSTRAINT "PK_e781b0018f254d90fd33044b666" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "accomodations"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
