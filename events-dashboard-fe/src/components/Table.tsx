import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format, formatDistanceToNow } from "date-fns";
import {
  Info,
  AlertTriangle,
  ShieldAlert,
  Clock,
  MessageCircle,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { EventLogLevel, LogEvent } from "@/type";

const columns: ColumnDef<LogEvent>[] = [
  {
    accessorKey: "level",
    header: "Warnings",
    cell: ({ getValue }) => {
      const level = getValue<EventLogLevel>();

      const map = {
        INFO: {
          icon: Info,
          label: "INFO",
          className: "text-blue-500",
        },
        DEBUG: {
          icon: Info,
          label: "DEBUG",
          className: "text-slate-500",
        },
        WARNING: {
          icon: AlertTriangle,
          label: "WARNING",
          className: "text-yellow-500",
        },
        ERROR: {
          icon: ShieldAlert,
          label: "ERROR",
          className: "text-red-500",
        },
      } as const;

      const { icon: Icon, label, className } = map[level];

      return (
        <div
          className={`flex items-center gap-2 ${className} ${level === "ERROR" ? "animate-pulse" : ""}`}
        >
          <Icon className="h-4 w-4" />
          <span className="text-sm font-medium">{label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: () => (
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        Time
      </div>
    ),
    cell: ({ getValue }) => {
      const date = getValue<Date>();

      return (
        <span
          title={format(date, "yyyy-MM-dd HH:mm:ss")}
          className="text-sm text-muted-foreground whitespace-nowrap"
        >
          {formatDistanceToNow(date, { addSuffix: true })}
        </span>
      );
    },
  },
  {
    accessorKey: "message",
    header: () => (
      <div className="flex items-center gap-1">
        <MessageCircle className="h-4 w-4" />
        Message
      </div>
    ),
  },
];

function TableComponent({ data }: { data: LogEvent[] }) {
  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TableComponent;
