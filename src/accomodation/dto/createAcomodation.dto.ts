import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateAccomodationDTO {

    @Column()
    name: string;

    @Column()
    roomsQuantity: number;

    @Column()
    roomType: string;

    @Column()
    bedsQuantity: number;

    @Column()
    bedType: string;

    @Column()
    bathRoomsQuantity: number;

    @Column()
    costPerNight: number;

    @Column("text", { array: true })
    servicesIncluded: string[];
    
}