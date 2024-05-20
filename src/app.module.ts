import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import morgan from './configs/morgan.config';
import helmet from 'helmet';
import { MapsModule } from './modules/maps/maps.module';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb://notiwork:secret@localhost:27017/Nestjs?authSource=admin',
      {
        serverSelectionTimeoutMS: 5000,
      },
    ),
    MapsModule,
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), morgan).forRoutes('*');
  }
}
