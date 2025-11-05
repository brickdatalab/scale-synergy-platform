import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="group relative rounded-xl border bg-card shadow-elevation-1 p-6 transition-all">
      <div className="overflow-hidden rounded-lg">
        <div
          className="
            h-48 w-full rounded-lg bg-muted animate-pulse relative overflow-hidden
            before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer
            before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
            dark:before:via-white/5
          "
        />
      </div>

      <div className="mt-6 space-y-3">
        <Skeleton className="h-6 w-3/5" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-8 w-1/3 mt-4" />
      </div>

      <div className="mt-6">
        <Skeleton className="h-12 w-full rounded-md" />
      </div>
    </div>
  );
}
