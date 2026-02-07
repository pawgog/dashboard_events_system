import { Injectable } from '@nestjs/common';
import { MOCK_LOG_EVENTS } from './mock-events';
import { LogEvent } from './app-event.interface';
import { EventLogLevel, LogImportance } from './app-level.enum';
import { LOG_IMPORTANCE_MAP } from './app-map';

@Injectable()
export class LogsService {
  private startOfDay(date: Date): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private endOfDay(date: Date): Date {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
  }

  findFiltered(
    level?: EventLogLevel,
    importance?: LogImportance,
    from?: Date,
    to?: Date,
  ): LogEvent[] {
    let fromTime: number | undefined;
    let toTime: number | undefined;

    if (from) {
      fromTime =
        from.getHours() === 0 && from.getMinutes() === 0
          ? this.startOfDay(from).getTime()
          : from.getTime();
    }

    if (to) {
      toTime =
        to.getHours() === 0 && to.getMinutes() === 0
          ? this.endOfDay(to).getTime()
          : to.getTime();
    }

    return MOCK_LOG_EVENTS.filter((event) => {
      const time = event.timestamp.getTime();

      if (level && event.level !== level) return false;
      if (importance && LOG_IMPORTANCE_MAP[event.level] !== importance)
        return false;
      if (fromTime && time < fromTime) return false;
      if (toTime && time > toTime) return false;

      return true;
    });
  }
}
