import JarComponent from "@/components/jarComponent";
import ParentAnimation from "@/components/parentAnimation";
import SliderAnimation from "@/components/sliderAnimation";
import content from "@/data/vanilla.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7 z-5 ">
      <h1 className="text-white font-bold text-[60px] mt-10">VANILLA</h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        VANILLA MC IS THE ORIGINAL MINECRAFT SERVER SOFTWARE. IT LACKS IN PROPER
        OPTIMIZATIONS AND FEATURES, BUT IS THE BEST FOR A PURE MINECRAFT
        EXPERIENCE.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar, i) => (
          <JarComponent
            name="Vanilla"
            version={jar.version}
            updated={jar.updated_at}
            index={i}
            key={jar.version + jar.updated_at}
            color="#058B60"
          />
        ))}
      </div>
    </div>
  );
}
