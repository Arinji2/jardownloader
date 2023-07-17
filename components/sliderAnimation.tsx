"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
function SliderAnimation() {
  const path = usePathname();

  return (
    <motion.div
      initial={false}
      animate={{
        translateX: ["-2000px"],
      }}
      exit={{ translateX: "0px" }}
      transition={{ duration: 3, ease: "easeInOut" }}
      key={path}
      className="absolute  top-0 right-0 bg-theme-accent w-[90vw] h-full z-10"
    ></motion.div>
  );
}

export default SliderAnimation;
