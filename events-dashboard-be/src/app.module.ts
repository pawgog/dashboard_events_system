import { Module } from '@nestjs/common';
import { LogsController } from './app.controller';
import { LogsService } from './app.service';

@Module({
  imports: [],
  controllers: [LogsController],
  providers: [LogsService],
})
export class AppModule {}
