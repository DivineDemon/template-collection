import { Sparkle } from "lucide-react";

import { words } from "@/lib/constants";

import RadialGradient from "../ui/radial-gradient";

const Tape = () => {
  return (
    <div className="absolute overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gray-900 dark:bg-white">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-left gap-4 py-3 [animation-duration:30s]">
            {words.map((word, idx) => (
              <div key={idx} className="inline-flex items-center gap-4">
                <span className="text-sm font-bold uppercase text-white dark:text-gray-900">
                  {word}
                </span>
                <Sparkle className="size-6 -rotate-12 fill-white text-white dark:fill-gray-900 dark:text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
