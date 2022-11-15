import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pole {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  longitude: string;

  @Column()
  @ApiProperty()
  latitude: string;

  @Column({ default: true })
  @ApiProperty()
  isNormal: boolean;
}
