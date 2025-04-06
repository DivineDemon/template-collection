"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, MousePointerClick } from "lucide-react";

import Underline from "@/assets/img/cross-out-underline.svg";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import { TypewriterEffect } from "../ui/typewriter-effect";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-[#E8E8E8]"
    >
      <div className="absolute left-[55%] top-[30%] z-0 size-72 rounded-full bg-main/30 blur-[50px]" />
      <div className="absolute left-[25%] top-[15%] z-0 size-36 rounded-full bg-main/50 blur-[50px]" />
      <MaxWidthWrapper className="z-[1] flex h-full w-full flex-col items-center justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full text-center text-[55px] font-semibold leading-[65px] tracking-tighter opacity-75"
        >
          Launch Your Recruitement&nbsp;
          <div className="relative inline border-2 border-dashed border-main bg-main/20 pl-3 pr-4">
            <span>Website</span>
            <div className="absolute -left-1 -top-1 size-2 bg-main" />
            <div className="absolute -right-1 -top-1 size-2 bg-main" />
            <div className="absolute -bottom-1 -left-1 size-2 bg-main" />
            <div className="absolute -bottom-1 -right-1 size-2 bg-main" />
            <MousePointerClick className="absolute -bottom-[30px] -right-[30px] size-7 fill-white text-main" />
          </div>
          &nbsp;
          <br />
          in Minutes,&nbsp;
          <TypewriterEffect
            words={[{ text: "Not" }, { text: "Months" }]}
            className="inline text-[55px] font-[550] leading-[65px] tracking-tighter"
            cursorClassName="bg-black h-[42.5px] absolute bottom-[11.5px]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-5 w-full text-center text-muted-foreground"
        >
          Build a professional recruitment website easily and affordably - no
          developers, no hassle.
          <br />
          The first website builder designed exclusively for recruitment
          professionals. Create a stunning,
          <br />
          SEO-optimized recruitment website in under&nbsp;
          <span className="text-black/75">20 minutes—no coding required</span>
          <Image
            src={Underline}
            alt="underline"
            className="absolute -bottom-4 right-[22.5%] w-64"
          />
          .
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="z-[1] mb-2.5 mt-10 flex w-full items-center justify-center gap-5"
        >
          <Button
            size="lg"
            type="button"
            className="group w-40 bg-main transition-all duration-200 ease-in-out hover:w-44 hover:bg-main/85"
          >
            Get Started&nbsp;
            <ArrowRight className="transition-[margin] duration-200 ease-in-out group-hover:ml-2" />
          </Button>
          <div className="w-40 rounded-lg bg-main p-[2px] transition-all duration-200 ease-in-out hover:w-44">
            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-white"
            >
              Get a Demo
            </Button>
          </div>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="z-[1] w-full text-center text-xs text-muted-foreground"
        >
          Try Us. No credit card required
        </motion.span>
      </MaxWidthWrapper>
      <div className="my-20 flex h-72 w-full overflow-x-clip [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-full flex-none animate-move-left gap-8 [animation-duration:10s] hover:[animation-play-state:paused]">
          {heroImages.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              alt={`hero-${image.id}`}
              className="h-full rounded-lg drop-shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
