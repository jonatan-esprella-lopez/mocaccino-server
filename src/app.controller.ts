import { Controller, Get } from '@nestjs/common';
import { AppService } from '@/app.service';
import { HealthStatusDto } from './shared/interfaces/dto/health-status.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  checkHealth(): HealthStatusDto {
    return this.appService.checkHealth();
  }
}
