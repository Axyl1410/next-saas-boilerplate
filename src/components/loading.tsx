"use client";

import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/10"
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

export function LoadingProgress() {
  return (
    <>
      <LoadingScreen />
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-3 bg-stone-900/90 p-2 backdrop-blur-sm"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 15 }}
      >
        <p className="text-sm text-white">Having trouble?</p>
        <Button
          className="text-white"
          color="primary"
          size="sm"
          onPress={() => {
            window.location.reload();
          }}
        >
          Refresh
        </Button>
      </motion.div>
    </>
  );
}
