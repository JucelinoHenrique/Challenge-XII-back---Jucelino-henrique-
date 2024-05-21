import {
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsString,
  Matches,
} from 'class-validator';

export class CreateDriverDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @Matches(/^[0-9]{5}-[0-9]{3}$/)
  postalCode: string;

  @IsNotEmpty()
  @IsBoolean()
  isOwnCar: boolean;

  @IsNotEmpty()
  @IsString()
  carModel: string;
}
