import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Put } from '@nestjs/common';
import { AccomodationEntity } from '@app/accomodation/accomodation.entity';
import { AccomodationService } from '@app/accomodation/accomodation.service';
import { CreateAccomodationDTO } from '@app/accomodation/dto/createAcomodation.dto';
import { Accomodation } from '@app/accomodation/decorator/accomodation.decorator';
import { UpdateAccomodationDTO } from '@app/accomodation/dto/updateAcomodation.dto';

@Controller()
export class AccomodationController {
    constructor(private readonly accomodationService: AccomodationService) {}

    @Get('accomodations')
    async getAllAccomodations(): Promise<any>{
        return await this.accomodationService.getAllAccomodations();
    }

    @Post('accomodations')
    @UsePipes(new ValidationPipe())
    async createAccomodation(
        @Body() createAccomodationDTO: CreateAccomodationDTO
    ): Promise<AccomodationEntity> {
        return await this.accomodationService.createAccomodation(createAccomodationDTO);
    }


    @Put('accomodations')
    async updateAccomodation(@Accomodation('id') accomodationCurrentId : number,
        @Body() updateAccomodationDTO: UpdateAccomodationDTO
     ): Promise<AccomodationEntity> {
        return await this.accomodationService.updateAccomodation(accomodationCurrentId, updateAccomodationDTO);
    }
    
}
