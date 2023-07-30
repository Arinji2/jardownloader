"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function ParentAnimation({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isMounted, setIsMounted] = React.useState(false);

  return (
    <motion.div
      className={`h-full  w-full bg-gradient-to-b from-[#101F2C] to-[#132535]  flex flex-col items-center justify-start gap-7 z-0 `}
    >
      {children}
    </motion.div>
  );
}

export default ParentAnimation;
