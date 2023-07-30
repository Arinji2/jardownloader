import { ExtremeCard, PremiumCard } from "./cards";

export default async function Page({
  searchParams,
}: {
  searchParams: { ver: string | undefined };
}) {
  let version = "1";
  if (searchParams.ver != undefined) version = searchParams.ver;

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
