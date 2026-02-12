import type { LogsParams } from '@/type';

export async function fetchLogs(
  params: LogsParams,
  signal?: AbortSignal
) {
  const query = buildLogsQuery(params);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/logs?${query}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch logs (${response.status})`);
  }

  return response.json();
}

function buildLogsQuery(params: LogsParams): string {
  const query = new URLSearchParams({
    ...(params.importance && { importance: params.importance }),
    ...(params.from && { from: params.from }),
    ...(params.to && { to: params.to }),
  });

  return query.toString();
}