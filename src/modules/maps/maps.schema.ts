import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Maps {
    @ApiProperty()
    @Prop({ required: true })
    address: string;

    @ApiProperty()
    @Prop({ required: false })
    iframe: string;
}

export const MapsSchema = SchemaFactory.createForClass(Maps);