import { EventLogLevel } from './app-level.enum';

export interface LogEvent {
  id: string;
  level: EventLogLevel;
  message: string;
  timestamp: Date;
}
