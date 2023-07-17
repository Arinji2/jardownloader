"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ParentAnimation({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0, ease: "easeIn", delay: 1 }}
        className="h-full w-full  flex flex-col items-center justify-start gap-7 z-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default ParentAnimation;
