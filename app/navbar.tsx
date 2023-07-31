"use client";
import NavbarComponent from "@/components/navbarComponents";
import {
  faArrowRight,
  faPowerOff,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-[30%] z-[1000] w-full h-[100px] bg-theme-background md:h-[100svh]  sticky top-0 overflow-auto flex flex-col items-center justify-start  border-theme-accent border-b-[5px] md:border-0">
      <div className="w-full h-[100px] flex flex-row items-center justify-between">
        <div className="w-[20%] h-full flex flex-row items-center justify-center md:hidden ">
          <div className="w-fit h-fit p-4 bg-theme-accent flex flex-col items-center justify-center rounded-lg ml-5">
            <FontAwesomeIcon
              icon={faArrowRight}
              rotation={open ? 180 : undefined}
              onClick={() => setOpen(!open)}
              className="w-[30px] h-[30px] text-white transition-all ease-in-out duration-700   rounded-lg "
            />
          </div>
        </div>
        <div className="md:w-full w-[80%] h-fit flex flex-row items-center md:justify-center justify-end md:mr-0 mr-5 gap-2">
          <FontAwesomeIcon
            icon={faPowerOff}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] text-theme-accent"
          />
          <div className="w-fit h-fit flex flex-col items-end justify-center  ">
            <h1 className="font-black text-[20px] md:text-[30px]">MINECRAFT</h1>
            <p className="text-[5px] md:text-[10px] font-medium">
              {" "}
              MADE FOR THE PLAYER
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "w-[100%] " : "w-[0%] "
        }transition-all navbar ease-in-out duration-700 md:w-[100%] h-[100svh] md:h-full left-0 origin-left flex flex-col items-center justify-start gap-5 mt-10 md:static fixed top-14 bg-theme-background  overflow-auto`}
      >
        <div
          className={`shrink-0 mt-10 rounded-[4px] p-4 w-[300px] h-fit flex flex-row items-center justify-center gap-7 bg-theme-accent `}
        >
          <p className="text-[30px]">SELECT JAR</p>
          <FontAwesomeIcon icon={faCube} className="w-[30px] h-[30px]" />
        </div>
        <NavbarComponent
          setOpen={setOpen}
          name="VANILLA"
          image="/software/vanilla.png"
          color="#058B60"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="PAPER"
          image="/software/paper.png"
          color="#B02E2E"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="SPIGOT"
          image="/software/spigot.png"
          color="#DA8529"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="PURPUR"
          image="/software/purpur.png"
          color="#78058B"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="FABRIC"
          image="/software/fabric.png"
          color="#B69D69"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="FORGE"
          image="/software/forge.png"
          color="#E5E5E5"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="BUNGEECORD"
          image="/software/bungee.png"
          color="#058B8B"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="Magma"
          image="/software/magma.png"
          color="#8B0505"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="Travertine"
          image="/software/travertine.png"
          color="#8B4505"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="Velocity"
          image="/software/velocity.png"
          color="#058B2B"
        />
        <NavbarComponent
          setOpen={setOpen}
          name="Waterfall"
          image="/software/waterfall.png"
          color="#08058B"
        />
        <div className="md:h-[10px] h-[80px] shrink-0"></div>
      </div>
    </div>
  );
}

export default Navbar;
