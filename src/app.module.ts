import { AccomodationModule } from '@app/accomodation/accomodation.module';
import { TagModule } from '@app/tag/tag.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import ormConfigConstant from '@app/constants/ORMConfigConstant';
import { UserModule } from '@app/user/user.module';
import { authMiddleware } from '@app/user/middlewares/auth.middleware';

@Module({
  imports: [
    AccomodationModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => (ormConfigConstant as TypeOrmModuleOptions),
    }),
    TagModule, UserModule],
  controllers: [
     AppController],
  providers: [AppService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer){
    consumer.apply(authMiddleware).forRoutes(
      {
        path: '*',
        method: RequestMethod.ALL
      }
    )
  }
}