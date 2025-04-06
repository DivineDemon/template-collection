import Image from "next/image";
import Link from "next/link";

import { Sparkles } from "lucide-react";

import Banner from "@/assets/img/hero.png";
import { cn } from "@/lib/utils";

import MaxWidthWrapper from "../max-width-wrapper";
import { buttonVariants } from "../ui/button";
import RadialGradient from "../ui/radial-gradient";
import Spotlight from "../ui/spotlight";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-dot-black/[0.5] dark:bg-dot-white/[0.2]"
    >
      <Spotlight />
      <RadialGradient />
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2.5">
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="size-1 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
        </div>
        <span className="mb-10 mt-5 w-full text-center text-[48px] font-medium leading-[4rem] opacity-75">
          Emailify is a purpose-built tool
          <br />
          for validating email addresses.
        </span>
        <div className="relative mb-5 w-2/3 rounded-xl border-4 border-black/20 dark:border-white/20">
          <span className="absolute -right-32 top-10 z-[1] rounded-full bg-black/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm dark:bg-white/80 dark:text-black">
            my marketing team's blessed!
          </span>
          <span className="absolute -right-32 top-20 z-[1] rounded-full bg-black/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm dark:bg-white/80 dark:text-black">
            this is it!
          </span>
          <Image
            src={Banner}
            alt="hero"
            className="z-0 w-full rounded-xl invert dark:invert-0"
          />
          <span className="absolute -left-32 bottom-10 z-[1] rounded-full bg-black/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm dark:bg-white/80 dark:text-black">
            talk about a revolution, we can't celebrate enough!
          </span>
          <span className="absolute -left-32 bottom-20 z-[1] rounded-full bg-black/80 px-4 py-1.5 text-xs text-white backdrop-blur-sm dark:bg-white/80 dark:text-black">
            actually a useful product!
          </span>
        </div>
        <Link
          href="/validate"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            })
          )}
        >
          Get Started <Sparkles />
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
