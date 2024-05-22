import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(createUserDto);
    return user;
  }

  @Get('allUser')
  async findAll(): Promise<CreateUserDto[]> {
    const user = await this.userService.findAll();
    return user;
  }

  @Get('findUser/:id')
  async findOneUser(@Param('id') id: string): Promise<CreateUserDto> {
    const user = await this.userService.findOneUser(id);
    return user;
  }
}
