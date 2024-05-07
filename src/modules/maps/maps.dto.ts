import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMapsDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Address'})
    address: string;
}