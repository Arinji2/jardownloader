"use client";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarComponent({
  name,
  image,
  color,
  setOpen,
}: {
  name: string;
  image: string;
  color: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const path = usePathname();
  return (
    <React.Fragment>
      <Link
        href={`/software/${name.toLowerCase()}`}
        onClick={() => {
          setOpen(false);
        }}
        className={`hover:cursor-pointer md:flex hidden w-[90%] h-[80px] border-4 border-[--color] shrink-0 rounded-lg  flex-row items-center justify-start gap-4`}
        style={{ "--color": color } as React.CSSProperties}
      >
        <Image src={image} width={50} height={50} alt={name} className="pl-5" />
        <p className="font-semibold text-[20px] md:text-[30px]">{name}</p>
      </Link>
      <Link
        onClick={() => setOpen(false)}
        href={`/software/${name.toLowerCase()}`}
        className={`flex md:hidden w-[90%] h-[80px] border-4 border-[--color] shrink-0 rounded-lg  flex-row items-center justify-start gap-4`}
        style={{ "--color": color } as React.CSSProperties}
      >
        <Image src={image} width={50} height={50} alt={name} className="pl-5" />
        <p className="font-semibold text-[20px] md:text-[30px]">{name}</p>
      </Link>
    </React.Fragment>
  );
}
