import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDTO, LoginUsersDTO } from './user.dto';
import { Users } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async createUser(createUserDTO: CreateUsersDTO) {
    return await this.usersModel.create(createUserDTO);
  }

  async getMyUser(loginUsersDTO: LoginUsersDTO) {
    const user = await this.usersModel.findOne({
      email: loginUsersDTO.email,
      password: loginUsersDTO.password,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  };

  async getAllUsers() {
    return await this.usersModel.find();
  }
}
