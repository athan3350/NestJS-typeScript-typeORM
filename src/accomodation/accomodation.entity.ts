import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'accomodations'  })
export class AccomodationEntity {

    @PrimaryGeneratedColumn()
    id: number;

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