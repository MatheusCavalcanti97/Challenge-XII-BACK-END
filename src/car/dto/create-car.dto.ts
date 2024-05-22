import { IsNotEmpty, Length } from 'class-validator';

export class CreateCarDto {
  id?: string;

  @IsNotEmpty()
  @Length(3, 50)
  category: string;

  @IsNotEmpty()
  @Length(3, 250)
  text: string;

  @IsNotEmpty()
  @Length(3, 250)
  link: string;
}
