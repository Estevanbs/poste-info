import { OmitType } from '@nestjs/swagger';
import { Pole } from '../../../../../entities/pole.entity';

export class CreatePoleDTO extends OmitType(Pole, ['id', 'isNormal']) {}
