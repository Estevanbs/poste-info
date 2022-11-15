import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  status(): { status: string } {
    return { status: 'OK' };
  }
}
