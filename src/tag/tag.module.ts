import { TagService } from './tag.service';
import { TagController } from './tag.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        TagController,],
    providers: [
        TagService,],
})
export class TagModule { }
