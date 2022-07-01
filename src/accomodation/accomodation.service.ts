import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccomodationEntity } from './accomodation.entity';


@Injectable()
export class AccomodationService {
    constructor(
        @InjectRepository(AccomodationEntity)
        private readonly accomodationRepository: Repository<AccomodationEntity>
    ){}

   async getAllAccomodations(): Promise<any>{
    return await this.accomodationRepository.find();
   }
}
 