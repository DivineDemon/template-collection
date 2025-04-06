"use client";

import { FastForward } from "lucide-react";

import { cn } from "@/lib/utils";

const FeatureCard = ({ item }: { item: BentoItem }) => {
  return (
    <div
      className={cn(
        "group/bento col-span-2 row-span-1 flex w-full flex-col justify-between space-y-4 rounded-xl border bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        item.className
      )}
    >
      <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="flex size-14 items-center justify-center rounded-full bg-main/30 p-4 shadow-md">
          <item.header className="size-full text-main" />
        </div>
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <item.icon className="size-5 text-main" />
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {item.title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
