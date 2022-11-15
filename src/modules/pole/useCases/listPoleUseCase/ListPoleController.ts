import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListPoleDTO } from './dtos/ListPoleDTO';
import { ListPoleUseCase } from './ListPoleUseCase';

@Injectable()
@Controller('pole')
@ApiTags('pole')
export class ListPoleController {
  constructor(private readonly listPoleUseCase: ListPoleUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async handle(): Promise<ListPoleDTO[]> {
    return this.listPoleUseCase.execute();
  }
}
