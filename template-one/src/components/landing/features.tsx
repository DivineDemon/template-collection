"use client";

import Image from "next/image";

import Underlined from "@/assets/img/underlined.svg";
import { items } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <div
      id="features"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-[#E8E8E8]"
    >
      <div className="absolute right-[15%] top-[25%] z-0 size-72 rounded-full bg-main/30 blur-[50px]" />
      <div className="absolute left-[32.5%] top-[15%] z-0 size-36 rounded-full bg-main/50 blur-[50px]" />
      <div className="absolute -left-36 bottom-20 z-0 size-72 rounded-full bg-main/30 blur-[50px]" />
      <MaxWidthWrapper className="z-[1] flex h-fit flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2.5">
          <div className="h-[2px] w-6 rounded-full bg-main" />
          <span className="text-sm font-semibold uppercase text-main">
            features
          </span>
          <div className="h-[2px] w-6 rounded-full bg-main" />
        </div>
        <div className="relative mx-auto mt-5 flex items-center justify-center">
          <div className="absolute -right-3 -top-1 z-0 h-20 w-80 -rotate-2 bg-main/30" />
          <span className="z-[1] w-full text-center text-[55px] font-[550] leading-[65px] tracking-tighter">
            Why Recruitify ?
          </span>
          <Image
            src={Underlined}
            alt="underlined"
            className="absolute -bottom-3 z-[1] w-64"
          />
        </div>
        <span className="mb-10 mt-5 w-full max-w-prose text-center text-sm text-muted-foreground">
          Recruitify is designed to create highly aesthetic landing pages to
          stand out from the competition, as either an individual recruiter or a
          recruitment agency. Implement specialist job boards and CV
          applications sent directly to you, filling jobs efficiently.
        </span>
        <div className="grid w-full grid-cols-4 gap-5">
          {items.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Features;
