import { AccomodationModule } from '@app/accomodation/accomodation.module';
import { TagModule } from '@app/tag/tag.module';
import { UserModule } from '@app/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';

@Module({
  imports: [
    AccomodationModule, TypeOrmModule.forRootAsync(ormconfig),TagModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
