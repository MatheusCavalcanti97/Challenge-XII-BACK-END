import { IsNotEmpty, Length } from 'class-validator';

export class CreateCarDto {
  id?: string;

  @IsNotEmpty()
  @Length(3, 10)
  modelCar: string;
}
