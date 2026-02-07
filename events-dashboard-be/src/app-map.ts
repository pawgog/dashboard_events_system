import { EventLogLevel } from './app-level.enum';
import { LogImportance } from './app-level.enum';

export const LOG_IMPORTANCE_MAP: Record<EventLogLevel, LogImportance> = {
  [EventLogLevel.DEBUG]: LogImportance.LOW,
  [EventLogLevel.INFO]: LogImportance.NORMAL,
  [EventLogLevel.WARNING]: LogImportance.CRITICAL,
  [EventLogLevel.ERROR]: LogImportance.CRITICAL,
};
