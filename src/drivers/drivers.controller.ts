import {
  Controller,
  Post,
  Body,
  Get,
  Logger,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/driver.dto';

@Controller('drivers')
export class DriversController {
  private readonly logger = new Logger(DriversController.name);

  constructor(private readonly driversService: DriversService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get('countries')
  async getCountries() {
    return this.driversService.findCountries();
  }

  @Get('cities')
  async getCities(@Query('country') country: string) {
    return this.driversService.findCities(country);
  }
}
