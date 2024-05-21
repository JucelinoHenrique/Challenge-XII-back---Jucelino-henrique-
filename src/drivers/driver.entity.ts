import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  isOwnCar: boolean;

  @Column()
  carModel: string;
}
