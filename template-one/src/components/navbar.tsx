"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { WandSparkles } from "lucide-react";

import { Button } from "./ui/button";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full items-center justify-between gap-20 bg-white/10 py-2.5 pl-5 pr-2.5 backdrop-blur-sm"
    >
      <div className="w-[228px]">
        <WandSparkles className="size-5 text-main" />
      </div>
      <div className="flex items-center justify-center gap-20 text-sm">
        {["home", "features", "templates"].map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => setActiveTab(tab)}
            className="relative flex cursor-pointer flex-col items-center justify-center"
          >
            <span className="capitalize">{tab}</span>
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2.5 mx-auto size-1.5 rounded-full bg-main"
              />
            )}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          type="button"
          className="bg-main text-white shadow-none hover:bg-main/85"
        >
          Login
        </Button>
        <div className="mx-5 h-7 w-px border border-gray-300" />
        <div className="rounded-lg bg-main p-[2px] text-white shadow-none">
          <Button
            type="button"
            className="bg-white text-black shadow-none transition-colors hover:bg-white/85"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
