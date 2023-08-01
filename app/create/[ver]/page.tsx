import { ExtremeCard, PremiumCard } from "./cards";
export function generateStaticParams() {
  return [{ ver: "0" }, { ver: "1" }, { ver: "2" }, { ver: "3" }, { ver: "4" }];
}
export default async function Page({
  params,
}: {
  params: { ver: string | undefined };
}) {
  let version = "1";
  if (params.ver != undefined) version = params.ver;

  return (
    <div className="w-full h-fit min-h-[100svh] flex flex-col items-center justify-start gap-10">
      <h1 className="text-white font-bold text-[35px] md:text-[60px] mt-10">
        Choose a Plan
      </h1>
      <div className="h-full w-full flex md:flex-row items-center justify-start md:justify-center gap-10 flex-col">
        <PremiumCard version={version} />
        <ExtremeCard version={version} />
      </div>
    </div>
  );
}
