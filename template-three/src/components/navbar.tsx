"use client";

import Link from "next/link";
import { useState } from "react";

import MaxWidthWrapper from "./max-width-wrapper";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  return (
    <nav className="fixed top-0 z-50 w-full p-5">
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-center rounded-full border bg-background/10 py-2.5 !pl-10 !pr-2.5 backdrop-blur-[2px]">
          <Link href="/" className="text-xl font-semibold">
            Emailify.
          </Link>
          <div className="flex flex-1 items-center justify-center gap-10">
            {["Home", "Features", "Pricing", "Testimonials", "Contact"].map(
              (item, idx) => (
                <div
                  onClick={() => setActiveLink(idx)}
                  className="group relative cursor-pointer"
                  key={idx}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="opacity-75 transition-all duration-150 group-hover:opacity-100"
                  >
                    {item}
                  </Link>
                  {idx === activeLink && (
                    <div className="absolute -bottom-1.5 flex w-full items-center justify-center">
                      <div className="mx-auto size-1 rounded-full bg-black opacity-75 transition-all duration-150 group-hover:opacity-100 dark:bg-white" />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
