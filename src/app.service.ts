import { Injectable } from '@nestjs/common';
import { HealthStatusDto } from './interfaces/dto/health-status.dto';

@Injectable()
export class AppService {
  checkHealth(): HealthStatusDto {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
