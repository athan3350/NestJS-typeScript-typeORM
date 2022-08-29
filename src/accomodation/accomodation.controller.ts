import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { AccomodationEntity } from '@app/accomodation/accomodation.entity';
import { AccomodationService } from '@app/accomodation/accomodation.service';
import { CreateAccomodationDTO } from '@app/accomodation/dto/createAcomodation.dto';

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
    
}
