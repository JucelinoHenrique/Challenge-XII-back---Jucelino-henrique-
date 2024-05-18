import { Controller, Post, Body, Get, Logger } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/driver.dto';
import { Driver } from './driver.entity';

@Controller('drivers')
export class DriversController {
  private readonly logger = new Logger(DriversController.name);

  constructor(private readonly driversService: DriversService) {}

  @Post()
  async create(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
    this.logger.log('Received request to create driver');
    const createdDriver = await this.driversService.create(createDriverDto);
    this.logger.log(`Driver created with ID: ${createdDriver.id}`);
    return createdDriver;
  }

  @Get('countries')
  getCountries(): string[] {
    return ['Brasil', 'Estados Unidos', 'Canadá', 'Alemanha', 'França'];
  }

  @Get('cities')
  getCities(): string[] {
    return ['São Paulo', 'Nova York', 'Toronto', 'Berlim', 'Paris'];
  }
}
