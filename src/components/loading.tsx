"use client";

import { Spinner } from "@heroui/spinner";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/10"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center rounded-xl bg-stone-900/90 p-4 dark:bg-stone-900/95">
          <Spinner color="primary" size="lg" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function LoadingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        className="flex h-full w-full items-center justify-center"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center rounded-xl bg-stone-900/90 p-4 dark:bg-stone-900/95">
          <Spinner color="primary" size="lg" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
