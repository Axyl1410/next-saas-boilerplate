"use client";

import { Spinner } from "@heroui/spinner";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/10"
      >
        <div className="flex items-center justify-center rounded-xl bg-stone-900/90 p-4 dark:bg-stone-900/95">
          <Spinner size="lg" color="primary" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function LoadingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex h-full w-full items-center justify-center"
      >
        <div className="flex items-center justify-center rounded-xl bg-stone-900/90 p-4 dark:bg-stone-900/95">
          <Spinner size="lg" color="primary" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
