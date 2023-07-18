import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

import { usePathname } from "next/navigation";
import ParentAnimation from "@/components/parentAnimation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Start Minecraft",
  description:
    "All Minecraft Server Softwares in one place. Powered by Revivenode.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className=" w-full min-h-[100svh] h-fit flex md:flex-row md:items-start items-center justify-start md:justify-center flex-col bg-gradient-to-b from-[#101F2C] to-[#132535]">
          <Navbar />

          <div className="md:w-[70%] w-full h-full flex flex-col items-center justify-start relative">
            <div className="absolute  top-0 right-0 md:block hidden bg-theme-accent w-[110vw] h-full z-20 slider -translate-x-[2000px]"></div>
            {children} <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
