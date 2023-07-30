"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function JarComponent({
  name,
  version,
  updated,
  color,
  index,
}: {
  name: string;
  version: string;
  updated: string;
  color?: string;
  index: number;
}) {
  const [versionId, setVersionId] = useState("");
  useEffect(() => {
    if (name === "Bungeecord") setVersionId("0");
    else if (version.startsWith("1.8")) setVersionId("1");
    else if (version.startsWith("1.9")) setVersionId("1");
    else if (version.startsWith("1.10")) setVersionId("2");
    else if (version.startsWith("1.11")) setVersionId("2");
    else if (version.startsWith("1.12")) setVersionId("2");
    else if (version.startsWith("1.13")) setVersionId("2");
    else if (version.startsWith("1.14")) setVersionId("2");
    else if (version.startsWith("1.15")) setVersionId("3");
    else if (version.startsWith("1.16")) setVersionId("3");
    else setVersionId("4");
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.01 }}
      viewport={{ once: true }}
      className="w-[95%] md:w-[95%] flex flex-row items-center justify-start gap-5 md:gap-10 bg-theme-background h-[120px] p-5"
    >
      <div className="w-[30%] md:w-[10%] h-full flex flex-col items-start justify-center shrink-0">
        <p className="text-[10px] font-medium tracking-[-6%]">VERSION</p>
        <p className="text-[30px] md:text-[40px] font-medium tracking-[-0.5%]">
          {version}
        </p>
      </div>
      <div className="w-[1px] h-[80%] bg-white"></div>
      <div className="w-[35%] h-full   flex-col items-start justify-center md:flex hidden shrink-0">
        <p className="text-[10px] font-medium tracking-[-6%]">UPDATED AT</p>
        <p className="text-[30px] font-medium tracking-[-0.5%]">{updated}</p>
      </div>
      <div className="w-[1px] h-[80%] bg-white md:block hidden"></div>
      <div className="w-[70%] md:w-[55%] h-full   flex flex-row items-center justify-center gap-5 ">
        <p
          className="md:text-[15px] text-[13px] font-medium p-3 bg-[--color] rounded-[3px] border-4 border-[--color] hover:bg-white hover:text-[--color] transition-all ease-in-out duration-500 hover:cursor-pointer "
          style={{ "--color": color } as React.CSSProperties}
          onClick={() => {
            window.open(
              `https://versions.revivenode.com/${name}/${name.toLowerCase()}-${version}.jar`,
              "_blank"
            );
          }}
        >
          DOWNLOAD JAR
        </p>
        <Link
          href={`/create?ver=${versionId}`}
          className="md:text-[15px] text-[13px] font-medium p-3 bg-[--color] rounded-[3px] border-4 border-[--color] hover:bg-white hover:text-[--color] transition-all ease-in-out duration-500 hover:cursor-pointer md:block hidden"
          style={{ "--color": color } as React.CSSProperties}
        >
          CREATE SERVER
        </Link>
      </div>
    </motion.div>
  );
}
