import JarComponent from "@/components/jarComponent";
import content from "@/data/spongeforge.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <h1 className="text-white font-bold text-[40px] md:text-[60px] mt-10">
        SPONGEFORGE
      </h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Spongeforge is a community-driven open source Minecraft: Java Edition
        modding platform.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar, i) => (
          <JarComponent
            name="Spongeforge"
            version={jar.version}
            updated={jar.updated_at}
            index={i}
            key={jar.version + jar.updated_at}
            color="#FFC700"
          />
        ))}
      </div>
    </div>
  );
}
