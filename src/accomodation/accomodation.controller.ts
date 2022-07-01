import { Controller, Get } from '@nestjs/common';
import { AccomodationService } from './accomodation.service';

@Controller('accomodation')
export class AccomodationController {
    constructor(private readonly accomodationService: AccomodationService) {}

    @Get()
    async getAllAccomodations(): Promise<any>{
        return await this.accomodationService.getAllAccomodations();
    }
}
