import Image from "next/image";

import { Plane } from "lucide-react";

import Dunes from "@/assets/img/dunes.jpg";

import MaxWidthWrapper from "../max-width-wrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import RadialGradient from "../ui/radial-gradient";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-screen w-full items-center justify-center bg-dot-black/[0.5] dark:bg-dot-white/[0.2]"
    >
      <RadialGradient />
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2.5">
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="size-1 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
        </div>
        <div className="mb-20 mt-5 flex w-full flex-col items-center justify-center gap-5">
          <span className="w-full text-center text-[48px] font-medium leading-[4rem] opacity-75">
            Start Validating Emails in Seconds
          </span>
          <span className="w-full text-center text-sm text-muted-foreground">
            Validate with Confidence - 99% Accuracy, No Hidden Fees, and a
            Money-Back Guarantee!.
          </span>
        </div>
        <div className="border-gray-750 divide-gray-750 relative grid h-1/2 w-full grid-cols-2 divide-x rounded-2xl border">
          <form className="col-span-1 grid w-full grid-cols-2 items-center justify-center gap-5 rounded-l-2xl bg-gray-100 p-10 dark:bg-[#0F1011]">
            <span className="col-span-2 w-full text-left text-4xl font-light opacity-85">
              Contact Us
            </span>
            <Input type="text" className="h-12 bg-muted" placeholder="John" />
            <Input type="text" className="h-12 bg-muted" placeholder="Doe" />
            <Input
              type="text"
              className="col-span-2 h-12 w-full bg-muted"
              placeholder="johndoe@example.com"
            />
            <Textarea
              rows={6}
              className="col-span-2 w-full resize-none bg-muted"
              placeholder="Talk to our Support Team."
            />
            <div className="col-span-2 flex w-full items-center justify-end">
              <Button type="submit" variant="default" size="lg">
                Let&apos;s Go <Plane />
              </Button>
            </div>
          </form>
          <div className="relative col-span-1 flex w-full flex-col items-center justify-center overflow-hidden rounded-r-2xl bg-gray-100 p-5 dark:bg-[#0F1011]">
            <Image
              src={Dunes}
              alt="aesthetic-dunes"
              className="z-0 h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
