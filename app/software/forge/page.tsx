import JarComponent from "@/components/jarComponent";
import content from "@/data/forge.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7">
      <h1 className="text-white font-bold text-[60px] mt-10">FORGE</h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Minecraft Forge is an add-on for Minecraft: Java Edition that lets you
        install and enable mods.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar) => (
          <JarComponent
            name="Forge"
            version={jar.version}
            updated={jar.updated_at}
            key={jar.version + jar.updated_at}
          />
        ))}
      </div>
    </div>
  );
}
