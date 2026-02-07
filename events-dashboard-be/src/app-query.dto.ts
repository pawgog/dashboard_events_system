import { IsEnum, IsISO8601, IsOptional } from 'class-validator';
import { EventLogLevel } from './app-level.enum';
import { LogImportance } from './app-level.enum';

export class LogsQueryDto {
  @IsOptional()
  @IsEnum(EventLogLevel)
  level?: EventLogLevel;

  @IsOptional()
  @IsEnum(LogImportance)
  importance?: LogImportance;

  @IsOptional()
  @IsISO8601()
  from?: string;

  @IsOptional()
  @IsISO8601()
  to?: string;
}
