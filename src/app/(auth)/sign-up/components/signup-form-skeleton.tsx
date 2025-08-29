"use client";

import { Skeleton } from "@heroui/skeleton";

export default function SignupFormSkeleton() {
  return (
    <div key="signup-form-skeleton" className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-14 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-14 w-full rounded-lg" />
        </div>
      </div>

      <div>
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-32 rounded" />
          <div className="border-default-300 bg-background flex items-center gap-3 rounded-lg border p-3">
            <Skeleton className="h-8 w-24 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
        </div>
      </div>

      <div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="mx-auto h-4 w-64 rounded" />
      </div>
    </div>
  );
}
