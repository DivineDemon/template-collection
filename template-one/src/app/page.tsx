import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Templates from "@/components/landing/templates";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <Hero />
      <Features />
      <Templates />
    </div>
  );
};

export default Page;
