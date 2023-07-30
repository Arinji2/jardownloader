import JarComponent from "@/components/jarComponent";
import ParentAnimation from "@/components/parentAnimation";
import SliderAnimation from "@/components/sliderAnimation";
import content from "@/data/fabric.json";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-7 ">
      <h1 className="text-white font-bold text-[60px] mt-10">FABRIC</h1>
      <div className="md:w-[60%] text-center w-[90%] text-theme-foreground font-medium text-[10px] md:text-[15px]">
        Fabric is a lightweight, experimental modding toolchain for Minecraft.
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start gap-4">
        {content.map((jar, i) => (
          <JarComponent
            name="Fabric"
            version={jar.version}
            updated={jar.updated_at}
            index={i}
            key={jar.version + jar.updated_at}
            color="#B69D69"
          />
        ))}
      </div>
    </div>
  );
}
