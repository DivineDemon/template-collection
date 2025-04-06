import Image from "next/image";

import { CircleCheck } from "lucide-react";

import Dotted from "@/assets/img/dotted.svg";
import Underlined from "@/assets/img/underlined.svg";
import { images, instructions } from "@/lib/constants";
import { cn } from "@/lib/utils";

import ParallaxScroll from "../ui/parallax-scroll";
import RadialGradient from "../ui/radial-gradient";

const Templates = () => {
  return (
    <div
      id="templates"
      className="relative grid h-screen w-full grid-cols-2 bg-[#E8E8E8]"
    >
      <div className="absolute right-[15%] top-[25%] z-0 size-72 rounded-full bg-main/30 blur-[50px]" />
      <div className="absolute left-[32.5%] top-[15%] z-0 size-36 rounded-full bg-main/50 blur-[50px]" />
      <div className="relative col-span-1 flex h-full w-full flex-col items-center justify-center">
        <div className="absolute z-0 h-full w-full">
          <RadialGradient />
          <Image
            src={Dotted}
            alt="dotted"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="z-[1] flex w-full items-center justify-center gap-2.5">
          <div className="h-[2px] w-6 rounded-full bg-main" />
          <span className="text-sm font-semibold uppercase text-main">
            how it works
          </span>
          <div className="h-[2px] w-6 rounded-full bg-main" />
        </div>
        <div className="relative z-[1] mx-auto mb-10 mt-5 flex items-center justify-center">
          <div className="absolute -right-3 -top-1 z-[2] h-20 w-80 -rotate-2 bg-main/30" />
          <span className="z-[3] w-full text-center text-[55px] font-[550] leading-[65px] tracking-tighter">
            Templates Galore
          </span>
          <Image
            src={Underlined}
            alt="underlined"
            className="absolute -bottom-3 z-[2] w-64"
          />
        </div>
        <div className="z-[1] grid w-2/3 grid-cols-2 gap-4">
          {instructions.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group col-span-1 flex w-full flex-col items-center justify-center gap-3 rounded-lg bg-white/50 p-5 backdrop-blur-sm transition-shadow duration-200 ease-in-out hover:shadow-lg",
                {
                  "col-span-2": item.id === 5,
                }
              )}
            >
              <span className="pointer-events-none w-full text-left text-[18px] font-semibold leading-[18px] tracking-tight">
                {item.title}
              </span>
              <div className="mr-auto h-1 w-6 bg-main transition-[width] duration-200 ease-in-out group-hover:w-12" />
              <span className="pointer-events-none w-full text-left text-[12px] leading-[14px] text-muted-foreground">
                {item.text}.
              </span>
            </div>
          ))}
        </div>
      </div>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Templates;
