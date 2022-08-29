import { CreateAccomodationDTO } from "./createAcomodation.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAccomodationDTO extends PartialType(CreateAccomodationDTO) {}