import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  id?: string;

  @IsNotEmpty()
  @Length(3, 10)
  modelCar: string;
}
