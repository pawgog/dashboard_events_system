export type EventLogLevel = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR';
export type EventLogImportance = 'LOW' | 'NORMAL' | 'CRITICAL';

export type LogEvent = {
  id: string;
  level: EventLogLevel;
  importance: EventLogImportance;
  message: string;
  timestamp: Date;
}

export interface LogsParams {
  importance?: EventLogImportance;
  from?: string;
  to?: string;
}