import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/driver.dto';
import { Driver } from './driver.entity';

@Injectable()
export class DriversService {
  private readonly logger = new Logger(DriversService.name);

  constructor(
    @InjectRepository(Driver)
    private readonly driversRepository: Repository<Driver>,
  ) {}

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
