"use client";

import { useState } from "react";

import { Send } from "lucide-react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
import PlaceholdersAndVanishInput from "@/components/ui/placeholders-and-vanish-input";
import RadialGradient from "@/components/ui/radial-gradient";
import Spotlight from "@/components/ui/spotlight";
import { placeholders } from "@/lib/constants";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileUpload = async (files: File[]) => {
    if (file && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async () => {
    console.log(email);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-dot-black/[0.5] dark:bg-dot-white/[0.2]">
      <Spotlight />
      <RadialGradient />
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <span className="w-full text-center text-[60px] font-semibold leading-[65px] tracking-tighter opacity-75">
          Welcome, Buddy
          <br />
          Got emails to validate?
        </span>
        <span className="mt-2.5 w-full text-center text-sm text-black dark:font-light dark:text-muted-foreground">
          Start by entering an email for validation to
          <br />
          experience how it works.
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-14 flex w-2/3 items-center justify-center"
        >
          <div className="flex flex-1 items-center justify-center overflow-hidden rounded-full bg-muted pl-4 pr-1.5">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="h-[48px] w-[196px] rounded-full">
            <Send />
            Validate
          </Button>
        </form>
        <fieldset className="my-10 w-2/3 border-t border-black/50 dark:border-white/50">
          <legend className="px-5 text-center">or</legend>
        </fieldset>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full text-center text-lg opacity-75">
            Upload a File
          </span>
          <span className="mb-5 w-full text-center text-sm text-muted-foreground opacity-75">
            to get started with us.
          </span>
          <FileUpload onChange={handleFileUpload} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
