import { EventLogLevel } from './app-level.enum';
import { LogEvent } from './app-event.interface';

export const MOCK_LOG_EVENTS: LogEvent[] = [
  {
    id: 'evt-001',
    level: EventLogLevel.INFO,
    message: 'Application started successfully',
    timestamp: new Date('2026-02-02T08:15:12.123Z'),
  },
  {
    id: 'evt-002',
    level: EventLogLevel.DEBUG,
    message: 'Loaded environment variables',
    timestamp: new Date('2026-02-06T08:15:12.456Z'),
  },
  {
    id: 'evt-003',
    level: EventLogLevel.INFO,
    message: 'User authenticated',
    timestamp: new Date('2026-02-07T08:16:01.002Z'),
  },
  {
    id: 'evt-004',
    level: EventLogLevel.WARNING,
    message: 'API response time exceeded 500ms',
    timestamp: new Date('2026-02-08T08:17:44.781Z'),
  },
  {
    id: 'evt-005',
    level: EventLogLevel.DEBUG,
    message: 'Fetching user profile from database',
    timestamp: new Date('2026-02-01T08:17:45.104Z'),
  },
  {
    id: 'evt-006',
    level: EventLogLevel.INFO,
    message: 'User profile loaded',
    timestamp: new Date('2026-02-06T08:17:45.389Z'),
  },
  {
    id: 'evt-007',
    level: EventLogLevel.ERROR,
    message: 'Failed to connect to payment service',
    timestamp: new Date('2026-02-02T08:19:02.991Z'),
  },
  {
    id: 'evt-008',
    level: EventLogLevel.WARNING,
    message: 'Retrying payment service connection',
    timestamp: new Date('2026-02-08T08:19:05.214Z'),
  },
  {
    id: 'evt-009',
    level: EventLogLevel.INFO,
    message: 'Payment service connection restored',
    timestamp: new Date('2026-02-08T08:19:07.632Z'),
  },
  {
    id: 'evt-010',
    level: EventLogLevel.DEBUG,
    message: 'Cache miss for key: user_42',
    timestamp: new Date('2026-02-02T08:20:11.908Z'),
  },
  {
    id: 'evt-011',
    level: EventLogLevel.INFO,
    message: 'Cache populated for user data',
    timestamp: new Date('2026-02-06T08:20:12.201Z'),
  },
  {
    id: 'evt-012',
    level: EventLogLevel.ERROR,
    message: 'Unhandled exception in order processing',
    timestamp: new Date('2026-02-06T08:22:54.670Z'),
  },
  {
    id: 'evt-013',
    level: EventLogLevel.WARNING,
    message: 'Memory usage above 80%',
    timestamp: new Date('2026-02-03T08:23:31.445Z'),
  },
  {
    id: 'evt-014',
    level: EventLogLevel.INFO,
    message: 'Background job completed successfully',
    timestamp: new Date('2026-02-08T08:25:10.993Z'),
  },
  {
    id: 'evt-015',
    level: EventLogLevel.DEBUG,
    message: 'Graceful shutdown initiated',
    timestamp: new Date('2026-02-08T08:30:00.000Z'),
  },
];
