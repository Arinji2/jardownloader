"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function ParentAnimation({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => setIsMounted(false);
  }, [path]);
  return (
    <div
      className={`${
        isMounted
          ? "translate-x-0 md:translate-x-0 "
          : "translate-x-0 md:translate-x-[2000px] "
      }h-full  w-full bg-gradient-to-b from-[#101F2C] to-[#132535]  flex flex-col items-center justify-start gap-7 z-0 transition-all ease-linear duration-[2000ms]`}
    >
      {children}
    </div>
  );
}

export default ParentAnimation;
