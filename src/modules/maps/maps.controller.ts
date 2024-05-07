import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { MapsService } from "./maps.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateMapsDTO } from "./maps.dto";
import { get } from "http";

@Controller('maps')
export class MapsController {
  constructor(private mapsService: MapsService) {}

  @Post()
  @ApiTags('maps')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new map' })
  async createMaps(@Body() createMapsDTO: CreateMapsDTO) {
    const map = await this.mapsService.createMaps(createMapsDTO);
    return { statusCode: HttpStatus.CREATED, result: map };
  }
}