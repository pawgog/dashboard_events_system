import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './app.service';
import { LogsQueryDto } from './app-query.dto';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  getLogs(@Query() query: LogsQueryDto) {
    return this.logsService.findFiltered(
      query.level,
      query.importance,
      query.from ? new Date(query.from) : undefined,
      query.to ? new Date(query.to) : undefined,
    );
  }
}
