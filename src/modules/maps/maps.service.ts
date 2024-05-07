import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Maps } from "./maps.schema";
import { Model } from "mongoose";
import axios from "axios";
import { CreateMapsDTO } from "./maps.dto";
import { GoogleMapsService } from "src/shared/services/maps.service";
import { ModuleRef } from "@nestjs/core";


interface Coordenadas {
    latitud: number;
    longitud: number;
}

@Injectable()
export class MapsService {
    private googleMapsService: GoogleMapsService;
  constructor(
    @InjectModel(Maps.name) private mapsModel: Model<Maps>,
    private moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    this.googleMapsService = this.moduleRef.get(GoogleMapsService, { strict: false });
  }

async createMaps(createMapsDTO: any) {
    const address = await createMapsDTO.address;
    const iframe = await this.googleMapsService.createMaps(address.toString());
    const newMap = await this.mapsModel.create({
        address: address,
        iframe: iframe
    });
    return newMap;
    }
}