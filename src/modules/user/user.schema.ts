import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Schema()
export class Users {
  @ApiProperty()
  @Prop({ required: true })
  @IsString()
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  @IsString()
  email: string;

  @ApiProperty()
  @Prop({ required: true })
  @IsString()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);