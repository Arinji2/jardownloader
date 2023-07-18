"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  return (
    <div
      onClick={() => {
        setOpen(false);
        const slider = document.querySelector(".slider") as HTMLElement;

        slider.classList.add("sliderOut");
        router.prefetch(`/software/${name.toLowerCase()}`);
        setTimeout(() => {
          router.push(`/software/${name.toLowerCase()}`);
        }, 4000);
      }}
      className={`w-[90%] h-[80px] border-4 border-[--color] shrink-0 rounded-lg flex flex-row items-center justify-start gap-4`}
      style={{ "--color": color } as React.CSSProperties}
    >
      <Image src={image} width={50} height={50} alt={name} className="pl-5" />
      <p className="font-semibold text-[20px] md:text-[30px]">{name}</p>
    </div>
  );
}
