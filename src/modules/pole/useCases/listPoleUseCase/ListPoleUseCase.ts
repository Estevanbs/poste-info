import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pole } from '../../../../entities/pole.entity';
import { Repository } from 'typeorm';
import { ListPoleDTO } from './dtos/ListPoleDTO';

@Injectable()
export class ListPoleUseCase {
  constructor(
    @InjectRepository(Pole)
    private polesRepository: Repository<Pole>,
  ) {}

  async execute(): Promise<ListPoleDTO[]> {
    return this.polesRepository.find();
  }
}
