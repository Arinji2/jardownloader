import JarComponent from "@/components/jarComponent";
import content from "@/data/purpur.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7">
      <h1 className="text-white font-bold text-[60px] mt-10">PURPUR</h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Purpur is a drop-in replacement for Paper servers designed for
        configurability and new, fun, exciting gameplay features.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar) => (
          <JarComponent
            name="Purpur"
            version={jar.version}
            updated={jar.updated_at}
            key={jar.version + jar.updated_at}
            color="#78058B"
          />
        ))}
      </div>
    </div>
  );
}
