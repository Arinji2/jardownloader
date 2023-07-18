import JarComponent from "@/components/jarComponent";
import SliderAnimation from "@/components/sliderAnimation";
import content from "@/data/bungee.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <SliderAnimation />
      <h1 className="text-white font-bold text-[40px] md:text-[60px] mt-10">
        BUNGEECORD
      </h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Bungeecord is a server type for Minecraft that allows you to connect
        several servers together, so players can transfer between them without
        having to disconnect from the server.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar) => (
          <JarComponent
            name="Bungeecord"
            version={jar.version}
            updated={jar.updated_at}
            key={jar.version + jar.updated_at}
            color="#058B8B"
          />
        ))}
      </div>
    </div>
  );
}
