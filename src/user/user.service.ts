import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './interfaces/user.interface';
import { Car } from '@prisma/client';

@Injectable()
export class UserService {
  private allCars = [];
  private existsCategoryCars = false;

  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const existsEmail = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existsEmail) {
      throw new Error('Email already exists.');
    }

    this.allCars.push(await this.findAllCars());

    for (let i = 0; i < this.allCars.length; i++) {
      for (let j = 0; j < this.allCars[i].length; j++) {
        if (this.allCars[i][j].idCar === data.carId) {
          data.carId = this.allCars[i][j].idCar;
          this.existsCategoryCars = true;
          console.log(data.carId);
          break;
        }
      }

      if (i == this.allCars.length - 1) {
        if (this.existsCategoryCars === false) {
          throw new Error('Category not found');
        }
      }
    }

    const user = await this.prismaService.user.create({
      data,
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async findOneUser(idUser: string): Promise<User> {
    const existsUser = await this.prismaService.user.findUnique({
      where: {
        id: idUser,
      },
    });

    if (!existsUser) {
      throw new Error('User not found.');
    }

    return existsUser;
  }

  async findAllCars(): Promise<Car[]> {
    const cars = await this.prismaService.car.findMany();
    if (cars.length == 0) {
      throw new Error('There are no cars.');
    }
    return cars;
  }
}
