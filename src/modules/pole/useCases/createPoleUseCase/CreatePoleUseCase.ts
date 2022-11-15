import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePoleDTO } from './dtos/CreatePoleDTO';
import { Pole } from '../../../../entities/pole.entity';

@Injectable()
export class CreatePoleUseCase {
  constructor(
    @InjectRepository(Pole)
    private polesRepository: Repository<Pole>,
  ) {}

  async execute(data: CreatePoleDTO): Promise<void> {
    await this.polesRepository.insert(data);
  }
}
