/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {

    findAll(): string[] {
        return ['dragons', 'coffee', 'weather']
 
    }
}
