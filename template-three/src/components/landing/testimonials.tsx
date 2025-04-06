import Image from "next/image";

import { testimonials } from "@/lib/constants";

import MaxWidthWrapper from "../max-width-wrapper";
import Card from "../ui/card";
import RadialGradient from "../ui/radial-gradient";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative flex h-screen w-full items-center justify-center bg-dot-black/[0.5] dark:bg-dot-white/[0.2]"
    >
      <RadialGradient />
      <MaxWidthWrapper className="flex flex-col items-center justify-end">
        <div className="flex w-full items-center justify-center gap-2.5">
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="size-1 rounded-full bg-black/75 dark:bg-white/75" />
          <div className="h-1 w-10 rounded-full bg-black/75 dark:bg-white/75" />
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-5">
          <span className="w-full text-center text-[48px] font-medium leading-[4rem] opacity-75">
            Trusted by Businesses Worldwide
          </span>
          <span className="w-full text-center text-sm text-muted-foreground">
            Real Experiences, Real Results: Discover What Our Clients Have to
            Say.
          </span>
        </div>
        <div className="mt-20 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-left gap-8 [animation-duration:60s] hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                    <Image
                      width={50}
                      height={50}
                      src={`${testimonial.image}`}
                      alt={testimonial.name}
                      className="aspect-square max-h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.designation}&nbsp;@{testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm opacity-65 md:mt-6 md:text-base">
                  {testimonial.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-5 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-right gap-8 [animation-duration:60s] hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                    <Image
                      width={50}
                      height={50}
                      src={`${testimonial.image}`}
                      alt={testimonial.name}
                      className="aspect-square max-h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.designation}&nbsp;@{testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm opacity-65 md:mt-6 md:text-base">
                  {testimonial.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
