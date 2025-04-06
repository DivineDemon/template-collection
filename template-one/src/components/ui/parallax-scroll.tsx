"use client";

import Image from "next/image";
import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { cn } from "@/lib/utils";

const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();

  useEffect(() => {
    const animateLoop = async (controls: any, direction: number) => {
      while (true) {
        await controls.start({
          y: direction * -200,
          transition: { duration: 5, ease: "linear" },
        });
        await controls.start({
          y: 0,
          transition: { duration: 5, ease: "linear" },
        });
      }
    };

    animateLoop(controlsFirst, 1);
    animateLoop(controlsSecond, -1);
    animateLoop(controlsThird, 1);
  }, [controlsFirst, controlsSecond, controlsThird]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-full w-full items-start overflow-hidden", className)}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div animate={controlsFirst} key={"grid-1" + idx}>
              <Image
                src={el}
                className="!m-0 h-80 w-full rounded-lg object-cover object-left-top"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div animate={controlsSecond} key={"grid-2" + idx}>
              <Image
                src={el}
                className="!m-0 h-80 w-full rounded-lg object-cover object-left-top"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div animate={controlsThird} key={"grid-3" + idx}>
              <Image
                src={el}
                className="!m-0 h-80 w-full rounded-lg object-cover object-left-top"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
