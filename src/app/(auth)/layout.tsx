"use client";

import { Card, CardBody } from "@heroui/card";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const childrenNode = childrenRef.current;

    if (!childrenNode) return;

    const resizeObserver = new ResizeObserver(() => {
      const newHeight = childrenNode.offsetHeight + 30;

      animate(scope.current, { height: newHeight });
    });

    resizeObserver.observe(childrenNode);

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname, animate, scope]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden">
      <Card className="my-6 hidden w-full max-w-md sm:block">
        <CardBody className="no-scrollbar relative p-4">
          <motion.div ref={scope} layout className="relative h-50 w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={pathname}
                animate={{ opacity: 1 }}
                className="absolute inset-4"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                <div ref={childrenRef}>{children}</div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </CardBody>
      </Card>
      <div className="my-6 flex w-full flex-col gap-4 sm:hidden">
        {children}
      </div>
    </div>
  );
}
