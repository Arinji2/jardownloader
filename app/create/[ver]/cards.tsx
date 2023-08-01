"use client";
import {
  Cpu,
  MemoryStick,
  ShieldCheck,
  Database,
  DatabaseBackup,
  HardDrive,
} from "lucide-react";
import genLink from "./genLink";
import { useRouter } from "next/navigation";
export function PremiumCard({ version }: { version: string }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const linkId = genLink({ name: "PREMIUM", version: version });
        router.push(
          `https://billing.revivenode.com/cart.php?a=confproduct&i=${linkId}`
        );
      }}
      className="w-[90%] md:w-[35%] h-fit pb-10 bg-theme-background transition-all ease-in-out duration-300 flex flex-col items-center justify-start gap-5 hover:cursor-pointer group hover:bg-theme-revivenode hover:bg-opacity-10"
    >
      <div className="h-fit w-fit flex flex-col items-center justify-center gap-[2px]">
        <h3 className="font-bold text-[25px] md:text-[40px] text-white mt-5">
          PREMIUM
        </h3>
        <div className="bg-theme-accent h-[3px] w-full"></div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-start gap-10 mt-5">
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <Cpu className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">Intel i7-6700K</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <MemoryStick className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">DDR4 2400Mhz</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <ShieldCheck className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">400GBPS DdoS</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <Database className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">
            3 MySQL Databases
          </p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <DatabaseBackup className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">3 Backups</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <HardDrive className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">NVMe SSD</p>
        </div>
      </div>
    </div>
  );
}
export function ExtremeCard({ version }: { version: string }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const linkId = genLink({ name: "EXTREME", version: version });
        router.push(
          `https://billing.revivenode.com/cart.php?a=confproduct&i=${linkId}`
        );
      }}
      className="w-[90%] md:w-[35%] h-fit pb-10 bg-theme-background transition-all ease-in-out duration-300 flex flex-col items-center justify-start gap-5 hover:cursor-pointer group hover:bg-theme-revivenode hover:bg-opacity-10"
    >
      <div className="h-fit w-fit flex flex-col items-center justify-center gap-[2px]">
        <h3 className="font-bold text-[25px] md:text-[40px] text-white mt-5">
          EXTREME
        </h3>
        <div className="bg-theme-accent h-[3px] w-full"></div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-start gap-10 mt-5">
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <Cpu className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">Ryzen 7 3800X</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <MemoryStick className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">DDR4 2666Mhz</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <ShieldCheck className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">400GBPS DdoS</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <Database className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">
            5 MySQL Databases
          </p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <DatabaseBackup className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">7 Backups</p>
        </div>
        <div className="w-[90%] h-[20px] flex flex-row items-center justify-start gap-3">
          <HardDrive className="h-[20px] w-[20px] text-theme-accent" />
          <p className="font-semibold text-[20px] text-white">NVMe SSD</p>
        </div>
      </div>
    </div>
  );
}
