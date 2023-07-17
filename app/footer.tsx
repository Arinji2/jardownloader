import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Link
      href="https://revivenode.com"
      className="w-full md:w-[90%] h-fit pb-5 pt-5 mt-5 md:h-[100px] bg-transparent  flex flex-row items-center md:border-0 border-t-4 border-theme-accent justify-center md:justify-end gap-3"
    >
      <p className="font-medium text-[15px] text-theme-foreground">
        POWERED BY
      </p>
      <div className="w-fit h-fit flex flex-row items-center justify-center ">
        <Image
          src={"/revivenode.png"}
          width={20}
          height={20}
          alt="ReviveNode"
          quality={100}
          priority
        />
        <p className="font-medium text-[15px] text-theme-revivenode">
          EVIVENODE
        </p>
      </div>
    </Link>
  );
}
