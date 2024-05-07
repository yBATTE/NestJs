import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { GoogleMapsService } from './maps.service';

const SERVICES = [GoogleMapsService];

@Module({
  imports: [ConfigModule.forRoot()],
  providers: SERVICES,
  exports: SERVICES,
})
export class SharedModule {}
