import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1657555067037 implements MigrationInterface {
    name = 'migrations1657555067037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accomodations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "roomsQuantity" integer NOT NULL, "roomType" character varying NOT NULL, "bedsQuantity" integer NOT NULL, "bedType" character varying NOT NULL, "bathRoomsQuantity" integer NOT NULL, "costPerNight" integer NOT NULL, "servicesIncluded" text array NOT NULL, CONSTRAINT "PK_e781b0018f254d90fd33044b666" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "accomodations"`);
    }

}
