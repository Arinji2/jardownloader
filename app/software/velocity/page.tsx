import JarComponent from "@/components/jarComponent";
import SliderAnimation from "@/components/sliderAnimation";
import content from "@/data/velocity.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7">
      <SliderAnimation />
      <h1 className="text-white font-bold text-[60px] mt-10">VELOCITY</h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Velocity is the modern, high-performance proxy. Designed with
        performance and stability in mind, it is a full alternative to Waterfall
        with its own plugin ecosystem.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar) => (
          <JarComponent
            name="Velocity"
            version={jar.version}
            updated={jar.updated_at}
            key={jar.version + jar.updated_at}
            color="#058B2B"
          />
        ))}
      </div>
    </div>
  );
}
