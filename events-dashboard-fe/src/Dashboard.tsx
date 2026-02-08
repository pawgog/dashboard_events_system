import { useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";

import TableComponent from "@/components/Table";
import FilterComponent from "@/components/Filter";
import ErrorComponent from "@/components/Error";
import SkeletonComponent from "@/components/Skeleton";

import { useLogEvents } from "@/hooks/useLogEvents";
import type { EventLogImportance, LogsParams } from "@/type";

function Dashboard() {
  const [appliedRange, setAppliedRange] = useState<DateRange | undefined>();
  const [importanceSelected, setImportanceSelected] = useState<
    string | undefined
  >("");

  const filters = useMemo<LogsParams>(() => {
    return {
      importance: importanceSelected
        ? (importanceSelected as EventLogImportance)
        : undefined,
      from: appliedRange?.from?.toISOString(),
      to: appliedRange?.to?.toISOString(),
    };
  }, [importanceSelected, appliedRange]);

  const { error, data, isFetching, isPending } = useLogEvents(filters);

  if (error || (!data && !isFetching && !isPending)) {
    return <ErrorComponent message={error?.message} />;
  }

  return (
    <div className="flex justify-center bg-slate-100 p-6">
      <div
        className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6"
        style={{
          height: `calc(100vh - 60px)`,
        }}
      >
        <div className="flex items-center justify-between gap-4 mb-6">
          <FilterComponent
            appliedRange={appliedRange}
            importanceSelected={importanceSelected}
            setAppliedRange={setAppliedRange}
            setImportanceSelected={setImportanceSelected}
          />
        </div>
        <div className="overflow-hidden rounded-md border">
          {isPending && isFetching ? (
            <SkeletonComponent />
          ) : (
            <TableComponent data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
