"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
function SliderAnimation() {
  const path = usePathname();

  useEffect(() => {
    const slider = document.querySelector(".slider") as HTMLElement;
    const timeout = setTimeout(() => {
      slider.classList.remove("sliderOut");
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [path]);
  return (
    <motion.div
      initial={{ translateX: "0px" }}
      animate={{ translateX: "-2000px" }}
      transition={{ duration: 3, ease: "linear" }}
      className="absolute  top-0 left-0 bg-theme-accent w-full h-[100svh] z-10"
    ></motion.div>
  );
}

export default SliderAnimation;
