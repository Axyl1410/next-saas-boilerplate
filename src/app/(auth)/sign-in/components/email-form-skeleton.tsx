"use client";

import { Divider } from "@heroui/divider";
import { Skeleton } from "@heroui/skeleton";

export default function EmailFormSkeleton() {
  return (
    <div key="email-form-skeleton" className="flex flex-col gap-4">
      <div>
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      <div>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
      </div>

      <div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}
