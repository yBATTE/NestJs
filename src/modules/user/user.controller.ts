import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDTO, LoginUsersDTO } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  @ApiTags('users')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new User' })
  async createUser(@Body() createUserDTO: CreateUsersDTO) {
    const user = await this.usersService.createUser(createUserDTO);
    return { statusCode: HttpStatus.CREATED, result: user };
  }

  @Get()
  @ApiTags('users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get my User' })
  async getUser(@Body() loginUsersDTO: LoginUsersDTO) {
    const user = await this.usersService.getMyUser(loginUsersDTO);
    return { statusCode: HttpStatus.OK, result: user };
  }

  @Get('all')
  @ApiTags('users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all Users' })
  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return { statusCode: HttpStatus.OK, result: users };
  }
}
