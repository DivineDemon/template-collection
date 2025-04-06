"use client";

import { useTheme } from "next-themes";

import MaxWidthWrapper from "../max-width-wrapper";
import HoverBorderGradient from "../ui/hover-border-gradient";
import Meteors from "../ui/meteors";
import RadialGradient from "../ui/radial-gradient";
import Sparkles from "../ui/sparkles";

const Features = () => {
  const { theme } = useTheme();

  return (
    <div
      id="features"
      className="relative flex h-screen w-full items-center justify-center"
    >
      <RadialGradient />
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2.5">
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="size-1 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
        </div>
        <span className="my-5 w-full text-center text-[48px] font-medium leading-[4rem] opacity-75">
          Powerfully Ensuring Email Accuracy
        </span>
        <div className="relative mb-5 h-40 w-[40rem]">
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <Sparkles
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={600}
            className="h-full w-full"
            particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
          />
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
        <div className="grid w-full grid-cols-3 gap-6">
          <div className="col-span-1 flex h-full w-full flex-col items-center justify-between gap-3">
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 rounded-xl w-full bg-background overflow-hidden"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                Syntax Check
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Detect invalid email formats instantly.
              </span>
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 overflow-hidden rounded-xl w-full bg-background"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                Domain Verification
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Ensure emails are from active domains.
              </span>
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 overflow-hidden rounded-xl w-full bg-background"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                MX Record & SMTP Validation
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Verify if the email server exists.
              </span>
            </HoverBorderGradient>
          </div>
          <HoverBorderGradient
            as="div"
            containerClassName="relative h-full hover:scale-105 transition-all duration-200 overflow-hidden rounded-xl w-full bg-background"
            className="flex h-full w-full flex-col items-center justify-center gap-1.5 border-4 bg-background p-5 text-black/85 dark:text-white/75"
          >
            <Meteors number={50} />
            <span className="w-full text-left text-lg font-semibold">
              Role-based Email Detection
            </span>
            <span className="w-full text-left text-sm font-medium text-muted-foreground">
              Role-based Email Detection - Avoid generic emails (e.g., support@,
              sales@)
            </span>
          </HoverBorderGradient>
          <div className="col-span-1 flex h-full w-full flex-col items-center justify-between gap-3">
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 rounded-xl w-full bg-background overflow-hidden"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                Disposable Email Detection
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Prevent temporary email abuse.
              </span>
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 overflow-hidden rounded-xl w-full bg-background"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                Bulk Verification
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Upload and clean entire email lists.
              </span>
            </HoverBorderGradient>
            <HoverBorderGradient
              as="div"
              containerClassName="relative hover:scale-105 transition-all duration-200 overflow-hidden rounded-xl w-full bg-background"
              className="flex w-full flex-col items-center justify-center border-4 bg-background p-5 text-black/85 dark:text-white/75"
            >
              <Meteors number={50} />
              <span className="w-full text-left text-lg font-semibold">
                Real-time API
              </span>
              <span className="w-full text-left text-sm font-medium text-muted-foreground">
                Integrate email validation into your signup forms.
              </span>
            </HoverBorderGradient>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Features;
