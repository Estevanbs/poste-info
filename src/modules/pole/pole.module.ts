import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pole } from '../../entities/pole.entity';
import { CreatePoleUseCase } from './useCases/createPoleUseCase/CreatePoleUseCase';
import { CreatePoleController } from './useCases/createPoleUseCase/CreatePoleController';
import { ListPoleUseCase } from './useCases/listPoleUseCase/ListPoleUseCase';
import { ListPoleController } from './useCases/listPoleUseCase/ListPoleController';

@Module({
  imports: [TypeOrmModule.forFeature([Pole])],
  providers: [CreatePoleUseCase, ListPoleUseCase],
  controllers: [CreatePoleController, ListPoleController],
})
export class PoleModule {}
