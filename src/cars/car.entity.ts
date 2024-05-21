import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;

  @Column()
  description: string;

  @Column()
  link: string;
}
