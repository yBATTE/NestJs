import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import morgan from './configs/morgan.config';
import helmet from 'helmet';
import { MapsModule } from './modules/maps/maps.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot( 'mongodb://notiwork:secret@localhost:27017/Maps?authSource=admin', {
      serverSelectionTimeoutMS: 5000,
    }),
    MapsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), morgan).forRoutes('*');
  }
}
