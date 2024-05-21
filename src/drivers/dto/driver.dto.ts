import {
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsString,
  Matches,
} from 'class-validator';

export class CreateDriverDto {
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Last name is required' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Country is required' })
  @IsString()
  country: string;

  @IsNotEmpty({ message: 'City is required' })
  @IsString()
  city: string;

  @IsNotEmpty({ message: 'Postal code is required' })
  @Matches(/^[0-9]{5}-[0-9]{3}$/, {
    message: 'Postal code must be in the format 12345-678',
  })
  postalCode: string;

  @IsNotEmpty({ message: 'isOwnCar is required' })
  @IsBoolean()
  isOwnCar: boolean;

  @IsNotEmpty({ message: 'Car model is required' })
  @IsString()
  carModel: string;
}
