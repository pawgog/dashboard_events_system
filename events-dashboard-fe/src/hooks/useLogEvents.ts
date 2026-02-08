import { useQuery } from "@tanstack/react-query";
import { fetchLogs } from "@/api";
import type { LogsParams } from "@/type";

export function useLogEvents(params: LogsParams) {
  return useQuery({
    queryKey: ["logs", params],
    queryFn: ({ signal }) => fetchLogs(params, signal),
    staleTime: 1000 * 30,
  });
}