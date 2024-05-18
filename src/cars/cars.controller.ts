import { Controller, Get } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
