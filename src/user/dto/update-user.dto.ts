import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last Name not Empty' })
  @MaxLength(50)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  country: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(250)
  referralCode: string;

  @IsNotEmpty()
  ownCar: boolean;

  @IsNotEmpty()
  carId: string;
}
