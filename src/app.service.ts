import { Injectable } from '@nestjs/common';
import { HealthStatusDto } from './shared/interfaces/dto/health-status.dto';

@Injectable()
export class AppService {
  checkHealth(): HealthStatusDto {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
