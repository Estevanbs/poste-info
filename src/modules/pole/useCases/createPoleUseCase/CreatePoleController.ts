import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Injectable,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePoleDTO } from './dtos/CreatePoleDTO';
import { CreatePoleUseCase } from './CreatePoleUseCase';

@Injectable()
@Controller('pole')
@ApiTags('pole')
export class CreatePoleController {
  constructor(private readonly createPoleUseCase: CreatePoleUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Pole created',
  })
  async handle(@Body() data: CreatePoleDTO): Promise<void> {
    return this.createPoleUseCase.execute(data);
  }
}
