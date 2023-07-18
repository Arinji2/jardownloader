"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
function SliderAnimation() {
  const path = usePathname();

  useEffect(() => {
    const slider = document.querySelector(".slider") as HTMLElement;
    const timeout = setTimeout(() => {
      slider.classList.remove("sliderOut");
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [path]);
  return (
    <motion.div
      initial={{ translateX: "1900px" }}
      animate={{ translateX: "-2000px" }}
      transition={{ duration: 4, ease: "linear", delay: 0.1 }}
      className="absolute  top-0 left-0 bg-theme-accent w-full h-[100svh] z-10 md:block"
    ></motion.div>
  );
}

export default SliderAnimation;
