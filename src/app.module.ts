import { AccomodationModule } from './accomodation/accomodation.module';
import { TagModule } from './tag/tag.module';
import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule,TypeOrmModuleOptions } from '@nestjs/typeorm';
import ormConfigConstant from '@app/constants/ORMConfigConstant';
import { UserModule } from '@app/user/user.module';

@Module({
  imports: [
    AccomodationModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => (ormConfigConstant as TypeOrmModuleOptions),
    }),
    TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }