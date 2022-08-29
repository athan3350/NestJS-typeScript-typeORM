import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationEntity } from '@app/accomodation/accomodation.entity';
import { CreateAccomodationDTO } from '@app/accomodation/dto/createAcomodation.dto';
import { UpdateAccomodationDTO } from './dto/updateAcomodation.dto';


@Injectable()
export class AccomodationService {
    constructor(
        @InjectRepository(AccomodationEntity)
        private readonly accomodationRepository: Repository<AccomodationEntity>
    ) { }

    async getAllAccomodations(): Promise<any> {
        return await this.accomodationRepository.find();
    }

    async createAccomodation(createAccomodationDTO: CreateAccomodationDTO): Promise<AccomodationEntity> {
        const accomodationByName = await this.accomodationRepository.findOneBy({ name: createAccomodationDTO.name });

        if (accomodationByName) throw new HttpException('This name of acomodation already exists', HttpStatus.UNPROCESSABLE_ENTITY);

        const newAccomodation = new AccomodationEntity()
        Object.assign(newAccomodation, createAccomodationDTO);

        return await this.accomodationRepository.save(newAccomodation);
    }

    async updateAccomodation(idAccomodation: number, updateAccomodationDTO: UpdateAccomodationDTO): Promise<AccomodationEntity> {

        const accomodation = await this.accomodationRepository.findOneBy({ id: idAccomodation })

        Object.assign(accomodation, updateAccomodationDTO);

        return await this.accomodationRepository.save(accomodation);
    }

}
