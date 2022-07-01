import { AccomodationService } from './accomodation.service';
import { AccomodationController } from './accomodation.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccomodationEntity } from './accomodation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AccomodationEntity])],
    controllers: [
        AccomodationController,],
    providers: [
        AccomodationService,],
})
export class AccomodationModule { }
