"use client";

import Link from "next/link";

export default function JarComponent({
  name,
  version,
  updated,
}: {
  name: string;
  version: string;
  updated: string;
}) {
  return (
    <div className="w-[95%] md:w-[95%] flex flex-row items-center justify-start gap-5 md:gap-10 bg-theme-background h-[120px] p-5">
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
          className="md:text-[15px] text-[13px] font-medium p-3 bg-theme-accent rounded-[3px] border-4 border-theme-accent hover:bg-white hover:text-theme-accent transition-all ease-in-out duration-500 hover:cursor-pointer "
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
          href="https://revivenode.com/"
          className="md:text-[15px] text-[13px] font-medium p-3 bg-theme-accent rounded-[3px] border-4 border-theme-accent hover:bg-white hover:text-theme-accent transition-all ease-in-out duration-500 hover:cursor-pointer md:block hidden"
        >
          CREATE SERVER
        </Link>
      </div>
    </div>
  );
}
