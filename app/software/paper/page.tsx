import JarComponent from "@/components/jarComponent";
import ParentAnimation from "@/components/parentAnimation";
import SliderAnimation from "@/components/sliderAnimation";

import content from "@/data/paper.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7 z-5 bg-theme-accent">
      <SliderAnimation />
      <ParentAnimation>
        <h1 className="text-white font-bold text-[60px] mt-10">PAPER</h1>
        <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
          Paper is a Minecraft game server based on Spigot, designed to greatly
          improve performance and offer more advanced features and API.
        </div>

        <div className="h-full w-full flex flex-col items-center justify-start gap-4">
          {content.map((jar) => (
            <JarComponent
              name="Paper"
              version={jar.version}
              updated={jar.updated_at}
              key={jar.version + jar.updated_at}
              color="#B02E2E"
            />
          ))}
        </div>
      </ParentAnimation>
    </div>
  );
}
