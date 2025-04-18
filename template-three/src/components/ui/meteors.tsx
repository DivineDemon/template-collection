"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const meteors = new Array(number || 20).fill(true);

  return meteors.map((_, idx) => {
    const left = Math.floor(Math.random() * (400 - -400) + -400);
    const delay = Math.random() * (0.8 - 0.2) + 0.2;
    const duration = Math.floor(Math.random() * (10 - 2) + 2);

    return (
      <span
        key={"meteor" + idx}
        className={cn(
          "absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
          "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
          className
        )}
        style={{
          top: "0px",
          left: `${left}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      ></span>
    );
  });
};

export default Meteors;
