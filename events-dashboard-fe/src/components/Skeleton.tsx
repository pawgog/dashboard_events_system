import { Skeleton } from "@/components/ui/skeleton";

const SkeletonComponent = () => (
  <div className="flex w-full h-full flex-col gap-3">
    <div className="grid grid-cols-3 gap-4 border-b py-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
    {Array.from({ length: 5 }).map((_, i) => (
      <div className="grid grid-cols-3 gap-4 py-1" key={i}>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    ))}
  </div>
);

export default SkeletonComponent;
