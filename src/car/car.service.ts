import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CarService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCar(data: CreateCarDto): Promise<Car> {
    const modelCarExists = await this.prismaService.car.findFirst({
      where: {
        modelCar: data.modelCar,
      },
    });

    if (modelCarExists) {
      throw new Error('Model Car already exists');
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

  async findOne(id: string) {
    const carFindOne = await this.prismaService.car.findUnique({
      where: {
        idCar: id,
      },
    });
    return carFindOne;
  }

  async update(id: string, data: CreateCarDto) {
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
    await this.prismaService.car.delete({ where: { idCar: id } });
  }
}
