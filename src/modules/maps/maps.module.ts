import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Maps, MapsSchema } from './maps.schema';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { SharedModule } from 'src/shared/services/shared.module';

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Maps.name,
        schema: MapsSchema,
      },
    ]),
  ],
  controllers: [MapsController],
  providers: [MapsService],
})
export class MapsModule {}
