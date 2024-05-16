import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  //Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('add')
  async createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    const car = await this.carService.createCar(createCarDto);
    return car;
  }

  @Get('allCar')
  async findAll() {
    const car = await this.carService.findAll();
    return car;
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    const carPut = this.carService.update(id, updateCarDto);
    return carPut;
  }

  @Delete('findOne/:modelCar')
  async removePerModelCar(@Param('modelCar') modelCar: string) {
    const car = await this.carService.removePerModelCar(modelCar);
    return car;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const car = await this.carService.remove(id);
    return car;
  }
}

// @Put()
// async update(@Body() updateCarDto: CreateCarDto) {
//   const car = await this.carService.update(updateCarDto.id, updateCarDto);
//   return car;
// }
