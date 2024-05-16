import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCar(data: CreateCarDto): Promise<Car> {
    data.category = data.category.toUpperCase();
    const categoryCarExists = await this.prismaService.car.findFirst({
      where: {
        category: data.category,
        link: data.link,
      },
    });

    if (categoryCarExists) {
      throw new Error('Category Car already exists');
    }

    const car = await this.prismaService.car.create({
      data,
    });

    return car;
  }

  async findAll(): Promise<Car[]> {
    const car = await this.prismaService.car.findMany();

    return car;
  }

  async findOne(id: string): Promise<Car> {
    const carFindOne = await this.prismaService.car.findUnique({
      where: {
        idCar: id,
      },
    });
    return carFindOne;
  }

  async findOneCategory(category: string): Promise<Car> {
    category = category.toUpperCase();
    const carFindOneCategory = await this.prismaService.car.findUnique({
      where: {
        category: category,
      },
    });

    if (!carFindOneCategory) {
      throw new Error('Category Car Not cadastred.');
    }
    return await this.prismaService.car.findUnique({
      where: {
        category: category,
      },
    });
  }

  async update(id: string, data: CreateCarDto): Promise<Car> {
    const modelCarExists = await this.prismaService.car.findUnique({
      where: {
        idCar: id,
      },
    });

    if (!modelCarExists) {
      throw new Error('Model Car not Exists');
    }

    const carPut = await this.prismaService.car.update({
      where: {
        idCar: id,
      },
      data,
    });

    return carPut;
  }

  async remove(id: string): Promise<void> {
    const modelCarExists = await this.prismaService.car.findFirst({
      where: {
        idCar: id,
      },
    });

    if (!modelCarExists) {
      throw new Error('Model Car not Exists');
    } else {
      await this.prismaService.car.delete({ where: { idCar: id } });
      console.log('Car Exclude of the data.');
    }
  }

  async removePerModelCar(category: string): Promise<Car> {
    category = category.toUpperCase();
    const categoryCarExists = await this.prismaService.car.findFirst({
      where: {
        category: category,
      },
    });

    if (!categoryCarExists) {
      throw new Error('Model Car not Exists');
    }
    console.log('Model Car exists and will be deleted');

    const car = await this.prismaService.car.delete({
      where: { category: category },
    });
    return car;
  }
}
