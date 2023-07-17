import JarComponent from "@/components/jarComponent";
import content from "@/data/travertine.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7">
      <h1 className="text-white font-bold text-[40px] md:text-[60px] mt-10">
        TRAVERTINE
      </h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Travertine is a drop-in replacement for Paper servers designed for
        configurability and new, fun, exciting gameplay features.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar) => (
          <JarComponent
            name="Travertine"
            version={jar.version}
            updated={jar.updated_at}
            key={jar.version + jar.updated_at}
            color="#8B4505"
          />
        ))}
      </div>
    </div>
  );
}
