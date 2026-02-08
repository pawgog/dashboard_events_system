import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type Props = {
  appliedRange: DateRange | undefined;
  importanceSelected: string | undefined;
  setAppliedRange: (range: DateRange | undefined) => void;
  setImportanceSelected: (value: string | undefined) => void;
};

function FilterComponent({
  appliedRange,
  importanceSelected,
  setAppliedRange,
  setImportanceSelected,
}: Props) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [draftRange, setDraftRange] = useState<DateRange | undefined>();

  return (
    <>
      <Field className="w-40">
        <Select
          value={importanceSelected || ""}
          onValueChange={(value) =>
            setImportanceSelected(value === "ALL" ? undefined : value)
          }
        >
          <SelectTrigger variant="outline">
            <SelectValue placeholder="Filter by warning" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All warnings</SelectItem>
            <SelectSeparator />
            <SelectItem value="LOW">Low</SelectItem>
            <SelectItem value="NORMAL">Normal</SelectItem>
            <SelectItem value="CRITICAL">Critical</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field className="w-60">
        <Popover
          open={isCalendarOpen}
          onOpenChange={(open) => {
            if (open) {
              setDraftRange(appliedRange);
            }
            setIsCalendarOpen(open);
          }}
        >
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-70 justify-start text-left font-normal",
                !appliedRange && "text-muted-foreground",
              )}
              variant="outline"
            >
              <CalendarIcon />
              {appliedRange?.from ? (
                appliedRange.to ? (
                  <>
                    {format(appliedRange.from, "LLL dd, y")} –{" "}
                    {format(appliedRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(appliedRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4" align="start">
            <Calendar
              mode="range"
              selected={draftRange}
              numberOfMonths={2}
              onSelect={(range) => setDraftRange(range)}
            />
            <div className="flex justify-end gap-2 mt-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => {
                  setDraftRange(undefined);
                  setAppliedRange(undefined);
                  setIsCalendarOpen(false);
                }}
              >
                Clear
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDraftRange(appliedRange);
                  setIsCalendarOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  if (draftRange?.from && draftRange?.to) {
                    setAppliedRange(draftRange);
                  }
                  setIsCalendarOpen(false);
                }}
              >
                Apply
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </Field>
    </>
  );
}

export default FilterComponent;
