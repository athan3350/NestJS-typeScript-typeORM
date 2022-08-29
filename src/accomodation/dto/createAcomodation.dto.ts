import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateAccomodationDTO {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly roomsQuantity: number;

    @IsNotEmpty()
    readonly roomType: string;

    @IsNotEmpty()
    @IsNumber()
    readonly bedsQuantity: number;

    @IsNotEmpty()
    readonly bedType: string;

    @IsNotEmpty()
    @IsNumber()
    readonly bathRoomsQuantity: number;

    @IsNotEmpty()
    @IsNumber()
    readonly costPerNight: number;

    @IsArray()
    @Column("text", { array: true })
    readonly servicesIncluded: string[];
    
}