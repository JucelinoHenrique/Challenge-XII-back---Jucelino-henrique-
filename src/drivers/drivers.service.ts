import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/driver.dto';
import { Driver } from './driver.entity';
import axios from 'axios';

@Injectable()
export class DriversService {
  private readonly logger = new Logger(DriversService.name);
  private readonly countriesUrl =
    'https://countriesnow.space/api/v0.1/countries';
  private readonly citiesUrl =
    'https://countriesnow.space/api/v0.1/countries/cities';
  constructor(
    @InjectRepository(Driver)
    private readonly driversRepository: Repository<Driver>,
  ) {}

  async findAll(): Promise<Driver[]> {
    return this.driversRepository.find();
  }

  async findCountries() {
    try {
      const response = await axios.get(this.countriesUrl);
      if (response.data.error) {
        throw new HttpException(
          'Error fetching countries',
          HttpStatus.BAD_REQUEST,
        );
      }
      return response.data.data.map((country) => country.country);
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw new HttpException(
        'Error fetching countries',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findCities(country: string) {
    try {
      const response = await axios.post(this.citiesUrl, { country });
      if (response.data.error) {
        throw new HttpException(
          'Error fetching cities',
          HttpStatus.BAD_REQUEST,
        );
      }
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw new HttpException(
        'Error fetching cities',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    this.logger.log('Creating a new driver');
    const driver = this.driversRepository.create(createDriverDto);
    this.logger.log(`Driver created: ${JSON.stringify(driver)}`);
    try {
      const savedDriver = await this.driversRepository.save(driver);
      this.logger.log(`Driver saved: ${JSON.stringify(savedDriver)}`);
      return savedDriver;
    } catch (error) {
      this.logger.error('Error saving driver', error);
      throw error;
    }
  }
}
